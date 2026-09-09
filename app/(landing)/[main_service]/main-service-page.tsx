// main-service-page.js
import { PageFrame } from "./[sub_service]/landing-primitives";
import {
  AgencySection,
  BenefitsSection,
  ClientSuccessStories,
  ExploreSection,
  FaqSection,
  FinalCTA,
  IndustriesSection,
  MainServiceHero,
  PricingSection,
  ProcessSection,
  SectionCta,
  TechStackSection,
  TrustSection,
  WhyChooseUsSection,
} from "@/data/main-services-components";
import { mainServiceData } from "@/data/main-services-data";

// Type definition for service data
type MainService = (typeof mainServiceData)[keyof typeof mainServiceData];

export default function MainServicePage({ service }: { service: MainService }) {
  return (
    <>
      <PageFrame>
        <main className="min-h-screen bg-background pt-18 text-foreground">
          <MainServiceHero service={service} />
          <TrustSection service={service} />
          <ExploreSection service={service} />
          <SectionCta label={service.sectionCtas?.afterServices} />
          <TechStackSection service={service} />
          <IndustriesSection service={service} />
          <BenefitsSection service={service} />
          <WhyChooseUsSection service={service} />
          <SectionCta label={service.sectionCtas?.afterWhyChooseUs} />
          <ClientSuccessStories service={service} />
          <ProcessSection service={service} />
          <PricingSection plans={service.pricing || []} service={service} />
          <AgencySection service={service} />
          <FaqSection service={service} />
          <FinalCTA service={service} />
        </main>
      </PageFrame>
    </>
  );
}

