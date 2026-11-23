import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Boxes,
  Brain,
  Building2,
  Check,
  ChevronRight,
  ClipboardList,
  Factory,
  FileCheck2,
  LayoutDashboard,
  LineChart,
  Lock,
  Plug,
  ShieldCheck,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  aiPoints,
  analyticsRows,
  benefits,
  challengeImpactRows,
  challengeRows,
  cloudVsOnPremRows,
  costFactors,
  customVsReadyRows,
  features,
  fulfillmentPoints,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrationRows,
  layers,
  logisticsPoints,
  moduleRows,
  planningPoints,
  procurementPoints,
  processSteps,
  PRODUCT_NAME,
  SCM_PATH,
  scmDescription,
  scmFaqs,
  scmImages,
  scmLinks,
  scmTitle,
  scopeAreas,
  security,
  selectionQuestions,
  supplierPoints,
  whyClickmasters,
  workflowSteps,
  type LinkSpec,
  type ScmFeature,
} from "./scm-data";

export { SCM_PATH, scmDescription, scmTitle, scmImages };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Boxes,
  Building2,
  ClipboardList,
  Factory,
  FileCheck2,
  LayoutDashboard,
  LineChart,
  Plug,
  ShieldCheck,
  Truck,
  Warehouse,
};

const ACCENT = "#0e7490";
const DARK = "#072a31";

