// components/cms/cmsContent.ts
// Helpers for reading untrusted CMS section content.
import { safeHref, safeImage } from "@/lib/cms/safe";

export { safeHref, safeImage };

export type Content = Record<string, unknown>;

/** First non-empty string among the given keys (the CMS has legacy aliases). */
export function pick(c: Content, ...keys: string[]): string {
  for (const k of keys) {
    const v = c[k];
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number" && Number.isFinite(v)) return String(v);
  }
  return "";
}

export function items(c: Content): Content[] {
  const v = c.items;
  return Array.isArray(v)
    ? v.filter(
        (i): i is Content => !!i && typeof i === "object" && !Array.isArray(i),
      )
    : [];
}

export type CmsButton = { text: string; link: string; newTab?: boolean };

/** primary / secondary button (with the CMS's legacy field names). */
export function button(
  c: Content,
  prefix: "primary" | "secondary",
): CmsButton | undefined {
  const text =
    pick(c, `${prefix}Label`, `${prefix}Button`) ||
    (prefix === "primary" ? pick(c, "buttonLabel", "ctaLabel") : "");
  const link =
    safeHref(pick(c, `${prefix}Url`, `${prefix}Link`)) ||
    (prefix === "primary" ? safeHref(pick(c, "buttonUrl", "ctaUrl")) : "");
  return text && link ? { text, link } : undefined;
}

/** Bounded integer setting, e.g. columns / limit. */
export function intSetting(
  v: unknown,
  min: number,
  max: number,
  fallback: number,
): number {
  const n = typeof v === "number" ? v : typeof v === "string" ? Number(v) : NaN;
  return Number.isFinite(n)
    ? Math.min(Math.max(Math.round(n), min), max)
    : fallback;
}
