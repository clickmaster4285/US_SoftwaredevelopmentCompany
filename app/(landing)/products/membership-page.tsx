import { shortKey } from "@/lib/short-key";
import { ListIcon } from "@/components/ui/list-icon";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BellRing,
  BookUser,
  CalendarCheck,
  Check,
  CheckCheck,
  ClipboardList,
  Database,
  Gauge,
  Inbox,
  Layers,
  LayoutDashboard,
  Lock,
  Mail,
  Megaphone,
  MessageSquare,
  Network,
  Plug,
  QrCode,
  Receipt,
  RefreshCw,
  Repeat,
  ShieldCheck,
  TrendingUp,
  UserPlus,
  UserRound,
  Wallet,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  benefits,
  billingPoints,
  challengeRows,
  chooseChecklist,
  cloudRows,
  communicationPoints,
  costFactors,
  crmRows,
  databasePoints,
  deliverables,
  features,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  lifecycle,
  MM_PATH,
  mmDescription,
  mmFaqs,
  mmImages,
  mmLinks,
  mmOgDescription,
  mmOgTitle,
  mmTitle,
  orgRows,
  planRows,
  portalPoints,
  processSteps,
  PRODUCT_NAME,
  readyVsCustomRows,
  registrationPoints,
  renewalPoints,
  reportRows,
  spreadsheetGaps,
  spreadsheetRows,
  whyClickmasters,
  type LinkSpec,
  type MmFeature,
} from "./membership-data";

export { MM_PATH, mmDescription, mmTitle, mmImages, mmOgTitle, mmOgDescription };

const ICONS: Record<string, LucideIcon> = {
  Activity,
  BarChart3,
  BellRing,
  BookUser,
  CalendarCheck,
  CheckCheck,
  Database,
  Gauge,
  Inbox,
  Layers,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Network,
  Plug,
  QrCode,
  Receipt,
  RefreshCw,
  Repeat,
  ShieldCheck,
  TrendingUp,
  UserPlus,
  UserRound,
  Wallet,
};

const ACCENT = "#0e7490";
const DARK = "#082f37";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWX";

