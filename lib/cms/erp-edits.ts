// lib/cms/erp-edits.ts
// B1/B2 — server-only client for ERP "edited pages": published visual edits to
// existing pages on this site (code-owned or CMS-created). Separate from
// lib/cms/cms.ts, which renders pages *created* in the CMS. The browser applies
// the edits (components/cms/ErpPageEdits.tsx) through the /api/erp-edits
// proxy; the server only uses the SEO fields (withEditedPageSeo).
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import {
  CMS_CACHE_SECONDS,
  CMS_SITE_DOMAIN,
  canonicalUrl,
  cmsEnabled,
  cmsGetJson,
  cmsWarn,
  isDev,
  memoFresh,
} from "./config";
import {
  normalizeEditPath,
  parseErpSections,
  type ErpEdit,
} from "./erp-edits-shared";
import { obj, str } from "./safe";

// After a failed list fetch, don't retry for this long on cached (server
// render / build) reads. Keeps builds fast while the ERP is down.
const FAILURE_BACKOFF_MS = 30_000;

// Slugs from the list are used to build the page URL; allow only plain paths.
const SLUG_REGEX = /^\/[a-z0-9\-._~%/]*$/;

export type EditedPageSeo = {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
};

export type EditedPage = {
  slug: string;
  version: number;
  seo: EditedPageSeo;
  edits: ErpEdit[];
};

const trimmed = (v: unknown) => str(v).trim();

async function fetchEditedPaths(): Promise<string[]> {
  const json = await cmsGetJson("/edited-pages");
  const pages = obj(obj(json).data).pages;
  if (!Array.isArray(pages)) return [];
  const paths = pages
    .map((p) => normalizeEditPath(trimmed(obj(p).slug)))
    .filter((slug) => SLUG_REGEX.test(slug));
  return [...new Set(paths)];
}

async function fetchEditedPage(slug: string): Promise<EditedPage | null> {
  const path =
    slug === "/"
      ? `/edited-page?slug=${encodeURIComponent("/")}`
      : `/edited-pages${slug.split("/").map(encodeURIComponent).join("/")}`;
  const json = await cmsGetJson(path);
  if (json === null) return null;
  const page = obj(obj(obj(json).data).page);
  if (!Array.isArray(page.sections)) return null;
  const seo = obj(page.seo);
  return {
    slug,
    version: typeof page.version === "number" ? page.version : 0,
    seo: {
      title: trimmed(seo.title),
      metaDescription: trimmed(seo.metaDescription),
      canonicalUrl: trimmed(seo.canonicalUrl),
      robots: trimmed(seo.robots),
      ogTitle: trimmed(seo.ogTitle),
      ogDescription: trimmed(seo.ogDescription),
      ogImage: trimmed(seo.ogImage),
    },
    edits: parseErpSections(page.sections),
  };
}

// unstable_cache so 404s are cached too; thrown errors are not.
const cacheOptions = {
  revalidate: CMS_CACHE_SECONDS,
  tags: ["erp-edited-pages"],
};
const fetchEditedPathsCached = isDev
  ? fetchEditedPaths
  : unstable_cache(
      fetchEditedPaths,
      ["erp-edited-paths", CMS_SITE_DOMAIN],
      cacheOptions,
    );
const fetchEditedPageCached = isDev
  ? fetchEditedPage
  : unstable_cache(
      fetchEditedPage,
      ["erp-edited-page", CMS_SITE_DOMAIN],
      cacheOptions,
    );

let lastFailureAt = 0;

// `fresh: true` skips the 60s cache (memoised for a few seconds instead). Used
// by /api/erp-edits — the edits the browser applies — so an ERP publish shows
// on the next poll / navigation. Server-rendered metadata keeps the cache.
type FetchOptions = { fresh?: boolean };

/** B1 — normalized paths ("/a/b", home "/") that have published edits. Empty on any error. */
export async function getEditedPaths({
  fresh = false,
}: FetchOptions = {}): Promise<string[]> {
  if (!cmsEnabled()) return [];
  if (!fresh && Date.now() - lastFailureAt < FAILURE_BACKOFF_MS) return [];
  try {
    return await (fresh
      ? memoFresh("edited-paths", fetchEditedPaths)
      : fetchEditedPathsCached());
  } catch (error) {
    if (!fresh) lastFailureAt = Date.now();
    cmsWarn("failed to fetch edited pages list:", error);
    return [];
  }
}

