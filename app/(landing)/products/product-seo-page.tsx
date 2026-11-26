import { shortKey } from "@/lib/short-key";
import { ListIcon } from "@/components/ui/list-icon";
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  BedDouble,
  BellRing,
  BookMarked,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  Bus,
  Calculator,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  Camera,
  Check,
  CheckSquare,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Cloud,
  CreditCard,
  Database,
  Eye,
  FileCheck,
  FileText,
  Fingerprint,
  FolderOpen,
  Globe,
  GraduationCap,
  KeyRound,
  Landmark,
  Laptop,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Library,
  ListChecks,
  ListOrdered,
  Lock,
  Mail,
  Map as MapIcon,
  MapPin,
  Megaphone,
  MessageSquare,
  MonitorPlay,
  Network,
  NotebookPen,
  PenLine,
  Percent,
  Plug,
  Presentation,
  QrCode,
  Receipt,
  RefreshCw,
  Repeat,
  School,
  Search,
  Settings,
  ShieldCheck,
  Shuffle,
  Smartphone,
  Sparkles,
  Target,
  Ticket,
  Timer,
  TrendingUp,
  Trophy,
  Upload,
  UserCheck,
  UserPlus,
  UserRound,
  Users,
  Video,
  Wallet,
  Workflow,
  Barcode,
  Package,
  Scale,
  ScanLine,
  ShoppingCart,
  Tag,
  Truck,
  Store,
  Warehouse,
  Boxes,
  PackageCheck,
  PackageSearch,
  Utensils,
  ChefHat,
  Coffee,
  Gift,
  ArrowLeftRight,
  RotateCcw,
  Undo2,
  Handshake,
  DollarSign,
  BadgeDollarSign,
  ScanBarcode,
  Forklift,
  Container,
  Route,
  Navigation,
  Star,
  Tablet,
  Monitor,
  Printer,
  SlidersHorizontal,
  Box,
  Archive,
  Bell,
  Soup,
  Pizza,
  Wine,
  ConciergeBell,
  Armchair,
  Split,
  Calendar,
  ChartLine,
  ChartPie,
  Rocket,
  Webhook,
  Fuel,
  Gauge,
  Wrench,
  Hammer,
  MapPinned,
  Satellite,
  Radio,
  Thermometer,
  Snowflake,
  Car,
  CarFront,
  Bike,
  Ship,
  Plane,
  TrainFront,
  Siren,
  Hourglass,
  Signature,
  PenTool,
  Milestone,
  Waypoints,
  Locate,
  LocateFixed,
  Compass,
  CircleDollarSign,
  Banknote,
  FileSpreadsheet,
  Mailbox,
  Inbox,
  PackageOpen,
  ClipboardPen,
  Cog,
  Activity,
  BatteryCharging,
  Leaf,
  AlarmClock,
  History,
  CalendarRange,
  UserCog,
  IdCard,
  Phone,
  MessageCircle,
  House,
  Building,
  Hotel,
  HardHat,
  Ruler,
  Key,
  Bath,
  Bed,
  Sofa,
  DoorClosed,
  Fence,
  Trees,
  Blinds,
  LandPlot,
  Grid3x3,
  FilePen,
  Pickaxe,
  Shovel,
  Drill,
  PaintRoller,
  Construction,
  TrafficCone,
  Images,
  Heart,
  Share2,
  CalendarCheck2,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import type { Block, Feature, PageImage, ProductPageData, RichText, Theme } from "./product-seo-types";

