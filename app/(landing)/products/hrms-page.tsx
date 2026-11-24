import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  Clock,
  Cloud,
  DoorOpen,
  FileText,
  GraduationCap,
  IdCard,
  Lock,
  Network,
  Plug,
  ShieldCheck,
  Smartphone,
  Target,
  UserSearch,
  Wallet,
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
  customReasons,
  customVsReadyRows,
  HRMS_PATH,
  hrmsDescription,
  hrmsFaqs,
  hrmsImages,
  hrmsLinks,
  hrmsTitle,
  howWeHelp,
  implementationSteps,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrations,
  layers,
  lifecycleRows,
  manualRows,
  modules,
  performancePoints,
  PRODUCT_NAME,
  reportingPoints,
  security,
  selectionQuestions,
  signs,
  termRows,
  type HrmsModule,
  type LinkSpec,
} from "./hrms-data";

export { HRMS_PATH, hrmsDescription, hrmsTitle, hrmsImages };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  CalendarDays,
  Clock,
  DoorOpen,
  FileText,
  GraduationCap,
  IdCard,
  Network,
  ShieldCheck,
  Smartphone,
  Target,
  UserSearch,
  Wallet,
};

const ACCENT = "#059669";
const DARK = "#06261f";

export function hrmsSchema() {
  const url = pageUrl(HRMS_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: hrmsTitle,
        description: hrmsDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(hrmsImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "HRMS software development",
        description:
          "Design, development, integration and support of HRMS software for employee records, recruiting, onboarding, attendance, leave, performance and HR workflows.",
        url,
        image: pageUrl(hrmsImages.dashboard.src),
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
          { "@type": "ListItem", position: 4, name: "HRMS", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: hrmsFaqs.map((faq) => ({
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
  { href: "#what-is-hrms", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#hrms-modules", label: "Modules" },
  { href: "#lifecycle", label: "Employee lifecycle" },
  { href: "#recruiting-onboarding", label: "Recruiting & onboarding" },
  { href: "#attendance-payroll", label: "Attendance & payroll" },
  { href: "#automation", label: "Automation" },
  { href: "#analytics", label: "Analytics" },
  { href: "#integrations", label: "Integrations" },
  { href: "#custom-hrms", label: "Custom HRMS" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#06261f] shadow-xl shadow-emerald-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> hrms.example / concept
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
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#06261f]" : "bg-primary text-primary-foreground"}`}
      >
        Discuss Your HR Software Requirements
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

function ModuleCard({ mod }: { mod: HrmsModule }) {
  const Icon = ICONS[mod.icon] ?? ClipboardList;
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d1fae5]">
          <Icon className="h-5 w-5 text-[#059669]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">{mod.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{mod.does}</p>
      <dl className="mt-4 grid gap-2 text-sm leading-6">
        <div className="rounded-xl bg-[#fef2f2] px-3 py-2">
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b91c1c]">HR problem</dt>
          <dd className="text-muted-foreground">{mod.problem}</dd>
        </div>
        <div className="rounded-xl bg-[#ecfdf5] px-3 py-2">
          <dt className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
            Workflow impact
          </dt>
          <dd className="text-muted-foreground">{mod.impact}</dd>
        </div>
      </dl>
    </article>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== HRMS_PATH) ?? [];

export default function HrmsPage() {
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
              <li className="text-foreground">HRMS</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                {INDUSTRY_LABEL}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Human Resource Management System (HRMS) Software Built Around How Your HR Team Works
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Employee files in shared drives. Leave requests in email. Onboarding checklists in
                  spreadsheets. Attendance in one tool, payroll in another, and headcount reports
                  rebuilt by hand every month. As a company grows, HR administration grows faster than
                  the HR team.
                </p>
                <p>
                  A human resource management system HRMS brings employee records, hiring,
                  onboarding, time off, performance and HR workflows into one connected platform.
                  Clickmasters designs, builds and integrates HRMS software for US organizations that
                  need HR technology to fit their structure, policies and existing systems, not the
                  other way around.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore HRMS Modules", href: "#hrms-modules" }} />
              </div>
            </div>
            <AppFigure
              image={hrmsImages.dashboard}
              caption="HR overview: headcount, open positions, pending approvals, who's out today and upcoming starters"
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
        <Section id="what-is-hrms" eyebrow="Definition" title="What Is a Human Resource Management System (HRMS)?">
          <Prose>
            <p>
              HRMS stands for <strong className="text-foreground">human resource management system</strong>.
              Human resource management (HRM) explained simply: HRM is the practice of hiring,
              paying and developing people, and
              HRMS software is the platform that runs those processes across the employee lifecycle,
              from recruiting and onboarding through day-to-day administration, time off,
              performance, development and offboarding.
            </p>
            <p>
              At its center is a single employee record. Every process reads from it and writes back
              to it. When a new hire is entered once, the same record drives their onboarding tasks,
              access requests, leave balances, manager assignment, review cycle and, through
              integration, their payroll setup.
            </p>
          </Prose>
          <H3 className="mt-14">HRMS vs. HRIS vs. HCM vs. HRM</H3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            These terms overlap, and vendors use them loosely. A common question is what does HRIS
            stand for in HR: human resource information system, the employee record that an HRMS
            builds its processes on. Human resource management (HRM) explained in 10 minutes comes down
            to this: HRM is the discipline, and the software below is how it gets done. Here is how the
            terms are generally understood:
          </p>
          <CompareTable
            caption="HRM, HRIS, HRMS and HCM compared"
            headers={["Term", "Typical scope", "Emphasis"]}
            rows={termRows}
          />
          <Note>
            In practice, the label matters less than the scope. Define which processes the system
            must cover and how it must connect to your other systems.
          </Note>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How HRMS Software Works">
          <Prose>
            <p>An HRMS is built in four layers:</p>
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
          <div className="mt-8 max-w-4xl rounded-2xl border border-[#a7f3d0] bg-[#ecfdf5] p-5 text-base leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">Example: </span>a manager approves a
            promotion in the HRMS. The employee&apos;s position, title and pay details update with an
            effective date, the change is logged, payroll receives the update through its
            integration, and the org chart and headcount reports reflect it.
          </div>
        </Section>

        {/* Why */}
        <Section id="why-hrms" eyebrow="When to act" title="Why Businesses Need HRMS Software">
          <Prose>
            <p>Organizations usually start evaluating an HRMS when HR administration stops scaling:</p>
          </Prose>
          <TitledList items={signs} icon={AlertTriangle} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <H3 className="mt-14">Manual HR Processes vs. an HRMS</H3>
          <CompareTable
            caption="Spreadsheets, email and paper compared with HRMS software"
            headers={["", "Spreadsheets, email and paper", "HRMS software"]}
            rows={manualRows}
          />
        </Section>

        {/* Modules */}
        <Section id="hrms-modules" eyebrow="13 building blocks" title="Core HRMS Features and Modules">
          <Prose>
            <p>
              The modules below are the common building blocks of an HRMS. In a Clickmasters project,{" "}
              <strong className="text-foreground">each one is a scope decision</strong>. Some are
              standard core functionality, some are configured to your policies, some are delivered by
              integrating a specialized platform you already use, and some are custom-built. Your
              requirements decide the mix.
            </p>
          </Prose>
          <div className="mt-10">
            <AppFigure
              image={hrmsImages.profile}
              caption="Employee record: job details, leave balances, restricted documents and effective-dated history"
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <ModuleCard key={mod.title} mod={mod} />
            ))}
          </div>
        </Section>

        {/* Lifecycle */}
        <Section id="lifecycle" eyebrow="Hire to retire" title="Employee Lifecycle Management">
          <Prose>
            <p>
              The value of an HRMS comes from connecting the stages of the employee journey so
              information flows forward instead of being re-entered:
            </p>
          </Prose>
          <DiagramFigure
            image={hrmsImages.lifecycle}
            caption="Twelve lifecycle stages, connected by one employee record"
            className="mt-8"
          />
          <CompareTable
            caption="Employee lifecycle stages, what the HRMS manages and the data that flows forward"
            headers={["Stage", "What the HRMS manages", "Data that flows forward"]}
            rows={lifecycleRows}
          />
          <Note>
            Each step depends on the one before it. When records connect, a promotion updates
            approvals, payroll and reports. A termination reliably triggers access removal. HR always
            knows where each employee is in their journey.
          </Note>
        </Section>

        {/* Recruiting, onboarding, self-service */}
        <Section
          id="recruiting-onboarding"
          eyebrow="In practice"
          title="Recruitment, Onboarding and Self-Service in Practice"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <H3>Recruitment and Applicant Tracking</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                A human resource management system hiring process starts with a manager raising a
                requisition against an approved position. Finance or HR approves it, and the job is
                posted to the careers page and, through integration, to job boards. Applications
                arrive in one candidate pipeline, interviews are scheduled with calendar
                integration, and feedback is captured in structured scorecards so decisions can be
                compared fairly. When the offer is accepted, the candidate&apos;s data becomes the
                employee record.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Some organizations prefer a specialized applicant tracking system (ATS). In that case
                the HRMS integrates with it and receives hired candidates, instead of duplicating
                recruiting features.
              </p>
            </div>
            <AppFigure
              image={hrmsImages.ats}
              caption="Applicant tracking: candidates by stage, scorecards and automatic hand-off to onboarding"
            />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <H3>Employee Onboarding</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Onboarding works best as a set of parallel task lists triggered by the hire date. HR
                collects documents and policy acknowledgments, IT provisions accounts and equipment,
                the manager plans the first weeks, and the new hire completes forms through
                self-service before day one. Federal employment forms such as Form I-9 and Form W-4
                have specific requirements, so the HRMS should support your documented process, with
                procedures reviewed by your HR and legal advisors.
              </p>
            </div>
            <div>
              <H3>Employee and Manager Self-Service Portals</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Self-service portals are often what employees see most of an HRMS, so they need to be
                simple, mobile-friendly and fast. Clickmasters builds employee onboarding, HR
                self-service and training platforms as part of its{" "}
                <BodyLink link={hrmsLinks.webApp} /> work, including portals that integrate with
                existing HRIS platforms such as Workday and ADP.
              </p>
            </div>
          </div>
          <DiagramFigure
            image={hrmsImages.selfService}
            caption="An employee requests PTO on mobile; the manager approves with team coverage in view"
            className="mt-10"
          />
        </Section>

        {/* Attendance, leave, payroll */}
        <Section id="attendance-payroll" eyebrow="Time and pay" title="Attendance, Leave, Payroll and Benefits">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <H3>Attendance, Time and Shift Management</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                For hourly, shift-based and multi-location workforces, time data affects pay, coverage
                and labor cost. An HRMS can capture time through web, mobile or time clock
                integrations, apply schedules and overtime rules, route exceptions to managers, and
                lock approved hours for payroll. Businesses that mainly need to track attendance can
                start with a focused <BodyLink link={hrmsLinks.attendance} /> and connect it to the
                HRMS later.
              </p>
            </div>
            <AppFigure
              image={hrmsImages.attendance}
              caption="Weekly shift grid with coverage gaps, open shifts, late arrivals and overtime alerts"
            />
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <H3>Leave Management</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Leave policies vary by employment type, tenure, location and state law. An HRMS applies
                accrual, carry-over and eligibility rules consistently, shows balances to employees,
                and gives managers a team calendar so approvals take coverage into account. Policy
                rules, such as state or local paid sick leave or FMLA tracking, should be set up from
                your documented policies and validated by your advisors.
              </p>
            </div>
            <div>
              <H3>Payroll and Benefits</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                <strong className="text-foreground">HRMS and payroll software are not the same thing.</strong>{" "}
                The HRMS manages the employee and the employment data: job, compensation, time and
                leave, deductions and benefits elections. Payroll software calculates gross-to-net
                pay, withholdings and pay runs, and in the US it often handles tax filing through a
                payroll provider. Most organizations either integrate the HRMS with a payroll provider
                or run payroll as a connected module. Companies that need pay runs, deductions and
                payslip history managed as their own system can use our dedicated{" "}
                <BodyLink link={hrmsLinks.payroll} />, connected to the HRMS so changes flow through
                once.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Benefits administration covers plan setup, enrollment windows, life-event changes and
                the data exchanged with benefits carriers or brokers. Most of this is handled through
                integration with the platforms already in use.
              </p>
            </div>
          </div>
        </Section>

        {/* Performance */}
        <Section id="performance" eyebrow="Talent" title="Performance Management and Employee Development">
          <Prose>
            <p>Performance features work when they&apos;re simple enough that managers actually use them:</p>
          </Prose>
          <TitledList items={performancePoints} icon={Target} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Over time this builds a reliable history for promotion, development and workforce planning
            decisions.
          </p>
        </Section>

        {/* Automation */}
        <Section id="automation" eyebrow="Less admin" title="HR Workflow Automation">
          <Prose>
            <p>
              Automation in an HRMS replaces the follow-up emails and reminders that take up HR time.
              Common examples:
            </p>
          </Prose>
          <CompareTable caption="HR automation triggers and actions" headers={["Trigger", "Automated actions"]} rows={automationRows} />
          <div className="mt-8">
            <AppFigure
              image={hrmsImages.workflow}
              caption="Workflow builder: an accepted offer creates the employee record, onboarding, IT provisioning and payroll setup"
            />
          </div>
          <Note>
            Every automation should be documented, testable and owned by someone. Policy changes
            should update workflows in a controlled way.
          </Note>
        </Section>

        {/* Analytics */}
        <Section id="analytics" eyebrow="Visibility" title="HR Analytics and Reporting">
          <Prose>
            <p>Useful HR reporting answers specific questions:</p>
          </Prose>
          <TitledList items={reportingPoints} icon={BarChart3} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure
              image={hrmsImages.analytics}
              caption="Workforce analytics: turnover trend, time to hire, absence, overtime and PTO liability"
            />
          </div>
          <Note>
            Reports should respect permissions, so managers see their teams and HR sees what its role
            allows. Data can also be fed to a BI tool or data warehouse for analysis alongside finance
            and operations data.
          </Note>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of HRMS Software">
          <Prose>
            <p>When an HRMS fits your processes and is adopted consistently, organizations typically see:</p>
          </Prose>
          <CheckList items={benefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Results depend on scope, data quality, policy clarity and adoption. Measure them against
            baselines rather than assuming them.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="HRMS Use Cases by Industry">
          <Prose>
            <p>HR fundamentals are universal, but priorities differ by workforce type:</p>
          </Prose>
          <CompareTable caption="Typical HRMS priorities by industry" headers={["Industry", "Typical HRMS priorities"]} rows={industryRows} />
          <Note>
            Employment law varies by state and situation. Configure an HRMS from your documented
            policies and have it reviewed by qualified HR and legal advisors. Software supports
            compliance processes but doesn&apos;t guarantee compliance.
          </Note>
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="HRMS Integrations">
          <Prose>
            <p>An HRMS sits at the center of the people-data ecosystem. Common integration categories:</p>
          </Prose>
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
            Each integration needs a defined system of record for every data field, clear timing (real
            time, scheduled or on approval), error handling and monitoring. Our{" "}
            <BodyLink link={hrmsLinks.api} /> team designs and builds these connections, including
            bidirectional sync and the monitoring that keeps HR and payroll data consistent.
          </p>
        </Section>

        {/* Comparisons */}
        <Section id="comparisons" eyebrow="Related software" title="HRMS Compared With Related HR Software">
          <CompareTable caption="HRMS compared with related HR software" headers={["Comparison", "Key difference"]} rows={comparisonRows} />

          <H3 className="mt-14">Cloud HRMS vs. On-Premise HRMS</H3>
          <CompareTable
            caption="Cloud HRMS compared with on-premise HRMS"
            headers={["Factor", "Cloud HRMS", "On-premise HRMS"]}
            rows={cloudVsOnPremRows}
          />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#a7f3d0] bg-[#ecfdf5] p-5 text-base leading-7 text-muted-foreground">
            <Cloud className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>
              For most US organizations, cloud HRMS is the practical default, provided encryption,
              access control and vendor or hosting security are properly addressed.
            </p>
          </div>

          <H3 className="mt-14">Custom HRMS vs. Ready-Made HR Software</H3>
          <CompareTable
            caption="Ready-made HR software compared with a custom HRMS"
            headers={["", "Ready-made HR software", "Custom HRMS"]}
            rows={customVsReadyRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            A hybrid approach is common: keep a payroll provider or specialized tools, and build a
            custom HRMS layer, portal or integration hub around them.
          </p>
        </Section>

        {/* When custom */}
        <Section id="custom-hrms" eyebrow="Decision point" title="When to Consider Custom HRMS Development">
          <Prose>
            <p>Custom HRMS software is worth evaluating when:</p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={customReasons} icon={Zap} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                Clickmasters delivers{" "}
                <Link href={hrmsLinks.customHrms.href} className="font-medium text-white underline underline-offset-4">
                  {hrmsLinks.customHrms.anchor}
                </Link>{" "}
                through its enterprise software engagements, where HR and workforce management systems
                sit alongside ERP and integration work. Each engagement starts with requirements and
                architecture before any code is written.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#06261f]"
              >
                Build an HRMS Around Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* Security */}
        <Section id="security" eyebrow="Employee data" title="HRMS Security and Employee Data Management">
          <Prose>
            <p>
              Employee data includes some of the most sensitive information a business holds: Social
              Security numbers, bank details, compensation, health-related leave information and
              performance records. A professionally built HRMS includes:
            </p>
          </Prose>
          <CheckList items={security} className="mt-6 max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Implementation */}
        <Section id="implementation" eyebrow="Delivery" title="HRMS Implementation Process">
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
        <Section id="challenges" eyebrow="Lessons learned" title="Common HRMS Implementation Challenges">
          <CompareTable
            caption="Common HRMS implementation challenges and how to address them"
            headers={["Challenge", "How to address it"]}
            rows={challengeRows}
          />
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="HRMS Software Cost Factors">
          <Prose>
            <p>HRMS cost depends on:</p>
          </Prose>
          <TitledList items={costFactors} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#a7f3d0] bg-[#ecfdf5] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                How pricing works
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Packaged HR software is usually priced per employee per month, with costs rising by
                tier and add-on. Custom HRMS projects are scoped and quoted individually. Clickmasters
                agrees on scope, timeline and quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                Measuring ROI
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Set baselines before launch, then track HR hours spent on administration, time to
                onboard, leave and attendance errors, payroll corrections caused by HR data, time to
                produce reports and self-service adoption. Value comes from measured change, not
                assumptions.
              </p>
            </div>
          </div>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose HRMS Software">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <p className="flex items-center gap-3 font-semibold">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#d1fae5", color: ACCENT }}
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
              across the United States. For HRMS projects we provide:
            </p>
          </Prose>
          <CheckList items={howWeHelp} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Our Business &amp; Enterprise Management products, including ERP, CRM, document management
            and business process management, can be connected to your HRMS so people, operational and
            financial data stay consistent.
          </p>
        </Section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About HRMS Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {hrmsFaqs.map((faq, index) => (
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
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Build an HRMS Around Your Business</h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re replacing spreadsheets, connecting HR and payroll, untangling
                disconnected HR tools or planning a custom HRMS, the first step is the same: a clear
                map of your employee lifecycle, policies, data and integrations.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how your HR team works today, the systems you use and where the friction is.
                We&apos;ll recommend the right approach (configure, integrate or build), outline the
                modules involved and scope the next step.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request an HRMS Development Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["Configure, integrate or build", "The modules involved", "Payroll and system integrations", "A scoped next step"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6ee7b7] text-[#06261f]">
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
            Discuss Your HR Software Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