export function mmSchema() {
  const url = pageUrl(MM_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: mmTitle,
        description: mmDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(mmImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Membership Management Software",
        serviceType: "Membership management software development",
        description:
          "Design, development and integration of custom membership management software for member registration and applications, membership plans, dues and payments, renewals, member portals, communication and reporting.",
        url,
        image: pageUrl(mmImages.dashboard.src),
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
        mainEntity: mmFaqs.map((faq) => ({
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
  { href: "#what-is-membership-software", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#registration", label: "Registration" },
  { href: "#plans", label: "Plans" },
  { href: "#renewals", label: "Renewals" },
  { href: "#billing", label: "Billing" },
  { href: "#portal", label: "Member portal" },
  { href: "#organizations", label: "Organizations" },
  { href: "#vs-crm", label: "vs. CRM" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#082f37] shadow-xl shadow-cyan-950/10 ring-1 ring-black/5">
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> members.example / concept
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

const PRIMARY_CTA = "Discuss Your Membership Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#082f37]" : "bg-primary text-primary-foreground"}`}
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
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#a5f3fc] bg-[#ecfeff] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

function FeatureCard({ feature, number }: { feature: MmFeature; number: string }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const extras: [string, string | undefined][] = [
    ["Problem", feature.problem],
    ["Value", feature.value],
    ["Lifecycle role", feature.lifecycle],
  ];
  return (
    <article className="cm-card6c">
      <div className="cx-flex-itemsc-5">
        <span className="cx-flex-h11-1w">
          <Icon className="h-5 w-5 text-[#0e7490]" aria-hidden />
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
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== MM_PATH) ?? [];

export default function MembershipPage() {
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
                Membership Management Software
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                Run applications, plans, dues, renewals and member services from one system, across the full member
                lifecycle.
              </p>
              <div className="cm-lead">
                <p>
                  Membership organizations run on records and renewals. Applications arrive by email and paper.
                  Spreadsheets track who&apos;s active, who&apos;s expired and who has paid. Renewal reminders go out late,
                  or twice. Members call to ask about their status, and staff dig through three systems to answer. As
                  membership grows, so does the admin.
                </p>
                <p>
                  Membership management software brings member records, membership plans, applications and approvals,
                  dues and payments, renewals, a member portal, communication and reporting into one platform.
                  Clickmasters designs and builds custom membership management software for US clubs, associations,
                  nonprofits and membership-based businesses, configured around your categories, rules and member
                  experience.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Membership Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={mmImages.dashboard} caption="Members, applications, renewals and dues at a glance" priority />
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

        {/* Spreadsheets */}
        <Section id="spreadsheets" eyebrow="The problem" title="The Cost of Running Membership on Spreadsheets">
          <Prose>
            <p>Most organizations start with a spreadsheet, a payment link and an email list. Over time, the gaps show up:</p>
          </Prose>
          <TitledList items={spreadsheetGaps} icon={AlertTriangle} className="mt-6 sm:grid-cols-2 lg:grid-cols-5" />
          <Note>
            Centralized membership management replaces scattered tools with one system of record and automated
            workflows, so staff spend time on members rather than on admin.
          </Note>
        </Section>

        {/* What is */}
        <Section id="what-is-membership-software" eyebrow="Definition" title="What Is Membership Management Software?">
          <Prose>
            <p>
              Membership management software is a system for administering an organization&apos;s members across the full{" "}
              <strong className="text-foreground">membership lifecycle</strong>:
            </p>
          </Prose>
          <NumberedCards items={lifecycle} className="mt-6 sm:grid-cols-2 lg:grid-cols-5" />
          <h3 className="mt-12 text-2xl font-semibold tracking-tight">Storing Member Data vs. Managing Membership</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            A contact list or CRM can <strong className="text-foreground">store</strong> member details. Membership software{" "}
            <strong className="text-foreground">manages the membership itself.</strong> It knows each person&apos;s category,
            status, start and expiry dates, dues owed and paid, renewal history, access rights and approvals, and it
            automates the workflows that change them. That operational layer is what separates membership software from
            a database.
          </p>
        </Section>

        {/* Why */}
        <Section id="why-membership-software" eyebrow="Business problems" title="Why Organizations Need Membership Management Software">
          <CompareTable caption="Membership challenges, what happens and how membership software helps" headers={["Challenge", "What happens", "How membership software helps"]} rows={challengeRows} />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="24 capability areas" title="Key Features of Membership Management Software">
          <Prose>
            <p>
              These are <strong className="text-foreground">potential modules and configurable custom-development options</strong>,
              scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters product. Payment
              processing and messaging depend on the providers you choose.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 12).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={LETTERS[index]} />
            ))}
          </div>
          <div className="mt-8">
            <DiagramFigure image={mmImages.card} caption="Digital membership card with a QR code, verified at events" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(12).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={LETTERS[index + 12]} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build Custom Membership Management Software" />
          </div>
        </Section>

        {/* How */}
        <Section id="how-it-works" eyebrow="Workflow" title="How Membership Management Software Works">
          <NumberedCards items={howItWorks} className="sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Database */}
        <Section id="database" eyebrow="System of record" title="Member Database and Record Management">
          <CheckList items={databasePoints} icon={Database} className="max-w-5xl md:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={mmImages.database} caption="One record per member: category, status, chapter and renewal" />
          </div>
        </Section>

        {/* Registration */}
        <Section id="registration" eyebrow="Join" title="Membership Registration and Onboarding">
          <TitledList items={registrationPoints} icon={UserPlus} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <DiagramFigure image={mmImages.registration} caption="Online application: category, eligibility, documents and payment" />
          </div>
        </Section>

        {/* Plans */}
        <Section id="plans" eyebrow="Categories" title="Membership Plans and Subscription Management">
          <CompareTable caption="Membership plan types and typical rules" headers={["Plan type", "Typical rules"]} rows={planRows} />
          <div className="mt-8">
            <AppFigure image={mmImages.plans} caption="Plans with pricing, terms, benefits and dues collected" />
          </div>
          <Note>
            Plan changes (upgrades, downgrades, prorations) and expiration dates are managed automatically. The plan types
            your system supports are defined during scoping. Membership software focuses on the{" "}
            <strong className="text-foreground">membership</strong> as a relationship with benefits and status, which
            distinguishes it from pure subscription billing tools.
          </Note>
        </Section>

        {/* Renewals */}
        <Section id="renewals" eyebrow="Renew" title="Membership Renewals and Retention">
          <TitledList items={renewalPoints} icon={RefreshCw} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={mmImages.renewals} caption="Reminder schedule, expiring members and win-back" />
          </div>
          <Caution>
            Automatic renewals should follow your member agreements and applicable state rules. Software supports
            retention work, but it doesn&apos;t guarantee renewal rates.
          </Caution>
        </Section>

        {/* Billing */}
        <Section id="billing" eyebrow="Dues" title="Membership Billing and Payment Management">
          <TitledList items={billingPoints} icon={Receipt} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={mmImages.billing} caption="Dues invoices, dues by plan and payout reconciliation" />
          </div>
          <LinkPanel>
            Payments run through a gateway integration with tokenized card handling. No specific gateway is assumed to be
            prebuilt. Clickmasters&apos; <BodyLink link={mmLinks.api} /> work includes Stripe subscription management and
            webhook processing, which is what recurring dues typically rely on.
          </LinkPanel>
        </Section>

        {/* Portal */}
        <Section id="portal" eyebrow="Self-service" title="Member Portal and Self-Service">
          <Prose>
            <p>These are possible capabilities, scoped per project:</p>
          </Prose>
          <CheckList items={portalPoints} className="mt-4 max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <AppFigure image={mmImages.portal} caption="Member portal: status, renewal, events, payments and profile" />
          </div>
          <LinkPanel>
            Clickmasters builds authenticated customer and partner portals with self-service access to data and
            documents through its <BodyLink link={mmLinks.webApp} /> practice. That&apos;s the same foundation a member
            portal needs.
          </LinkPanel>
        </Section>

        {/* Communication */}
        <Section id="communication" eyebrow="Engage" title="Member Communication and Engagement">
          <TitledList items={communicationPoints} icon={Megaphone} className="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={mmImages.comms} caption="Segmented email draft and event registrations with member pricing" />
          </div>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Measure" title="Membership Reporting and Analytics">
          <CompareTable caption="Membership reports and what they show" headers={["Report", "What it shows"]} rows={reportRows} />
          <div className="mt-8">
            <AppFigure image={mmImages.analytics} caption="Growth, renewal rate by category and dues summary" />
          </div>
        </Section>

        {/* Orgs */}
        <Section id="organizations" eyebrow="Who it's for" title="Membership Management Software for Different Organizations">
          <CompareTable caption="Distinct requirements by organization type" headers={["Organization", "Distinct requirements"]} rows={orgRows} />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Gym membership management software is this same lifecycle for a gym: the plan, the freeze, the
            renewal and whether the member can check in.
          </p>
          <LinkPanel>
            Sports organizations that also manage teams, coaches and fixtures may need <BodyLink link={mmLinks.sportsClub} />{" "}
            alongside or instead of standalone membership tools. Fitness organizations that coordinate classes, amenities
            and staff rosters are served by a <BodyLink link={mmLinks.fitnessClub} />.
          </LinkPanel>
        </Section>

        {/* Comparisons */}
        <Section id="vs-spreadsheets" eyebrow="Compare" title="Membership Management Software vs. Spreadsheets">
          <CompareTable caption="Spreadsheets compared with membership software" headers={["", "Spreadsheets", "Membership software"]} rows={spreadsheetRows} />
        </Section>

        <Section id="vs-crm" eyebrow="Compare" title="Membership Management Software vs. CRM Software">
          <CompareTable caption="Membership management compared with CRM" headers={["", "Membership management", "CRM"]} rows={crmRows} />
          <LinkPanel>
            Organizations that actively recruit members, sponsors or corporate partners often benefit from both, or from
            an integrated solution. Sales pipelines belong in dedicated <BodyLink link={mmLinks.crm} />, while member
            status, dues and renewals belong in membership management.
          </LinkPanel>
        </Section>

        <Section id="vs-ams" eyebrow="Compare" title="Membership Management Software vs. Association Management Software">
          <Prose>
            <p>
              Association management software (AMS) is broader. It typically includes membership administration plus{" "}
              <strong className="text-foreground">governance</strong> (boards and committees),{" "}
              <strong className="text-foreground">chapters</strong>, <strong className="text-foreground">events and conferences</strong>,{" "}
              <strong className="text-foreground">professional development and certification</strong>, and{" "}
              <strong className="text-foreground">financial and administrative operations</strong>. Membership management
              software focuses on the member lifecycle itself. Membership and event management software is
              the wider set: the member record plus registration for the meetings and conferences the
              organization runs. Associations can start with membership management and add
              AMS-style modules such as committees, certification tracking and continuing education as custom extensions.
            </p>
          </Prose>
        </Section>

        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Membership Software">
          <CompareTable caption="Cloud-based compared with on-premise membership software" headers={["Factor", "Cloud-based", "On-premise"]} rows={cloudRows} />
        </Section>

        <Section id="ready-vs-custom" eyebrow="Build or buy" title="Ready-Made vs. Custom Membership Management Software">
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Teams comparing Wild Apricot membership management software are looking at a packaged product
            for associations and clubs. A custom build is the alternative when your categories, approvals
            or dues do not match that package.
          </p>
        </Section>

        {/* Custom */}
        <Section id="custom" eyebrow="What we deliver" title="Custom Membership Management Software Development">
          <Prose>
            <p>Clickmasters can deliver:</p>
          </Prose>
          <CheckList items={deliverables} className="mt-4 max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Membership Management Software">
          <CheckList items={benefits} className="max-w-5xl md:grid-cols-2" />
          <Note>Results depend on setup, adoption and your organization&apos;s processes. No specific outcome is guaranteed.</Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Membership Management System">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Best membership management software, on a comparison list, is the product whose categories,
            renewals and dues match your rules. Use the list to check that fit.
          </p>
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
        <Section id="process" eyebrow="Delivery" title="Membership Software Development Process">
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
        <Section id="cost" eyebrow="Budgeting" title="Membership Management Software Cost">
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
              Frequently Asked Questions About Membership Management Software
            </h2>
            <div className="cm-list">
              {mmFaqs.map((faq, index) => (
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
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Build Membership Software Around Your Organization</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Whether you run a club, an association, a nonprofit or a membership-based business, the right system starts
              with your categories, rules and member experience.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Tell Clickmasters Software Development Company how membership works in your organization today and where
              administration slows you down. We&apos;ll recommend the modules and integrations you need and scope the first
              phase of your custom membership management software.
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
            Discuss Your Membership Software
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
