import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  CalendarClock,
  CalendarDays,
  Check,
  ChevronRight,
  Cloud,
  DoorOpen,
  FileClock,
  FolderOpen,
  HeartHandshake,
  Hospital,
  IdCard,
  KeyRound,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Microscope,
  Network,
  Phone,
  PieChart,
  Plug,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserRound,
  UsersRound,
  Wallet,
  Workflow,
  Smile,
  Brain,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { CtaBand, ProductLink } from "./clinic-management-page";
import {
  adminVsClinicalRows,
  adoptionTriggers,
  architecturePrinciples,
  benefits,
  challenges,
  consultationChecklist,
  coreFunctionality,
  costFactors,
  customVsReadyRows,
  featureGroups,
  heroSystem,
  integrationRows,
  pmsEmrEhrRows,
  pmsVsClinicRows,
  PRACTICE_PATH,
  practiceDescription,
  practiceFaqs,
  practiceImages,
  practiceTitle,
  practiceTypes,
  privacyRegions,
  processPhases,
  recordChain,
  securityLayers,
  securityMeasures,
  systemDefinitions,
  techRows,
  whenCustom,
  whyClickMasters,
  workflowRows,
  workflowStages,
  type PracticeFeature,
} from "./practice-management-data";

export { PRACTICE_PATH, practiceDescription, practiceTitle };

const ICONS: Record<string, LucideIcon> = {
  Activity,
  BarChart3,
  BellRing,
  Building2,
  CalendarClock,
  CalendarDays,
  Cloud,
  DoorOpen,
  FolderOpen,
  HeartHandshake,
  Hospital,
  IdCard,
  KeyRound,
  LayoutDashboard,
  MessageSquare,
  Microscope,
  Network,
  PieChart,
  Plug,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserRound,
  UsersRound,
  Wallet,
  Workflow,
  Smile,
  Brain,
  Eye,
};

