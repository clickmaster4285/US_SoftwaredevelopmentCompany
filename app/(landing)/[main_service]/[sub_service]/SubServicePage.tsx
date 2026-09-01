import { CheckCircle2, Clock3, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Hero, PageFrame, SectionHeading } from "./landing-primitives";
import ProcessSection from "./process-section";
import type { MainService, SubService } from "./service-data";

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
        badge={subService.description}
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
              We combine planning, design, engineering, QA, and support so this
              work lands as a usable product, not a loose set of assets.
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
      {subService.pricing ? (
        <section className="bg-[#fffaf1] px-5 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Engagements"
              title="Typical project shapes"
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
          </div>
        </section>
      ) : null}
      <ProcessSection />
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
