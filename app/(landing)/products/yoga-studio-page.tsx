import { shortKey } from "@/lib/short-key";
import { ListIcon } from "@/components/ui/list-icon";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  Check,
  ClipboardCheck,
  ClipboardList,
  DoorOpen,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  ListOrdered,
  Lock,
  Mountain,
  Plug,
  QrCode,
  Receipt,
  RefreshCw,
  Repeat,
  Smartphone,
  Ticket,
  UserPlus,
  UserRound,
  Users,
  Video,
  Wallet,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  attendancePoints,
  benefits,
  billingPoints,
  businessRows,
  challengeRows,
  chooseChecklist,
  cloudRows,
  costFactors,
  deliverables,
  features,
  gymRows,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  instructorPoints,
  onlinePoints,
  planRows,
  portalPoints,
  processSteps,
  PRODUCT_NAME,
  readyVsCustomRows,
  reportRows,
  schedulingPoints,
  whatItManages,
  whyClickmasters,
  workshopPoints,
  YS_PATH,
  ysDescription,
  ysFaqs,
  ysImages,
  ysLinks,
  ysOgDescription,
  ysOgTitle,
  ysTitle,
  type LinkSpec,
  type YsFeature,
} from "./yoga-studio-data";

export { YS_PATH, ysDescription, ysTitle, ysImages, ysOgTitle, ysOgDescription };

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  ClipboardCheck,
  DoorOpen,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  ListOrdered,
  Mountain,
  Plug,
  QrCode,
  RefreshCw,
  Repeat,
  Smartphone,
  Ticket,
  UserPlus,
  UserRound,
  Users,
  Video,
  Wallet,
};

