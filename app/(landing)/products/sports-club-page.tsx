import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  CalendarDays,
  Check,
  CheckSquare,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Gauge,
  IdCard,
  LayoutDashboard,
  Lock,
  MapPin,
  Megaphone,
  MessageSquare,
  Network,
  Package,
  Plug,
  Receipt,
  Repeat,
  Shield,
  ShieldCheck,
  Smartphone,
  Trophy,
  UserPlus,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  benefits,
  chooseChecklist,
  cloudRows,
  coachPoints,
  communicationPoints,
  comparisonRows,
  costFactors,
  deliverables,
  eventPoints,
  facilityPoints,
  features,
  feeRows,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  manages,
  membershipPoints,
  orgRows,
  problemRows,
  processSteps,
  PRODUCT_NAME,
  readyVsCustomRows,
  reportRows,
  SC_PATH,
  scDescription,
  scFaqs,
  scImages,
  scLinks,
  scOgDescription,
  scOgTitle,
  scTitle,
  teamPoints,
  whyClickmasters,
  type LinkSpec,
  type ScFeature,
} from "./sports-club-data";

export { SC_PATH, scDescription, scTitle, scImages, scOgTitle, scOgDescription };

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  CalendarDays,
  ClipboardCheck,
  Gauge,
  IdCard,
  LayoutDashboard,
  MapPin,
  Megaphone,
  MessageSquare,
  Network,
  Package,
  Plug,
  Receipt,
  Repeat,
  Shield,
  ShieldCheck,
  Smartphone,
  Trophy,
  UserPlus,
  Users,
  Wallet,
};

const ACCENT = "#15803d";
const DARK = "#052e16";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWX";

