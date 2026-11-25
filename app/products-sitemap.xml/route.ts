import { readdirSync, readFileSync } from "fs";
import path from "path";
import { industryPath, productIndustries, productPath } from "@/data/products";
import {
  lastModified,
  urlsetXml,
  xmlResponse,
  type SitemapEntry,
} from "@/lib/sitemap";

export const dynamic = "force-static";

// The product catalogue (/products, 7 industry hubs, every product page) was
// missing from the sitemap: pages-sitemap skips dynamic [segment] routes and
// no other sitemap enumerated them. Entries come from the same data as the
// routes' generateStaticParams, so the sitemap cannot drift from what exists.

const PRODUCTS_DIR = "app/(landing)/products";

function productSources() {
  const dir = path.join(process.cwd(), PRODUCTS_DIR);
  try {
    return readdirSync(dir)
      .filter((name) => /\.(ts|tsx)$/.test(name))
      .map((name) => ({
        file: `${PRODUCTS_DIR}/${name}`,
        text: readFileSync(path.join(dir, name), "utf8"),
      }));
  } catch {
    return [];
  }
}

/** Files that define a product page: the file declaring its path constant
 * (`X_PATH = "..."` or `path: "..."`) plus its companion -data.ts file. */
function definingFiles(
  sources: Array<{ file: string; text: string }>,
  pagePath: string,
) {
  const declaration = new RegExp(
    `(_PATH\\s*=\\s*|path:\\s*)["\`]${pagePath.replace(/[/-]/g, "\\$&")}["\`]`,
  );
  const files = new Set<string>();
  for (const source of sources) {
    if (!declaration.test(source.text)) continue;
    files.add(source.file);
    if (source.file.endsWith("-page.tsx")) {
      files.add(source.file.replace(/-page\.tsx$/, "-data.ts"));
    }
  }
  return [...files];
}

export function GET() {
  const sources = productSources();
  const shared = ["data/products.ts", `${PRODUCTS_DIR}/views.tsx`];
  const entries: SitemapEntry[] = [
    { path: "/products", lastmod: lastModified(shared) },
  ];

  for (const industry of productIndustries) {
    const hub = industryPath(industry.slug);
    // Dedicated hub pages (e.g. fitness pillar) declare `X_SLUG = "<slug>"`.
    const hubFiles = sources
      .filter((s) => s.text.includes(`_SLUG = "${industry.slug}"`))
      .flatMap((s) => [
        s.file,
        s.file.replace(/-pillar-page\.tsx$/, "-data.ts"),
      ]);
    entries.push({
      path: hub,
      lastmod: lastModified([
        ...shared,
        ...definingFiles(sources, hub),
        ...hubFiles,
      ]),
    });
    for (const product of industry.products) {
      const page = productPath(industry.slug, product.slug);
      const files = definingFiles(sources, page);
      entries.push({
        path: page,
        // Products without a dedicated page render the generic template.
        lastmod: lastModified(files.length ? files : shared),
      });
    }
  }

  return xmlResponse(urlsetXml(entries));
}
