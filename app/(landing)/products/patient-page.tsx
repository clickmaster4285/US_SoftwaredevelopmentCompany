import { shortKey } from "@/lib/short-key";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ClipboardList,
  IdCard,
  Lock,
  MessagesSquare,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass, ProductLink } from "./clinic-management-page";
import {
  answersQuestions,
  benefits,
  buildItems,
  challengeRows,
  cloudRows,
  customReasons,
  dataRows,
  featureGroups,
  hipaaRows,
  implementationSteps,
  intakeItems,
  integrationRows,
  journeySteps,
  messageRows,
  organizationRows,
  PATIENT_PATH,
  patientDescription,
  patientFaqs,
  patientImages,
  patientTitle,
  portalItems,
  PRODUCT_NAME,
  registrationItems,
  safeguards,
  schedulingItems,
  systemsRows,
  whyClickmasters,
  workflowItems,
} from "./patient-data";

export { PATIENT_PATH, patientDescription, patientTitle };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  CalendarCheck,
  IdCard,
  MessagesSquare,
  Route,
};

const ACCENT = "#0e7490";
const INDUSTRY_SLUG = "healthcare-medical-software";

export function patientSchema() {
  const url = pageUrl(PATIENT_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: patientTitle,
        description: patientDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(patientImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Patient Management Software Development",
        serviceType: "Custom Patient Management Software Development",
        provider: org,
        areaServed: { "@type": "Country", name: "United States" },
        url,
        image: pageUrl(patientImages.dashboard.src),
        description:
          "Custom patient management software development for US practices, clinics, hospitals and telehealth providers, covering registration, digital intake, scheduling, reminders, patient portals and EHR integration.",
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
        mainEntity: patientFaqs.map((faq) => ({
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
  { href: "#what-is-patient-management", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#patient-features", label: "Features" },
  { href: "#organizations", label: "Organizations" },
  { href: "#registration-intake", label: "Registration & intake" },
  { href: "#scheduling", label: "Scheduling" },
  { href: "#patient-records", label: "Records" },
  { href: "#patient-portal", label: "Portal" },
  { href: "#integrations", label: "Integrations" },
  { href: "#security", label: "HIPAA" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#0c2a33] shadow-xl shadow-cyan-950/10 ring-1 ring-black/5">
      <div
        className="cm-mock-bar"
        aria-hidden
      >
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> patients.example / concept
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
        className="block h-auto w-full bg-[#f3f8fa]"
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

function PhotoFigure({ image, caption }: { image: Img; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-[#ecfeff] shadow-xl shadow-cyan-950/10">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
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
    ? "bg-white text-[#0c2a33]"
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
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#a5f3fc] bg-[#ecfeff] p-6 md:flex-row md:items-center">
      <p className="max-w-2xl text-base font-semibold text-[#164e63]">
        {title}
      </p>
      <CtaLink>{cta}</CtaLink>
    </div>
  );
}

function CheckList({
  items,
  className = "",
  numbered = false,
}: {
  items: readonly string[];
  className?: string;
  numbered?: boolean;
}) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item, index) => (
        <li
          key={shortKey(item)}
          className="cm-li"
        >
          {numbered ? (
            <span
              className="cx-flex-h6-2h"
              style={{ backgroundColor: ACCENT }}
            >
              {index + 1}
            </span>
          ) : (
            <span aria-hidden="true" className="ico ico-check cm-ic1" style={{ color: ACCENT }} />
          )}
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
          key={shortKey(title)}
          className="cm-card5"
        >
          <p className="cm-ttl3">
            {numbered ? (
              <span
                className="cm-num7w"
                style={{ backgroundColor: ACCENT }}
              >
                {index + 1}
              </span>
            ) : (
              <ShieldCheck
                className="cm-ic05"
                style={{ color: ACCENT }}
                aria-hidden
              />
            )}
            <span className={numbered ? "pt-0.5" : ""}>{title}</span>
          </p>
          <p className="cm-p2">
            {text.charAt(0).toUpperCase() + text.slice(1)}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      className="cm-note"
      style={{ borderColor: ACCENT }}
    >
      {children}
    </div>
  );
}

function gridFor(count: number) {
  if (count === 5) return "md:grid-cols-2 lg:grid-cols-6";
  if (count % 3 === 0) return "md:grid-cols-2 lg:grid-cols-3";
  return "md:grid-cols-2";
}
function spanFor(count: number, index: number) {
  if (count !== 5) return "";
  return index < 3 ? "lg:col-span-2" : "lg:col-span-3";
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter(
      (item) => productPath(INDUSTRY_SLUG, item.slug) !== PATIENT_PATH,
    ) ?? [];

export default function PatientPage() {
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

          <div className="cm-hero-grid">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: ACCENT }}
              >
                Custom patient management software
              </p>
              <h1 className="cm-h1">
                {PRODUCT_NAME}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
                <p>
                  Most patient frustration with healthcare happens outside the
                  exam room: forms to fill in again, phone queues to book a
                  visit, reminders that never arrive, and messages that go
                  unanswered. Most staff frustration happens there too:
                  duplicate records, no-shows, double-booked providers, faxed
                  referrals and paper in the wrong folder.
                </p>
                <p>
                  Patient management software fixes this administrative side of
                  care. These patient management solutions keep one accurate
                  profile for every patient, move intake online, manage
                  appointments and reminders, track each patient from check-in
                  to follow-up, and give patients a secure portal to book,
                  message and complete tasks themselves.
                </p>
                <p>
                  Clickmasters designs and builds custom patient management
                  software for US practices, clinics, hospitals, healthcare
                  networks and telehealth providers. We build it around your
                  workflows and connect it to the clinical and billing systems
                  you already run. We scope the product, the timeline and the
                  quote before development starts.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink>Build Your Custom Patient Platform</CtaLink>
                <CtaLink outline>Get in touch</CtaLink>
              </div>
            </div>
            <AppFigure
              image={patientImages.dashboard}
              caption="Front-desk view: today's appointments, check-in status, waiting room flow and items that need attention"
              priority
            />
          </div>

          <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-2">
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
        <Section
          id="what-is-patient-management"
          eyebrow="Definition"
          title="What Is Patient Management Software?"
        >
          <Prose>
            <p>
              Patient management software (also called a patient management
              system or patient information management system) manages the
              administrative relationship between a patient and a healthcare
              organization. It answers questions like:
            </p>
          </Prose>
          <div className="mt-6 rounded-3xl border border-[#a5f3fc] bg-[#ecfeff] p-6 md:p-8">
            <CheckList
              items={answersQuestions}
              className="gap-x-8 md:grid-cols-2"
            />
          </div>
          <Callout>
            <span className="cx-fontse-textfo-1">
              It is not the clinical record.{" "}
            </span>
            Diagnoses, clinical notes, orders and results belong in the EMR or
            EHR. The patient management system holds the demographic,
            scheduling, communication and workflow data around that record and
            keeps it in sync.
          </Callout>

          <H3 className="mt-14">
            How Patient Management Software Compares to Related Systems
          </H3>
          <CompareTable
            caption="How this software compares with related healthcare systems"
            headers={[
              "System",
              "Primary focus",
              "Typical users",
              "How it relates to patient management",
            ]}
            rows={systemsRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            In a small practice, patient administration often lives inside{" "}
            <ProductLink slug="medical-practice-management-software">
              medical practice management software
            </ProductLink>{" "}
            alongside billing and claims. Buyers ask practice management
            software what is it when they want that operational layer:
            scheduling, billing and reporting. A practice management EHR system
            pairs the same layer with the clinical chart, so registration and
            the visit record stay on one patient. A dedicated patient management
            platform makes sense when the patient experience itself becomes the
            priority: high-volume clinics, multi-location networks,
            digital-first care or complex care coordination. It then works
            alongside the PM, EMR and billing systems instead of replacing them.
          </p>
        </Section>

        {/* How it works */}
        <Section
          id="how-it-works"
          eyebrow="The patient journey"
          title="How Does a Patient Management System Work?"
        >
          <Prose>
            <p>
              A typical patient journey through a patient management system
              looks like this:
            </p>
          </Prose>
          <DiagramFigure
            image={patientImages.journey}
            caption="Nine steps from booking to follow-up, all on one patient profile"
            className="mt-8"
          />
          <TitledCards
            items={journeySteps}
            numbered
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
        </Section>

        {/* Features */}
        <Section
          id="patient-features"
          eyebrow="19 capabilities"
          title="Key Features of Patient Management Software"
        >
          <div className="space-y-14">
            {featureGroups.map((group) => {
              const Icon = ICONS[group.icon] ?? ClipboardList;
              const n = group.features.length;
              return (
                <div key={shortKey(group.title)}>
                  <div className="flex items-center gap-3 border-b border-border pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#cffafe]">
                      <Icon className="h-5 w-5 text-[#0e7490]" aria-hidden />
                    </span>
                    <H3>{group.title}</H3>
                  </div>
                  <ul className={`mt-6 grid gap-4 ${gridFor(n)}`}>
                    {group.features.map(([title, text], index) => (
                      <li
                        key={shortKey(title)}
                        className={`rounded-2xl border border-border bg-white p-5 ${spanFor(n, index)}`}
                      >
                        <p className="cx-fontse-leadin-b">{title}</p>
                        <p className="cm-p2">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {group.visual === "analytics" ? (
                    <div className="mt-8">
                      <AppFigure
                        image={patientImages.analytics}
                        caption="Access and engagement: no-show rate, wait time and portal adoption by location (placeholder data)"
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <CtaStrip
            title="Want these capabilities shaped around your front desk, care teams and patients?"
            cta="Request a Consultation"
          />
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Patient Management Software"
        >
          <TitledCards
            items={benefits}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Organizations */}
        <Section
          id="organizations"
          eyebrow="Who it is for"
          title="Patient Management Software for Different Healthcare Organizations"
        >
          <CompareTable
            caption="Priority patient management capabilities by organization type"
            headers={["Organization", "Priority capabilities"]}
            rows={organizationRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            Telehealth providers depend on patient management more than most.
            Booking, intake, consent, identity checks and reminders all have to
            work without a front desk. For virtual care, the patient management
            layer usually connects directly to{" "}
            <ProductLink slug="telemedicine-software">
              telemedicine software
            </ProductLink>{" "}
            that runs the video consultation, so a booked appointment
            automatically becomes a secure virtual visit link.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            A patient management system in hospital settings covers the master
            patient index, pre-admission registration and movement between
            departments. A patient management system hospital teams share has to
            stay in sync with admissions, beds and the outpatient clinics. On
            the clinic side, a clinic management system app puts the same
            schedule, check-in list and waiting room on a phone or tablet at the
            front desk.
          </p>
        </Section>

        {/* Registration */}
        <Section
          id="registration-intake"
          eyebrow="Data quality starts here"
          title="Patient Registration and Digital Intake Management"
        >
          <Prose>
            <p>
              Registration is where data quality is won or lost. Mistakes here
              (a mistyped birth date, an outdated insurance plan, a duplicate
              record) spread into the clinical record, claims and patient
              communication.
            </p>
          </Prose>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-lg font-semibold">
                What good registration includes:
              </p>
              <CheckList items={registrationItems} className="mt-4" />
            </div>
            <div>
              <p className="text-lg font-semibold">
                Digital intake then replaces the clipboard:
              </p>
              <CheckList items={intakeItems} className="mt-4" />
            </div>
          </div>
          <div className="mt-10">
            <PhotoFigure
              image={patientImages.intake}
              caption="Mobile intake sent by text: insurance card capture, consents and an electronic signature"
            />
          </div>
        </Section>

        {/* Scheduling */}
        <Section
          id="scheduling"
          eyebrow="Convenience, time and rules"
          title="Appointment Scheduling and Patient Communication"
        >
          <Prose>
            <p>
              Patient scheduling software has to balance three things: patient
              convenience, provider time and operational rules.
            </p>
          </Prose>
          <p className="mt-8 text-lg font-semibold">Scheduling capabilities:</p>
          <CheckList items={schedulingItems} className="mt-4 md:grid-cols-2" />
          <div className="mt-10">
            <AppFigure
              image={patientImages.scheduling}
              caption="Provider calendars with open slots offered to the waitlist, plus reminder results for tomorrow"
            />
          </div>
          <p className="mt-10 text-lg font-semibold">Patient communication:</p>
          <CompareTable
            caption="Patient communication messages, channels and purpose"
            headers={["Message type", "Channel", "Purpose"]}
            rows={messageRows}
          />
          <Callout>
            Under HIPAA, appointment reminders are generally treated as part of
            treatment and healthcare operations. Automated text messages and
            calls must also follow the Telephone Consumer Protection Act (TCPA)
            and carrier rules on consent and opt-out. A well-designed system
            records consent and opt-outs by channel.
          </Callout>
        </Section>

        {/* Records */}
        <Section
          id="patient-records"
          eyebrow="Administrative vs clinical"
          title="Patient Records and Information Management"
        >
          <Prose>
            <p>
              A patient records management system has to separate administrative
              data from clinical data while keeping the two linked:
            </p>
          </Prose>
          <CompareTable
            caption="Where each type of patient data is stored"
            headers={[
              "Data type",
              "Stored in patient management",
              "Stored in EMR/EHR",
            ]}
            rows={dataRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            Clinical documentation should stay in the clinical system. When
            intake data or visit details need to reach the chart, they are
            passed to the practice&apos;s{" "}
            <ProductLink slug="electronic-medical-records-emr-software">
              Electronic Medical Records (EMR) software
            </ProductLink>{" "}
            for clinician review. This prevents two competing versions of a
            patient&apos;s medical history.
          </p>
          <Callout>
            <span className="cx-fontse-textfo-1">
              Patient identification matters.{" "}
            </span>
            Duplicate and overlaid records are a known patient safety and cost
            problem. A master patient index (MPI), with matching rules, merge
            and unmerge controls and an audit history, should be a core part of
            any serious patient management system.
          </Callout>
        </Section>

        {/* Portal */}
        <Section
          id="patient-portal"
          eyebrow="Engagement"
          title="Patient Portal and Patient Engagement"
        >
          <Prose>
            <p>
              A patient portal is only valuable if patients actually use it.
              Patient portal software works best when it does things patients
              actually need:
            </p>
          </Prose>
          <TitledCards
            items={portalItems}
            className="mt-8 md:grid-cols-2 lg:grid-cols-5"
          />
          <div className="mt-10">
            <PhotoFigure
              image={patientImages.portal}
              caption="Patient portal on mobile: upcoming appointments, secure messages and online bill payment"
            />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <p className="cx-textba-leadin-1n">
              Patient engagement analytics then show what is working: portal
              activation, message response times, form completion, reminder
              confirmation rates, survey scores and outreach results.
            </p>
            <p className="cx-textba-leadin-1n">
              The 21st Century Cures Act information-blocking rules also mean
              patients generally expect, and in many cases are entitled to,
              timely electronic access to their health information. Portals and
              APIs connected to the clinical system support this.
            </p>
          </div>
        </Section>

        {/* Workflow */}
        <Section
          id="workflow"
          eyebrow="Rules, not chasing"
          title="Patient Workflow Automation and Care Coordination"
        >
          <Prose>
            <p>
              Patient workflow management software turns repeated manual
              coordination into rules. Practice management software AI can
              suggest open slots, flag likely no-shows and time reminders, and
              it should stay as decision support for staff rather than an
              automatic change to a patient&apos;s booking:
            </p>
          </Prose>
          <TitledCards
            items={workflowItems}
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
          <div className="mt-10">
            <AppFigure
              image={patientImages.coordination}
              caption="Referral tracker from receipt to closed loop, a care-gap queue and escalations"
            />
          </div>
          <CtaStrip
            title="Ready to replace phone tag and spreadsheets with one coordinated patient workflow?"
            cta="Develop Your Custom Healthcare Platform"
          />
        </Section>

        {/* Integrations */}
        <Section
          id="integrations"
          eyebrow="Connected care"
          title="Patient Management Software Integrations"
        >
          <DiagramFigure
            image={patientImages.integrations}
            caption="One patient layer connected to EMR, EHR, billing, telemedicine, labs, payments and messaging"
          />
          <CompareTable
            caption="Integrations, data exchanged and methods"
            headers={["Integration", "What is exchanged", "Typical method"]}
            rows={integrationRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            The billing connection is often underestimated. Insurance details
            captured at registration and the completed visit at checkout both
            feed the claims process, and errors at either point lead directly to
            denials. Connecting the patient management platform to{" "}
            <ProductLink slug="medical-billing-software">
              medical billing software
            </ProductLink>{" "}
            means eligibility, copays and visit data move once, accurately,
            instead of being re-keyed by billing staff.
          </p>
        </Section>

        {/* Security */}
        <Section
          id="security"
          eyebrow="Protected health information"
          title="Patient Data Security and HIPAA Considerations"
        >
          <Prose>
            <p>
              Patient management systems hold protected health information
              (PHI): names linked to appointments, insurance identifiers, intake
              answers and messages. HIPAA applies to the covered entities using
              the system and to business associates handling PHI for them.
            </p>
          </Prose>
          <CompareTable
            caption="HIPAA elements and what they mean for a patient management platform"
            headers={[
              "HIPAA element",
              "What it means for a patient management platform",
            ]}
            rows={hipaaRows}
          />
          <p className="mt-10 font-semibold">
            Technical safeguards we design in:
          </p>
          <CheckList items={safeguards} className="mt-4 md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Administrative and physical safeguards stay with your organization:
            risk analysis, policies, workforce training, device and facility
            controls, vendor management and incident response. The software
            supports them with access reviews, audit reports and configurable
            retention.
          </p>
          <div className="mt-8 rounded-3xl bg-[#0c2a33] p-6 text-sm leading-7 text-white/80 md:p-8">
            Clickmasters does not claim HIPAA certification. HHS does not
            certify software or vendors. Whether a deployment is compliant
            depends on your organization, workflows, contracts and
            implementation.
          </div>
        </Section>

        {/* Cloud */}
        <Section
          id="cloud-vs-on-premise"
          eyebrow="Deployment"
          title="Cloud-Based vs. On-Premise Patient Management Software"
        >
          <CompareTable
            caption="Cloud-based compared with on-premise deployment"
            headers={[
              "Factor",
              "Cloud-Based Patient Management Software",
              "On-Premise Patient Management Software",
            ]}
            rows={cloudRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            Patient management is mostly patient-facing, so a cloud-based
            patient management system is the practical choice for most US
            organizations. Hospitals sometimes use a hybrid approach, with the
            patient-facing layer in the cloud and integration to on-premise
            clinical systems.
          </p>
        </Section>

        {/* Custom */}
        <Section
          id="custom-development"
          eyebrow="One patient experience"
          title="Custom Patient Management Software Development"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="cx-textba-leadin-1n">
                Off-the-shelf tools often solve one piece: a scheduling app, a
                reminder service, a portal bundled with the EMR. The result can
                be four logins, four patient lists and a patient experience that
                feels pieced together. Custom development makes sense when:
              </p>
              <CheckList items={customReasons} className="mt-5" />
            </div>
            <div>
              <p className="cx-textba-leadin-1n">
                Through our{" "}
                <Link
                  href="/software-development/custom-software-development"
                  className={linkClass}
                >
                  custom software development services
                </Link>
                , we design and build:
              </p>
              <ul className="mt-5 space-y-3">
                {buildItems.map((item) => (
                  <li
                    key={shortKey(item)}
                    className="cx-rounde-border-2c"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base font-medium leading-7 text-foreground">
            If an existing product fits your needs, we&apos;ll say so, and we
            can still build the integrations or patient-facing layer around it.
          </p>
          <CtaStrip
            title="Running several tools, logins and patient lists that should be one experience?"
            cta="Build Your Custom Patient Platform"
          />
        </Section>

        {/* Implementation */}
        <Section
          id="implementation"
          eyebrow="Delivery"
          title="Patient Management System Implementation Process"
        >
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {implementationSteps.map(([title, text], index) => (
              <li
                key={shortKey(title)}
                className="cm-card5"
              >
                <span
                  className="cm-label"
                  style={{ color: ACCENT }}
                >
                  Stage {index + 1}
                </span>
                <p className="cm-t2">{title}</p>
                <p className="cm-p2">
                  {text}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            We provide timelines and quotes after discovery, once the scope is
            clear.
          </p>
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="Problems we solve"
          title="Common Patient Management Challenges and Their Solutions"
        >
          <CompareTable
            caption="Common patient management challenges and their solutions"
            headers={["Challenge", "Solution"]}
            rows={challengeRows}
          />
        </Section>

        {/* Why */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters for Patient Management Software Development?"
        >
          <TitledCards
            items={whyClickmasters}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Final CTA */}
        <section className="border-t border-border bg-[#0c2a33] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="cm-h2b">
                Discuss Your Healthcare Software Project
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re cutting no-shows at one practice, unifying
                scheduling across a network, or launching a digital-first care
                model, the first step is the same: a clear look at how patients
                move through your organization today.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us your organization type, locations, patient volume,
                current systems and biggest patient-experience problems.
                We&apos;ll come back with a practical recommendation (build,
                extend or buy), the modules and integrations involved, and the
                next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink light>Talk about {PRODUCT_NAME}</CtaLink>
                <CtaLink light outline>
                  Request a Consultation
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
                  "Your organization type and locations",
                  "Your patient volume",
                  "The systems you use today",
                  "Your biggest patient-experience problems",
                ].map((item) => (
                  <li key={shortKey(item)} className="cx-flex-gap3-24">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#67e8f9] text-[#0c2a33]">
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
          <div className="cm-wrap">
            <h2 className="cm-h2b">
              Frequently Asked Questions About Patient Management Software
            </h2>
            <div className="cm-list">
              {patientFaqs.map((faq, index) => (
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
                  <p className="cm-intro">
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
            <h2 className="cx-text2x-fontse-u">
              More in Healthcare &amp; Medical Software
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={productPath(INDUSTRY_SLUG, item.slug)}
                  className="cm-linkcard"
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
        <div className="cm-mbar">
          <Link
            href="/contact"
            className="cm-cta-m"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
