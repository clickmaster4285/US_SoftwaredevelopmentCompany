// components/cms/CmsRichText.tsx
// Renders CMS rich-text HTML as React elements through a tag allow-list.
// Nothing is injected as raw HTML: text goes through React (escaped), only
// allow-listed tags are created, and the only attribute kept is a validated
// href on links. Unknown tags are unwrapped; script-like tags are dropped
// together with their content.

import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { safeHref } from "./cmsContent";

// ClickMasters typography (globals.css tokens) — CMS HTML never brings its own styles.
const TAG_CLASSES: Record<string, string> = {
  h1: "text-3xl md:text-5xl font-semibold tracking-tight text-foreground mt-12 mb-4 first:mt-0",
  h2: "text-2xl md:text-4xl font-semibold tracking-tight text-foreground mt-12 mb-4 first:mt-0",
  h3: "text-xl md:text-2xl font-semibold tracking-tight text-foreground mt-10 mb-3 first:mt-0",
  h4: "text-lg md:text-xl font-semibold text-foreground mt-8 mb-2 first:mt-0",
  h5: "text-base font-semibold text-foreground mt-6 mb-2 first:mt-0",
  h6: "text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground mt-6 mb-2 first:mt-0",
  p: "text-base md:text-lg leading-8 text-muted-foreground mt-4 first:mt-0",
  ul: "list-disc pl-6 mt-4 space-y-2 text-base md:text-lg leading-8 text-muted-foreground marker:text-primary",
  ol: "list-decimal pl-6 mt-4 space-y-2 text-base md:text-lg leading-8 text-muted-foreground marker:text-primary",
  li: "pl-1",
  blockquote:
    "my-8 rounded-2xl border-l-4 border-primary bg-muted/60 px-6 py-5 text-lg md:text-xl italic text-foreground",
  strong: "font-semibold text-foreground",
  b: "font-semibold text-foreground",
  em: "italic",
  i: "italic",
  u: "underline underline-offset-4",
  code: "font-mono text-sm rounded bg-muted px-1.5 py-0.5",
  pre: "font-mono text-sm rounded-2xl bg-muted p-4 mt-4 overflow-x-auto",
  hr: "my-10 border-border",
  br: "",
  a: "font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-70",
};
const VOID_TAGS = new Set(["br", "hr"]);
const BLOCK_TAGS = new Set([
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "ol",
  "blockquote",
  "pre",
  "hr",
  "div",
  "table",
]);
const DROP_TAGS = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "template",
  "noscript",
  "svg",
  "math",
  "textarea",
  "select",
  "button",
  "form",
  "head",
  "title",
]);

type Node = { tag: string; href?: string; children: (Node | string)[] };

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(text: string) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
    if (e[0] === "#") {
      const code =
        e[1] === "x" || e[1] === "X"
          ? parseInt(e.slice(2), 16)
          : parseInt(e.slice(1), 10);
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : "";
    }
    return ENTITIES[e.toLowerCase()] ?? m;
  });
}

function parse(html: string): Node {
  const root: Node = { tag: "", children: [] };
  // Stack of open elements; tag "" = unwrapped unknown element (kept for matching).
  const stack: { name: string; node: Node }[] = [{ name: "#root", node: root }];
  const top = () => stack[stack.length - 1].node;
  let dropping: { name: string; depth: number } | null = null;

  const token =
    /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:[^>"']|"[^"]*"|'[^']*')*)>|[^<]+|</g;
  for (const m of html.matchAll(token)) {
    const [raw, closing, rawName, attrs = ""] = m;
    if (raw.startsWith("<!--")) continue;

    if (!rawName) {
      if (!dropping) top().children.push(decodeEntities(raw));
      continue;
    }

    const name = rawName.toLowerCase();
    const selfClosing = /\/\s*$/.test(attrs);

    if (dropping) {
      if (name === dropping.name && !selfClosing)
        dropping.depth += closing ? -1 : 1;
      if (dropping.depth === 0) dropping = null;
      continue;
    }

    if (closing) {
      const idx = stack.map((s) => s.name).lastIndexOf(name);
      if (idx > 0) stack.length = idx;
      continue;
    }

    if (DROP_TAGS.has(name)) {
      if (!selfClosing) dropping = { name, depth: 1 };
      continue;
    }

    // HTML's implied end tags: a block closes an open <p>, a new <li> closes the previous one.
    // Keeps the output valid (no <p> inside <p>), which React hydration requires.
    if (BLOCK_TAGS.has(name)) {
      const p = stack.map((s) => s.name).lastIndexOf("p");
      if (p > 0) stack.length = p;
    }
    if (name === "li" && stack[stack.length - 1].name === "li") stack.pop();

    const allowed = name in TAG_CLASSES;
    const node: Node = { tag: allowed ? name : "", children: [] };
    if (name === "a") {
      const href = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(
        attrs,
      );
      node.href = safeHref(
        decodeEntities((href?.[1] ?? href?.[2] ?? href?.[3] ?? "").trim()),
      );
    }
    top().children.push(node);
    if (!VOID_TAGS.has(name) && !selfClosing) stack.push({ name, node });
  }
  return root;
}

function render(node: Node | string, key: number): ReactNode {
  if (typeof node === "string") return node;
  const children = node.children.map(render);
  const className = TAG_CLASSES[node.tag];

  switch (node.tag) {
    case "":
      return <Fragment key={key}>{children}</Fragment>;
    case "br":
      return <br key={key} />;
    case "hr":
      return <hr key={key} className={className} />;
    case "a":
      if (!node.href) return <Fragment key={key}>{children}</Fragment>;
      if (node.href.startsWith("/")) {
        return (
          <Link key={key} href={node.href} className={className}>
            {children}
          </Link>
        );
      }
      return /^https?:\/\//i.test(node.href) ? (
        <a
          key={key}
          href={node.href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <a key={key} href={node.href} className={className}>
          {children}
        </a>
      );
    default: {
      const Tag = node.tag as "p";
      return (
        <Tag key={key} className={className}>
          {children}
        </Tag>
      );
    }
  }
}

export default function CmsRichText({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  if (!html.trim()) return null;
  return <div className={className}>{parse(html).children.map(render)}</div>;
}
