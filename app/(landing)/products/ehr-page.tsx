import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardList,
  CloudCog,
  FileClock,
  FileSignature,
  FileUp,
  FlaskConical,
  FolderHeart,
  HeartPulse,
  History,
  Hospital,
  IdCard,
  KeyRound,
  Layers,
  Lock,
  Mail,
  Microscope,
  Network,
  NotebookPen,
  Phone,
  Pill,
  ScanLine,
  Search,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TrendingUp,
  UserCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { ProductLink } from "./clinic-management-page";
import {
  atAGlance,
  benefits,
  challenges,
  consultationChecklist,
  costFactors,
  customVsReadyRows,
  EHR_PATH,
  ehrDescription,
  ehrFaqs,
  ehrImages,
  ehrJobs,
  ehrTitle,
  ehrVsEmrRows,
  ehrVsPmRows,
  featureGroups,
  interopTopics,
  lifecycle,
  organizations,
  paperVsDigitalRows,
  privacyFrameworks,
  processPhases,
  schemaFeatureList,
  securityControls,
  storedInformation,
  techRows,
  whenCustom,
  whyClickmasters,
  type EhrFeature,
} from "./ehr-data";

export { EHR_PATH, ehrDescription, ehrTitle };

const ICONS: Record<string, LucideIcon> = {
  ArrowLeftRight,
  BarChart3,
  Building2,
  CalendarCheck,
  ClipboardList,
  CloudCog,
  FileClock,
  FileSignature,
  FileUp,
  FlaskConical,
  FolderHeart,
  HeartPulse,
  History,
  Hospital,
  IdCard,
  KeyRound,
  Layers,
  Microscope,
  Network,
  NotebookPen,
  Pill,
  ScanLine,
  Search,
  Stethoscope,
  Syringe,
  TrendingUp,
  UserCheck,
  Workflow,
};

const ACCENT = "#0284c7";

