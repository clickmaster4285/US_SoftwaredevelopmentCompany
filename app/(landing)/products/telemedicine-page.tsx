import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardList,
  Lock,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Video,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass, ProductLink } from "./clinic-management-page";
import {
  benefits,
  buildItems,
  challengeRows,
  cloudRows,
  customReasons,
  ehrItems,
  eRxItems,
  featureGroups,
  hipaaRows,
  implementationSteps,
  integrationRows,
  organizationRows,
  platformParts,
  portalItems,
  PRODUCT_NAME,
  regulatoryItems,
  relatedRows,
  rpmRows,
  safeguards,
  schedulingRules,
  TELE_PATH,
  teleDescription,
  teleFaqs,
  teleImages,
  teleTitle,
  typeRows,
  videoArchitecture,
  videoClinical,
  visitSteps,
  whyClickmasters,
} from "./telemedicine-data";

export { TELE_PATH, teleDescription, teleTitle };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Smartphone,
  Stethoscope,
  Video,
};

const ACCENT = "#2563eb";
const INDUSTRY_SLUG = "healthcare-medical-software";

export function teleSchema() {
  const url = pageUrl(TELE_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: teleTitle,
        description: teleDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(teleImages.consult.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Telemedicine Software Development",
        serviceType: "Custom Telemedicine Software Development",
        provider: org,
        areaServed: { "@type": "Country", name: "United States" },
        url,
        image: pageUrl(teleImages.consult.src),
        description:
          "Custom telemedicine software development for US healthcare organizations, covering secure video visits, virtual waiting rooms, e-prescribing, remote patient monitoring and EHR integration.",
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
        mainEntity: teleFaqs.map((faq) => ({
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
  { href: "#what-is-telemedicine", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#telemedicine-features", label: "Features" },
  { href: "#types", label: "Types" },
  { href: "#organizations", label: "Organizations" },
  { href: "#video", label: "Video" },
  { href: "#scheduling", label: "Scheduling" },
  { href: "#rpm", label: "RPM" },
  { href: "#e-prescribing", label: "e-Prescribing & EHR" },
  { href: "#integrations", label: "Integrations" },
  { href: "#security", label: "HIPAA & regulation" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#0f1b3d] shadow-xl shadow-blue-950/10 ring-1 ring-black/5">
      <div
        className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> telehealth.example / concept
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
        className="block h-auto w-full bg-[#f4f6fb]"
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
    <figure className="overflow-hidden rounded-3xl border border-border bg-[#eff6ff] shadow-xl shadow-blue-950/10">
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
    ? "bg-white text-[#0f1b3d]"
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
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-6 md:flex-row md:items-center">
      <p className="max-w-2xl text-base font-semibold text-[#1e3a8a]">
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
  const fiveUp = items.length === 5 && className.includes("lg:grid-cols-3");
  return (
    <ul
      className={`grid gap-4 ${fiveUp ? className.replace("lg:grid-cols-3", "lg:grid-cols-6") : className}`}
    >
      {items.map(([title, text], index) => (
        <li
          key={title}
          className={`rounded-2xl border border-border bg-white p-5 ${fiveUp ? (index < 3 ? "lg:col-span-2" : "lg:col-span-3") : ""}`}
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

function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-8 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
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
      (item) => productPath(INDUSTRY_SLUG, item.slug) !== TELE_PATH,
    ) ?? [];

export default function TelemedicinePage() {
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
                Custom telehealth development
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                {PRODUCT_NAME}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
                <p>
                  Patients now expect to see a clinician without a waiting room,
                  a commute or a week-long wait for an appointment. Healthcare
                  organizations want a telemedicine platform for rural areas,
                  to cut avoidable ER visits and follow chronic conditions
                  between visits. Telemedicine software makes both possible. It
                  connects patients and providers through secure video, audio
                  and messaging, moves intake and scheduling online, and brings
                  home health data into the care team&apos;s workflow.
                </p>
                <p>
                  A good telemedicine platform is more than a video call. It
                  verifies who the patient is and where they are, collects
                  consent and intake before the visit, puts the patient in a
                  virtual waiting room, gives the provider the chart and the
                  camera on one screen, sends the prescription, documents the
                  visit and bills it correctly.
                </p>
                <p>
                  Clickmasters designs and builds custom telemedicine software
                  and telehealth software solutions for US hospitals, practices,
                  clinics, mental health providers, healthcare networks and
                  telehealth startups. We scope the product, the timeline and
                  the quote before development starts.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink>Build Your Custom Telemedicine Software</CtaLink>
                <CtaLink outline>Get in touch</CtaLink>
              </div>
            </div>
            <AppFigure
              image={teleImages.consult}
              caption="Video visit with the patient chart, license check, RPM trend and SOAP note on one screen"
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
          id="what-is-telemedicine"
          eyebrow="Definition"
          title="What Is Telemedicine Software?"
        >
          <Prose>
            <p>
              Telemedicine software is a platform that lets licensed clinicians
              diagnose, treat and follow up with patients remotely, using
              real-time video or audio, asynchronous (store-and-forward)
              exchange, and connected devices.
            </p>
          </Prose>
          <div className="mt-6 rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-6 md:p-8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              A complete telemedicine platform usually includes:
            </p>
            <CheckList
              items={platformParts}
              className="mt-4 gap-x-8 md:grid-cols-2"
            />
          </div>

          <H3 className="mt-14">
            Telemedicine vs. Related Healthcare Software
          </H3>
          <CompareTable
            caption="Telemedicine software compared with related healthcare software"
            headers={[
              "System",
              "Primary job",
              "How it relates to telemedicine",
            ]}
            rows={relatedRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Telemedicine works best as one layer in a connected system. Booking,
            demographics, reminders and follow-ups usually belong in{" "}
            <ProductLink slug="patient-management-software">
              patient management software
            </ProductLink>
            . The telemedicine platform takes over when the visit becomes
            virtual, then hands documentation and billing to the clinical and
            financial systems.
          </p>
        </Section>

        {/* How it works */}
        <Section
          id="how-it-works"
          eyebrow="A virtual visit"
          title="How Does Telemedicine Software Work?"
        >
          <DiagramFigure
            image={teleImages.flow}
            caption="Nine steps from booking to billing, with identity, location and consent checked before the video starts"
          />
          <TitledCards
            items={visitSteps}
            numbered
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
        </Section>

        {/* Features */}
        <Section
          id="telemedicine-features"
          eyebrow="21 capabilities"
          title="Key Features of Telemedicine Software"
        >
          <div className="space-y-14">
            {featureGroups.map((group) => {
              const Icon = ICONS[group.icon] ?? ClipboardList;
              const n = group.features.length;
              return (
                <div key={group.title}>
                  <div className="flex items-center gap-3 border-b border-border pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dbeafe]">
                      <Icon className="h-5 w-5 text-[#2563eb]" aria-hidden />
                    </span>
                    <H3>{group.title}</H3>
                  </div>
                  <ul className={`mt-6 grid gap-4 ${gridFor(n)}`}>
                    {group.features.map(([title, text], index) => (
                      <li
                        key={title}
                        className={`rounded-2xl border border-border bg-white p-5 ${spanFor(n, index)}`}
                      >
                        <p className="font-semibold leading-snug">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {group.visual === "provider" ? (
                    <div className="mt-8">
                      <AppFigure
                        image={teleImages.provider}
                        caption="Provider dashboard: virtual waiting room with device checks, today's schedule, unsigned notes and RPM alerts"
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <CtaStrip
            title="Want these capabilities built around your providers, states and care model?"
            cta="Request a Telemedicine Development Consultation"
          />
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Telemedicine Software"
        >
          <TitledCards
            items={benefits}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Types */}
        <Section
          id="types"
          eyebrow="Care models"
          title="Types of Telemedicine Solutions"
        >
          <CompareTable
            caption="Types of telemedicine solutions, how they work and typical uses"
            headers={["Type", "How it works", "Typical use"]}
            rows={typeRows}
          />
        </Section>

        {/* Organizations */}
        <Section
          id="organizations"
          eyebrow="Who it is for"
          title="Telemedicine Software for Different Healthcare Organizations"
        >
          <CompareTable
            caption="What a telemedicine platform must do well by organization type"
            headers={["Organization", "What the platform must do well"]}
            rows={organizationRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Mental health groups need a telemedicine platform for mental health:
            recurring sessions, group rooms and stricter handling of sensitive
            records. Telehealth software for therapists follows the same
            pattern, with session notes and a waiting room that does not expose
            one client to another.
          </p>
        </Section>

        {/* Video */}
        <Section
          id="video"
          eyebrow="Video that works"
          title="Video Consultation and Virtual Doctor Visits"
        >
          <Prose>
            <p>
              Video quality decides whether patients come back. Video
              consultation software needs more than a meeting app.
            </p>
          </Prose>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-lg font-semibold">
                Video architecture essentials:
              </p>
              <CheckList items={videoArchitecture} className="mt-4" />
            </div>
            <div>
              <p className="text-lg font-semibold">
                Clinical features that matter:
              </p>
              <CheckList items={videoClinical} className="mt-4" />
            </div>
          </div>
        </Section>

        {/* Portal */}
        <Section
          id="portal"
          eyebrow="The portal is the clinic"
          title="Patient Portal and Virtual Healthcare Experience"
        >
          <Prose>
            <p>
              For a virtual-first patient, the portal is the clinic. A patient
              portal for telemedicine should make every step easy:
            </p>
          </Prose>
          <TitledCards
            items={portalItems}
            className="mt-8 sm:grid-cols-2 lg:grid-cols-4"
          />
          <div className="mt-10">
            <PhotoFigure
              image={teleImages.join}
              caption="From a text-message link to a pre-call check and the video visit, with no download needed"
            />
          </div>
        </Section>

        {/* Scheduling */}
        <Section
          id="scheduling"
          eyebrow="Rules in-person scheduling doesn't have"
          title="Telemedicine Appointment Scheduling and Management"
        >
          <Prose>
            <p>
              Telehealth appointment software adds rules that in-person
              scheduling doesn&apos;t have:
            </p>
          </Prose>
          <TitledCards
            items={schedulingRules}
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
          <div className="mt-10">
            <AppFigure
              image={teleImages.scheduling}
              caption="License-aware matching by patient state, a provider license matrix and the on-demand queue"
            />
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Scheduling data also shapes reimbursement. Visit type, patient
            location, audio-only vs video, and payer all affect how the visit is
            coded and billed. Connecting the scheduler to{" "}
            <ProductLink slug="medical-billing-software">
              medical billing software
            </ProductLink>{" "}
            means telehealth place-of-service codes and modifiers are applied
            consistently, instead of being fixed by hand after a claim is
            denied.
          </p>
          <CtaStrip
            title="Planning virtual visits across several states, payers or service lines?"
            cta="Discuss Your Telehealth Software Project"
          />
        </Section>

        {/* RPM */}
        <Section
          id="rpm"
          eyebrow="Care between visits"
          title="Remote Patient Monitoring and Connected Healthcare"
        >
          <Prose>
            <p>
              Remote patient monitoring software extends care beyond the
              scheduled visit:
            </p>
          </Prose>
          <CompareTable
            caption="Remote patient monitoring components and what they do"
            headers={["Component", "What it does"]}
            rows={rpmRows}
          />
          <div className="mt-10">
            <AppFigure
              image={teleImages.rpm}
              caption="RPM review queue with blood pressure and glucose readings flagged against patient thresholds (placeholder data)"
            />
          </div>
          <Callout>
            <span className="font-semibold text-foreground">
              Note on billing:{" "}
            </span>
            Medicare and many payers reimburse RPM and chronic care management
            through specific CPT codes that come with device, data-day and time
            requirements. CMS updates those requirements in its annual Physician
            Fee Schedule. The software should capture the data needed to support
            billing, and the organization&apos;s billing team should confirm
            current rules each year.
          </Callout>
        </Section>

        {/* eRx + EHR */}
        <Section
          id="e-prescribing"
          eyebrow="Prescriptions and the chart"
          title="Telemedicine E-Prescribing and EHR Integration"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-lg font-semibold">E-prescribing:</p>
              <CheckList items={eRxItems} className="mt-4" />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Telemedicine prescriptions end up at the pharmacy counter. When
                a pharmacy operator runs its own{" "}
                <ProductLink slug="pharmacy-management-system">
                  pharmacy management system
                </ProductLink>
                , for example in a virtual-care company with mail-order
                fulfillment, the telemedicine platform can integrate directly
                for prescription status, refills and delivery updates.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">EHR/EMR integration:</p>
              <TitledCards items={ehrItems} className="mt-4" />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Telemedicine EHR software launches beside the shared chart and
                writes the visit back. Telemedicine EMR software does the same
                job inside one practice. Telehealth EMR software is the name
                many clinics use for that practice-level connection.
              </p>
            </div>
          </div>
        </Section>

        {/* Integrations */}
        <Section
          id="integrations"
          eyebrow="Connected virtual care"
          title="Telemedicine Software Integrations"
        >
          <DiagramFigure
            image={teleImages.integrations}
            caption="The telemedicine core connected to EHR, EMR, e-prescribing, pharmacy, billing, devices, payments and labs"
          />
          <CompareTable
            caption="Telemedicine software integrations, purpose and methods"
            headers={["Integration", "Purpose", "Typical method"]}
            rows={integrationRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            For hospitals and healthcare networks, the most important connection
            is usually to the enterprise{" "}
            <ProductLink slug="electronic-health-records-ehr-software">
              Electronic Health Records (EHR) software
            </ProductLink>
            . If the telemedicine workspace launches inside the EHR and writes
            structured notes back to the shared record, specialists, primary
            care and hospital teams all see the same virtual visit, and nobody
            has to re-key documentation or keep a separate telehealth chart.
          </p>
        </Section>

        {/* Security */}
        <Section
          id="security"
          eyebrow="Protected health information"
          title="Telemedicine Software Security and HIPAA Considerations"
        >
          <Prose>
            <p>
              A telemedicine platform handles protected health information
              (PHI): identities, symptoms, video sessions, documents,
              prescriptions and device data. HIPAA&apos;s requirements apply to
              the covered entities using it and to business associates handling
              PHI for them.
            </p>
          </Prose>
          <CompareTable
            caption="HIPAA requirements and their effect on telemedicine architecture"
            headers={["Requirement", "Effect on telemedicine architecture"]}
            rows={hipaaRows}
          />
          <p className="mt-10 font-semibold">
            Technical safeguards we design in:
          </p>
          <CheckList items={safeguards} className="mt-4 md:grid-cols-2" />
          <div className="mt-8 rounded-3xl bg-[#0f1b3d] p-6 text-sm leading-7 text-white/80 md:p-8">
            <span className="font-semibold text-white">
              What software alone cannot cover:{" "}
            </span>
            encryption and secure video do not make a platform &quot;HIPAA
            compliant&quot; by themselves. Your organization remains responsible
            for its risk analysis, policies, workforce training, vendor BAAs,
            device and physical safeguards (such as private spaces for providers
            working remotely) and incident response. Clickmasters does not hold
            HIPAA certification. HHS does not certify software or vendors.
          </div>

          <H3 className="mt-14">US Telehealth Regulatory Considerations</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Telehealth rules vary by state, payer, service type and profession,
            and they change often. Software can support these requirements, but
            it cannot guarantee legal compliance:
          </p>
          <TitledCards
            items={regulatoryItems}
            className="mt-6 md:grid-cols-2 lg:grid-cols-3"
          />
          <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-foreground">
            We build these rules into the platform as configurable policies.
            Your legal and compliance teams confirm the requirements for each
            state and service you offer.
          </p>
        </Section>

        {/* Cloud */}
        <Section
          id="cloud-vs-on-premise"
          eyebrow="Deployment"
          title="Cloud-Based vs. On-Premise Telemedicine Software"
        >
          <CompareTable
            caption="Cloud-based compared with on-premise telemedicine software"
            headers={[
              "Factor",
              "Cloud-Based Telemedicine Software",
              "On-Premise Telemedicine Software",
            ]}
            rows={cloudRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            For nearly all US organizations, cloud-based telemedicine software
            is the practical choice: telehealth is internet-facing by nature,
            and video demand rises and falls sharply.
          </p>
        </Section>

        {/* Custom */}
        <Section
          id="custom-development"
          eyebrow="Virtual care as your product"
          title="Custom Telemedicine Software Development"
        >
          <Prose>
            <p>
              Off-the-shelf telehealth tools work for basic video visits.
              Telehealth software companies and telehealth software vendors
              usually sell that general product. The best telemedicine software
              for a given organization is the one that matches its states,
              specialties and chart. Custom development makes sense when:
            </p>
          </Prose>
          <TitledCards
            items={customReasons}
            className="mt-6 md:grid-cols-2 lg:grid-cols-3"
          />
          <p className="mt-10 text-base leading-7 text-muted-foreground">
            Through our{" "}
            <Link
              href="/software-development/custom-software-development"
              className={linkClass}
            >
              custom software development services
            </Link>
            , we design and build:
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {buildItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-white px-5 py-3.5 text-sm leading-6 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base font-medium leading-7 text-foreground">
            If a commercial platform already fits your needs, we&apos;ll say so,
            and we can still build the integrations, apps or custom workflows
            around it.
          </p>
          <CtaStrip
            title="Building a virtual-first care model, multi-state network or specialty telehealth service?"
            cta="Develop Your Custom Virtual Healthcare Platform"
          />
        </Section>

        {/* Implementation */}
        <Section
          id="implementation"
          eyebrow="Delivery"
          title="Telemedicine Software Implementation Process"
        >
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            We provide timelines and quotes after discovery, once the scope is
            clear.
          </p>
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="Problems we solve"
          title="Common Telemedicine Challenges and Their Solutions"
        >
          <CompareTable
            caption="Common telemedicine challenges and their solutions"
            headers={["Challenge", "Solution"]}
            rows={challengeRows}
          />
        </Section>

        {/* Why */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters for Custom Telemedicine Software Development?"
        >
          <TitledCards
            items={whyClickmasters}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Final CTA */}
        <section className="border-t border-border bg-[#0f1b3d] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Discuss Your Telehealth Software Project
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re adding virtual visits to an established
                practice, launching hospital telehealth programs, or building a
                multi-state virtual care company, the first step is the same: a
                clear plan for your services, states, integrations and patient
                experience.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us your organization type, care model, states served,
                current systems and goals. We&apos;ll come back with a practical
                recommendation (build, extend or buy), the modules and
                integrations involved, and the next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink light>Talk about {PRODUCT_NAME}</CtaLink>
                <CtaLink light outline>
                  Request a Telemedicine Development Consultation
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
                  "Your organization type and care model",
                  "The states you serve",
                  "The systems you use today",
                  "Your goals for virtual care",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#93c5fd] text-[#0f1b3d]">
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
              Frequently Asked Questions About Telemedicine Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {teleFaqs.map((faq, index) => (
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
