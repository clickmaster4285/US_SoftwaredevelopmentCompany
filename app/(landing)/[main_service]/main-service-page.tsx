// main-service-page.js
import { PageFrame } from "./[sub_service]/landing-primitives";
import {
  AppsSection,
  BenefitsSection,
  ClientSuccessStories,
  CompanySection,
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

  // Only some services define pricing tiers.
  const pricingPlans = "pricing" in service ? service.pricing : undefined;

  return (
    <>
      <PageFrame>
        <main className="min-h-screen bg-background pt-18 text-foreground">
          <MainServiceHero service={service} />
          
          {/* Trust Section */}
          <TrustSection service={service} />
          
          <ExploreSection service={service} />
          <SectionCta label={sectionCtas?.afterServices} />
          {/* <PainPointsSolutions service={service} /> */}

          {/* Benefits Section */}
          <BenefitsSection service={service} />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection service={service} />
          <SectionCta label={sectionCtas?.afterWhyChooseUs} />

          {/* Pricing Section */}
          <PricingSection plans={pricingPlans} service={service} />

          {/* Tech Stack Section */}
          <TechStackSection service={service} />

          {/* Industries Section */}
          <IndustriesSection service={service} />
          
          {/* Client Success Stories */}
          <ClientSuccessStories service={service} />
          
          {/* Process Section */}
          <ProcessSection service={service} />
          <SectionCta label={sectionCtas?.afterProcess} />

          {/* Company / Agency Section (e.g. "Your Cloud DevOps Agency in the USA") */}
          <CompanySection service={service} />

          {/* FAQs */}
          <FaqSection service={service} />
          
          <FinalCTA service={service} />
        </main>
      </PageFrame>
    </>
  );
}

