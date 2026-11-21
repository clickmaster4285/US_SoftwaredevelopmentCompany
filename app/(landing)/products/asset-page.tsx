import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Archive,
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  Calculator,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardList,
  Database,
  Factory,
  FileText,
  Fingerprint,
  Gauge,
  History,
  Laptop,
  Lock,
  MapPin,
  Plug,
  QrCode,
  RefreshCw,
  ShieldCheck,
  Square,
  UserCheck,
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
  ASSET_PATH,
  assetDescription,
  assetFaqs,
  assetImages,
  assetLinks,
  assetTitle,
  assetVsInventoryRows,
  benefitGroups,
  centralPoints,
  challengeRows,
  chooseChecklist,
  cloudVsOnPremRows,
  costFactors,
  customReasons,
  features,
  fixedVsItRows,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrationRows,
  lifecycle,
  processSteps,
  PRODUCT_NAME,
  typicalUses,
  whyClickmasters,
  type AssetFeature,
  type LinkSpec,
} from "./asset-data";

export { ASSET_PATH, assetDescription, assetTitle, assetImages };

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Archive,
  BarChart3,
  Building2,
  Calculator,
  CalendarClock,
  Database,
  Factory,
  FileText,
  Fingerprint,
  Gauge,
  History,
  Laptop,
  MapPin,
  Plug,
  QrCode,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  Wrench,
};

const ACCENT = "#4d7c0f";
const DARK = "#17220a";

