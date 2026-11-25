import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Child sitemaps. <lastmod> is omitted here: each child carries accurate
// per-URL dates, whereas the old value was simply the build time.
const CHILD_SITEMAPS = [
  "pages-sitemap.xml",
  "services-sitemap.xml",
  "products-sitemap.xml",
  "posts-sitemap.xml",
];

export function GET() {
  const items = CHILD_SITEMAPS.map(
    (name) => `  <sitemap>\n    <loc>${SITE_URL}/${name}</loc>\n  </sitemap>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
