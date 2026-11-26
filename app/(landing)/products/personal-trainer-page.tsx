import { shortKey } from "@/lib/short-key";
import { ListIcon } from "@/components/ui/list-icon";
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
  ClipboardList,
  Dumbbell,
  LayoutDashboard,
  Library,
  Lock,
  MessageSquare,
  Package,
  Plug,
  Ruler,
  Smartphone,
  Target,
  Ticket,
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
  businessTypeRows,
  challengeRows,
  chooseChecklist,
  clientPoints,
  cloudRows,
  comparisonRows,
  costFactors,
  customPoints,
  features,
  howItWorks,
  independentBenefits,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  manages,
  packageRows,
  processSteps,
  PRODUCT_NAME,
  programPoints,
  PT_PATH,
  ptDescription,
  ptFaqs,
  ptImages,
  ptLinks,
  ptOgDescription,
  ptOgTitle,
  ptTitle,
  readyVsCustomRows,
  schedulingPoints,
  studioBenefits,
  whyClickmasters,
  type LinkSpec,
  type PtFeature,
} from "./personal-trainer-data";

export { PT_PATH, ptDescription, ptTitle, ptImages, ptOgTitle, ptOgDescription };

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  Dumbbell,
  LayoutDashboard,
  Library,
  MessageSquare,
  Package,
  Plug,
  Ruler,
  Smartphone,
  Target,
  Ticket,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
};

const ACCENT = "#c2410c";
const DARK = "#1c0d04";