export function scSchema() {
  const url = pageUrl(SC_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: scTitle,
        description: scDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(scImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Sports Club Management Software",
        serviceType: "Sports club management software development",
        description:
          "Design, development and integration of custom sports club management software for registrations, memberships, teams, coaches, training and fixtures, venue bookings, club fees and member communication.",
        url,
        image: pageUrl(scImages.dashboard.src),
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
        mainEntity: scFaqs.map((faq) => ({
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
  { href: "#what-is-sports-club-software", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#membership", label: "Membership" },
  { href: "#teams", label: "Players and teams" },
  { href: "#coaches", label: "Coaches and training" },
  { href: "#events", label: "Tournaments" },
  { href: "#facilities", label: "Facilities" },
  { href: "#fees", label: "Fees" },
  { href: "#custom", label: "Custom development" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#052e16] shadow-xl shadow-green-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> sportsclub.example / concept
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

const PRIMARY_CTA = "Discuss Your Sports Club Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#052e16]" : "bg-primary text-primary-foreground"}`}
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
        <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
          <Icon className="mt-1 h-4 w-4 shrink-0" style={{ color: ACCENT }} aria-hidden />
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
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

function FeatureCard({ feature, number }: { feature: ScFeature; number: string }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const extras: [string, string | undefined][] = [
    ["Solves", feature.solves],
    ["Benefits", feature.benefits],
  ];
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dcfce7]">
          <Icon className="h-5 w-5 text-[#15803d]" aria-hidden />
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

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== SC_PATH) ?? [];

export default function SportsClubPage() {
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
                Sports Club Management Software
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                Run registrations, teams, coaches, fixtures, venues and club fees from one system, all season long.
              </p>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Every season, a sports club runs a small business behind the scenes. Members and players register,
                  often with parents or guardians. Teams form across age groups and divisions. Coaches need practice
                  slots, fields and courts need booking, fixtures and tournaments need scheduling, and fees need
                  collecting. Volunteers and committee members try to keep everyone informed through email chains,
                  spreadsheets and group chats.
                </p>
                <p>
                  Sports club management software brings all of that into one place, with one membership database, one
                  club calendar, one fee ledger and one communication channel for the whole organization. Clickmasters
                  designs and builds custom sports club management software for US clubs, athletic organizations and
                  sports associations, shaped around your sports, seasons, teams and venues.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Sports Club Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={scImages.dashboard} caption="Registrations, fees, fixtures and alerts for the whole club" priority />
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

        {/* Every day */}
        <Section id="every-day" eyebrow="A typical week" title="What Sports Clubs Manage Every Day, and Why Disconnected Tools Fail">
          <Prose>
            <p>
              On any given week, club administrators handle new registrations and renewals, waivers and guardian
              consents, roster changes, coach schedules, field and court allocations, fixture changes due to weather,
              tournament entries, fee reminders and announcements to hundreds of members.
            </p>
            <p>
              When each task lives in a different tool, problems compound. Rosters don&apos;t match registrations, two
              teams get the same field, a coach isn&apos;t told about a rescheduled match, and the treasurer can&apos;t tell
              who has paid. Dedicated software connects those tasks: a registration creates a member record, places the
              player on a team, adds the team to the calendar, assigns a coach and a venue slot, and tracks the fee.
            </p>
          </Prose>
        </Section>

        {/* What is */}
        <Section id="what-is-sports-club-software" eyebrow="Definition" title="What Is Sports Club Management Software?">
          <Prose>
            <p>
              Sports club management software is an administrative platform for organizations that run sports programs
              for members. It manages:
            </p>
          </Prose>
          <TitledList items={manages} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            It&apos;s part of the wider family of <BodyLink link={scLinks.pillar} />, with a focus on the{" "}
            <strong className="text-foreground">club as an organization</strong>, not on a single team, a single venue or a
            fitness membership.
          </p>
          <h3 className="mt-12 text-2xl font-semibold tracking-tight">Sports Club Software vs. Fitness Club and Gym Software</h3>
          <CompareTable
            caption="Sports club management compared with fitness club or gym management"
            headers={["", "Sports club management", "Fitness club or gym management"]}
            rows={comparisonRows}
          />
          <LinkPanel>
            Fitness organizations that run classes, amenities and staff rosters are better served by a{" "}
            <BodyLink link={scLinks.fitnessClub} />. Sports club software is built around teams and seasons.
          </LinkPanel>
        </Section>

        {/* Why */}
        <Section id="why-club-software" eyebrow="Business problems" title="Why Sports Clubs Need Management Software">
          <CompareTable caption="Sports club problems, what goes wrong and how club software helps" headers={["Problem", "What goes wrong", "How club software helps"]} rows={problemRows} />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="24 capability areas" title="Key Features of Sports Club Management Software">
          <Prose>
            <p>
              These are <strong className="text-foreground">potential modules and custom-development capabilities</strong>,
              scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters product.
              Payments, messaging and hardware depend on the providers you choose.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 12).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} number={LETTERS[index]} />
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure image={scImages.portal} caption="Member portal: registrations, family schedule, payments and documents" />
            <AppFigure image={scImages.analytics} caption="Members by age group, attendance and venue utilization" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(12).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} number={LETTERS[index + 12]} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build Custom Sports Club Software" />
          </div>
        </Section>

        {/* How */}
        <Section id="how-it-works" eyebrow="Workflow" title="How Sports Club Management Software Works">
          <NumberedCards items={howItWorks} className="sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Membership */}
        <Section id="membership" eyebrow="Members" title="Sports Club Membership Management">
          <TitledList items={membershipPoints} icon={Users} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={scImages.membership} caption="Membership database by category, household and renewal" />
          </div>
          <LinkPanel>
            When membership plans, renewals, access and payment status are the main focus, dedicated{" "}
            <BodyLink link={scLinks.membership} /> keeps access and payments attached to the right person.
          </LinkPanel>
        </Section>

        {/* Teams */}
        <Section id="teams" eyebrow="Rosters" title="Player and Team Management">
          <CheckList items={teamPoints} className="max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <AppFigure image={scImages.teams} caption="Teams by age group, with a roster and eligibility status" />
          </div>
          <Note>
            At club level, the focus is coordinating many teams consistently. Deeper single-team tools, such as tactics,
            lineups and per-match availability polls, can be added as modules.
          </Note>
        </Section>

        {/* Coaches */}
        <Section id="coaches" eyebrow="Coaching" title="Coach and Training Management">
          <CheckList items={coachPoints} className="max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <AppFigure image={scImages.training} caption="Practices by venue and coach for the week" />
          </div>
          <Caution>
            Youth clubs should define coach screening, safeguarding and communication policies with their governing body
            and counsel. Software can record and remind, but policies set the rules.
          </Caution>
        </Section>

        {/* Events */}
        <Section id="events" eyebrow="Competitions" title="Sports Events and Tournament Management">
          <TitledList items={eventPoints} icon={Trophy} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={scImages.tournament} caption="Club-hosted tournament: groups, knockout and results" />
          </div>
          <Note>
            Requirements differ by sport and event. A youth soccer jamboree, a tennis ladder and a swim meet each need
            different formats and scoring, so tournament modules are usually tailored.
          </Note>
        </Section>

        {/* Facilities */}
        <Section id="facilities" eyebrow="Venues" title="Sports Facility and Booking Management">
          <TitledList items={facilityPoints} icon={MapPin} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={scImages.facility} caption="Fields, courts and pool by hour: teams first, then members and hire" />
          </div>
          <LinkPanel>
            Clubs that also rent rooms or slots to individuals can use dedicated <BodyLink link={scLinks.booking} /> to
            keep trainers, rooms and capacity on one calendar.
          </LinkPanel>
        </Section>

        {/* Fees */}
        <Section id="fees" eyebrow="Money" title="Sports Club Billing and Payment Management">
          <CompareTable caption="Sports club fee types and examples" headers={["Fee type", "Examples"]} rows={feeRows} />
          <div className="mt-8">
            <AppFigure image={scImages.billing} caption="Household invoice, installments, fees by type and balances" />
          </div>
          <Note>
            Supporting features include invoices, payment records, installment plans, discounts and sibling pricing,
            hardship waivers, outstanding balances and renewal reminders. Payments run through a{" "}
            <strong className="text-foreground">payment gateway integration</strong> with tokenized card handling. No specific
            gateway is assumed to be prebuilt. Clickmasters&apos; integration work includes Stripe subscription billing and
            webhooks, which can support recurring club fees.
          </Note>
        </Section>

        {/* Communication */}
        <Section id="communication" eyebrow="Engagement" title="Sports Club Communication and Member Engagement">
          <TitledList items={communicationPoints} icon={Megaphone} className="sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Reports */}
        <Section id="reports" eyebrow="Insight" title="Sports Club Reporting and Analytics">
          <CompareTable caption="Sports club reports and what they show" headers={["Report", "What it shows"]} rows={reportRows} />
        </Section>

        {/* Orgs */}
        <Section id="organizations" eyebrow="Who it's for" title="Sports Club Management Software for Different Organizations">
          <CompareTable caption="Typical requirements by sports organization" headers={["Organization", "Typical requirements"]} rows={orgRows} />
        </Section>

        {/* Cloud and ready vs custom */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Sports Club Software">
          <CompareTable caption="Cloud-based compared with on-premise sports club software" headers={["Factor", "Cloud-based", "On-premise"]} rows={cloudRows} />
          <Note>Security depends on configuration and operations, not on the deployment model alone.</Note>
        </Section>

        <Section id="ready-vs-custom" eyebrow="Build or buy" title="Ready-Made vs. Custom Sports Club Management Software">
          <CompareTable caption="Ready-made compared with custom sports club software" headers={["", "Ready-made", "Custom"]} rows={readyVsCustomRows} />
        </Section>

        {/* Custom */}
        <Section id="custom" eyebrow="What we deliver" title="Custom Sports Club Management Software Development">
          <Prose>
            <p>Clickmasters can deliver:</p>
          </Prose>
          <CheckList items={deliverables} className="mt-4 max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <DiagramFigure image={scImages.app} caption="Club app: team schedule, match alerts and availability" />
          </div>
          <LinkPanel>
            Member and coach apps can be built for iOS and Android from one codebase through Clickmasters&apos;{" "}
            <BodyLink link={scLinks.crossPlatform} /> practice, with push notifications for schedule changes and
            reminders.
          </LinkPanel>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Sports Club Management Software">
          <CheckList items={benefits} className="max-w-5xl md:grid-cols-2" />
          <Note>Results depend on setup, adoption and your organization&apos;s processes. No specific outcome is guaranteed.</Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Sports Club Management System">
          <ul className="grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chooseChecklist.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-border bg-white p-4 text-sm leading-6">
                <CheckSquare className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Why Clickmasters */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters Software Development Company?">
          <Prose>
            <p>These points are verified from the Clickmasters website:</p>
          </Prose>
          <TitledList items={whyClickmasters} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <PrimaryCta label="Talk to Our Software Development Team" />
          </div>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Sports Club Software Development Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
        <Section id="cost" eyebrow="Budgeting" title="Sports Club Management Software Cost">
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
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About Sports Club Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {scFaqs.map((faq, index) => (
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
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Build Sports Club Software Around Your Organization</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Whether you run a community club, a multi-sport organization or a sports association, the right software
              starts with your members, teams, venues and seasons.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Tell Clickmasters Software Development Company how your club operates today and where administration slows
              you down. We&apos;ll recommend the modules and integrations you need and scope the first phase of your custom
              sports club management software.
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
            Discuss Your Sports Club Software
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
