import { mainServicesData } from "@/data/main-services";
import { mainServiceData } from "@/data/main-services-data";
import { services } from "@/app/(landing)/[main_service]/[sub_service]/service-data";
import { destinationFor, isRetiredSub } from "@/lib/site-routes.mjs";
import {
  lastModified,
  urlsetXml,
  xmlResponse,
  type SitemapEntry,
} from "@/lib/sitemap";

export const dynamic = "force-static";

// Uses the same sources as the routes' generateStaticParams. The previous
// version read only data/main-services.js, so sub-services that exist only in
// data/main-services-data.js (e.g. /web-development/progressive-web-app-development)
// were rendered and linked but missing from the sitemap.

const SERVICE_FILES = [
  "data/main-services.js",
  "data/main-services-data.js",
  "data/sub-services.js",
  "lib/service-copy.ts",
];
const HUB_FILES = [
  ...SERVICE_FILES,
  "app/(landing)/[main_service]/main-service-page.tsx",
  "app/(landing)/[main_service]/main-service-sections.tsx",
  "app/(landing)/[main_service]/MainServicePage.tsx",
];
const SUB_FILES = [
  ...SERVICE_FILES,
  "app/(landing)/[main_service]/[sub_service]/SubServicePage.tsx",
  "app/(landing)/[main_service]/[sub_service]/CatalogArticle.tsx",
];

export function GET() {
  const hubLastmod = lastModified(HUB_FILES);
  const subLastmod = lastModified(SUB_FILES);
  const entries: SitemapEntry[] = [];

  const hubs = new Set([
    ...Object.values(mainServiceData).map((service) => service?.slug),
    ...Object.values(mainServicesData).map((service) => service?.slug),
  ]);
  for (const hub of hubs) {
    // Alias hubs redirect permanently; only list canonical hub URLs.
    if (!hub || destinationFor(hub, undefined)) continue;
    entries.push({ path: `/${hub}`, lastmod: hubLastmod });
  }

  for (const service of Object.values(services)) {
    if (!service?.slug || destinationFor(service.slug, undefined)) continue;
    for (const sub of service.subServices || []) {
      if (!sub?.slug || isRetiredSub(service.slug, sub.slug)) continue;
      entries.push({
        path: `/${service.slug}/${sub.slug}`,
        lastmod: subLastmod,
      });
    }
  }

  return xmlResponse(urlsetXml(entries));
}
