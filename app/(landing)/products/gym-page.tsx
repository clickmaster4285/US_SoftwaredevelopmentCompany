import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BellRing,
  Brain,
  Building2,
  CalendarCheck,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  Clock,
  Contact,
  Dumbbell,
  IdCard,
  Layers,
  Lock,
  Megaphone,
  MessageSquare,
  Plug,
  QrCode,
  Receipt,
  Repeat,
  ShieldCheck,
  Smartphone,
  Square,
  TrendingUp,
  UserPlus,
  UserRound,
  Users,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  aiPoints,
  attendancePoints,
  audiences,
  benefits,
  billingPoints,
  businessTypeRows,
  challengeRows,
  chooseChecklist,
  classPoints,
  cloudVsOnPremRows,
  costFactors,
  customReasons,
  features,
  GYM_PATH,
  gymDescription,
  gymFaqs,
  gymImages,
  gymLinks,
  gymTitle,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  integrationRows,
  membershipRows,
  portalItems,
  processSteps,
  PRODUCT_NAME,
  reportRows,
  trainerPoints,
  whyClickmasters,
  workflowRows,
  type GymFeature,
  type LinkSpec,
} from "./gym-data";

export { GYM_PATH, gymDescription, gymTitle, gymImages };

const ICONS: Record<string, LucideIcon> = {
  Activity,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  Clock,
  Contact,
  Dumbbell,
  IdCard,
  Layers,
  Megaphone,
  MessageSquare,
  QrCode,
  Receipt,
  Repeat,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserPlus,
  UserRound,
  Users,
  Wallet,
  Wrench,
};

const ACCENT = "#a21caf";
const DARK = "#1d0a1f";

