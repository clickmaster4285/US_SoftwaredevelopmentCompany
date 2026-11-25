import { shortKey } from "@/lib/short-key";
import { ListIcon } from "@/components/ui/list-icon";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  Brain,
  Building2,
  CalendarCheck,
  CalendarDays,
  Check,
  ClipboardList,
  Clock,
  Contact,
  Dumbbell,
  Layers,
  LayoutDashboard,
  Lock,
  Megaphone,
  MessageSquare,
  Plug,
  QrCode,
  Receipt,
  Repeat,
  Smartphone,
  Snowflake,
  TrendingUp,
  UserPlus,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  aiPoints,
  attendancePoints,
  benefits,
  billingPoints,
  businessTypeRows,
  chooseChecklist,
  classPoints,
  cloudRows,
  comparisonRows,
  costFactors,
  customReasons,
  engagementPoints,
  FC_PATH,
  fcDescription,
  fcFaqs,
  fcImages,
  fcLinks,
  fcTitle,
  features,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  integrationRows,
  membershipRows,
  multiPoints,
  portalPoints,
  problemRows,
  processSteps,
  PRODUCT_NAME,
  reportRows,
  staffPoints,
  whyClickmasters,
  type FcFeature,
  type LinkSpec,
} from "./fitness-club-data";

export { FC_PATH, fcDescription, fcTitle, fcImages };

const ICONS: Record<string, LucideIcon> = {
  Activity,
  BadgeCheck,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  CalendarDays,
  Clock,
  Contact,
  Dumbbell,
  Layers,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Plug,
  QrCode,
  Receipt,
  Repeat,
  Smartphone,
  Snowflake,
  TrendingUp,
  UserPlus,
  UserRound,
  Users,
  Wallet,
};

const ACCENT = "#6d28d9";
const DARK = "#160b2e";

