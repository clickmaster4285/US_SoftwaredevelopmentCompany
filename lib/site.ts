export const SITE_URL = "https://clickmasterssoftwaredevelopmentcompany.com";

export function pageUrl(path = "/") {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