export function gymSchema() {
  const url = pageUrl(GYM_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: gymTitle,
        description: gymDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(gymImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Gym Management Software",
        serviceType: "Gym management software development",
        description:
          "Design, development and integration of custom gym management software for member registration, memberships, check-ins, billing, class and trainer scheduling, member apps and reporting.",
        url,
        image: pageUrl(gymImages.dashboard.src),
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
        mainEntity: gymFaqs.map((faq) => ({
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
  { href: "#what-is-gym-software", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#memberships", label: "Memberships" },
  { href: "#billing", label: "Billing" },
  { href: "#attendance", label: "Check-ins" },
  { href: "#trainers", label: "Trainers" },
  { href: "#classes", label: "Classes" },
  { href: "#member-app", label: "Member app" },
  { href: "#reports", label: "Reports" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#1d0a1f] shadow-xl shadow-fuchsia-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> gym.example / concept
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
      <figcaption className="mt-2 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        <span>{caption}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

const PRIMARY_CTA = "Discuss Your Gym Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#1d0a1f]" : "bg-primary text-primary-foreground"}`}
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

function LinkPanel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#f5d0fe] bg-[#fdf4ff] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

function FeatureCard({ feature, number }: { feature: GymFeature; number: number }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const extras: [string, string | undefined][] = [
    ["Why it matters", feature.why],
    ["Benefit", feature.benefit],
    ["Use case", feature.useCase],
  ];
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fae8ff]">
          <Icon className="h-5 w-5 text-[#a21caf]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">
          <span className="mr-1.5 text-sm font-bold" style={{ color: ACCENT }}>
            {number}.
          </span>
          {feature.title}
        </h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature.text}</p>
      {extras
        .filter((row): row is [string, string] => Boolean(row[1]))
        .map(([label, text]) => (
          <p key={label} className="mt-2 text-sm leading-6">
            <span className="font-semibold text-foreground">{label}: </span>
            <span className="text-muted-foreground">{text}</span>
          </p>
        ))}
    </article>
  );
}

function Split({ children, image, reverse = false }: { children: ReactNode; image: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : ""}>{children}</div>
      <div className={reverse ? "lg:order-1" : ""}>{image}</div>
    </div>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== GYM_PATH) ?? [];

export default function GymPage() {
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
                Gym Management Software to Run Memberships, Check-Ins, Billing and Classes in One Place
              </h1>
              <p className="mt-4 text-lg font-semibold leading-snug text-foreground md:text-xl">
                One system for the front desk, the timetable, the trainers and the business behind them.
              </p>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Membership records in a spreadsheet, payments tracked in a separate processor, a paper
                  sign-in sheet at the door, class bookings in a group chat, and trainer schedules in
                  someone&apos;s phone. That&apos;s how many gyms run until the cracks show: expired members
                  still walking in, failed payments nobody follows up on, overbooked classes and no clear
                  picture of how the business is doing.
                </p>
                <p>
                  Gym management software brings members, memberships, check-ins, billing, classes,
                  trainers, staff and reporting into one connected platform. Clickmasters designs and builds
                  custom gym management software for US gyms, fitness centers and studios, around your
                  membership models, check-in method, payment provider and locations. Gym management
                  software USA clubs use it when the spreadsheet, the sign-in sheet and the group chat no
                  longer match the floor.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Gym Software Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={gymImages.dashboard} caption="Members, check-ins, revenue and classes at a glance" priority />
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
        <Section id="what-is-gym-software" eyebrow="Definition" title="What Is Gym Management Software?">
          <Prose>
            <p>
              Gym management software is a business system that runs the day-to-day operations of a
              fitness facility. It stores member records and membership plans, controls and records
              check-ins, manages dues and payments, schedules classes and trainers, communicates with
              members, and reports on the health of the business. Online gym management software is that
              system in a browser and a member app, so sign-up, booking and payment do not need a paper
              form. Easy gym management software is the front-desk version of the same record: find the
              member, see the plan, take the check-in.
            </p>
            <p>In practice, it connects three groups of people:</p>
          </Prose>
          <TitledList items={audiences} icon={Users} className="mt-6 md:grid-cols-3" />
          <Note>
            Some products focus on a single slice, such as membership billing, class booking or trainer
            scheduling. Gym management software ties those slices together, so a member&apos;s plan,
            payment status, visits, bookings and trainer sessions all live on one profile.
          </Note>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How Gym Management Software Works">
          <NumberedCards items={howItWorks} className="md:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Why */}
        <Section id="why-gym-software" eyebrow="Business problems" title="Why Gyms Need Management Software">
          <CompareTable
            caption="Gym challenges, what happens without a system, and how gym management software helps"
            headers={["Challenge", "What happens without a system", "How gym management software helps"]}
            rows={challengeRows}
          />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="25 capability areas" title="Core Gym Management Features">
          <Prose>
            <p>
              Gym management system features below are{" "}
              <strong className="text-foreground">configurable modules and custom-development options</strong>{" "}
              scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters
              product. Payment processing, access-control hardware and messaging services depend on the
              third-party providers you choose.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 6).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} number={index + 1} />
            ))}
          </div>
          <div className="mt-8">
            <AppFigure image={gymImages.profile} caption="One profile: visits, bookings, payments and progress" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(6).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} number={index + 7} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build a Custom Gym Management System" />
          </div>
        </Section>

        {/* Workflow */}
        <Section id="workflow" eyebrow="End to end" title="The Gym Management Workflow">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Gym lead management software sits one step before this list. It keeps the tour request, the
            follow-up and the plan that was offered, until that person becomes a member.
          </p>
          <CompareTable caption="Gym management workflow stages" headers={["Stage", "What happens in the system"]} rows={workflowRows} />
        </Section>

        {/* Memberships */}
        <Section id="memberships" eyebrow="Plans and rules" title="Gym Membership Management">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Gym membership management software is the plan layer inside that system: which plan the member
            holds, when it renews, when it freezes and whether the door should open.
          </p>
          <Split image={<AppFigure image={gymImages.membership} caption="Plans, rules and one member's plan" />}>
            <CompareTable caption="Membership types and typical rules" headers={["Membership type", "Typical rules"]} rows={membershipRows} />
          </Split>
          <LinkPanel>
            <strong className="text-foreground">Pauses and cancellations</strong> need clear rules: freeze
            length, fees, restart dates and notice periods. Many US states regulate health club contracts,
            automatic renewals and cancellation methods, so your workflows should follow your agreement
            terms and counsel&apos;s guidance. For gyms whose biggest need is selling, renewing and
            tracking memberships and access, our dedicated <BodyLink link={gymLinks.membership} /> focuses
            on plans, renewals, freezes and payment status.
          </LinkPanel>
        </Section>

        {/* Billing */}
        <Section id="billing" eyebrow="Dues and payments" title="Gym Billing and Payment Management">
          <TitledList items={billingPoints} icon={Receipt} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={gymImages.billing} caption="Invoices, balances and failed-payment retries" />
          </div>
          <LinkPanel>
            Recurring billing and gateway features depend on the provider you select and are configured
            during the project. They aren&apos;t assumed to be prebuilt. Clickmasters&apos;{" "}
            <BodyLink link={gymLinks.api} /> work includes Stripe billing integration with subscription
            management and webhook processing, which is the kind of integration recurring membership dues
            rely on.
          </LinkPanel>
        </Section>

        {/* Attendance */}
        <Section id="attendance" eyebrow="Member check-ins" title="Gym Attendance Management">
          <Prose>
            <p>
              Gym attendance here means <strong className="text-foreground">member check-ins</strong>, not
              employee timekeeping:
            </p>
          </Prose>
          <TitledList items={attendancePoints} icon={QrCode} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={gymImages.attendance} caption="Check-ins by hour, peak times and recent visits" />
          </div>
          <Caution>
            Biometric check-in (fingerprint or face) requires compatible hardware, member consent and
            secure data handling. Some states have specific biometric privacy laws.
          </Caution>
        </Section>

        {/* Trainers */}
        <Section id="trainers" eyebrow="Sessions and packages" title="Personal Trainer Management">
          <Split reverse image={<AppFigure image={gymImages.trainer} caption="Availability, sessions and package balances" />}>
            <TitledList items={trainerPoints} icon={Dumbbell} className="sm:grid-cols-2" />
          </Split>
          <LinkPanel>
            Independent trainers and training studios that run their own client base often need a focused
            tool. Our <BodyLink link={gymLinks.trainer} /> is built around client sessions, packages and
            trainer calendars.
          </LinkPanel>
        </Section>

        {/* Classes */}
        <Section id="classes" eyebrow="Timetable and capacity" title="Fitness Class and Schedule Management">
          <TitledList items={classPoints} icon={CalendarDays} className="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={gymImages.schedule} caption="Weekly timetable with capacity and waitlists" />
          </div>
          <LinkPanel>
            When self-booking, room and trainer capacity, and open-slot management are the main
            requirement, dedicated <BodyLink link={gymLinks.booking} /> keeps trainers, rooms and class
            capacity on one calendar. Clickmasters&apos; published case study covers end-to-end QA of a
            multi-tenant booking SaaS before launch, including payment-flow testing.
          </LinkPanel>
        </Section>

        {/* Member app */}
        <Section id="member-app" eyebrow="Mobile experience" title="Member Portal and Mobile Experience">
          <Split image={<DiagramFigure image={gymImages.app} caption="Check in, book and pay from a phone" />}>
            <Prose>
              <p>
                A member app or mobile web portal can include the following. All of these are proposed
                capabilities, scoped per project:
              </p>
            </Prose>
            <CheckList items={portalItems} className="mt-4" />
          </Split>
          <LinkPanel>
            Clickmasters builds iOS and Android apps from one codebase through its{" "}
            <BodyLink link={gymLinks.crossPlatform} /> practice, with features such as push notifications.
            Installable web apps are another option when an app-store presence isn&apos;t required.
          </LinkPanel>
        </Section>

        {/* Reports */}
        <Section id="reports" eyebrow="KPIs" title="Gym Analytics and Reporting">
          <CompareTable caption="Gym reports and what they show" headers={["Report", "What it shows"]} rows={reportRows} />
          <div className="mt-8">
            <AppFigure image={gymImages.analytics} caption="Retention, class utilization and revenue by plan" />
          </div>
          <Note>These reports support decisions. They don&apos;t guarantee outcomes.</Note>
        </Section>

        {/* Business types */}
        <Section id="business-types" eyebrow="Who it's for" title="Gym Management Software for Different Business Types">
          <CompareTable
            caption="Specific requirements by fitness business type"
            headers={["Business type", "Specific requirements"]}
            rows={businessTypeRows}
          />
          <div className="mt-8">
            <AppFigure image={gymImages.multiBranch} caption="Three clubs, one system, consolidated reporting" />
          </div>
        </Section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Gym Management Software">
          <CompareTable
            caption="Cloud-based gym management software compared with on-premise"
            headers={["Factor", "Cloud-based", "On-premise"]}
            rows={cloudVsOnPremRows}
          />
          <Note>
            For most US gyms, cloud deployment with an offline check-in fallback is the practical choice.
            Security depends on configuration and operations, not on the deployment model alone.
          </Note>
        </Section>

        {/* Custom */}
        <Section id="custom-vs-ready-made" eyebrow="Build or buy" title="Custom Gym Management Software vs. Ready-Made Software">
          <Prose>
            <p>
              Ready-made gym platforms work well for standard models. Teams comparing Kilo gym management
              software are looking at one of those packaged products. Custom software makes sense when:
            </p>
          </Prose>
          <TitledList items={customReasons} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Gym Management Software Integrations">
          <CompareTable caption="Gym management software integrations" headers={["Integration", "Typical purpose"]} rows={integrationRows} />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#f5d0fe] bg-[#fdf4ff] p-5 text-base leading-7 text-muted-foreground">
            <Plug className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>These are possible integrations, confirmed during scoping. None is implied to be prebuilt.</p>
          </div>
        </Section>

        {/* AI */}
        <Section id="ai" eyebrow="Optional, emerging" title="AI in Gym Management">
          <Prose>
            <p>
              These are <strong className="text-foreground">optional, emerging capabilities</strong>, and
              they depend on data volume and quality:
            </p>
          </Prose>
          <TitledList items={aiPoints} icon={Brain} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <Caution>
            AI outputs need validation and human judgment. Fitness and health-related recommendations
            should stay under the supervision of qualified trainers.
          </Caution>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Gym Management Software">
          <CheckList items={benefits} className="max-w-5xl md:grid-cols-2" />
          <Note>Results depend on setup, adoption and your business model. There&apos;s no guaranteed ROI.</Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Gym Management Software">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            A gym management software demo walks through one person: the enquiry, the plan, the check-in
            and a failed payment. A gym management system demo is that same walkthrough on your membership
            rules. Affordable gym management software usually means starting with members, check-in and
            billing, then adding classes when the club is ready. The price follows that scope.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chooseChecklist.map(([title, text]) => (
              <li key={title} className="flex gap-3 rounded-2xl border border-border bg-white p-5">
                <Square className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
                <div>
                  <p className="font-semibold leading-snug">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Gym Management Software Development Process">
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

        {/* Why Clickmasters */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters Software Development Company?">
          <Prose>
            <p>These points are verified from the Clickmasters website:</p>
          </Prose>
          <TitledList items={whyClickmasters} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Cost of Gym Management Software">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <Prose>
                <p>Custom gym software cost depends on:</p>
              </Prose>
              <CheckList items={costFactors} className="mt-4 md:grid-cols-2" />
            </div>
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                There&apos;s no fixed price. Clickmasters agrees on scope, timeline and quote before
                development starts.
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
              Frequently Asked Questions About Gym Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {gymFaqs.map((faq, index) => (
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
                Build Gym Management Software Around Your Fitness Business
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you run one gym or a growing chain, a boutique studio or a full-service club, the
                right software starts with your memberships, members and daily operations.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell Clickmasters Software Development Company how your gym runs today and where it slows
                you down. We&apos;ll recommend the right modules and integrations, and scope the first phase
                of your custom gym management software.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Talk to Our Software Development Team", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["The right modules for your gym", "Integrations with your providers", "A scoped first phase"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0abfc] text-[#1d0a1f]">
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
            Discuss Your Gym Software Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
