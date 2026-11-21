import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardList,
  Cloud,
  Contact,
  Gauge,
  KanbanSquare,
  LifeBuoy,
  ListChecks,
  Lock,
  Mail,
  Megaphone,
  Plug,
  ShieldCheck,
  Smartphone,
  UserPlus,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  automationRows,
  benefits,
  challengeRows,
  cloudVsOnPremRows,
  comparisonRows,
  costFactors,
  CRM_PATH,
  crmDescription,
  crmFaqs,
  crmImages,
  crmLinks,
  crmTitle,
  customReasons,
  customVsReadyRows,
  features,
  howItWorks,
  howWeHelp,
  implementationSteps,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrations,
  leadSteps,
  moduleRows,
  pipelinePoints,
  PRODUCT_NAME,
  reportingRoles,
  retention,
  security,
  selectionQuestions,
  signs,
  spreadsheetRows,
  threeJobs,
  type CrmFeature,
  type LinkSpec,
} from "./crm-data";

export { CRM_PATH, crmDescription, crmTitle, crmImages };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Contact,
  Gauge,
  KanbanSquare,
  LifeBuoy,
  ListChecks,
  Mail,
  Megaphone,
  Plug,
  Smartphone,
  UserPlus,
  Workflow,
};

const ACCENT = "#7c3aed";
const DARK = "#170f33";

