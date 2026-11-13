// lib/cms/erp-edits-dom.ts
// Browser-only DOM engine for ERP page edits (B4/B6): resolves selectors,
// applies edits in the ERP editor's order and undoes every change exactly.
// Used by components/cms/ErpPageEdits.tsx; kept framework-free so it can be
// tested against a plain DOM.
import { isCopySelector, isSafeStyle, type ErpEdit } from "./erp-edits-shared";

const MAX_WAIT_FOR_DOM_MS = 1500;
const COPY_ID_REGEX = /^[A-Za-z0-9-]+$/;

const warn = (...args: unknown[]) => {
  if (process.env.NODE_ENV !== "production")
    console.warn("[erp-edits]", ...args);
};

/* ---------------------------- DOM resolution ---------------------------- */

export type Styled = HTMLElement | SVGElement;

export function query(selector: string): Styled | null {
  try {
    const el = document.querySelector(selector);
    return el && "style" in el ? (el as Styled) : null;
  } catch {
    return null; // invalid selector
  }
}

/** Plain selectors that don't match yet (copy selectors never count). */
export function missingPlain(edits: ErpEdit[]): number {
  let missing = 0;
  for (const edit of edits) {
    const selectors =
      edit.type === "sectionMove"
        ? [edit.selector, edit.target]
        : [edit.selector];
    for (const s of selectors) if (!isCopySelector(s) && !query(s)) missing++;
  }
  return missing;
}

/**
 * Waits for the route's DOM to commit (one animation frame), then briefly
 * until every plain selector matches — or the deadline passes.
 */
export function waitForDom(
  edits: ErpEdit[],
  isCancelled: () => boolean,
): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      if (isCancelled() || missingPlain(edits) === 0) return resolve();
      let frame = 0;
      const finish = () => {
        observer.disconnect();
        clearTimeout(timer);
        cancelAnimationFrame(frame);
        resolve();
      };
      const observer = new MutationObserver(() => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          if (isCancelled() || missingPlain(edits) === 0) finish();
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
      const timer = setTimeout(() => {
        const missing = missingPlain(edits);
        if (missing) warn(`${missing} edit target(s) not found on this page`);
        finish();
      }, MAX_WAIT_FOR_DOM_MS);
    });
  });
}

/* ---------------------------- apply / revert ---------------------------- */

export class EditSession {
  // Original style attribute of every element touched (restored last).
  private styles = new Map<Styled, string | null>();
  // Structural changes (text, moves, copies), undone in reverse order.
  private undo: (() => void)[] = [];

  private setStyle(el: Styled, property: string, value: string) {
    if (!this.styles.has(el)) this.styles.set(el, el.getAttribute("style"));
    el.style.setProperty(property, value, "important");
  }

  private editElement(
    el: Styled,
    edit: Extract<ErpEdit, { type: "elementEdit" }>,
  ) {
    if (typeof edit.text === "string") {
      const nodes = Array.from(el.childNodes);
      this.undo.push(() => el.replaceChildren(...nodes));
      el.textContent = edit.text; // never innerHTML
    }
    for (const [property, value] of edit.styles ?? []) {
      if (!isSafeStyle(property, value)) continue;
      this.setStyle(el, property, value);
      // Theme rules on descendants would win otherwise.
      if (property === "color" || property === "text-decoration") {
        el.querySelectorAll("*").forEach((child) => {
          if ("style" in child) this.setStyle(child as Styled, property, value);
        });
      }
    }
  }

  private move(el: Styled, target: Styled, position: "before" | "after") {
    const parent = el.parentNode;
    if (!parent || target === el || el.contains(target)) return;
    const next = el.nextSibling;
    this.undo.push(() => {
      try {
        if (next && next.parentNode === parent) parent.insertBefore(el, next);
        else parent.appendChild(el);
      } catch (error) {
        warn("could not restore moved section", error);
      }
    });
    if (position === "before") target.before(el);
    else target.after(el);
  }

  private duplicate(el: Styled, id: string) {
    const copy = el.cloneNode(true) as Styled;
    copy.setAttribute("data-erp-clone", id);
    el.after(copy);
    // React doesn't know about copies: always take them out again on cleanup.
    this.undo.push(() => copy.remove());
  }

  /** B4, in the ERP editor's order. Edits are already sorted by `order`. */
  apply(edits: ErpEdit[]) {
    // Pass 1: resolve every plain selector against the original DOM.
    const pass1 = new Map<string, Styled | null>();
    const plain = (s: string) => {
      if (!pass1.has(s)) pass1.set(s, query(s));
      return pass1.get(s) ?? null;
    };
    for (const e of edits) {
      if (!isCopySelector(e.selector)) plain(e.selector);
      if (e.type === "sectionMove" && !isCopySelector(e.target))
        plain(e.target);
    }

    // Create duplicates in order.
    for (const e of edits) {
      if (e.type !== "sectionDuplicate" || !COPY_ID_REGEX.test(e.id)) continue;
      const el = isCopySelector(e.selector)
        ? query(e.selector)
        : plain(e.selector);
      if (el?.isConnected) this.duplicate(el, e.id);
    }

    // Pass 2: copy selectors resolve now that data-erp-clone exists.
    const resolve = (s: string): Styled | null => {
      const el = isCopySelector(s) ? query(s) : plain(s);
      return el?.isConnected ? el : null;
    };

    // All element edits, in order (plain and copy-targeting).
    for (const e of edits) {
      if (e.type !== "elementEdit") continue;
      const el = resolve(e.selector);
      if (el) this.editElement(el, e);
    }

    // Moves and removals, in order. Skip nodes no longer connected.
    for (const e of edits) {
      if (e.type === "sectionRemove") {
        const el = resolve(e.selector);
        if (el) this.setStyle(el, "display", "none"); // hide, never remove (B6)
      } else if (e.type === "sectionMove") {
        const el = resolve(e.selector);
        const target = resolve(e.target);
        if (el && target) this.move(el, target, e.position);
      }
    }
  }

  revert() {
    // Reverse order: each change is undone against the DOM it saw.
    for (const step of this.undo.reverse()) step();
    this.styles.forEach((original, el) => {
      if (original === null) el.removeAttribute("style");
      else el.setAttribute("style", original);
    });
    this.undo = [];
    this.styles.clear();
  }
}
