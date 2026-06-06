import { getServiceData, iconMap, mainServicesData } from "@/data/main-services";

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
  features?: ServiceFeature[];
  pricing?: ServicePricingTier[];
  faqs?: ServiceFaq[];
  trustedClients?: TrustedClient[];
};

export const services = Object.keys(mainServicesData).reduce(
  (acc, slug) => {
    const service = getServiceData(slug);
    if (service) {
      acc[slug] = service as MainService;
    }
    return acc;
  },
  {} as Record<string, MainService>,
);
export { iconMap };
