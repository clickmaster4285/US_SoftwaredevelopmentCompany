import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCheck,
  ChevronRight,
  ClipboardList,
  Clock,
  Cloud,
  Gift,
  History,
  IdCard,
  Landmark,
  Layers,
  Lock,
  MinusCircle,
  Plug,
  Receipt,
  Scale,
  ShieldCheck,
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
  compareRows,
  costFactors,
  customReasons,
  customVsReadyRows,
  features,
  howWeHelp,
  implementationSteps,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrations,
  layers,
  manualVsAutoRows,
  moduleRows,
  PAYROLL_PATH,
  payrollDescription,
  payrollFaqs,
  payrollImages,
  payrollLinks,
  payrollTitle,
  PRODUCT_NAME,
  reports,
  security,
  selectionQuestions,
  selfService,
  signs,
  spreadsheetRows,
  timeIntegration,
  usContext,
  workflowSteps,
  type LinkSpec,
  type PayrollFeature,
} from "./payroll-data";

export { PAYROLL_PATH, payrollDescription, payrollTitle, payrollImages };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Building2,
  CheckCheck,
  Clock,
  Gift,
  History,
  IdCard,
  Landmark,
  Layers,
  MinusCircle,
  Plug,
  Receipt,
  ShieldCheck,
};

const ACCENT = "#ea580c";
const DARK = "#24140a";

