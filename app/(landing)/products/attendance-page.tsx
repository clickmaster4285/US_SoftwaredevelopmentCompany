import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlarmClock,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  CalendarRange,
  Check,
  ChevronRight,
  ClipboardList,
  Clock,
  Coffee,
  Fingerprint,
  IdCard,
  ListChecks,
  Lock,
  Plug,
  Scale,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  ATTENDANCE_PATH,
  attendanceDescription,
  attendanceFaqs,
  attendanceImages,
  attendanceLinks,
  attendanceTitle,
  benefits,
  biometricVsMobileRows,
  challengeRows,
  cloudVsOnPremRows,
  compareRows,
  costFactors,
  customReasons,
  customVsReadyRows,
  exceptionSteps,
  features,
  fourQuestions,
  hoursPoints,
  howItWorks,
  howWeHelp,
  implementationSteps,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrations,
  manualRows,
  methodRows,
  mobilePoints,
  moduleRows,
  PRODUCT_NAME,
  reportRows,
  security,
  selectionQuestions,
  shiftPoints,
  signs,
  workflowSteps,
  type AttendanceFeature,
  type LinkSpec,
} from "./attendance-data";

export { ATTENDANCE_PATH, attendanceDescription, attendanceTitle, attendanceImages };

const ICONS: Record<string, LucideIcon> = {
  AlarmClock,
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  CalendarRange,
  Clock,
  Coffee,
  Fingerprint,
  IdCard,
  ListChecks,
  Plug,
  Smartphone,
};

const ACCENT = "#0284c7";
const DARK = "#071c2b";

