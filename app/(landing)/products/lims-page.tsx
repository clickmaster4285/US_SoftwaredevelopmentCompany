import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Cable,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  ClipboardPlus,
  FileClock,
  FileSignature,
  FlaskConical,
  Link2,
  Lock,
  QrCode,
  ShieldCheck,
  TestTubes,
  UserCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass, ProductLink } from "./clinic-management-page";
import {
  architecture,
  automationRules,
  benefits,
  challengeRows,
  cloudRows,
  complianceDesign,
  complianceRows,
  customReasons,
  dataChecks,
  features,
  implementationSteps,
  instrumentRows,
  labTypeRows,
  LIMS_PATH,
  limsDescription,
  limsFaqs,
  limsImages,
  limsManages,
  limsTitle,
  limsVsLisRows,
  PRODUCT_NAME,
  qaCapabilities,
  qcCapabilities,
  sampleSteps,
  systemRows,
  trackingCapabilities,
  whyClickmasters,
  type LimsFeature,
  type LinkSpec,
} from "./lims-data";

export { LIMS_PATH, limsDescription, limsTitle };

const ICONS: Record<string, LucideIcon> = {
  Activity,
  BarChart3,
  Boxes,
  Building2,
  Cable,
  CalendarClock,
  ClipboardCheck,
  ClipboardPlus,
  FileClock,
  FileSignature,
  FlaskConical,
  Link2,
  QrCode,
  TestTubes,
  UserCheck,
  Workflow,
};

const ACCENT = "#7c3aed";
const INDUSTRY_SLUG = "healthcare-medical-software";

