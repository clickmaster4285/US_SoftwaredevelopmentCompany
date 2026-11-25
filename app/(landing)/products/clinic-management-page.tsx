import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Baby,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardList,
  Cloud,
  CornerDownLeft,
  FileClock,
  FlaskConical,
  Flower2,
  HeartPulse,
  History,
  Hospital,
  KeyRound,
  Link2,
  Mail,
  MessageSquare,
  PersonStanding,
  Phone,
  Pill,
  ReceiptText,
  Repeat,
  ScanFace,
  Smile,
  Stethoscope,
  UserRound,
  UsersRound,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import {
  benefits,
  challenges,
  CLINIC_PATH,
  clinicDescription,
  clinicFaqs,
  clinicImages,
  clinicTitle,
  clinicTypes,
  consultationChecklist,
  coreRecords,
  costFactors,
  customReasons,
  customVsReadyRows,
  features,
  heroOutcomes,
  integrationRows,
  journeyRows,
  journeySteps,
  manualVsDigital,
  privacyRegions,
  processSteps,
  productLink,
  securityControls,
  securityLayers,
  whoNeeds,
  whyClickMasters,
  type ClinicFeature,
} from "./clinic-management-data";

export { CLINIC_PATH, clinicDescription, clinicTitle };

const ICONS: Record<string, LucideIcon> = {
  Baby,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  ClipboardList,
  Cloud,
  FlaskConical,
  Flower2,
  HeartPulse,
  History,
  Hospital,
  KeyRound,
  Link2,
  MessageSquare,
  PersonStanding,
  Pill,
  ReceiptText,
  Repeat,
  ScanFace,
  Smile,
  Stethoscope,
  UserRound,
  UsersRound,
  Wallet,
  Workflow,
};