const ICONS: Record<string, LucideIcon> = {
  Award, BadgeCheck, BarChart3, BedDouble, BellRing, BookMarked, BookOpen, Bot, Briefcase, Building2, Bus, Calculator,
  CalendarCheck, CalendarClock, CalendarDays, Camera, Check, CheckSquare, ClipboardCheck, ClipboardList, Clock, Cloud,
  CreditCard, Database, Eye, FileCheck, FileText, Fingerprint, FolderOpen, Globe, GraduationCap, KeyRound, Landmark,
  Laptop, Layers, LayoutDashboard, LayoutGrid, Library, ListChecks, ListOrdered, Lock, Mail, Map: MapIcon, MapPin, Megaphone,
  MessageSquare, MonitorPlay, Network, NotebookPen, PenLine, Percent, Plug, Presentation, QrCode, Receipt, RefreshCw,
  Repeat, School, Search, Settings, ShieldCheck, Shuffle, Smartphone, Sparkles, Target, Ticket, Timer, TrendingUp,
  Trophy, Upload, UserCheck, UserPlus, UserRound, Users, Video, Wallet, Workflow,
  Barcode, Package, Scale, ScanLine, ShoppingCart, Tag, Truck,
  Store, Warehouse, Boxes, PackageCheck, PackageSearch, Utensils, ChefHat, Coffee, Gift, ArrowLeftRight, RotateCcw, Undo2, Handshake, DollarSign, BadgeDollarSign, ScanBarcode, Forklift, Container, Route, Navigation, Star, Tablet, Monitor, Printer, SlidersHorizontal, Box, Archive, Bell, Soup, Pizza, Wine, ConciergeBell, Armchair, Split, Calendar, ChartLine, ChartPie, Rocket, Webhook,
  Fuel, Gauge, Wrench, Hammer, MapPinned, Satellite, Radio, Thermometer, Snowflake, Car, CarFront, Bike, Ship, Plane, TrainFront, Siren, Hourglass, Signature, PenTool, Milestone, Waypoints, Locate, LocateFixed, Compass, CircleDollarSign, Banknote, FileSpreadsheet, Mailbox, Inbox, PackageOpen, ClipboardPen, Cog, Activity, BatteryCharging, Leaf, AlarmClock, History, CalendarRange, UserCog, IdCard, Phone, MessageCircle,
  House, Building, Hotel, HardHat, Ruler, Key, Bath, Bed, Sofa, DoorClosed, Fence, Trees, Blinds, LandPlot, Grid3x3, FilePen, Pickaxe, Shovel, Drill, PaintRoller, Construction, TrafficCone, Images, Heart, Share2, CalendarCheck2,
};

export const PRODUCT_ICON_NAMES = Object.keys(ICONS);

const icon = (name: string | undefined, fallback: LucideIcon = Check) => (name ? ICONS[name] ?? fallback : fallback);
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** Renders **bold** and [anchor](href) inside a plain string. */
function Rich({ text }: { text: RichText }) {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\(((?:\/|#)[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      parts.push(
        <strong key={m.index} className="text-foreground">
          {m[1]}
        </strong>,
      );
    } else if (m[3].startsWith("#")) {
      parts.push(
        <a key={m.index} href={m[3]} className={linkClass}>
          {m[2]}
        </a>,
      );
    } else {
      parts.push(
        <Link key={m.index} href={m[3]} className={linkClass}>
          {m[2]}
        </Link>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Plain-text version of rich text, for JSON-LD and audits. */
export function plainText(text: RichText) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\([^)]*\)/g, "$1");
}

export function productSeoSchema(data: ProductPageData) {
  const url = pageUrl(data.path);
  const heroImage = pageUrl(data.images[data.hero.image].src);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: data.title,
        description: data.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: heroImage,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: data.productName,
        serviceType: data.schema.serviceType,
        description: data.schema.serviceDescription,
        url,
        image: heroImage,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl("/products") },
          { "@type": "ListItem", position: 3, name: data.industryLabel, item: pageUrl(industryPath(data.industrySlug)) },
          { "@type": "ListItem", position: 4, name: data.productName, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function productSeoMetadata(data: ProductPageData) {
  return {
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical: data.path },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: data.path,
      images: [{ url: data.images.og.src, width: data.images.og.width, height: data.images.og.height, alt: data.images.og.alt }],
    },
  };
}

