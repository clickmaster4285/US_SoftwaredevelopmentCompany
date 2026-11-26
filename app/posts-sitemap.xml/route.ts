import { readdirSync } from "fs";
import path from "path";
import { caseStudies } from "@/content/case-studies";
import { lastModified, urlsetXml, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  let contentFiles: string[] = [];
  try {
    contentFiles = readdirSync(path.join(process.cwd(), "content/case-studies"))
      .filter((name) => /\.(ts|tsx|md|mdx)$/.test(name))
      .map((name) => `content/case-studies/${name}`);
  } catch {
    // Directory missing at runtime: lastmod falls back to the template only.
  }
  const template = [
    "app/case-studies/[slug]/page.tsx",
    "app/case-studies/[slug]/layout.tsx",
  ];

  const entries = Object.keys(caseStudies).map((slug) => ({
    path: `/case-studies/${slug}`,
    lastmod: lastModified([
      ...template,
      ...contentFiles.filter((file) => file.includes(slug)),
    ]),
  }));

  return xmlResponse(urlsetXml(entries));
}
