"use client";
// components/cms/ErpPageEdits.tsx
// B4–B6: applies published ERP "edited page" instructions (text, styles,
// section duplicates / moves / removals) to the current route's DOM. Mounted
// once in the root layout, before the page content, so it covers code-owned
// and CMS-created pages, on first load and on every client-side navigation.
// Renders nothing.
//
// Live updates: while the tab is visible it re-checks the ERP (on focus and
// every LIVE_POLL_MS). Changed edits are reverted and re-applied in place; a
// changed CMS-created page is refreshed with router.refresh() (edits are
// reverted first so React patches the DOM it rendered, then re-applied).
//
// React safety: every change is recorded and undone in the layout-effect
// cleanup. React runs that cleanup in the commit's mutation phase, and this
// component sits before the page in <body>, so the DOM is back to the shape
// React rendered before React patches or removes the old route's nodes.
// Removals only hide (display:none !important), moved nodes go back to their
// original parent + next sibling, copies (data-erp-clone) are removed.
import { usePathname, useRouter } from "next/navigation";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { normalizeEditPath, type ErpEdit } from "@/lib/cms/erp-edits-shared";
import { EditSession, waitForDom } from "@/lib/cms/erp-edits-dom";

const MAX_HIDE_MS = 1500;
const LIST_TTL_MS = 60_000;
const LIVE_POLL_MS =
  Math.max(0, Number(process.env.NEXT_PUBLIC_CMS_LIVE_POLL_SECONDS ?? 3) || 0) *
  1000;
const REFRESH_TIMEOUT_MS = 10_000;
const MAX_REFRESH_TRIES = 5;
const EDITS_API = "/api/erp-edits";
const STATUS_API = "/api/cms-page-status";

const warn = (...args: unknown[]) => {
  if (process.env.NODE_ENV !== "production")
    console.warn("[erp-edits]", ...args);
};

/* ------------------------------ data access ------------------------------ */

async function getJson(url: string): Promise<Record<string, unknown>> {
  const res = await fetch(url, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`${url} responded ${res.status}`);
  return ((await res.json()) ?? {}) as Record<string, unknown>;
}

// B1 list, kept for 60s: only used to decide whether to hide <main> before
// paint on client navigations. Edits themselves are always asked fresh.
let pathsCache: {
  at: number;
  promise: Promise<Set<string>>;
  value?: Set<string>;
} | null = null;

function editedPaths() {
  if (pathsCache && Date.now() - pathsCache.at < LIST_TTL_MS) return pathsCache;
  const entry: NonNullable<typeof pathsCache> = {
    at: Date.now(),
    promise: getJson(EDITS_API)
      .then(
        (json) =>
          new Set(
            (Array.isArray(json.paths) ? json.paths : []).filter(
              (p): p is string => typeof p === "string",
            ),
          ),
      )
      .catch((error) => {
        warn("could not load edited pages list", error);
        return new Set<string>();
      }),
  };
  entry.promise.then((value) => (entry.value = value));
  pathsCache = entry;
  return entry;
}

/**
 * B2 via the proxy (which checks the B1 list first). Never throws; null means
 * "couldn't read the ERP right now" — callers keep what is applied.
 */
async function fetchEdits(path: string): Promise<ErpEdit[] | null> {
  try {
    const json = await getJson(`${EDITS_API}?path=${encodeURIComponent(path)}`);
    return Array.isArray(json.edits) ? (json.edits as ErpEdit[]) : [];
  } catch (error) {
    warn("could not load page edits", error);
    return null;
  }
}

// Start loading the list as soon as the client bundle runs.
if (typeof window !== "undefined") editedPaths();

/** Anti-flicker: hides <main> (≤1.5s) while edits load; returns an idempotent reveal. */
function hideMain(): () => void {
  if (document.documentElement.dataset.antiFlicker === "off") return () => {};
  const main = document.querySelector<HTMLElement>("main");
  if (!main) return () => {};
  const value = main.style.getPropertyValue("opacity");
  const priority = main.style.getPropertyPriority("opacity");
  main.style.setProperty("opacity", "0", "important");
  let revealed = false;
  const timer = setTimeout(() => reveal(), MAX_HIDE_MS);
  function reveal() {
    if (revealed) return;
    revealed = true;
    clearTimeout(timer);
    if (value) main!.style.setProperty("opacity", value, priority);
    else main!.style.removeProperty("opacity");
  }
  return reveal;
}

const editsKey = (edits: ErpEdit[]) => JSON.stringify(edits);

/* ------------------------------- component ------------------------------ */

