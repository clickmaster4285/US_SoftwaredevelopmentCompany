import { mainServicesData } from "../../data/main-services.js";

const siteUrl = "https://clickmasterssoftwaredevelopmentcompany.com";

function buildUrlElement(url: string, lastMod: string) {
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastMod}</lastmod>\n  </url>`;
}

function collectServiceRoutes() {
  const routes = new Set<string>();
  const lastMod = new Date().toISOString().split("T")[0];

  Object.entries(mainServicesData).forEach(([mainServiceSlug, service]) => {
    if (!mainServiceSlug) return;

    routes.add(`${siteUrl}/${mainServiceSlug}`);

    const subServices = Array.isArray(service?.subServices)
      ? service.subServices
      : [];

    subServices.forEach((subService) => {
      if (!subService?.slug) return;
      routes.add(`${siteUrl}/${mainServiceSlug}/${subService.slug}`);
    });
  });

  return Array.from(routes)
    .sort()
    .map((url) => buildUrlElement(url, lastMod));
}

export async function GET() {
  const xmlUrls = collectServiceRoutes();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
