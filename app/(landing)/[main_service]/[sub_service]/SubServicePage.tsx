import { CheckCircle2, Clock3, ChevronRight } from "lucide-react";
import Link from "next/link";
import { isRetiredSub } from "@/lib/site-routes.mjs";
import { catalogWordCount, lookupCatalog } from "@/lib/catalog-page";
import { buildServiceArticle } from "@/lib/service-copy";
import { Hero, PageFrame, SectionHeading } from "./landing-primitives";
import ProcessSection from "./process-section";
import { CatalogArticle, FallbackArticle } from "./CatalogArticle";
import type { MainService, SubService } from "./service-data";

const CASE_STUDY = "/case-studies/pre-launch-qa-for-a-saas-booking-platform";

export default function SubServicePage({
  service,
  subService,
}: {
  service: MainService;
  subService: SubService;
}) {
  const highlights = subService.highlights || [
    "Clear product and technical roadmap",
    "Scalable implementation standards",
    "Launch support and measurable outcomes",
  ];
  const catalog = lookupCatalog(subService.slug);
  const catalogWords = catalogWordCount(catalog);
  const showCatalog = Boolean(catalog && catalogWords >= 180);
  const fallback = buildServiceArticle({
    serviceTitle: service.title,
    serviceDescription: service.description,
    subTitle: subService.title,
    description: subService.description,
    lead: subService.lead,
    highlights,
    pricing: subService.pricing || [],
  });
  const siblings = (service.subServices || [])
    .filter(
      (item) =>
        item.slug !== subService.slug &&
        !isRetiredSub(service.slug, item.slug),
    )
    .slice(0, 2);

  return (
    <PageFrame>
      <div className="relative z-20 border-b border-border bg-background/80 backdrop-blur-md pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-10">
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              href={`/${service.slug}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {service.title}
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">
              {subService.title}
            </span>
          </nav>
        </div>
      </div>
      <Hero
        eyebrow={service.title}
        title={subService.title}
        copy={subService.lead || subService.description}
        image={subService.heroImage || service.heroImage}
        imageAlt=""
      />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e05b35]">
              Delivery focus
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              Built to move from idea to production.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/62">
              {subService.description} The work sits inside{" "}
              <Link
                href={`/${service.slug}`}
                className="font-semibold text-[#e05b35]"
              >
                {service.title}
              </Link>{" "}
              and is scoped, built, reviewed, and handed over as one
              engagement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[8px] border border-black/10 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="mb-6 h-5 w-5 text-[#e05b35]" />
                <p className="text-xl font-semibold leading-tight">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showCatalog && catalog ? <CatalogArticle page={catalog} /> : null}
      {catalogWords < 550 ? <FallbackArticle sections={fallback} /> : null}
      {subService.pricing && !catalog?.pricingTiers?.length ? (
        <section className="bg-[#fffaf1] px-5 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Engagements"
              title="Pricing guidance"
              copy="Use these as planning anchors. Final scope depends on product complexity and integrations."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {subService.pricing.map((tier) => (
                <div
                  key={tier.type}
                  className="rounded-[8px] bg-white p-6 ring-1 ring-black/10"
                >
                  <Clock3 className="mb-8 h-5 w-5 text-[#e05b35]" />
                  <h3 className="text-2xl font-semibold">{tier.type}</h3>
                  <p className="mt-5 text-4xl font-semibold tracking-tight">
                    {tier.investment}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-black/45">
                    {tier.timeline}
                  </p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-black/65">
              <Link href="/contact" className="font-semibold text-[#e05b35]">
                Request a written quote
              </Link>{" "}
              after a discovery call. The quote names what is included.
            </p>
          </div>
        </section>
      ) : null}
      {showCatalog && catalog?.processPhases?.length ? null : (
        <ProcessSection />
      )}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Related reading
          </h2>
          <p className="mt-4 text-lg leading-8 text-black/70">
            {subService.title} is one line inside{" "}
            <Link
              href={`/${service.slug}`}
              className="font-semibold text-[#e05b35]"
            >
              {service.title}
            </Link>
            .
            {siblings[0] ? (
              <>
                {" "}
                Teams with an adjacent problem often compare it with{" "}
                <Link
                  href={`/${service.slug}/${siblings[0].slug}`}
                  className="font-semibold text-[#e05b35]"
                >
                  {siblings[0].title}
                </Link>
              </>
            ) : null}
            {siblings[1] ? (
              <>
                {" "}
                or{" "}
                <Link
                  href={`/${service.slug}/${siblings[1].slug}`}
                  className="font-semibold text-[#e05b35]"
                >
                  {siblings[1].title}
                </Link>
              </>
            ) : null}
            . For a written delivery narrative, read the{" "}
            <Link href={CASE_STUDY} className="font-semibold text-[#e05b35]">
              SaaS booking platform QA case study
            </Link>{" "}
            and the rest of the{" "}
            <Link href="/case-studies" className="font-semibold text-[#e05b35]">
              case studies
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="border-t border-border bg-background px-5 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:opacity-80"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to {service.title}
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
