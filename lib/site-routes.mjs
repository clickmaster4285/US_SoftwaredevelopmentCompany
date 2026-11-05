/** Canonical URL decisions for duplicate and consolidated service paths. */

export const hubAliases = {
  "cloud-and-devops": "cloud-devops-services",
};

/** Old path (no leading slash) -> canonical path (leading slash). */
export const subRedirects = {
  "data-services/data-integration": "/data-services/data-integration-services",
  "data-services/data-migration": "/data-services/data-migration-services",
  "data-services/data-visualization":
    "/data-services/data-visualization-services",
  "machine-learning-development-services/machine-learning-solutions-development":
    "/machine-learning-development-services/ml-solutions-development",
  "cybersecurity-services/cyber-threat-detection":
    "/cybersecurity-services/threat-detection",
  "cybersecurity-services/custom-cybersecurity-software":
    "/cybersecurity-services/cybersecurity-software-development",
  "cybersecurity-services/managed-cybersecurity-soc":
    "/cybersecurity-services/managed-cybersecurity",
};

/** Hubs whose child URLs fold back into the parent. */
export const consolidatedHubs = new Set(["qa-testing-services"]);

export function destinationFor(hub, sub) {
  const canonicalHub = hubAliases[hub];
  if (canonicalHub) {
    return sub ? `/${canonicalHub}/${sub}` : `/${canonicalHub}`;
  }
  if (sub && consolidatedHubs.has(hub)) return `/${hub}`;
  if (sub && subRedirects[`${hub}/${sub}`]) return subRedirects[`${hub}/${sub}`];
  return null;
}

export function isRetiredSub(hub, sub) {
  if (!sub) return false;
  if (consolidatedHubs.has(hub)) return true;
  return Boolean(subRedirects[`${hub}/${sub}`]);
}

export function redirectRules() {
  const rules = [];
  for (const [from, to] of Object.entries(hubAliases)) {
    rules.push({
      source: `/${from}`,
      destination: `/${to}`,
      permanent: true,
    });
    rules.push({
      source: `/${from}/:path*`,
      destination: `/${to}/:path*`,
      permanent: true,
    });
  }
  for (const hub of consolidatedHubs) {
    rules.push({
      source: `/${hub}/:path+`,
      destination: `/${hub}`,
      permanent: true,
    });
  }
  for (const [from, to] of Object.entries(subRedirects)) {
    rules.push({
      source: `/${from}`,
      destination: to,
      permanent: true,
    });
  }
  rules.push({
    source: "/free-qa-scoping-call",
    destination: "/contact",
    permanent: true,
  });
  return rules;
}
