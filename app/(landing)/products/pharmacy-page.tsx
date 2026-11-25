import { shortKey } from "@/lib/short-key";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CalendarClock,
  Check,
  ClipboardList,
  CreditCard,
  Database,
  FileClock,
  FileText,
  IdCard,
  Layers,
  ListChecks,
  Lock,
  RefreshCw,
  ScanBarcode,
  ShieldCheck,
  Store,
  Truck,
  UserCheck,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass, ProductLink } from "./clinic-management-page";
import {
  architecture,
  benefits,
  businessTypeRows,
  challengeRows,
  cloudRows,
  customReasons,
  dispensingPrinciples,
  features,
  implementationSteps,
  integrationRows,
  inventoryWorkflows,
  PHARMACY_PATH,
  pharmacyDescription,
  pharmacyFaqs,
  pharmacyImages,
  pharmacyTitle,
  pmsJobs,
  posNeeds,
  PRODUCT_NAME,
  rxSteps,
  securityControls,
  whyClickmasters,
  type PharmacyFeature,
} from "./pharmacy-data";

export { PHARMACY_PATH, pharmacyDescription, pharmacyTitle };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Boxes,
  CalendarClock,
  CreditCard,
  Database,
  FileClock,
  FileText,
  IdCard,
  Layers,
  ListChecks,
  RefreshCw,
  ScanBarcode,
  Store,
  Truck,
  UserCheck,
};

const ACCENT = "#059669";
const INDUSTRY_SLUG = "healthcare-medical-software";

