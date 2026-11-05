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

const CONTENT_ALIASES: Record<string, string> = {
  "data-integration-services": "data-integration",
  "data-migration-services": "data-migration",
  "data-visualization-services": "data-visualization",
  "ml-solutions-development": "machine-learning-solutions-development",
  "threat-detection": "cyber-threat-detection",
  "cybersecurity-software-development": "custom-cybersecurity-software",
};

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

  for (const candidate of candidates) {
    const page = getServicePage(candidate) as CatalogPage | undefined;
    if (page) return page;
  }
  return null;
}
