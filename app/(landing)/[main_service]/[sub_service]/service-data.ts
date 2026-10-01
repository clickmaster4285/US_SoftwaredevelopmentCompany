import {
  getServiceData,
  iconMap,
  mainServicesData,
} from "@/data/main-services";
import { mainServiceData } from "@/data/main-services-data";

export type IconName = keyof typeof iconMap;

export type Stat = {
  value: string;
  label: string;
};

export type SubService = {
  title: string;
  slug: string;
  description: string;
  icon?: IconName;
  heroImage?: string;
  lead?: string;
  highlights?: string[];
  pricing?: Array<{
    type: string;
    investment: string;
    timeline: string;
  }>;
};

export type ServiceFeature = {
  title: string;
  description: string;
  icon?: IconName;
};

export type ServicePricingTier = {
  type: string;
  investment: string;
  bestFor?: string;
  timeline: string;
  features?: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type TrustedClient = {
  name: string;
  industry?: string;
  icon?: IconName;
};

export type MainService = {
  title: string;
  slug: string;
  icon?: IconName;
  tagline: string;
  description: string;
  heroBadge?: string;
  heroImage?: string;
  stats?: Stat[];
  subServices?: SubService[];
  ourServices?: {
    title?: string;
    description?: string;
    subServices?: SubService[];
  };
  features?: ServiceFeature[];
  pricing?: ServicePricingTier[];
  pricingSection?: {
    title?: string;
    description?: string;
  };
  faqsSection?: {
    title?: string;
    description?: string;
  };
  faqs?: ServiceFaq[];
  trustedClients?: TrustedClient[];
};

function mergeSubServices(
  preferred: SubService[] = [],
  fallback: SubService[] = [],
) {
  const seen = new Set<string>();
  const merged: SubService[] = [];

  for (const item of [...preferred, ...fallback]) {
    if (!item?.slug || seen.has(item.slug)) continue;
    seen.add(item.slug);
    merged.push(item);
  }

  return merged;
}

const legacyAliases: Record<string, string> = {};

export const services = Object.keys(mainServicesData).reduce(
  (acc, key) => {
    const service = getServiceData(key) as MainService | null;
    if (!service?.slug) return acc;

    acc[service.slug] = service;
    if (key !== service.slug) {
      legacyAliases[key] = service.slug;
    }
    return acc;
  },
  {} as Record<string, MainService>,
);

for (const richService of Object.values(mainServiceData) as MainService[]) {
  if (!richService?.slug) continue;

  const existing = services[richService.slug];
  services[richService.slug] = existing
    ? {
        ...existing,
        ...richService,
        slug: richService.slug,
        subServices: mergeSubServices(
          richService.subServices,
          existing.subServices,
        ),
      }
    : richService;
}

export function resolveService(slug: string) {
  return services[slug] ?? services[legacyAliases[slug]];
}

export { iconMap };
