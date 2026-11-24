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
  ChevronRight,
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
} from "lucide-react";
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
    <figure className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-slate-900/10 ring-1 ring-black/5" style={{ backgroundColor: theme.dark }}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
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
      <figcaption className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-2.5 text-xs text-muted-foreground">
        <span>{caption}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

function DiagramFigure({ image, caption }: { image: PageImage; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-white p-3 md:p-5">
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="mx-auto block h-auto w-full max-w-5xl" />
      <figcaption className="mt-2 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        <span>{caption}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">Illustrative concept</span>
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
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: theme.soft }}>
          <Icon className="h-5 w-5" style={{ color: theme.accent }} aria-hidden />
        </span>
        <h3 className="text-lg font-semibold leading-snug">
          <span className="mr-1.5 text-sm font-bold" style={{ color: theme.accent }}>{number}.</span>
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

function BlockView({ block, data, first }: { block: Block; data: ProductPageData; first: boolean }) {
  const { theme } = data;
  const gap = first ? "" : "mt-8";
  switch (block.type) {
    case "prose":
      return (
        <div className={first ? "" : "mt-6"}>
          <Prose>
            {block.paragraphs.map((p) => (
              <p key={p}><Rich text={p} /></p>
            ))}
          </Prose>
        </div>
      );
    case "titledList": {
      const Icon = icon(block.icon);
      return (
        <ul className={`grid gap-4 ${first ? "" : "mt-6"} ${TITLED_COLS[block.cols ?? 3]}`}>
          {block.items.map(([title, text]) => (
            <li key={title} className="rounded-2xl border border-border bg-white p-5">
              <p className="flex items-start gap-2 font-semibold leading-snug">
                <Icon className="mt-0.5 h-4 w-4 shrink-0" style={{ color: theme.accent }} aria-hidden />
                {title}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
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
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <Icon className="mt-1 h-4 w-4 shrink-0" style={{ color: theme.accent }} aria-hidden />
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
            <li key={title} className="rounded-2xl border border-border bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: theme.accent }}>
                  {i + 1}
                </span>
                <p className="font-semibold leading-snug">{title}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      );
    case "steps":
      return (
        <ol className={`grid gap-4 md:grid-cols-2 lg:grid-cols-5 ${first ? "" : "mt-6"}`}>
          {block.items.map(([title, text], i) => (
            <li key={title} className="rounded-2xl border border-border bg-white p-5">
              <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: theme.accent }}>Step {i + 1}</span>
              <p className="mt-2 font-semibold leading-snug">{title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
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
        <div className="mt-8 max-w-4xl rounded-2xl border p-5 text-base leading-7 text-muted-foreground" style={{ borderColor: theme.border, backgroundColor: theme.tint }}>
          <Rich text={block.text} />
        </div>
      );
    case "note":
      return (
        <div className="mt-8 max-w-4xl rounded-2xl border-l-4 bg-secondary px-5 py-4 text-sm leading-7 text-muted-foreground" style={{ borderColor: theme.accent }}>
          <Rich text={block.text} />
        </div>
      );
    case "caution":
      return (
        <div className="mt-8 flex max-w-4xl gap-4 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5 text-sm leading-7 text-[#78350f]">
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
            <li key={item} className="flex gap-3 rounded-2xl border border-border bg-white p-4 text-sm leading-6">
              <CheckSquare className="mt-0.5 h-5 w-5 shrink-0" style={{ color: theme.accent }} aria-hidden />
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
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: theme.accent }} aria-hidden />
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

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: theme.accent }}>{data.industryLabel}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">{data.hero.h1}</h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">{data.hero.subhead}</p>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {data.hero.paragraphs.map((p) => (
                  <p key={p}><Rich text={p} /></p>
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
              <a key={item.href} href={item.href} className="rounded-full border border-border px-3 py-1.5 text-sm font-medium hover:bg-secondary">
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
        <section id="faq" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{data.faqTitle}</h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {data.faqs.map((faq, index) => (
                <details key={faq.question} className="group p-5 md:p-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold md:text-lg">
                    <h3>{index + 1}. {faq.question}</h3>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{faq.answer}</p>
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
              <p key={p} className="mt-4 max-w-3xl text-base leading-7 text-white/80">{p}</p>
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
            <h2 className="text-2xl font-semibold tracking-tight">More in {data.industryLabel}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={productPath(data.industrySlug, item.slug)}
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
          <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            {data.mobileCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