export function payrollSchema() {
  const url = pageUrl(PAYROLL_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: payrollTitle,
        description: payrollDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(payrollImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "Payroll software development",
        description:
          "Design, development and integration of payroll management software for pay setup, processing workflows, approvals, payslips, payroll records and reporting.",
        url,
        image: pageUrl(payrollImages.dashboard.src),
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
        mainEntity: payrollFaqs.map((faq) => ({
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
  { href: "#what-is-payroll-software", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#payroll-features", label: "Features" },
  { href: "#workflow", label: "Pay run workflow" },
  { href: "#time-integration", label: "Time & attendance" },
  { href: "#us-payroll", label: "US payroll context" },
  { href: "#payslips", label: "Payslips" },
  { href: "#reports", label: "Reports" },
  { href: "#integrations", label: "Integrations" },
  { href: "#comparisons", label: "Payroll vs HRMS & ERP" },
  { href: "#implementation", label: "Implementation" },
  { href: "#custom-payroll", label: "Custom payroll" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#24140a] shadow-xl shadow-orange-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> payroll.example / concept
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
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#24140a]" : "bg-primary text-primary-foreground"}`}
      >
        Discuss Your Payroll Requirements
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

function FeatureCard({ feature }: { feature: PayrollFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffedd5]">
          <Icon className="h-5 w-5 text-[#ea580c]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature.does}</p>
      <dl className="mt-4 grid gap-2 text-sm leading-6">
        <div className="rounded-xl bg-[#fef2f2] px-3 py-2">
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b91c1c]">Problem solved</dt>
          <dd className="text-muted-foreground">{feature.problem}</dd>
        </div>
        <div className="rounded-xl bg-[#fff7ed] px-3 py-2">
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
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== PAYROLL_PATH) ?? [];

export default function PayrollPage() {
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
                Payroll Management Software That Brings Order to Every Pay Run
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Every pay period, someone collects timesheets, chases approvals, updates salary
                  changes, applies deductions, checks overtime, produces pay stubs and reconciles
                  everything with accounting, often across spreadsheets, emails and separate systems.
                  As headcount, locations and pay rules grow, that process becomes harder to control
                  and harder to review.
                </p>
                <p>
                  Payroll management software brings employee pay data, calculations, approvals,
                  payslips and payroll records into one structured, auditable workflow. These payroll
                  management solutions replace the spreadsheet cycle. Clickmasters designs, builds
                  and integrates payroll management systems for US businesses that need payroll to
                  fit their pay structures, approval process and existing HR, time and accounting
                  tools.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "See Payroll Features", href: "#payroll-features" }} />
              </div>
            </div>
            <AppFigure
              image={payrollImages.dashboard}
              caption="Payroll management system dashboard: next pay run, status, estimated totals, exceptions and pay groups"
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
        <Section id="what-is-payroll-software" eyebrow="Definition" title="What Is Payroll Management Software?">
          <Prose>
            <p>
              Payroll management software is a system for calculating, reviewing, approving,
              recording and reporting employee pay. The payroll management system meaning is that
              shared workflow. The employee payroll management system meaning is the same record
              from the employee&apos;s side: rate, deductions, payslip and year-to-date totals. It
              holds each employee&apos;s pay setup (pay type, rate or salary, pay frequency, earnings,
              deductions and withholding information), combines it with the inputs for each pay
              period such as hours, overtime, bonuses and adjustments, and produces gross-to-net
              results, payslips, payroll registers and the data needed for payment and accounting.
            </p>
            <p>
              Depending on the approach, payroll software may run calculations itself, prepare and
              send data to a payroll provider that handles calculation, payment and tax filing, or do
              a mix of both. Which model fits depends on your business, not on the software category.
            </p>
          </Prose>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How Payroll Software Works">
          <Prose>
            <p>Payroll management system software has four layers:</p>
          </Prose>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          <Note>
            Each pay run is a dated, locked record. Corrections are made through documented
            adjustments rather than silent edits.
          </Note>
        </Section>

        {/* Why */}
        <Section id="why-payroll-software" eyebrow="When to act" title="Why Businesses Need Payroll Software">
          <Prose>
            <p>Signs that payroll has outgrown spreadsheets or a basic setup:</p>
          </Prose>
          <TitledList items={signs} icon={AlertTriangle} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <H3 className="mt-14">Spreadsheet Payroll vs. Payroll Software</H3>
          <CompareTable
            caption="Spreadsheet payroll compared with payroll management software"
            headers={["", "Spreadsheets and manual steps", "Payroll management software"]}
            rows={spreadsheetRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Payroll management for small business usually starts when one person can no longer
            track overtime, multiple rates and a second location in a spreadsheet.
          </p>
        </Section>

        {/* Features */}
        <Section id="payroll-features" eyebrow="13 core capabilities" title="Payroll Software Features">
          <Prose>
            <p>
              Payroll management software features, and the payroll management system features
              below, are common payroll capabilities. In a Clickmasters project,{" "}
              <strong className="text-foreground">each one is a scope decision</strong>. Some are
              configured to your rules, some are delivered by integrating an existing payroll provider
              or HR, time or accounting system, and some are custom-built. Exact behavior depends on
              your policies, jurisdictions and configuration.
            </p>
          </Prose>
          <div className="mt-10">
            <AppFigure
              image={payrollImages.profile}
              caption="Employee payroll profile: earning and deduction codes, masked identifiers and effective-dated pay history"
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <H3 className="mt-16">Payroll Management Modules at a Glance</H3>
          <CompareTable
            caption="Payroll management modules, scope and primary users"
            headers={["Module", "Scope", "Primary users"]}
            rows={moduleRows}
          />
        </Section>

        {/* Workflow */}
        <Section id="workflow" eyebrow="One pay cycle" title="The Payroll Processing Workflow">
          <Prose>
            <p>
              Payroll workflows vary by company policy, jurisdiction, configuration and integrations.
              A typical cycle looks like this:
            </p>
          </Prose>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map(([title, text], index) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-border bg-white p-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#ffedd5", color: ACCENT }}
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
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            The payroll management system UI should make that review obvious: totals against the
            last run, the exceptions, and who still has to approve.
          </p>
          <div className="mt-10">
            <AppFigure
              image={payrollImages.payRun}
              caption="Pay run review: totals vs. last run, variance list and a multi-level approval chain"
            />
          </div>
          <Note>
            Software can organize and automate data collection, calculation steps, checks, routing,
            document generation and reporting. People stay responsible for the review and approval of
            each run.
          </Note>
        </Section>

        {/* Time integration */}
        <Section id="time-integration" eyebrow="Hours to pay" title="Attendance, Timesheet and Payroll Integration">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <p className="text-base leading-7 text-muted-foreground">
                Payroll time management software is what connects hours to pay for hourly,
                shift-based and multi-location workforces. A good integration:
              </p>
              <CheckList items={timeIntegration} className="mt-5" />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Organizations that need to capture check-ins, shifts and absences can use our{" "}
                <BodyLink link={payrollLinks.attendance} />, which prepares attendance data for
                payroll, or connect the time clocks and scheduling tools they already use.
              </p>
            </div>
            <AppFigure
              image={payrollImages.timeImport}
              caption="Approved time import with job codes, overtime and exceptions flagged before calculation"
            />
          </div>
        </Section>

        {/* US context */}
        <Section id="us-payroll" eyebrow="General information" title="US Payroll Context: Taxes, Deductions and Compensation Workflows">
          <div className="max-w-4xl rounded-2xl border border-[#fde68a] bg-[#fffbeb] px-5 py-4 text-sm leading-7 text-[#78350f]">
            US payroll involves several layers of rules. Payroll software can help businesses organize
            payroll data and configure workflows around applicable requirements.{" "}
            <strong>Businesses should verify their tax and legal obligations with qualified payroll
            professionals.</strong> This section is general information, not tax or legal advice.
          </div>
          <TitledList items={usContext} icon={Scale} className="mt-8 md:grid-cols-2" />
          <Note>
            Payroll tax management software can store W-4 data, maintain deduction rules, apply
            configured tax logic or pass data to a tax engine or payroll provider, produce the
            reports filings depend on, and keep complete records. It does not replace professional
            judgment, and no payroll system should be described as guaranteeing compliance.
          </Note>
        </Section>

        {/* Payslips */}
        <Section id="payslips" eyebrow="Self-service" title="Payslips and Employee Self-Service">
          <Prose>
            <p>
              A payroll management system for employee self-service gives each person secure,
              on-demand access to their pay information. The employee payroll management system
              website is that page: payslips, deductions and year-to-date totals, without an email
              to payroll.
            </p>
          </Prose>
          <CheckList items={selfService} className="mt-6 max-w-4xl md:grid-cols-2" />
          <DiagramFigure
            image={payrollImages.payslip}
            caption="A digital pay statement on mobile and desktop, with earnings, taxes, deductions and YTD totals"
            className="mt-8"
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Self-service should be mobile-friendly for shift and field employees, and protected with
            strong authentication. Online payroll management software lets the payroll team run the
            cycle from a browser. A payroll management system online does the same for an employee
            opening a payslip from home.
          </p>
        </Section>

        {/* Automation */}
        <Section id="automation" eyebrow="Less admin" title="Payroll Automation">
          <Prose>
            <p>Automation removes repetitive steps while leaving judgment and approval with people:</p>
          </Prose>
          <CompareTable caption="Payroll automation triggers and actions" headers={["Trigger", "Automated actions"]} rows={automationRows} />
        </Section>

        {/* Reports */}
        <Section id="reports" eyebrow="Visibility" title="Payroll Reports and Analytics">
          <Prose>
            <p>Useful payroll reporting includes:</p>
          </Prose>
          <TitledList items={reports} icon={BarChart3} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure
              image={payrollImages.summary}
              caption="Monthly summary: labor cost by department and location, reconciled to GL entries"
            />
            <AppFigure
              image={payrollImages.analytics}
              caption="Analytics: overtime hours and gross payroll across the last 12 pay runs"
            />
          </div>
          <Note>
            Reports should respect permissions: managers see their cost centers, and payroll and
            finance see what their roles allow.
          </Note>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Payroll Management Software">
          <Prose>
            <p>When payroll software fits your pay structures and is used consistently, businesses typically see:</p>
          </Prose>
          <CheckList items={benefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Payroll accuracy still depends on correct setup, maintained rules, reliable inputs and
            careful review. Software supports those things but doesn&apos;t guarantee them.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="Payroll Software for Different Industries">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Payroll software for payroll companies, and payroll software for payroll service
            providers, needs multi-client separation, a pay calendar per client and a client portal.
            Payroll services software is that operating layer.
          </p>
          <CompareTable
            caption="Typical payroll considerations by industry"
            headers={["Industry", "Typical payroll considerations"]}
            rows={industryRows}
          />
          <Note>
            Industry and state rules, such as tip credits, prevailing wage or certified payroll, differ
            widely. They should be defined with your payroll and legal advisors and then configured in
            the system.
          </Note>
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Payroll Integrations">
          <Prose>
            <p>Payroll is where HR, time and finance data meet. Common integration categories:</p>
          </Prose>
          <DiagramFigure
            image={payrollImages.integration}
            caption="HRMS and time data flow into payroll; payroll feeds the ledger, the provider and payments"
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
            Each integration needs clear ownership of every field, effective dates, validation before
            payroll runs, and monitoring for failed syncs. Our <BodyLink link={payrollLinks.api} />{" "}
            team designs and builds these connections. Clickmasters&apos; published work includes
            payroll integrations with ADP and BambooHR as part of HR tech products.
          </p>
        </Section>

        {/* Comparisons */}
        <Section id="comparisons" eyebrow="Related software" title="Payroll Software vs. HRMS, ERP and Accounting Software">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <H3>Payroll Software vs. HRMS</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                An HRMS manages people and employment processes: records, hiring, onboarding, leave,
                performance and self-service. Payroll software turns employment and time data into
                pay, deductions, withholding, payslips and payroll records. The HRMS usually owns job
                and compensation changes, and payroll consumes them. Many organizations connect
                payroll to a <BodyLink link={payrollLinks.hrms} /> so every change is entered once
                and arrives with its effective date. A payroll management system in HR should share
                that one employee record, so a hire, a raise or a termination reaches pay without
                being typed again.
              </p>
            </div>
            <div>
              <H3>Payroll Software vs. ERP and Accounting Software</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Accounting software and ERP record financial transactions, including payroll expense
                and liabilities, in the general ledger. They don&apos;t usually manage employee-level
                pay rules. Payroll software performs the employee-level work and sends summarized,
                mapped journal entries to the ledger. Businesses running{" "}
                <BodyLink link={payrollLinks.erp} /> often connect payroll to it for labor-cost
                allocation by department, project or entity.
              </p>
            </div>
          </div>
          <CompareTable
            caption="Payroll software compared with HRMS and accounting software or ERP"
            headers={["", "Payroll software", "HRMS", "Accounting software or ERP"]}
            rows={compareRows}
          />

          <H3 className="mt-14">Manual Payroll vs. Automated Payroll</H3>
          <CompareTable
            caption="Manual payroll compared with automated payroll"
            headers={["", "Manual payroll", "Automated payroll"]}
            rows={manualVsAutoRows}
          />

          <H3 className="mt-14">Cloud Payroll vs. On-Premise Payroll</H3>
          <CompareTable
            caption="Cloud payroll compared with on-premise payroll"
            headers={["Factor", "Cloud payroll", "On-premise payroll"]}
            rows={cloudVsOnPremRows}
          />

          <H3 className="mt-14">Custom Payroll Software vs. Ready-Made Payroll</H3>
          <CompareTable
            caption="Ready-made payroll software or provider compared with custom payroll software"
            headers={["", "Ready-made payroll software or provider", "Custom payroll software"]}
            rows={customVsReadyRows}
          />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#fed7aa] bg-[#fff7ed] p-5 text-base leading-7 text-muted-foreground">
            <Cloud className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>
              A common hybrid is a custom payroll layer for complex pay rules, approvals, reporting
              and integrations, while an established provider handles tax calculation, payment and
              filing.
            </p>
          </div>
        </Section>

        {/* Security */}
        <Section id="security" eyebrow="Pay data" title="Payroll Data Security and Access Control">
          <Prose>
            <p>
              Payroll holds some of the most sensitive data in the business: Social Security numbers,
              bank account details, compensation and garnishment orders. A professionally built
              payroll system includes:
            </p>
          </Prose>
          <CheckList items={security} className="mt-6 max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Implementation */}
        <Section id="implementation" eyebrow="Delivery" title="Payroll Implementation Process">
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
          <H3 className="mt-14">Payroll Implementation Challenges</H3>
          <CompareTable
            caption="Payroll implementation challenges and how to address them"
            headers={["Challenge", "How to address it"]}
            rows={challengeRows}
          />
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Payroll Software Cost Factors">
          <Prose>
            <p>Payroll management system cost depends on:</p>
          </Prose>
          <TitledList items={costFactors} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#fed7aa] bg-[#fff7ed] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                How pricing works
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Ready-made payroll services are usually priced per employee or per pay run, often
                with a base fee. Custom payroll projects are scoped and quoted individually.
                Clickmasters agrees on scope, timeline and quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                Measuring value
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Set baselines for hours spent per pay run, the number of off-cycle corrections, time
                to close payroll in accounting, and payroll-related employee requests. Then track
                changes after launch.
              </p>
            </div>
          </div>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose Payroll Management Software">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Payroll management reviews and roundups of the top payroll management software usually
            compare packaged products. Payroll software vendors and HR payroll software companies
            sell those packages. The useful test is whether the product matches your pay rules. Ask
            for a payroll management system demo of one full pay run: time import, exceptions,
            approval and the payslip an employee would see.
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <p className="flex items-center gap-3 font-semibold">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#ffedd5", color: ACCENT }}
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

        {/* Custom */}
        <Section id="custom-payroll" eyebrow="Decision point" title="Custom Payroll Software Development">
          <Prose>
            <p>Custom payroll software is worth evaluating when:</p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={customReasons} icon={Zap} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                Clickmasters typically designs custom payroll as a layer that owns your pay rules,
                approvals, self-service, reporting and integrations, while connecting to an
                established provider or tax data source for tax tables, filing and payment. This
                reduces risk instead of rebuilding regulated tax logic from scratch.
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                Our{" "}
                <Link href={payrollLinks.customPayroll.href} className="font-medium text-white underline underline-offset-4">
                  {payrollLinks.customPayroll.anchor}
                </Link>{" "}
                work runs through enterprise software engagements, where HR and payroll appear
                alongside ERP and workforce systems.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#24140a]"
              >
                Build a Custom Payroll System
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* How we help */}
        <Section id="why-us" eyebrow="Your partner" title="How Clickmasters Can Help">
          <Prose>
            <p>
              Clickmasters is a remote-first software development company working with businesses
              across the United States. For payroll projects we provide:
            </p>
          </Prose>
          <CheckList items={howWeHelp} className="mt-6 max-w-5xl md:grid-cols-2" />
        </Section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About Payroll Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {payrollFaqs.map((faq, index) => (
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
                Build a Payroll System That Fits How You Pay People
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re moving payroll off spreadsheets, connecting payroll with HR, time
                and accounting, or building payroll around complex pay rules, the first step is a
                clear map of your pay structures, approvals, jurisdictions and systems.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how payroll runs today and where it slows down. We&apos;ll recommend the right
                approach (provider, integration or custom build), outline the modules and
                integrations involved, and scope the next step.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request a Payroll Software Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["Provider, integration or custom build", "The modules involved", "HR, time and accounting integrations", "A scoped next step"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdba74] text-[#24140a]">
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
            Discuss Your Payroll Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
