import { shortKey } from "@/lib/short-key";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  Code2,
  FileCheck2,
  Lock,
  ShieldCheck,
  UserRoundCheck,
  Wallet,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass, ProductLink } from "./clinic-management-page";
import {
  adminSafeguards,
  arItems,
  authHelps,
  benefits,
  BILLING_PATH,
  billingDescription,
  billingFaqs,
  billingImages,
  billingTitle,
  buildAround,
  challengeRows,
  claimSteps,
  cloudRows,
  coreJobs,
  customReasons,
  eligibilitySteps,
  featureGroups,
  fixDenials,
  implementationSteps,
  integrationRows,
  organizationRows,
  postingItems,
  preventionRows,
  PRODUCT_NAME,
  rcmCapabilities,
  regulationRows,
  stageRows,
  systemsRows,
  technicalSafeguards,
  whyClickmasters,
  automationItems,
} from "./billing-data";

export { BILLING_PATH, billingDescription, billingTitle };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Code2,
  FileCheck2,
  UserRoundCheck,
  Wallet,
};

const ACCENT = "#c2410c";
const INDUSTRY_SLUG = "healthcare-medical-software";

export function billingSchema() {
  const url = pageUrl(BILLING_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: billingTitle,
        description: billingDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(billingImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Medical Billing Software Development",
        serviceType: "Custom Medical Billing Software Development",
        provider: org,
        areaServed: { "@type": "Country", name: "United States" },
        url,
        image: pageUrl(billingImages.dashboard.src),
        description:
          "Custom medical billing and RCM software development for US practices, hospitals and billing companies, covering eligibility, claim scrubbing, X12 837/835 EDI, denial management, A/R and reporting.",
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
        mainEntity: billingFaqs.map((faq) => ({
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
  { href: "#what-is-billing", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#billing-features", label: "Features" },
  { href: "#organizations", label: "Organizations" },
  { href: "#claims-processing", label: "Claims" },
  { href: "#rcm", label: "RCM" },
  { href: "#denials", label: "Denials" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#payment-posting", label: "Payments & A/R" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#1c1917] shadow-xl shadow-orange-950/10 ring-1 ring-black/5">
      <div
        className="cm-mock-bar"
        aria-hidden
      >
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> billing.example / concept
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
        className="block h-auto w-full bg-[#f7f6f4]"
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
    ? "bg-white text-[#1c1917]"
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
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#fed7aa] bg-[#fff7ed] p-6 md:flex-row md:items-center">
      <p className="max-w-2xl text-base font-semibold text-[#7c2d12]">
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

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter(
      (item) => productPath(INDUSTRY_SLUG, item.slug) !== BILLING_PATH,
    ) ?? [];

export default function BillingPage() {
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
                Custom billing & RCM software
              </p>
              <h1 className="cm-h1">
                {PRODUCT_NAME}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
                <p>
                  Every claim a US healthcare provider sends has to be right in
                  several ways at once: the right patient, the right payer, the
                  right diagnosis and procedure codes, the right modifiers, the
                  right format and the right deadline. If any one of these is
                  wrong, payment is delayed, reduced or denied. Work that should
                  take minutes then turns into weeks of follow-up.
                </p>
                <p>
                  Good billing software organizes that work. It checks
                  coverage before the visit, turns documented care into clean
                  claims, sends them electronically, tracks them through
                  adjudication, posts payments, and shows exactly which dollars
                  are still outstanding and why.
                </p>
                <p>
                  Clickmasters designs and builds US healthcare medical billing
                  software for practices, clinics, hospitals and billing
                  companies. This is custom medical billing software in USA
                  whose workflows don&apos;t fit an off-the-shelf system. We
                  scope the product, the timeline and the quote before
                  development starts.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink>Build Your Custom Medical Billing Software</CtaLink>
                <CtaLink outline>Get in touch</CtaLink>
              </div>
            </div>
            <AppFigure
              image={billingImages.dashboard}
              caption="Billing dashboard: claims status, A/R aging, top denial reasons and work queues"
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
          id="what-is-billing"
          eyebrow="Definition"
          title="What Is Medical Billing Software?"
        >
          <Prose>
            <p>
              Medical billing software is the medical billing management system
              a provider uses for claims and payments. This medical billing
              computer software covers everything from capturing charges for
              services provided to collecting the final dollar from the insurer
              and the patient.
            </p>
          </Prose>
          <div className="mt-8 rounded-3xl border border-[#fed7aa] bg-[#fff7ed] p-6 md:p-8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              At its core, a medical billing system:
            </p>
            <CheckList
              items={coreJobs}
              className="mt-4 gap-x-8 md:grid-cols-2"
            />
          </div>

          <H3 className="mt-14">
            How Billing Software Differs From Related Healthcare Systems
          </H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Buyers often see these terms used as if they mean the same thing.
            They describe different jobs.
          </p>
          <CompareTable
            caption="Billing software compared with related healthcare systems"
            headers={[
              "System",
              "Main job",
              "Typical users",
              "How it connects to billing",
            ]}
            rows={systemsRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            In many US practices, billing is a module inside{" "}
            <ProductLink slug="medical-practice-management-software">
              medical practice management software
            </ProductLink>
            , which handles scheduling and front-office work. Medical billing
            practice management software combines those jobs in one product.
            Other groups keep practice management billing software at the front
            desk and a dedicated claims platform behind it. Medical office
            billing software and medical billing scheduling software cover
            appointments, eligibility and the charges that follow, so staff are
            not re-keying the same patient. Whichever setup a practice chooses, it needs one shared patient,
            one insurance record and one set of charges. Organizations with higher claim
            volume, multiple specialties or outsourced billing operations often
            need a dedicated billing or RCM platform with deeper claim, denial
            and A/R tools.
          </p>
        </Section>

        {/* How it works */}
        <Section
          id="how-it-works"
          eyebrow="The revenue cycle"
          title="How Does Medical Billing Software Work?"
        >
          <DiagramFigure
            image={billingImages.cycle}
            caption="Twelve stages grouped into front end, mid cycle and back end"
          />
          <CompareTable
            caption="Stages of the medical billing process with key data and transactions"
            headers={["Stage", "What happens", "Key data / transaction"]}
            rows={stageRows}
          />
        </Section>

        {/* Features */}
        <Section
          id="billing-features"
          eyebrow="21 capabilities"
          title="Key Features of Medical Billing Software"
        >
          <div className="space-y-14">
            {featureGroups.map((group) => {
              const Icon = ICONS[group.icon] ?? ClipboardList;
              return (
                <div key={shortKey(group.title)}>
                  <div className="flex items-center gap-3 border-b border-border pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffedd5]">
                      <Icon className="h-5 w-5 text-[#c2410c]" aria-hidden />
                    </span>
                    <H3>{group.title}</H3>
                  </div>
                  <ul
                    className={`mt-6 grid gap-4 md:grid-cols-2 ${group.features.length % 3 === 0 ? "lg:grid-cols-3" : group.features.length === 5 ? "lg:grid-cols-6" : ""}`}
                  >
                    {group.features.map(([title, text], index) => (
                      <li
                        key={shortKey(title)}
                        className={`rounded-2xl border border-border bg-white p-5 ${group.features.length === 5 ? (index < 3 ? "lg:col-span-2" : "lg:col-span-3") : ""}`}
                      >
                        <p className="cx-fontse-leadin-b">{title}</p>
                        <p className="cm-p2">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {group.visual === "scrub" ? (
                    <div className="mt-8">
                      <AppFigure
                        image={billingImages.scrub}
                        caption="Claim scrubber: NCCI modifier, missing diagnosis pointer and missing authorization caught before the 837 goes out"
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <CtaStrip
            title="Want these capabilities built around your payers, specialties and work queues?"
            cta="Request a Billing Platform Consultation"
          />
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Medical Billing Software"
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
          title="Medical Billing Software for Different Healthcare Organizations"
        >
          <CompareTable
            caption="What a billing system must do well by organization type"
            headers={["Organization", "What the billing system must do well"]}
            rows={organizationRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            Hospital billing is the most different from the others. It runs on
            institutional claims, revenue codes and a chargemaster that has to
            match every department, from the ED to the lab and the pharmacy. In
            hospitals, billing is usually one financial module within a broader{" "}
            <ProductLink slug="hospital-management-system">
              hospital management system
            </ProductLink>{" "}
            that also runs admissions, wards, pharmacy and lab operations. The
            billing layer still needs its own claim, denial and A/R depth.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Smaller groups usually want medical billing software for practice
            workflows: charge entry, clean claims and statements without a large
            billing department. Specialty rules change the product. Medical
            billing software for behavioral health has to follow authorizations,
            visit limits and daily census. Medical billing software for mental
            health adds session-based coding and recurring treatment plans. The
            best medical billing software for mental health follows those rules
            instead of a generic claim screen. DME medical billing software
            handles HCPCS codes, rentals, modifiers and certificates of medical
            necessity. Billing companies that run residential or outpatient
            programs also need medical billing software for behavioral health
            census RCM, so census, authorizations and claims stay in one revenue
            cycle.
          </p>
        </Section>

        {/* Claims processing */}
        <Section
          id="claims-processing"
          eyebrow="Claim lifecycle"
          title="Medical Claims Processing Workflow"
        >
          <Prose>
            <p>
              Medical claims processing software follows each claim through a
              predictable path, and each step has its own failure points:
            </p>
          </Prose>
          <TitledCards
            items={claimSteps}
            numbered
            className="mt-8 md:grid-cols-2 lg:grid-cols-4"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5 text-sm leading-7 text-[#78350f]">
              <p className="font-semibold">Rejection</p>
              <p className="mt-1">
                Rejections and denials are not the same thing. A rejection is a
                claim the clearinghouse or payer refused to accept for
                processing, usually because of format or data errors. It can be
                fixed and resubmitted.
              </p>
            </div>
            <div className="rounded-2xl border border-[#fecdd3] bg-[#fff1f2] p-5 text-sm leading-7 text-[#881337]">
              <p className="font-semibold">Denial</p>
              <p className="mt-1">
                A denial is a processed claim the payer decided not to pay. It
                needs correction or a formal appeal. Good software tracks them
                separately.
              </p>
            </div>
          </div>
        </Section>

        {/* Automation */}
        <Section
          id="automation"
          eyebrow="Rules, not judgment"
          title="Medical Billing and Coding Automation"
        >
          <Prose>
            <p>
              Medical billing automation software should remove repetitive,
              rules-based work. Medical billing and coding software online does
              the same job for teams that code and submit from one system. It
              should not remove professional judgment. Useful automation
              includes:
            </p>
          </Prose>
          <CheckList items={automationItems} className="mt-6 md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            The quality of codes depends on the quality of the clinical
            documentation behind them. When the encounter is documented in
            structured{" "}
            <ProductLink slug="electronic-medical-records-emr-software">
              Electronic Medical Records (EMR) software
            </ProductLink>
            , diagnoses, procedures and supporting details can flow straight
            into charge review. That reduces missed charges and avoids coding
            from incomplete notes.
          </p>
          <Callout>
            <span className="cx-fontse-textfo-1">Important: </span>
            Medical billing coding software supports qualified professionals. It
            does not replace them. Certified coders and experienced billers
            remain responsible for code selection, documentation review, payer
            appeals and compliance decisions.
          </Callout>
        </Section>

        {/* RCM */}
        <Section
          id="rcm"
          eyebrow="The full financial view"
          title="Revenue Cycle Management (RCM) Software Capabilities"
        >
          <Prose>
            <p>
              RCM medical billing software extends billing into a complete
              financial view of the organization, from registration through
              final collection:
            </p>
          </Prose>
          <TitledCards
            items={rcmCapabilities}
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
          <div className="mt-8">
            <AppFigure
              image={billingImages.rcm}
              caption="RCM dashboard: days in A/R, clean claim rate, collections by payer, underpayments and KPI definitions (placeholder data)"
            />
          </div>
          <p className="cx-mt6-maxw3x-1c">
            These metrics are useful only when the definitions are consistent. A
            custom RCM platform lets you define and document exactly how each
            KPI is calculated.
          </p>
          <CtaStrip
            title="Need one financial view across every location, specialty and payer?"
            cta="Develop Your Custom RCM Platform"
          />
        </Section>

        {/* Denials */}
        <Section
          id="denials"
          eyebrow="Fix and prevent"
          title="Medical Claims Denial Management and Prevention"
        >
          <Prose>
            <p>
              Medical denial management software should work on two levels:
              fixing denials that have already happened and preventing the next
              ones.
            </p>
          </Prose>
          <div className="mt-8">
            <AppFigure
              image={billingImages.denials}
              caption="Denial work queue grouped by CARC reason, with appeal deadlines, owners and outcomes"
            />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="text-lg font-semibold">Fixing denials:</p>
              <CheckList items={fixDenials} className="mt-4" />
            </div>
            <div>
              <p className="text-lg font-semibold">Preventing denials:</p>
              <CompareTable
                caption="Common denial categories and the prevention built into the software"
                headers={[
                  "Common denial category",
                  "Prevention built into the software",
                ]}
                rows={preventionRows}
              />
            </div>
          </div>
          <p className="cx-mt6-maxw3x-1c">
            Denial trends then feed back into scrubbing rules, so the same error
            is less likely to repeat.
          </p>
        </Section>

        {/* Eligibility */}
        <Section
          id="eligibility"
          eyebrow="Before the visit"
          title="Insurance Eligibility and Prior Authorization Workflows"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="cx-textba-leadin-1n">
                Eligibility verification should happen before the patient
                arrives. A good workflow:
              </p>
              <CheckList items={eligibilitySteps} numbered className="mt-5" />
            </div>
            <div>
              <p className="cx-textba-leadin-1n">
                Prior authorization is often the most manual part of the revenue
                cycle. Software helps by:
              </p>
              <CheckList items={authHelps} className="mt-5" />
            </div>
          </div>
          <div className="mt-10">
            <AppFigure
              image={billingImages.eligibility}
              caption="Tomorrow's schedule with 270/271 results, a patient benefit summary and prior authorization tracking"
            />
          </div>
          <Callout>
            Federal policy is pushing prior authorization toward electronic,
            API-based exchange. The CMS Interoperability and Prior Authorization
            Final Rule requires certain government-program payers to support
            FHIR-based prior authorization APIs, with requirements phasing in
            through 2026 and 2027. A custom platform can be designed to work
            with these APIs as payers make them available, while keeping portal,
            fax and X12 278 workflows for payers that haven&apos;t.
          </Callout>
        </Section>

        {/* Payment posting */}
        <Section
          id="payment-posting"
          eyebrow="Money in, balances right"
          title="Payment Posting and Accounts Receivable Management"
        >
          <Prose>
            <p>
              Payment posting turns money received into an accurate account
              balance:
            </p>
          </Prose>
          <TitledCards
            items={postingItems}
            className="mt-8 md:grid-cols-2 lg:grid-cols-5"
          />
          <div className="mt-8">
            <AppFigure
              image={billingImages.posting}
              caption="835 ERA lines matched to claims, EFT reassociation, a denial routed to work and an overpayment exception"
            />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="text-lg font-semibold">
              Accounts receivable management decides which claims get worked
              first:
            </p>
            <CheckList items={arItems} className="mt-4" />
          </div>
        </Section>

        {/* Integrations */}
        <Section
          id="integrations"
          eyebrow="Connected billing"
          title="Billing Integrations With EHR, Clearinghouse and Payment Systems"
        >
          <DiagramFigure
            image={billingImages.integrations}
            caption="The billing and RCM core connected to clinical, payer, payment and finance systems"
          />
          <CompareTable
            caption="Billing integrations, purpose and standards"
            headers={["Integration", "Purpose", "Typical standard / method"]}
            rows={integrationRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            The most important integration is usually with the clinical system.
            Medical billing EHR software needs an accurate flow of encounters,
            diagnoses and procedures from the provider&apos;s{" "}
            <ProductLink slug="electronic-health-records-ehr-software">
              Electronic Health Records (EHR) software
            </ProductLink>
            , usually through HL7 DFT charge messages or FHIR resources. Medical
            billing software EMR systems do the same job for a single practice.
            Medical billing clearinghouse software then sends the 837 and brings
            acknowledgments and 835 remittances back. In return, the billing
            platform sends claim and payment status back, so clinical and
            front-office staff can see the financial picture without logging
            into another system.
          </p>
        </Section>

        {/* Security */}
        <Section
          id="security"
          eyebrow="Protected health information"
          title="Medical Billing Software Security and HIPAA Considerations"
        >
          <Prose>
            <p>
              Billing data contains protected health information (PHI):
              diagnoses, procedures, insurance identifiers and payment history.
              HIPAA compliant medical billing software is designed around the
              safeguards those rules expect: access limits, encryption and audit
              trails. US billing systems also sit at the center of HIPAA&apos;s
              Administrative Simplification rules. Compliance still depends on
              how the organization uses the system.
            </p>
          </Prose>
          <CompareTable
            caption="Regulations and what they mean for billing software"
            headers={["Requirement", "What it means for billing software"]}
            rows={regulationRows}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="font-semibold">
                Technical safeguards we design in:
              </p>
              <CheckList items={technicalSafeguards} className="mt-4" />
            </div>
            <div>
              <p className="font-semibold">
                Administrative and operational safeguards the software supports:
              </p>
              <CheckList items={adminSafeguards} className="mt-4" />
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                <span className="cx-fontse-textfo-1">
                  Business associate considerations.{" "}
                </span>
                Clearinghouses, hosting providers, billing companies and
                software developers that handle PHI on a provider&apos;s behalf
                are typically business associates and need Business Associate
                Agreements (BAAs).
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#1c1917] p-6 text-sm leading-7 text-white/80 md:p-8">
            Clickmasters does not hold, and cannot hold, a &quot;HIPAA
            certification&quot;: HHS does not certify software or vendors.
            Compliance depends on your organization, workflows, contracts and
            implementation. We build software designed to support your
            compliance program. It does not replace your HIPAA risk analysis,
            policies, training or legal guidance.
          </div>
        </Section>

        {/* Cloud */}
        <Section
          id="cloud-vs-on-premise"
          eyebrow="Deployment"
          title="Cloud-Based vs. On-Premise Billing Systems"
        >
          <CompareTable
            caption="Cloud-based compared with on-premise billing software"
            headers={[
              "Factor",
              "Cloud-based",
              "On-premise",
            ]}
            rows={cloudRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            For most US practices and billing companies, healthcare billing
            software systems run in the cloud. Medical billing software systems
            on HIPAA-eligible infrastructure offer the best balance of cost,
            access and scalability.
          </p>
        </Section>

        {/* Custom */}
        <Section
          id="custom-development"
          eyebrow="Build for your revenue cycle"
          title="Custom Medical Billing Software Development"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="cx-textba-leadin-1n">
                Off-the-shelf billing products work well for standard workflows.
                Custom development makes sense when:
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
                , we build medical billing and RCM platforms around:
              </p>
              <ul className="mt-5 space-y-3">
                {buildAround.map((item) => (
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
            A custom build isn&apos;t the right answer for every organization.
            Buyers comparing the top 10 medical billing software products, or
            the top medical billing software in USA, usually need the system best matched to their payers and
            specialties. The
            best medical billing software in USA for a given group is the one
            that follows that group&apos;s claim types. If an existing product
            fits, we&apos;ll say so, and we can still build the integrations,
            dashboards or automation around it.
          </p>
          <CtaStrip
            title="Running a billing company, multi-specialty group or HealthTech product that off-the-shelf tools don't fit?"
            cta="Start Your Custom Billing Platform"
          />
        </Section>

        {/* Implementation */}
        <Section
          id="implementation"
          eyebrow="Delivery"
          title="Billing Platform Implementation Process"
        >
          <ol className="grid gap-4 md:grid-cols-3">
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
            Medical billing software requirements come out of discovery:
            modules, payers, transactions, roles and integrations. We give
            timelines and quotes once that scope is clear.
          </p>
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="Problems we solve"
          title="Common Medical Billing Challenges and Their Solutions"
        >
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Medical billing software solutions start from the problem in front
            of the billing team, not from a generic feature list.
          </p>
          <CompareTable
            caption="Common medical billing challenges and their solutions"
            headers={["Challenge", "Solution"]}
            rows={challengeRows}
          />
        </Section>

        {/* Why */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters for Custom Billing Software Development?"
        >
          <TitledCards
            items={whyClickmasters}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Final CTA */}
        <section className="border-t border-border bg-[#1c1917] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="cm-h2b">
                Discuss Your Healthcare Software Project
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re a growing practice tired of chasing denials,
                a billing company outgrowing its tools, or a HealthTech team
                building billing into your product, the first step is the same:
                a clear look at your current revenue cycle and where money is
                being lost.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us your organization type, specialties, claim volume,
                current systems and biggest billing problems. We&apos;ll come
                back with a practical recommendation (build, extend or buy), the
                modules and integrations involved, and the next step. You can
                also ask for a medical billing software demo of eligibility,
                claim scrubbing, ERA posting or denial work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink light>Talk about {PRODUCT_NAME}</CtaLink>
                <CtaLink light outline>
                  Request a Billing Software Consultation
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
                  "Your organization type and specialties",
                  "Your claim volume",
                  "The systems you use today",
                  "Your biggest billing problems",
                ].map((item) => (
                  <li key={shortKey(item)} className="cx-flex-gap3-24">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdba74] text-[#1c1917]">
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
              Frequently Asked Questions About Medical Billing Software
            </h2>
            <div className="cm-list">
              {billingFaqs.map((faq, index) => (
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
