"use client";

// The two longest blocks of the EHR page (feature cards and the FAQ), rendered
// from a client component that imports its own data. The HTML still contains
// the full server-rendered text; the React Server Components payload carries
// only a component reference instead of a second copy of all this text, which
// had pushed the document to ~380 KB. See practice-sections.tsx.
import type { ReactNode } from "react";
import Link from "next/link";
import { shortKey } from "@/lib/short-key";
import { ICONS } from "./ehr-icons";
import { productLink } from "./clinic-management-data";

// Imports for the sections below (moved verbatim from the page).
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
import { CompareTable, CtaBand, ProductLink, Prose, Section } from "./product-primitives";


type Img = { src: string; alt: string; width: number; height: number };

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

const ACCENT = "#0369a1";

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

const linkClass = "font-medium text-foreground underline underline-offset-4";

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
      <Link href={productLink(link.slug)} className={linkClass}>
        {link.anchor}
      </Link>
      {text.slice(at + link.anchor.length)}
    </>
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
    <article className="cm-card6c">
      <div className="cx-flex-itemss-31">
        <span className="cx-flex-h11-1x">
          <Icon className="h-5 w-5 text-[#0369a1]" aria-hidden />
        </span>
        <div>
          <p className="cx-textxs-fontse-15">Feature {number}</p>
          <h3 className="cx-mt1-textlg-27">
            {number}. {feature.title}
          </h3>
        </div>
      </div>
      <div className="cx-mt4-spacey-1j">
        <p>
          <span className="cx-fontse-textfo-1">What it does: </span>
          {feature.does}
        </p>
        <p>
          <span className="cx-fontse-textfo-1">How it works: </span>
          <LinkedText text={feature.how} link={feature.link} />
        </p>
      </div>
      <div className="mt-auto pt-4">
        <dl className="cx-grid-gap2-3d">
          {(
            [
              ["Problem solved", feature.problem],
              ["Practical value", feature.value],
              ["Who benefits", feature.who],
            ] as const
          ).map(([label, value]) => (
            <div key={shortKey(label)}>
              <dt className="cx-inline-fontse-q">{label}: </dt>
              <dd className="cx-inline-textmu-v">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export function EhrFeatureGrid({
  groupIndex,
  start,
}: {
  groupIndex: number;
  start: number;
}) {
  const group = featureGroups[groupIndex];
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {group.features.map((feature, index) => (
        <FeatureCard
          key={shortKey(feature.title)}
          feature={feature}
          number={start + index + 1}
        />
      ))}
    </div>
  );
}

export function EhrFaqList() {
  return (
    <div className="cm-list">
      {ehrFaqs.map((faq, index) => (
        <details
          key={shortKey(faq.question)}
          className="group p-5 md:p-6"
          open={index === 0}
        >
          <summary className="cm-faq-q">
            <h3>
              {index + 1}. {faq.question}
            </h3>
            <span aria-hidden="true" className="ico ico-chev cm-faq-ic" />
          </summary>
          <p className="cm-intro">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function EhrWhatIsEhr() {
  return (
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
          chart sits in one filing cabinet. Electronic health record
          system software makes the same information available, under access
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
            key={shortKey(title)}
            className="cm-card5"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              {index + 1}
            </span>
            <p className="mt-4 font-semibold">{title}</p>
            <p className="cm-p2">
              {text.charAt(0).toUpperCase() + text.slice(1)}
            </p>
          </li>
        ))}
      </ol>

      <H3 className="mt-12">
        How Electronic Health Records Work in Practice
      </H3>
      <div className="mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <p className="cx-textba-leadin-1n">
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
                key={shortKey(item)}
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
            key={shortKey(item)}
            className="cm-li"
          >
            <span aria-hidden="true" className="ico ico-check cm-ic1" style={{ color: ACCENT }} />
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
                key={shortKey(step.title)}
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
  );
}

export function EhrChallenges() {
  return (
    <Section
      id="challenges"
      eyebrow="The problem"
      title="Healthcare Information Management Challenges EHR Software Solves"
    >
      <Prose>
        <p>
          Most healthcare organizations don&apos;t struggle with how much
          data they have. They struggle because the data is scattered,
          inconsistent and hard to trust. Purpose-built electronic health
          records systems software fixes the structure underneath.
        </p>
      </Prose>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {challenges.map((item, index) => (
          <article
            key={shortKey(item.title)}
            className="cx-overfl-rounde-2q"
          >
            <div className="flex items-center gap-3 px-6 pt-6">
              <span className="text-xs font-bold text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="cx-px6-pt3-30">
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
  );
}

export function EhrInteroperability() {
  return (
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
          security and consistent meaning. We also use the HL7 EHR System
          Functional Model, which describes the functions an electronic
          health record system (EHR-S) should provide, as a checklist
          during discovery.
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
            key={shortKey(topic.title)}
            className="cm-card5"
          >
            <h3 className="font-semibold">{topic.title}</h3>
            <p className="cm-p2">
              <LinkedText text={topic.text} link={topic.link} />
            </p>
          </article>
        ))}
      </div>
      <div
        className="mt-6 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
        style={{ borderColor: ACCENT }}
      >
        <span className="cx-fontse-textfo-1">Important: </span>
        Which integrations are possible, and how they work, depends on the
        chosen architecture, the standards and versions involved, what
        partner systems support, contractual access to third-party APIs, and
        the requirements of your project. Clickmasters scopes every
        integration individually during discovery instead of promising
        ready-made connectors.
      </div>
    </Section>
  );
}