export function ehrSchema() {
  const url = pageUrl(EHR_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: ehrTitle,
        description: ehrDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#software` },
        mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(ehrImages.dashboard.src),
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
            item: pageUrl("/products/healthcare-medical-software"),
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Electronic Health Records (EHR) Software",
            item: url,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        name: "Custom Electronic Health Records (EHR) Software",
        applicationCategory: "HealthApplication",
        applicationSubCategory: "Electronic Health Records",
        operatingSystem: "Web-based",
        url,
        description:
          "Custom Electronic Health Records software for hospitals, medical practices and healthcare organizations, covering longitudinal patient records, clinical documentation, role-based access, audit logs and standards-based interoperability.",
        image: pageUrl(ehrImages.dashboard.src),
        featureList: schemaFeatureList,
        provider: org,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom EHR Software Development",
        serviceType: "Electronic Health Records Software Development",
        description:
          "End-to-end custom EHR software development including requirement discovery, clinical workflow analysis, UI/UX design, web and mobile development, healthcare integrations, security implementation, quality assurance, deployment and maintenance.",
        provider: org,
        areaServed: [
          "United States",
          "United Kingdom",
          "Canada",
          "Australia",
        ].map((name) => ({
          "@type": "Country",
          name,
        })),
        audience: {
          "@type": "Audience",
          audienceType:
            "Hospitals, medical practices, multi-specialty clinics, healthcare networks and healthcare technology businesses",
        },
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: ehrFaqs.map((faq) => ({
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
  { href: "#what-is-ehr", label: "What it is" },
  { href: "#challenges", label: "Challenges" },
  { href: "#ehr-features", label: "Features" },
  { href: "#lifecycle", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#organizations", label: "Organizations" },
  { href: "#ehr-vs-emr", label: "EHR vs EMR" },
  { href: "#interoperability", label: "Interoperability" },
  { href: "#security", label: "Security" },
  { href: "#process", label: "Process" },
  { href: "#technology", label: "Technology" },
  { href: "#cost", label: "Cost" },
  { href: "#faq", label: "FAQ" },
];

/** Renders `text`, turning the first occurrence of `link.anchor` into a product link. */
function LinkedText({
  text,
  link,
}: {
  text: string;
  link?: { anchor: string; slug: string };
}) {
  if (!link) return <>{text}</>;
  const at = text.indexOf(link.anchor);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <ProductLink slug={link.slug}>{link.anchor}</ProductLink>
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#0b2537] shadow-xl shadow-sky-950/10 ring-1 ring-black/5">
      <div
        className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> ehr.example / concept
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
        className="block h-auto w-full bg-[#f3f7fa]"
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

function CtaButton({
  children,
  href = "/contact",
  light = false,
}: {
  children: ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#082f49]" : "bg-primary text-primary-foreground"}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function FeatureCard({
  feature,
  number,
}: {
  feature: EhrFeature;
  number: number;
}) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0f2fe]">
          <Icon className="h-5 w-5 text-[#0284c7]" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Feature {number}
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-snug">
            {number}. {feature.title}
          </h3>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">What it does: </span>
          {feature.does}
        </p>
        <p>
          <span className="font-semibold text-foreground">How it works: </span>
          <LinkedText text={feature.how} link={feature.link} />
        </p>
      </div>
      <div className="mt-auto pt-4">
        <dl className="grid gap-2 rounded-xl bg-[#f0f9ff] p-4 text-sm leading-6">
          {(
            [
              ["Problem solved", feature.problem],
              ["Practical value", feature.value],
              ["Who benefits", feature.who],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <dt className="inline font-semibold text-foreground">
                {label}:{" "}
              </dt>
              <dd className="inline text-muted-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

const groupStarts = featureGroups.map((_, index) =>
  featureGroups
    .slice(0, index)
    .reduce((total, group) => total + group.features.length, 0),
);
const processStarts = processPhases.map((_, index) =>
  processPhases
    .slice(0, index)
    .reduce((total, phase) => total + phase.stages.length, 0),
);

const groupVisuals: Record<string, { image: Img; caption: string }[]> = {
  "Results and documentation": [
    {
      image: ehrImages.labs,
      caption:
        "Feature 9: results filed via HL7 ORU, abnormal flags, trends and the results inbox",
    },
    {
      image: ehrImages.notes,
      caption:
        "Feature 11: SOAP note with templates, smart inserts, allergy check and signing",
    },
  ],
  "Insight and platform": [
    {
      image: ehrImages.analytics,
      caption:
        "Feature 21: encounter volume, documentation completeness, open results and a condition registry (placeholder data)",
    },
  ],
};

const accessSteps = [
  {
    icon: KeyRound,
    title: "Sign in with MFA",
    text: "Secure credentials plus a second factor",
  },
  {
    icon: UserCheck,
    title: "Role and relationship check",
    text: "Role, department and care-team link",
  },
  {
    icon: FileClock,
    title: "Every action logged",
    text: "View, edit and export written to the audit log",
  },
];

export default function EhrPage() {
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
                  href="/products/healthcare-medical-software"
                  className="hover:text-foreground"
                >
                  Healthcare & Medical Software
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">
                Electronic Health Records (EHR) Software
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: ACCENT }}
              >
                Custom EHR software
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Electronic Health Records Software Built Around Your Clinical
                Workflows
              </h1>
              <h2 className="mt-5 text-lg font-semibold text-foreground/80 md:text-xl">
                One Secure Patient Record Across Every Visit, Provider and
                Location
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton>
                  Request a Custom EHR Software Consultation
                </CtaButton>
                <a
                  href="#ehr-features"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary"
                >
                  Explore EHR Features
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
            <AppFigure
              image={ehrImages.dashboard}
              caption="Patient summary: allergies, active problems, medications, vitals and latest labs"
              priority
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px]">
            <Prose>
              <p>
                Clickmasters builds custom Electronic Health Records software
                for hospitals, multi-specialty clinics, medical groups and
                outpatient facilities. The EHR keeps each patient&apos;s medical
                history, clinical notes, diagnoses, medications, allergies, lab
                results and diagnostic reports in one structured record. That
                record follows the patient across encounters, departments and
                care settings. Authorized clinicians see a complete chart when
                they need it. Administrators get organized, auditable data. Your
                organization gets an EHR platform designed around the way your
                teams already work, and you own it.
              </p>
            </Prose>
            <aside className="rounded-3xl bg-[#082f49] p-6 text-white">
              <p className="text-sm font-semibold">At a glance</p>
              <dl className="mt-4 space-y-3">
                {atAGlance.map(([title, text]) => (
                  <div key={title} className="flex gap-3 text-sm leading-6">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#7dd3fc]"
                      aria-hidden
                    />
                    <div>
                      <dt className="inline font-semibold">{title}: </dt>
                      <dd className="inline text-white/80">{text}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-2">
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
          id="what-is-ehr"
          eyebrow="Definition"
          title="What Is Electronic Health Records Software?"
        >
          <Prose>
            <p>
              Electronic Health Records (EHR) software is a clinical information
              system. It captures, organizes, stores and shares a patient&apos;s
              health information digitally, so the record covers that
              person&apos;s care over time instead of a single visit. A paper
              chart sits in one filing cabinet. An electronic health record
              system makes the same information available, under access
              controls, to every authorized clinician involved in the
              patient&apos;s care.
            </p>
          </Prose>

          <H3 className="mt-12">What an EHR System Does</H3>
          <p className="mt-3 text-base text-muted-foreground">
            An EHR system does four jobs:
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ehrJobs.map(([title, text], index) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {index + 1}
                </span>
                <p className="mt-4 font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text.charAt(0).toUpperCase() + text.slice(1)}
                </p>
              </li>
            ))}
          </ol>

          <H3 className="mt-12">
            How Electronic Health Records Work in Practice
          </H3>
          <div className="mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <p className="text-base leading-7 text-muted-foreground">
              Take a patient with type 2 diabetes who sees a primary care
              physician, an endocrinologist and an ophthalmologist. Without a
              shared record, each provider keeps separate notes and the patient
              has to remember test results and medication changes. With an EHR,
              the primary care physician documents the HbA1c result. The
              endocrinologist sees that result and the current medication list
              before changing the dose. The ophthalmologist can review the
              diabetes history before a retinal exam. Every provider works from
              the same longitudinal record.
            </p>
            <div
              className="rounded-2xl border border-[#bae6fd] bg-[#f0f9ff] p-5"
              aria-hidden
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                One record, three providers
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Primary care: documents HbA1c",
                  "Endocrinology: adjusts dose",
                  "Ophthalmology: reviews history",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium shadow-sm"
                  >
                    <ArrowLeftRight
                      className="h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                    />
                    {item}
                  </div>
                ))}
              </div>
              <div
                className="mt-3 rounded-xl px-3 py-2 text-center text-sm font-semibold text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Shared longitudinal record
              </div>
            </div>
          </div>

          <H3 className="mt-12">What Patient Information an EHR Can Store</H3>
          <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {storedInformation.map((item) => (
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

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <H3>Who Uses EHR Systems</H3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Physicians, nurses, specialists, physician assistants, medical
                assistants, clinical coordinators, health information management
                (HIM) staff, lab and diagnostic personnel, and healthcare
                administrators. Each role sees the information relevant to its
                job, and role-based permissions control exactly what that is.
              </p>
            </div>
            <div>
              <H3>How Authorized Professionals Access Patient Information</H3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Users sign in with secure credentials, usually backed by
                multi-factor authentication. The system checks their role,
                department, and relationship to the patient before it shows a
                record. Every view, edit and export is written to an audit log.
                Clinicians work faster, and the organization can always show who
                accessed what and when.
              </p>
              <ol
                className="mt-5 grid gap-2 sm:grid-cols-3"
                aria-label="How access to a patient record is checked"
              >
                {accessSteps.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-border bg-white p-3"
                  >
                    <step.icon
                      className="h-4 w-4"
                      style={{ color: ACCENT }}
                      aria-hidden
                    />
                    <p className="mt-2 text-sm font-semibold leading-snug">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <H3 className="mt-12">
            Digital Records vs Paper-Based Documentation
          </H3>
          <CompareTable
            caption="Paper records compared with electronic health records"
            headers={["Paper records", "Electronic health records"]}
            rows={paperVsDigitalRows}
          />
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="The problem"
          title="Healthcare Information Management Challenges EHR Software Solves"
        >
          <Prose>
            <p>
              Most healthcare organizations don&apos;t struggle with how much
              data they have. They struggle because the data is scattered,
              inconsistent and hard to trust. Purpose-built healthcare records
              management software fixes the structure underneath.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {challenges.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="flex items-center gap-3 px-6 pt-6">
                  <span className="text-xs font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="px-6 pt-3 text-sm leading-6 text-muted-foreground">
                  <span className="font-semibold text-[#be123c]">
                    Problem:{" "}
                  </span>
                  {item.problem}
                </p>
                <p className="m-4 rounded-xl bg-[#f0f9ff] px-4 py-3 text-sm leading-6 text-[#0c4a6e]">
                  <span className="font-semibold">How EHR helps: </span>
                  {item.help}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section
          id="ehr-features"
          eyebrow="22 modules"
          title="Advanced EHR Software Features"
        >
          <Prose>
            <p>
              Each module below can be configured, extended or left out to suit
              your organization. The feature set of a custom EHR is decided
              during discovery, not fixed in advance.
            </p>
          </Prose>
          <div className="mt-8">
            <AppFigure
              image={ehrImages.chart}
              caption="Tabbed electronic chart: longitudinal timeline, history sections and version history"
            />
          </div>
          <div className="mt-12 space-y-16">
            {featureGroups.map((group, groupIndex) => {
              const start = groupStarts[groupIndex];
              const visuals = groupVisuals[group.title] ?? [];
              return (
                <div key={group.title}>
                  <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                    <div>
                      <p className="text-xl font-semibold tracking-tight">
                        {group.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {group.summary}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      Features {start + 1}–{start + group.features.length}
                    </span>
                  </div>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {group.features.map((feature, index) => (
                      <FeatureCard
                        key={feature.title}
                        feature={feature}
                        number={start + index + 1}
                      />
                    ))}
                  </div>
                  {visuals.length ? (
                    <div
                      className={`mt-8 grid gap-6 ${visuals.length > 1 ? "lg:grid-cols-2" : ""}`}
                    >
                      {visuals.map((visual) => (
                        <AppFigure
                          key={visual.image.src}
                          image={visual.image}
                          caption={visual.caption}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Section>

        {/* Lifecycle */}
        <Section
          id="lifecycle"
          eyebrow="How it works"
          title="How EHR Software Works: The Patient Health Information Lifecycle"
        >
          <DiagramFigure
            image={ehrImages.lifecycle}
            caption="Ten steps that turn each visit into part of one longitudinal record"
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {lifecycle.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{
                    backgroundColor:
                      index === lifecycle.length - 1 ? "#16a34a" : ACCENT,
                  }}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Electronic Health Records Software"
        >
          <Prose>
            <p>
              These are operational benefits that come from good design and
              adoption. Actual results depend on implementation quality,
              training and how consistently the system is used.
            </p>
          </Prose>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  {text.charAt(0).toUpperCase() + text.slice(1)}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Organizations */}
        <Section
          id="organizations"
          eyebrow="Care settings"
          title="EHR Software for Different Healthcare Organizations"
        >
          <Prose>
            <p>
              EHR requirements vary a great deal with size, specialty mix and
              care setting. A custom build lets the system fit the organization
              instead of the other way round.
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0f2fe]">
                    <Icon className="h-5 w-5 text-[#0284c7]" aria-hidden />
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

        {/* EHR vs EMR */}
        <Section
          id="ehr-vs-emr"
          eyebrow="Comparison"
          title="EHR vs EMR: Complete Comparison"
        >
          <Prose>
            <p>
              The terms are often used interchangeably, and real products
              overlap. In general use, an EMR is a digital version of the chart
              inside a single practice or organization, while an EHR is designed
              to hold broader longitudinal health information and to share it
              across organizations and care settings. If your main need is a
              digital chart for one practice, see our{" "}
              <ProductLink slug="electronic-medical-records-emr-software">
                Electronic Medical Records (EMR) Software
              </ProductLink>{" "}
              page.
            </p>
          </Prose>
          <CompareTable
            caption="EHR compared with EMR"
            headers={[
              "Criteria",
              "EHR (Electronic Health Record)",
              "EMR (Electronic Medical Record)",
            ]}
            rows={ehrVsEmrRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">Note: </span>
            Many modern EMR products include exchange features, and some
            products sold as EHRs are used only inside one practice. Judge a
            system by its capabilities, not its label.
          </p>
        </Section>

        {/* EHR vs PM */}
        <Section
          id="ehr-vs-practice-management"
          eyebrow="Comparison"
          title="EHR vs Medical Practice Management Software"
        >
          <Prose>
            <p>
              An EHR manages clinical information. Practice management software
              manages the business of running a practice. Most organizations
              need both, connected through integration. For the administrative
              side, see our{" "}
              <ProductLink slug="medical-practice-management-software">
                Medical Practice Management Software
              </ProductLink>{" "}
              solution.
            </p>
          </Prose>
          <CompareTable
            caption="Electronic health records software compared with medical practice management software"
            headers={[
              "Criteria",
              "Electronic Health Records Software",
              "Medical Practice Management Software",
            ]}
            rows={ehrVsPmRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">
              Why organizations use both:{" "}
            </span>
            the clinical encounter documented in the EHR produces the codes and
            services that drive billing. Integration passes that data along
            automatically, so staff don&apos;t enter it twice.
          </p>
        </Section>

        {/* Interoperability */}
        <Section
          id="interoperability"
          eyebrow="Connected care"
          title="EHR Interoperability and Healthcare Data Exchange"
        >
          <Prose>
            <p>
              Interoperability is what turns an EHR into a connected clinical
              platform rather than a digital filing cabinet. Interoperable EHR
              software exchanges data in formats other systems understand, with
              security and consistent meaning.
            </p>
          </Prose>
          <DiagramFigure
            image={ehrImages.interop}
            caption="EHR core, exchange layer and connected systems. Each interface is scoped per project."
            className="mt-8"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {interopTopics.map((topic) => (
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
          <div
            className="mt-6 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
            style={{ borderColor: ACCENT }}
          >
            <span className="font-semibold text-foreground">Important: </span>
            Which integrations are possible, and how they work, depends on the
            chosen architecture, the standards and versions involved, what
            partner systems support, contractual access to third-party APIs, and
            the requirements of your project. Clickmasters scopes every
            integration individually during discovery instead of promising
            ready-made connectors.
          </div>
        </Section>

        {/* Security */}
        <Section
          id="security"
          eyebrow="Privacy"
          title="EHR Data Security and Patient Privacy"
        >
          <Prose>
            <p>
              Health information is among the most sensitive data an
              organization holds. Security has to be designed into the
              architecture from the first sprint. It can&apos;t be bolted on
              afterwards.
            </p>
          </Prose>
          <div className="mt-8">
            <AppFigure
              image={ehrImages.security}
              caption="MFA sign-in, session policy, tamper-resistant audit log and access alerts"
            />
          </div>
          <H3 className="mt-12">Security Controls Built Into a Custom EHR</H3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {securityControls.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <span className="font-semibold text-foreground">{title}:</span>{" "}
                {text}
              </li>
            ))}
          </ul>
          <H3 className="mt-12">
            HIPAA, GDPR and Healthcare Privacy Requirements
          </H3>
          <p className="mt-3 text-base text-muted-foreground">
            Healthcare software often has to support regulatory frameworks such
            as:
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {privacyFrameworks.map(([region, text]) => (
              <li
                key={region}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  {region}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <div
            className="mt-6 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
            style={{ borderColor: ACCENT }}
          >
            <span className="font-semibold text-foreground">
              Responsible compliance statement:{" "}
            </span>
            Clickmasters does not claim HIPAA certification, GDPR certification
            or regulatory compliance for any product. No software is
            &quot;compliant&quot; on its own. Compliance depends on the system
            architecture, how it is implemented and configured, your
            organization&apos;s policies and training, hosting infrastructure,
            Business Associate Agreements or data processing agreements, and the
            laws that apply where you operate. Clickmasters can design and build
            software with technical safeguards that support your compliance
            program, working with your legal, privacy and compliance advisors.
          </div>
        </Section>

        {/* Custom vs ready */}
        <Section
          id="custom-vs-ready-made"
          eyebrow="Build vs buy"
          title="Custom EHR Software vs Ready-Made EHR Solutions"
        >
          <CompareTable
            caption="Custom EHR software compared with ready-made EHR solutions"
            headers={[
              "Criteria",
              "Custom EHR Software",
              "Ready-Made (Off-the-Shelf) EHR",
            ]}
            rows={customVsReadyRows}
          />
          <H3 className="mt-12">
            When Custom EHR Software Development Is the Right Choice
          </H3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {whenCustom.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
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
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">
              When a ready-made EHR may be a better fit:{" "}
            </span>
            if you need standard workflows quickly with minimal internal IT
            involvement, an established commercial product can be the sensible
            choice. A good partner will tell you honestly which option suits
            you.
          </p>
        </Section>

        {/* Process */}
        <Section
          id="process"
          eyebrow="Delivery"
          title="Custom EHR Software Development Process"
        >
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            Fourteen stages, grouped into four phases. Each stage ends with
            deliverables you can review.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {processPhases.map((phase, phaseIndex) => (
              <section
                key={phase.title}
                aria-label={`Phase ${phaseIndex + 1}: ${phase.title}`}
                className="rounded-3xl border border-border bg-secondary/50 p-4"
              >
                <p
                  className="px-1 text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  Phase {phaseIndex + 1}
                </p>
                <p className="px-1 text-base font-semibold">{phase.title}</p>
                <ol className="mt-4 space-y-3">
                  {phase.stages.map(
                    ([title, purpose, deliverables], stageIndex) => (
                      <li
                        key={title}
                        className="rounded-2xl border border-border bg-white p-4"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                            style={{ backgroundColor: ACCENT }}
                          >
                            {processStarts[phaseIndex] + stageIndex + 1}
                          </span>
                          <p className="font-semibold leading-snug">{title}</p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {purpose}
                        </p>
                        <p className="mt-2 rounded-lg bg-[#f0f9ff] px-3 py-1.5 text-xs leading-5 text-[#0c4a6e]">
                          <span className="font-semibold">
                            Key deliverables:
                          </span>{" "}
                          {deliverables}
                        </p>
                      </li>
                    ),
                  )}
                </ol>
              </section>
            ))}
          </div>
          <DiagramFigure
            image={ehrImages.exchange}
            caption="Example from stage 9: how a lab integration moves an order and its result between the EHR and the laboratory"
            className="mt-10"
          />
        </Section>

        {/* Technology */}
        <Section
          id="technology"
          eyebrow="Engineering"
          title="Technology Stack and EHR Software Architecture"
        >
          <Prose>
            <p>
              Technology choices for EHR platform development should follow
              clinical requirements, interoperability needs, security
              obligations and expected scale, not trends. The stack below is a
              typical starting point, and the final choice is made during
              architecture planning.
            </p>
          </Prose>
          <CompareTable
            caption="Candidate technologies for custom EHR software by layer"
            headers={[
              "Layer",
              "Candidate technologies",
              "Why it may fit an EHR",
            ]}
            rows={techRows}
          />
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
            These technologies are listed as options, not as an existing
            implemented stack. Each project&apos;s final architecture is
            documented and agreed in writing before development starts.
          </p>
        </Section>

        {/* Cost */}
        <Section
          id="cost"
          eyebrow="Pricing"
          title="EHR Software Development Cost"
        >
          <Prose>
            <p>
              Every custom EHR is scoped individually, so there is no fixed
              price. Cost depends mainly on:
            </p>
          </Prose>
          <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {costFactors.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <span className="font-semibold text-foreground">{title}:</span>{" "}
                {text}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            A phased approach, starting with a focused first release and
            expanding over time, often lowers early investment and risk.
          </p>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#bae6fd] bg-[#f0f9ff] p-6 md:flex-row md:items-center md:p-8">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight">
                Get a Custom EHR Development Estimate
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Tell us about your organization, users, required modules and
                integrations. We&apos;ll come back with a written scope, a
                phased roadmap and a realistic estimate before any development
                starts.
              </p>
            </div>
            <CtaButton>Request Your Custom EHR Estimate</CtaButton>
          </div>
        </Section>

        {/* Why */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters for EHR Software Development?"
        >
          <Prose>
            <p>
              Clickmasters is a remote-first software development company. We
              work with written scope, a single engineering point of contact,
              and source code that belongs to the client. Healthcare and
              HealthTech is one of our core industries.
            </p>
          </Prose>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyClickmasters.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p className="font-semibold leading-snug">
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text.charAt(0).toUpperCase() + text.slice(1)}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Final CTA */}
        <section className="border-t border-border bg-[#082f49] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Build a Custom Electronic Health Records Software Solution
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re replacing paper charts, moving off an EHR
                that doesn&apos;t fit your workflows, or building a new
                healthcare technology product, the first step is a structured
                conversation about your requirements.
              </p>
              <div className="mt-8">
                <CtaButton light>
                  Discuss Your Custom EHR Software Project
                </CtaButton>
              </div>
              <div className="mt-6 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-6">
                <a
                  href="mailto:sales@clickmasterssoftwaredevelopmentcompany.com"
                  className="inline-flex items-center gap-2 break-all hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  sales@clickmasterssoftwaredevelopmentcompany.com
                </a>
                <a
                  href="tel:+13252024074"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  +1 325 202 4074
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">
                In your consultation, we cover:
              </p>
              <ul className="mt-4 space-y-4">
                {consultationChecklist.map(([title, text]) => (
                  <li key={title} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7dd3fc] text-[#082f49]">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-white/80">
                      <span className="font-semibold text-white">{title}:</span>{" "}
                      {text}
                    </span>
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
              Frequently Asked Questions About EHR Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {ehrFaqs.map((faq, index) => (
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

        {/* Sticky mobile CTA */}
        <style>
          {"@media (max-width: 767px) { body { padding-bottom: 72px; } }"}
        </style>
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Get a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