function AppFigure({ image, caption, theme, label, priority = false }: { image: PageImage; caption: string; theme: Theme; label: string; priority?: boolean }) {
  return (
    <figure className="cm-shot" style={{ backgroundColor: theme.dark }}>
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> {label} / concept
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
        className="block h-auto w-full"
        style={{ backgroundColor: theme.tint }}
      />
      <figcaption className="cm-mock-cap">
        <span>{caption}</span>
        <span className="cm-chip">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

function DiagramFigure({ image, caption }: { image: PageImage; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-white p-3 md:p-5">
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="cm-fig" />
      <figcaption className="cm-caption">
        <span>{caption}</span>
        <span className="cm-chip">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

function PrimaryCta({ label, theme, light = false }: { label: string; theme: Theme; light?: boolean }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white" : "bg-primary text-primary-foreground"}`}
      style={light ? { color: theme.dark } : undefined}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function CtaPair({ label, theme, light = false, secondary }: { label: string; theme: Theme; light?: boolean; secondary: { label: string; href: string } }) {
  const cls = `inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border hover:bg-secondary"}`;
  return (
    <div className="flex flex-wrap gap-3">
      <PrimaryCta label={label} theme={theme} light={light} />
      {secondary.href.startsWith("#") ? (
        <a href={secondary.href} className={cls}>{secondary.label}</a>
      ) : (
        <Link href={secondary.href} className={cls}>{secondary.label}</Link>
      )}
    </div>
  );
}

const COLS: Record<number, string> = { 1: "", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4", 5: "md:grid-cols-2 lg:grid-cols-5" };
const TITLED_COLS: Record<number, string> = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" };

function FeatureCard({ feature, number, theme }: { feature: Feature; number: string; theme: Theme }) {
  const Icon = icon(feature.icon, ClipboardList);
  const extras: [string, string | undefined][] = [["Value", feature.value], ["Solves", feature.solves]];
  return (
    <article className="cm-card6c">
      <div className="cx-flex-itemsc-5">
        <span className="cm-icbox" style={{ backgroundColor: theme.soft }}>
          <Icon className="h-5 w-5" style={{ color: theme.accent }} aria-hidden />
        </span>
        <h3 className="cm-h3">
          <span className="cx-mr15-textsm-8" style={{ color: theme.accent }}>{number}.</span>
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

function BlockView({ block, data, first }: { block: Block; data: ProductPageData; first: boolean }) {
  const { theme } = data;
  const gap = first ? "" : "mt-8";
  switch (block.type) {
    case "prose":
      return (
        <div className={first ? "" : "mt-6"}>
          <Prose>
            {block.paragraphs.map((p) => (
              <p key={shortKey(p)}><Rich text={p} /></p>
            ))}
          </Prose>
        </div>
      );
    case "titledList": {
      const Icon = icon(block.icon);
      return (
        <ul className={`grid gap-4 ${first ? "" : "mt-6"} ${TITLED_COLS[block.cols ?? 3]}`}>
          {block.items.map(([title, text]) => (
            <li key={shortKey(title)} className="cm-card5">
              <p className="cm-ttl">
                <Icon className="cm-ic05" style={{ color: theme.accent }} aria-hidden />
                {title}
              </p>
              <p className="cm-p2">{text}</p>
            </li>
          ))}
        </ul>
      );
    }
    case "checklist": {
      const Icon = icon(block.icon);
      return (
        <ul className={`grid max-w-5xl gap-3 ${first ? "" : "mt-6"} ${COLS[block.cols ?? 2]}`}>
          {block.items.map((item) => (
            <li key={shortKey(item)} className="cm-li">
              <ListIcon icon={Icon} className="cm-ic1" style={{ color: theme.accent }} />
              {item}
            </li>
          ))}
        </ul>
      );
    }
    case "table":
      return <CompareTable caption={block.caption} headers={block.headers} rows={block.rows} />;
    case "features":
      return (
        <div className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 ${first ? "" : "mt-8"}`}>
          {block.items.map((f, i) => (
            <FeatureCard key={f.title} feature={f} number={LETTERS[(block.start ?? 0) + i]} theme={theme} />
          ))}
        </div>
      );
    case "numbered":
      return (
        <ol className={`grid gap-4 ${first ? "" : "mt-6"} ${COLS[block.cols ?? 4]}`}>
          {block.items.map(([title, text], i) => (
            <li key={shortKey(title)} className="cm-card5">
              <div className="cx-flex-itemsc-h">
                <span className="cm-num" style={{ backgroundColor: theme.accent }}>
                  {i + 1}
                </span>
                <p className="cx-fontse-leadin-b">{title}</p>
              </div>
              <p className="cm-p3">{text}</p>
            </li>
          ))}
        </ol>
      );
    case "steps":
      return (
        <ol className={`grid gap-4 md:grid-cols-2 lg:grid-cols-5 ${first ? "" : "mt-6"}`}>
          {block.items.map(([title, text], i) => (
            <li key={shortKey(title)} className="cm-card5">
              <span className="cm-label" style={{ color: theme.accent }}>Step {i + 1}</span>
              <p className="cm-t2">{title}</p>
              <p className="cm-p2">{text}</p>
            </li>
          ))}
        </ol>
      );
    case "figure": {
      const image = data.images[block.image];
      return (
        <div className={gap}>
          {block.variant === "diagram" ? (
            <DiagramFigure image={image} caption={block.caption} />
          ) : (
            <AppFigure image={image} caption={block.caption} theme={theme} label={data.browserLabel} />
          )}
        </div>
      );
    }
    case "linkPanel":
      return (
        <div className="cm-box" style={{ borderColor: theme.border, backgroundColor: theme.tint }}>
          <Rich text={block.text} />
        </div>
      );
    case "note":
      return (
        <div className="cm-note" style={{ borderColor: theme.accent }}>
          <Rich text={block.text} />
        </div>
      );
    case "caution":
      return (
        <div className="cm-warn">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0" aria-hidden />
          <div><Rich text={block.text} /></div>
        </div>
      );
    case "cta":
      return (
        <div className={first ? "" : "mt-10"}>
          <PrimaryCta label={block.label ?? data.primaryCta} theme={theme} />
        </div>
      );
    case "checkGrid":
      return (
        <ul className={`grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4 ${first ? "" : "mt-6"}`}>
          {block.items.map((item) => (
            <li key={shortKey(item)} className="cm-card4li">
              <span aria-hidden="true" className="ico ico-sqcheck cm-ic05l" style={{ color: theme.accent }} />
              {item}
            </li>
          ))}
        </ul>
      );
    case "cost":
      return (
        <div className={`grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] ${first ? "" : "mt-8"}`}>
          <div>
            <Prose><p><Rich text={block.intro} /></p></Prose>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {block.items.map((item) => (
                <li key={shortKey(item)} className="cm-li">
                  <span aria-hidden="true" className="ico ico-check cm-ic1" style={{ color: theme.accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: theme.dark }}>
            <p className="text-base leading-7 text-white/85">{plainText(block.panel)}</p>
            <div className="mt-6">
              <PrimaryCta light label={block.ctaLabel ?? "Discuss Your Requirements"} theme={theme} />
            </div>
          </div>
        </div>
      );
  }
}

export default function ProductSeoPage({ data }: { data: ProductPageData }) {
  const { theme } = data;
  const related =
    productIndustries
      .find((industry) => industry.slug === data.industrySlug)
      ?.products.filter((item) => productPath(data.industrySlug, item.slug) !== data.path) ?? [];

  return (
    <PageFrame>
      <main className="bg-background pt-28 text-foreground md:pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/products" className="hover:text-foreground">Products</Link></li>
              <li aria-hidden>/</li>
              <li><Link href={industryPath(data.industrySlug)} className="hover:text-foreground">{data.industryLabel}</Link></li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{data.productName}</li>
            </ol>
          </nav>

          <div className="cm-hero-grid">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: theme.accent }}>{data.industryLabel}</p>
              <h1 className="cm-h1">{data.hero.h1}</h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">{data.hero.subhead}</p>
              <div className="cm-lead">
                {data.hero.paragraphs.map((p) => (
                  <p key={shortKey(p)}><Rich text={p} /></p>
                ))}
              </div>
              <div className="mt-8">
                <CtaPair label={data.primaryCta} theme={theme} secondary={data.hero.secondaryCta} />
              </div>
            </div>
            <AppFigure image={data.images[data.hero.image]} caption={data.hero.caption} theme={theme} label={data.browserLabel} priority />
          </div>

          <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-2">
            {data.contents.map((item) => (
              <a key={item.href} href={item.href} className="cm-pill">
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        {data.sections.map((section) => (
          <Section key={section.id} id={section.id} eyebrow={section.eyebrow} title={section.title}>
            {section.blocks.map((block, i) => (
              <Fragment key={`${section.id}-${i}`}>
                <BlockView block={block} data={data} first={i === 0} />
              </Fragment>
            ))}
          </Section>
        ))}

        {/* FAQ */}
        <section id="faq" className="cm-sec">
          <div className="cm-wrap">
            <h2 className="cm-h2b">{data.faqTitle}</h2>
            <div className="cm-list">
              {data.faqs.map((faq, index) => (
                <details key={shortKey(faq.question)} className="group p-5 md:p-6" open={index === 0}>
                  <summary className="cm-faq-q">
                    <h3>{index + 1}. {faq.question}</h3>
                    <span aria-hidden="true" className="ico ico-chev cm-faq-ic" />
                  </summary>
                  <p className="cm-intro">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border text-white" style={{ backgroundColor: theme.dark }}>
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{data.finalCta.title}</h2>
            {data.finalCta.paragraphs.map((p) => (
              <p key={shortKey(p)} className="mt-4 max-w-3xl text-base leading-7 text-white/80">{p}</p>
            ))}
            <div className="mt-8">
              <CtaPair light label={data.primaryCta} theme={theme} secondary={{ label: "Talk to Our Software Development Team", href: "/contact" }} />
            </div>
            <p className="mt-4 text-sm text-white/60">We scope the product, the timeline and the quote before development starts.</p>
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 ? (
          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <h2 className="cx-text2x-fontse-u">More in {data.industryLabel}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={productPath(data.industrySlug, item.slug)}
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
          <Link href="/contact" className="cm-cta-m">
            {data.mobileCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
