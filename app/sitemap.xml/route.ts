const siteUrl = "https://clickmasterssoftwaredevelopmentcompany.com";
const lastModified = new Date().toISOString();

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/pages-sitemap.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/services-sitemap.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/posts-sitemap.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