export function scmSchema() {
  const url = pageUrl(SCM_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: scmTitle,
        description: scmDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(scmImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "Supply chain management software development",
        description:
          "Design, development and integration of supply chain management software for supplier management, procurement, planning, inventory and warehouse coordination, order fulfillment and shipment visibility.",
        url,
        image: pageUrl(scmImages.dashboard.src),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl("/products") },
          {
            "@type": "ListItem",
            position: 3,
            name: INDUSTRY_LABEL,
            item: pageUrl(`/products/${INDUSTRY_SLUG}`),
          },
          { "@type": "ListItem", position: 4, name: PRODUCT_NAME, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: scmFaqs.map((faq) => ({
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
  { href: "#overview", label: "Overview" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#scm-features", label: "Features" },
  { href: "#scm-modules", label: "Modules" },
  { href: "#workflow", label: "Workflow" },
  { href: "#suppliers", label: "Suppliers" },
  { href: "#procurement", label: "Procurement" },
  { href: "#planning", label: "Planning" },
  { href: "#logistics", label: "Shipments" },
  { href: "#industries", label: "Industries" },
  { href: "#integrations", label: "Integrations" },
  { href: "#ai-automation", label: "AI" },
  { href: "#faq", label: "FAQ" },
];

function BodyLink({ link }: { link: LinkSpec }) {
  return (
    <Link href={link.href} className={linkClass}>
      {link.anchor}
    </Link>
  );
}

function AppFigure({ image, caption, priority = false }: { image: Img; caption: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#072a31] shadow-xl shadow-cyan-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> supplychain.example / concept
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
        className="block h-auto w-full bg-[#f3f5fb]"
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-2.5 text-xs text-muted-foreground">
        <span>{caption}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

function DiagramFigure({ image, caption, className = "" }: { image: Img; caption: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-border bg-white p-3 md:p-5 ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="mx-auto block h-auto w-full max-w-5xl"
      />
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function H3({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-2xl font-semibold tracking-tight ${className}`}>{children}</h3>;
}

const PRIMARY_CTA = "Discuss Your Supply Chain Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#072a31]" : "bg-primary text-primary-foreground"}`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function CtaPair({ light = false, secondary }: { light?: boolean; secondary: { label: string; href: string } }) {
  const secondaryClass = `inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border hover:bg-secondary"}`;
  return (
    <div className="flex flex-wrap gap-3">
      <PrimaryCta light={light} />
      {secondary.href.startsWith("#") ? (
        <a href={secondary.href} className={secondaryClass}>
          {secondary.label}
        </a>
      ) : (
        <Link href={secondary.href} className={secondaryClass}>
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
          <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: ACCENT }} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TitledList({
  items,
  icon: Icon = Check,
  className = "",
}: {
  items: readonly (readonly [string, string])[];
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <ul className={`grid gap-4 ${className}`}>
      {items.map(([title, text]) => (
        <li key={title} className="rounded-2xl border border-border bg-white p-5">
          <p className="flex items-start gap-2 font-semibold leading-snug">
            <Icon className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} aria-hidden />
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
        </li>
      ))}
    </ul>
  );
}

function NumberedCards({ items, className = "" }: { items: readonly (readonly [string, string])[]; className?: string }) {
  return (
    <ol className={`grid gap-4 ${className}`}>
      {items.map(([title, text], index) => (
        <li key={title} className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-3">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              {index + 1}
            </span>
            <p className="font-semibold leading-snug">{title}</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
        </li>
      ))}
    </ol>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-8 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground"
      style={{ borderColor: ACCENT }}
    >
      {children}
    </div>
  );
}

/** Two-column section body: text on the left, a figure on the right. */
function Split({ children, figure }: { children: ReactNode; figure: ReactNode }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div>{children}</div>
      {figure}
    </div>
  );
}

function FeatureCard({ feature }: { feature: ScmFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#cffafe]">
          <Icon className="h-5 w-5 text-[#0e7490]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature.text}</p>
    </article>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== SCM_PATH) ?? [];

export default function ScmPage() {
  return (
    <PageFrame>
      <main className="bg-background pt-28 text-foreground md:pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/products" className="hover:text-foreground">Products</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={industryPath(INDUSTRY_SLUG)} className="hover:text-foreground">
                  {INDUSTRY_LABEL}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{PRODUCT_NAME}</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                {INDUSTRY_LABEL}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Supply Chain Management Software for End-to-End Visibility, From Supplier to Delivery
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Your suppliers send confirmations by email. Purchasing tracks orders in a spreadsheet.
                  The warehouse runs its own system, transportation runs another, and planners rebuild
                  the picture every week from exports. When a shipment slips, the people who need to know
                  usually find out last.
                </p>
                <p>
                  Supply chain management software connects suppliers, purchasing, inventory, production,
                  warehouses, orders and shipments into one shared operational view, so teams can see
                  what&apos;s coming, what&apos;s at risk and what to do next. Clickmasters is a custom
                  software development company that designs, builds and integrates supply chain platforms
                  for US businesses. That can be a complete system, or a coordination layer over the ERP,
                  warehouse and transportation tools you already use.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Supply Chain Modules", href: "#scm-modules" }} />
              </div>
            </div>
            <AppFigure image={scmImages.dashboard} caption="Supply chain management system dashboard: every part of the chain in one view" priority />
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

        {/* Overview */}
        <Section id="overview" eyebrow="Overview" title="Supply Chain Software Overview">
          <Prose>
            <p>
              Most supply chains already have software, just not connected software. Purchasing lives in
              one place, stock in another, freight in a third, and the supplier relationship in
              someone&apos;s inbox. A supply chain management platform doesn&apos;t necessarily replace
              those systems. It <strong className="text-foreground">connects them, adds the missing
              workflows</strong> (supplier management, procurement, planning, exception handling), and
              gives every team the same up-to-date view of supply and demand.
            </p>
            <p>
              For some businesses that means a full custom supply chain management system. For others
              it&apos;s a visibility and coordination layer integrated with existing ERP, warehouse and
              transportation systems. The right scope depends on where the gaps in your chain are.
            </p>
          </Prose>
          <div className="mt-8">
            <PrimaryCta label="Talk to Our Enterprise Software Team" />
          </div>
        </Section>

        {/* What is */}
        <Section id="what-is-scm" eyebrow="Definition" title="What Is Supply Chain Management Software?">
          <Prose>
            <p>
              Supply chain management (SCM) software is a system for planning, executing and monitoring
              the flow of materials, goods, information and commitments from suppliers to customers.
              The supply chain management software definition is that shared flow. Supply chain
              management SCM software is the same system with the acronym written out. The supply
              chain management software meaning, and the supply chain management system meaning, is
              one picture of supply and demand instead of five exports. A supply chain management
              information system is that picture. People shorten a supply chain management system
              SCMS to the same name. Supply chain management software systems and supply chain
              management software applications are the modules on top of it. Supply chain management
              software tools are the screens those teams open every day. It typically covers:
            </p>
          </Prose>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {scopeAreas.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-lg font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
          <Note>
            What sets SCM software apart from single-function tools is its{" "}
            <strong className="text-foreground">cross-functional view</strong>. It answers questions that
            span departments, like &quot;which customer orders are at risk because a supplier shipment is
            late?&quot; What software does supply chain management use depends on that gap. Common
            software used in supply chain management includes purchasing, warehouse, transportation and
            planning tools. A supply chain management web application is how a partner opens the same
            status without a desktop install.
          </Note>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How Does a Supply Chain Management System Work?">
          <Prose>
            <p>A supply chain management system works as a hub with four layers:</p>
          </Prose>
          <NumberedCards items={layers} className="mt-6 md:grid-cols-2 lg:grid-cols-4" />
          <Note>
            How quickly the picture updates depends on how quickly connected systems and partners send
            data. Some supplier and carrier data arrives within minutes, and some arrives daily.
          </Note>
        </Section>

        {/* Why */}
        <Section id="why-scm" eyebrow="Business problems" title="Why Businesses Need Supply Chain Management Software">
          <CompareTable
            caption="Supply chain challenges, operational impact, how connected software helps, and an example scenario"
            headers={["Challenge", "Operational impact", "How connected software helps", "Scenario"]}
            rows={challengeImpactRows}
          />
          <Note>
            Software improves visibility and response time. It can&apos;t eliminate disruptions, supplier
            failures or forecast error.
          </Note>
        </Section>

        {/* Features */}
        <Section id="scm-features" eyebrow="12 capability areas" title="Complete Supply Chain Management Features">
          <Prose>
            <p>
              The capabilities below are{" "}
              <strong className="text-foreground">possible modules and development options</strong>,
              scoped to your operation during discovery. They aren&apos;t preinstalled features of a
              ready-made Clickmasters product.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build a Custom Supply Chain Management System" />
          </div>
        </Section>

        {/* Modules */}
        <Section id="scm-modules" eyebrow="Scope" title="Supply Chain Software Modules">
          <CompareTable
            caption="Supply chain software modules, purpose and key users"
            headers={["Module", "Purpose", "Key users"]}
            rows={moduleRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Most businesses start with the modules closest to their biggest pain point, often supplier and
            procurement visibility, then add planning and logistics visibility.
          </p>
        </Section>

        {/* Workflow */}
        <Section id="workflow" eyebrow="Source to settle" title="The End-to-End Supply Chain Workflow">
          <DiagramFigure image={scmImages.workflow} caption="From supplier to customer" />
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map(([title, text], index) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-border bg-white p-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#cffafe", color: ACCENT }}
                >
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold leading-snug">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Note>
            A supply chain platform connects these steps so each team sees the status of the step before
            theirs and the impact on the step after.
          </Note>
        </Section>

        {/* Suppliers */}
        <Section id="suppliers" eyebrow="Sourcing" title="Supplier and Vendor Management">
          <Split
            figure={
              <AppFigure
                image={scmImages.suppliers}
                caption="Supplier list with OTIF, documents and a scorecard with risk flags"
              />
            }
          >
            <p className="text-base leading-7 text-muted-foreground">
              Strong supplier management starts with <strong className="text-foreground">one supplier
              record</strong>: legal details, contacts, terms, approved items, lead times, certificates and
              performance history. Supply chain risk management software flags a supplier whose
              deliveries keep slipping. The best supply chain risk management software ties that flag
              to the customer orders it will miss. Supply chain quality management software keeps
              certificates and inspection results on the same record. Useful capabilities include:
            </p>
            <TitledList items={supplierPoints} className="mt-5" />
          </Split>
        </Section>

        {/* Procurement */}
        <Section id="procurement" eyebrow="Buying" title="Procurement and Purchase Order Management">
          <Prose>
            <p>
              The procurement workflow runs from{" "}
              <strong className="text-foreground">
                requisition to approval to PO to confirmation to receipt to invoice match
              </strong>
              . Procurement and supply chain management software is that path connected to inbound
              supply, not a purchase order that disappears after it is sent.
            </p>
          </Prose>
          <TitledList items={procurementPoints} icon={FileCheck2} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure
              image={scmImages.procurement}
              caption="Requisition to receipt: POs by status, with approval rules and automations"
            />
          </div>
          <Note>
            Repetitive document handling can be supported with AI document extraction. Purchase orders,
            invoices and confirmations are converted to structured data, and a person reviews any
            low-confidence results.
          </Note>
        </Section>

        {/* Planning */}
        <Section id="planning" eyebrow="Plan" title="Supply Chain Planning and Demand Forecasting">
          <Prose>
            <p>
              Planning connects what customers will want with what suppliers and plants can deliver.
              Supply chain planning software companies sell forecasting suites. The useful part is a
              forecast a planner can still override, tied to what suppliers can actually ship:
            </p>
          </Prose>
          <TitledList items={planningPoints} icon={LineChart} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure
              image={scmImages.planning}
              caption="Forecasts with planner override, suggested replenishment and a what-if scenario"
            />
          </div>
          <Note>
            Forecasts are estimates. Their quality depends on data history, demand patterns and how often
            they&apos;re reviewed, and planners should always be able to override them.
          </Note>
        </Section>

        {/* Inventory & warehouse coordination */}
        <Section id="inventory-warehouse" eyebrow="Store" title="Inventory and Warehouse Coordination">
          <Prose>
            <p>
              Supply chain software needs to know what&apos;s available across the network, while
              specialist systems run the detail. An <BodyLink link={scmLinks.inventory} /> system remains
              the record for stock levels, movements and reorder points. The supply chain platform uses
              that data to decide where to buy, transfer or allocate.
            </p>
            <p>
              Inside the warehouse, receiving, putaway, picking, packing and dispatch are execution tasks
              best handled by a <BodyLink link={scmLinks.wms} />. The supply chain layer shows inbound and
              outbound status across every warehouse, so purchasing, planning and customer service can act
              on it.
            </p>
          </Prose>
          <div className="mt-8">
            <AppFigure
              image={scmImages.network}
              caption="Network view: suppliers, port, plant and DCs with stock cover and inbound shipments"
            />
          </div>
        </Section>

        {/* Fulfillment */}
        <Section id="fulfillment" eyebrow="Deliver" title="Order Fulfillment and Distribution Management">
          <Split
            figure={
              <AppFigure
                image={scmImages.fulfillment}
                caption="Orders by status and backorders with expected dates from inbound supply"
              />
            }
          >
            <TitledList items={fulfillmentPoints} />
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Order capture and multichannel routing are often handled by an order management system. The
              supply chain platform connects that order status to supply and inbound data.
            </p>
          </Split>
        </Section>

        {/* Logistics */}
        <Section id="logistics" eyebrow="Visibility" title="Logistics and Shipment Visibility">
          <Prose>
            <p>
              Visibility means knowing where goods are and when they&apos;ll arrive, inbound and outbound.
              Logistics supply chain management software is that freight status. Global supply chain
              management software extends it across regions and carriers:
            </p>
          </Prose>
          <TitledList items={logisticsPoints} icon={Truck} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <div className="mt-8">
            <AppFigure image={scmImages.shipments} caption="Delays surfaced before they become shortages" />
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Load planning, carrier tendering and freight execution belong in a{" "}
            <BodyLink link={scmLinks.tms} />. The supply chain platform consumes its status to keep
            everyone else informed.
          </p>
        </Section>

        {/* Analytics */}
        <Section id="analytics" eyebrow="Measure" title="Supply Chain Analytics and Reporting">
          <CompareTable caption="Supply chain KPIs and reports by area" headers={["Area", "Example KPIs and reports"]} rows={analyticsRows} />
          <div className="mt-8">
            <AppFigure image={scmImages.analytics} caption="Supplier OTIF, forecast accuracy and KPIs by area" />
          </div>
          <Note>
            Dashboards should be role-based (executive, planner, buyer, logistics), and exceptions should
            link straight to the action required.
          </Note>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Supply Chain Management Software">
          <Prose>
            <p>Supply chain management system benefits, when partners share data, typically include:</p>
          </Prose>
          <CheckList items={benefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Results depend on data quality, partner participation and process adoption. Measure them
            against your own baselines.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="Industry-Specific Supply Chain Software Solutions">
          <CompareTable
            caption="Supply chain challenges, relevant modules and outcomes by industry"
            headers={["Industry", "Key challenges", "Relevant modules", "Outcomes sought"]}
            rows={industryRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Healthcare supply chain management software and hospital supply chain management software
            track clinical supplies so a stockout is visible before it reaches a ward. Pharmaceutical
            supply chain management software adds lot and expiry to that chain. Food supply chain
            management software and foodservice supply chain management software follow ingredients
            from supplier to kitchen or store. Construction supply chain software tracks
            materials against a job site. A supply chain management system in e commerce has to
            reserve stock when the order is paid and show when inbound supply will cover a backorder.
          </p>
          <div className="mt-8">
            <PrimaryCta label="Explore Custom Supply Chain Solutions" />
          </div>
        </Section>

        {/* SMB / Enterprise */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:px-8 lg:grid-cols-2">
            <article id="small-business" className="scroll-mt-28 rounded-3xl border border-border bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Supply Chain Management Software for Small Businesses
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Small and mid-sized businesses usually need{" "}
                <strong className="text-foreground">supplier records, PO tracking with confirmations,
                stock visibility, shipment status and a few clear reports</strong>. Supply chain
                management software small business teams can actually run is that set. The best supply
                chain management software for small business is the focused system, not an enterprise
                planning suite. It is often built around spreadsheets and email that are already being
                outgrown, and integrated with existing accounting or e-commerce tools.
              </p>
            </article>
            <article id="enterprise" className="scroll-mt-28 rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Enterprise Supply Chain Management Software
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Enterprises need multi-entity and multi-region structures, supplier portals at scale, EDI,
                complex approval hierarchies, advanced planning, a control-tower view of exceptions,
                granular permissions and robust integration with ERP, WMS, TMS and data warehouses. A
                supply chain management enterprise system is that scope. At this scale, architecture
                choices (event-driven integration, data models and monitoring) matter as much as
                features.
              </p>
            </article>
          </div>
        </section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Supply Chain Software">
          <CompareTable
            caption="Cloud-based supply chain software compared with on-premise"
            headers={["Factor", "Cloud-based", "On-premise"]}
            rows={cloudVsOnPremRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            SaaS supply chain management software is the browser version, so suppliers and planners
            open the same status without a server in the office.
          </p>
        </Section>

        {/* Custom vs ready-made */}
        <Section id="custom-vs-ready-made" eyebrow="Build or buy" title="Custom Supply Chain Software vs. Ready-Made Solutions">
          <CompareTable
            caption="Ready-made SCM suites compared with custom supply chain software"
            headers={["", "Ready-made SCM suites", "Custom supply chain software"]}
            rows={customVsReadyRows}
          />
          <Note>
            A practical middle path is a <strong className="text-foreground">custom coordination
            layer</strong>: supplier portal, procurement workflows, visibility and analytics on top of the
            ERP and execution systems you keep.
          </Note>
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Supply Chain Software Integrations">
          <CompareTable caption="Supply chain integrations and typical data exchanged" headers={["System", "Typical data exchanged"]} rows={integrationRows} />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Most supply chain projects succeed or fail on integration. Many businesses keep{" "}
            <BodyLink link={scmLinks.erp} /> as the financial and master-data backbone and connect the
            supply chain platform to it, with clear rules for which system owns suppliers, items, POs and
            receipts. Clickmasters&apos; integration work includes ERP-to-3PL connections, EDI wrappers
            and bidirectional sync with platforms such as NetSuite, SAP and Microsoft Dynamics. Supply
            chain management ERP software can live inside that ERP or beside it. Supply chain
            management software ERP teams already run should stay the financial backbone. A supply
            chain management ERP system is the pairing: finance in the ERP, movement in the supply
            chain layer.
          </p>
        </Section>

        {/* AI */}
        <Section id="ai-automation" eyebrow="Applied AI" title="AI and Automation in Supply Chain Management">
          <Split
            figure={<DiagramFigure image={scmImages.mobile} caption="Approve and respond on the go" />}
          >
            <p className="text-base leading-7 text-muted-foreground">
              AI is useful in supply chains when it&apos;s applied to specific, data-rich problems.
              Supply chain management AI software can flag a late shipment or draft a forecast. A
              supply chain management system using blockchain is sometimes proposed for a shared
              traceability log. Most chains get further with a status record partners can all see,
              and a person who can still override the suggestion:
            </p>
            <TitledList items={aiPoints} icon={Brain} className="mt-5" />
          </Split>
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5 text-sm leading-7 text-[#78350f]">
            <AlertTriangle className="mt-1 h-5 w-5 shrink-0" aria-hidden />
            <p>
              AI outputs depend on the quality and history of your data. They need validation against real
              outcomes and human oversight for decisions with business impact. Clickmasters&apos; AI and
              machine learning practice includes document extraction with human review and predictive
              models for demand forecasting.
            </p>
          </div>
        </Section>

        {/* Security */}
        <Section id="security" eyebrow="Partner access" title="Supply Chain Data Security and Access Control">
          <CheckList items={security} className="max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Challenges */}
        <Section id="challenges" eyebrow="Lessons learned" title="Common Supply Chain Management Challenges and Solutions">
          <CompareTable caption="Common supply chain management challenges and solutions" headers={["Challenge", "Solution"]} rows={challengeRows} />
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose Supply Chain Management Software">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            People ask what is the best supply chain management software. Lists of the top supply
            chain management software companies and top 10 supply chain management software roundups
            compare the suites that supply chain management software vendors publish, and a supply chain
            management tools list is the same kind of directory. Smaller tools often cover one gap, such
            as visibility, rather than the whole chain. The right platform for a given company is the one
            that matches its suppliers and systems. Ask for a supply chain management software demo of a
            late shipment and the orders it affects.
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <p className="flex items-center gap-3 font-semibold">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#cffafe", color: ACCENT }}
                  >
                    {index + 1}
                  </span>
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Custom SCM Software Development Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  Step {index + 1}
                </span>
                <p className="mt-2 font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Factors That Affect Supply Chain Software Development Cost">
          <TitledList items={costFactors} icon={BarChart3} className="sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            Cost and timeline depend on scope and complexity. Supply chain management software price
            and supply chain management software cost follow how many partners, sites and systems you
            connect. Clickmasters agrees on scope, timeline and quote before development starts.
          </Note>
        </Section>

        {/* Why Clickmasters */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters for Custom Supply Chain Software Development?">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={whyClickmasters} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#67e8f9]">
                Supply chain is part of our enterprise work
              </p>
              <p className="mt-3 text-base leading-7 text-white/85">
                Our{" "}
                <Link href={scmLinks.customScm.href} className="font-medium text-white underline underline-offset-4">
                  {scmLinks.customScm.anchor}
                </Link>{" "}
                work runs through enterprise engagements that list SCM software among
                typical projects, alongside ERP modules for supply chain visibility, WMS and TMS builds, and
                carrier integration hubs.
              </p>
              <div className="mt-6">
                <PrimaryCta light />
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About Supply Chain Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {scmFaqs.map((faq, index) => (
                <details key={faq.question} className="group p-5 md:p-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold md:text-lg">
                    <h3>
                      {index + 1}. {faq.question}
                    </h3>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border text-white" style={{ backgroundColor: DARK }}>
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Connect Your Supply Chain From Supplier to Customer
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you need supplier and procurement control, network-wide visibility, better planning
                or a coordination layer over the systems you already run, the first step is a clear map of
                your chain, partners and data.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us where visibility breaks down today. We&apos;ll recommend the right scope, outline
                the modules and integrations involved, and plan the first phase.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request a Software Development Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["The right scope: full system or coordination layer", "The modules involved", "ERP, WMS, TMS and partner integrations", "A planned first phase"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#67e8f9] text-[#072a31]">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related products (site template block) */}
        {relatedProducts.length > 0 ? (
          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">More in {INDUSTRY_LABEL}</h2>
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
        <style>{"@media (max-width: 767px) { body { padding-bottom: 72px; } }"}</style>
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Discuss Your Supply Chain Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
