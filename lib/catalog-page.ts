import { getServicePage } from "@/data/sub-services";

export type CatalogPage = {
  slug?: string;
  lead?: string;
  highlights?: string[];
  checklist?: Array<{ item?: string; standard?: string }>;
  servicesCards?: Array<{ title?: string; description?: string }>;
  differentiators?: Array<{ feature?: string; description?: string }>;
  processPhases?: Array<{
    phase?: string;
    title?: string;
    timeline?: string;
    text?: string;
  }>;
  techStackCategories?: Array<{ layer?: string; technologies?: string }>;
  pricingTiers?: Array<{
    type?: string;
    investment?: string;
    timeline?: string;
    bestFor?: string;
  }>;
  industryUseCases?: Array<{ name?: string; description?: string }>;
  sections?: Array<{ heading?: string; body?: string; items?: string[] }>;
  faqs?: Array<{ question?: string; answer?: string }>;
};

/**
 * Route slug -> catalog slug, for routes whose written content is stored under
 * a different spelling. Each target must be the same service and must not be
 * rendered by another route (that would publish the same text at two URLs).
 */
const CONTENT_ALIASES: Record<string, string> = {
  "data-integration-services": "data-integration",
  "data-migration-services": "data-migration",
  "data-visualization-services": "data-visualization",
  "ml-solutions-development": "machine-learning-solutions-development",
  "threat-detection": "cyber-threat-detection",
  "cybersecurity-software-development": "custom-cybersecurity-software",
  "llm-application-development": "llm-applications-development",
  "ecommerce-development": "e-commerce-development",
  "headless-ecommerce": "headless-e-commerce",
  "model-training-optimization": "model-training-optimisation",
  "security-audits-compliance": "security-audits",
};

/** Below this, a catalog entry is an auto-generated stub, not written content. */
const MIN_CATALOG_WORDS = 180;

function words(value: string) {
  return value.split(/\s+/).filter(Boolean).length;
}

export function catalogWordCount(page: CatalogPage | null | undefined) {
  if (!page) return 0;
  const chunks: string[] = [];
  const push = (value?: string) => {
    if (value && !value.startsWith("http")) chunks.push(value);
  };
  push(page.lead);
  page.highlights?.forEach(push);
  page.checklist?.forEach((item) => {
    push(item.item);
    push(item.standard);
  });
  page.servicesCards?.forEach((item) => {
    push(item.title);
    push(item.description);
  });
  page.differentiators?.forEach((item) => {
    push(item.feature);
    push(item.description);
  });
  page.processPhases?.forEach((item) => {
    push(item.title);
    push(item.text);
  });
  page.techStackCategories?.forEach((item) => {
    push(item.layer);
    push(item.technologies);
  });
  page.pricingTiers?.forEach((item) => {
    push(item.type);
    push(item.investment);
    push(item.timeline);
    push(item.bestFor);
  });
  page.industryUseCases?.forEach((item) => {
    push(item.name);
    push(item.description);
  });
  page.sections?.forEach((item) => {
    push(item.heading);
    push(item.body);
    item.items?.forEach(push);
  });
  page.faqs?.forEach((item) => {
    push(item.question);
    push(item.answer);
  });
  return words(chunks.join(" "));
}

export function lookupCatalog(slug: string): CatalogPage | null {
  const candidates = [
    slug,
    CONTENT_ALIASES[slug],
    slug.endsWith("-services") ? slug.replace(/-services$/, "") : "",
  ].filter(Boolean);

  // Prefer written content over a stub: the catalog also holds ~85-word
  // auto-generated entries, and an exact-slug stub must not shadow the alias
  // that carries the real page copy.
  let stub: CatalogPage | null = null;
  for (const candidate of candidates) {
    const page = getServicePage(candidate) as CatalogPage | undefined;
    if (!page) continue;
    if (catalogWordCount(page) >= MIN_CATALOG_WORDS) return page;
    stub ??= page;
  }
  return stub;
}
