import { PageFrame } from "./[sub_service]/landing-primitives";
import type { MainService } from "./[sub_service]/service-data";
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
  return (
    <PageFrame>
      <main className="min-h-screen bg-background pt-18 text-foreground">
        <MainServiceBreadcrumb service={service} />
        <MainServiceHero service={service} />
        <ExploreSection service={service} />
        <PainPointsSolutions service={service} />
        <TrustedClientsSection service={service} />
        <AppsSection />
        <ProcessPage service={service} />
        <TechStackSection />
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