export function fcSchema() {
  const url = pageUrl(FC_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: fcTitle,
        description: fcDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(fcImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Fitness Club Management System",
        serviceType: "Fitness club management software development",
        description:
          "Design, development and integration of custom fitness club management systems for memberships and access rules, class timetables, staff rosters, billing, member apps and reporting.",
        url,
        image: pageUrl(fcImages.dashboard.src),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl("/products") },
          { "@type": "ListItem", position: 3, name: INDUSTRY_LABEL, item: pageUrl(`/products/${INDUSTRY_SLUG}`) },
          { "@type": "ListItem", position: 4, name: PRODUCT_NAME, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: fcFaqs.map((faq) => ({
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
  { href: "#what-is-fitness-club-software", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#memberships", label: "Memberships" },
  { href: "#attendance", label: "Attendance" },
  { href: "#billing", label: "Billing" },
  { href: "#timetable", label: "Timetable" },
  { href: "#staff", label: "Staff rosters" },
  { href: "#member-portal", label: "Member portal" },
  { href: "#multi-location", label: "Multi-location" },
  { href: "#reports", label: "Reports" },
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
    <figure className="cx-overfl-rounde-3r">
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> club.example / concept
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
        className="cm-img"
      />
      <figcaption className="cm-mock-cap">
        <span>{caption}</span>
        <span className="cm-chip">Illustrative concept</span>
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
        className="cm-fig"
      />
      <figcaption className="cm-caption">
        <span>{caption}</span>
        <span className="cm-chip">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

const PRIMARY_CTA = "Discuss Your Fitness Club Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#160b2e]" : "bg-primary text-primary-foreground"}`}
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

function CheckList({ items, className = "", icon: Icon = Check }: { items: readonly string[]; className?: string; icon?: LucideIcon }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <li key={shortKey(item)} className="cm-li">
          <ListIcon icon={Icon} className="cm-ic1" style={{ color: ACCENT }} />
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
        <li key={shortKey(title)} className="cm-card5">
          <p className="cm-ttl">
            <Icon className="cm-ic05" style={{ color: ACCENT }} aria-hidden />
            {title}
          </p>
          <p className="cm-p2">{text}</p>
        </li>
      ))}
    </ul>
  );
}


function Note({ children }: { children: ReactNode }) {
  return (
    <div
      className="cm-note"
      style={{ borderColor: ACCENT }}
    >
      {children}
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="cm-warn">
      <AlertTriangle className="mt-1 h-5 w-5 shrink-0" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

function LinkPanel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#ddd6fe] bg-[#f5f3ff] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

function FeatureCard({ feature, number }: { feature: FcFeature; number: number }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const extras: [string, string | undefined][] = [
    ["Value", feature.value],
    ["Use case", feature.useCase],
  ];
  return (
    <article className="cm-card6c">
      <div className="cx-flex-itemsc-5">
        <span className="cx-flex-h11-1u">
          <Icon className="h-5 w-5 text-[#6d28d9]" aria-hidden />
        </span>
        <h3 className="cm-h3">
          <span className="cx-mr15-textsm-8" style={{ color: ACCENT }}>
            {number}.
          </span>
          {feature.title}
        </h3>
      </div>
      <p className="cm-p4">{feature.text}</p>
      {extras
        .filter((row): row is [string, string] => Boolean(row[1]))
        .map(([label, text]) => (
          <p key={shortKey(label)} className="cx-mt2-textsm-9">
            <span className="cx-fontse-textfo-1">{label}: </span>
            <span className="text-muted-foreground">{text}</span>
          </p>
        ))}
    </article>
  );
}


const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== FC_PATH) ?? [];

export default function FitnessClubPage() {
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

          <div className="cm-hero-grid">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                {INDUSTRY_LABEL}
              </p>
              <h1 className="cm-h1">
                Fitness Club Management System
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                Keep your timetable, memberships, amenities and staff in sync, from the front desk to every class and branch.
              </p>
              <div className="cm-lead">
                <p>
                  A fitness club runs on coordination. Members with different tiers expect the right access to the gym
                  floor, studios, pool or courts. Classes need instructors, rooms and capacity limits. Staff rosters have
                  to match the timetable. And the front desk needs to know, in seconds, whether a member can come in,
                  book a class or bring a guest.
                </p>
                <p>
                  A fitness club management system brings memberships and access rules, the class timetable, staff
                  rosters, billing, member communication and reporting into one connected platform. Clickmasters designs
                  and builds custom fitness club management systems for US clubs, around your membership tiers,
                  amenities, schedules and locations.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Club Management Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={fcImages.dashboard} caption="Tiers, check-ins by area, classes and staff at a glance" priority />
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
        <Section id="what-is-fitness-club-software" eyebrow="Definition" title="What Is a Fitness Club Management System?">
          <Prose>
            <p>
              A fitness club management system is software that runs the operations of a membership-based fitness club.
              It stores members and their membership tiers, applies access rules to facilities and classes, publishes
              the class timetable with capacity limits, assigns instructors and staff, processes dues, communicates with
              members and reports on the club&apos;s performance. Fitness club software is the everyday name
              for that system. Fitness club management software is the same platform when memberships, the
              timetable, staff and billing stay on one record.
            </p>
            <p>
              It belongs to the broader family of <BodyLink link={fcLinks.pillar} />, but it&apos;s designed for a
              particular operating model: <strong className="text-foreground">a club with several services under one membership.</strong>
            </p>
          </Prose>
          <h3 className="mt-12 text-2xl font-semibold tracking-tight">Fitness Club vs. Gym vs. Fitness Studio Software</h3>
          <CompareTable
            caption="Fitness club management compared with gym management and fitness studio management"
            headers={["", "Fitness club management", "Gym management", "Fitness studio management"]}
            rows={comparisonRows}
          />
          <LinkPanel>
            Gyms focused mainly on front-desk check-in and billing are covered by our <BodyLink link={fcLinks.gym} />.
            This page covers the multi-service club.
          </LinkPanel>
        </Section>

        {/* Why */}
        <Section id="why-club-software" eyebrow="Business problems" title="Why Fitness Clubs Need Management Software">
          <CompareTable
            caption="Fitness club problems, how they show up, and how a club system helps"
            headers={["Problem", "How it shows up", "How a club system helps"]}
            rows={problemRows}
          />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="25 capability areas" title="Core Features of a Fitness Club Management System">
          <Prose>
            <p>
              These are <strong className="text-foreground">configurable modules and custom-development options</strong> scoped
              during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters product. Payments,
              access hardware and messaging depend on the providers you choose.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={index + 1} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build a Custom Fitness Club Management System" />
          </div>
        </Section>

        {/* Memberships */}
        <Section id="memberships" eyebrow="Tiers and households" title="Membership Management for Fitness Clubs">
          <CompareTable caption="Membership types and club-specific considerations" headers={["Membership type", "Club-specific considerations"]} rows={membershipRows} />
          <div className="mt-8">
            <AppFigure image={fcImages.membership} caption="Tiers, amenity access and a linked household" />
          </div>
          <LinkPanel>
            Many US states regulate health club contracts, auto-renewals and cancellation methods, so configure
            workflows from your agreement terms and counsel&apos;s guidance. When selling, renewing and tracking
            memberships is the main need, dedicated <BodyLink link={fcLinks.membership} /> keeps access and payment
            status attached to the right person.
          </LinkPanel>
        </Section>

        {/* Engagement */}
        <Section id="engagement" eyebrow="Members" title="Member Management and Engagement">
          <TitledList items={engagementPoints} icon={UserRound} className="sm:grid-cols-2 lg:grid-cols-4" />
          <Note>These tools support engagement. They don&apos;t guarantee retention outcomes.</Note>
        </Section>

        {/* Attendance */}
        <Section id="attendance" eyebrow="Area-based check-in" title="Fitness Club Attendance Management">
          <TitledList items={attendancePoints} icon={QrCode} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={fcImages.attendance} caption="Check-ins by area and hour, with access checks at entry points" />
          </div>
          <Caution>
            Biometric entry requires compatible devices, member consent and secure handling. Some states have biometric
            privacy laws.
          </Caution>
        </Section>

        {/* Billing */}
        <Section id="billing" eyebrow="Dues, add-ons, guests" title="Billing and Payment Management">
          <TitledList items={billingPoints} icon={Receipt} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={fcImages.billing} caption="Household invoices, revenue by type and outstanding balances" />
          </div>
          <LinkPanel>
            No specific gateway is assumed to be prebuilt. Clickmasters&apos; <BodyLink link={fcLinks.api} /> work includes
            Stripe billing integration with subscription management and webhook processing, which is the foundation
            that recurring club dues typically rely on.
          </LinkPanel>
        </Section>

        {/* Timetable */}
        <Section id="timetable" eyebrow="Rooms, capacity, eligibility" title="Class and Training Schedule Management">
          <CheckList items={classPoints} className="max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <AppFigure image={fcImages.timetable} caption="One timetable across studios, pool and courts, with tier eligibility" />
          </div>
          <LinkPanel>
            Where self-booking, room and trainer capacity, and open-slot management are the main focus, dedicated{" "}
            <BodyLink link={fcLinks.booking} /> keeps trainers, rooms and class capacity on one calendar.
          </LinkPanel>
        </Section>

        {/* Staff */}
        <Section id="staff" eyebrow="Coverage" title="Trainer and Staff Management">
          <Prose>
            <p>For clubs, staff coordination is a core operating need:</p>
          </Prose>
          <CheckList items={staffPoints} icon={Users} className="mt-4 max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <AppFigure image={fcImages.roster} caption="Staff roster beside the timetable, with a coverage gap flagged" />
          </div>
          <Note>
            Staff clock-ins and worked hours can be handled by connecting the club system to an employee attendance
            management system, which records staff shifts and check-ins. That keeps staff timekeeping separate from
            member check-ins. Full HR administration belongs in a dedicated HR system.
          </Note>
        </Section>

        {/* Portal */}
        <Section id="member-portal" eyebrow="Self-service" title="Member Portal and Mobile Application">
          <Prose>
            <p>These are possible capabilities, scoped per project:</p>
          </Prose>
          <CheckList items={portalPoints} className="mt-4 max-w-5xl md:grid-cols-3" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure image={fcImages.portal} caption="Member portal: tier, renewal, bookings and payments" />
            <DiagramFigure image={fcImages.app} caption="Member app: QR check-in, bookings and club notifications" />
          </div>
          <Note>
            Delivery options include a branded iOS and Android app or an installable web app. The right choice depends
            on your member experience goals and budget.
          </Note>
        </Section>

        {/* Multi-location */}
        <Section id="multi-location" eyebrow="Branches" title="Multi-Location Fitness Club Management">
          <TitledList items={multiPoints} icon={Building2} className="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={fcImages.multiBranch} caption="Three clubs, one member record and a consolidated view" />
          </div>
        </Section>

        {/* Reports */}
        <Section id="reports" eyebrow="KPIs" title="Reporting and Analytics">
          <CompareTable caption="Fitness club reports and their purpose" headers={["Report", "Purpose"]} rows={reportRows} />
          <div className="mt-8">
            <AppFigure image={fcImages.analytics} caption="Tier mix, class utilization and renewals" />
          </div>
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Fitness Club Management System Integrations">
          <Prose>
            <p>Possible integrations, confirmed during scoping:</p>
          </Prose>
          <CompareTable caption="Fitness club integrations" headers={["Integration", "Purpose"]} rows={integrationRows} />
          <Note>None of these is implied to be prebuilt.</Note>
        </Section>

        {/* AI */}
        <Section id="ai" eyebrow="Optional" title="AI in Fitness Club Management">
          <Prose>
            <p>
              These are <strong className="text-foreground">optional, project-specific capabilities</strong> that depend on data
              quality:
            </p>
          </Prose>
          <TitledList items={aiPoints} icon={Brain} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <Caution>
            Outputs need human review. No medical or health outcomes are claimed. Fitness guidance stays with qualified
            trainers.
          </Caution>
        </Section>

        {/* Business types */}
        <Section id="business-types" eyebrow="Who it's for" title="Fitness Club Software for Different Business Types">
          <CompareTable caption="Software requirements by fitness business type" headers={["Business type", "Software requirements"]} rows={businessTypeRows} />
        </Section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Fitness Club Software">
          <CompareTable caption="Cloud-based compared with on-premise fitness club software" headers={["Factor", "Cloud-based", "On-premise"]} rows={cloudRows} />
          <Note>Security depends on configuration and operations, not on the deployment model alone.</Note>
        </Section>

        {/* Custom */}
        <Section id="custom-vs-ready-made" eyebrow="Build or buy" title="Custom Fitness Club Management System vs. Ready-Made Software">
          <Prose>
            <p>Ready-made platforms suit standard clubs. A custom system makes sense when:</p>
          </Prose>
          <TitledList items={customReasons} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Fitness Club Management Software">
          <CheckList items={benefits} className="max-w-5xl md:grid-cols-2" />
          <Note>Results depend on setup, adoption and your club&apos;s model. No ROI figures are promised.</Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Fitness Club Management System">
          <ul className="grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chooseChecklist.map((item) => (
              <li key={shortKey(item)} className="cm-card4li">
                <span aria-hidden="true" className="ico ico-sqcheck cm-ic05l" style={{ color: ACCENT }} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Fitness Club Management Software Development Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, text], index) => (
              <li key={shortKey(title)} className="cm-card5">
                <span className="cm-label" style={{ color: ACCENT }}>
                  Step {index + 1}
                </span>
                <p className="cm-t2">{title}</p>
                <p className="cm-p2">{text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Why Clickmasters */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters Software Development Company?">
          <Prose>
            <p>These points are verified from the Clickmasters website:</p>
          </Prose>
          <TitledList items={whyClickmasters} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Cost of a Fitness Club Management System">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <Prose>
                <p>Cost depends on:</p>
              </Prose>
              <CheckList items={costFactors} className="mt-4 md:grid-cols-2" />
            </div>
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                There&apos;s no fixed price. Clickmasters agrees on scope, timeline and quote before development starts.
              </p>
              <div className="mt-6">
                <PrimaryCta light label="Discuss Your Requirements" />
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <section id="faq" className="cm-sec">
          <div className="cm-wrap">
            <h2 className="cm-h2b">
              Frequently Asked Questions About Fitness Club Management Systems
            </h2>
            <div className="cm-list">
              {fcFaqs.map((faq, index) => (
                <details key={shortKey(faq.question)} className="group p-5 md:p-6" open={index === 0}>
                  <summary className="cm-faq-q">
                    <h3>
                      {index + 1}. {faq.question}
                    </h3>
                    <span aria-hidden="true" className="ico ico-chev cm-faq-ic" />
                  </summary>
                  <p className="cm-intro">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border text-white" style={{ backgroundColor: DARK }}>
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Discuss Your Fitness Club Management System</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Whether you run a single health club with a pool and studios or a growing network of fitness clubs, the
              right system starts with your tiers, amenities, timetable and team.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Tell Clickmasters Software Development Company how your club operates today and where coordination breaks
              down. We&apos;ll recommend the modules and integrations you need and scope the first phase of your custom
              fitness club management system.
            </p>
            <div className="mt-8">
              <CtaPair light secondary={{ label: "Talk to Our Software Development Team", href: "/contact" }} />
            </div>
            <p className="mt-4 text-sm text-white/60">We scope the product, the timeline and the quote before development starts.</p>
          </div>
        </section>

        {/* Related products (site template block) */}
        {relatedProducts.length > 0 ? (
          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <h2 className="cx-text2x-fontse-u">More in {INDUSTRY_LABEL}</h2>
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
        <style>{"@media (max-width: 767px) { body { padding-bottom: 72px; } }"}</style>
        <div className="cm-mbar">
          <Link
            href="/contact"
            className="cm-cta-m"
          >
            Discuss Your Club Software Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
