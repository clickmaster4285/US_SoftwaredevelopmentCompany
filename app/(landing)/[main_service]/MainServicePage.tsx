import { PageFrame } from "./[sub_service]/landing-primitives";
import { FallbackArticle } from "./[sub_service]/CatalogArticle";
import type { MainService } from "./[sub_service]/service-data";
import { buildServiceArticle } from "@/lib/service-copy";
import {
  AppsSection,
  ExploreSection,
  FaqSection,
  FeaturedInsights,
  FinalCTA,
  IndustriesSection,
  MainServiceBreadcrumb,
  MainServiceHero,
  PainPointsSolutions,
  PricingSection,
  ProcessPage,
  TechStackSection,
  TestimonialsSection,
  TrustedClientsSection,
  WhyChooseUs,
} from "./main-service-sections";

export default function MainServicePage({ service }: { service: MainService }) {
  const article = buildServiceArticle({
    serviceTitle: service.title,
    serviceDescription: service.description,
    subTitle: service.title,
    description: service.description,
    lead: service.tagline,
    highlights: (service.features || []).map((feature) => feature.title).slice(0, 6),
    pricing: (service.pricing || []).map((tier) => ({
      type: tier.type,
      investment: tier.investment,
      timeline: tier.timeline,
    })),
  });

  return (
    <PageFrame>
      <main className="min-h-screen bg-background pt-18 text-foreground">
        <MainServiceBreadcrumb service={service} />
        <MainServiceHero service={service} />
        <FallbackArticle sections={article} />
        <ExploreSection service={service} />
        <PainPointsSolutions service={service} />
        <TrustedClientsSection service={service} />
        <AppsSection />
        <ProcessPage service={service} />
        <TechStackSection service={service} />
        <FeaturedInsights />
        <WhyChooseUs service={service} />
        <PricingSection plans={service.pricing || []} service={service} />
        <IndustriesSection />
        <TestimonialsSection service={service} />
        <FaqSection service={service} />
        <FinalCTA service={service} />
      </main>
    </PageFrame>
  );
}
