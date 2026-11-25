import { execFileSync } from "child_process";
import { SITE_URL } from "@/lib/site";

/**
 * Sitemap helpers shared by the sitemap route handlers.
 *
 * lastmod: previously every entry carried the build date, which tells search
 * engines that all ~190 pages changed on every deploy. It now uses the last
 * git commit date of the files that render each page. When git history is not
 * available at build time (e.g. a build container without .git) the tag is
 * omitted, which the sitemap protocol allows.
 */

let gitDates: Map<string, string> | null = null;

function loadGitDates() {
  if (gitDates) return gitDates;
  gitDates = new Map();
  try {
    const out = execFileSync(
      "git",
      [
        "-c",
        "core.quotepath=off",
        "log",
        "--format=@%cs",
        "--name-only",
        "--no-renames",
        "--",
        "app",
        "components",
        "content",
        "data",
        "lib",
      ],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        maxBuffer: 128 * 1024 * 1024,
        stdio: ["ignore", "pipe", "ignore"],
      },
    );
    let date = "";
    for (const raw of out.split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      if (line.startsWith("@")) {
        date = line.slice(1);
      } else if (!gitDates.has(line)) {
        // git log is newest-first, so the first date seen is the latest.
        gitDates.set(line, date);
      }
    }
  } catch {
    // No git binary or no repository: lastmod is omitted.
  }
  return gitDates;
}

/** Latest commit date (YYYY-MM-DD) across the given repo-relative files. */
export function lastModified(files: string[]): string | undefined {
  const dates = loadGitDates();
  let latest: string | undefined;
  for (const file of files) {
    const date = dates.get(file.replace(/\\/g, "/"));
    if (date && (!latest || date > latest)) latest = date;
  }
  return latest;
}

/** Repo-relative files whose content contains `needle`, limited to `dir`. */
export function filesMentioning(
  sources: Array<{ file: string; text: string }>,
  needle: string,
) {
  return sources.filter((s) => s.text.includes(needle)).map((s) => s.file);
}

export type SitemapEntry = { path: string; lastmod?: string };

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Absolute canonical URL for a site path ("/" maps to the bare origin, the
 * same form the homepage canonical tag uses). */
export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function urlsetXml(entries: SitemapEntry[]) {
  const seen = new Set<string>();
  const body = entries
    .filter((entry) => {
      if (seen.has(entry.path)) return false;
      seen.add(entry.path);
      return true;
    })
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((entry) => {
      const lastmod = entry.lastmod
        ? `\n    <lastmod>${entry.lastmod}</lastmod>`
        : "";
      return `  <url>\n    <loc>${escapeXml(absoluteUrl(entry.path))}</loc>${lastmod}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function xmlResponse(xml: string) {
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
