import { promises as fs } from "fs";
import path from "path";
import { getAllLocationServiceSlugs } from "@/data/location-service-data";
import {
  lastModified,
  urlsetXml,
  xmlResponse,
  type SitemapEntry,
} from "@/lib/sitemap";

export const dynamic = "force-static";

/** Static (non-dynamic) page routes discovered from the app directory.
 * Dynamic sections have their own sitemaps: services-sitemap (service hubs
 * and sub-services), products-sitemap (/products/**) and posts-sitemap
 * (case studies). */

const SKIP_DIRS = new Set(["api", "products"]);

function toRoutePath(relativeDir: string) {
  const parts = relativeDir
    .replace(/\\/g, "/")
    .split("/")
    .filter(Boolean)
    // Route groups "(x)" do not appear in the URL.
    .filter((part) => !(part.startsWith("(") && part.endsWith(")")));
  return parts.length ? `/${parts.join("/")}` : "/";
}

async function collectPageRoutes(): Promise<SitemapEntry[]> {
  const appDir = path.join(process.cwd(), "app");
  const entries: SitemapEntry[] = [];

  async function walk(dir: string) {
    const items = await fs.readdir(dir, { withFileTypes: true });
    const files = items.filter((i) => i.isFile()).map((i) => i.name);

    if (files.some((name) => /^page\.(ts|tsx|js|jsx)$/.test(name))) {
      const relativeDir = path.relative(appDir, dir);
      const route = toRoutePath(relativeDir);
      const repoDir = path.join("app", relativeDir).replace(/\\/g, "/");
      // Page files plus the components that sit next to them.
      const sourceFiles = files
        .filter((name) => /\.(ts|tsx|js|jsx)$/.test(name))
        .map((name) => `${repoDir}/${name}`);
      if (route === "/") {
        // Homepage sections live in the (landing) route group root.
        const landing = path.join(appDir, "(landing)");
        for (const name of await fs.readdir(landing)) {
          if (/\.(ts|tsx)$/.test(name))
            sourceFiles.push(`app/(landing)/${name}`);
        }
        sourceFiles.push("data/home-faqs.ts");
      }
      entries.push({ path: route, lastmod: lastModified(sourceFiles) });
    }

    for (const item of items) {
      if (!item.isDirectory() || item.name.startsWith(".")) continue;
      if (SKIP_DIRS.has(item.name)) continue;
      // Dynamic segments are enumerated by their own sitemaps.
      if (item.name.startsWith("[")) continue;
      if (item.name.endsWith(".xml")) continue;
      await walk(path.join(dir, item.name));
    }
  }

  await walk(appDir);

  const locationLastmod = lastModified([
    "data/location-service-data.ts",
    "app/(landing)/locations/[slug]/page.tsx",
    "app/(landing)/locations/[slug]/LocationServicePage.tsx",
  ]);
  for (const slug of getAllLocationServiceSlugs()) {
    entries.push({ path: `/locations/${slug}`, lastmod: locationLastmod });
  }

  return entries;
}

export async function GET() {
  return xmlResponse(urlsetXml(await collectPageRoutes()));
}
