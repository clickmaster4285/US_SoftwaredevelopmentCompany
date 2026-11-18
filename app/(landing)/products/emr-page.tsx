import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardList,
  CloudCog,
  FileClock,
  FlaskConical,
  FolderHeart,
  HeartPulse,
  History,
  Hospital,
  IdCard,
  Layers,
  Lock,
  NotebookPen,
  Pill,
  Rocket,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass, ProductLink } from "./clinic-management-page";
import {
  architecture,
  benefits,
  buildBuyRows,
  challengeRows,
  cloudVsOnPremRows,
  customReasons,
  EMR_PATH,
  emrDescription,
  emrFaqs,
  emrImages,
  emrTitle,
  emrVsEhrRows,
  featureGroups,
  hl7Messages,
  implementationSteps,
  integrationTopics,
  organizations,
  PRODUCT_NAME,
  safeguardGroups,
  structuredUses,
  visitSteps,
  whyClickmasters,
  type EmrFeature,
  type EmrFeatureGroup,
  type LinkSpec,
} from "./emr-data";

export { EMR_PATH, emrDescription, emrTitle };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Brain,
  Building2,
  CalendarCheck,
  ClipboardList,
  CloudCog,
  FileClock,
  FlaskConical,
  FolderHeart,
  HeartPulse,
  History,
  Hospital,
  IdCard,
  Layers,
  Lock,
  NotebookPen,
  Pill,
  Rocket,
  Stethoscope,
  UserCheck,
};

const ACCENT = "#0d9488";
const INDUSTRY_SLUG = "healthcare-medical-software";

