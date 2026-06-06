import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Hero,
  IconFor,
  PageFrame,
  SectionHeading,
  StatsBand,
} from "../[main_service]/[sub_service]/landing-primitives";
import { services } from "../[main_service]/[sub_service]/service-data";

const values = [
  "Architecture before acceleration",
  "Transparent delivery rhythms",
  "Design that respects real users",
  "Post-launch ownership",
];

export default function AboutPage() {
  return (
    <PageFrame>
      <Hero
        eyebrow="About Clickmasters"
        title="Digital products with studio craft and engineering depth."
        copy="We are a software and design team building websites, apps, automation systems, and AI-enabled products for companies that need reliable execution without losing the spark."
        badge="Strategy, design, engineering, and support under one roof"
      />
      <StatsBand />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeading
            eyebrow="How we work"
            title="Senior thinking at every turn."
            copy="Our work starts with the business constraint, then moves into product structure, interface quality, and clean implementation."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[8px] border border-black/10 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="mb-5 h-5 w-5 text-[#e05b35]" />
                <p className="text-xl font-semibold leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fffaf1] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="One team for the full build."
            copy="From product strategy to cloud delivery, the pages below are powered by the service catalog used in the navigation."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {Object.values(services)
              .slice(0, 6)
              .map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group rounded-[8px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white">
                    <IconFor name={service.icon} />
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/58">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e05b35]">
                    View service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
