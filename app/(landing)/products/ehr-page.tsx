import { ICONS } from "./ehr-icons";
import { EhrChallenges, EhrFaqList, EhrFeatureGrid, EhrInteroperability, EhrWhatIsEhr } from "./ehr-sections";
import { shortKey } from "@/lib/short-key";
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
} from "@/components/ui/mask-icons";
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
  securityControls,
  storedInformation,
  techRows,
  whenCustom,
  whyClickmasters,
  type EhrFeature,
} from "./ehr-data";

export { EHR_PATH, ehrDescription, ehrTitle };


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
      // Custom-built software, not a packaged app with a public price or
      // ratings: a SoftwareApplication node failed Google's required
      // offers + aggregateRating/review checks, so only the Service remains.
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
        className="cm-mock-bar"
        aria-hidden
      >
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
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
      <figcaption className="cm-mock-cap">
        <span>{caption}</span>
        <span className="cm-chip">
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
        className="cm-fig"
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
              <h1 className="cm-h1">
                Electronic Health Records Software Built Around Clinical Workflows
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
                  <div key={shortKey(title)} className="cx-flex-gap3-24">
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
                className="cm-pill"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        {/* What is */}
        <EhrWhatIsEhr />

        {/* Challenges */}
        <EhrChallenges />

        {/* Features */}
        <Section
          id="ehr-features"
          eyebrow="22 modules"
          title="Advanced EHR Software Features"
        >
          <Prose>
            <p>
              Electronic health record programs that have numerous
              capabilities can become hard to use, so each module below can be
              configured, extended or left out to suit your organization. The feature set of a custom EHR is decided
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
                <div key={shortKey(group.title)}>
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
                  <EhrFeatureGrid groupIndex={groupIndex} start={start} />
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
                key={shortKey(step.title)}
                className="cx-flex-gap4-3s"
              >
                <span
                  className="cx-flex-h9-3z"
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
                  <p className="cm-p2">
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
                key={shortKey(title)}
                className="cm-card5"
              >
                <p className="cm-ttl">
                  <ShieldCheck
                    className="cm-ic05"
                    style={{ color: ACCENT }}
                    aria-hidden
                  />
                  {title}
                </p>
                <p className="cm-p2">
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
              Electronic health record systems in healthcare vary a great deal
              with size, specialty mix and care setting. A custom build lets the system fit the organization
              instead of the other way round.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {organizations.map((item) => {
              const Icon = ICONS[item.icon] ?? Stethoscope;
              return (
                <article
                  key={shortKey(item.title)}
                  className="cm-card5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0f2fe]">
                    <Icon className="h-5 w-5 text-[#0284c7]" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="cm-p2">
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
          <p className="cx-mt6-maxw3x-1c">
            <span className="cx-fontse-textfo-1">Note: </span>
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
          <p className="cx-mt6-maxw3x-1c">
            <span className="cx-fontse-textfo-1">
              Why organizations use both:{" "}
            </span>
            the clinical encounter documented in the EHR produces the codes and
            services that drive billing. Integration passes that data along
            automatically, so staff don&apos;t enter it twice.
          </p>
        </Section>

        {/* Interoperability */}
        <EhrInteroperability />

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
                key={shortKey(title)}
                className="cm-cardnote"
              >
                <span className="cx-fontse-textfo-1">{title}:</span>{" "}
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
                className="cm-card5"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  {region}
                </p>
                <p className="cm-p2">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <div
            className="mt-6 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
            style={{ borderColor: ACCENT }}
          >
            <span className="cx-fontse-textfo-1">
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
                key={shortKey(item)}
                className="cx-flex-gap3-2s"
              >
                <span aria-hidden="true" className="ico ico-check cm-ic1" style={{ color: ACCENT }} />
                {item}
              </li>
            ))}
          </ul>
          <p className="cx-mt6-maxw3x-1c">
            <span className="cx-fontse-textfo-1">
              When a ready-made EHR may be a better fit:{" "}
            </span>
            if you need standard workflows quickly with minimal internal IT
            involvement, ready-made electronic health record software
            solutions can be the sensible choice. This is often the case for
            electronic health record systems for small businesses, such as a
            single-doctor clinic. A good partner will tell you honestly which option suits
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
                key={shortKey(phase.title)}
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
                        key={shortKey(title)}
                        className="cx-rounde-border-32"
                      >
                        <div className="cx-flex-itemsc-2x">
                          <span
                            className="cx-flex-h6-2h"
                            style={{ backgroundColor: ACCENT }}
                          >
                            {processStarts[phaseIndex] + stageIndex + 1}
                          </span>
                          <p className="cx-fontse-leadin-b">{title}</p>
                        </div>
                        <p className="cm-p2">
                          {purpose}
                        </p>
                        <p className="cx-mt2-rounde-3p">
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
              electronic health record software cost. It depends mainly on:
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
          <p className="cx-mt6-maxw3x-1c">
            A phased approach, starting with a focused first release and
            expanding over time, often lowers early investment and risk.
          </p>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#bae6fd] bg-[#f0f9ff] p-6 md:flex-row md:items-center md:p-8">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight">
                Get a Custom EHR Development Estimate
              </h3>
              <p className="cm-p2">
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
              Many electronic health record software companies sell one fixed
              product. Clickmasters is a remote-first software development
              company that builds around your workflows instead. We
              work with written scope, a single engineering point of contact,
              and source code that belongs to the client. Healthcare and
              HealthTech is one of our core industries.
            </p>
          </Prose>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyClickmasters.map(([title, text]) => (
              <li
                key={shortKey(title)}
                className="cm-card5"
              >
                <p className="cx-fontse-leadin-b">
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </p>
                <p className="cm-p2">
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
              <h2 className="cm-h2b">
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
                  <li key={shortKey(title)} className="cx-flex-gap3-24">
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
          <div className="cm-wrap">
            <h2 className="cm-h2b">
              Frequently Asked Questions About EHR Software
            </h2>
            <EhrFaqList />
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
