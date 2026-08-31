// main-service-page.js
import { PageFrame } from "./[sub_service]/landing-primitives";
import {
  AppsSection,
  BenefitsSection,
  ClientSuccessStories,
  ExploreSection,
  FaqSection,
  FeaturedInsights,
  FinalCTA,
  IndustriesSection,
  MainServiceHero,
  PainPointsSolutions,
  PricingSection,
  ProcessSection,
  SectionCta,
  TechStackSection,
  TrustSection,
  TrustedClientsSection,
  WhyChooseUsSection,
} from "@/data/main-services-components";
import { mainServiceData } from "@/data/main-services-data";

// Type definition for service data
type MainService = (typeof mainServiceData)[keyof typeof mainServiceData];

export default function MainServicePage({ service }: { service: MainService }) {
  // Only some services define mid-page CTA labels.
  const sectionCtas = "sectionCtas" in service ? service.sectionCtas : undefined;

  return (
    <>
      <PageFrame>
        <main className="min-h-screen bg-background pt-18 text-foreground">
          <MainServiceHero service={service} />
          
          {/* Trust Section */}
          <TrustSection service={service} />
          
          <ExploreSection service={service} />
          <SectionCta label={sectionCtas?.afterServices} />
          <PainPointsSolutions service={service} />

          {/* Benefits Section */}
          <BenefitsSection service={service} />

          <TrustedClientsSection service={service} />
          <AppsSection />

          {/* Process Section */}
          <ProcessSection service={service} />
          <SectionCta label={sectionCtas?.afterProcess} />

          {/* Tech Stack Section */}
          <TechStackSection service={service} />

          <FeaturedInsights />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection service={service} />
          <SectionCta label={sectionCtas?.afterWhyChooseUs} />

          {/* Client Success Stories */}
          <ClientSuccessStories service={service} />
          
          <PricingSection plans={service.pricing || []} service={service} />
          
          {/* Industries Section */}
          <IndustriesSection service={service} />
          
          <FaqSection service={service} />
          <FinalCTA service={service} />
        </main>
      </PageFrame>
    </>
  );
}

