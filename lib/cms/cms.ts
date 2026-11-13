// lib/cms/cms.ts
// A2/A3/A7 — server-only client for pages *created* in the ERP/CMS.
// Only the published snapshot is ever served; drafts come back 404.
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import {
  CMS_CACHE_SECONDS,
  CMS_SITE_DOMAIN,
  canonicalUrl,
  cmsEnabled,
  cmsGetJson,
  cmsWarn,
  isDev,
  memoFresh,
  signature,
} from "./config";
import { normalizeEditPath } from "./erp-edits-shared";
import { parseNavItems, type CmsNavItem } from "./site";
import { arr, obj, safeColor, safeImage, str } from "./safe";

// Lowercase path segments of letters/digits joined by - _ or .
const SLUG_REGEX = /^(\/[a-z0-9]+(?:[-_.][a-z0-9]+)*)+$/;

export type CmsSection = {
  id: string;
  type: string;
  order: number;
  content: Record<string, unknown>;
  settings: Record<string, unknown>;
};

export type CmsSeo = {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  focusKeyword: string;
  twitterHandle: string;
};

/** Published pages the CMS attaches for Blog Posts / Related Posts sections. */
export type CmsPostSummary = {
  title: string;
  url: string;
  pageType: string;
  excerpt: string;
  image: string;
  publishedAt: string;
};

export type CmsPage = {
  title: string;
  slug: string;
  pageType: string;
  featuredImage: string;
  noindex: boolean;
  publishedAt: string;
  sections: CmsSection[];
  colors: { primary: string; secondary: string };
  navigation: { header: CmsNavItem[]; footer: CmsNavItem[] };
  seo: CmsSeo;
  posts: CmsPostSummary[];
  customCode: { css: string; html: string; js: string };
  /** Hash of the raw ERP payload, used to detect publishes (live updates). */
  signature: string;
};

export type CmsPageListItem = {
  title: string;
  slug: string;
  pageType: string;
  publishedAt: string;
  noindex: boolean;
};

/** A5 — URL path → CMS slug ("/", "/a/b"), or null when it can't be a CMS slug. */
export function toCmsSlug(path: string): string | null {
  const slug = normalizeEditPath(path);
  if (slug === "/") return "/";
  return SLUG_REGEX.test(slug) ? slug : null;
}

function pageEndpoint(slug: string) {
  // Home is "/pages/"; others "/pages/a/b" (no leading slash after /pages/).
  return `/pages/${slug.replace(/^\//, "").split("/").map(encodeURIComponent).join("/")}`;
}

async function fetchRawPage(
  slug: string,
): Promise<{ page: CmsPage | null; sig: string | null }> {
  const json = await cmsGetJson(pageEndpoint(slug));
  if (json === null) return { page: null, sig: null };
  const raw = obj(obj(json).data).page;
  const page = parsePage(raw);
  if (!page) throw new Error(`invalid page payload for ${slug}`);
  return { page, sig: page.signature };
}

const fetchPage = async (slug: string) => (await fetchRawPage(slug)).page;

// unstable_cache (not fetch's own cache) so a 404 is cached too. Thrown errors
// (outages) are never cached, so a revalidation during an outage keeps the
// last good copy. Bypassed in development so ERP publishes show immediately.
const fetchPageCached = isDev
  ? fetchPage
  : unstable_cache(fetchPage, ["cms-page", CMS_SITE_DOMAIN], {
      revalidate: CMS_CACHE_SECONDS,
      tags: ["cms-page"],
    });

/**
 * One published page by URL path. Null when it doesn't exist, the CMS is off,
 * or the ERP is unreachable — callers fall through to the normal 404, so an
 * ERP outage never breaks a page or a build.
 */
async function loadCmsPage(path: string): Promise<CmsPage | null> {
  const slug = toCmsSlug(path);
  if (!slug || !cmsEnabled()) return null;
  try {
    return await fetchPageCached(slug);
  } catch (error) {
    cmsWarn(`failed to fetch page ${slug}:`, error);
    return null;
  }
}

/** Deduplicated per request (generateMetadata + page share one lookup). */
export const getCmsPage = cache(loadCmsPage);

/**
 * Live-update probe: the ERP's current signature for a page (bypassing the 60s
 * cache, memoised for a few seconds) and the signature of the cached copy.
 */
export async function getCmsPageStatus(
  path: string,
): Promise<{ fresh: string | null; cached: string | null } | null> {
  const slug = toCmsSlug(path);
  if (!slug || !cmsEnabled()) return null;
  try {
    const [fresh, cached] = await Promise.all([
      memoFresh(`page:${slug}`, () => fetchRawPage(slug)),
      fetchPageCached(slug),
    ]);
    return { fresh: fresh.sig, cached: cached?.signature ?? null };
  } catch (error) {
    cmsWarn(`failed to check page ${slug}:`, error);
    return null;
  }
}

