import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  BellRing,
  Calculator,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardList,
  LayoutDashboard,
  Lock,
  Plug,
  Receipt,
  ScanBarcode,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Tags,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  benefits,
  challengeRows,
  cloudVsOnPremRows,
  costFactors,
  customVsReadyRows,
  features,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrationRows,
  INVENTORY_PATH,
  inventoryDescription,
  inventoryFaqs,
  inventoryImages,
  inventoryLinks,
  inventoryTitle,
  moduleRows,
  problemRows,
  processSteps,
  PRODUCT_NAME,
  purchasingPoints,
  reportRows,
  scanningSteps,
  security,
  selectionQuestions,
  stockHabits,
  systemRows,
  whyClickmasters,
  type InventoryFeature,
  type LinkSpec,
} from "./inventory-data";

export { INVENTORY_PATH, inventoryDescription, inventoryTitle, inventoryImages };

const ICONS: Record<string, LucideIcon> = {
  Activity,
  ArrowLeftRight,
  BellRing,
  Calculator,
  CalendarClock,
  LayoutDashboard,
  Plug,
  Receipt,
  ScanBarcode,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Tags,
  Truck,
};

const ACCENT = "#4f46e5";
const DARK = "#14123a";

export function inventorySchema() {
  const url = pageUrl(INVENTORY_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: inventoryTitle,
        description: inventoryDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(inventoryImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "Inventory management software development",
        description:
          "Design, development and integration of inventory management systems for stock tracking, reorder management, purchase orders, multi-location control and inventory reporting.",
        url,
        image: pageUrl(inventoryImages.dashboard.src),
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
        mainEntity: inventoryFaqs.map((faq) => ({
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
  { href: "#what-is-inventory-software", label: "What it is" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#inventory-features", label: "Features" },
  { href: "#multi-location", label: "Warehouses & locations" },
  { href: "#barcode", label: "Barcode & QR" },
  { href: "#purchasing", label: "Purchase orders" },
  { href: "#reports", label: "Reports" },
  { href: "#industries", label: "Industries" },
  { href: "#integrations", label: "Integrations" },
  { href: "#custom-vs-ready-made", label: "Custom vs ready-made" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#14123a] shadow-xl shadow-indigo-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> inventory.example / concept
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

const PRIMARY_CTA = "Discuss Your Inventory Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#14123a]" : "bg-primary text-primary-foreground"}`}
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

function FeatureCard({ feature }: { feature: InventoryFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0e7ff]">
          <Icon className="h-5 w-5 text-[#4f46e5]" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature.text}</p>
      {feature.scenario ? (
        <div className="mt-4 rounded-xl bg-[#eef2ff] px-3 py-2 text-sm leading-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
            Scenario
          </p>
          <p className="text-muted-foreground">{feature.scenario}</p>
        </div>
      ) : null}
    </article>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== INVENTORY_PATH) ?? [];

export default function InventoryPage() {
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
                Inventory Management Software for Accurate Stock and Multi-Location Control
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  When the spreadsheet says 40 units and the shelf holds 12, someone loses: a customer
                  who can&apos;t get the product, a buyer who reorders too late, or a finance team valuing
                  stock that isn&apos;t there. As SKUs, sales channels and locations multiply, manual stock
                  records stop keeping up.
                </p>
                <p>
                  Inventory management software gives you one reliable record of what you have, where it
                  is, what&apos;s committed and what&apos;s coming in. Clickmasters designs, builds and
                  integrates inventory management software in USA for businesses that need stock
                  control to fit their products, locations and sales channels. Inventory management
                  software USA teams run still has to connect with the ERP, POS and e-commerce tools
                  they already use.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Inventory Features", href: "#inventory-features" }} />
              </div>
            </div>
            <AppFigure
              image={inventoryImages.dashboard}
              caption="Inventory management software dashboard: stock health across every location"
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
        <Section id="what-is-inventory-software" eyebrow="Definition" title="What Is Inventory Management Software?">
          <Prose>
            <p>
              Inventory management software is a system for recording, tracking and controlling stock
              across its lifecycle: receiving it from suppliers, storing it, moving it between locations,
              selling or consuming it, and replenishing it. It keeps an item master (SKUs, variants and
              units of measure) and a transaction history of every stock movement. From those it
              calculates on-hand, committed, available and incoming quantities for each item at each
              location.
            </p>
            <p>
              On top of that record, an inventory management system adds controls such as reorder points,
              approvals, counts and adjustments. It also adds reporting on stock value, turnover,
              slow-moving items and stockouts.
            </p>
            <p>
              People ask inventory management software what is it when they want that definition. A
              short inventory management software description is one stock record per item and
              location. The inventory management software acronym is IMS, so inventory management
              software ims is the same search. Typing inventory management software software twice
              still means that one system. Inventory management software types cover stores,
              warehouses, production and field service. Inventory management software systems are
              those types sharing one item master. Inventory management software business use starts
              with a count you can trust today.
            </p>
          </Prose>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How Does an Inventory Management System Work?">
          <NumberedCards items={howItWorks} className="md:grid-cols-2 lg:grid-cols-4" />
          <Note>
            How &quot;real time&quot; the system is depends on how quickly connected systems such as POS,
            e-commerce and scanners send transactions.
          </Note>
        </Section>

        {/* Why */}
        <Section id="why-inventory-software" eyebrow="Business problems" title="Why Businesses Need Inventory Management Software">
          <CompareTable
            caption="Inventory problems, what goes wrong and how a well-designed inventory system helps"
            headers={["Problem", "What goes wrong", "How a well-designed inventory system helps"]}
            rows={problemRows}
          />
          <Note>
            A system reduces these problems. It doesn&apos;t remove the need for good processes, accurate
            receiving and regular counts.
          </Note>
        </Section>

        {/* Features */}
        <Section id="inventory-features" eyebrow="14 building blocks" title="Core Inventory Management Features">
          <Prose>
            <p>
              The capabilities below are common building blocks. Key features of inventory management
              software are these choices, not a fixed package. In a Clickmasters project,{" "}
              <strong className="text-foreground">each one is a module or configuration choice</strong>{" "}
              made during discovery. They aren&apos;t preinstalled features of a ready-made product.
            </p>
          </Prose>
          <div className="mt-10">
            <AppFigure
              image={inventoryImages.stock}
              caption="Available stock, not just on-hand: committed, incoming and per-location detail"
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta />
          </div>
        </Section>

        {/* Modules */}
        <Section id="modules" eyebrow="Scope" title="Inventory Management Modules">
          <CompareTable caption="Inventory management modules and what they cover" headers={["Module", "What it covers"]} rows={moduleRows} />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Most businesses start with SKU, stock control and reporting, then add purchasing,
            multi-location and integrations as they grow.
          </p>
        </Section>

        {/* Stock control */}
        <Section id="stock-control" eyebrow="Good habits" title="Inventory Tracking and Stock Control">
          <Prose>
            <p>Good stock control relies on three habits that the software can enforce:</p>
          </Prose>
          <NumberedCards items={stockHabits} className="mt-6 md:grid-cols-3" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Together, these turn inventory data from a rough estimate into a record operations can rely
            on.
          </p>
        </Section>

        {/* Multi-location */}
        <Section id="multi-location" eyebrow="Stores and warehouses" title="Warehouse and Multi-Location Inventory Management">
          <Prose>
            <p>
              For businesses with several stores, warehouses or a mix of both, inventory software tracks
              quantities per location and gives a consolidated view across the network. Inventory
              management software warehouse teams use is that location record. Inventory management
              software multiple locations rolls the locations into one available quantity. 3PL
              inventory management software and inventory management software for logistics keep a
              client&apos;s stock separate from another client&apos;s. Just in time inventory
              management software places the purchase when available stock hits the reorder point.
              That supports transfers between sites, location-specific reorder points and fulfillment
              from the nearest location with available stock.
            </p>
            <p>
              Inventory management and warehouse management overlap but aren&apos;t the same. Inventory
              software answers <strong className="text-foreground">how much stock you have and where</strong>.
              A warehouse management system (WMS) answers{" "}
              <strong className="text-foreground">how work happens inside the warehouse</strong>: receiving
              and putaway, bin locations, pick paths, packing and dispatch. High-volume distribution
              centers usually need both. For deep warehouse execution, our{" "}
              <BodyLink link={inventoryLinks.wms} /> covers receiving, putaway, bin locations and picking,
              while the inventory system stays the source of truth for stock across all locations.
            </p>
          </Prose>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <AppFigure
              image={inventoryImages.warehouse}
              caption="Warehouse overview: zone capacity, receiving queue and transfers in transit"
            />
            <AppFigure
              image={inventoryImages.multiWarehouse}
              caption="Stock and days of cover by location, with suggested transfers"
            />
          </div>
        </Section>

        {/* Barcode */}
        <Section id="barcode" eyebrow="Scanning" title="Barcode and QR Code Inventory Tracking">
          <Prose>
            <p>Scanning reduces typing errors and speeds up every stock transaction:</p>
          </Prose>
          <TitledList items={scanningSteps} icon={ScanBarcode} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <DiagramFigure
            image={inventoryImages.barcode}
            caption="Scan, confirm, update: receiving a short delivery against a purchase order"
            className="mt-8"
          />
          <Note>
            Barcode and QR scanning requires labeled items and locations plus compatible devices, such as
            handheld scanners, mobile phones with camera scanning, or rugged devices. Inventory
            management software barcode labels and an inventory management software barcode scanner
            cut receiving errors. Inventory management software with barcode generator prints those
            labels from the item master. An inventory management software scanner can be the phone
            already in a pocket. Inventory management software qr code labels, and inventory
            management software with qr codes, suit items that need a link to a lot or a photo.
            Inventory management software rfid is the bulk-read option when the tag cost is worth it.
            RFID needs more hardware and setup. Clickmasters can build the mobile scanning app and
            connect the hardware you choose.
          </Note>
          <DiagramFigure
            image={inventoryImages.mobile}
            caption="Inventory tasks on the floor: stock lookup and offline cycle counts"
            className="mt-10"
          />
        </Section>

        {/* Purchasing */}
        <Section id="purchasing" eyebrow="Replenishment" title="Purchase Orders and Supplier Management">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="text-base leading-7 text-muted-foreground">
                Inventory and purchasing work best when they share data:
              </p>
              <CheckList items={purchasingPoints} className="mt-5" />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                When supplier coordination extends across the wider chain, with multiple tiers,
                fulfillment tracking and status visibility from request to delivery, a dedicated{" "}
                <BodyLink link={inventoryLinks.scm} /> platform takes over, connected to the same stock
                records.
              </p>
            </div>
            <AppFigure
              image={inventoryImages.purchaseOrders}
              caption="From alert to purchase order: grouped suggestions, partial receipt and three-way match"
            />
          </div>
        </Section>

        {/* Reports */}
        <Section id="reports" eyebrow="Visibility" title="Inventory Reports and Business Analytics">
          <CompareTable caption="Inventory reports and the questions they answer" headers={["Report", "What it answers"]} rows={reportRows} />
          <div className="mt-8">
            <AppFigure
              image={inventoryImages.analytics}
              caption="Turnover, ABC analysis, stock aging and top stockouts"
            />
          </div>
          <Note>
            Dashboards should be role-based: buyers see reorder needs, managers see location health, and
            finance sees value and adjustments. Visual inventory management software puts a photo beside
            the count, which is what inventory management software with photos is for. Inventory
            management application ui and stock management software ui should stay readable on a small
            screen. Inventory management software ai, inventory management software using ai and
            inventory management software with ai can suggest a reorder from past demand. A buyer
            should still be able to reject that suggestion.
          </Note>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Inventory Management Software">
          <Prose>
            <p>Inventory management software benefits, when the system is used consistently, typically include:</p>
          </Prose>
          <CheckList items={benefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Results depend on data quality, processes and adoption, so measure them against your baseline.
            No system eliminates every stock error.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="Industry-Specific Inventory Management Solutions">
          <CompareTable
            caption="Typical inventory requirements by industry"
            headers={["Industry", "Typical inventory requirements"]}
            rows={industryRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Store-based retailers with replenishment driven by sales may be best served by our dedicated{" "}
            <BodyLink link={inventoryLinks.retail} />, built around stock by store and transfers between
            locations.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Inventory management software solutions change with the trade. Inventory management
            software retail needs a store count and a transfer. Inventory management billing software
            for retail shop adds the counter sale to that count. Inventory management software
            ecommerce reserves a unit when the order is paid. Inventory management software pos is
            the register that should decrement the same unit. Inventory management software for
            resellers often wants inventory management software white label, so the tool carries
            their name.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Inventory management software restaurant, including the best inventory management software
            restaurant groups compare, turns a dish into ingredients. Inventory management software
            for grocery store watches expiry dates. Inventory management software for hotels and
            inventory management software hospitality cover rooms, linen and the kitchen store.
            Inventory management software for vending machines knows what each machine still holds.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Inventory management software for manufacturing and inventory management software
            manufacturing follow a bill of materials. Inventory management software for small
            manufacturing business starts with fewer stages. Inventory management software for
            garment industry tracks size and color. Inventory management software for hardware shop,
            inventory management software construction and inventory management software for
            construction industry track materials by job. Inventory management software for hvac and
            inventory management software hvac track van stock. Inventory management software for
            maintenance tracks the spare that keeps a line running. Vehicle inventory management
            software tracks units on a lot. Inventory management software automotive tracks the parts
            those units need.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Inventory management software for jewellery, and the best inventory management software
            for jewelry, identifies a piece by photo and stone. Audio visual inventory management
            software tracks rental kits. Janitorial inventory management software tracks chemicals by
            building. Inventory management software healthcare, inventory management software medical,
            inventory management software pharmacy and inventory management software for pharmacy
            need lot and expiry. Inventory management software laboratory tracks reagents the same
            way. Veterinary inventory management software and inventory management software for
            veterinary clinics cover clinic supplies. Inventory management software for government
            keeps an audit trail on public stock. Inventory management software for real estate
            tracks furnishings across properties.
          </p>
        </Section>

        {/* Small business / enterprise */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:px-8 lg:grid-cols-2">
            <article id="small-business" className="scroll-mt-28 rounded-3xl border border-border bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Inventory Management Software for Small Businesses
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Small businesses usually need clear stock counts, reorder alerts, simple purchase orders,
                barcode scanning and a sync with their POS or online store, without enterprise complexity.
                Very simple inventory management software, inventory management software simple,
                inventory management software basic and inventory management software easy all point at
                that first version: a few jobs done well, with room to grow. Start with clean SKU data
                and regular counts.
              </p>
            </article>
            <article id="enterprise" className="scroll-mt-28 rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Inventory Management Software for Enterprise Businesses
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Enterprises need multi-entity and multi-warehouse structures, complex units and costing,
                approval workflows, granular permissions, high transaction volumes, audit trails and
                reliable integration with ERP, WMS, POS, e-commerce and 3PL systems. Inventory
                management software enterprise work, and inventory management software for large
                companies, is as much about architecture and integration monitoring as it is about
                features.
              </p>
            </article>
          </div>
        </section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Inventory Management Software Integrations">
          <CompareTable caption="Inventory integrations and the data exchanged" headers={["Integration", "Data exchanged"]} rows={integrationRows} />
          <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#c7d2fe] bg-[#eef2ff] p-5 text-base leading-7 text-muted-foreground">
            <Plug className="mt-1 h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
            <p>
              Integrations need clear ownership. Which system is the source of truth for items, prices and
              stock? How often do they sync? What happens when a sync fails? Clickmasters&apos; published
              e-commerce work includes bidirectional sync with NetSuite, SAP and Microsoft Dynamics for
              inventory, orders and fulfillment tracking.
            </p>
          </div>
          <H3 className="mt-14">Inventory Software vs. ERP, WMS and POS</H3>
          <CompareTable caption="Inventory software compared with WMS, ERP and POS" headers={["System", "Focus"]} rows={systemRows} />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Growing businesses often run a dedicated inventory system first and connect it to{" "}
            <BodyLink link={inventoryLinks.erp} /> later, or use inventory as an ERP module when finance,
            procurement and operations need to share a single database. Inventory management software
            that works with QuickBooks, and inventory management software QuickBooks integration, move
            items and stock value into the books. Inventory management software for QuickBooks Online,
            inventory management software that integrates with QuickBooks Online, and the best
            inventory management software for QuickBooks Online do that in the cloud. Inventory
            management software that integrates with QuickBooks Desktop and inventory management
            software sync with QuickBooks cover the desktop file. The best inventory management
            software for QuickBooks is the one that posts quantities finance already trusts. Inventory
            management software integration with Xero, inventory management software that integrates
            with Xero, and the best inventory management software that integrates with Xero do the
            same for Xero. Inventory management software that integrates with Shopify and inventory
            management software that works with Shopify reserve stock when an online order is paid.
            Inventory management software that integrates with Square does it from the counter.
            Inventory management accounting software is the finance side of that link. Inventory
            management software with invoicing turns a shipment into a bill. Inventory management
            software 3rd party means the stock system and the books stay separate products.
          </p>
        </Section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Inventory Management Software">
          <CompareTable
            caption="Cloud-based inventory software compared with on-premise"
            headers={["Factor", "Cloud-based", "On-premise"]}
            rows={cloudVsOnPremRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Inventory management software cloud, inventory management software online and inventory
            management software SaaS are the browser versions. Inventory management software on
            premise, inventory management software self hosted, inventory management software stand
            alone and inventory management software desktop stay on your network. Inventory
            management software PC, inventory management software Mac and inventory management
            software Linux are those installed builds. Inventory management software offline and
            stock management software offline finish a count without a signal, then sync. Inventory
            management software mobile, stock management software mobile, an inventory management
            software app and inventory management software iPad are how the floor works.
          </p>
        </Section>

        {/* Custom vs ready-made */}
        <Section id="custom-vs-ready-made" eyebrow="Build or buy" title="Custom Inventory Management Software vs. Ready-Made Solutions">
          <CompareTable
            caption="Ready-made inventory software compared with custom inventory management software"
            headers={["", "Ready-made inventory software", "Custom inventory management software"]}
            rows={customVsReadyRows}
          />
          <div className="mt-8">
            <PrimaryCta label="Build Your Inventory Management System" />
          </div>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Inventory Management Software Development Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        {/* Security */}
        <Section id="security" eyebrow="Controls" title="Security, Data Management and Access Control">
          <CheckList items={security} className="max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Challenges */}
        <Section id="challenges" eyebrow="Lessons learned" title="Common Inventory Management Challenges and Solutions">
          <CompareTable caption="Common inventory management challenges and solutions" headers={["Challenge", "Solution"]} rows={challengeRows} />
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose the Right Inventory Management Software">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Roundups titled top 5 inventory management software for small business, inventory
            management software top 10, or top 10 best inventory management software are comparison
            lists. Inventory management software reviews, inventory management software companies and
            inventory management software vendors describe packaged products. An inventory management
            tools list, a stock management software list or an inventory management software name
            list is the same kind of directory. The inventory management software best matched to you
            is the one that follows your locations and channels. Ask for an inventory management
            software demo of a receipt, a transfer and a count before you decide. Inventory
            management software buy should follow that demo, not a banner.
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5">
                <p className="flex items-center gap-3 font-semibold">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#e0e7ff", color: ACCENT }}
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

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Factors That Influence Inventory Software Development Cost">
          <Prose>
            <p>The cost of custom inventory management software depends on:</p>
          </Prose>
          <TitledList items={costFactors} icon={BarChart3} className="mt-8 sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            Cost and timeline depend on scope, integrations and complexity. Inventory management
            software pricing is usually a subscription. Inventory management software cheap often
            means a narrower feature set. Inventory management software one time fee and inventory
            management software one time purchase are license models some desktop tools still sell.
            Clickmasters agrees on scope, timeline and quote before development starts.
          </Note>
        </Section>

        {/* Why Clickmasters */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters for Custom Inventory Management Software Development?">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={whyClickmasters} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a5b4fc]">
                Enterprise build experience
              </p>
              <p className="mt-3 text-base leading-7 text-white/85">
                Our{" "}
                <Link href={inventoryLinks.customInventory.href} className="font-medium text-white underline underline-offset-4">
                  {inventoryLinks.customInventory.anchor}
                </Link>{" "}
                work runs through enterprise engagements, where custom ERP modules include inventory and
                procurement, and logistics builds include warehouse management systems.
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
              Frequently Asked Questions About Inventory Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {inventoryFaqs.map((faq, index) => (
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
                Build Inventory Software Around the Way You Operate
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re replacing spreadsheets, connecting stores, warehouses and online
                channels, adding scanning, or building a system around complex products and integrations,
                the first step is a clear picture of your items, locations and stock flows.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how inventory works today and where it breaks down. We&apos;ll recommend the right
                approach, outline the modules and integrations involved, and scope the next step.
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
                {["The right approach for your operation", "The modules involved", "ERP, POS and e-commerce integrations", "A scoped next step"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a5b4fc] text-[#14123a]">
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
            Discuss Your Inventory Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