export function attendanceSchema() {
  const url = pageUrl(ATTENDANCE_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: attendanceTitle,
        description: attendanceDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(attendanceImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "Attendance management software development",
        description:
          "Design, development and integration of employee attendance systems for clock-in, shifts, breaks, overtime, exceptions, approvals and payroll-ready hours.",
        url,
        image: pageUrl(attendanceImages.dashboard.src),
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
        mainEntity: attendanceFaqs.map((faq) => ({
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
  { href: "#what-is-attendance-system", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#attendance-features", label: "Features" },
  { href: "#tracking-methods", label: "Clock-in methods" },
  { href: "#mobile-attendance", label: "Mobile & field" },
  { href: "#shifts", label: "Shifts" },
  { href: "#hours-overtime", label: "Hours & overtime" },
  { href: "#exceptions", label: "Exceptions" },
  { href: "#reporting", label: "Reports" },
  { href: "#integrations", label: "Integrations" },
  { href: "#comparisons", label: "vs HRMS & payroll" },
  { href: "#custom-attendance", label: "Custom system" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#071c2b] shadow-xl shadow-sky-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> attendance.example / concept
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
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#071c2b]" : "bg-primary text-primary-foreground"}`}
      >
        Discuss Your Attendance Requirements
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

function NumberedCards({
  items,
  className = "",
}: {
  items: readonly (readonly [string, string])[];
  className?: string;
}) {
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
            <p className="font-semibold">{title}</p>
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
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#fde68a] bg-[#fffbeb] px-5 py-4 text-sm leading-7 text-[#78350f]">
      {children}
    </div>
  );
}

function FeatureCard({ feature }: { feature: AttendanceFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0f2fe]">
          <Icon className="h-5 w-5 text-[#0284c7]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
      </div>
      {feature.note ? (
        <p className="mt-3 inline-flex w-fit rounded-full bg-[#fef3c7] px-2.5 py-0.5 text-xs font-medium text-[#92400e]">
          {feature.note}
        </p>
      ) : null}
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature.does}</p>
      <div className="mt-4 rounded-xl bg-[#f0f9ff] px-3 py-2 text-sm leading-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
          How it helps
        </p>
        <p className="text-muted-foreground">{feature.helps}</p>
      </div>
    </article>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== ATTENDANCE_PATH) ?? [];

export default function AttendancePage() {
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
                Employee Attendance Management System for Accurate, Payroll-Ready Time Records
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Paper sign-in sheets, shared spreadsheets and texts that say &quot;running late&quot;
                  don&apos;t add up to reliable time records. Supervisors chase missing punches, HR
                  rebuilds attendance reports every month, and payroll waits for hours it can trust.
                  Across shifts, locations and remote teams, the gaps multiply.
                </p>
                <p>
                  An employee attendance management system records when people start and finish work,
                  compares it with their schedule, flags exceptions for review and passes approved
                  hours to payroll and HR. Clickmasters designs, builds and integrates attendance
                  systems and apps for US businesses that need attendance tracking to fit their
                  shifts, policies and existing HR and payroll tools.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "See Attendance Features", href: "#attendance-features" }} />
              </div>
            </div>
            <AppFigure
              image={attendanceImages.dashboard}
              caption="Employee attendance management system dashboard: present, late, absent and on leave by location, with open exceptions"
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
        <Section id="what-is-attendance-system" eyebrow="Definition" title="What Is an Employee Attendance Management System?">
          <Prose>
            <p>
              An employee attendance management system is software that records employee working time
              (clock-in and clock-out, breaks and absences) against schedules and policies, and turns
              those records into reviewed, approved timesheets and attendance reports. Employee time
              attendance software is another name for that same job. Employee attendance tracker
              software is the screen people open to see today&apos;s punches. Employee attendance
              records are the result: each clock-in, clock-out, break and absence, kept against the
              schedule.
            </p>
            <p>It answers four everyday questions:</p>
          </Prose>
          <NumberedCards items={fourQuestions} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            Attendance management software usually sits between scheduling and payroll. It
            doesn&apos;t replace an HRMS or payroll. It provides the trusted time data both of them
            depend on. An attendance management system for employees is the self-service side of
            that: their own punches, schedule and leave. An employee attendance program is the rule
            set behind those punches, including shifts, breaks and who may approve an exception.
            An employee attendance and leave management system connects approved leave to the
            schedule, so a planned day off is not counted as an absence.
          </Note>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How Attendance Management Software Works">
          <NumberedCards items={howItWorks} className="md:grid-cols-2 lg:grid-cols-3" />
          <Note>
            Every edit to a time record is logged with who changed it, when and why. That employee
            attendance log is the audit trail behind the timesheet.
          </Note>
        </Section>

        {/* Why */}
        <Section id="why-attendance-software" eyebrow="When to act" title="Why Businesses Need Attendance Software">
          <TitledList items={signs} icon={AlertTriangle} className="sm:grid-cols-2 lg:grid-cols-4" />
          <H3 className="mt-14">Manual vs. Automated Attendance</H3>
          <CompareTable
            caption="Paper registers and spreadsheets compared with attendance management software"
            headers={["", "Paper registers and spreadsheets", "Attendance management software"]}
            rows={manualRows}
          />
        </Section>

        {/* Features */}
        <Section id="attendance-features" eyebrow="13 core capabilities" title="Employee Attendance Software Features">
          <Prose>
            <p>
              The capabilities below are common across attendance systems. In a Clickmasters project,{" "}
              <strong className="text-foreground">each one is a scope decision</strong>. Some are{" "}
              <strong className="text-foreground">standard</strong> capabilities, some are{" "}
              <strong className="text-foreground">configurable</strong> policies and workflows, some
              are <strong className="text-foreground">optional integrations</strong>, some are{" "}
              <strong className="text-foreground">hardware-dependent</strong>, and some are{" "}
              <strong className="text-foreground">custom-built</strong> for your operation.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <H3 className="mt-16">Attendance Management Modules</H3>
          <CompareTable
            caption="Attendance management modules, scope and type"
            headers={["Module", "Scope", "Type"]}
            rows={moduleRows}
          />
        </Section>

        {/* Tracking methods */}
        <Section id="tracking-methods" eyebrow="Clock-in options" title="Attendance Tracking Methods">
          <Prose>
            <p>
              No single method suits every workforce. Many businesses combine two or three.{" "}
              <strong className="text-foreground">None of these methods is included by default.</strong>{" "}
              Hardware-based, biometric and location-based options require devices, integrations,
              permissions and privacy planning. An employee attendance management system fingerprint
              reader is one of those hardware options. Use it only with a lawful basis, a clear
              notice to employees and tight limits on who can see the biometric data.
            </p>
          </Prose>
          <CompareTable
            caption="Attendance tracking methods, best fit and considerations"
            headers={["Method", "Best for", "Considerations"]}
            rows={methodRows}
          />
          <Caution>
            <strong>Responsible use:</strong> collect only the data needed to record working time
            accurately. Tell employees what is collected and why, get consent where the law requires
            it, limit who can access location and biometric data, and set retention and deletion
            rules. Have qualified counsel review biometric and location tracking before rollout.
          </Caution>
          <DiagramFigure
            image={attendanceImages.kiosk}
            caption="A shared kiosk with PIN pad and badge reader for shift sites"
            className="mt-10"
          />
        </Section>

        {/* Mobile */}
        <Section id="mobile-attendance" eyebrow="Field and remote" title="Employee Check-In, Mobile and Field Attendance">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="text-base leading-7 text-muted-foreground">
                An employee attendance tracker app, built as an employee attendance management system
                app, is the attendance system for people who don&apos;t start the day at a fixed desk
                or time clock. A well-designed mobile attendance app:
              </p>
              <CheckList items={mobilePoints} className="mt-5" />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Clickmasters builds these as offline-first apps for iOS and Android from a single
                codebase through its <BodyLink link={attendanceLinks.crossPlatform} /> practice, which
                already delivers field apps for technicians, drivers and inspectors.
              </p>
            </div>
            <DiagramFigure
              image={attendanceImages.mobile}
              caption="Offline clock-in at an assigned job site, a clear location notice and the employee's own hours"
            />
          </div>
        </Section>

        {/* Shifts */}
        <Section id="shifts" eyebrow="Scheduling" title="Shift Management and Scheduling">
          <Prose>
            <p>
              Shift scheduling may be a configurable module, a custom build or an integration with an
              existing scheduling tool. The employee attendance schedule is the plan punches are
              checked against. An employee attendance plan sets the expected hours, breaks and how an
              absence is coded. Scheduling isn&apos;t automatically part of every attendance package.
              When it&apos;s included, it typically covers:
            </p>
          </Prose>
          <TitledList items={shiftPoints} icon={CalendarRange} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure
              image={attendanceImages.shifts}
              caption="Rotating day and night shifts, approved leave, open shifts and pending swap requests"
            />
          </div>
          <Caution>
            Some US cities and states have predictive scheduling (&quot;Fair Workweek&quot;) rules
            for certain industries. If they apply to you, scheduling workflows should be designed with
            those requirements in mind and reviewed by counsel.
          </Caution>
        </Section>

        {/* Hours */}
        <Section id="hours-overtime" eyebrow="Time rules" title="Working Hours, Breaks and Overtime">
          <TitledList items={hoursPoints} icon={Scale} className="md:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure
              image={attendanceImages.timesheet}
              caption="Weekly timesheet: paired punches, breaks, regular and overtime hours, with an edit logged"
            />
          </div>
          <Note>
            These are general points, not legal advice. Employee attendance requirements start with
            your own policy: who must clock in, which sites, and which exceptions need a reason.
            Configure those rules from your documented policy and review them with qualified
            professionals.
          </Note>
        </Section>

        {/* Exceptions */}
        <Section id="exceptions" eyebrow="Exception-first" title="Absence, Late Arrival and Attendance Exceptions">
          <Prose>
            <p>
              An exception-first workflow is what makes attendance software practical. An employee
              absence management system is this queue. Employee attendance review is the step where a
              supervisor confirms, edits or rejects a punch before hours lock. A staff attendance
              manager clears that queue before the payroll cut-off:
            </p>
          </Prose>
          <NumberedCards items={exceptionSteps} className="mt-6 sm:grid-cols-2 lg:grid-cols-5" />
          <div className="mt-8">
            <AppFigure
              image={attendanceImages.exceptions}
              caption="Exception queue with reason codes, approve and edit actions, and the payroll cut-off"
            />
          </div>
          <Note>
            The point isn&apos;t to penalize people. It&apos;s to keep records accurate and to spot
            operational problems such as understaffed shifts or unrealistic start times.
          </Note>
        </Section>

        {/* Workflow */}
        <Section id="workflow" eyebrow="End to end" title="The Employee Attendance Workflow">
          <Prose>
            <p>
              Workflows vary by company policy, configuration, integrations, attendance method and
              labor requirements. A typical flow:
            </p>
          </Prose>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl border border-border bg-white p-4 text-sm leading-6 text-muted-foreground">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#e0f2fe", color: ACCENT }}
                >
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Visibility" title="Attendance Reporting and Analytics">
          <CompareTable
            caption="Attendance reports, what they show and what they're used for"
            headers={["Report", "What it shows", "Used for"]}
            rows={reportRows}
          />
          <div className="mt-8">
            <AppFigure
              image={attendanceImages.analytics}
              caption="Scheduled vs. actual hours by location, absence trend and overtime by site"
            />
          </div>
          <Note>
            Reports respect permissions: supervisors see their teams, and HR and operations see
            broader views according to their roles. The employee attendance board is that live view.
            Employee attendance rate, and the other employee attendance metrics such as lateness by
            site, show whether a busy morning is a one-day problem or a pattern. An online employee
            attendance management system gives supervisors and employees the same board in a browser.
          </Note>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Employee Attendance Management Software">
          <Prose>
            <p>
              When the system fits your workforce and policies and is used consistently, businesses
              typically see:
            </p>
          </Prose>
          <CheckList items={benefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Results depend on configuration, adoption and policy clarity. Measure them against your own
            baselines.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="Attendance Software for Different Industries">
          <CompareTable
            caption="Typical attendance needs by industry"
            headers={["Industry", "Typical attendance needs"]}
            rows={industryRows}
          />
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Attendance System Integrations">
          <Prose>
            <p>Attendance data is most valuable when it flows to the systems that use it:</p>
          </Prose>
          <DiagramFigure
            image={attendanceImages.integration}
            caption="HRMS, devices and apps feed attendance; approved hours flow to payroll, ERP and reporting"
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
            Integration needs clear rules. Which system owns employee data? When are hours locked? How
            are late edits after payroll handled? Our <BodyLink link={attendanceLinks.api} /> team
            designs and builds these connections, including device integrations, APIs and automated
            sync with monitoring for failures.
          </p>
        </Section>

        {/* Comparisons */}
        <Section id="comparisons" eyebrow="Related software" title="Attendance Software vs. HRMS, Payroll and Time Tracking">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <H3>Attendance Software vs. HRMS</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                An HRMS manages the whole employee lifecycle: records, hiring, onboarding, leave
                policy, performance and self-service. Attendance software focuses on when people
                actually work. Many organizations run attendance as a module of, or an integration
                with, a <BodyLink link={attendanceLinks.hrms} />, so employee data comes from HR and
                attendance summaries go back to it. Employee attendance and performance stay in
                different records. A pattern of lateness can inform a conversation, but a performance
                decision still belongs in the HR process. The employee management system attendance
                manager is the supervisor screen for today&apos;s team, not the performance file. A
                search for employee software attendance usually means these same time records inside
                that broader employee system.
              </p>
            </div>
            <div>
              <H3>Attendance Software vs. Payroll</H3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Payroll calculates pay, deductions and withholding. Attendance software provides the
                approved hours that hourly and shift-based pay depends on. The cleaner the handoff, the
                fewer corrections payroll has to make. If you need pay runs, deductions and payslips as
                well, our <BodyLink link={attendanceLinks.payroll} /> is designed to receive approved
                attendance data directly. An employee attendance and payroll management system is that
                handoff: approved hours in, pay run out. An employee attendance and salary management
                system covers the same link when pay is a salary plus exceptions, not only hourly
                punches.
              </p>
            </div>
          </div>
          <CompareTable
            caption="Attendance management compared with time tracking software, HRMS and payroll software"
            headers={["", "Attendance management", "Time tracking software", "HRMS", "Payroll software"]}
            rows={compareRows}
          />

          <H3 className="mt-14">Biometric vs. Mobile Attendance</H3>
          <CompareTable
            caption="Biometric terminals compared with mobile attendance"
            headers={["", "Biometric terminals", "Mobile attendance"]}
            rows={biometricVsMobileRows}
          />

          <H3 className="mt-14">Cloud-Based vs. On-Premise Attendance</H3>
          <CompareTable
            caption="Cloud-based attendance compared with on-premise attendance"
            headers={["", "Cloud-based attendance", "On-premise attendance"]}
            rows={cloudVsOnPremRows}
          />

          <H3 className="mt-14">Ready-Made vs. Custom Attendance System</H3>
          <CompareTable
            caption="Ready-made attendance software compared with a custom attendance system"
            headers={["", "Ready-made attendance software", "Custom attendance system"]}
            rows={customVsReadyRows}
          />
        </Section>

        {/* Security */}
        <Section id="security" eyebrow="Privacy by design" title="Attendance Data Security and Privacy">
          <CheckList items={security} className="max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Implementation */}
        <Section id="implementation" eyebrow="Delivery" title="Attendance Software Implementation">
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
          <H3 className="mt-14">Common Implementation Challenges</H3>
          <CompareTable
            caption="Common attendance implementation challenges and how to address them"
            headers={["Challenge", "How to address it"]}
            rows={challengeRows}
          />
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Attendance Software Cost Factors">
          <TitledList items={costFactors} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8 max-w-4xl rounded-3xl border border-[#bae6fd] bg-[#f0f9ff] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
              How pricing works
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Ready-made attendance software is usually priced per employee per month, with hardware
              priced separately. Custom attendance systems are scoped and quoted individually.
              Clickmasters agrees on scope, timeline and quote before development starts.
            </p>
          </div>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose an Attendance Management System">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <p className="flex items-center gap-3 font-semibold">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#e0f2fe", color: ACCENT }}
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
        <Section id="custom-attendance" eyebrow="Decision point" title="Custom Attendance Software Development">
          <Prose>
            <p>A custom attendance system makes sense when:</p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={customReasons} icon={Zap} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                Clickmasters can build attendance system architecture, UI/UX, dashboards, clock-in
                apps, shift modules, self-service portals, GPS and geofencing options, biometric and
                RFID device integrations, attendance APIs, HRMS, payroll and ERP integrations, data
                migration, access control, QA, cloud deployment and ongoing support.
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                These projects run through our{" "}
                <Link href={attendanceLinks.customAttendance.href} className="font-medium text-white underline underline-offset-4">
                  {attendanceLinks.customAttendance.anchor}
                </Link>{" "}
                work in enterprise engagements, where HR and workforce management systems sit
                alongside ERP and integration projects.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#071c2b]"
              >
                Build a Custom Attendance System
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
              across the United States. For attendance projects we:
            </p>
          </Prose>
          <CheckList items={howWeHelp} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Our Business &amp; Enterprise Management products, including HRMS, payroll and ERP, can be
            connected to your attendance system so time, people and pay data stay consistent.
          </p>
        </Section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About Employee Attendance Management Systems
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {attendanceFaqs.map((faq, index) => (
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
                Build an Attendance System Your Teams and Payroll Can Trust
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re replacing paper registers, connecting attendance to payroll and HR,
                adding mobile clock-in for field teams, or building a custom system around complex
                shifts, the first step is a clear map of your workforce, policies and systems.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how attendance works today, and where it breaks down. We&apos;ll recommend the
                right approach (configure, integrate or build), outline the methods and integrations
                involved, and scope the next step.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request an Attendance Software Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["Configure, integrate or build", "Clock-in methods for each group", "HR, payroll and ERP integrations", "A scoped next step"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7dd3fc] text-[#071c2b]">
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
            Discuss Your Attendance Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