async function fetchPageList(): Promise<CmsPageListItem[]> {
  const json = await cmsGetJson("/pages");
  return arr(obj(obj(json).data).pages)
    .map(obj)
    .map((p) => ({
      title: str(p.title),
      slug: normalizeEditPath(str(p.slug)),
      pageType: str(p.pageType),
      publishedAt: str(p.publishedAt),
      noindex: p.noindex === true,
    }))
    .filter((p) => p.slug === "/" || SLUG_REGEX.test(p.slug));
}

const fetchPageListCached = isDev
  ? fetchPageList
  : unstable_cache(fetchPageList, ["cms-pages", CMS_SITE_DOMAIN], {
      revalidate: CMS_CACHE_SECONDS,
      tags: ["cms-page"],
    });

/** A2 — all published created pages (e.g. for sitemaps). Empty on any error. */
export async function getCmsPageList(): Promise<CmsPageListItem[]> {
  if (!cmsEnabled()) return [];
  try {
    return await fetchPageListCached();
  } catch (error) {
    cmsWarn("failed to fetch page list:", error);
    return [];
  }
}

/* -------------------------------- A7: SEO -------------------------------- */

export function isNoindex(robots: string, noindex: boolean) {
  return noindex || /\bnoindex\b/i.test(robots);
}

/** Next.js metadata from the page's SEO fields (server-rendered → in view-source). */
export function buildCmsMetadata(page: CmsPage | null): Metadata {
  if (!page) return { title: "Page Not Found" };

  const { seo } = page;
  const title = seo.title || page.title;
  const description = seo.metaDescription || undefined;
  const ogImage = safeImage(seo.ogImage) || safeImage(page.featuredImage);
  const ogImages = /^https?:\/\//i.test(ogImage) ? [ogImage] : undefined;
  const canonical = canonicalUrl(seo.canonicalUrl || page.slug);
  const noindex = isNoindex(seo.robots, page.noindex);
  const robots = noindex
    ? /\bnoindex\b/i.test(seo.robots)
      ? seo.robots
      : `noindex${/\bnofollow\b/i.test(seo.robots) ? ", nofollow" : ", follow"}`
    : seo.robots || undefined;
  const handle = seo.twitterHandle
    ? seo.twitterHandle.startsWith("@")
      ? seo.twitterHandle
      : `@${seo.twitterHandle}`
    : undefined;

  return {
    title,
    description,
    keywords: seo.focusKeyword ? [seo.focusKeyword] : undefined,
    robots,
    // An explicit alternates object replaces the layout canonical.
    alternates: { canonical },
    openGraph: {
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      url: canonical,
      type: page.pageType === "blog" ? "article" : "website",
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: ogImages ? "summary_large_image" : "summary",
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      ...(handle ? { site: handle, creator: handle } : {}),
      ...(ogImages ? { images: ogImages } : {}),
    },
  };
}

/* ------------------------- defensive parsing ------------------------- */
// CMS content is untrusted data: only copy known fields of the right type.

function parsePage(raw: unknown): CmsPage | null {
  const p = obj(raw);
  if (!str(p.slug) || !Array.isArray(p.sections)) return null;
  const seo = obj(p.seo);
  const context = obj(p.context);
  const colors = obj(obj(p.design).colors);
  // Per-section-type defaults the CMS resolves from the page template.
  const sectionDefaults = obj(obj(p.design).sectionDefaults);
  const code = obj(p.customCode);
  const nav = obj(context.navigation);

  return {
    title: str(p.title),
    slug: normalizeEditPath(str(p.slug)),
    pageType: str(p.pageType),
    featuredImage: str(p.featuredImage),
    noindex: p.noindex === true,
    publishedAt: str(p.publishedAt),
    sections: p.sections
      .map(obj)
      .filter((s) => str(s.type) && s.hidden !== true)
      .map((s, i) => ({
        id: str(s.id) || `section-${i}`,
        type: str(s.type),
        order: typeof s.order === "number" ? s.order : i,
        i,
        content: obj(s.content),
        settings: { ...obj(sectionDefaults[str(s.type)]), ...obj(s.settings) },
      }))
      .sort((a, b) => a.order - b.order || a.i - b.i)
      .map(({ i: _i, ...s }) => s),
    colors: {
      primary: safeColor(colors.primary),
      secondary: safeColor(colors.secondary),
    },
    navigation: {
      header: parseNavItems(nav.header),
      footer: parseNavItems(nav.footer),
    },
    seo: {
      title: str(seo.title),
      metaDescription: str(seo.metaDescription),
      canonicalUrl: str(seo.canonicalUrl),
      robots: str(seo.robots),
      ogTitle: str(seo.ogTitle),
      ogDescription: str(seo.ogDescription),
      ogImage: str(seo.ogImage),
      focusKeyword: str(seo.focusKeyword),
      twitterHandle: str(seo.twitterHandle).replace(/[^@\w]/g, ""),
    },
    posts: arr(context.posts)
      .map(obj)
      .map((post) => ({
        title: str(post.title),
        url: str(post.url),
        pageType: str(post.pageType),
        excerpt: str(post.excerpt),
        image: str(post.image),
        publishedAt: str(post.publishedAt),
      })),
    customCode: { css: str(code.css), html: str(code.html), js: str(code.js) },
    signature: signature(raw),
  };
}
