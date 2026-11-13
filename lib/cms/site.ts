// lib/cms/site.ts
// A1 — site info, theme colours and header/footer navigation from the ERP.
import { unstable_cache } from "next/cache";
import { cache } from "react";
import {
  CMS_CACHE_SECONDS,
  CMS_SITE_DOMAIN,
  cmsEnabled,
  cmsGetJson,
  cmsWarn,
  isDev,
} from "./config";
import { arr, obj, safeColor, safeHref, safeImage, str } from "./safe";

export type CmsNavItem = {
  id: string;
  label: string;
  href: string;
  newTab: boolean;
  children: CmsNavItem[];
};

export type CmsSite = {
  name: string;
  logo: string;
  colors: { primary: string; secondary: string };
  header: CmsNavItem[];
  footer: CmsNavItem[];
};

export function parseNavItems(raw: unknown, depth = 0): CmsNavItem[] {
  return arr(raw)
    .map(obj)
    .map((item, i) => ({
      item,
      i,
      order: typeof item.order === "number" ? item.order : i,
    }))
    .sort((a, b) => a.order - b.order || a.i - b.i)
    .map(({ item, i }): CmsNavItem | null => {
      const label = str(item.label).trim();
      const href = safeHref(str(item.url ?? item.href));
      const children = depth < 2 ? parseNavItems(item.children, depth + 1) : [];
      if (!label || (!href && children.length === 0)) return null;
      return {
        id: str(item.id) || `nav-${depth}-${i}`,
        label,
        href,
        newTab: item.target === "_blank" || item.newTab === true,
        children,
      };
    })
    .filter((x): x is CmsNavItem => x !== null);
}

async function fetchSite(): Promise<CmsSite | null> {
  const json = await cmsGetJson("");
  if (json === null) return null; // website not registered in the ERP
  const data = obj(obj(json).data);
  const website = obj(data.website);
  const colors = obj(obj(data.design).colors);
  const nav = obj(data.navigation);
  return {
    name: str(website.name),
    logo: safeImage(str(website.logo)),
    colors: {
      primary: safeColor(colors.primary) || safeColor(website.primaryColor),
      secondary:
        safeColor(colors.secondary) || safeColor(website.secondaryColor),
    },
    header: parseNavItems(nav.header),
    footer: parseNavItems(nav.footer),
  };
}

const fetchSiteCached = isDev
  ? fetchSite
  : unstable_cache(fetchSite, ["cms-site", CMS_SITE_DOMAIN], {
      revalidate: CMS_CACHE_SECONDS,
      tags: ["cms-site"],
    });

/** Site info, or null when the CMS is off, the site is unknown or the ERP is down. */
async function loadCmsSite(): Promise<CmsSite | null> {
  if (!cmsEnabled()) return null;
  try {
    return await fetchSiteCached();
  } catch (error) {
    cmsWarn("failed to load site info:", error);
    return null;
  }
}

/** Deduplicated per request. */
export const getCmsSite = cache(loadCmsSite);