export function emrSchema() {
  const url = pageUrl(EMR_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: emrTitle,
        description: emrDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(emrImages.chart.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Electronic Medical Records (EMR) Software Development",
        serviceType: "Custom EMR Software Development",
        provider: org,
        areaServed: { "@type": "Country", name: "United States" },
        url,
        image: pageUrl(emrImages.chart.src),
        description:
          "Custom Electronic Medical Records (EMR) software for US medical practices, clinics and healthcare providers, including charting, e-prescribing, lab integration, FHIR APIs and HIPAA-aware security.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: pageUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: pageUrl("/products"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Healthcare & Medical Software",
            item: pageUrl(`/products/${INDUSTRY_SLUG}`),
          },
          { "@type": "ListItem", position: 4, name: PRODUCT_NAME, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: emrFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

type Img = { src: string; alt: string; width: number; height: number };

const contents = [
  { href: "#what-is-emr", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#emr-features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#organizations", label: "Organizations" },
  { href: "#cloud-vs-on-premise", label: "Cloud vs on-premise" },
  { href: "#integration", label: "Integration" },
  { href: "#security", label: "HIPAA & security" },
  { href: "#custom-emr", label: "Custom EMR" },
  { href: "#implementation", label: "Implementation" },
  { href: "#faq", label: "FAQ" },
];

/** Renders `text`, turning the first occurrence of `link.anchor` into an internal link. */
function LinkedText({ text, link }: { text: string; link?: LinkSpec }) {
  if (!link) return <>{text}</>;
  const at = text.indexOf(link.anchor);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <Link href={link.href} className={linkClass}>
        {link.anchor}
      </Link>
      {text.slice(at + link.anchor.length)}
    </>
  );
}

function AppFigure({
  image,
  caption,
  priority = false,
}: {
  image: Img;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#082a28] shadow-xl shadow-teal-950/10 ring-1 ring-black/5">
      <div
        className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> emr.example / concept
        </span>
      </div>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="block h-auto w-full bg-[#f2f7f6]"
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-2.5 text-xs text-muted-foreground">
        <span>{caption}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">
          Illustrative concept
        </span>
      </figcaption>
    </figure>
  );
}

function PhotoFigure({ image, caption }: { image: Img; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-[#e6f4f1] shadow-xl shadow-teal-950/10">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-2.5 text-xs text-muted-foreground">
        <span>{caption}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">
          Illustrative concept
        </span>
      </figcaption>
    </figure>
  );
}

function DiagramFigure({
  image,
  caption,
  className = "",
}: {
  image: Img;
  caption: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-3xl border border-border bg-white p-3 md:p-5 ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="mx-auto block h-auto w-full max-w-5xl"
      />
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function H3({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-2xl font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

function CtaPair({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#042f2e]" : "bg-primary text-primary-foreground"}`}
      >
        Talk about {PRODUCT_NAME}
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        href="/contact"
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border hover:bg-secondary"}`}
      >
        Get in touch
      </Link>
    </div>
  );
}

function CheckList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-6 text-muted-foreground"
        >
          <Check
            className="mt-1 h-4 w-4 shrink-0"
            style={{ color: ACCENT }}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({ feature }: { feature: EmrFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ccfbf1]">
          <Icon className="h-5 w-5 text-[#0d9488]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
      </div>
      <CheckList items={feature.bullets} className="mt-5" />
    </article>
  );
}

const visuals: Record<
  EmrFeatureGroup["visuals"][number],
  { image: Img; caption: string; kind: "app" | "photo" }
> = {
  documentation: {
    image: emrImages.tablet,
    caption:
      "Clinical documentation on a tablet: SOAP template, smart phrases, coded assessment and E/M prompt",
    kind: "photo",
  },
  scheduling: {
    image: emrImages.scheduling,
    caption:
      "Provider calendars with appointment types, a recall list and automated reminders",
    kind: "app",
  },
  prescribing: {
    image: emrImages.prescribing,
    caption:
      "e-Prescribing with a drug–allergy alert, safety checks, pharmacy requests and EPCS",
    kind: "app",
  },
  labs: {
    image: emrImages.labs,
    caption:
      "LOINC-coded flowsheet, abnormal flags, an HbA1c trend and the results inbox",
    kind: "app",
  },
  reports: {
    image: emrImages.reports,
    caption:
      "Operational dashboard, diabetes registry and quality measures (placeholder data)",
    kind: "app",
  },
};

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter(
      (item) => productPath(INDUSTRY_SLUG, item.slug) !== EMR_PATH,
    ) ?? [];

export default function EmrPage() {
  return (
    <PageFrame>
      <main className="bg-background pt-28 text-foreground md:pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/products" className="hover:text-foreground">
                  Products
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={industryPath(INDUSTRY_SLUG)}
                  className="hover:text-foreground"
                >
                  Healthcare & Medical Software
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{PRODUCT_NAME}</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: ACCENT }}
              >
                Healthcare & Medical Software
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                {PRODUCT_NAME}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Electronic Medical Records (EMR) software turns the paper
                  chart into a structured, searchable clinical record. It holds
                  a patient&apos;s problems, medications, allergies, vitals,
                  notes, orders and results inside one practice&apos;s workflow.
                  Clickmasters designs and builds custom EMR systems for US
                  medical practices, clinics, specialty groups and HealthTech
                  teams that need a record system shaped around how their
                  clinicians actually work, rather than bending their workflow
                  to fit an off-the-shelf template.
                </p>
                <p>
                  We scope the product with you, build it in stages and
                  integrate it with the systems you already use: labs, billing,
                  pharmacy and scheduling. Security and HIPAA safeguards are
                  designed in from the first sprint.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair />
              </div>
            </div>
            <AppFigure
              image={emrImages.chart}
              caption="Digital patient chart: coded problems, reconciled medications, vitals, HbA1c trend and care reminders"
              priority
            />
          </div>

          <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-2">
            {contents.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-border px-3 py-1.5 text-sm font-medium hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        {/* What is */}
        <Section
          id="what-is-emr"
          eyebrow="Definition"
          title="What Is Electronic Medical Records (EMR) Software?"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            <Prose>
              <p>
                An Electronic Medical Records system is the digital version of
                the chart a provider keeps for each patient inside one practice
                or organization. It records what happened during care: why the
                patient came in, what the clinician found, what was diagnosed,
                what was ordered and prescribed, and what the follow-up plan is.
              </p>
              <p>
                A well-built EMR does more than store documents. It captures
                data in structured fields, so the system can work with it. That
                means it can:
              </p>
            </Prose>
            <div className="rounded-3xl border border-[#99f6e4] bg-[#f0fdfa] p-6">
              <p
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                Structured data lets an EMR
              </p>
              <CheckList items={structuredUses} className="mt-4" />
            </div>
          </div>

          <H3 className="mt-14">EMR vs. EHR: What Is the Difference?</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            The terms are often used as if they mean the same thing, but they
            describe different scopes.
          </p>
          <CompareTable
            caption="EMR compared with EHR"
            headers={[
              "",
              "EMR (Electronic Medical Record)",
              "EHR (Electronic Health Record)",
            ]}
            rows={emrVsEhrRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Many practices start with an EMR and later need wider data exchange.
            If your main goal is to share a complete record across facilities,
            care teams and outside providers, our{" "}
            <ProductLink slug="electronic-health-records-ehr-software">
              Electronic Health Records (EHR) software
            </ProductLink>{" "}
            page covers that broader architecture. Most of the engineering we
            describe below, such as structured data, standards-based APIs and
            audit logging, is what lets an EMR grow into an EHR later without a
            rebuild.
          </p>
        </Section>

        {/* How it works */}
        <Section
          id="how-it-works"
          eyebrow="A visit, step by step"
          title="How EMR Software Works in a Modern Medical Practice"
        >
          <Prose>
            <p>
              The quickest way to understand an EMR system is to follow one
              patient visit through it.
            </p>
          </Prose>
          <DiagramFigure
            image={emrImages.workflow}
            caption="Six steps of one visit, all written to the same chart, with the connected systems behind them"
            className="mt-8"
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visitSteps.map(([title, text], index) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {index + 1}
                  </span>
                  <p className="font-semibold">{title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Behind that visit, the EMR is coordinating with other systems.
            Scheduling, eligibility, claims and the revenue cycle usually live
            in{" "}
            <ProductLink slug="medical-practice-management-software">
              medical practice management software
            </ProductLink>
            . The two must stay in sync, so that a clinical note completed in
            the EMR becomes a correctly coded charge without anyone copying
            information between screens.
          </p>
        </Section>

        {/* Features */}
        <Section
          id="emr-features"
          eyebrow="11 core modules"
          title="Key Features and Capabilities of EMR Software"
        >
          <Prose>
            <p>
              Below are the core modules of a production-grade EMR system. In a
              custom build, you choose which ones to include and how deep each
              goes.
            </p>
          </Prose>
          <div className="mt-10 space-y-16">
            {featureGroups.map((group) => (
              <div key={group.title}>
                <div className="border-b border-border pb-4">
                  <p className="text-xl font-semibold tracking-tight">
                    {group.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {group.summary}
                  </p>
                </div>
                <div
                  className={`mt-6 grid gap-6 ${group.features.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
                >
                  {group.features.map((feature) => (
                    <FeatureCard key={feature.title} feature={feature} />
                  ))}
                </div>
                <div
                  className={`mt-8 grid gap-6 ${group.visuals.length > 1 ? "lg:grid-cols-2" : ""}`}
                >
                  {group.visuals.map((key) => {
                    const visual = visuals[key];
                    return visual.kind === "photo" ? (
                      <PhotoFigure
                        key={key}
                        image={visual.image}
                        caption={visual.caption}
                      />
                    ) : (
                      <AppFigure
                        key={key}
                        image={visual.image}
                        caption={visual.caption}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Electronic Medical Records Software"
        >
          <Prose>
            <p>
              When an EMR is designed around real workflows, the benefits show
              up in day-to-day work:
            </p>
          </Prose>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p className="flex items-start gap-2 font-semibold leading-snug">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: ACCENT }}
                    aria-hidden
                  />
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <div
            className="mt-8 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
            style={{ borderColor: ACCENT }}
          >
            These results are not automatic. An EMR that adds clicks, buries
            information or forces unnatural workflows can make things worse,
            which is why workflow design is the most important part of any EMR
            project.
          </div>
        </Section>

        {/* Organizations */}
        <Section
          id="organizations"
          eyebrow="Care settings"
          title="EMR Software for Different Healthcare Organizations"
        >
          <Prose>
            <p>
              The term &quot;EMR&quot; covers very different operating needs.
              Here is how requirements change by organization type.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {organizations.map((item) => {
              const Icon = ICONS[item.icon] ?? Stethoscope;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ccfbf1]">
                    <Icon className="h-5 w-5 text-[#0d9488]" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    <LinkedText text={item.text} link={item.link} />
                  </p>
                </article>
              );
            })}
          </div>
        </Section>

        {/* Cloud vs on-prem */}
        <Section
          id="cloud-vs-on-premise"
          eyebrow="Deployment"
          title="Cloud-Based EMR vs. On-Premise EMR Software"
        >
          <Prose>
            <p>
              Deployment affects cost, security responsibility, uptime and how
              fast you can scale.
            </p>
          </Prose>
          <CompareTable
            caption="Cloud-based EMR software compared with on-premise EMR software"
            headers={[
              "Factor",
              "Cloud-Based EMR Software",
              "On-Premise EMR Software",
            ]}
            rows={cloudVsOnPremRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            For most US practices, a cloud-based EMR on a HIPAA-eligible
            platform (such as AWS, Microsoft Azure or Google Cloud, each covered
            under a signed BAA) offers the best balance of cost, availability
            and security. A hybrid model, where a cloud application connects to
            on-premise devices or legacy systems, is common in hospitals during
            migration.
          </p>
        </Section>

        {/* Integration */}
        <Section
          id="integration"
          eyebrow="Interoperability"
          title="EMR Software Integration and Interoperability"
        >
          <Prose>
            <p>
              An EMR is only as useful as the data flowing into and out of it.
              Integration is usually where EMR projects succeed or fail, so we
              plan it during discovery, not after launch.
            </p>
          </Prose>
          <DiagramFigure
            image={emrImages.integration}
            caption="The EMR core, the HL7 v2 and FHIR standards layer, and the systems it connects to"
            className="mt-8"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-5 md:row-span-2">
              <h3 className="font-semibold">HL7 v2 Messaging</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                HL7 version 2 is still the most widely used standard for moving
                data between clinical systems in the US. Common message types
                include:
              </p>
              <dl className="mt-4 grid gap-2">
                {hl7Messages.map(([code, text]) => (
                  <div
                    key={code}
                    className="flex gap-3 rounded-xl bg-[#f0fdfa] px-3 py-2 text-sm leading-6"
                  >
                    <dt className="w-20 shrink-0 font-semibold text-[#0f766e]">
                      {code}
                    </dt>
                    <dd className="text-muted-foreground">{text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Integration engines such as Mirth Connect (NextGen Connect),
                Rhapsody or cloud-native interfaces handle message routing,
                mapping and error queues.
              </p>
            </article>
            {integrationTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <h3 className="font-semibold">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  <LinkedText text={topic.text} link={topic.link} />
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Security */}
        <Section
          id="security"
          eyebrow="Protected health information"
          title="EMR Data Security, Privacy and HIPAA Considerations"
        >
          <Prose>
            <p>
              An EMR stores protected health information (PHI), so security is
              part of the core design, not something added later.
            </p>
          </Prose>
          <div className="mt-6 max-w-4xl rounded-2xl border border-[#fde68a] bg-[#fffbeb] px-5 py-4 text-sm leading-7 text-[#78350f]">
            <span className="font-semibold">
              A note on HIPAA &quot;certification&quot;:{" "}
            </span>
            there is no official HIPAA certification for software. The US
            Department of Health and Human Services does not certify products as
            HIPAA compliant. Compliance depends on how a covered entity and its
            business associates use, configure and manage a system. Software can
            be built to support compliance; it cannot guarantee it. Be wary of
            any vendor that claims otherwise.
          </div>
          <div className="mt-8">
            <AppFigure
              image={emrImages.access}
              caption="Role permissions, an append-only audit trail and break-the-glass review"
            />
          </div>
          <p className="mt-10 text-base text-muted-foreground">
            Below is how we address the HIPAA Security Rule safeguards in EMR
            development.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {safeguardGroups.map((group) => {
              const Icon = ICONS[group.icon] ?? ShieldCheck;
              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-border bg-white p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ccfbf1]">
                    <Icon className="h-5 w-5 text-[#0d9488]" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">
                    {group.title}
                  </h3>
                  <CheckList items={group.items} className="mt-4" />
                </article>
              );
            })}
          </div>
          <div className="mt-8 rounded-3xl bg-[#042f2e] p-6 text-white md:p-8">
            <h3 className="text-xl font-semibold">
              Your Responsibilities as the Covered Entity
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-white/80">
              The healthcare organization remains responsible for its HIPAA risk
              analysis, policies, workforce training, BAAs with vendors
              (including the development and hosting partner, where they handle
              PHI) and breach notification. We design software so these duties
              are easier to meet. We do not replace your compliance program or
              legal counsel.
            </p>
          </div>
        </Section>

        {/* Custom */}
        <Section
          id="custom-emr"
          eyebrow="Build for scale"
          title="Custom EMR Software Development and Scalability"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Prose>
                <p>
                  Off-the-shelf EMR platforms are built for the average
                  practice. Custom EMR software makes sense when your specialty,
                  care model or integration needs don&apos;t fit that average.
                  Common reasons include:
                </p>
              </Prose>
              <CheckList items={customReasons} className="mt-5" />
            </div>
            <div>
              <p className="text-base leading-7 text-muted-foreground">
                Through our{" "}
                <Link
                  href="/software-development/custom-software-development"
                  className={linkClass}
                >
                  custom software development services
                </Link>
                , we build EMR platforms with an architecture designed to grow:
              </p>
              <ul className="mt-5 space-y-3">
                {architecture.map(([title, text]) => (
                  <li
                    key={title}
                    className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="font-semibold text-foreground">
                      {title}.
                    </span>{" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <H3 className="mt-14">Build vs. Buy vs. Extend</H3>
          <CompareTable
            caption="When to buy, extend or build an EMR"
            headers={["Approach", "When it fits"]}
            rows={buildBuyRows}
          />
          <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-foreground">
            We&apos;ll tell you honestly which option fits. A custom build is
            not the right answer for every practice.
          </p>
        </Section>

        {/* Implementation */}
        <Section
          id="implementation"
          eyebrow="Delivery"
          title="EMR Implementation Process"
        >
          <Prose>
            <p>
              A structured process reduces risk to clinical operations and
              patient care. Our EMR projects follow these stages:
            </p>
          </Prose>
          <ol className="relative mt-8 grid gap-4 md:grid-cols-3">
            {implementationSteps.map(([title, text], index) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <span
                  className="text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  Stage {index + 1}
                </span>
                <p className="mt-2 font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Timelines depend on scope. A focused EMR MVP covering one workflow
            typically takes a few months. A full multi-specialty platform with
            many integrations takes considerably longer. We give a scoped
            estimate after discovery rather than a number before we understand
            your requirements.
          </p>
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="Lessons learned"
          title="Common EMR Challenges and Practical Solutions"
        >
          <CompareTable
            caption="Common EMR challenges, why they happen and practical solutions"
            headers={["Challenge", "Why it happens", "Practical solution"]}
            rows={challengeRows}
          />
        </Section>

        {/* Why */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters for EMR Software Development"
        >
          <Prose>
            <p>
              Clickmasters is a software development company, and we approach an
              EMR as a product to engineer around your operation, not a box to
              install. Here is what working with us looks like:
            </p>
          </Prose>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyClickmasters.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p className="font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            You can also explore the other products in our Healthcare &amp;
            Medical Software suite, including hospital management, pharmacy,
            billing, patient management and telemedicine software, to plan a
            connected system rather than a set of separate tools.
          </p>
        </Section>

        {/* Final CTA */}
        <section className="border-t border-border bg-[#042f2e] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Build the EMR Your Practice Actually Needs
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you are replacing an EMR your clinicians struggle with,
                adding custom modules to a system you already use, or launching
                a new HealthTech product, the first step is the same: a clear
                look at your workflows, integrations and goals.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how your practice runs today and what has to change.
                We&apos;ll come back with a scoped recommendation: build, extend
                or buy, the modules involved, integration priorities and the
                next practical step.
              </p>
              <div className="mt-8">
                <CtaPair light />
              </div>
              <p className="mt-4 text-sm text-white/60">
                No commitment. Share your specialty, team size and current
                systems, and we&apos;ll take it from there.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">
                Our scoped recommendation covers:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Build, extend or buy",
                  "The modules involved",
                  "Integration priorities",
                  "The next practical step",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5eead4] text-[#042f2e]">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About EMR Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {emrFaqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group p-5 md:p-6"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold md:text-lg">
                    <h3>
                      {index + 1}. {faq.question}
                    </h3>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related products (site template block) */}
        {relatedProducts.length > 0 ? (
          <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              More in Healthcare &amp; Medical Software
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={productPath(INDUSTRY_SLUG, item.slug)}
                  className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold hover:border-primary/30 hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Sticky mobile CTA */}
        <style>
          {"@media (max-width: 767px) { body { padding-bottom: 72px; } }"}
        </style>
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