export function assetSchema() {
  const url = pageUrl(ASSET_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: assetTitle,
        description: assetDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(assetImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Asset Management Software",
        serviceType: "Asset management software development",
        description:
          "Design, development and integration of asset management software for asset registries, barcode and QR tracking, assignment, maintenance, depreciation records, audits and retirement.",
        url,
        image: pageUrl(assetImages.dashboard.src),
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
        mainEntity: assetFaqs.map((faq) => ({
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
  { href: "#what-is-asset-management", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#lifecycle", label: "Lifecycle" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#industries", label: "Industries" },
  { href: "#fixed-vs-it", label: "Fixed vs. IT assets" },
  { href: "#asset-vs-inventory", label: "Asset vs. inventory" },
  { href: "#integrations", label: "Integrations" },
  { href: "#ai", label: "AI" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#17220a] shadow-xl shadow-lime-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> assets.example / concept
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

const PRIMARY_CTA = "Discuss Your Asset Management Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#17220a]" : "bg-primary text-primary-foreground"}`}
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

function FeatureCard({ feature, number }: { feature: AssetFeature; number: number }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const rows: [string, string | undefined][] = [
    ["What it does", feature.what],
    ["Why it matters", feature.why],
    ["Benefit", feature.benefit],
    ["Use case", feature.useCase],
  ];
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ecfccb]">
          <Icon className="h-5 w-5 text-[#4d7c0f]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">
          <span className="mr-1.5 text-sm font-bold" style={{ color: ACCENT }}>
            {number}.
          </span>
          {feature.title}
        </h3>
      </div>
      <dl className="mt-4 space-y-2.5 text-sm leading-6">
        {rows
          .filter((row): row is [string, string] => Boolean(row[1]))
          .map(([label, text]) => (
            <div key={label}>
              <dt className="inline font-semibold text-foreground">{label}: </dt>
              <dd className="inline text-muted-foreground">{text}</dd>
            </div>
          ))}
      </dl>
    </article>
  );
}

function FeatureGrid({ from, to, className = "md:grid-cols-2 lg:grid-cols-3" }: { from: number; to: number; className?: string }) {
  return (
    <div className={`grid gap-5 ${className}`}>
      {features.slice(from, to).map((feature, index) => (
        <FeatureCard key={feature.title} feature={feature} number={from + index + 1} />
      ))}
    </div>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== ASSET_PATH) ?? [];

export default function AssetPage() {
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
                Asset Management Software
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                Know what you own, where it is, who has it, and what it needs, from purchase to retirement.
              </p>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Laptops that leave with departing employees. Machines that fail because nobody tracked
                  their service schedule. Equipment bought twice because the first one couldn&apos;t be
                  found. An asset register in a spreadsheet that hasn&apos;t matched reality since the last
                  audit. As organizations add locations, teams and equipment, informal asset tracking stops
                  working.
                </p>
                <p>
                  Asset management software gives you one accurate record of every asset: its tag,
                  location, owner, condition, maintenance history, documents, value and lifecycle status.
                  Clickmasters designs, builds and integrates custom asset management systems for US
                  businesses, shaped around your asset types, locations, maintenance workflows and the
                  financial and IT systems you already use. Asset management software USA teams use this
                  as an asset management software solution: one asset management software tool for the
                  register, the work and the reports.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Asset Management Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={assetImages.dashboard} caption="Asset management software dashboard: every asset, its status and its location" priority />
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

        {/* Why centralized */}
        <Section id="why-centralized" eyebrow="Single source of truth" title="Why a Centralized Asset Management System Matters">
          <Prose>
            <p>
              An asset management system replaces scattered spreadsheets, paper logs and tribal knowledge
              with a single source of truth. That brings four improvements:
            </p>
          </Prose>
          <NumberedCards items={centralPoints} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* What is */}
        <Section id="what-is-asset-management" eyebrow="Definition" title="What Is Asset Management Software?">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <Prose>
                <p>
                  Asset management software is a system for recording, tracking, maintaining and reporting
                  on an organization&apos;s assets throughout their lifecycle. &ldquo;Assets&rdquo; here
                  means items the business owns and uses to operate, such as equipment, machinery,
                  vehicles, tools, IT hardware, software licenses, furniture and facilities equipment. It
                  doesn&apos;t mean stock held for sale.
                </p>
                <p>
                  Asset management software what is it, in one sentence: a register of things you use,
                  plus the history of who has them and what was done to them. Asset management software
                  systems hold that register. Asset management software enterprise is the same register
                  across many sites. Asset management software EAM is the name when maintenance and
                  reliability are the main job. An asset management system ISO 55000 sets out the ideas
                  of value, lifecycle and decisions. An asset management system ISO 55001 is the
                  requirements text an organization can be audited against. An asset management system
                  55001 program uses the register, work history and audit trail as evidence. The software
                  organizes those records. It is not an ISO certificate.
                </p>
                <p>Typical uses include:</p>
              </Prose>
              <CheckList items={typicalUses} className="mt-4" />
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                Related categories
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Several specialized categories sit under this umbrella:{" "}
                <strong className="text-foreground">fixed asset management</strong> (accounting view),{" "}
                <strong className="text-foreground">IT asset management (ITAM)</strong>,{" "}
                <strong className="text-foreground">enterprise asset management (EAM)</strong> for
                asset-intensive operations, and <strong className="text-foreground">equipment management</strong>.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                <strong className="text-foreground">Digital asset management (DAM)</strong> sounds similar
                but is a different category. It organizes media files such as images and videos, not
                physical or IT assets.
              </p>
            </div>
          </div>
        </Section>

        {/* Why need */}
        <Section id="why-asset-management" eyebrow="Business problems" title="Why Businesses Need Asset Management Software">
          <CompareTable
            caption="Asset management challenges, what happens, and how asset management software helps"
            headers={["Challenge", "What happens", "How asset management software helps"]}
            rows={challengeRows}
          />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="20 capability areas" title="Core Features and Capabilities">
          <Prose>
            <p>
              Asset management software features below are{" "}
              <strong className="text-foreground">configurable modules and custom-development options</strong>{" "}
              scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters
              product.
            </p>
          </Prose>
          <div className="mt-10 space-y-10">
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <FeatureGrid from={0} to={2} className="" />
              <AppFigure image={assetImages.registry} caption="One registry instead of conflicting lists" />
            </div>
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <DiagramFigure image={assetImages.qr} caption="Scan a tag, see the asset, check it out" />
              <FeatureGrid from={2} to={3} className="" />
            </div>
            <FeatureGrid from={3} to={5} className="md:grid-cols-2" />
            <AppFigure image={assetImages.assignment} caption="Custodian, location and history for one asset" />
            <FeatureGrid from={5} to={8} />
            <AppFigure image={assetImages.maintenance} caption="Planned work replaces emergency repairs" />
            <FeatureGrid from={8} to={17} />
            <AppFigure image={assetImages.analytics} caption="Utilization, maintenance spend and depreciation" />
            <FeatureGrid from={17} to={20} />
            <AppFigure image={assetImages.multiLocation} caption="Site-level control with a consolidated view" />
          </div>
          <p className="mt-10 max-w-3xl text-base leading-7 text-muted-foreground">
            Asset management software QR codes and an asset management system barcode identify the item
            on a label. Asset tracking software with barcode scanner reads that label in the room. Asset
            management software RFID, and an asset management system with RFID, reads many tags at once
            and needs the readers and tags to match. Asset management software depreciation stores cost,
            useful life and book value. Asset management software with depreciation keeps those figures
            on the operational record. Your accountant still sets the method and the tax treatment. Asset
            management software maintenance turns a due date into work. Asset management ticketing
            software is that work order: the problem, the assignee, the parts, the labor and the
            close-out. Asset management reporting software reads the same record for counts, value,
            overdue work and audit gaps. Asset management software UI and the asset management system UI
            are the screens for the registry, the scan, the work order and the dashboard.
          </p>
          <div className="mt-10">
            <PrimaryCta label="Build a Custom Asset Management System" />
          </div>
        </Section>

        {/* Lifecycle */}
        <Section id="lifecycle" eyebrow="Plan to retire" title="Asset Lifecycle Management">
          <NumberedCards items={lifecycle} className="sm:grid-cols-2 lg:grid-cols-3" />
          <DiagramFigure
            image={assetImages.lifecycle}
            caption="Nine lifecycle stages, all recorded on one asset record"
            className="mt-8"
          />
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Workflow" title="How Asset Management Software Works">
          <Prose>
            <p>
              An asset management system workflow runs the steps below in order, and each step writes
              back to the same record.
            </p>
          </Prose>
          <NumberedCards items={howItWorks} className="mt-6 md:grid-cols-2 lg:grid-cols-4" />
          <DiagramFigure image={assetImages.audit} caption="Room-by-room audits on mobile, with offline scanning" className="mt-8" />
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="Industry-Specific Use Cases">
          <CompareTable
            caption="Typical assets and key needs by industry"
            headers={["Industry", "Typical assets", "Key needs"]}
            rows={industryRows}
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              Asset management software industry needs are not the same. Asset management software for
              manufacturing follows machines, meters and downtime. Asset management software construction
              follows tools and heavy equipment by site and crew. Asset management software for IT
              follows devices and licenses from hiring through return. K 12 asset management software
              covers classroom technology, lab equipment and devices loaned to students. Asset management
              software small business often starts with a register, tags and assignments, then adds
              maintenance when the spreadsheet breaks.
            </p>
            <p>
              Asset management software government and asset management software municipal keep fleets,
              facilities and field equipment on one register, with an audit trail for disposal. Asset
              management system govtech is that register built around a public agency&apos;s procurement
              and records rules. Asset management software public works and asset management software
              infrastructure cover the roads, plants, pumps and buildings a city maintains. Asset
              management software for utilities and asset management software utilities cover treatment,
              distribution and the crews who service them. Asset management software for water utilities
              is the same pattern for plants, mains and meters.
            </p>
            <p>
              Asset management software housing tracks units, appliances and shared building equipment
              for a housing operator. Asset management software real estate and asset management software
              for real estate track buildings, units and the equipment inside them. This is operational
              property equipment, not an investment portfolio. Asset management software renewable energy
              tracks turbines, inverters and site gear, with inspection dates. Asset management GIS
              software stores a coordinate or a map reference so a crew can see where the asset sits. It
              is a location on the asset record, not a full geographic information system by itself.
            </p>
          </div>
          <Note>
            Vehicle fleets have their own servicing rhythm. Where fleet servicing, work orders and parts are
            the main need, dedicated <BodyLink link={assetLinks.vehicle} /> covers service schedules, work
            orders and return-to-service tracking, while the asset register keeps the ownership and
            lifecycle record.
          </Note>
        </Section>

        {/* Fixed vs IT */}
        <Section id="fixed-vs-it" eyebrow="Two views" title="Fixed Asset Management vs. IT Asset Management">
          <CompareTable
            caption="Fixed asset management compared with IT asset management"
            headers={["", "Fixed asset management", "IT asset management (ITAM)"]}
            rows={fixedVsItRows}
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Many organizations need both views of the same assets. A laptop is an IT asset and may also be
            a capitalized fixed asset. A single asset management system can serve both, with role-specific
            screens and data.
          </p>
        </Section>

        {/* Asset vs inventory */}
        <Section id="asset-vs-inventory" eyebrow="Know the difference" title="Asset Management vs. Inventory Management">
          <CompareTable
            caption="Asset management compared with inventory management"
            headers={["", "Asset management", "Inventory management"]}
            rows={assetVsInventoryRows}
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Most businesses need both. Spare parts are inventory, and the machine they fix is an asset. If
            your main challenge is stock levels, replenishment and stock availability, start with{" "}
            <BodyLink link={assetLinks.inventory} />. If it&apos;s equipment accountability, maintenance and
            lifecycle value, asset management is the right foundation. Asset management inventory
            software answers a different question: how many of a part you have, not which named machine
            you own.
          </p>
        </Section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Asset Management">
          <CompareTable
            caption="Cloud-based asset management compared with on-premise"
            headers={["Factor", "Cloud-based", "On-premise"]}
            rows={cloudVsOnPremRows}
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Asset management software cloud based means people open the register in a browser. Asset
            management software cloud is that deployment. Asset management SaaS software is the hosted
            form, with the vendor running the servers. Asset management software online is the browser
            session itself. Asset management software platforms are the packaged products you compare
            before you build or buy. Asset management software offline still matters in a plant basement
            or a yard with no signal: the scan stays on the device and syncs when the connection returns.
          </p>
        </Section>

        {/* Custom */}
        <Section id="custom-vs-ready-made" eyebrow="Build or buy" title="Custom Asset Management Software vs. Ready-Made Software">
          <Prose>
            <p>
              Ready-made tools work well for standard IT or office asset tracking.{" "}
              <strong className="text-foreground">Custom asset management software</strong> makes sense
              when:
            </p>
          </Prose>
          <TitledList items={customReasons} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Asset Management Software Integrations">
          <CompareTable caption="Asset management integrations" headers={["System", "Typical data exchange"]} rows={integrationRows} />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#d9f99d] bg-[#f7fee7] p-5 text-base leading-7 text-muted-foreground">
            <Plug className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>
              <BodyLink link={assetLinks.erp} /> usually remains the financial system of record. The asset
              management system keeps the operational detail (location, custodian, condition, maintenance)
              and exchanges purchases, capitalization and depreciation data with it, with clear rules about
              which system owns each field. Asset management ERP software is that exchange.
            </p>
          </div>
          <DiagramFigure
            image={assetImages.integration}
            caption="The registry keeps operational detail; each connected system owns its own fields"
            className="mt-8"
          />
        </Section>

        {/* AI */}
        <Section id="ai" eyebrow="Optional, emerging" title="AI in Asset Management">
          <Prose>
            <p>
              Asset management software AI and asset management software with AI are{" "}
              <strong className="text-foreground">optional, emerging additions</strong>, not standard
              features. They can suggest a maintenance window or a category from history. A person
              reviews the suggestion and can reject it. They depend on having enough good-quality data:
            </p>
          </Prose>
          <TitledList items={aiPoints} icon={Brain} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <Caution>
            Predictions need historical data, validation against real outcomes, and human judgment before
            acting. Clickmasters builds this kind of capability through its{" "}
            <BodyLink link={assetLinks.predictive} /> practice, which includes risk detection and anomaly
            detection for operational monitoring.
          </Caution>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Business Benefits">
          <TitledList items={benefitGroups} className="sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            Asset management software benefits are fewer lost items, more planned maintenance and a
            register finance can reconcile. Actual results depend on data quality, tagging discipline,
            process adoption and scope. Measure them against your own baseline.
          </Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Asset Management Software">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Asset management software reviews, an asset management software top 10, top 10 enterprise
            asset management software and top 5 asset management software are comparison lists. Use them
            to check fit: asset types, maintenance, scanning and integrations. Enterprise asset
            management software vendors on those lists sell packaged products. A custom build is the
            alternative when the packaged workflow does not match yours.
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
        <Section id="process" eyebrow="Delivery" title="Asset Management Software Development Process">
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
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters Software Development Company">
          <Prose>
            <p>These points are verified from the Clickmasters website:</p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={whyClickmasters} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#bef264]">
                Enterprise and industrial experience
              </p>
              <p className="mt-3 text-base leading-7 text-white/85">
                Our{" "}
                <Link href={assetLinks.custom.href} className="font-medium text-white underline underline-offset-4">
                  {assetLinks.custom.anchor}
                </Link>{" "}
                work runs through enterprise engagements that include custom ERP modules with IoT-connected
                equipment monitoring and multi-facility operational dashboards.
              </p>
              <div className="mt-6">
                <PrimaryCta light />
              </div>
            </div>
          </div>
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Cost of Asset Management Software">
          <Prose>
            <p>
              Asset management software price and asset management software cost follow scope. The cost
              of custom asset management software depends on:
            </p>
          </Prose>
          <TitledList items={costFactors} icon={BarChart3} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <Note>
            There&apos;s no fixed price. Clickmasters agrees on scope, timeline and quote before development
            starts.
          </Note>
        </Section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions About Asset Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {assetFaqs.map((faq, index) => (
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
                Discuss Your Custom Asset Management Software
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you need to replace an asset spreadsheet, control equipment across many sites,
                connect asset records to ERP and accounting, or plan maintenance with condition data, the
                first step is a clear picture of your assets, locations and workflows.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell Clickmasters Software Development Company what you need to track and where it breaks
                down today. We&apos;ll recommend the right approach, outline the modules and integrations
                involved, and scope the first phase.
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
                {["The right approach for your assets", "The modules involved", "Integrations with your systems", "A scoped first phase"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#bef264] text-[#17220a]">
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
            Discuss Your Asset Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
