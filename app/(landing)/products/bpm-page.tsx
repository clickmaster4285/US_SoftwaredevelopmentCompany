import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  CheckCheck,
  ChevronRight,
  ClipboardList,
  GitBranch,
  LayoutDashboard,
  ListTodo,
  Lock,
  PenTool,
  Plug,
  ScrollText,
  ShieldCheck,
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
  aiPoints,
  approvalRows,
  benefits,
  BPM_PATH,
  bpmDescription,
  bpmFaqs,
  bpmImages,
  bpmLinks,
  bpmTitle,
  challengeRows,
  cloudVsOnPremRows,
  costFactors,
  customVsReadyRows,
  departmentRows,
  features,
  governancePoints,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrationRows,
  lifecycle,
  metricRows,
  modelingPoints,
  orchestrationPoints,
  overviewPoints,
  problemRows,
  processSteps,
  PRODUCT_NAME,
  relatedSoftwareRows,
  rulePoints,
  selectionQuestions,
  transformationPoints,
  whyClickmasters,
  type BpmFeature,
  type LinkSpec,
} from "./bpm-data";

export { BPM_PATH, bpmDescription, bpmTitle, bpmImages };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Brain,
  CheckCheck,
  GitBranch,
  LayoutDashboard,
  ListTodo,
  PenTool,
  Plug,
  ScrollText,
  ShieldCheck,
  Workflow,
};

const ACCENT = "#0f766e";
const DARK = "#062421";

