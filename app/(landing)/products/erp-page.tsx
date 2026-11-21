import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  ChevronRight,
  ClipboardList,
  Cloud,
  Factory,
  FileStack,
  FolderKanban,
  Handshake,
  Landmark,
  Lock,
  Plug,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  benefits,
  capabilities,
  challengeRows,
  cloudVsOnPremRows,
  costFactors,
  customReasons,
  customVsReadyRows,
  ERP_PATH,
  erpDescription,
  erpFaqs,
  erpImages,
  erpLinks,
  erpTitle,
  erpVsCrmRows,
  howWeHelp,
  implementationSteps,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrations,
  layers,
  modules,
  orderToCash,
  PRODUCT_NAME,
  reporting,
  security,
  selectionQuestions,
  signs,
  techStack,
  type LinkSpec,
} from "./erp-data";

export { ERP_PATH, erpDescription, erpTitle, erpImages };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Boxes,
  Factory,
  FileStack,
  FolderKanban,
  Handshake,
  Landmark,
  Receipt,
  ShoppingCart,
  Truck,
  Users,
};

const ACCENT = "#2563eb";
const DARK = "#0b1733";

export function erpSchema() {
  const url = pageUrl(ERP_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: erpTitle,
        description: erpDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(erpImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "ERP software development",
        description:
          "Planning, design, development, integration and support of ERP systems that connect finance, inventory, sales, procurement, HR and operations.",
        url,
        image: pageUrl(erpImages.dashboard.src),
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
          { "@type": "ListItem", position: 4, name: "ERP Software", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: erpFaqs.map((faq) => ({
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
  { href: "#what-is-erp", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#erp-modules", label: "Modules" },
  { href: "#benefits", label: "Benefits" },
  { href: "#industries", label: "Industries" },
  { href: "#cloud-vs-on-premise", label: "Cloud vs on-premise" },
  { href: "#custom-erp", label: "Custom vs ready-made" },
  { href: "#integration", label: "Integration" },
  { href: "#security", label: "Security" },
  { href: "#implementation", label: "Implementation" },
  { href: "#cost", label: "Cost" },
  { href: "#faq", label: "FAQ" },
];

/** Renders `text`, turning the first occurrence of `link.anchor` into an internal link. */
function LinkedText({ text, link }: { text: string; link?: LinkSpec }) {
  if (!link) return <>{text}</>;
  const at = text.indexOf(link.anchor);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <Link href={link.href} className={linkClass}>
        {link.anchor}
      </Link>
      {text.slice(at + link.anchor.length)}
    </>
  );
}

function BodyLink({ link }: { link: LinkSpec }) {
  return (
    <Link href={link.href} className={linkClass}>
      {link.anchor}
    </Link>
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#0b1733] shadow-xl shadow-blue-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> erp.example / concept
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

function CtaPair({ light = false, secondary }: { light?: boolean; secondary: { label: string; href: string } }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#0b1733]" : "bg-primary text-primary-foreground"}`}
      >
        Discuss Your ERP Requirements
        <ArrowRight className="h-4 w-4" />
      </Link>
      {secondary.href.startsWith("#") ? (
        <a
          href={secondary.href}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border hover:bg-secondary"}`}
        >
          {secondary.label}
        </a>
      ) : (
        <Link
          href={secondary.href}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border hover:bg-secondary"}`}
        >
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

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== ERP_PATH) ?? [];

export default function ErpPage() {
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
              <li className="text-foreground">ERP Software</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                {INDUSTRY_LABEL}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Enterprise Resource Planning (ERP) Software Built Around How Your Business Runs
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  When finance closes the month in one system, the warehouse counts stock in
                  another and sales promises delivery dates from a spreadsheet, every department
                  is working from a different version of the truth. Enterprise resource planning
                  ERP software replaces that patchwork with one connected system for orders,
                  inventory, purchasing, accounting, people and reporting.
                </p>
                <p>
                  Clickmasters plans, designs and builds an enterprise resource planning ERP
                  software solution for US businesses that have outgrown disconnected tools. We
                  start from your real workflows, decide with you which modules and integrations
                  belong in scope, and deliver an ERP platform your teams will actually use.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "See ERP Modules", href: "#erp-modules" }} />
              </div>
            </div>
            <AppFigure
              image={erpImages.dashboard}
              caption="Executive dashboard: cash position, open sales orders, AR aging, inventory value and close status"
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
        <Section id="what-is-erp" eyebrow="Definition" title="What Is Enterprise Resource Planning (ERP) Software?">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Prose>
              <p>
                ERP stands for enterprise resource planning. The enterprise resource planning ERP
                system definition is a shared system of record. An enterprise resource planning ERP
                system is a business management system that runs core operations (financials,
                inventory, procurement, sales orders, production, HR and reporting) on one shared
                database. Each department works in its own module, but every module reads and
                writes the same records.
              </p>
              <p>
                That shared data model is what sets an ERP system apart from a collection of
                separate applications. When a sales order is entered, inventory is reserved, the
                warehouse sees the pick, and finance sees the receivable without anyone re-keying
                it. Management reports come from the same transactions, not from spreadsheets
                exported out of five systems.
              </p>
            </Prose>
            <DiagramFigure
              image={erpImages.hub}
              caption="Every module shares one central database of master data and transactions"
            />
          </div>

          <H3 className="mt-14">ERP vs. CRM vs. Standalone Tools</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            ERP and CRM are complementary, and the difference matters when you plan scope:
          </p>
          <CompareTable
            caption="ERP software compared with CRM software and standalone tools"
            headers={["", "ERP software", "CRM software", "Standalone tools"]}
            rows={erpVsCrmRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Many organizations run both. Customer-facing teams work the pipeline in dedicated{" "}
            <BodyLink link={erpLinks.crm} />, and a won opportunity becomes a sales order in the
            ERP. Customer, pricing and order-status data then stays in sync between the two
            systems.
          </p>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How an ERP System Works">
          <Prose>
            <p>An ERP system is built in three layers:</p>
          </Prose>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {layers.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {index + 1}
                  </span>
                  <p className="font-semibold">{title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>

          <H3 className="mt-14">Example: Order-to-Cash in One System</H3>
          <DiagramFigure
            image={erpImages.orderToCash}
            caption="Order-to-cash, procure-to-pay and record-to-report all run on the same records"
            className="mt-6"
          />
          <ol className="mt-8 grid max-w-4xl gap-3">
            {orderToCash.map((step, index) => (
              <li key={step} className="flex gap-4 text-base leading-7 text-muted-foreground">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#dbeafe", color: ACCENT }}
                >
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <Note>
            Procure-to-pay (requisition → purchase order → receipt → vendor bill → payment) and
            record-to-report (transactions → reconciliations → close → financial statements) follow
            the same pattern. Each step hands clean data to the next.
          </Note>
        </Section>

        {/* Signs */}
        <Section id="signs" eyebrow="When to act" title="Signs Your Business Needs an ERP System">
          <Prose>
            <p>
              Businesses rarely buy ERP software because it sounds strategic. They buy it because
              day-to-day operations start to break. Common triggers include:
            </p>
          </Prose>
          <TitledList items={signs} icon={AlertTriangle} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            If several of these sound familiar, an integrated enterprise resource planning ERP system is usually worth evaluating,
            whether that means an off-the-shelf platform, a configured one or a custom build.
          </p>
        </Section>

        {/* Modules */}
        <Section id="erp-modules" eyebrow="11 functional areas" title="ERP Modules and Functional Areas">
          <Prose>
            <p>
              An ERP is modular, so you deploy the functional areas your business needs and add
              others later. Which modules, features and workflows go into your ERP depends on the
              scope agreed during discovery. Not every project needs every module below, and many
              start with a financial enterprise resource planning ERP system plus one operational
              area.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => {
              const Icon = ICONS[mod.icon] ?? ClipboardList;
              return (
                <article key={mod.title} className="rounded-2xl border border-border bg-white p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dbeafe]">
                      <Icon className="h-5 w-5 text-[#2563eb]" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold leading-snug">{mod.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    <LinkedText text={mod.text} link={mod.link} />
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-10">
            <AppFigure
              image={erpImages.inventory}
              caption="Inventory module: stock by warehouse, reorder points, lot and expiry tracking, suggested transfers"
            />
          </div>
        </Section>

        {/* Capabilities */}
        <Section id="capabilities" eyebrow="Platform" title="Core ERP Capabilities That Connect the Modules">
          <Prose>
            <p>
              Modules describe what an ERP covers. An enterprise resource planning app puts the
              same orders, stock and approvals on a phone. A handful of platform-wide capabilities
              decide whether the system is a pleasure to use or a burden:
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <TitledList items={capabilities} />
            <div className="lg:sticky lg:top-28">
              <AppFigure
                image={erpImages.approval}
                caption="Workflow automation: a purchase order routed by amount and role, with audit trail and three-way match"
              />
            </div>
          </div>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of ERP Software">
          <Prose>
            <p>
              Enterprise resource planning software systems typically deliver value in these areas.
              The size of the gains depends on your starting point, your scope and how well the
              rollout is adopted.
            </p>
          </Prose>
          <TitledList items={benefits} icon={ShieldCheck} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="ERP Solutions for Different Industries">
          <Prose>
            <p>
              This enterprise resource planning software overview keeps the fundamentals the same
              everywhere, but each industry weights them differently. Here is where ERP tends to
              add the most value:
            </p>
          </Prose>
          <CompareTable
            caption="Practical ERP use cases by industry"
            headers={["Industry", "Practical ERP use cases"]}
            rows={industryRows}
          />
          <Note>
            Industry rules, such as traceability, revenue recognition or sector regulations, are
            captured as requirements during discovery and validated with your compliance and
            finance advisors. Deploying an ERP does not make a business compliant on its own.
          </Note>
        </Section>

        {/* Cloud vs on-prem */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud ERP vs. On-Premise ERP">
          <CompareTable
            caption="Cloud ERP compared with on-premise ERP"
            headers={["Factor", "Cloud ERP", "On-premise ERP"]}
            rows={cloudVsOnPremRows}
          />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#bfdbfe] bg-[#eff6ff] p-5 text-base leading-7 text-muted-foreground">
            <Cloud className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>
              A hybrid approach is also common: the ERP runs in the cloud while specific systems,
              such as shop-floor equipment or a legacy database, stay on-premise and connect
              through secure integrations. For most new builds, cloud ERP software is the
              practical default, but the decision should follow your security, connectivity and
              IT ownership requirements.
            </p>
          </div>
        </Section>

        {/* Custom vs ready-made */}
        <Section id="custom-erp" eyebrow="Build or buy" title="Custom ERP Software vs. Ready-Made ERP">
          <CompareTable
            caption="Ready-made (off-the-shelf) ERP compared with custom ERP software"
            headers={["", "Ready-made ERP (off-the-shelf)", "Custom ERP software"]}
            rows={customVsReadyRows}
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <H3>When Custom ERP Development Makes Sense</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Consider a custom or semi-custom ERP when:
              </p>
              <CheckList items={customReasons} className="mt-5" />
            </div>
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                If that describes your situation, our{" "}
                <Link href={erpLinks.customErp.href} className="font-medium text-white underline underline-offset-4">
                  {erpLinks.customErp.anchor}
                </Link>{" "}
                work through enterprise software engagements covers the full lifecycle, from
                requirements and architecture to phased delivery and cutover.
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                For many businesses the best answer is a hybrid: a proven core for standard
                accounting plus custom modules and integrations for what makes them different.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b1733]"
              >
                Explore Custom ERP Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* Integration */}
        <Section id="integration" eyebrow="Connected systems" title="ERP Integration Capabilities">
          <Prose>
            <p>
              An ERP is only as useful as the data flowing into and out of it. Typical integrations
              include:
            </p>
          </Prose>
          <DiagramFigure
            image={erpImages.integration}
            caption="The ERP core and API layer, connected to the systems around it"
            className="mt-8"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map(([title, text]) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <Plug className="h-4 w-4" style={{ color: ACCENT }} aria-hidden />
                <p className="mt-3 font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Integration architecture often decides whether an ERP project succeeds. Clickmasters
            designs integrations with REST and GraphQL APIs and event streaming where real-time
            sync matters, with retry logic, monitoring and clear ownership of each data field. Our{" "}
            <BodyLink link={erpLinks.api} /> team builds and maintains these connections so data
            moves reliably between your ERP and the rest of your stack.
          </p>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Visibility" title="ERP Dashboards, Analytics and Reporting">
          <Prose>
            <p>
              Reporting is where an ERP proves its value to leadership. A well-designed ERP
              reporting layer includes:
            </p>
          </Prose>
          <TitledList items={reporting} icon={BarChart3} className="mt-8 md:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Security */}
        <Section id="security" eyebrow="Data protection" title="ERP Security, Permissions and Data Management">
          <Prose>
            <p>
              An ERP holds your most sensitive operational and financial data, so security has to
              be designed in from day one:
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <CheckList items={security} />
            <AppFigure
              image={erpImages.permissions}
              caption="Role permissions by module, a separation-of-duties check and a permission change log"
            />
          </div>
        </Section>

        {/* Implementation */}
        <Section id="implementation" eyebrow="Delivery" title="ERP Implementation Process">
          <Prose>
            <p>
              ERP implementation is a business change project, not just a software installation. A
              disciplined, phased process lowers risk:
            </p>
          </Prose>
          <DiagramFigure
            image={erpImages.timeline}
            caption="Eight phased steps from discovery to hypercare"
            className="mt-8"
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  Step {index + 1}
                </span>
                <p className="mt-2 font-semibold leading-snug">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  <LinkedText text={step.text} link={step.link} />
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Challenges */}
        <Section
          id="challenges"
          eyebrow="Lessons learned"
          title="Common ERP Implementation Challenges and How to Address Them"
        >
          <CompareTable
            caption="Common ERP implementation challenges and how to address them"
            headers={["Challenge", "How to address it"]}
            rows={challengeRows}
          />
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="ERP Software Cost Factors">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-base leading-7 text-muted-foreground">
                ERP cost varies widely. These factors drive it:
              </p>
              <CheckList items={costFactors} className="mt-5" />
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  Published planning range · custom modular ERP
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">$80,000–$200,000</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">About 8–14 months</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Your actual quote depends on scope, and smaller phase-one releases can cost less.
                  We agree on scope, timeline and a quote before development starts.
                </p>
              </div>
              <div>
                <H3>Measuring ERP ROI</H3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  Set baselines before go-live so you can measure value afterwards. Useful measures
                  include days to close the books, hours spent on manual data entry and
                  reconciliation, inventory accuracy and carrying costs, order cycle time, on-time
                  delivery and the share of decisions made from live data instead of exports.
                  Returns vary by business. Measure them; don&apos;t assume them.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Selection */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose the Right ERP Software">
          <Prose>
            <p>
              A large enterprise resource planning ERP system adds another test: multi-entity
              close, many warehouses and controls that still let people do their jobs. Use these
              questions when you compare ERP software solutions, whether packaged or custom:
            </p>
          </Prose>
          <TitledList items={selectionQuestions} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <H3 className="mt-14">What&apos;s Next for ERP Systems</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            ERP platforms keep moving toward cloud-first, API-first architectures and composable
            designs, where focused modules connect through APIs instead of living in one monolith.
            AI-assisted features such as demand forecasting, invoice data capture and anomaly
            detection are increasingly part of the conversation. They are most useful when the
            ERP&apos;s underlying data is clean and well structured, so design your data model with
            future automation in mind.
          </p>
        </Section>

        {/* How we help */}
        <Section id="why-us" eyebrow="Your partner" title="How Clickmasters Can Help With Your ERP Software">
          <Prose>
            <p>
              Clickmasters is a remote-first software development company serving businesses across
              the United States. For ERP projects we bring:
            </p>
          </Prose>
          <TitledList items={howWeHelp} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-10 rounded-3xl border border-border bg-white p-6">
            <p className="text-sm leading-7 text-muted-foreground">
              Our engineers work with proven enterprise technologies, chosen to fit your
              environment rather than our preferences:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li key={tech} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Our Business &amp; Enterprise Management products, including HRMS, payroll, supply chain,
            document management, business process management and asset management, can also be
            planned as modules of your ERP or connected to it as standalone systems.
          </p>
        </Section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About ERP Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {erpFaqs.map((faq, index) => (
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
                Plan Your ERP With Clickmasters
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re replacing spreadsheets and entry-level accounting software,
                extending an ERP that no longer fits, or planning a custom ERP from the ground up,
                the first step is the same: a clear picture of your processes, data, integrations
                and priorities.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how your business runs today, which systems you use and where the friction
                is. We&apos;ll come back with a practical recommendation (build, extend or
                integrate), the modules and integrations involved, and a scoped next step.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request an ERP Development Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Build, extend or integrate",
                  "The modules involved",
                  "Integrations and data migration",
                  "A scoped next step",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#93c5fd] text-[#0b1733]">
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
            Discuss Your ERP Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