export function pharmacySchema() {
  const url = pageUrl(PHARMACY_PATH);
  const org = { "@id": `${SITE_URL}/#organization` };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: pharmacyTitle,
        description: pharmacyDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(pharmacyImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Pharmacy Management System Development",
        serviceType: "Custom Pharmacy Management Software Development",
        provider: org,
        areaServed: { "@type": "Country", name: "United States" },
        url,
        image: pageUrl(pharmacyImages.dashboard.src),
        description:
          "Cloud-based pharmacy management system development for US pharmacies, covering prescription dispensing, medication management, inventory, POS, insurance billing, technician workflows and multi-location management.",
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
        mainEntity: pharmacyFaqs.map((faq) => ({
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
  { href: "#what-is-pms", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pharmacy-features", label: "Features" },
  { href: "#business-types", label: "Business types" },
  { href: "#pharmacy-platform", label: "Online platform" },
  { href: "#inventory", label: "Inventory" },
  { href: "#dispensing", label: "Dispensing" },
  { href: "#pos-billing", label: "POS & billing" },
  { href: "#integrations", label: "Integrations" },
  { href: "#security", label: "HIPAA & security" },
  { href: "#custom-development", label: "Custom development" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#06281d] shadow-xl shadow-emerald-950/10 ring-1 ring-black/5">
      <div
        className="cm-mock-bar"
        aria-hidden
      >
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> pharmacy.example / concept
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
        className="block h-auto w-full bg-[#f3f7f5]"
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
    ? "bg-white text-[#022c22]"
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
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#a7f3d0] bg-[#ecfdf5] p-6 md:flex-row md:items-center">
      <p className="max-w-2xl text-base font-semibold text-[#064e3b]">
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
          key={shortKey(item)}
          className="cm-li"
        >
          <span aria-hidden="true" className="ico ico-check cm-ic1" style={{ color: ACCENT }} />
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
          key={shortKey(title)}
          className={`rounded-2xl border border-border bg-white p-5 ${fiveUp ? (index < 3 ? "lg:col-span-2" : "lg:col-span-3") : ""}`}
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
          <p className="cm-p2">{text}</p>
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({
  feature,
  className = "",
}: {
  feature: PharmacyFeature;
  className?: string;
}) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article
      className={`rounded-2xl border border-border bg-white p-6 ${className}`}
    >
      <span className="cx-flex-h11-3v">
        <Icon className="h-5 w-5 text-[#059669]" aria-hidden />
      </span>
      <h3 className="cx-mt4-textlg-35">
        {feature.title}
      </h3>
      <p className="cm-p2">
        {feature.text}
      </p>
    </article>
  );
}

const featureChunks: {
  features: PharmacyFeature[];
  visual: Img;
  caption: string;
}[] = [
  {
    features: features.slice(0, 5),
    visual: pharmacyImages.scan,
    caption:
      "Fill & verify: the label prints only after the scanned NDC matches the verified prescription",
  },
  {
    features: features.slice(5, 10),
    visual: pharmacyImages.reorder,
    caption:
      "Suggested purchase order from reorder points and 30-day usage, with receiving checked against the invoice",
  },
  {
    features: features.slice(10, 15),
    visual: pharmacyImages.branches,
    caption:
      "Group report: sales, margin, inventory turns and transfer suggestions across three stores (placeholder data)",
  },
];

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter(
      (item) => productPath(INDUSTRY_SLUG, item.slug) !== PHARMACY_PATH,
    ) ?? [];

export default function PharmacyPage() {
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
                Custom pharmacy software
              </p>
              <h1 className="cm-h1">
                {PRODUCT_NAME}
              </h1>
              <div className="cm-lead">
                <p>
                  A pharmacy management system runs the daily work of a
                  pharmacy: receiving prescriptions, checking them, filling and
                  dispensing medication, billing insurance, ringing up sales and
                  keeping the shelves stocked with the right drugs. Every step
                  is recorded against the patient, the pharmacist and the
                  product.
                  Modern online and cloud-based pharmacy management software
                  gives independent, retail and chain pharmacies a shared view
                  of prescriptions, medication inventory and counter activity.
                </p>
                <p>
                  Clickmasters designs and builds custom pharmacy management
                  software for US independent pharmacies, retail and chain
                  operators, specialty and online pharmacies, and the healthcare
                  businesses that supply them. As part of our{" "}
                  <Link
                    href={industryPath(INDUSTRY_SLUG)}
                    className={linkClass}
                  >
                    healthcare and medical software
                  </Link>{" "}
                  work, we scope your workflow first, build in stages, and
                  connect the system to the tools you already depend on.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink>Discuss Your Pharmacy Software Project</CtaLink>
                <CtaLink outline>Get in touch</CtaLink>
              </div>
            </div>
            <AppFigure
              image={pharmacyImages.dashboard}
              caption="Dashboard: live prescription queue, will-call bins, daily sales and items that need attention"
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
          id="what-is-pms"
          eyebrow="Definition"
          title="What Is a Pharmacy Management System?"
        >
          <Prose>
            <p>
              A pharmacy management system (PMS), also called pharmacy
              management software or a pharmacy information system, is the
              central software that connects four jobs that used to live in
              separate places:
            </p>
          </Prose>
          <TitledCards
            items={pmsJobs}
            numbered
            className="mt-8 sm:grid-cols-2 lg:grid-cols-4"
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Without one connected system, pharmacy staff re-key the same data
            into several tools, check stock by walking the aisles and reconcile
            insurance payments by hand. A modern pharmacy management system does
            that work in one place, so pharmacists can spend more of their time
            on patients.
          </p>
        </Section>

        {/* How it works */}
        <Section
          id="how-it-works"
          eyebrow="One prescription, step by step"
          title="How Does Pharmacy Management Software Work?"
        >
          <Prose>
            <p>Follow one prescription through a typical retail pharmacy:</p>
          </Prose>
          <DiagramFigure
            image={pharmacyImages.workflow}
            caption="Nine steps from intake to inventory update, with the partners connected along the way"
            className="mt-8"
          />
          <TitledCards
            items={rxSteps}
            numbered
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
          <p className="mt-8 max-w-3xl text-base font-medium leading-7 text-foreground">
            Every step carries a timestamp and user ID, so the pharmacy can see
            who did what, and when.
          </p>
        </Section>

        {/* Features */}
        <Section
          id="pharmacy-features"
          eyebrow="15 core modules"
          title="Core Features of a Pharmacy Management System"
        >
          <div className="space-y-14">
            {featureChunks.map((chunk) => (
              <div key={chunk.visual.src}>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                  {chunk.features.map((feature, index) => (
                    <FeatureCard
                      key={shortKey(feature.title)}
                      feature={feature}
                      className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                    />
                  ))}
                </div>
                <div className="mt-8">
                  <AppFigure image={chunk.visual} caption={chunk.caption} />
                </div>
              </div>
            ))}
          </div>
          <CtaStrip
            title="Need these modules shaped around your own counter, stores and suppliers?"
            cta="Build Your Custom Pharmacy Management System"
          />
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of Pharmacy Management Software"
        >
          <TitledCards
            items={benefits}
            className="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Section>

        {/* Business types */}
        <Section
          id="business-types"
          eyebrow="Who it is for"
          title="Pharmacy Management System for Different Business Types"
        >
          <CompareTable
            caption="What matters most in a pharmacy management system by business type"
            headers={["Business type", "What matters most"]}
            rows={businessTypeRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            Hospital pharmacies work differently from retail. Medication orders
            usually come from the hospital&apos;s clinical record, not from
            paper or retail e-prescriptions. A hospital pharmacy system
            therefore has to exchange orders, allergies and administration data
            with the organization&apos;s{" "}
            <ProductLink slug="electronic-health-records-ehr-software">
              Electronic Health Records (EHR) software
            </ProductLink>
            , so that the pharmacist verifies against the same patient record
            the care team uses.
          </p>
        </Section>

        {/* Pharmacy platform */}
        <Section
          id="pharmacy-platform"
          eyebrow="Digital pharmacy operations"
          title="Online, Cloud-Based Pharmacy Management Software"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              [
                "Pharmacy management system dashboard",
                "A role-based dashboard brings prescription queues, will-call orders, rejected claims, short-dated inventory, sales and staff activity into one view. Each pharmacy, regional manager or technician sees the tasks relevant to their permissions.",
              ],
              [
                "Pharmacy technicians and medication workflows",
                "Pharmacy technician software roles can cover prescription entry, patient verification, refill requests, barcode filling, will-call organization and inventory receiving. The pharmacist remains responsible for clinical screening and final verification.",
              ],
              [
                "App and online access",
                "A pharmacy management system app or secure pharmacy management system website lets patients use the pharmacy management system online for refills, prescription status, appointment or delivery notifications and payment. Staff dispensing and claims workflows should use purpose-built counter, pharmacy and mobile interfaces.",
              ],
              [
                "Retail pharmacy operations",
                "For a retail pharmacy management system, peak-hour queues, drive-through pickup, front-store POS, patient messaging, insurance copays, loyalty and daily sales reporting need to work together rather than through separate tools.",
              ],
              [
                "Artificial intelligence assistance",
                "A modern pharmacy medication management system can use artificial intelligence to forecast demand, summarize recurring claims issues, route support work and rank operational exceptions. AI recommendations remain subject to licensed drug data, pharmacist review and auditable decision rules.",
              ],
              [
                "Complete pharmacy software",
                "A complete pharmacy management software platform covers dispensing, inventory, POS, billing, patients, reporting, integrations and controlled-substance records. The right design includes your wholesaler, PBM, e-prescribing and accounting connections.",
              ],
            ].map(([title, text]) => (
              <article
                key={shortKey(title)}
                className="cm-card5"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="cm-p2">
                  {text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-[#ecfdf5] p-6 md:p-8">
            <h3 className="text-xl font-semibold">
              Comparing pharmacy management software companies
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
              Pharmacy management software companies for the USA should be
              evaluated on US e-prescribing and PBM integrations, state and DEA
              requirements, role-based technician workflows, data migration,
              hosting, support, ownership and total operating cost. For chain,
              retail or online pharmacy operations, also verify multi-location
              inventory, central reporting, delivery integrations and the
              ability to grow without per-store workarounds.
            </p>
          </div>
        </Section>

        {/* Inventory */}
        <Section
          id="inventory"
          eyebrow="Stock control"
          title="Pharmacy Inventory Management in Detail"
        >
          <Prose>
            <p>
              Inventory is often a pharmacy&apos;s largest asset after its
              people. A good pharmacy inventory management system treats it as
              five connected workflows.
            </p>
          </Prose>
          <TitledCards
            items={inventoryWorkflows}
            numbered
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
          <div className="mt-8">
            <AppFigure
              image={pharmacyImages.inventory}
              caption="Stock by lot and location, expiry alerts, storage areas and recall lookup"
            />
          </div>
          <CtaStrip
            title="Want inventory, expiry and reorder rules built around your stores and wholesalers?"
            cta="Request a Custom Software Development Consultation"
          />
        </Section>

        {/* Dispensing */}
        <Section
          id="dispensing"
          eyebrow="Speed and safety"
          title="Prescription Processing and Medication Dispensing"
        >
          <Prose>
            <p>
              Prescription processing is where speed and safety must work
              together. Our dispensing workflows are built around a few
              principles:
            </p>
          </Prose>
          <TitledCards
            items={dispensingPrinciples}
            className="mt-8 md:grid-cols-2 lg:grid-cols-3"
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Most new prescriptions now arrive electronically. They start in the
            prescriber&apos;s{" "}
            <ProductLink slug="electronic-medical-records-emr-software">
              Electronic Medical Records (EMR) software
            </ProductLink>{" "}
            and reach the pharmacy through a certified e-prescribing network.
            When the pharmacy system handles those messages well, it removes
            transcription errors and makes refill and change requests back to
            the prescriber&apos;s office much faster.
          </p>
        </Section>

        {/* POS */}
        <Section
          id="pos-billing"
          eyebrow="Counter and claims"
          title="Pharmacy POS, Billing and Payment Management"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="cx-textba-leadin-1n">
                A pharmacy POS is not an ordinary retail register. It has to:
              </p>
              <CheckList items={posNeeds} className="mt-5" />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                On the billing side, pharmacy billing software tracks each claim
                from submission through adjudication, reversal, rebill and
                reconciliation against the PBM&apos;s remittance. Rejected and
                underpaid claims are listed for follow-up instead of
                disappearing into a monthly statement.
              </p>
            </div>
            <AppFigure
              image={pharmacyImages.pos}
              caption="One basket for Rx copays and front-store items, FSA/HSA split payment and signature capture"
            />
          </div>
        </Section>

        {/* Integrations */}
        <Section
          id="integrations"
          eyebrow="Connected pharmacy"
          title="Pharmacy Management Software Integrations"
        >
          <Prose>
            <p>
              Integration is where pharmacy software projects most often succeed
              or fail. We plan every connection during discovery.
            </p>
          </Prose>
          <DiagramFigure
            image={pharmacyImages.integrations}
            caption="The pharmacy core and the partners it connects to. Each connection is scoped per project."
            className="mt-8"
          />
          <CompareTable
            caption="Pharmacy management software integrations and what each does"
            headers={["Integration", "What it does"]}
            rows={integrationRows}
          />
          <div
            className="mt-6 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
            style={{ borderColor: ACCENT }}
          >
            Some providers require their own certification or contracts before
            go-live. E-prescribing networks, claims switches and drug databases
            are examples. We plan for these steps; they are not something any
            developer can skip.
          </div>
          <p className="cx-mt6-maxw3x-1c">
            Pharmacies that serve outpatient clinics, such as in-house
            dispensaries or clinic-attached pharmacies, often need a direct link
            to the{" "}
            <ProductLink slug="clinic-management-software">
              clinic management software
            </ProductLink>{" "}
            that runs patient registration and visits. With that link, a
            prescription written during a visit arrives at the pharmacy queue
            with the patient already matched.
          </p>
        </Section>

        {/* Security */}
        <Section
          id="security"
          eyebrow="Protected health information"
          title="Pharmacy Data Security and HIPAA Considerations"
        >
          <Prose>
            <p>
              Pharmacies are HIPAA covered entities. Prescription records,
              insurance details and dispensing history are protected health
              information (PHI).
            </p>
          </Prose>
          <div className="mt-6 max-w-4xl rounded-2xl border border-[#fde68a] bg-[#fffbeb] px-5 py-4 text-sm leading-7 text-[#78350f]">
            <span className="font-semibold">Important: </span>
            HHS does not certify software as &quot;HIPAA compliant&quot;.
            Compliance depends on how the pharmacy and its vendors use and
            manage the system. Software can be built to support compliance; it
            cannot guarantee it.
          </div>
          <p className="mt-8 font-semibold">
            How we build security into pharmacy software:
          </p>
          <CheckList items={securityControls} className="mt-4 md:grid-cols-2" />
          <div className="mt-8 rounded-3xl bg-[#022c22] p-6 text-sm leading-7 text-white/80 md:p-8">
            The pharmacy remains responsible for its HIPAA risk analysis,
            policies, staff training, vendor BAAs and breach notification
            procedures. Pharmacies also have obligations under DEA rules, state
            board of pharmacy rules and, for trading partners in the drug supply
            chain, the federal Drug Supply Chain Security Act (DSCSA). We design
            the software to support these duties; it does not replace your
            compliance program.
          </div>
        </Section>

        {/* Cloud */}
        <Section
          id="cloud-vs-on-premise"
          eyebrow="Deployment"
          title="Cloud-Based vs. On-Premise Pharmacy Management Software"
        >
          <CompareTable
            caption="Cloud-based pharmacy management system compared with on-premise pharmacy software"
            headers={[
              "Factor",
              "Cloud-Based Pharmacy Management System",
              "On-Premise Pharmacy Software",
            ]}
            rows={cloudRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            For most US pharmacies, a cloud-based pharmacy management system
            with an offline fallback for counter operations offers the best
            balance of cost, uptime and growth.
          </p>
        </Section>

        {/* Custom */}
        <Section
          id="custom-development"
          eyebrow="Build for your model"
          title="Custom Pharmacy Management Software Development"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="cx-textba-leadin-1n">
                Off-the-shelf pharmacy software works for the typical pharmacy.
                Custom development makes sense when your business isn&apos;t
                typical:
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
                , we build pharmacy platforms with:
              </p>
              <ul className="mt-5 space-y-3">
                {architecture.map(([title, text]) => (
                  <li
                    key={shortKey(title)}
                    className="cm-cardnote"
                  >
                    <span className="cx-fontse-textfo-1">
                      {title}.
                    </span>{" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base font-medium leading-7 text-foreground">
            A custom build isn&apos;t the right choice for every pharmacy. If an
            existing product fits, we&apos;ll tell you, and we can still build
            the integrations or custom modules around it.
          </p>
          <CtaStrip
            title="Running a specialty, multi-store or online pharmacy that off-the-shelf software doesn't fit?"
            cta="Build Your Custom Pharmacy Management System"
          />
        </Section>

        {/* Implementation */}
        <Section
          id="implementation"
          eyebrow="Delivery"
          title="Pharmacy Management System Implementation Process"
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
            We give timelines and quotes after discovery, once the scope is
            clear, which is how we approach every product we build.
          </p>
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="Problems we solve"
          title="Common Pharmacy Management Challenges and Solutions"
        >
          <CompareTable
            caption="Common pharmacy management challenges and solutions"
            headers={["Challenge", "Solution"]}
            rows={challengeRows}
          />
        </Section>

        {/* Why */}
        <Section
          id="why-us"
          eyebrow="Your partner"
          title="Why Choose Clickmasters for Pharmacy Management Software Development?"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyClickmasters.map(([title, text]) => (
              <li
                key={shortKey(title)}
                className="cm-card5"
              >
                <p className="cx-fontse-leadin-b">{title}</p>
                <p className="cm-p2">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Final CTA */}
        <section className="border-t border-border bg-[#022c22] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="cm-h2b">
                Discuss Your Pharmacy Software Project
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you run one independent pharmacy, are growing a
                multi-location group, or are launching an online or specialty
                pharmacy, the first step is the same: a clear look at how your
                pharmacy runs today and what needs to change.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us your pharmacy type, store count, current systems and
                biggest bottlenecks. We&apos;ll come back with a practical
                recommendation (build, extend or buy), the modules and
                integrations involved, and the next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink light>Talk about {PRODUCT_NAME}</CtaLink>
                <CtaLink light outline>
                  Request a Custom Software Development Consultation
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
                  "Your pharmacy type",
                  "How many stores you run",
                  "The systems you use today",
                  "Your biggest bottlenecks",
                ].map((item) => (
                  <li key={shortKey(item)} className="cx-flex-gap3-24">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6ee7b7] text-[#022c22]">
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
              Frequently Asked Questions About Pharmacy Management Systems
            </h2>
            <div className="cm-list">
              {pharmacyFaqs.map((faq, index) => (
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
