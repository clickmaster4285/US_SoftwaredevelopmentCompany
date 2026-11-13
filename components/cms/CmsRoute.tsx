// components/cms/CmsRoute.tsx
// A5 — renders whatever page the ERP has published at a URL path. Used as the
// fallback of the code-owned dynamic routes for slugs they don't own
// ([main_service], [main_service]/[sub_service], and the deeper catch-all), so
// precedence is: code-owned route → created page (200) → normal 404.
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildCmsMetadata, getCmsPage } from "@/lib/cms/cms";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import { getCmsSite } from "@/lib/cms/site";
import CmsPageFrame from "./CmsPageFrame";

/** "/a/b" from route segments (["a", "b"]). */
export function cmsPath(segments: string[]) {
  return `/${segments.join("/")}`;
}

/** Created-page SEO (A7). Routes layer edited-page SEO (B4) on top via withEditedPageSeo. */
export async function cmsRouteMetadata(path: string): Promise<Metadata> {
  return buildCmsMetadata(await getCmsPage(path));
}

/** Created-page SEO + edited-page SEO, for routes that only serve CMS pages. */
export async function cmsRouteMetadataWithEdits(
  path: string,
): Promise<Metadata> {
  return withEditedPageSeo(path, await cmsRouteMetadata(path));
}

export default async function CmsRoute({ path }: { path: string }) {
  const [page, site] = await Promise.all([getCmsPage(path), getCmsSite()]);
  if (!page) notFound();
  return <CmsPageFrame page={page} site={site} />;
}
