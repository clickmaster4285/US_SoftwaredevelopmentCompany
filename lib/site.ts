export const SITE_URL = "https://clickmasterssoftwaredevelopmentcompany.com";

/** Public sales inbox. Single source so markup, footer and schema agree. */
export const CONTACT_EMAIL = "sales@clickmasterssoftwaredevelopmentcompany.com";
export const CONTACT_PHONE_DISPLAY = "+1 325 202 4074";
export const CONTACT_PHONE_TEL = "tel:+13252024074";

export function pageUrl(path = "/") {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