const ACCENT = "#4338ca";
const DARK = "#1e1b4b";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function ysSchema() {
  const url = pageUrl(YS_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: ysTitle,
        description: ysDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(ysImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Yoga Studio Management Software",
        serviceType: "Yoga studio management software development",
        description:
          "Design, development and integration of custom yoga studio management software for class scheduling, online booking, waitlists, instructors, memberships and class packs, workshops, payments and student apps.",
        url,
        image: pageUrl(ysImages.dashboard.src),
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
        mainEntity: ysFaqs.map((faq) => ({
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
  { href: "#what-is-yoga-studio-software", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#scheduling", label: "Scheduling" },
  { href: "#plans", label: "Memberships & packs" },
  { href: "#instructors", label: "Instructors" },
  { href: "#workshops", label: "Workshops & retreats" },
  { href: "#online", label: "Online & hybrid" },
  { href: "#billing", label: "Billing" },
  { href: "#vs-gym", label: "vs. Gym software" },
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
    <figure className="cx-overfl-rounde-42">
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> studio.example / concept
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

const PRIMARY_CTA = "Discuss Your Yoga Studio Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#1e1b4b]" : "bg-primary text-primary-foreground"}`}
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
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#c7d2fe] bg-[#eef2ff] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

function FeatureCard({ feature, number }: { feature: YsFeature; number: string }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const extras: [string, string | undefined][] = [
    ["Value", feature.value],
    ["Solves", feature.solves],
  ];
  return (
    <article className="cm-card6c">
      <div className="cx-flex-itemsc-5">
        <span className="cx-flex-h11-1o">
          <Icon className="h-5 w-5 text-[#4338ca]" aria-hidden />
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


function NumberedCards({ items, className = "" }: { items: readonly (readonly [string, string])[]; className?: string }) {
  return (
    <ol className={`grid gap-4 ${className}`}>
      {items.map(([title, text], index) => (
        <li key={shortKey(title)} className="cm-card5">
          <div className="cx-flex-itemsc-h">
            <span
              className="cm-num"
              style={{ backgroundColor: ACCENT }}
            >
              {index + 1}
            </span>
            <p className="cx-fontse-leadin-b">{title}</p>
          </div>
          <p className="cm-p3">{text}</p>
        </li>
      ))}
    </ol>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== YS_PATH) ?? [];

export default function YogaStudioPage() {
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
                Yoga Studio Management Software
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                Schedule classes, fill mats, manage waitlists and passes, and coordinate instructors from one calm,
                connected system.
              </p>
              <div className="cm-lead">
                <p>
                  A yoga studio&apos;s week has a rhythm: recurring classes, regular students, new faces trying a drop-in, a
                  popular Saturday flow that always has a waitlist, an instructor who needs a substitute, a weekend
                  workshop and maybe a retreat later in the year. Keeping that rhythm running on spreadsheets, messaging
                  apps and a separate payment tool takes time away from teaching.
                </p>
                <p>
                  Yoga studio management software brings class schedules, online bookings, capacity and waitlists,
                  instructors, memberships and class packs, check-in, workshops, payments and reporting into one place.
                  Clickmasters designs and builds custom yoga studio management software for US studios, wellness centers
                  and yoga businesses, shaped around your schedule, your pricing and your students&apos; experience.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Yoga Studio Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={ysImages.dashboard} caption="Today's classes, bookings, waitlists and expiring packs" priority />
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

        {/* Daily operations */}
        <Section id="daily-operations" eyebrow="The problem" title="The Daily Operations Behind Every Yoga Class">
          <Prose>
            <p>
              Before students roll out their mats, someone has published the schedule, taken bookings, checked who has
              credits left, managed a waitlist, confirmed the instructor and collected payment from drop-ins. After class,
              someone records attendance, follows up with new students and reconciles payments.
            </p>
            <p>
              When those steps happen manually, the same problems repeat: double-booked spots, waitlisted students who
              never hear a spot opened, class packs that expired without notice, substitutes found at the last minute, and
              owners who can&apos;t see which classes or plans are working. Centralized management connects those steps so
              the studio runs smoothly.
            </p>
          </Prose>
        </Section>

        {/* What is */}
        <Section id="what-is-yoga-studio-software" eyebrow="Definition" title="What Is Yoga Studio Management Software?">
          <Prose>
            <p>Yoga studio management software is a business system built around class-based yoga operations. It manages:</p>
          </Prose>
          <TitledList items={whatItManages} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <LinkPanel>
            It supports <strong className="text-foreground">in-person, online and hybrid</strong> studios, so one student
            record and one plan can cover both mat-in-the-room and virtual classes. It belongs to the broader family of{" "}
            <BodyLink link={ysLinks.pillar} />, with workflows designed specifically for yoga.
          </LinkPanel>
        </Section>

        {/* Why */}
        <Section id="why-yoga-studio-software" eyebrow="Business problems" title="Why Yoga Studios Need Management Software">
          <CompareTable caption="Yoga studio challenges, what happens and how software helps" headers={["Challenge", "What happens", "How software helps"]} rows={challengeRows} />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="26 capability areas" title="Key Features of Yoga Studio Management Software">
          <Prose>
            <p>
              These are <strong className="text-foreground">potential configurable modules and custom-development options</strong>,
              scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters product. Payments,
              video and messaging depend on the providers you choose.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 12).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={LETTERS[index]} />
            ))}
          </div>
          <div className="mt-8">
            <AppFigure image={ysImages.profile} caption="Student profile: plan, credits, waiver status and attendance history" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(12).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={LETTERS[index + 12]} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build Custom Yoga Studio Software" />
          </div>
        </Section>

        {/* How */}
        <Section id="how-it-works" eyebrow="Workflow" title="How Yoga Studio Management Software Works">
          <NumberedCards items={howItWorks} className="sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Scheduling */}
        <Section id="scheduling" eyebrow="Timetable" title="Yoga Class Scheduling and Booking">
          <TitledList items={schedulingPoints} icon={CalendarDays} className="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={ysImages.calendar} caption="Weekly class calendar by room, with styles, instructors and capacity" />
          </div>
          <div className="mt-8">
            <DiagramFigure image={ysImages.booking} caption="Online booking: open spots, waitlist option and confirmation" />
          </div>
          <LinkPanel>
            For studios that also book shared rooms, trainers and capacity across other fitness services, our{" "}
            <BodyLink link={ysLinks.booking} /> covers generic self-booking and room capacity on one calendar.
          </LinkPanel>
        </Section>

        {/* Plans */}
        <Section id="plans" eyebrow="Passes" title="Yoga Membership and Class Package Management">
          <CompareTable caption="Yoga plan types and typical rules" headers={["Plan type", "Typical rules"]} rows={planRows} />
          <div className="mt-8">
            <AppFigure image={ysImages.plans} caption="Unlimited plans, class packs, drop-ins and intro offers" />
          </div>
          <Caution>
            The plan types your system supports are defined during scoping. Auto-renewals should follow your terms and
            applicable state rules.
          </Caution>
          <LinkPanel>
            For organizations that need deeper membership lifecycle features across services, such as applications,
            approvals and member portals, dedicated <BodyLink link={ysLinks.membership} /> keeps access and payment
            status attached to the right person.
          </LinkPanel>
        </Section>

        {/* Instructors */}
        <Section id="instructors" eyebrow="Teachers" title="Yoga Instructor Management">
          <TitledList items={instructorPoints} icon={BadgeCheck} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={ysImages.instructors} caption="Class assignments, availability and substitute requests" />
          </div>
        </Section>

        {/* Attendance */}
        <Section id="attendance" eyebrow="Check-in" title="Student Attendance and Check-In">
          <TitledList items={attendancePoints} icon={ClipboardCheck} className="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={ysImages.attendance} caption="Class roster with check-ins, waitlist and late-cancel flags" />
          </div>
        </Section>

        {/* Workshops */}
        <Section id="workshops" eyebrow="Programs" title="Yoga Workshop, Event and Retreat Management">
          <TitledList items={workshopPoints} icon={Mountain} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <DiagramFigure image={ysImages.retreat} caption="Retreat registration with dates, deposit option and remaining spots" />
          </div>
        </Section>

        {/* Online */}
        <Section id="online" eyebrow="Hybrid" title="Online and Hybrid Yoga Studio Management">
          <TitledList items={onlinePoints} icon={Video} className="sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            Video hosting and livestream tools come from the third-party platforms chosen during scoping. The studio
            system manages access, bookings and plans around them.
          </Note>
        </Section>

        {/* Billing */}
        <Section id="billing" eyebrow="Payments" title="Yoga Studio Payment and Billing Management">
          <CheckList items={billingPoints} icon={Receipt} className="max-w-5xl md:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={ysImages.billing} caption="Renewals, pack sales, deposits and outstanding balances" />
          </div>
          <Note>
            Payments run through a payment gateway integration with tokenized card handling. No specific gateway is
            assumed to be prebuilt. Clickmasters&apos; integration work includes Stripe subscription management and
            webhooks, which support recurring memberships.
          </Note>
        </Section>

        {/* Portal */}
        <Section id="portal" eyebrow="Self-service" title="Student Portal and Mobile Experience">
          <Prose>
            <p>These are potential capabilities, scoped per project:</p>
          </Prose>
          <CheckList items={portalPoints} icon={Smartphone} className="mt-4 max-w-5xl md:grid-cols-2" />
          <LinkPanel>
            Branded student apps can be built for iOS and Android from one codebase through Clickmasters&apos;{" "}
            <BodyLink link={ysLinks.crossPlatform} /> practice, with push notifications for waitlist promotions and
            reminders.
          </LinkPanel>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Insight" title="Yoga Studio Reporting and Analytics">
          <CompareTable caption="Yoga studio reports and what they show" headers={["Report", "What it shows"]} rows={reportRows} />
          <div className="mt-8">
            <AppFigure image={ysImages.analytics} caption="Fill rates, attendance trends and revenue by plan" />
          </div>
        </Section>

        {/* Business types */}
        <Section id="business-types" eyebrow="Who it's for" title="Yoga Studio Software for Different Business Types">
          <CompareTable caption="Operational needs by yoga business type" headers={["Business type", "Operational needs"]} rows={businessRows} />
        </Section>

        {/* Comparisons */}
        <Section id="vs-gym" eyebrow="Compare" title="Yoga Studio Management Software vs. Gym Management Software">
          <CompareTable caption="Yoga studio management compared with gym management" headers={["", "Yoga studio management", "Gym management"]} rows={gymRows} />
          <LinkPanel>
            Facilities centered on gym-floor access, check-in and member billing are a better fit for{" "}
            <BodyLink link={ysLinks.gym} />.
          </LinkPanel>
        </Section>

        <Section id="vs-fitness-studio" eyebrow="Compare" title="Yoga Studio Management Software vs. Fitness Studio Software">
          <Prose>
            <p>
              Fitness studio software serves a broader range of class-based disciplines, such as cycling, HIIT, barre and
              Pilates. Yoga studio software includes the same class foundations, plus{" "}
              <strong className="text-foreground">yoga-specific workflows</strong>: workshops and retreats, teacher-training
              programs, mat or spot selection, donation-based or community classes, meditation sessions and
              style-and-level-based scheduling. Multi-discipline studios that offer yoga alongside other formats can combine
              both approaches in a custom system.
            </p>
          </Prose>
        </Section>

        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Yoga Studio Software">
          <CompareTable caption="Cloud-based compared with on-premise yoga studio software" headers={["Factor", "Cloud-based", "On-premise"]} rows={cloudRows} />
          <Note>Security depends on configuration and operations, not on the deployment model alone.</Note>
        </Section>

        <Section id="ready-vs-custom" eyebrow="Build or buy" title="Ready-Made vs. Custom Yoga Studio Management Software">
          <CompareTable caption="Ready-made compared with custom yoga studio software" headers={["", "Ready-made", "Custom"]} rows={readyVsCustomRows} />
        </Section>

        {/* Custom */}
        <Section id="custom" eyebrow="What we deliver" title="Custom Yoga Studio Management Software Development">
          <Prose>
            <p>Clickmasters can deliver:</p>
          </Prose>
          <CheckList items={deliverables} className="mt-4 max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Yoga Studio Management Software">
          <CheckList items={benefits} className="max-w-5xl md:grid-cols-2" />
          <Note>
            Results depend on setup, adoption and your studio&apos;s model. No business growth or revenue outcome is
            guaranteed.
          </Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Yoga Studio Management System">
          <ul className="grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chooseChecklist.map((item) => (
              <li key={shortKey(item)} className="cm-card4li">
                <span aria-hidden="true" className="ico ico-sqcheck cm-ic05l" style={{ color: ACCENT }} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Why */}
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
        <Section id="process" eyebrow="Delivery" title="Yoga Studio Software Development Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Yoga Studio Management Software Cost">
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
              Frequently Asked Questions About Yoga Studio Management Software
            </h2>
            <div className="cm-list">
              {ysFaqs.map((faq, index) => (
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
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Build Yoga Studio Software Around Your Practice</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Whether you teach independently, run a boutique studio or manage several locations with workshops and
              retreats, the right system starts with your schedule, your plans and your students.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Tell Clickmasters Software Development Company how your studio runs today and where admin gets in the way of
              teaching. We&apos;ll recommend the modules and integrations you need and scope the first phase of your custom
              yoga studio management software.
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
            Discuss Your Yoga Studio Software
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