/**
 * B2 — published edits for a URL path, or null when there are none (or the ERP
 * is unreachable). Checks the list first, so unedited paths never hit the
 * per-page endpoint and never produce ERP 404s.
 */
export async function getEditedPage(
  path: string,
  { fresh = false }: FetchOptions = {},
): Promise<EditedPage | null> {
  const slug = normalizeEditPath(path);
  const paths = await getEditedPaths({ fresh });
  if (!paths.includes(slug)) return null;
  try {
    return await (fresh
      ? memoFresh(`edited-page:${slug}`, () => fetchEditedPage(slug))
      : fetchEditedPageCached(slug));
  } catch (error) {
    cmsWarn(`failed to fetch edited page ${slug}:`, error);
    return null;
  }
}

/**
 * Live (browser-facing) variant of getEditedPage: always fresh, and it THROWS
 * when the ERP can't be read, so the caller can answer "unknown" instead of
 * "no edits" — a transient ERP failure must never strip edits off the page.
 */
export async function getEditedPageLive(
  path: string,
): Promise<EditedPage | null> {
  if (!cmsEnabled()) return null;
  const slug = normalizeEditPath(path);
  const paths = await memoFresh("edited-paths", fetchEditedPaths);
  if (!paths.includes(slug)) return null;
  return memoFresh(`edited-page:${slug}`, () => fetchEditedPage(slug));
}

/**
 * B4 (SEO) — overlays an edited page's SEO fields on a route's own metadata,
 * server-side. Only fields the edited page sets are replaced; with no edits
 * the route's metadata is returned unchanged.
 */
/** Site-wide social defaults. Next.js replaces the root layout's
 * `openGraph` object whenever a page sets its own, so pages lost
 * og:site_name, og:type and (on 124 pages) og:image, leaving a
 * summary_large_image Twitter card with no image. Page values always win. */
const DEFAULT_OG_IMAGE = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "Clickmasters software development company",
};

function withSocialDefaults(metadata: Metadata): Metadata {
  const og = (metadata.openGraph ?? {}) as Record<string, unknown>;
  const rawTitle = metadata.title as
    | string
    | { absolute?: string; default?: string }
    | null
    | undefined;
  const title =
    typeof rawTitle === "string"
      ? rawTitle
      : (rawTitle?.absolute ?? rawTitle?.default);
  const images = og.images;
  const hasImages = Array.isArray(images) ? images.length > 0 : Boolean(images);
  return {
    ...metadata,
    openGraph: {
      type: "website",
      siteName: "Clickmasters Software Development Company",
      locale: "en_US",
      ...(title ? { title } : {}),
      ...(metadata.description ? { description: metadata.description } : {}),
      ...og,
      images: hasImages ? images : [DEFAULT_OG_IMAGE],
    } as Metadata["openGraph"],
  };
}

export async function withEditedPageSeo(
  path: string,
  metadata: Metadata,
): Promise<Metadata> {
  return withSocialDefaults(await applyEditedPageSeo(path, metadata));
}

async function applyEditedPageSeo(
  path: string,
  metadata: Metadata,
): Promise<Metadata> {
  const page = await getEditedPage(path);
  if (!page) return metadata;
  const { seo } = page;
  const ogImage = /^https?:\/\//i.test(seo.ogImage) ? seo.ogImage : "";
  const hasOg = Boolean(seo.ogTitle || seo.ogDescription || ogImage);

  return {
    ...metadata,
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.metaDescription ? { description: seo.metaDescription } : {}),
    ...(seo.robots ? { robots: seo.robots } : {}),
    ...(seo.canonicalUrl
      ? {
          alternates: {
            ...metadata.alternates,
            canonical: canonicalUrl(seo.canonicalUrl),
          },
        }
      : {}),
    ...(hasOg
      ? {
          openGraph: {
            ...metadata.openGraph,
            ...(seo.ogTitle ? { title: seo.ogTitle } : {}),
            ...(seo.ogDescription ? { description: seo.ogDescription } : {}),
            ...(ogImage ? { images: [ogImage] } : {}),
          },
        }
      : {}),
  };
}
