import { NextResponse } from "next/server";
import { caseStudies } from "@/content/case-studies";

const siteUrl = "https://clickmasterssoftwaredevelopmentcompany.com";

export async function GET() {
  const lastMod = new Date().toISOString().split("T")[0];
  const urls = Object.keys(caseStudies).map(
    (slug) =>
      `  <url>\n    <loc>${siteUrl}/case-studies/${slug}</loc>\n    <lastmod>${lastMod}</lastmod>\n  </url>`,
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
