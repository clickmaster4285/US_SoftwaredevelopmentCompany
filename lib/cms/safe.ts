// lib/cms/safe.ts
// Pure validators for untrusted ERP/CMS data. Safe to import on server and client.

export const str = (v: unknown): string => (typeof v === "string" ? v : "");
export const obj = (v: unknown): Record<string, unknown> =>
  v && typeof v === "object" && !Array.isArray(v)
    ? (v as Record<string, unknown>)
    : {};
export const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);

/** ASCII control characters (incl. tab/newline) inside a URL are a classic scheme-filter bypass. */
function hasControlChars(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c <= 0x1f || c === 0x7f) return true;
  }
  return false;
}

/**
 * Link URLs: http:, https:, mailto:, tel:, site-relative paths and #anchors.
 * Everything else (javascript:, data:, vbscript:, protocol-relative //host) → "".
 */
export function safeHref(input: string): string {
  const url = (input || "").trim();
  if (!url) return "";
  if (hasControlChars(url)) return "";
  if (url.startsWith("#")) return url;
  if (url.startsWith("/"))
    return url.startsWith("//") || url.includes("\\") ? "" : url;
  if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
  // Bare relative paths ("contact", "./about") have no scheme: site-relative.
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url) && !url.startsWith("\\")) return url;
  return "";
}

/** Image URLs: http(s), site-relative, or inline data:image/… only. */
export function safeImage(input: string): string {
  const url = (input || "").trim();
  if (!url || hasControlChars(url)) return "";
  if (url.startsWith("/"))
    return url.startsWith("//") || url.includes("\\") ? "" : url;
  if (/^https?:\/\//i.test(url)) return url;
  if (/^data:image\/[a-z0-9.+-]+[;,]/i.test(url)) return url;
  return "";
}

/** #rgb / #rrggbb / #rrggbbaa only — they end up in inline CSS variables. */
export function safeColor(input: unknown): string {
  const c = str(input).trim();
  return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(c) ? c : "";
}

/** WCAG relative luminance (0–1) of a hex colour. */
export function luminance(hex: string): number {
  let h = hex.replace("#", "");
  if (h.length === 3) h = [...h].map((c) => c + c).join("");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lin = (c: number) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** Readable text colour (#fff or near-black) for a hex background. */
export function contrastText(hex: string): string {
  return luminance(hex) > 0.45 ? "#0f172a" : "#ffffff";
}

/** Link props: internal paths stay in-tab; external or newTab links open safely. */
export function linkTarget(href: string, newTab?: boolean) {
  const external = /^https?:\/\//i.test(href);
  return newTab || external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