export function practiceManagementSchema() {
  const url = pageUrl(PRACTICE_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: practiceTitle,
        description: practiceDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
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
            name: "Medical Practice Management Software",
            item: url,
          },
        ],
      },
      // Custom-built software, not a packaged app with a public price or
      // ratings: a SoftwareApplication node failed Google's required
      // offers + aggregateRating/review checks, so only the Service remains.
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom Medical Practice Management Software Development",
        serviceType: "Healthcare software development",
        description:
          "Requirement discovery, practice workflow analysis, feature and module planning, UI/UX design, software architecture, frontend, backend and database development, API integration, security testing, quality assurance, deployment, and maintenance and support for custom medical practice management systems.",
        provider: org,
        url,
        image: pageUrl(practiceImages.dashboard.src),
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
          "@type": "BusinessAudience",
          audienceType:
            "Independent physicians, private and multi-physician practices, specialist practices, medical groups, outpatient healthcare organizations and healthcare administrators",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: practiceFaqs.map((faq) => ({
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
  { href: "#what-it-is", label: "What it is" },
  { href: "#challenges", label: "Challenges" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#who-benefits", label: "Who it's for" },
  { href: "#comparisons", label: "Comparisons" },
  { href: "#security", label: "Security" },
  { href: "#integrations", label: "Integrations" },
  { href: "#process", label: "Process" },
  { href: "#technology", label: "Technology" },
  { href: "#cost", label: "Cost" },
  { href: "#faq", label: "FAQ" },
];

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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#111827] shadow-xl shadow-indigo-950/10 ring-1 ring-black/5">
      <div
        className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline">
          practice-hub / concept
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
        className="block h-auto w-full bg-[#f5f6fb]"
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-2.5 text-xs text-muted-foreground">
        <span>{caption}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">
          Concept illustration
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
        className="mx-auto block h-auto w-full max-w-4xl"
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

function FeatureCard({
  feature,
  number,
}: {
  feature: PracticeFeature;
  number: number;
}) {
  const Icon = ICONS[feature.icon] ?? LayoutDashboard;
  const rows: [string, string][] = [
    ["What it does", feature.does],
    ["How it works", feature.how],
  ];
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef2ff]">
          <Icon className="h-5 w-5 text-[#4f46e5]" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Feature {number}
          </p>
          <h4 className="mt-1 text-lg font-semibold leading-snug">
            {number}. {feature.title}
          </h4>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        {rows.map(([label, value]) => (
          <p key={label}>
            <span className="font-semibold text-foreground">{label}: </span>
            {value}
          </p>
        ))}
      </div>
      <div className="mt-auto pt-4">
        <dl className="grid gap-2 rounded-xl bg-secondary/70 p-4 text-sm leading-6">
          <div>
            <dt className="inline font-semibold text-foreground">
              Problem solved:{" "}
            </dt>
            <dd className="inline text-muted-foreground">{feature.problem}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-foreground">
              Business value:{" "}
            </dt>
            <dd className="inline text-muted-foreground">{feature.value}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-foreground">
              Who benefits:{" "}
            </dt>
            <dd className="inline text-muted-foreground">{feature.who}</dd>
          </div>
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
  Operations: [
    {
      image: practiceImages.scheduling,
      caption:
        "Feature 6: physician calendars by site, visit types, reserved and admin blocks, first-available search",
    },
  ],
  Revenue: [
    {
      image: practiceImages.claims,
      caption:
        "Feature 8: claim pipeline from draft to paid, pre-submission validation and the denial worklist",
    },
  ],
  Administration: [
    {
      image: practiceImages.locations,
      caption:
        "Feature 12: consolidated KPIs, site comparison and cross-site physician calendars",
    },
  ],
  "Insight and Platform": [
    {
      image: practiceImages.analytics,
      caption:
        "Feature 17: utilization, no-show trend, provider productivity and new-patient sources",
    },
    {
      image: practiceImages.financial,
      caption:
        "Feature 18: A/R ageing by payer, payer mix, charges vs collections and denial reasons",
    },
  ],
};

export default function PracticeManagementPage() {
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
                Medical Practice Management Software
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f46e5]">
                Healthcare practice management software
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Medical Practice Management Software for the Business Side of
                Healthcare
              </h1>
              <p className="mt-5 text-lg leading-8 text-foreground/80">
                Run provider schedules, patient administration, billing,
                insurance claims, receivables and practice reporting from one
                custom-built system, designed around how your practice and its
                people actually work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Request a Custom Software Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary"
                >
                  Explore Features
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
            <AppFigure
              image={practiceImages.dashboard}
              caption="Practice overview: schedule fill, unbilled encounters, open claims, collections and work queues"
              priority
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <Prose>
              <p>
                Medical practice management software handles the business
                operations that keep a medical practice running: who sees which
                provider and when, whether patient and coverage details are
                correct, what was charged, which claims are outstanding, what
                has been collected and how each provider and location is
                performing. ClickMasters designs and develops custom practice
                management systems for independent physicians, multi-physician
                practices, specialist groups and growing healthcare
                organizations that need more control than spreadsheets and
                generic tools can offer. The same platform works as medical
                office practice management software for a single site and as
                practice manager software medical groups use to oversee
                several locations.
              </p>
              <p>
                We are a custom software development company. Every project
                starts with a written scope, timeline and quote, so you know
                exactly what&apos;s being built before development begins.
              </p>
            </Prose>
            <aside className="rounded-3xl bg-[#1e1b4b] p-6 text-white">
              <p className="text-sm font-semibold">One connected system for:</p>
              <ul className="mt-4 space-y-3">
                {heroSystem.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-white/85"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#a5b4fc]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
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

        {/* 2. What is */}
        <Section
          id="what-it-is"
          eyebrow="Definition"
          title="What Is Medical Practice Management Software?"
        >
          <Prose>
            <p>
              Medical practice management software (often shortened to PMS) is
              the system a medical practice uses to run its administrative and
              financial operations. Its purpose is to make sure every patient
              visit is scheduled correctly, documented for billing, charged
              accurately, paid for and reported on, without staff having to
              re-enter the same information in several places. It is the
              practice management system healthcare administrators rely on
              for the business side, while the clinical record lives in the
              EHR or EMR.
            </p>
          </Prose>

          <H3 className="mt-12">Core Functionality</H3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coreFunctionality.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <span className="block font-semibold text-foreground">
                  {title}
                </span>
                {text}
              </li>
            ))}
          </ul>

          <H3 className="mt-12">
            How a Medical Practice Management System Works
          </H3>
          <ol
            aria-label="Chain of business records in a practice management system"
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            {recordChain.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-[#c7d2fe] bg-[#eef2ff] px-3.5 py-1.5 text-sm font-semibold text-[#3730a3]">
                  {step}
                </span>
                {index < recordChain.length - 1 ? (
                  <ArrowRight
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden
                  />
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            A practice management system links a chain of business records:
            patient account → appointment → encounter → charges → claim or
            invoice → payment → report. Each record is created from the previous
            one. A booked appointment becomes an encounter at check-in. The
            encounter becomes charges once the provider&apos;s services are
            coded. Charges become a claim or a patient invoice, and payments
            close the loop. Because the records are connected, a single error at
            registration (such as a wrong member ID) can be caught early instead
            of surfacing weeks later as a denied claim.
          </p>

          <H3 className="mt-12">Who Needs It, and Why Practices Use It</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Any practice that schedules multiple providers, bills insurers or
            patients, and needs to know where its revenue stands benefits from
            medical practice administration software. Practices typically adopt
            it when:
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {adoptionTriggers.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f46e5]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Practices that mainly need a tidy patient register (registration,
            demographics, visit history and search) may find our{" "}
            <ProductLink slug="patient-management-software">
              Patient Management Software
            </ProductLink>{" "}
            is a closer fit. Practice management software includes patient
            administration and extends it into scheduling, billing, claims and
            practice-wide operations.
          </p>

          <H3 className="mt-12">
            Its Role in Healthcare Business Administration
          </H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Think of medical office management software as the practice&apos;s
            operating system for business. The clinical team relies on it for
            accurate schedules. The front desk uses it for registration and
            payments. Billers use it for charges and claims, and managers and
            owners use it for performance and financial decisions.
          </p>

          <H3 className="mt-12">
            Administrative Practice Management vs Clinical Record Management
          </H3>
          <CompareTable
            caption="Administrative practice management compared with clinical record management (EMR/EHR)"
            headers={[
              "",
              "Practice management (administrative)",
              "Clinical record management (EMR/EHR)",
            ]}
            rows={adminVsClinicalRows}
          />
        </Section>

        {/* 3. Challenges */}
        <Section
          id="challenges"
          eyebrow="The problem"
          title="Why Medical Practices Need Management Software"
        >
          <Prose>
            <p>
              Medical practice software solves problems that grow with every new
              provider, payer and location. These are the ten challenges
              practice owners and administrators raise most often.
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
                    Challenge:{" "}
                  </span>
                  {item.challenge}
                </p>
                <p className="m-4 rounded-xl bg-[#eef2ff] px-4 py-3 text-sm leading-6 text-[#312e81]">
                  <span className="font-semibold">How software helps: </span>
                  {item.help}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* 4. Features */}
        <Section
          id="features"
          eyebrow="22 modules"
          title="Advanced Medical Practice Management Software Features"
        >
          <Prose>
            <p>
              These are the 22 modules we most often scope. Each can be included
              from day one or added in a later phase.
            </p>
          </Prose>
          <div className="mt-6 flex flex-wrap gap-2">
            {featureGroups.map((group) => (
              <a
                key={group.title}
                href={`#group-${group.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full bg-[#eef2ff] px-3.5 py-1.5 text-sm font-semibold text-[#3730a3] hover:bg-[#e0e7ff]"
              >
                {group.title} · {group.features.length}
              </a>
            ))}
          </div>
          <div className="mt-10 space-y-16">
            {featureGroups.map((group, groupIndex) => {
              const start = groupStarts[groupIndex];
              const visuals = groupVisuals[group.title] ?? [];
              return (
                <div
                  key={group.title}
                  id={`group-${group.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="scroll-mt-28"
                >
                  <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                    <div>
                      <H3>{group.title}</H3>
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
                  {group.title === "Revenue" ? (
                    <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
                      For deeper claim scrubbing, denial analytics and
                      billing-team tooling, see our dedicated{" "}
                      <ProductLink slug="medical-billing-software">
                        Medical Billing Software
                      </ProductLink>
                      , which can run as a standalone platform or connect to
                      your practice management system.
                    </p>
                  ) : null}
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
          <CtaBand
            title="Plan your first release"
            text="Pick the modules your practice needs now, and we'll map what can follow in later phases."
            cta="Plan Your Practice Management Modules"
          />
        </Section>

        {/* 5. How it works */}
        <Section
          id="how-it-works"
          eyebrow="Workflow"
          title="How Medical Practice Management Software Works"
        >
          <Prose>
            <p>
              Medical practice workflow software moves each patient, and each
              dollar, through nine connected stages. The example below follows
              one patient through a two-physician practice.
            </p>
          </Prose>
          <figure className="mt-8 rounded-3xl border border-border bg-white p-5 md:p-6">
            <ol
              aria-label="Medical practice management software workflow from patient registration to scheduling, provider assignment, check-in, consultation, billing, payment, follow-up and reporting"
              className="grid gap-2 sm:grid-cols-3 lg:grid-cols-9 lg:gap-1.5"
            >
              {workflowStages.map((stage, index) => (
                <li
                  key={stage}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 lg:flex-col lg:justify-start lg:px-2 lg:py-4 lg:text-center ${index === 4 ? "bg-[#ecfeff]" : index >= 5 && index <= 6 ? "bg-[#eef2ff]" : "bg-secondary"}`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold leading-snug lg:mt-2 lg:text-xs">
                    {stage}
                  </span>
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>
                <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm bg-secondary align-middle ring-1 ring-border" />
                Practice management
              </span>
              <span>
                <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm bg-[#ecfeff] align-middle ring-1 ring-border" />
                Clinical system (EMR)
              </span>
              <span>
                <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm bg-[#eef2ff] align-middle ring-1 ring-border" />
                Revenue cycle
              </span>
            </figcaption>
          </figure>
          <CompareTable
            caption="The nine stages of a medical practice management workflow with practical examples"
            headers={["Stage", "What happens", "Practical example"]}
            rows={workflowRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            At stage 5, clinical documentation usually lives in an EMR. If your
            practice needs a charting system to pair with the PMS, our{" "}
            <ProductLink slug="electronic-medical-records-emr-software">
              Electronic Medical Records (EMR) Software
            </ProductLink>{" "}
            covers encounter notes and problem, medication and allergy lists.
          </p>
        </Section>

        {/* 6. Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits for Medical Practice Owners and Administrators"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-white p-5"
              >
                <h3 className="font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
                <p className="mt-auto pt-4 text-sm leading-6 text-foreground/80">
                  <span className="mr-1 rounded bg-[#eef2ff] px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3730a3]">
                    In practice
                  </span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* 7. Who benefits */}
        <Section
          id="who-benefits"
          eyebrow="Practice models"
          title="Practice Management Software by Specialty and Practice Model"
        >
          <Prose>
            <p>
              Practice management software for healthcare has to adapt to very
              different organizations, from solo physicians to dental, therapy
              and optometry practices. The practice management solutions for doctors
              described below are configured, or custom-built, to match each
              model.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceTypes.map((item) => {
              const Icon = ICONS[item.icon] ?? Stethoscope;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef2ff]">
                    <Icon className="h-5 w-5 text-[#4f46e5]" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
          <CtaBand
            title="Every practice model runs differently"
            text="Tell us how your providers, payers and sites are organized, and we'll scope the system around it."
            cta="Discuss Software for Your Practice Model"
          />
        </Section>

        {/* 8. PMS vs clinic */}
        <Section
          id="comparisons"
          eyebrow="Comparison"
          title="Medical Practice Management Software vs Clinic Management Software"
        >
          <Prose>
            <p>
              The two categories genuinely overlap: both schedule patients,
              manage accounts and bill for visits. The difference is mostly
              emphasis and scale. Clinic management software is centred on
              running a clinic&apos;s day, from booking through consultation,
              prescription and checkout. Practice management software is centred
              on running the business across providers, payers and locations. If
              your needs are clinic-day focused, our{" "}
              <ProductLink slug="clinic-management-software">
                Clinic Management Software
              </ProductLink>{" "}
              may be the better starting point.
            </p>
          </Prose>
          <CompareTable
            caption="Medical practice management software compared with clinic management software"
            headers={[
              "Factor",
              "Medical practice management software",
              "Clinic management software",
            ]}
            rows={pmsVsClinicRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">Bottom line: </span>
            choose by requirements, not labels. A small clinic with heavy
            insurance billing may need practice management capabilities, and a
            large group may want clinic-style simplicity at each site. We scope
            modules against your workflows.
          </p>
        </Section>

        {/* 9. PMS vs EHR/EMR */}
        <Section
          id="pms-vs-ehr"
          eyebrow="Comparison"
          title="Practice Management Software vs EHR and EMR"
        >
          <Prose>
            <p>
              These three systems are often confused because they share patient
              data, but they do different jobs.
            </p>
          </Prose>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <ul className="space-y-3">
              {systemDefinitions.map(([title, text], index) => (
                <li
                  key={title}
                  className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
                  style={{
                    borderLeft: `4px solid ${["#4f46e5", "#0d9488", "#0284c7"][index]}`,
                  }}
                >
                  <span className="font-semibold text-foreground">
                    {title}:
                  </span>{" "}
                  {text}
                </li>
              ))}
            </ul>
            <DiagramFigure
              image={practiceImages.venn}
              caption="Where PMS, EMR and EHR overlap around one patient"
              className="p-2 md:p-3"
            />
          </div>
          <CompareTable
            caption="Practice management software, EMR and EHR compared"
            headers={["Factor", "Practice management software", "EMR", "EHR"]}
            rows={pmsEmrEhrRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">
              Why organizations use them together:{" "}
            </span>
            the PMS knows who is booked and what was billed, and the EMR or EHR
            knows what was clinically done. Integrating them means patients are
            registered once, providers see accurate schedules, and coded
            clinical work flows straight into billing. For organizations that
            need a shared, longitudinal record across a care team, see our{" "}
            <ProductLink slug="electronic-health-records-ehr-software">
              Electronic Health Records (EHR) Software
            </ProductLink>
            .
          </p>
        </Section>

        {/* 10. Custom vs ready-made */}
        <Section
          id="custom-vs-ready"
          eyebrow="Build vs buy"
          title="Custom vs Ready-Made Medical Practice Management Software"
        >
          <CompareTable
            caption="Custom-built compared with ready-made medical practice management software"
            headers={[
              "Factor",
              "Custom-built practice management software",
              "Ready-made (off-the-shelf) software",
            ]}
            rows={customVsReadyRows}
          />
          <H3 className="mt-12">When Custom Development Is Suitable</H3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {whenCustom.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[#4f46e5]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Lists of the top medical practice management software rarely
            account for your specialties, payers and locations, and packaged
            medical practice management software systems are built for the
            average practice rather than yours. The best
            medical practice management software for your organization is the
            one that fits those workflows, so if a ready-made product already
            fits, it may be the better choice. We&apos;ll help you decide
            honestly before you commit.
          </p>
          <CtaBand
            title="Not sure which way to go?"
            text="We'll compare your workflows against what off-the-shelf products offer and give you a straight answer."
            cta="Find Out If Custom Is Right for You"
          />
        </Section>

        {/* 11. Security */}
        <Section
          id="security"
          eyebrow="Privacy"
          title="Data Security and Healthcare Privacy"
        >
          <Prose>
            <p>
              A practice management system holds identity, insurance and
              financial data linked to healthcare. Security is designed into the
              architecture from the start.
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
            <figure className="rounded-3xl border border-border bg-white p-5">
              <div
                role="img"
                aria-label="Healthcare data security layers including multi-factor authentication, role-based access, encryption, audit logs and backups"
                className="grid grid-cols-[minmax(0,1fr)_44px] gap-3"
              >
                <ol className="space-y-1.5">
                  {securityLayers.map((layer, index) => (
                    <li key={layer.label}>
                      <div
                        className="rounded-xl px-4 py-3"
                        style={{
                          backgroundColor: `rgba(49, 46, 129, ${0.06 + index * 0.15})`,
                        }}
                      >
                        <p
                          className={`text-sm font-semibold ${index > 2 ? "text-white" : "text-foreground"}`}
                        >
                          {layer.label}
                        </p>
                        <p
                          className={`text-xs ${index > 2 ? "text-white/75" : "text-muted-foreground"}`}
                        >
                          {layer.detail}
                        </p>
                      </div>
                      {index < securityLayers.length - 1 ? (
                        <ArrowDown
                          className="mx-auto my-0.5 h-3.5 w-3.5 text-muted-foreground"
                          aria-hidden
                        />
                      ) : null}
                    </li>
                  ))}
                </ol>
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#818cf8] bg-[#eef2ff] py-4">
                  <FileClock className="h-4 w-4 text-[#4f46e5]" aria-hidden />
                  <span className="text-xs font-semibold tracking-wide text-[#312e81] [writing-mode:vertical-rl]">
                    Audit logs and access monitoring
                  </span>
                </div>
              </div>
            </figure>
            <div>
              <H3>Security Measures We Build In</H3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {securityMeasures.map(([title, text]) => (
                  <li
                    key={title}
                    className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="font-semibold text-foreground">
                      {title}:
                    </span>{" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <H3 className="mt-14">HIPAA, GDPR and Other Privacy Requirements</H3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {privacyRegions.map((item) => (
              <article
                key={item.region}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">
                  {item.region}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 max-w-4xl rounded-2xl border-l-4 border-[#4f46e5] bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">Important: </span>
            there is no official government &quot;HIPAA certification&quot; or
            &quot;GDPR certification&quot; for software, and ClickMasters
            doesn&apos;t claim either. Compliance depends on architecture,
            hosting, configuration, the practice&apos;s policies and training,
            vendor contracts and the laws of each jurisdiction. We build the
            technical safeguards these frameworks call for. The practice and its
            advisers remain responsible for overall compliance.
          </div>
        </Section>

        {/* 12. Integrations */}
        <Section
          id="integrations"
          eyebrow="Connections"
          title="Healthcare Integrations"
        >
          <Prose>
            <p>
              <span className="font-semibold text-foreground">
                What&apos;s available vs what&apos;s built per project:{" "}
              </span>
              API development and third-party integration are core ClickMasters
              services. Every healthcare-specific connection below is developed
              per project. We don&apos;t claim pre-built connectors to any named
              vendor. Feasibility depends on each third party&apos;s APIs,
              standards, access approval and terms, and we confirm it during
              discovery.
            </p>
          </Prose>
          <DiagramFigure
            image={practiceImages.hub}
            caption="Each connection is scoped and built per project"
            className="mt-8"
          />
          <CompareTable
            caption="Healthcare integrations for practice management software, their purpose and typical approach"
            headers={["Integration", "Purpose", "Typical approach"]}
            rows={integrationRows}
          />
        </Section>

        {/* 13. Process */}
        <Section
          id="process"
          eyebrow="Delivery"
          title="Custom Medical Practice Management Software Development Process"
        >
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            Thirteen stages in four phases, each ending with something you can
            review.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {processPhases.map((phase, phaseIndex) => (
              <section
                key={phase.title}
                aria-label={`Phase ${phaseIndex + 1}: ${phase.title}`}
                className="rounded-3xl border border-border bg-secondary/50 p-4"
              >
                <p className="px-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">
                  Phase {phaseIndex + 1}
                </p>
                <p className="px-1 text-base font-semibold">{phase.title}</p>
                <ol className="mt-4 space-y-3">
                  {phase.stages.map(
                    ([title, purpose, deliverables], stageIndex) => {
                      const stageNumber =
                        processStarts[phaseIndex] + stageIndex + 1;
                      return (
                        <li
                          key={title}
                          className="rounded-2xl border border-border bg-white p-4"
                        >
                          <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-[11px] font-bold text-white">
                              {stageNumber}
                            </span>
                            <p className="font-semibold leading-snug">
                              {title}
                            </p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {purpose}
                          </p>
                          <p className="mt-2 rounded-lg bg-[#eef2ff] px-3 py-1.5 text-xs leading-5 text-[#312e81]">
                            <span className="font-semibold">Deliverables:</span>{" "}
                            {deliverables}
                          </p>
                        </li>
                      );
                    },
                  )}
                </ol>
              </section>
            ))}
          </div>
        </Section>

        {/* 14. Technology */}
        <Section
          id="technology"
          eyebrow="Engineering"
          title="Technology Stack and Architecture"
        >
          <Prose>
            <p>
              Technology is selected per project, based on your requirements,
              integrations, expected scale, security needs and hosting
              preferences. The options below come from the ClickMasters
              development toolkit. They are candidate choices, not the stack of
              an existing product. Most practices choose web based medical
              practice management software, so staff sign in from a browser at
              any location with nothing to install.
            </p>
          </Prose>
          <DiagramFigure
            image={practiceImages.architecture}
            caption="Users → frontend → API layer → modules → data → cloud, with integrations alongside"
            className="mt-8"
          />
          <CompareTable
            caption="Candidate technologies for medical practice management software by layer"
            headers={[
              "Layer",
              "Possible technologies",
              "Selection considerations",
            ]}
            rows={techRows}
          />
          <H3 className="mt-12">Architectural Approach</H3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {architecturePrinciples.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <span className="font-semibold text-foreground">{title}:</span>{" "}
                {text}
              </li>
            ))}
          </ul>
        </Section>

        {/* 15. Cost */}
        <Section
          id="cost"
          eyebrow="Pricing"
          title="Medical Practice Management Software Development Cost"
        >
          <Prose>
            <p>
              There&apos;s no fixed price for custom medical practice management
              software. These factors shape the estimate:
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
          <CtaBand
            title="Get a written estimate"
            text="You'll receive a written scope, timeline and quote after discovery, before any development begins."
            cta="Request a Custom Project Estimate"
          />
        </Section>

        {/* 16. Why ClickMasters */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose ClickMasters?"
        >
          <Prose>
            <p>
              ClickMasters is a remote-first software development company
              building web, mobile, AI, SaaS and cloud solutions for startups,
              growing businesses and larger organizations. Healthcare is one of
              the industries we serve, and our team builds medical practice
              management software systems alongside clinic, EHR, EMR and
              billing products.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyClickMasters.map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <h3 className="font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* 17. Conversion */}
        <section className="border-t border-border bg-[#1e1b4b] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Modernize Your Medical Practice Operations with Custom Software
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                If your practice is running on a patchwork of calendars,
                spreadsheets and disconnected billing tools, let&apos;s map out
                a medical practice management solution that fits. You&apos;ll leave the consultation
                with a clear picture of what to build, in what order, and what
                it will take.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1e1b4b]"
              >
                Discuss Your Medical Practice Software Project
                <ArrowRight className="h-4 w-4" />
              </Link>
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
                What we&apos;ll cover together:
              </p>
              <ul className="mt-4 space-y-4">
                {consultationChecklist.map(([title, text]) => (
                  <li key={title} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a5b4fc] text-[#1e1b4b]">
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

        {/* 18. FAQ */}
        <section id="faq" className="scroll-mt-28 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Medical Practice Management Software FAQs
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {practiceFaqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group p-5 md:p-6"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold md:text-lg">
                    <h3>{faq.question}</h3>
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