export function crmSchema() {
  const url = pageUrl(CRM_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: crmTitle,
        description: crmDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(crmImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "CRM software development",
        description:
          "Design, development, integration and support of CRM systems for lead management, sales pipelines, customer communication and service.",
        url,
        image: pageUrl(crmImages.dashboard.src),
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
          { "@type": "ListItem", position: 4, name: "CRM Software", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: crmFaqs.map((faq) => ({
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
  { href: "#what-is-crm", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#crm-features", label: "Features" },
  { href: "#lead-management", label: "Lead management" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#automation", label: "Automation" },
  { href: "#reporting", label: "Reporting" },
  { href: "#industries", label: "Industries" },
  { href: "#integrations", label: "Integrations" },
  { href: "#custom-crm", label: "Custom vs ready-made" },
  { href: "#implementation", label: "Implementation" },
  { href: "#cost", label: "Cost" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#170f33] shadow-xl shadow-violet-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> crm.example / concept
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

function CtaPair({ light = false, secondary }: { light?: boolean; secondary: { label: string; href: string } }) {
  const secondaryClass = `inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border hover:bg-secondary"}`;
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#170f33]" : "bg-primary text-primary-foreground"}`}
      >
        Discuss Your CRM Requirements
        <ArrowRight className="h-4 w-4" />
      </Link>
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

function NumberedSteps({ items }: { items: readonly string[] }) {
  return (
    <ol className="grid gap-3">
      {items.map((step, index) => (
        <li key={step} className="flex gap-4 text-base leading-7 text-muted-foreground">
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
            style={{ backgroundColor: "#ede9fe", color: ACCENT }}
          >
            {index + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}

function FeatureCard({ feature }: { feature: CrmFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ede9fe]">
          <Icon className="h-5 w-5 text-[#7c3aed]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature.does}</p>
      <dl className="mt-4 grid gap-2 text-sm leading-6">
        <div className="rounded-xl bg-[#fef2f2] px-3 py-2">
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b91c1c]">Problem it solves</dt>
          <dd className="text-muted-foreground">{feature.problem}</dd>
        </div>
        <div className="rounded-xl bg-[#f5f3ff] px-3 py-2">
          <dt className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
            Impact
          </dt>
          <dd className="text-muted-foreground">{feature.impact}</dd>
        </div>
      </dl>
    </article>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== CRM_PATH) ?? [];

export default function CrmPage() {
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
              <li className="text-foreground">CRM Software</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                {INDUSTRY_LABEL}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Customer Relationship Management (CRM) Software Built Around How Your Team Sells
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Leads arrive from the website, email, events and referrals, then scatter across
                  inboxes, spreadsheets and individual reps&apos; memories. Follow-ups slip, managers
                  can&apos;t see the real pipeline, and when an account changes hands, its history
                  goes with the person who left.
                </p>
                <p>
                  Customer relationship management CRM software puts every lead, contact, deal and
                  conversation in one shared system, so sales, marketing and service teams work from
                  the same customer record. Clickmasters designs, builds and integrates customer
                  relationship management software CRM for US businesses whose sales process
                  doesn&apos;t fit a generic template, or whose current CRM has turned into another
                  place to enter data.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "See CRM Features", href: "#crm-features" }} />
              </div>
            </div>
            <AppFigure
              image={crmImages.dashboard}
              caption="Sales overview: pipeline by stage, leads by source, tasks due today and recent activity"
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
        <Section id="what-is-crm" eyebrow="Definition" title="What Is Customer Relationship Management (CRM) Software?">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <Prose>
                <p>
                  What is CRM customer relationship management? It is the practice of keeping every
                  interaction a business has with prospects and customers on one record. Customer
                  relationship management software explained simply: it captures who they are, how
                  they found you, what they&apos;ve discussed with your team, what they&apos;ve bought,
                  and what should happen next.
                </p>
                <p>A CRM platform typically does three jobs:</p>
              </Prose>
              <ol className="mt-5 grid gap-3">
                {threeJobs.map(([title, text], index) => (
                  <li key={title} className="rounded-2xl border border-border bg-white p-4">
                    <p className="flex items-center gap-3 font-semibold">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {index + 1}
                      </span>
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                The result is a shared memory for the business. Anyone with the right permissions
                can open an account and understand the relationship in a minute, not after a round of
                emails.
              </p>
            </div>
            <DiagramFigure
              image={crmImages.lifecycle}
              caption="Lead → opportunity → customer → onboarding → support → renewal, on one record"
            />
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How CRM Software Works">
          <Prose>
            <p>
              At its core, a customer relationship management CRM system is a structured database
              with workflows and automation on top:
            </p>
          </Prose>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {howItWorks.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
          <Note>
            Because every team writes to the same records, a marketing campaign, a sales call and a
            support ticket all appear on one timeline for that customer.
          </Note>
        </Section>

        {/* Why */}
        <Section id="why-crm" eyebrow="When to act" title="Why Businesses Use CRM Software">
          <Prose>
            <p>Most companies adopt CRM when informal tools stop scaling. Typical signs:</p>
          </Prose>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <li key={sign} className="flex gap-3 rounded-2xl border border-border bg-white p-5 text-sm leading-6 text-muted-foreground">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#d97706]" aria-hidden />
                {sign}
              </li>
            ))}
          </ul>
          <H3 className="mt-14">Spreadsheets vs. CRM Software</H3>
          <CompareTable
            caption="Spreadsheets and inboxes compared with CRM software"
            headers={["", "Spreadsheets and inboxes", "CRM software"]}
            rows={spreadsheetRows}
          />
        </Section>

        {/* Features */}
        <Section id="crm-features" eyebrow="12 core capabilities" title="CRM Software Features">
          <Prose>
            <p>
              The capabilities below are standard across customer relationship management software
              platforms. A customer relationship management CRM software system still treats each
              one as a scope decision: some are configured, some are built custom, and some are
              delivered by integrating a tool you already use. Your requirements, not a fixed
              product edition, decide what&apos;s included.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </Section>

        {/* Modules */}
        <Section id="modules" eyebrow="Scope" title="CRM Modules and Capabilities at a Glance">
          <CompareTable
            caption="CRM modules, typical scope and primary users"
            headers={["Module", "Typical scope", "Primary users"]}
            rows={moduleRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Many businesses start with the sales module and add marketing, service or portal
            capabilities in later phases. Those customer relationship management CRM software
            applications should still share one customer record.
          </p>
        </Section>

        {/* Lead management */}
        <Section id="lead-management" eyebrow="First touch to qualified" title="Lead Management and Lead Tracking in Practice">
          <Prose>
            <p>
              Here&apos;s how a well-designed CRM connects the early stages of the customer
              lifecycle. The exact rules are configured or built for your process:
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <NumberedSteps items={leadSteps} />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Scoring can be rules-based, or it can use AI models that score inbound leads against
                your ideal customer profile using company data and engagement signals. AI scoring
                works best once you have enough historical win/loss data to validate it. Clickmasters
                builds this kind of scoring as part of its <BodyLink link={crmLinks.ai} />, with
                human review where judgment matters.
              </p>
            </div>
            <AppFigure
              image={crmImages.leads}
              caption="Lead list with score, source, owner and status, plus the routing rule and response timer"
            />
          </div>
        </Section>

        {/* Pipeline */}
        <Section id="pipeline" eyebrow="Deals" title="Sales Pipeline and Opportunity Management">
          <Prose>
            <p>Once a lead is qualified, the opportunity becomes the center of the sales process:</p>
          </Prose>
          <div className="mt-8">
            <AppFigure
              image={crmImages.pipeline}
              caption="Kanban pipeline: deals by stage with amounts, close dates, owners and a stalled-deal flag"
            />
          </div>
          <TitledList items={pipelinePoints} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <Note>
            For complex B2B sales, pipeline management can extend to territories and quotas,
            multi-contact buying committees, quote and proposal generation, and contract tracking.
          </Note>
        </Section>

        {/* Retention */}
        <Section id="retention" eyebrow="After the sale" title="Customer Communication, Engagement and Retention">
          <Prose>
            <p>
              Revenue doesn&apos;t end at &quot;closed won.&quot; A good customer relationship
              management CRM software experience keeps the relationship visible after the sale:
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <AppFigure
              image={crmImages.profile}
              caption="Customer 360: key contacts, open deals and tickets, lifetime value and one activity timeline"
            />
            <TitledList items={retention} />
          </div>
        </Section>

        {/* Automation */}
        <Section id="automation" eyebrow="Less admin" title="CRM Workflow Automation">
          <Prose>
            <p>
              Automation removes the repetitive steps that make reps avoid the CRM. Common examples:
            </p>
          </Prose>
          <CompareTable
            caption="CRM automation triggers and actions"
            headers={["Trigger", "Automated action"]}
            rows={automationRows}
          />
          <div className="mt-8">
            <AppFigure
              image={crmImages.workflow}
              caption="Workflow builder: a won deal creates onboarding tasks, syncs to ERP and notifies finance"
            />
          </div>
          <Note>
            Automations should be documented, testable and owned by someone. Too many hidden rules
            make a CRM unpredictable.
          </Note>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Visibility" title="CRM Reporting, Analytics and Dashboards">
          <Prose>
            <p>Good CRM reporting answers specific questions for specific roles:</p>
          </Prose>
          <TitledList items={reportingRoles} icon={BarChart3} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <div className="mt-8">
            <AppFigure
              image={crmImages.analytics}
              caption="Analytics: stage conversion, sales cycle length and forecast vs. target by rep"
            />
          </div>
          <Note>
            Reports are only as reliable as the data behind them. Required fields, validation rules
            and simple data entry matter as much as the dashboards. For deeper analysis, CRM data can
            also be fed into a data warehouse or BI tool.
          </Note>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of CRM Software">
          <Prose>
            <p>
              These benefits are realistic when the CRM fits your process and your team uses it
              consistently:
            </p>
          </Prose>
          <TitledList items={benefits} icon={ShieldCheck} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Results depend on data quality, adoption and process design. Track them with clear
            baselines rather than assuming them.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="CRM Software for Different Industries">
          <Prose>
            <p>
              CRM requirements change significantly by industry. Customer relationship management
              software for healthcare, for example, has to support referral outreach without turning
              the clinical record into a sales database. The core objects stay the same, but the
              pipeline, data and workflows don&apos;t:
            </p>
          </Prose>
          <CompareTable
            caption="What a CRM needs to handle by industry"
            headers={["Industry", "What the CRM needs to handle"]}
            rows={industryRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            For property-focused teams, our dedicated <BodyLink link={crmLinks.realEstate} /> covers
            buyer and seller leads, listings and agent follow-ups in a structure designed for
            brokerages.
          </p>
          <Note>
            Regulatory requirements (for example HIPAA, financial-industry recordkeeping, or US
            privacy and marketing laws such as CCPA, CAN-SPAM and TCPA) depend on your business and
            data. They should be validated with your compliance advisors during discovery. Using a
            CRM doesn&apos;t make a business compliant on its own.
          </Note>
        </Section>

        {/* Comparisons */}
        <Section id="comparisons" eyebrow="Related software" title="How CRM Compares With Related Business Software">
          <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
            <h3 className="text-2xl font-semibold tracking-tight">CRM vs. ERP</h3>
            <p className="mt-3 max-w-4xl text-base leading-7 text-white/85">
              CRM manages the customer-facing side of the business: leads, opportunities,
              communication and service. ERP manages operations and finance: orders, inventory,
              purchasing, production and accounting. They meet at the point of sale. A won deal in
              the CRM becomes a sales order in{" "}
              <Link href={crmLinks.erp.href} className="font-medium text-white underline underline-offset-4">
                {crmLinks.erp.anchor}
              </Link>
              , and order status, invoices and payment information flow back so sales can see them.
            </p>
          </div>
          <H3 className="mt-14">Other Comparisons</H3>
          <CompareTable caption="CRM compared with related software" headers={["Comparison", "Key difference"]} rows={comparisonRows} />
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="CRM Integrations">
          <Prose>
            <p>A CRM is most valuable when it&apos;s connected. Typical integration categories:</p>
          </Prose>
          <DiagramFigure
            image={crmImages.integration}
            caption="The CRM at the center, connected to the systems around it through APIs, webhooks and sync"
            className="mt-8"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {integrations.map(([title, text]) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <Plug className="h-4 w-4" style={{ color: ACCENT }} aria-hidden />
                <p className="mt-3 font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Each integration needs clear decisions about which system owns which field, how
            conflicts are resolved and what happens when a sync fails. Our{" "}
            <BodyLink link={crmLinks.api} /> team designs and builds these connections, including
            bidirectional sync with established platforms such as Salesforce and HubSpot when
            you&apos;re extending a CRM rather than replacing it.
          </p>
        </Section>

        {/* Cloud vs on-prem */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud CRM vs. On-Premise CRM">
          <CompareTable
            caption="Cloud CRM compared with on-premise CRM"
            headers={["Factor", "Cloud CRM", "On-premise CRM"]}
            rows={cloudVsOnPremRows}
          />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#ddd6fe] bg-[#f5f3ff] p-5 text-base leading-7 text-muted-foreground">
            <Cloud className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>
              For most US businesses, cloud CRM is the practical default. On-premise or
              private-cloud deployment makes sense when policy or regulation requires tighter
              control.
            </p>
          </div>
        </Section>

        {/* Custom vs ready-made */}
        <Section id="custom-crm" eyebrow="Build or buy" title="Custom CRM vs. Ready-Made CRM">
          <CompareTable
            caption="Off-the-shelf CRM compared with custom CRM software"
            headers={["", "Off-the-shelf CRM", "Custom CRM software"]}
            rows={customVsReadyRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Customer relationship management software companies and customer relationship
            management software providers usually sell a general pipeline. A third path is often
            the right one: extend an existing CRM with customer relationship management CRM apps,
            portals and integrations rather than replacing it.
          </p>
        </Section>

        {/* When custom */}
        <Section id="when-custom" eyebrow="Decision point" title="When to Consider Custom CRM Development">
          <Prose>
            <p>Custom CRM software is worth evaluating when:</p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={customReasons} icon={Zap} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                Our{" "}
                <Link href={crmLinks.customCrm.href} className="font-medium text-white underline underline-offset-4">
                  {crmLinks.customCrm.anchor}
                </Link>{" "}
                work is delivered through enterprise software engagements. We build CRM platforms
                for complex B2B sales cycles, including multi-stage pipelines, territory and quota
                management, CPQ workflows, contract lifecycle management and customer health
                scoring, on your data model rather than a vendor&apos;s.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#170f33]"
              >
                Build a CRM Around Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* Security */}
        <Section id="security" eyebrow="Data protection" title="CRM Security and Data Management">
          <Prose>
            <p>Customer data is sensitive and valuable. A professionally built CRM includes:</p>
          </Prose>
          <CheckList items={security} className="mt-6 max-w-4xl md:grid-cols-2" />
        </Section>

        {/* Implementation */}
        <Section id="implementation" eyebrow="Delivery" title="CRM Implementation Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map(([title, text], index) => (
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

        {/* Challenges */}
        <Section id="challenges" eyebrow="Lessons learned" title="CRM Implementation Challenges and How to Address Them">
          <CompareTable
            caption="CRM implementation challenges and how to address them"
            headers={["Challenge", "How to address it"]}
            rows={challengeRows}
          />
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="CRM Software Cost Factors">
          <Prose>
            <p>CRM cost depends on the approach and the scope:</p>
          </Prose>
          <TitledList items={costFactors} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#ddd6fe] bg-[#f5f3ff] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                How pricing works
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Off-the-shelf CRMs are usually priced per user per month, with costs rising by tier
                and add-on. Custom CRM projects are scoped and quoted individually. Clickmasters
                agrees on scope, timeline and quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <H3>Measuring CRM ROI</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Set baselines before launch, then track lead response time, lead-to-opportunity and
                opportunity-to-win conversion, sales cycle length, forecast accuracy, time spent on
                manual data entry, renewal rate and customer satisfaction. ROI comes from measured
                changes in these numbers. No CRM guarantees it.
              </p>
            </div>
          </div>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose the Right CRM Software">
          <Prose>
            <p>Ask these questions when you evaluate CRM systems:</p>
          </Prose>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <p className="flex items-center gap-3 font-semibold">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#ede9fe", color: ACCENT }}
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

        {/* How we help */}
        <Section id="why-us" eyebrow="Your partner" title="How Clickmasters Can Help">
          <Prose>
            <p>
              Clickmasters is a remote-first software development company working with businesses
              across the United States. For CRM projects we offer:
            </p>
          </Prose>
          <CheckList items={howWeHelp} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Our Business &amp; Enterprise Management products, including ERP, HRMS, document
            management and business process management, can be connected to your CRM so customer,
            operational and financial data work together.
          </p>
        </Section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About CRM Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {crmFaqs.map((faq, index) => (
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
                Build a CRM Around the Way Your Business Sells
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re moving off spreadsheets, untangling an over-customized CRM,
                connecting your CRM to ERP and billing, or planning a custom platform, the first step
                is a clear map of your customer lifecycle, data and integrations.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how your team captures leads, sells and supports customers today. We&apos;ll
                recommend the right approach (configure, extend or build), outline the modules and
                integrations involved, and scope the next step.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request a CRM Development Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["Configure, extend or build", "The modules involved", "Integrations and data migration", "A scoped next step"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c4b5fd] text-[#170f33]">
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
            Discuss Your CRM Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