export function ptSchema() {
  const url = pageUrl(PT_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: ptTitle,
        description: ptDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(ptImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Personal Trainer Management Software",
        serviceType: "Personal trainer management software development",
        description:
          "Design, development and integration of custom personal trainer management software for client records, appointments, workout plans, progress tracking, training packages, payments and client apps.",
        url,
        image: pageUrl(ptImages.dashboard.src),
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
        mainEntity: ptFaqs.map((faq) => ({
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
  { href: "#what-is-trainer-software", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#clients", label: "Clients" },
  { href: "#programs", label: "Programs and progress" },
  { href: "#scheduling", label: "Scheduling" },
  { href: "#packages", label: "Packages and payments" },
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
    <figure className="cx-overfl-rounde-3k">
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> coach.example / concept
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

const PRIMARY_CTA = "Discuss Your Personal Trainer Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#1c0d04]" : "bg-primary text-primary-foreground"}`}
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
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#fed7aa] bg-[#fff7ed] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

function FeatureCard({ feature, number }: { feature: PtFeature; number: number }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const extras: [string, string | undefined][] = [
    ["Problem", feature.problem],
    ["Value", feature.value],
    ["Note", feature.note],
  ];
  return (
    <article className="cm-card6c">
      <div className="cx-flex-itemsc-5">
        <span className="cx-flex-h11-21">
          <Icon className="h-5 w-5 text-[#c2410c]" aria-hidden />
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
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== PT_PATH) ?? [];

export default function PersonalTrainerPage() {
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
                Personal Trainer Management Software
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                Run your clients, sessions, programs and packages from one system, so you can spend your time coaching
                instead of on admin.
              </p>
              <div className="cm-lead">
                <p>
                  Most personal trainers start with a calendar app, a spreadsheet of clients, workout notes on their phone
                  and a payment app. It works until it doesn&apos;t. Sessions get double-booked, package balances drift,
                  programs live in five places, and nobody can say which clients are close to renewing or quietly
                  drifting away.
                </p>
                <p>
                  Personal trainer management software brings client records, goals and assessments, appointments,
                  workout plans, progress tracking, training packages, payments and communication into one place.
                  Clickmasters designs and builds custom personal trainer management software for US independent
                  trainers and personal training businesses, shaped around how you coach, sell and schedule.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "See Personal Trainer Software Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={ptImages.dashboard} caption="Today's sessions, low balances and revenue at a glance" priority />
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

        {/* Why */}
        <Section id="why-trainer-software" eyebrow="Coaching vs. admin" title="Why Personal Trainers Need Dedicated Management Software">
          <Prose>
            <p>
              Personal training is a relationship business with a lot of operations underneath it. Every client has
              goals, health considerations, a schedule, a program, a package balance and a payment method. Multiply that
              by 20, 50 or 200 clients and several trainers, and the admin starts to compete with the coaching.
            </p>
            <p>
              Generic calendar, spreadsheet and payment tools weren&apos;t built to connect those pieces. Dedicated
              software links them: a booked session reduces a package balance, a completed session updates the
              client&apos;s history, a missed session follows your policy, and the trainer&apos;s next session starts with
              the right program and notes.
            </p>
          </Prose>
        </Section>

        {/* What is */}
        <Section id="what-is-trainer-software" eyebrow="Definition" title="What Is Personal Trainer Management Software?">
          <Prose>
            <p>
              Personal trainer management software is a business system for fitness professionals who coach clients
              one-to-one or in small groups. Personal training software is the shorter name trainers use for
              the same system. It manages:
            </p>
          </Prose>
          <TitledList items={manages} className="mt-6 sm:grid-cols-2 lg:grid-cols-5" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            It sits within the wider family of <BodyLink link={ptLinks.pillar} />, but its focus is the{" "}
            <strong className="text-foreground">trainer–client relationship</strong>, not running a facility.
          </p>
          <h3 className="mt-12 text-2xl font-semibold tracking-tight">Personal Trainer Software vs. Gym and Club Software</h3>
          <CompareTable
            caption="Personal trainer management compared with gym, fitness club and fitness studio management"
            headers={["", "Personal trainer management", "Gym management", "Fitness club management", "Fitness studio management"]}
            rows={comparisonRows}
          />
          <LinkPanel>
            Trainers who work inside a facility often need both. The gym handles memberships and door access through{" "}
            <BodyLink link={ptLinks.gym} />, while trainer software handles clients, programs and session packages.
          </LinkPanel>
        </Section>

        {/* Challenges */}
        <Section id="challenges" eyebrow="Business problems" title="Challenges Personal Training Businesses Face">
          <CompareTable caption="Personal training challenges, their impact and how software helps" headers={["Challenge", "Impact", "How software helps"]} rows={challengeRows} />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="20 capability areas" title="Key Features of Personal Trainer Management Software">
          <Prose>
            <p>
              These are <strong className="text-foreground">potential modules, configurable capabilities or custom-development
              options</strong> scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters
              product. Payments, messaging and wearable connections depend on the providers you choose.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 9).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={index + 1} />
            ))}
          </div>
          <div className="mt-8">
            <AppFigure image={ptImages.session} caption="Session log: exercises performed, notes and the credit used" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(9).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={index + 10} />
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure image={ptImages.portal} caption="Client portal: next session, workouts, progress and package" />
            <AppFigure image={ptImages.analytics} caption="Sessions, package sales, renewals and retention" />
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build Custom Personal Trainer Software" />
          </div>
        </Section>

        {/* How */}
        <Section id="how-it-works" eyebrow="Workflow" title="How Personal Trainer Management Software Works">
          <NumberedCards items={howItWorks} className="sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits for Independent Personal Trainers">
          <CheckList items={independentBenefits} className="max-w-5xl md:grid-cols-2" />
          <h2 className="mt-14 text-3xl font-semibold tracking-tight md:text-4xl">Benefits for Personal Training Studios and Businesses</h2>
          <CheckList items={studioBenefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <AppFigure image={ptImages.trainers} caption="Trainer schedules, client assignments and utilization" />
          </div>
          <Note>Results depend on setup and adoption. No specific business outcome is guaranteed.</Note>
        </Section>

        {/* Clients */}
        <Section id="clients" eyebrow="Relationships" title="Client Management and Engagement">
          <Prose>
            <p>
              Personal training client management software keeps each person on one profile: goals,
              assessments, session notes and the package still left. Strong client management combines
              records with relationship habits:
            </p>
          </Prose>
          <TitledList items={clientPoints} icon={UserRound} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={ptImages.client} caption="Client profile: goals, assessments, notes and package" />
          </div>
          <LinkPanel>
            Trainer software includes CRM-style features for leads, consultations and follow-ups specific to coaching.
            General sales pipelines across a whole company are the job of dedicated <BodyLink link={ptLinks.crm} />.
          </LinkPanel>
        </Section>

        {/* Programs */}
        <Section id="programs" eyebrow="Programming" title="Workout Planning and Progress Monitoring">
          <CheckList items={programPoints} className="max-w-5xl md:grid-cols-2" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure image={ptImages.program} caption="Program builder with phases, loads and coaching cues" />
            <AppFigure image={ptImages.progress} caption="Strength trends, measurements and assessment comparisons" />
          </div>
          <Caution>Programming and progress features support professional coaching. They don&apos;t replace medical advice.</Caution>
        </Section>

        {/* Scheduling */}
        <Section id="scheduling" eyebrow="Calendar" title="Appointment Scheduling and Session Management">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Personal training scheduling and billing software joins the calendar to the package. A booked
            session uses a credit, and the charge follows the plan that was sold.
          </p>
          <TitledList items={schedulingPoints} icon={CalendarDays} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={ptImages.calendar} caption="Trainer availability, booked sessions and open slots" />
          </div>
          <LinkPanel>
            For businesses that also book rooms, classes and shared resources, our <BodyLink link={ptLinks.booking} />{" "}
            keeps trainers, rooms and class capacity on one calendar.
          </LinkPanel>
        </Section>

        {/* Packages */}
        <Section id="packages" eyebrow="Revenue" title="Training Packages, Billing and Payments">
          <CompareTable caption="Training offerings and how the system can handle them" headers={["Offering", "How the system can handle it"]} rows={packageRows} />
          <div className="mt-8">
            <AppFigure image={ptImages.packages} caption="Offerings, credits, renewals and balances" />
          </div>
          <Note>
            Supporting features include invoices and receipts, payment history, outstanding balances, discounts,
            refunds, renewal reminders and revenue reports. Payments run through a{" "}
            <strong className="text-foreground">payment gateway integration</strong> with tokenized card handling. No gateway is
            assumed to be prebuilt, and package and auto-renewal terms should follow your client agreements and
            applicable state rules.
          </Note>
        </Section>

        {/* Business types */}
        <Section id="business-types" eyebrow="Who it's for" title="Personal Trainer Software for Different Business Types">
          <CompareTable caption="Typical needs by personal training business type" headers={["Business type", "Typical needs"]} rows={businessTypeRows} />
        </Section>

        {/* Custom */}
        <Section id="custom" eyebrow="Build to fit" title="Custom Personal Trainer Software Development">
          <Prose>
            <p>Custom development makes sense when your coaching model doesn&apos;t fit standard tools:</p>
          </Prose>
          <TitledList items={customPoints} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
          <LinkPanel>
            Clickmasters builds iOS and Android apps from a single codebase through its{" "}
            <BodyLink link={ptLinks.crossPlatform} /> practice, including push notifications for reminders and program
            updates.
          </LinkPanel>
        </Section>

        {/* Cloud and ready vs custom */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Personal Trainer Software">
          <CompareTable caption="Cloud-based compared with on-premise personal trainer software" headers={["Factor", "Cloud-based", "On-premise"]} rows={cloudRows} />
          <Note>Security depends on configuration and operations, not on the deployment model alone.</Note>
        </Section>

        <Section id="ready-vs-custom" eyebrow="Build or buy" title="Ready-Made vs. Custom Personal Trainer Management Software">
          <CompareTable caption="Ready-made compared with custom personal trainer software" headers={["", "Ready-made software", "Custom software"]} rows={readyVsCustomRows} />
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Personal Trainer Management System">
          <ul className="grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chooseChecklist.map((item) => (
              <li key={shortKey(item)} className="cm-card4li">
                <span aria-hidden="true" className="ico ico-sqcheck cm-ic05l" style={{ color: ACCENT }} />
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
        <Section id="process" eyebrow="Delivery" title="Personal Trainer Management Software Development Process">
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

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Cost of Personal Trainer Management Software">
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
              Frequently Asked Questions About Personal Trainer Management Software
            </h2>
            <div className="cm-list">
              {ptFaqs.map((faq, index) => (
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
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Build Personal Trainer Software Around the Way You Coach</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Whether you&apos;re an independent trainer ready to stop juggling apps or a training business adding
              coaches and locations, the right software starts with your clients, programs and packages.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Tell Clickmasters Software Development Company how your coaching business runs today. We&apos;ll recommend
              the modules and integrations you need and scope the first phase of your custom personal trainer
              management software.
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
            Discuss Your Trainer Software Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