export default function ErpPageEdits() {
  const pathname = usePathname();
  const router = useRouter();
  const path = normalizeEditPath(pathname ?? "/");

  // Bumped when live polling finds different edits → revert + re-apply.
  const [generation, setGeneration] = useState(0);
  // "refresh" while a CMS-created page re-renders with new content: edits stay
  // reverted until React has committed the new tree.
  const [phase, setPhase] = useState<"idle" | "refresh">("idle");
  const [refreshPending, startTransition] = useTransition();
  const refreshStarted = useRef(false);

  // Edits found by the poller for a path, consumed by the next apply.
  const polled = useRef<{ path: string; edits: ErpEdit[] } | null>(null);
  // What is currently applied (for change detection).
  const applied = useRef<{ path: string; key: string } | null>(null);
  // Refreshes attempted for the ERP's current page signature (bounded retries
  // while the server's cache catches up with a publish).
  const refreshTries = useRef<{ sig: string; n: number } | null>(null);
  const recheck = useRef<() => void>(() => {});

  useLayoutEffect(() => {
    if (phase === "refresh") return;
    const session = new EditSession();
    let cancelled = false;
    let reveal = () => {};
    const fromPoll: ErpEdit[] | null =
      polled.current?.path === path ? polled.current.edits : null;
    polled.current = null;

    // On client navigations the list is known: hide before paint so the
    // unedited page never flashes. (On a first load it is still loading.)
    const list = editedPaths();
    if (!fromPoll && list.value?.has(path)) reveal = hideMain();

    (async () => {
      let edits = fromPoll;
      if (!edits) {
        const known = list.value ?? (await list.promise);
        if (cancelled) return;
        // Only paths in the B1 list are asked for (no ERP 404s) — a first
        // visit after a publish is picked up by the check right after this.
        edits = known.has(path) ? ((await fetchEdits(path)) ?? []) : [];
      }
      if (cancelled) return;
      applied.current = { path, key: editsKey(edits) };
      // Initial load / navigation: verify against the ERP right away instead
      // of waiting for the next poll tick.
      if (!fromPoll) recheck.current();
      if (edits.length === 0) return;
      await waitForDom(edits, () => cancelled);
      if (cancelled) return;
      // Reveal and apply in the same task: no paint in between, and the
      // recorded <main> style never includes the temporary opacity.
      reveal();
      session.apply(edits);
    })()
      .catch((error) => warn("could not apply edits", error))
      .finally(() => reveal());

    return () => {
      cancelled = true;
      reveal();
      session.revert();
    };
  }, [path, generation, phase]);

  // Drive router.refresh() for a changed CMS page while edits are reverted.
  useEffect(() => {
    if (phase !== "refresh") return;
    if (!refreshStarted.current) {
      refreshStarted.current = true;
      startTransition(() => router.refresh());
      const timer = setTimeout(() => {
        refreshStarted.current = false;
        setPhase("idle");
      }, REFRESH_TIMEOUT_MS);
      return () => clearTimeout(timer);
    }
    if (!refreshPending) {
      refreshStarted.current = false;
      setPhase("idle");
      // Verify the new render really carries the published signature; the
      // server cache may lag the publish by a moment.
      // (Not cleared on re-render: setPhase above re-runs this effect.
      // check() itself is a no-op once the poller is disposed.)
      setTimeout(() => recheck.current(), 1200);
    }
  }, [phase, refreshPending, router]);

  // Live updates: poll while visible, and immediately when the tab regains focus.
  // LIVE_POLL_MS = 0 keeps only the on-focus check.
  useEffect(() => {
    let busy = false;
    let disposed = false;

    async function check() {
      if (busy || disposed || document.visibilityState !== "visible") return;
      busy = true;
      try {
        const rendered =
          document
            .querySelector("[data-cms-page]")
            ?.getAttribute("data-cms-signature") ?? null;
        const [edits, status] = await Promise.all([
          fetchEdits(path),
          rendered !== null
            ? getJson(
                `${STATUS_API}?path=${encodeURIComponent(path)}&rendered=${encodeURIComponent(rendered)}`,
              ).catch(() => null)
            : Promise.resolve(null),
        ]);
        if (disposed) return;

        if (status) {
          // Compare the ERP's current signature with the one actually rendered.
          const sig =
            typeof status.signature === "string" ? status.signature : null;
          if (sig && rendered && sig !== rendered) {
            const tries =
              refreshTries.current?.sig === sig
                ? refreshTries.current.n + 1
                : 1;
            refreshTries.current = { sig, n: tries };
            if (tries <= MAX_REFRESH_TRIES) {
              polled.current = edits ? { path, edits } : null;
              setPhase("refresh");
              return;
            }
          }
        }

        const current = applied.current;
        if (
          edits &&
          current &&
          current.path === path &&
          current.key !== editsKey(edits)
        ) {
          polled.current = { path, edits };
          setGeneration((g) => g + 1);
        }
      } finally {
        busy = false;
      }
    }

    recheck.current = () => void check();
    const onVisible = () => {
      if (document.visibilityState === "visible") void check();
    };
    const timer = LIVE_POLL_MS
      ? setInterval(() => void check(), LIVE_POLL_MS)
      : undefined;
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    // First check now: a stale cached copy of a created page (ISR) is
    // replaced within a second or two of loading, not after the first tick.
    void check();
    return () => {
      disposed = true;
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, [path]);

  return null;
}
