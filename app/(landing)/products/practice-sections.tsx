"use client";

// The two longest blocks of the medical practice management page (22 feature
// cards and the FAQ). As server components their full text was serialised a
// second time into the page's React Server Components payload, pushing the
// HTML document to ~400 KB. Rendered from a client component that imports its
// own data, the HTML still contains the complete server-rendered text (crawlers
// see everything), while the payload carries only a component reference; the
// text ships once more in a cacheable JS chunk instead of inside the document.
import { shortKey } from "@/lib/short-key";
import type { ReactNode } from "react";
import { ICONS } from "./practice-icons";

// Imports for the sections below (moved verbatim from the page).
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
import { CompareTable, CtaBand, ProductLink, Prose, Section } from "./product-primitives";


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
    <article className="cm-card6c">
      <div className="cx-flex-itemss-31">
        <span className="cx-flex-h11-2p">
          <Icon className="h-5 w-5 text-[#4f46e5]" aria-hidden />
        </span>
        <div>
          <p className="cx-textxs-fontse-15">Feature {number}</p>
          <h4 className="cx-mt1-textlg-27">
            {number}. {feature.title}
          </h4>
        </div>
      </div>
      <div className="cx-mt4-spacey-1j">
        {rows.map(([label, value]) => (
          <p key={shortKey(label)}>
            <span className="cx-fontse-textfo-1">{label}: </span>
            {value}
          </p>
        ))}
      </div>
      <div className="mt-auto pt-4">
        <dl className="cx-grid-gap2-37">
          <div>
            <dt className="cx-inline-fontse-q">Problem solved: </dt>
            <dd className="cx-inline-textmu-v">{feature.problem}</dd>
          </div>
          <div>
            <dt className="cx-inline-fontse-q">Business value: </dt>
            <dd className="cx-inline-textmu-v">{feature.value}</dd>
          </div>
          <div>
            <dt className="cx-inline-fontse-q">Who benefits: </dt>
            <dd className="cx-inline-textmu-v">{feature.who}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function PracticeFeatureGrid({
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

export function PracticeFaqList() {
  return (
    <div className="cm-list">
      {practiceFaqs.map((faq, index) => (
        <details
          key={shortKey(faq.question)}
          className="group p-5 md:p-6"
          open={index === 0}
        >
          <summary className="cm-faq-q">
            <h3>{faq.question}</h3>
            <span aria-hidden="true" className="ico ico-chev cm-faq-ic" />
          </summary>
          <p className="cm-intro">{faq.answer}</p>
        </details>
      ))}
    </div>
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

export function PracticeWhatItIs() {
  return (
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
            key={shortKey(title)}
            className="cm-cardnote"
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
          <li key={shortKey(step)} className="cx-flex-itemsc-2x">
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
      <p className="cx-mt6-maxw3x-1c">
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
            key={shortKey(item)}
            className="cx-flex-gap3-2s"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f46e5]"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
      <p className="cx-mt6-maxw3x-1c">
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
  );
}

export function PracticeWhoBenefits() {
  return (
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
              key={shortKey(item.title)}
              className="cm-card5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef2ff]">
                <Icon className="h-5 w-5 text-[#4f46e5]" aria-hidden />
              </span>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="cm-p2">
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
  );
}

export function PracticeChallenges() {
  return (
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
  );
}

export function PracticeSecurity() {
  return (
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
                key={shortKey(title)}
                className="cm-cardnote"
              >
                <span className="cx-fontse-textfo-1">
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
            className="cm-card5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">
              {item.region}
            </p>
            <p className="cm-p2">
              {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-6 max-w-4xl rounded-2xl border-l-4 border-[#4f46e5] bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground">
        <span className="cx-fontse-textfo-1">Important: </span>
        there is no official government &quot;HIPAA certification&quot; or
        &quot;GDPR certification&quot; for software, and ClickMasters
        doesn&apos;t claim either. Compliance depends on architecture,
        hosting, configuration, the practice&apos;s policies and training,
        vendor contracts and the laws of each jurisdiction. We build the
        technical safeguards these frameworks call for. The practice and its
        advisers remain responsible for overall compliance.
      </div>
    </Section>
  );
}

export function PracticeHowItWorks() {
  return (
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
              key={shortKey(stage)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 lg:flex-col lg:justify-start lg:px-2 lg:py-4 lg:text-center ${index === 4 ? "bg-[#ecfeff]" : index >= 5 && index <= 6 ? "bg-[#eef2ff]" : "bg-secondary"}`}
            >
              <span className="cx-flex-h8-3y">
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
      <p className="cx-mt6-maxw3x-1c">
        At stage 5, clinical documentation usually lives in an EMR. If your
        practice needs a charting system to pair with the PMS, our{" "}
        <ProductLink slug="electronic-medical-records-emr-software">
          Electronic Medical Records (EMR) Software
        </ProductLink>{" "}
        covers encounter notes and problem, medication and allergy lists.
      </p>
    </Section>
  );
}