export function bpmSchema() {
  const url = pageUrl(BPM_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: bpmTitle,
        description: bpmDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(bpmImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Business Process Management Software (BPM)",
        serviceType: "Business process management software development",
        description:
          "Design, development and integration of business process management and workflow automation software for process modeling, approvals, business rules, monitoring and analytics.",
        url,
        image: pageUrl(bpmImages.dashboard.src),
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
        mainEntity: bpmFaqs.map((faq) => ({
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
  { href: "#what-is-bpm", label: "What it is" },
  { href: "#lifecycle", label: "Lifecycle" },
  { href: "#bpm-features", label: "Features" },
  { href: "#modeling", label: "Modeling" },
  { href: "#approvals", label: "Approvals" },
  { href: "#rules", label: "Rules" },
  { href: "#monitoring", label: "Monitoring" },
  { href: "#ai", label: "AI automation" },
  { href: "#industries", label: "Industries" },
  { href: "#integrations", label: "Integrations" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#062421] shadow-xl shadow-teal-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> processes.example / concept
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

const PRIMARY_CTA = "Discuss Your Business Process Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#062421]" : "bg-primary text-primary-foreground"}`}
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

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5 text-sm leading-7 text-[#78350f]">
      <AlertTriangle className="mt-1 h-5 w-5 shrink-0" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: BpmFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ccfbf1]">
          <Icon className="h-5 w-5 text-[#0f766e]" aria-hidden />
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
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== BPM_PATH) ?? [];

export default function BpmPage() {
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
                Business Process Management Software to Design, Automate and Improve How Work Gets Done
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Purchase requests wait in someone&apos;s inbox. New-hire setup depends on who remembers
                  which steps. Customer exceptions bounce between departments, and nobody can say where a
                  request is stuck or how long the process really takes. As a business grows, informal
                  processes become its biggest bottleneck.
                </p>
                <p>
                  Business process management software gives your organization one place to design how
                  work should flow, run it consistently across people and systems, see where it slows
                  down, and improve it over time. Clickmasters is a custom software development company
                  that designs, builds and integrates BPM and workflow automation platforms for US
                  businesses. Each one is built around your real processes, approval rules and existing
                  systems, not a generic template.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore BPM Features", href: "#bpm-features" }} />
              </div>
            </div>
            <AppFigure image={bpmImages.dashboard} caption="See every process, every step" priority />
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
        <Section id="overview" eyebrow="Overview" title="Business Process Management Software Overview">
          <Prose>
            <p>BPM software combines four capabilities that are often scattered across tools:</p>
          </Prose>
          <NumberedCards items={overviewPoints} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            It sits <strong className="text-foreground">across</strong> your business applications. ERP,
            CRM, HRMS and document systems hold the records, while BPM coordinates the work that moves
            between them.
          </Note>
          <div className="mt-8">
            <PrimaryCta label="Talk to Our Software Development Team" />
          </div>
        </Section>

        {/* What is */}
        <Section id="what-is-bpm" eyebrow="Definition" title="What Is Business Process Management Software?">
          <Prose>
            <p>
              Business process management (BPM) is a management discipline for designing, executing,
              monitoring and continuously improving the processes an organization uses to deliver
              outcomes, such as order-to-cash, procure-to-pay, hire-to-retire, claim handling or customer
              onboarding.
            </p>
            <p>
              <strong className="text-foreground">BPM software</strong>, also called a business process
              management system (BPMS), is the technology that supports that discipline. It provides
              process modeling tools, a workflow engine that runs process instances, a rules engine for
              decisions, task and approval management, integrations with other systems, and analytics on
              process performance. Business process management BPM software is that technology with
              the acronym written beside the name. Business process management system software is the
              engine that runs each case. A BPM business process management system is the shorter
              name teams already use for the same engine.
            </p>
            <p>Two terms are often confused with BPM:</p>
          </Prose>
          <div className="mt-6 grid max-w-5xl gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-5">
              <p className="font-semibold">Workflow management</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Coordinates the sequence of tasks within a process. It&apos;s a core component of BPM.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-white p-5">
              <p className="font-semibold">Business process automation (BPA)</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Automates specific repetitive steps. BPM decides which steps should be automated, which
                need people, and how the whole process performs.
              </p>
            </article>
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How Does BPM Software Work?">
          <NumberedCards items={howItWorks} className="md:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Why */}
        <Section id="why-bpm" eyebrow="Business problems" title="Why Businesses Need Business Process Management Software">
          <CompareTable
            caption="Process problems, operational impact, how BPM software helps, and an example scenario"
            headers={["Problem", "Operational impact", "How BPM software helps", "Scenario"]}
            rows={problemRows}
          />
          <Note>
            BPM improves consistency and visibility. Results depend on process design, data quality and
            adoption, and there&apos;s no guaranteed productivity gain.
          </Note>
        </Section>

        {/* Lifecycle */}
        <Section id="lifecycle" eyebrow="Discover to improve" title="The Business Process Management Lifecycle">
          <NumberedCards items={lifecycle} className="sm:grid-cols-2 lg:grid-cols-5" />
        </Section>

        {/* Features */}
        <Section id="bpm-features" eyebrow="11 capability areas" title="Core BPM Software Features">
          <Prose>
            <p>
              The capabilities below are{" "}
              <strong className="text-foreground">possible modules and development options</strong>,
              scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters
              product.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build a Custom BPM Solution" />
          </div>
        </Section>

        {/* Modeling */}
        <Section id="modeling" eyebrow="Design" title="Business Process Modeling and Design">
          <Prose>
            <p>Good modeling makes processes understandable to business users and executable for software:</p>
          </Prose>
          <TitledList items={modelingPoints} icon={PenTool} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={bpmImages.designer} caption="Design processes visually" />
          </div>
          <DiagramFigure
            image={bpmImages.bpmn}
            caption="A BPMN model of the same purchase request, with swimlanes, gateways and a timer"
            className="mt-8"
          />
        </Section>

        {/* Orchestration */}
        <Section id="orchestration" eyebrow="Execute" title="Workflow Automation and Orchestration">
          <Prose>
            <p>
              <strong className="text-foreground">Workflow automation</strong> executes predefined steps
              without manual handling. <strong className="text-foreground">Orchestration</strong>{" "}
              coordinates many steps, people and systems so they happen in the right order, with the
              right data, and with recovery when something fails. Business process management
              automation tools are what carry those steps: they assign the task, apply the rule and
              record the result.
            </p>
          </Prose>
          <TitledList items={orchestrationPoints} icon={Workflow} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Approvals */}
        <Section id="approvals" eyebrow="Most common starting point" title="Business Approval and Task Management">
          <Prose>
            <p>Approvals are the most common starting point for BPM:</p>
          </Prose>
          <CompareTable caption="Approval types and typical rules" headers={["Approval type", "Typical rules"]} rows={approvalRows} />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Approvals should support <strong className="text-foreground">delegation</strong> (when the
            approver is out), <strong className="text-foreground">rejection with reasons</strong>,{" "}
            <strong className="text-foreground">resubmission</strong>,{" "}
            <strong className="text-foreground">reminders</strong> and a{" "}
            <strong className="text-foreground">complete history</strong>. When the approval concerns a
            controlled document, such as a policy, SOP or contract, the approved version and its history
            belong in a <BodyLink link={bpmLinks.dms} />. The BPM workflow governs the approval steps.
          </p>
          <div className="mt-8">
            <AppFigure image={bpmImages.approvals} caption="Approvals without the email chase" />
          </div>
          <H3 className="mt-14">Task Management</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            <strong className="text-foreground">Task management</strong> within BPM gives each task an
            owner or queue, a due date, a priority and dependencies, so work moves in the right sequence
            and nothing is invisible. Business process manager software is that view: who owns the
            step, when it is due and what is blocking it.
          </p>
          <div className="mt-8">
            <AppFigure
              image={bpmImages.tasks}
              caption="Task inbox with owners and due dates, plus a tracker for where PR-1042 is now"
            />
          </div>
        </Section>

        {/* Rules */}
        <Section id="rules" eyebrow="Decisions" title="Business Rules and Conditional Workflows">
          <Prose>
            <p>
              A <strong className="text-foreground">business rules engine</strong> keeps decision logic
              separate from the workflow, so policies can change without redesigning the whole process:
            </p>
          </Prose>
          <TitledList items={rulePoints} icon={GitBranch} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <div className="mt-8">
            <AppFigure image={bpmImages.rules} caption="Policy changes without redesigning the process" />
          </div>
          <Note>Keeping rules visible and versioned makes changes auditable and reduces hidden logic.</Note>
        </Section>

        {/* Monitoring */}
        <Section id="monitoring" eyebrow="Measure" title="Process Monitoring and Performance Analytics">
          <CompareTable caption="Process metrics and what they tell you" headers={["Metric", "What it tells you"]} rows={metricRows} />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure image={bpmImages.analytics} caption="Measure, then improve" />
            <AppFigure image={bpmImages.bottleneck} caption="Find where work waits" />
          </div>
          <Note>
            Dashboards should let process owners drill from a KPI to the individual instances behind it.
            For deeper analysis, process data can be exported to BI tools. Process mining techniques,
            which reconstruct processes from system event logs, can add further insight when the source
            systems record suitable event data.
          </Note>
        </Section>

        {/* Governance */}
        <Section id="governance" eyebrow="Control" title="Process Governance and Audit Trails">
          <TitledList items={governancePoints} icon={ScrollText} className="sm:grid-cols-2 lg:grid-cols-3" />
          <Note>
            These controls support internal audits and regulatory reviews. Compliance itself depends on
            your policies, configuration and operating practices.
          </Note>
        </Section>

        {/* Departments */}
        <Section id="departments" eyebrow="By team" title="Departmental Workflow Automation">
          <CompareTable caption="Example processes by department" headers={["Department", "Example processes"]} rows={departmentRows} />
        </Section>

        {/* AI */}
        <Section id="ai" eyebrow="Applied AI" title="AI-Powered Business Process Automation">
          <Prose>
            <p>AI extends BPM where processes involve unstructured information or pattern recognition:</p>
          </Prose>
          <TitledList items={aiPoints} icon={Brain} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={bpmImages.ai} caption="AI with human oversight" />
          </div>
          <Caution>
            <strong>Limits matter.</strong> AI works best on well-defined processes with good data.
            Recommendations and extractions need validation, sensitive decisions need human approval, and
            every automated action should be logged. Sometimes a simple rule beats a model. Clickmasters
            builds these capabilities as <BodyLink link={bpmLinks.ai} />, with confidence thresholds,
            human review and audit logging.
          </Caution>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Business Process Management Software">
          <Prose>
            <p>When processes are well designed and consistently used, organizations typically see:</p>
          </Prose>
          <CheckList items={benefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Measure benefits against your own baseline. Improvements depend on process design and
            adoption.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="Industry-Specific BPM Solutions">
          <CompareTable
            caption="BPM challenges, typical workflows and relevant modules by industry"
            headers={["Industry", "Common challenges", "Typical workflows", "Relevant modules"]}
            rows={industryRows}
          />
          <div className="mt-8">
            <PrimaryCta />
          </div>
        </Section>

        {/* SMB / Enterprise */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <article id="small-business" className="scroll-mt-28 rounded-3xl border border-border bg-white p-6 md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">BPM Software for Small Businesses</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  Small businesses usually need{" "}
                  <strong className="text-foreground">approval workflows, request forms, task assignment,
                  reminders and simple dashboards</strong> for a handful of core processes. They don&apos;t
                  need an enterprise modeling suite. Start with the process that causes the most chasing,
                  often purchasing, expenses or onboarding. Standardize it, then expand.
                </p>
              </article>
              <article id="enterprise" className="scroll-mt-28 rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Enterprise Business Process Management Software
                </h2>
                <p className="mt-4 text-base leading-7 text-white/80">
                  Enterprises need end-to-end orchestration across departments and many systems, governance
                  and versioning at scale, a rules engine, SSO and granular permissions, high-volume
                  execution, SLA management, robust error handling and process analytics. Architecture
                  choices, such as the workflow engine, event-driven integration and monitoring, matter as
                  much as the user interface.
                </p>
              </article>
            </div>
            <div className="mt-8">
              <AppFigure
                image={bpmImages.enterprise}
                caption="End-to-end processes, owners and integrated systems across the organization"
              />
            </div>
          </div>
        </section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise BPM Software">
          <CompareTable
            caption="Cloud-based BPM compared with on-premise BPM"
            headers={["Factor", "Cloud-based BPM", "On-premise BPM"]}
            rows={cloudVsOnPremRows}
          />
        </Section>

        {/* Custom */}
        <Section id="custom-vs-ready-made" eyebrow="Build or buy" title="Custom BPM Software vs. Ready-Made Solutions">
          <CompareTable
            caption="Ready-made BPM, workflow or low-code platforms compared with custom BPM software"
            headers={["", "Ready-made BPM, workflow or low-code platforms", "Custom BPM software"]}
            rows={customVsReadyRows}
          />
          <Note>
            Many organizations combine both: low-code tools for simple departmental flows, and custom BPM
            for core cross-system processes.
          </Note>
        </Section>

        {/* Related software */}
        <Section id="related-software" eyebrow="Where BPM fits" title="BPM vs. Workflow Management, Automation and Related Business Software">
          <CompareTable
            caption="BPM compared with workflow management, automation and related business software"
            headers={["Software", "Focus", "Relationship to BPM"]}
            rows={relatedSoftwareRows}
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            For example, <BodyLink link={bpmLinks.erp} /> holds the purchase order and the budget, while
            the BPM process decides who must approve the request, in what order, within what time, and
            what happens when it&apos;s rejected.
          </p>
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="BPM Software Integrations">
          <CompareTable caption="BPM integrations" headers={["System", "Typical integration"]} rows={integrationRows} />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#99f6e4] bg-[#f0fdfa] p-5 text-base leading-7 text-muted-foreground">
            <Plug className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>
              Integration design determines whether a BPM platform removes swivel-chair work or adds to
              it. Our <BodyLink link={bpmLinks.api} /> team builds the connectors, webhooks and
              event-driven integrations that let processes read from and write to your systems reliably,
              with monitoring and error handling.
            </p>
          </div>
        </Section>

        {/* Digital transformation */}
        <Section id="digital-transformation" eyebrow="Method" title="Business Process Management and Digital Transformation">
          <Prose>
            <p>
              Digital transformation fails when old processes are simply digitized. BPM provides the
              method: understand the process, redesign it, then automate and measure the improved
              version. Its role in transformation programs is to:
            </p>
          </Prose>
          <TitledList items={transformationPoints} icon={Zap} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
        </Section>

        {/* Challenges */}
        <Section id="challenges" eyebrow="Lessons learned" title="Common BPM Implementation Challenges and Solutions">
          <CompareTable caption="Common BPM implementation challenges and solutions" headers={["Challenge", "Solution"]} rows={challengeRows} />
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose Business Process Management Software">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <p className="flex items-center gap-3 font-semibold">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#ccfbf1", color: ACCENT }}
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
        <Section id="process" eyebrow="Delivery" title="Custom BPM Software Development Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        <Section id="cost" eyebrow="Budgeting" title="Factors That Affect BPM Software Development Cost">
          <TitledList items={costFactors} icon={BarChart3} className="sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            Cost and timeline depend on scope and complexity. Clickmasters agrees on scope, timeline and
            quote before development starts.
          </Note>
        </Section>

        {/* Why Clickmasters */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters for Custom BPM Software Development?">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={whyClickmasters} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5eead4]">
                Workflow and process automation is part of our enterprise work
              </p>
              <p className="mt-3 text-base leading-7 text-white/85">
                Our{" "}
                <Link href={bpmLinks.customBpm.href} className="font-medium text-white underline underline-offset-4">
                  {bpmLinks.customBpm.anchor}
                </Link>{" "}
                work runs through enterprise engagements that build approval routing engines, document
                generation pipelines, automated notification systems and integration-triggered workflows
                that replace manual approval chains and cross-department coordination.
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
              Frequently Asked Questions About Business Process Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {bpmFaqs.map((faq, index) => (
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
                Turn Your Business Processes Into a Competitive Advantage
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you need to fix one approval process or orchestrate end-to-end operations across
                departments and systems, the first step is a clear map of how work flows today and where it
                gets stuck.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us about the processes that cause the most delays, rework or chasing. We&apos;ll
                recommend the right approach, outline the workflows and integrations involved, and scope
                the first phase.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request an Enterprise Software Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["The right approach for your processes", "The workflows involved", "Integrations with your systems", "A scoped first phase"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5eead4] text-[#062421]">
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
            Discuss Your Process Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
