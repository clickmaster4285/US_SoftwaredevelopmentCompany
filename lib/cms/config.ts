// lib/cms/config.ts
// Server-side ERP/CMS configuration and a fail-safe JSON fetcher.
// Everything comes from env; with CMS_API_URL or CMS_SITE_DOMAIN unset the
// integration is simply off and every page renders exactly as before.
import { pageUrl } from "@/lib/site";

export const CMS_API_URL = (process.env.CMS_API_URL ?? "")
  .trim()
  .replace(/\/+$/, "");
export const CMS_SITE_DOMAIN = (process.env.CMS_SITE_DOMAIN ?? "").trim();

export const cmsEnabled = () => Boolean(CMS_API_URL && CMS_SITE_DOMAIN);

/** Seconds a cached ERP response is reused on the server (spec: ~60s). */
export const CMS_CACHE_SECONDS = 60;
const TIMEOUT_MS = 5000;
const DOWN_BACKOFF_MS = 30_000;

export const isDev = process.env.NODE_ENV === "development";

/** Dev-only warning; production stays silent. */
export function cmsWarn(...args: unknown[]) {
  if (isDev) console.warn("[cms]", ...args);
}

/** {CMS_API_URL}/public/{CMS_SITE_DOMAIN}{path} */
export function cmsUrl(path = "") {
  return `${CMS_API_URL}/public/${encodeURIComponent(CMS_SITE_DOMAIN)}${path}`;
}

export class CmsHttpError extends Error {}

/**
 * GET JSON from the ERP. Returns null on 404 (= "doesn't exist", cacheable).
 * Throws on network errors / timeouts / 5xx so callers never cache an outage.
 */
export async function cmsGetJson(path: string): Promise<unknown | null> {
  const url = cmsUrl(path);
  // After a network failure / timeout, fail fast for a while instead of making
  // every request wait for the timeout again. Cached readers keep serving
  // their last good copy meanwhile (unstable_cache keeps it on errors).
  const down = globalThis as { __cmsDownUntil?: number };
  if ((down.__cmsDownUntil ?? 0) > Date.now()) {
    throw new CmsHttpError(`ERP unreachable (backing off): ${url}`);
  }
  let res: Response;
  try {
    res = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (error) {
    down.__cmsDownUntil = Date.now() + DOWN_BACKOFF_MS;
    throw error;
  }
  if (res.status === 404) return null;
  if (!res.ok) throw new CmsHttpError(`${url} responded ${res.status}`);
  return res.json();
}

/**
 * Per-process memo for "fresh" reads made on behalf of browsers (live
 * updates). Many open tabs polling the same path share one ERP request per
 * window, so the ERP sees at most ~1 request / FRESH_MS / path.
 *
 * The ERP rate-limits to 120 requests/min per IP, so fresh reads also share a
 * budget (FRESH_BUDGET_PER_MIN, leaving headroom for cached server reads).
 * Over budget, or when the ERP errors (429/5xx/timeout), the last good value
 * is served instead — live updates slow down, but nothing on screen reverts.
 */
const FRESH_MS = 2500;
const FRESH_BUDGET_PER_MIN = 90;

type FreshEntry = {
  at: number;
  promise: Promise<unknown>;
  hasLast: boolean;
  last?: unknown;
};
const g = globalThis as {
  __cmsFreshMemo?: Map<string, FreshEntry>;
  __cmsFreshCalls?: number[];
};
// On globalThis so every route bundle shares one memo and one budget.
const freshMemo = (g.__cmsFreshMemo ??= new Map());
const freshCalls = (g.__cmsFreshCalls ??= []);

function takeFreshToken(): boolean {
  const now = Date.now();
  while (freshCalls.length && now - freshCalls[0] >= 60_000) freshCalls.shift();
  if (freshCalls.length >= FRESH_BUDGET_PER_MIN) return false;
  freshCalls.push(now);
  return true;
}

export function memoFresh<T>(key: string, load: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const hit = freshMemo.get(key);
  if (hit && now - hit.at < FRESH_MS) return hit.promise as Promise<T>;
  if (!takeFreshToken()) {
    if (hit?.hasLast) return Promise.resolve(hit.last as T);
    return Promise.reject(new CmsHttpError("ERP live-update budget exhausted"));
  }
  const entry: FreshEntry = {
    at: now,
    promise: Promise.resolve(),
    hasLast: hit?.hasLast ?? false,
    last: hit?.last,
  };
  entry.promise = load().then(
    (value) => {
      entry.last = value;
      entry.hasLast = true;
      return value;
    },
    (error) => {
      if (entry.hasLast) return entry.last;
      freshMemo.delete(key);
      throw error;
    },
  );
  freshMemo.set(key, entry);
  if (freshMemo.size > 500) {
    for (const [k, v] of freshMemo)
      if (now - v.at >= 10 * 60_000) freshMemo.delete(k);
  }
  return entry.promise as Promise<T>;
}

/** Absolute canonical URL: absolute http(s) URLs are kept, paths are put on SITE_URL. */
export function canonicalUrl(value: string): string {
  const v = value.trim();
  if (/^https?:\/\//i.test(v)) return v;
  return pageUrl(v.startsWith("/") ? v : `/${v}`);
}

/** Short stable hash used to detect changed ERP content. */
export function signature(value: unknown): string {
  const s = JSON.stringify(value) ?? "";
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return `${(h >>> 0).toString(36)}-${s.length.toString(36)}`;
}