export function clinicManagementSchema() {
  const url = pageUrl(CLINIC_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: clinicTitle,
        description: clinicDescription,
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
            name: "Clinic Management Software",
            item: url,
          },
        ],
      },
      // Custom-built software, not a packaged app with a public price or
      // ratings: a SoftwareApplication node failed Google's required
      // offers + aggregateRating/review checks, so the page is described
      // as the development Service it actually is (same as other products).
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom Clinic Management Software Development",
        serviceType: "Healthcare software development",
        description:
          "Requirement analysis, clinic workflow discovery, UI/UX design, software architecture, frontend and backend development, third-party integrations, security and quality testing, deployment, and ongoing maintenance for custom clinic management systems.",
        provider: org,
        url,
        image: pageUrl(clinicImages.dashboard.src),
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
            "Private clinics, multi-specialty clinics, dental clinics, specialist practices and outpatient healthcare centres",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Clinic Management Software Development Services",
          itemListElement: [
            "Clinic workflow discovery and requirement analysis",
            "Clinic software UI/UX design",
            "Clinic management software development",
            "Healthcare system integrations",
            "Security and quality testing",
            "Maintenance and ongoing support",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: clinicFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

const contents = [
  { href: "#what-it-is", label: "What it is" },
  { href: "#challenges", label: "Challenges" },
  { href: "#features", label: "Features" },
  { href: "#patient-journey", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#clinic-types", label: "Clinic types" },
  { href: "#security", label: "Security" },
  { href: "#integrations", label: "Integrations" },
  { href: "#process", label: "Process" },
  { href: "#cost", label: "Cost" },
  { href: "#faq", label: "FAQ" },
];

export const linkClass = "font-medium text-foreground underline underline-offset-4";

export function ProductLink({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  return (
    <Link href={productLink(slug)} className={linkClass}>
      {children}
    </Link>
  );
}

export function ScreenFigure({
  image,
  caption,
  priority = false,
}: {
  image: { src: string; alt: string };
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#0f172a] shadow-xl shadow-slate-900/10 ring-1 ring-black/5">
      <div
        className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
      </div>
      <img
        src={image.src}
        alt={image.alt}
        width={1440}
        height={900}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="block h-auto w-full bg-[#f4f6fa]"
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

export function CtaBand({
  title,
  text,
  cta,
}: {
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-secondary p-6 md:flex-row md:items-center md:p-8">
      <div className="max-w-2xl">
        <p className="text-lg font-semibold tracking-tight md:text-xl">
          {title}
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
      </div>
      <Link
        href="/contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function FeatureBody({
  feature,
  index,
}: {
  feature: ClinicFeature;
  index: number;
}) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <>
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
          <Icon className="h-5 w-5 text-primary" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Feature {index + 1}
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-snug">
            {index + 1}. {feature.title}
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
          {feature.how}
        </p>
      </div>
      <div className="mt-4 grid gap-3 rounded-xl bg-secondary/70 p-4 text-sm leading-6">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">
            Problem solved:{" "}
          </span>
          {feature.problem}
        </p>
        {Array.isArray(feature.benefits) ? (
          <div>
            <p className="font-semibold text-foreground">Benefits:</p>
            <ul className="mt-1 space-y-1 text-muted-foreground">
              {feature.benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-primary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Benefits: </span>
            {feature.benefits}
            {feature.note ? (
              <>
                {" "}
                {feature.note.before}
                <ProductLink slug={feature.note.slug}>
                  {feature.note.anchor}
                </ProductLink>
                {feature.note.after}
              </>
            ) : null}
          </p>
        )}
      </div>
    </>
  );
}

function FeatureCard({ index }: { index: number }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6">
      <FeatureBody feature={features[index]} index={index} />
    </article>
  );
}

function FeatureShowcase({
  index,
  image,
  caption,
  reverse = false,
}: {
  index: number;
  image: { src: string; alt: string };
  caption: string;
  reverse?: boolean;
}) {
  return (
    <article className="grid items-center gap-8 rounded-3xl border border-border bg-white p-5 md:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className={reverse ? "lg:order-2" : undefined}>
        <ScreenFigure image={image} caption={caption} />
      </div>
      <div className={reverse ? "lg:order-1" : undefined}>
        <FeatureBody feature={features[index]} index={index} />
      </div>
    </article>
  );
}

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);

export default function ClinicManagementPage() {
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
              <li className="text-foreground">Clinic Management Software</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Healthcare software
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Clinic Management Software Built Around the Way Your Clinic
                Works
              </h1>
              <p className="mt-5 text-lg leading-8 text-foreground/80">
                Bring appointments, patient records, consultations,
                prescriptions, billing and follow-ups into one secure system,
                designed and developed for your clinic&apos;s real workflow.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Request a Custom Clinic Software Consultation
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
            <ScreenFigure
              image={clinicImages.dashboard}
              caption="Front-desk dashboard: today's appointments, waiting room and collections"
              priority
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <Prose>
              <p>
                Most clinics don&apos;t struggle because their staff aren&apos;t
                working hard enough. They struggle because the day is split
                across a paper diary, a spreadsheet, a billing tool, a messaging
                app and a filing cabinet. ClickMasters designs and builds custom
                clinic management software that connects those pieces. Your
                front desk, doctors and administrators work from the same
                patient record, the same calendar and the same billing data.
              </p>
              <p>
                We are a software development company, not an off-the-shelf
                vendor. We don&apos;t ask your clinic to adapt to a fixed
                product. We scope, design and develop a medical clinic
                management system around your specialties, your staff structure
                and how your patients move through a visit.
              </p>
            </Prose>
            <aside className="rounded-3xl border border-border bg-primary p-6 text-primary-foreground">
              <p className="text-sm font-semibold">
                What you get with a custom clinic management system:
              </p>
              <ul className="mt-4 space-y-3">
                {heroOutcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-primary-foreground/85"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#5eead4]"
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

        {/* What is */}
        <Section
          id="what-it-is"
          eyebrow="Definition"
          title="What Is Clinic Management Software?"
        >
          <Prose>
            <p>
              Clinic management software is a digital system that runs the
              day-to-day operations of an outpatient clinic: scheduling, patient
              registration, clinical documentation, prescriptions, billing,
              payments, communication and reporting. Instead of each task living
              in a separate tool or on paper, a clinic management system
              connects them so that information entered once is available
              wherever it&apos;s needed next.
            </p>
          </Prose>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            How a Clinic Management System Works
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            At its core, the software is built around three connected records:
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {coreRecords.map((item, index) => (
              <li
                key={item.title}
                className="relative rounded-2xl border border-border bg-white p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="mt-4 font-semibold">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            When a receptionist books an appointment, the system links it to the
            patient&apos;s record. When the doctor opens the appointment, they
            see that patient&apos;s history. When the consultation ends, the
            services recorded become line items on an invoice. When the invoice
            is paid or left outstanding, that status is visible to the front
            desk and administrators. Each step feeds the next.
          </p>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            Who Needs Clinic Management Software?
          </h3>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {whoNeeds.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <span className="font-semibold text-foreground">
                  {item.title}
                </span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            If patient records are your main concern, our dedicated{" "}
            <ProductLink slug="patient-management-software">
              Patient Management Software
            </ProductLink>{" "}
            focuses on registration, demographics, visit history and patient
            search. Clinic management software covers that ground and extends it
            across scheduling, consultation, billing and clinic administration.
          </p>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            Manual vs Digital Clinic Management
          </h3>
          <CompareTable
            caption="Manual clinic management compared with a digital clinic management system"
            headers={[
              "Task",
              "Manual / fragmented approach",
              "With clinic management software",
            ]}
            rows={manualVsDigital}
          />
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="The problem"
          title="Common Challenges Clinics Face, and How Software Solves Them"
        >
          <Prose>
            <p>
              These are the operational problems clinic teams describe most
              often when they start looking for a clinic management system.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {challenges.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <h3 className="px-6 pt-6 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="px-6 pt-3 text-sm leading-6 text-muted-foreground">
                  <span className="font-semibold text-[#be123c]">
                    The problem:{" "}
                  </span>
                  {item.problem}
                </p>
                <p className="m-4 mt-4 rounded-xl bg-[#f0fdfa] px-4 py-3 text-sm leading-6 text-[#134e4a]">
                  <span className="font-semibold">
                    How software solves it:{" "}
                  </span>
                  {item.solution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section
          id="features"
          eyebrow="Modules"
          title="Clinic Management Software Features"
        >
          <Prose>
            <p>
              Every clinic needs a different combination of modules. Below are
              the features we most commonly scope and build. Your system can
              include all of them, or only the ones your clinic needs now, with
              room to add more later.
            </p>
          </Prose>
          <div className="mt-10 space-y-6">
            <FeatureShowcase
              index={0}
              image={clinicImages.calendar}
              caption="Multi-doctor calendar with visit types, leave and lunch blocks"
            />
            <FeatureShowcase
              index={1}
              image={clinicImages.patient}
              caption="Patient profile with allergies, vitals and visit timeline"
              reverse
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {range(2, 4).map((i) => (
                <FeatureCard key={i} index={i} />
              ))}
            </div>
            <FeatureShowcase
              index={5}
              image={clinicImages.billing}
              caption="Invoice, payments and outstanding balances by age"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {range(6, 12).map((i) => (
                <FeatureCard key={i} index={i} />
              ))}
              <aside className="flex flex-col justify-center rounded-2xl border border-dashed border-border bg-secondary/60 p-6">
                <p className="text-lg font-semibold">
                  Start with what you need now
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Most clinics launch with scheduling, records and billing, then
                  add reminders, lab workflows or multi-branch support in later
                  phases.
                </p>
              </aside>
            </div>
            <FeatureShowcase
              index={13}
              image={clinicImages.analytics}
              caption="Appointments trend, revenue by service, busiest slots and branches"
              reverse
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {range(14, 17).map((i) => (
                <FeatureCard key={i} index={i} />
              ))}
            </div>
          </div>
          <CtaBand
            title="Plan Your Clinic Software Features"
            text="Tell us which modules matter most today and we'll help you separate the first release from later phases."
            cta="Plan Your Clinic Software Features"
          />
        </Section>

        {/* Patient journey */}
        <Section
          id="patient-journey"
          eyebrow="Patient flow"
          title="How Clinic Management Software Works: The Patient Journey"
        >
          <Prose>
            <p>
              A well-designed clinic management system follows the patient from
              first contact to follow-up, with each step passing information to
              the next.
            </p>
          </Prose>
          <figure className="mt-8 rounded-3xl border border-border bg-white p-5 md:p-6">
            <ol
              aria-label="Clinic management software workflow from patient registration to appointment, consultation, prescription, billing, payment and follow-up"
              className="grid gap-2 lg:grid-cols-8 lg:gap-0"
            >
              {journeySteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-3 lg:flex-col lg:gap-0"
                >
                  <div className="flex w-full items-center gap-3 rounded-xl bg-secondary px-4 py-3 lg:mx-1 lg:w-auto lg:flex-1 lg:flex-col lg:justify-center lg:px-2 lg:py-4 lg:text-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold leading-snug lg:mt-2">
                      {step}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CornerDownLeft
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden
              />
              Step 8, Follow-Up, loops back to step 2, Appointment Booking.
            </figcaption>
          </figure>
          <CompareTable
            caption="What happens and what the system records at each step of the clinic patient journey"
            headers={["Step", "What happens", "What the system records"]}
            rows={journeyRows}
          />
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Clinic Management Software"
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
                  <span className="mr-1 rounded bg-secondary px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em]">
                    Example
                  </span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Clinic types */}
        <Section
          id="clinic-types"
          eyebrow="Specialties"
          title="Clinic Types We Support"
        >
          <Prose>
            <p>
              The core modules are similar across clinics, but workflows differ
              by specialty. Here is how the software is typically adapted for
              each clinic type.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clinicTypes.map((item) => {
              const Icon = ICONS[item.icon] ?? Stethoscope;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
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
            title="Running a specialty clinic?"
            text="Odontograms, growth charts, session packages or antenatal schedules: tell us how your specialty works and we'll scope it in."
            cta="Discuss Software for Your Specialty"
          />
        </Section>

        {/* Why custom */}
        <Section
          id="why-custom"
          eyebrow="Build vs buy"
          title="Why Choose Custom Clinic Management Software?"
        >
          <Prose>
            <p>
              Ready-made clinic software works well for many clinics, especially
              those with standard workflows and a limited budget. Custom
              software makes sense when your clinic&apos;s way of working
              doesn&apos;t fit a standard product, or when you need control over
              features, integrations and data. As a development partner,
              ClickMasters builds the system you specify rather than selling a
              fixed product.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customReasons.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            If you need broader practice-level tools such as provider
            credentialing, multi-practice administration and revenue-cycle
            oversight, see our{" "}
            <ProductLink slug="medical-practice-management-software">
              Medical Practice Management Software
            </ProductLink>
            . Many clinics combine both into one healthcare practice management
            software platform.
          </p>
        </Section>

        {/* Security */}
        <Section
          id="security"
          eyebrow="Privacy"
          title="Security, Privacy and Compliance"
        >
          <Prose>
            <p>
              Clinic software stores some of the most sensitive data there is.
              Security has to be part of the architecture from the first design
              discussion, not added at the end.
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
            <figure className="rounded-3xl border border-border bg-white p-5">
              <div
                role="img"
                aria-label="Security layers in clinic management software including authentication, role-based access, encryption and audit logs"
                className="grid grid-cols-[minmax(0,1fr)_44px] gap-3"
              >
                <ol className="space-y-1.5">
                  {securityLayers.map((layer, index) => (
                    <li key={layer.label}>
                      <div
                        className="rounded-xl px-4 py-3"
                        style={{
                          backgroundColor: `rgba(15, 23, 42, ${0.05 + index * 0.13})`,
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
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-primary/40 bg-secondary py-4">
                  <FileClock className="h-4 w-4 text-primary" aria-hidden />
                  <span className="text-xs font-semibold tracking-wide [writing-mode:vertical-rl]">
                    Audit logging at every layer
                  </span>
                </div>
              </div>
            </figure>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Security Controls We Design and Build
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {securityControls.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="font-semibold text-foreground">
                      {item.title}:
                    </span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-14 text-2xl font-semibold tracking-tight">
            HIPAA, GDPR and Healthcare Privacy Requirements
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Requirements depend on where your clinic operates and whose data it
            processes:
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {privacyRegions.map((item) => (
              <article
                key={item.region}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.region}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 max-w-4xl rounded-2xl border-l-4 border-primary bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">
              An important clarification:{" "}
            </span>
            no software is &quot;HIPAA-certified&quot; or
            &quot;GDPR-certified&quot; on its own, and there is no official
            government certification for either. Compliance depends on the final
            system architecture, hosting choices, how the clinic configures and
            uses the software, staff policies and training, contracts with
            vendors, and the laws of the jurisdiction. ClickMasters can design
            and build software with the technical safeguards these frameworks
            call for. Your clinic, together with its legal and compliance
            advisers, remains responsible for overall compliance.
          </div>
        </Section>

        {/* Integrations */}
        <Section
          id="integrations"
          eyebrow="Connections"
          title="Integrations and Scalability"
        >
          <Prose>
            <p>
              A clinic management system rarely works alone. Below are the
              integrations clinics most commonly request.
            </p>
            <p>
              <span className="font-semibold text-foreground">
                How to read this list:{" "}
              </span>
              ClickMasters builds integrations per project. Whether a specific
              connection is possible depends on the third-party system&apos;s
              available APIs, data standards, access permissions and commercial
              terms. We confirm feasibility during discovery, before development
              begins. None of these are claimed as pre-built, ready-to-use
              connectors.
            </p>
          </Prose>
          <CompareTable
            caption="Common clinic management software integrations, their purpose and how they are usually built"
            headers={[
              "Integration",
              "Typical purpose",
              "How it's usually built",
            ]}
            rows={integrationRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            If your clinic is connecting to, or building, a broader records
            platform, our{" "}
            <ProductLink slug="electronic-health-records-ehr-software">
              Electronic Health Records (EHR) Software
            </ProductLink>{" "}
            page explains how we approach interoperable health records.
          </p>
          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            Built to Scale
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            We plan for growth from the start: modular architecture so features
            can be added without rewrites, cloud infrastructure that can scale
            with usage, database design that handles growing patient histories,
            and APIs that let you add a patient mobile app or portal later.
          </p>
        </Section>

        {/* Process */}
        <Section
          id="process"
          eyebrow="Delivery"
          title="Clinic Management Software Development Process"
        >
          <ol className="relative mt-2 space-y-4 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:w-px before:bg-border md:space-y-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5">
                <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-2xl border border-border bg-white p-5">
                  <h3 className="font-semibold">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.text}
                  </p>
                  <p className="mt-3 inline-flex rounded-lg bg-secondary px-3 py-1.5 text-xs leading-5 text-foreground">
                    <span className="mr-1 font-semibold">You receive:</span>{" "}
                    {step.deliverable}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Custom vs ready-made */}
        <Section
          id="comparison"
          eyebrow="Comparison"
          title="Custom vs Ready-Made Clinic Management Software"
        >
          <CompareTable
            caption="Custom vs ready-made clinic management software comparison"
            headers={[
              "Factor",
              "Custom clinic management software",
              "Ready-made (off-the-shelf) software",
            ]}
            rows={customVsReadyRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">
              Our honest view:{" "}
            </span>
            If a ready-made product already fits your workflow, it may be the
            right choice. Custom development is worth considering when you have
            specific workflows, integration needs, multiple branches or
            long-term plans that standard software can&apos;t support.
          </p>
        </Section>

        {/* Cost */}
        <Section
          id="cost"
          eyebrow="Pricing"
          title="How Much Does Clinic Management Software Cost?"
        >
          <Prose>
            <p>
              There&apos;s no single price for custom clinic management
              software, because two clinics rarely need the same system. Cost
              depends mainly on these factors:
            </p>
          </Prose>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {costFactors.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6 text-muted-foreground"
              >
                <span className="font-semibold text-foreground">
                  {item.title}:
                </span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <CtaBand
            title="Get a tailored estimate."
            text="Share your requirements, and we'll provide a scoped estimate with a clear breakdown of modules, timeline and costs before any development starts."
            cta="Request a Clinic Software Estimate"
          />
        </Section>

        {/* Why ClickMasters */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose ClickMasters?"
        >
          <Prose>
            <p>
              ClickMasters is a remote-first software development company that
              builds web, mobile, AI, SaaS and cloud solutions for startups and
              growing businesses, including healthcare organizations. We work
              with clients by video and phone, and every project starts with a
              clear scope, timeline and quote.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyClickMasters.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <h3 className="font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Conversion */}
        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to Build Your Clinic Management System?
              </h2>
              <p className="mt-4 text-base leading-7 text-primary-foreground/80">
                Tell us how your clinic works today and where it&apos;s getting
                stuck. We&apos;ll help you work out what your software needs to
                do, and what it doesn&apos;t.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary"
              >
                Discuss Your Clinic Management Software Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-6 flex flex-col gap-2 text-sm text-primary-foreground/80 sm:flex-row sm:flex-wrap sm:gap-6">
                <a
                  href="mailto:sales@clickmasterssoftwaredevelopmentcompany.com"
                  className="inline-flex items-center gap-2 break-all hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  sales@clickmasterssoftwaredevelopmentcompany.com
                </a>
                <a
                  href="tel:+13252024074"
                  className="inline-flex items-center gap-2 hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  +1 325 202 4074
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <p className="text-sm font-semibold">
                In your consultation, we&apos;ll cover:
              </p>
              <ul className="mt-4 space-y-4">
                {consultationChecklist.map(([title, text]) => (
                  <li key={title} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5eead4] text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-primary-foreground/80">
                      <span className="font-semibold text-primary-foreground">
                        {title}:
                      </span>{" "}
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
              Frequently Asked Questions About Clinic Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {clinicFaqs.map((faq, index) => (
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
