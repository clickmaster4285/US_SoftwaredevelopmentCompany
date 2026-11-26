import { ICONS } from "./practice-icons";
import { PracticeChallenges, PracticeFaqList, PracticeFeatureGrid, PracticeHowItWorks, PracticeSecurity, PracticeWhatItIs, PracticeWhoBenefits } from "./practice-sections";
import { shortKey } from "@/lib/short-key";
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
} from "@/components/ui/mask-icons";
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
        className="cm-mock-bar"
        aria-hidden
      >
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
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
      <figcaption className="cm-mock-cap">
        <span>{caption}</span>
        <span className="cm-chip">
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
              <h1 className="cm-h1">
                Medical Practice Management Software for the Business of Healthcare
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
                performing. Clickmasters designs and develops custom practice
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
                    key={shortKey(item)}
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
                className="cm-pill"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        {/* 2. What is */}
        <PracticeWhatItIs />

        {/* 3. Challenges */}
        <PracticeChallenges />

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
                key={shortKey(group.title)}
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
                  key={shortKey(group.title)}
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
                  <PracticeFeatureGrid groupIndex={groupIndex} start={start} />
                  {group.title === "Revenue" ? (
                    <p className="cx-mt6-maxw3x-1c">
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
        <PracticeHowItWorks />

        {/* 6. Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits for Medical Practice Owners and Administrators"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={shortKey(item.title)}
                className="cx-flex-flexco-3i"
              >
                <h3 className="cx-fontse-leadin-b">{item.title}</h3>
                <p className="cm-p2">
                  {item.text}
                </p>
                <p className="cx-mtauto-pt4-3w">
                  <span className="cx-mr1-rounde-3g">
                    In practice
                  </span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* 7. Who benefits */}
        <PracticeWhoBenefits />

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
          <p className="cx-mt6-maxw3x-1c">
            <span className="cx-fontse-textfo-1">Bottom line: </span>
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
                  key={shortKey(title)}
                  className="cm-cardnote"
                  style={{
                    borderLeft: `4px solid ${["#4f46e5", "#0d9488", "#0284c7"][index]}`,
                  }}
                >
                  <span className="cx-fontse-textfo-1">
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
          <p className="cx-mt6-maxw3x-1c">
            <span className="cx-fontse-textfo-1">
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
                key={shortKey(item)}
                className="cx-flex-gap3-2s"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[#4f46e5]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="cx-mt6-maxw3x-1c">
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
        <PracticeSecurity />

        {/* 12. Integrations */}
        <Section
          id="integrations"
          eyebrow="Connections"
          title="Healthcare Integrations"
        >
          <Prose>
            <p>
              <span className="cx-fontse-textfo-1">
                What&apos;s available vs what&apos;s built per project:{" "}
              </span>
              API development and third-party integration are core Clickmasters
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
                key={shortKey(phase.title)}
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
                          key={shortKey(title)}
                          className="cx-rounde-border-32"
                        >
                          <div className="cx-flex-itemsc-2x">
                            <span className="cx-flex-h6-2w">
                              {stageNumber}
                            </span>
                            <p className="cx-fontse-leadin-b">
                              {title}
                            </p>
                          </div>
                          <p className="cm-p2">
                            {purpose}
                          </p>
                          <p className="cx-mt2-rounde-40">
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
              preferences. The options below come from the Clickmasters
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
                key={shortKey(title)}
                className="cm-cardnote"
              >
                <span className="cx-fontse-textfo-1">{title}:</span>{" "}
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
                key={shortKey(title)}
                className="cm-cardnote"
              >
                <span className="cx-fontse-textfo-1">{title}:</span>{" "}
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

        {/* 16. Why Clickmasters */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters?"
        >
          <Prose>
            <p>
              Clickmasters is a remote-first software development company
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
                key={shortKey(title)}
                className="cm-card5"
              >
                <h3 className="cx-fontse-leadin-b">{title}</h3>
                <p className="cm-p2">
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
              <h2 className="cm-h2b">
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
                  <li key={shortKey(title)} className="cx-flex-gap3-24">
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
          <div className="cm-wrap">
            <h2 className="cm-h2b">
              Medical Practice Management Software FAQs
            </h2>
            <PracticeFaqList />
          </div>
        </section>

        {/* Sticky mobile CTA */}
        <style>
          {"@media (max-width: 767px) { body { padding-bottom: 72px; } }"}
        </style>
        <div className="cm-mbar">
          <Link
            href="/contact"
            className="cm-cta-m"
          >
            Get a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