export function limsSchema() {
  const url = pageUrl(LIMS_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: limsTitle,
        description: limsDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(limsImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Laboratory Information Management System (LIMS) Development",
        serviceType: "Custom LIMS Software Development",
        provider: org,
        areaServed: { "@type": "Country", name: "United States" },
        url,
        image: pageUrl(limsImages.dashboard.src),
        description:
          "Custom laboratory information management system software for US laboratories, covering sample tracking, instrument integration, quality control, audit trails and validation-ready design.",
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
        mainEntity: limsFaqs.map((faq) => ({
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
  { href: "#what-is-lims", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#lims-features", label: "Features" },
  { href: "#lab-types", label: "Lab types" },
  { href: "#sample-tracking", label: "Sample tracking" },
  { href: "#instrument-integration", label: "Instruments" },
  { href: "#quality", label: "QC & QA" },
  { href: "#compliance", label: "Compliance" },
  { href: "#custom-lims", label: "Custom LIMS" },
  { href: "#implementation", label: "Implementation" },
  { href: "#faq", label: "FAQ" },
];

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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#1e1338] shadow-xl shadow-violet-950/10 ring-1 ring-black/5">
      <div
        className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> lims.example / concept
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
        className="block h-auto w-full bg-[#f6f5fb]"
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
    <figure className="overflow-hidden rounded-3xl border border-border bg-[#efeaf9] shadow-xl shadow-violet-950/10">
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

function CtaLink({
  children,
  light = false,
  outline = false,
}: {
  children: ReactNode;
  light?: boolean;
  outline?: boolean;
}) {
  const solid = light
    ? "bg-white text-[#1e1338]"
    : "bg-primary text-primary-foreground";
  const ghost = light
    ? "border border-white/30 text-white hover:bg-white/10"
    : "border border-border hover:bg-secondary";
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${outline ? ghost : solid}`}
    >
      {children}
      {outline ? null : <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

function CtaStrip({ title, cta }: { title: string; cta: string }) {
  return (
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#ddd6fe] bg-[#f5f3ff] p-6 md:flex-row md:items-center">
      <p className="max-w-2xl text-base font-semibold text-[#3b0764]">
        {title}
      </p>
      <CtaLink>{cta}</CtaLink>
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

function TitledCards({
  items,
  numbered = false,
  className = "",
}: {
  items: readonly (readonly [string, string])[];
  numbered?: boolean;
  className?: string;
}) {
  return (
    <ul className={`grid gap-4 ${className}`}>
      {items.map(([title, text], index) => (
        <li
          key={title}
          className="rounded-2xl border border-border bg-white p-5"
        >
          <p className="flex items-start gap-3 font-semibold leading-snug">
            {numbered ? (
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: ACCENT }}
              >
                {index + 1}
              </span>
            ) : (
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: ACCENT }}
                aria-hidden
              />
            )}
            <span className={numbered ? "pt-0.5" : ""}>{title}</span>
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {text.charAt(0).toUpperCase() + text.slice(1)}
          </p>
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({
  feature,
  className = "",
}: {
  feature: LimsFeature;
  className?: string;
}) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article
      className={`rounded-2xl border border-border bg-white p-6 ${className}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ede9fe]">
        <Icon className="h-5 w-5 text-[#7c3aed]" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-semibold leading-snug">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {feature.text}
      </p>
    </article>
  );
}

const featureChunks: {
  features: LimsFeature[];
  visual?: { image: Img; caption: string; photo?: boolean };
}[] = [
  {
    features: features.slice(0, 5),
    visual: {
      image: limsImages.scan,
      caption:
        "Accessioning: a barcoded tube is scanned, matched to its submission and checked on receipt",
      photo: true,
    },
  },
  {
    features: features.slice(5, 10),
    visual: {
      image: limsImages.results,
      caption:
        "Results review: instrument data, specification checks, an OOS hold and a second-person e-signature",
    },
  },
  { features: features.slice(10, 16) },
];

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter(
      (item) => productPath(INDUSTRY_SLUG, item.slug) !== LIMS_PATH,
    ) ?? [];

export default function LimsPage() {
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
                Custom LIMS software
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                {PRODUCT_NAME}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
                <p>
                  Modern laboratories are under pressure from several directions
                  at once. Sample volumes keep rising. Turnaround expectations
                  keep shrinking. Instruments produce more data than anyone can
                  re-type. Auditors want every result traced back to the sample,
                  the analyst, the method and the instrument that produced it.
                  Spreadsheets, paper logbooks and disconnected instrument PCs
                  can&apos;t keep up.
                </p>
                <p>
                  Laboratory Information Management System Software brings this
                  work into one controlled system. The Laboratory Information
                  Management System (LIMS) tracks each sample from receipt to
                  disposal, assigns tests, captures instrument results, enforces
                  QC rules, manages reagents and equipment, and keeps an audit
                  trail of every action.
                </p>
                <p>
                  Clickmasters plans and builds LIMS software for laboratories
                  in the United States whose workflows don&apos;t fit a generic
                  product.
                  That includes clinical and diagnostic labs, pharmaceutical and
                  biotech labs, and environmental, food and manufacturing QC
                  labs. We scope the product, the timeline and the quote before
                  development starts.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink>Build Your Custom LIMS Software</CtaLink>
                <CtaLink outline>Get in touch</CtaLink>
              </div>
            </div>
            <AppFigure
              image={limsImages.dashboard}
              caption="Lab dashboard: sample status, pending tests by department, turnaround time and instrument status"
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
          id="what-is-lims"
          eyebrow="Definition"
          title="What Is a Laboratory Information Management System (LIMS)?"
        >
          <Prose>
            <p>
              A laboratory information management system is software that
              manages samples, tests, results and the lab resources around them.
              Its core job is traceability: for any reported value, the LIMS can
              show which sample it came from, who received it, which method and
              instrument were used, which QC checks passed, who reviewed and
              approved it, and when.
            </p>
            <p>A LIMS usually manages:</p>
          </Prose>
          <TitledCards
            items={limsManages}
            className="mt-6 sm:grid-cols-2 lg:grid-cols-3"
          />

          <H3 className="mt-14">LIMS vs. LIS: Are They the Same?</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            The two terms overlap, but they are not interchangeable everywhere.
          </p>
          <CompareTable
            caption="LIMS compared with LIS"
            headers={[
              "",
              "LIMS (Laboratory Information Management System)",
              "LIS (Laboratory Information System)",
            ]}
            rows={limsVsLisRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Many modern systems cover both models, and some vendors use the
            terms loosely. When we scope a project, we focus on your workflow,
            not the label.
          </p>
        </Section>

        {/* How it works */}
        <Section
          id="how-it-works"
          eyebrow="One sample, step by step"
          title="How Does LIMS Software Work?"
        >
          <Prose>
            <p>A typical sample&apos;s path through a LIMS:</p>
          </Prose>
          <DiagramFigure
            image={limsImages.workflow}
            caption="Eight steps from login to disposal, each one written to the audit trail"
            className="mt-8"
          />
          <TitledCards
            items={sampleSteps}
            numbered
            className="mt-8 md:grid-cols-2 lg:grid-cols-4"
          />
          <p className="mt-8 max-w-3xl text-base font-medium leading-7 text-foreground">
            Every step is recorded in the audit trail with user, date and time,
            and the reason for any change.
          </p>
        </Section>

        {/* Features */}
        <Section
          id="lims-features"
          eyebrow="16 core modules"
          title="Key Features of a Laboratory Information Management System"
        >
          <div className="space-y-14">
            {featureChunks.map((chunk) => (
              <div key={chunk.features[0].title}>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                  {chunk.features.map((feature, index) => (
                    <FeatureCard
                      key={feature.title}
                      feature={feature}
                      className={
                        chunk.features.length === 5 && index >= 3
                          ? "lg:col-span-3"
                          : "lg:col-span-2"
                      }
                    />
                  ))}
                </div>
                {chunk.visual ? (
                  <div className="mt-8">
                    {chunk.visual.photo ? (
                      <PhotoFigure
                        image={chunk.visual.image}
                        caption={chunk.visual.caption}
                      />
                    ) : (
                      <AppFigure
                        image={chunk.visual.image}
                        caption={chunk.visual.caption}
                      />
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <CtaStrip
            title="Want these modules configured around your samples, methods and instruments?"
            cta="Request a LIMS Development Consultation"
          />
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Laboratory Information Management Software"
        >
          <TitledCards
            items={benefits}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Lab types */}
        <Section
          id="lab-types"
          eyebrow="Who it is for"
          title="Types of Laboratories That Use LIMS"
        >
          <CompareTable
            caption="What a LIMS must handle well by laboratory type"
            headers={["Laboratory type", "What the LIMS must handle well"]}
            rows={labTypeRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            In clinical and diagnostic labs, test results only help patients
            once they reach the clinician. That means a laboratory system has to
            exchange orders and results with the provider&apos;s{" "}
            <ProductLink slug="electronic-health-records-ehr-software">
              Electronic Health Records (EHR) software
            </ProductLink>
            , usually through HL7 v2 or FHIR interfaces. The result then lands
            in the patient chart as discrete, coded data instead of a scanned
            PDF.
          </p>
        </Section>

        {/* Sample tracking */}
        <Section
          id="sample-tracking"
          eyebrow="Where, what state, who"
          title="Laboratory Sample Tracking and Chain of Custody"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-base leading-7 text-muted-foreground">
                Laboratory sample management software answers three questions
                at any moment: where is the sample, what state is it in, and
                who is responsible for it?
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                A custom LIMS supports this with:
              </p>
              <CheckList items={trackingCapabilities} className="mt-4" />
            </div>
            <div className="self-start rounded-3xl bg-[#1e1338] p-6 text-sm leading-7 text-white/80 md:p-8">
              <p className="text-lg font-semibold text-white">
                Chain of custody goes a step further.
              </p>
              <p className="mt-3">
                It is a documented, unbroken record of possession, often signed
                at each transfer. Environmental, forensic, toxicology and
                legal-defensible testing depend on it, because a gap in custody
                can make a valid result unusable. The LIMS records each transfer
                with person, time, location and signature, and flags any break
                in the chain.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <AppFigure
              image={limsImages.tracking}
              caption="Sample record: barcode, genealogy, storage position, temperature history and signed chain of custody"
            />
          </div>
        </Section>

        {/* Workflow automation */}
        <Section
          id="workflow-automation"
          eyebrow="Removing the gaps"
          title="Laboratory Workflow Automation and Process Optimization"
        >
          <Prose>
            <p>
              Most lab delays happen between steps, not during analysis: a
              sample waiting for login, a batch waiting for a reviewer, a retest
              nobody noticed. Laboratory workflow management software removes
              those gaps:
            </p>
          </Prose>
          <CheckList items={automationRules} className="mt-6 md:grid-cols-2" />
          <div
            className="mt-8 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
            style={{ borderColor: ACCENT }}
          >
            Beyond rule-based automation, some labs now use machine learning for
            tasks such as spotting unusual result patterns, forecasting sample
            volumes and staffing, or extracting data from incoming requisition
            forms. Our{" "}
            <Link
              href="/artificial-intelligence-ai/ai-automation-systems"
              className={linkClass}
            >
              AI automation systems
            </Link>{" "}
            work can add these capabilities to a LIMS where they are useful. In
            regulated labs, they should stay as decision support under human
            review, never as a hidden replacement for approval.
          </div>
        </Section>

        {/* Instruments */}
        <Section
          id="instrument-integration"
          eyebrow="Data capture"
          title="Laboratory Instrument Integration and Data Management"
        >
          <Prose>
            <p>
              Instrument integration is often the biggest source of value in a
              LIMS project, and the hardest part to get right. Laboratory data
              management software then keeps each captured result structured,
              checked and tied to the sample, method and instrument behind it.
            </p>
          </Prose>
          <DiagramFigure
            image={limsImages.integration}
            caption="Instruments and enterprise systems connected to a cloud LIMS through an on-site gateway and APIs"
            className="mt-8"
          />
          <CompareTable
            caption="Laboratory instrument integration methods and typical uses"
            headers={["Integration method", "Typical use"]}
            rows={instrumentRows}
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className="font-semibold">
                Data capture and validation rules then check incoming data:
              </p>
              <CheckList items={dataChecks} className="mt-4" />
            </div>
            <div className="self-start rounded-2xl border border-[#fde68a] bg-[#fffbeb] px-5 py-4 text-sm leading-7 text-[#78350f]">
              Results that fail these checks are held for review rather than
              released automatically.
            </div>
          </div>
        </Section>

        {/* QC / QA */}
        <Section
          id="quality"
          eyebrow="Trustworthy results"
          title="Laboratory Quality Control and Quality Assurance"
        >
          <Prose>
            <p>
              Quality control (QC) checks whether a run or batch is trustworthy.
              Quality assurance (QA) checks whether the lab&apos;s system as a
              whole is working. A laboratory quality management system in a LIMS
              supports both.
            </p>
          </Prose>
          <div className="mt-8">
            <AppFigure
              image={limsImages.qc}
              caption="Levey-Jennings chart with Westgard rule violations, a batch hold and a phased OOS investigation"
            />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-lg font-semibold">QC capabilities:</p>
              <CheckList items={qcCapabilities} className="mt-4" />
            </div>
            <div>
              <p className="text-lg font-semibold">QA capabilities:</p>
              <TitledCards items={qaCapabilities} className="mt-4" />
            </div>
          </div>
        </Section>

        {/* Compliance */}
        <Section
          id="compliance"
          eyebrow="Regulated data"
          title="LIMS Data Security, Audit Trails and Compliance Considerations"
        >
          <Prose>
            <p>
              Which regulations apply depends on your laboratory type, the
              intended use of its data, your customers and your jurisdiction.
              Not every LIMS needs every standard below, and no software is
              &quot;compliant&quot; by itself. Compliance comes from validated
              software, controlled procedures and trained people working
              together.
            </p>
          </Prose>
          <CompareTable
            caption="Standards and regulations that may apply to a LIMS"
            headers={[
              "Standard / regulation",
              "When it typically applies",
              "What it means for LIMS design",
            ]}
            rows={complianceRows}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <p className="font-semibold">
                How a custom LIMS can be designed to support these requirements:
              </p>
              <CheckList items={complianceDesign} className="mt-4" />
            </div>
            <AppFigure
              image={limsImages.audit}
              caption="Audit trail with old and new values and reasons, plus a linked electronic signature record"
            />
          </div>
          <div className="mt-8 rounded-3xl bg-[#1e1338] p-6 text-sm leading-7 text-white/80 md:p-8">
            Clickmasters is not an FDA-certified vendor, and FDA does not
            certify LIMS software. We build systems designed to support your
            validation and compliance program. Your laboratory&apos;s QA
            function remains responsible for validating the system and
            confirming that it is fit for its intended use.
          </div>
        </Section>

        {/* Cloud */}
        <Section
          id="cloud-vs-on-premise"
          eyebrow="Deployment"
          title="Cloud-Based LIMS vs. On-Premise LIMS"
        >
          <CompareTable
            caption="Cloud-based LIMS software compared with on-premise LIMS"
            headers={["Factor", "Cloud-Based LIMS Software", "On-Premise LIMS"]}
            rows={cloudRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Many laboratories choose a hybrid model: a cloud-based LIMS
            application with a lightweight on-site gateway that collects
            instrument data and keeps working during short internet outages.
          </p>
        </Section>

        {/* Custom */}
        <Section
          id="custom-lims"
          eyebrow="Build for your lab"
          title="Custom LIMS Software Development"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-base leading-7 text-muted-foreground">
                Commercial laboratory management software is powerful, but it
                often needs costly configuration, consultants and workarounds
                before it fits a specific laboratory. The best LIMS software
                follows the lab&apos;s own methods instead of forcing those
                workarounds. Custom LIMS software development makes sense when:
              </p>
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
                , we design LIMS platforms with:
              </p>
              <ul className="mt-5 space-y-3">
                {architecture.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base font-medium leading-7 text-foreground">
            A custom build isn&apos;t right for every lab. If a commercial LIMS
            fits your needs, we&apos;ll say so, and we can still build the
            integrations, portals or modules around it.
          </p>
          <CtaStrip
            title="Running more labs, more clients or more instruments than your current system can handle?"
            cta="Develop a Scalable Laboratory Management Platform"
          />
        </Section>

        {/* Systems integration */}
        <Section
          id="system-integration"
          eyebrow="Connected lab"
          title="LIMS Integration With Existing Laboratory Systems"
        >
          <Prose>
            <p>A LIMS rarely works alone. Common integrations include:</p>
          </Prose>
          <CompareTable
            caption="Systems a LIMS commonly integrates with and the data exchanged"
            headers={["System", "Data exchanged"]}
            rows={systemRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Good integrations need well-designed, documented and monitored
            interfaces, not one-off scripts that break with each upgrade. Our{" "}
            <Link
              href="/software-development/api-development-integration"
              className={linkClass}
            >
              API development and integration
            </Link>{" "}
            team builds REST and FHIR APIs, message interfaces and integration
            middleware with error queues, retries and logging, so every lab
            result that leaves the system can be accounted for.
          </p>
        </Section>

        {/* Implementation */}
        <Section
          id="implementation"
          eyebrow="Delivery"
          title="LIMS Implementation Process"
        >
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {implementationSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  Stage {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold leading-snug">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  <LinkedText text={step.text} link={step.link} />
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="Problems we solve"
          title="Common Laboratory Management Challenges and How LIMS Solves Them"
        >
          <CompareTable
            caption="Common laboratory management challenges and how a LIMS solves them"
            headers={["Challenge", "How a LIMS solves it"]}
            rows={challengeRows}
          />
        </Section>

        {/* Why */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters for Custom LIMS Software Development?"
        >
          <TitledCards
            items={whyClickmasters}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Final CTA */}
        <section className="border-t border-border bg-[#1e1338] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Discuss Your Laboratory Software Project
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re replacing spreadsheets, outgrowing a
                commercial LIMS, or building a laboratory platform as your own
                product, the first step is the same: a clear look at your
                samples, tests, instruments and compliance needs.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us your lab type, sample volume, key instruments and
                current systems. We&apos;ll come back with a practical
                recommendation (build, extend or buy), the modules and
                integrations involved, and the next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink light>Talk about {PRODUCT_NAME}</CtaLink>
                <CtaLink light outline>
                  Request a LIMS Development Consultation
                </CtaLink>
              </div>
              <p className="mt-4 text-sm text-white/60">
                No commitment. We scope the product, the timeline and the quote
                before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Tell us about:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Your lab type",
                  "Your sample volume",
                  "Your key instruments",
                  "The systems you use today",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c4b5fd] text-[#1e1338]">
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
              Frequently Asked Questions About LIMS
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {limsFaqs.map((faq, index) => (
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
