import { promises as fs } from "fs";
import path from "path";

const siteUrl = "https://clickmasterssoftwaredevelopmentcompany.com";

function buildUrlElement(url: string, lastMod: string) {
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastMod}</lastmod>\n  </url>`;
}

function toRoutePath(relativePath: string) {
  // Normalize Windows paths
  let route = relativePath.replace(/\\/g, "/");

  // If it's just "page.tsx" or starts with "page.tsx", it's the root
  if (
    route === "page.tsx" ||
    route === "page.ts" ||
    route === "page.jsx" ||
    route === "page.js"
  ) {
    return "/";
  }

  // Remove the file extension and page/route suffix
  route = route
    .replace(/^\//, "") // Remove leading slash
    .replace(/\/page\.(ts|tsx|js|jsx)$/, "") // Remove /page.ext
    .replace(/\/route\.(ts|tsx|js|jsx)$/, ""); // Remove /route.ext
  // Don't remove page.tsx at the root level - it should be handled above

  // Split into parts
  let parts = route.split("/").filter(Boolean);

  // Filter out route groups (folders with parentheses)
  parts = parts.filter((part) => !part.startsWith("(") && !part.endsWith(")"));

  // Filter out dynamic route segments (folders with square brackets)
  parts = parts.filter((part) => !part.startsWith("[") && !part.endsWith("]"));

  // If no parts left, it's the root
  if (parts.length === 0) {
    return "/";
  }

  return `/${parts.join("/")}`;
}

async function collectPageRoutes() {
  const appDir = path.join(process.cwd(), "app");
  const routes = new Set<string>();

  async function walk(currentDir: string) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name === "api") continue;

      const fullPath = path.join(currentDir, entry.name);

      // Skip these files
      if (
        [
          "layout.tsx",
          "layout.jsx",
          "layout.js",
          "globals.css",
          "not-found.tsx",
          "not-found.jsx",
          "providers.tsx",
          "favicon.ico",
          "error.tsx",
          "error.jsx",
        ].includes(entry.name)
      ) {
        continue;
      }

      if (entry.isDirectory()) {
        // Skip dynamic route directories (they have square brackets)
        // These are handled by services-sitemap
        if (entry.name.startsWith("[") || entry.name.startsWith("(")) {
          // Still need to check inside for any page files
          await walk(fullPath);
          continue;
        }
        await walk(fullPath);
        continue;
      }

      if (
        entry.isFile() &&
        /^(page|route)\.(ts|tsx|js|jsx)$/.test(entry.name)
      ) {
        const relativePath = path.relative(appDir, fullPath);
        const routePath = toRoutePath(relativePath);

        // Only add if it's a valid route
        if (
          routePath &&
          routePath !== "/page" && // Skip if it incorrectly parsed as /page
          !routePath.includes("/api") &&
          !routePath.includes("sitemap") &&
          !routePath.includes("[") &&
          !routePath.includes("]") &&
          !routePath.includes("(") &&
          !routePath.includes(")")
        ) {
          routes.add(routePath);
        }
      }
    }
  }

  await walk(appDir);

  return Array.from(routes).sort();
}

export async function GET() {
  const routes = await collectPageRoutes();
  const lastMod = new Date().toISOString().split("T")[0];

  // Build URLs
  const urls = routes.map((route) => {
    // Handle root path
    const urlPath = route === "/" ? "" : route;
    return buildUrlElement(`${siteUrl}${urlPath}`, lastMod);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
