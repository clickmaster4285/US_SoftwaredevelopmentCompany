import { shortKey } from "@/lib/short-key";
import { ListIcon } from "@/components/ui/list-icon";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarPlus,
  Check,
  ClipboardCheck,
  ClipboardList,
  DoorOpen,
  Dumbbell,
  Globe,
  LayoutGrid,
  ListOrdered,
  Lock,
  MapPin,
  QrCode,
  RefreshCw,
  Repeat,
  SlidersHorizontal,
  Smartphone,
  Ticket,
  UserRound,
  UserX,
  Video,
  Wallet,
  XCircle,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  benefits,
  businessRows,
  challengeRows,
  chooseChecklist,
  classSchedulingPoints,
  compareRows,
  costFactors,
  deliverables,
  FB_PATH,
  fbDescription,
  fbFaqs,
  fbImages,
  fbLinks,
  fbOgDescription,
  fbOgTitle,
  fbTitle,
  features,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  notificationPoints,
  policyRows,
  processSteps,
  PRODUCT_NAME,
  readyVsCustomRows,
  reportRows,
  resourcePoints,
  trainerPoints,
  whatItManages,
  whyClickmasters,
  type FbFeature,
  type LinkSpec,
} from "./fitness-booking-data";

export { FB_PATH, fbDescription, fbTitle, fbImages, fbOgTitle, fbOgDescription };

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarPlus,
  ClipboardCheck,
  DoorOpen,
  Globe,
  LayoutGrid,
  ListOrdered,
  MapPin,
  QrCode,
  RefreshCw,
  Repeat,
  SlidersHorizontal,
  Smartphone,
  Ticket,
  UserRound,
  UserX,
  Video,
  Wallet,
  XCircle,
};

const ACCENT = "#e11d48";
const DARK = "#2a0a14";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function fbSchema() {
  const url = pageUrl(FB_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: fbTitle,
        description: fbDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(fbImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: PRODUCT_NAME,
        serviceType: "Fitness booking and scheduling software development",
        description:
          "Design, development and integration of custom fitness booking and scheduling software for online class booking, personal training appointments, room and resource capacity, waitlists, cancellation policies, reminders, check-in and booking analytics.",
        url,
        image: pageUrl(fbImages.dashboard.src),
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
        mainEntity: fbFaqs.map((faq) => ({
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
  { href: "#what-is-fitness-booking-software", label: "What it is" },
  { href: "#features", label: "Features" },
  { href: "#class-scheduling", label: "Class scheduling" },
  { href: "#personal-training", label: "PT appointments" },
  { href: "#rooms-resources", label: "Rooms & capacity" },
  { href: "#waitlists-policies", label: "Waitlists & policies" },
  { href: "#reminders", label: "Reminders" },
  { href: "#reporting", label: "Reporting" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#2a0a14] shadow-xl shadow-rose-950/10 ring-1 ring-black/5">
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> booking.example / concept
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
        className="block h-auto w-full bg-[#fff5f6]"
      />
      <figcaption className="cm-mock-cap">
        <span>{caption}</span>
        <span className="cm-chip">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

function DiagramFigure({ image, caption }: { image: Img; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-white p-3 md:p-5">
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

const PRIMARY_CTA = "Discuss Your Booking Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#2a0a14]" : "bg-primary text-primary-foreground"}`}
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

function LinkPanel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#fecdd3] bg-[#fff1f2] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

function FeatureCard({ feature, number }: { feature: FbFeature; number: string }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  const extras: [string, string | undefined][] = [
    ["Value", feature.value],
    ["Solves", feature.solves],
  ];
  return (
    <article className="cm-card6c">
      <div className="cx-flex-itemsc-5">
        <span className="cx-flex-h11-2i">
          <Icon className="h-5 w-5 text-[#e11d48]" aria-hidden />
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
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== FB_PATH) ?? [];

export default function FitnessBookingPage() {
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
                Fitness Booking &amp; Scheduling Software
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                Let members book classes and training sessions online, and keep every trainer, room and spot on one live
                calendar.
              </p>
              <div className="cm-lead">
                <p>
                  Fitness booking and scheduling software lets clients book group classes, personal training appointments
                  and facility resources from a website or phone, while your team sees who is teaching, which room is
                  free and how many spots are left. Waitlists refill cancelled spots, reminders cut no-shows and
                  cancellation rules are applied the same way every time.
                </p>
                <p>
                  Clickmasters designs and builds custom fitness booking software for US gyms, boutique studios, personal
                  trainers and multi-location fitness brands, shaped around your timetable, your booking rules and your
                  members&apos; experience.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Booking Features", href: "#features" }} />
              </div>
            </div>
            <AppFigure image={fbImages.dashboard} caption="Today's bookings, fill rates, waitlists and open slots" priority />
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

        {/* Problem */}
        <Section id="booking-problem" eyebrow="The problem" title="Why Booking Is the Busiest Job in a Fitness Business">
          <Prose>
            <p>
              Every class and session starts with a booking. A member wants the 6 AM spin class, a new client asks for a
              trial PT session, a regular cancels an hour before yoga and someone on the waitlist would happily take the
              spot. When those requests arrive by phone, email, Instagram DMs and a paper sign-up sheet, the front desk
              spends its day matching people to times, rooms and trainers.
            </p>
            <p>
              The result is familiar: double-booked bikes, full classes with empty mats because cancellations were never
              re-offered, trainers chasing clients to agree a time, and owners who cannot tell which classes actually fill.
              Fitness scheduling software replaces that manual matching with one live calendar that members and staff
              share.
            </p>
          </Prose>
        </Section>

        {/* What is */}
        <Section id="what-is-fitness-booking-software" eyebrow="Definition" title="What Is Fitness Booking and Scheduling Software?">
          <Prose>
            <p>
              <strong className="text-foreground">Fitness booking software</strong> lets clients reserve classes, sessions
              and resources online. <strong className="text-foreground">Fitness scheduling software</strong> is the calendar
              behind it: who is teaching, which room is free and how much capacity is left. Some buyers call the pair
              fitness schedule software. Together they manage:
            </p>
          </Prose>
          <TitledList items={whatItManages} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <LinkPanel>
            Booking and scheduling is one part of the wider family of <BodyLink link={fbLinks.pillar} />. It can run on its
            own or connect to the membership, billing and access systems you already use.
          </LinkPanel>
        </Section>

        {/* Challenges */}
        <Section id="why-fitness-booking-software" eyebrow="Business problems" title="Booking Problems Fitness Scheduling Software Solves">
          <CompareTable
            caption="Fitness booking challenges, what happens and how booking software helps"
            headers={["Challenge", "What happens", "How software helps"]}
            rows={challengeRows}
          />
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="24 capability areas" title="Key Features of Fitness Booking and Scheduling Software">
          <Prose>
            <p>
              These are <strong className="text-foreground">configurable modules and custom-development options</strong>{" "}
              scoped during discovery, not preinstalled features of a ready-made Clickmasters product. Payments, messaging
              and video depend on the providers you choose.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 12).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={LETTERS[index]} />
            ))}
          </div>
          <div className="mt-8">
            <DiagramFigure image={fbImages.app} caption="Member booking on a phone: class list, spot selection and confirmation" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(12).map((feature, index) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} number={LETTERS[index + 12]} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build Custom Fitness Booking Software" />
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Workflow" title="How Fitness Booking Software Works">
          <NumberedCards items={howItWorks} className="sm:grid-cols-2 lg:grid-cols-5" />
        </Section>

        {/* Class scheduling */}
        <Section id="class-scheduling" eyebrow="Group classes" title="Fitness Class Scheduling Software">
          <Prose>
            <p>
              Fitness class scheduling software sets the class, the instructor, the room and the capacity, then keeps the
              published timetable in sync with every booking and change.
            </p>
          </Prose>
          <TitledList items={classSchedulingPoints} icon={CalendarDays} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={fbImages.calendar} caption="Weekly class calendar by room, instructor and remaining capacity" />
          </div>
          <LinkPanel>
            Studios built around recurring classes, class packs, workshops and retreats may also want dedicated{" "}
            <BodyLink link={fbLinks.yoga} />.
          </LinkPanel>
        </Section>

        {/* PT */}
        <Section id="personal-training" eyebrow="Appointments" title="Personal Training Scheduling Software">
          <Prose>
            <p>
              Personal training runs on appointments, not timetables. Trainers publish their availability, clients pick an
              open slot, and the system checks packages, buffers and rescheduling rules before confirming.
            </p>
          </Prose>
          <TitledList items={trainerPoints} icon={Dumbbell} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={fbImages.trainer} caption="Trainer availability, booked sessions and open slots for the day" />
          </div>
          <LinkPanel>
            For trainers who also need client programs, progress tracking and session packages, see our{" "}
            <BodyLink link={fbLinks.trainer} />.
          </LinkPanel>
        </Section>

        {/* Rooms */}
        <Section id="rooms-resources" eyebrow="Facility" title="Fitness Center Scheduling for Rooms, Courts and Equipment">
          <Prose>
            <p>
              Fitness center scheduling software covers every bookable space and resource across the center, so classes,
              appointments and open bookings never compete for the same room, court or piece of equipment.
            </p>
          </Prose>
          <TitledList items={resourcePoints} icon={Building2} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={fbImages.rooms} caption="Room and court timeline with utilization by space" />
          </div>
        </Section>

        {/* Waitlists and policies */}
        <Section id="waitlists-policies" eyebrow="Rules" title="Waitlists, Cancellations and Booking Policies">
          <Prose>
            <p>
              Fitness studio booking software is only as fair as its rules. These policies decide who can book, when, and
              what happens when plans change:
            </p>
          </Prose>
          <CompareTable caption="Booking policies a fitness booking system can enforce" headers={["Policy", "What it controls"]} rows={policyRows} />
          <div className="mt-8">
            <DiagramFigure image={fbImages.waitlist} caption="A cancelled spot is offered to the next member on the waitlist" />
          </div>
          <div className="mt-8">
            <AppFigure image={fbImages.rules} caption="Booking window, cancellation cutoff, late-cancel fee and credit rules" />
          </div>
          <Note>
            Late-cancel and no-show fees should match your membership terms and applicable state rules. Clickmasters builds
            the rules you define; it does not set your policies.
          </Note>
        </Section>

        {/* Check-in */}
        <Section id="check-in" eyebrow="Attendance" title="Check-In and Attendance Linked to Bookings">
          <Prose>
            <p>
              Check-in closes the loop on every booking. Members check in by QR code, a tablet kiosk or the instructor&apos;s
              roster; attendance is recorded, credits are confirmed and anyone who did not arrive is flagged as a no-show.
            </p>
          </Prose>
          <div className="mt-8">
            <AppFigure image={fbImages.checkin} caption="Class roster with check-ins, new members and no-show flags" />
          </div>
        </Section>

        {/* Reminders */}
        <Section id="reminders" eyebrow="Communication" title="Booking Reminders and Notifications">
          <CheckList items={notificationPoints} icon={BellRing} className="max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <DiagramFigure image={fbImages.reminders} caption="Confirmation, reminder and waitlist messages by email, SMS and push" />
          </div>
        </Section>

        {/* Portal */}
        <Section id="member-booking" eyebrow="Self-service" title="Online Booking Portal, Website Widget and Mobile App">
          <Prose>
            <p>
              Members should be able to book in a few taps wherever they find you. A custom system can offer a booking
              widget on your existing website, a member portal and branded iOS and Android apps, all reading from the same
              live schedule. Clickmasters builds these through its <BodyLink link={fbLinks.webApp} /> and cross-platform
              mobile practices.
            </p>
          </Prose>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Insight" title="Fitness Booking Analytics and Reporting">
          <CompareTable caption="Fitness booking reports and what they show" headers={["Report", "What it shows"]} rows={reportRows} />
          <div className="mt-8">
            <AppFigure image={fbImages.analytics} caption="Fill rate by class, peak booking hours and no-show trend" />
          </div>
        </Section>

        {/* Business types */}
        <Section id="business-types" eyebrow="Who it's for" title="Booking Software for Every Type of Fitness Business">
          <CompareTable caption="Booking needs by fitness business type" headers={["Business type", "Booking needs"]} rows={businessRows} />
        </Section>

        {/* Comparisons */}
        <Section id="vs-gym" eyebrow="Compare" title="Fitness Booking Software vs. Gym Management Software">
          <CompareTable
            caption="Fitness booking and scheduling software compared with gym management software"
            headers={["", "Booking & scheduling software", "Gym management software"]}
            rows={compareRows}
          />
          <LinkPanel>
            If you need door access, membership billing, staff and the whole facility in one system, start with{" "}
            <BodyLink link={fbLinks.gym} /> and include booking as a module.
          </LinkPanel>
        </Section>

        <Section id="ready-vs-custom" eyebrow="Build or buy" title="Ready-Made vs. Custom Fitness Booking Software">
          <CompareTable
            caption="Ready-made compared with custom fitness booking software"
            headers={["", "Ready-made", "Custom"]}
            rows={readyVsCustomRows}
          />
        </Section>

        {/* Custom */}
        <Section id="custom" eyebrow="What we deliver" title="Custom Fitness Booking Software Development">
          <Prose>
            <p>Clickmasters can deliver:</p>
          </Prose>
          <CheckList items={deliverables} className="mt-4 max-w-5xl md:grid-cols-2" />
          <LinkPanel>
            Booking systems fail at peak times, when hundreds of members try to grab the same class the moment it opens.
            Our <BodyLink link={fbLinks.caseStudy} /> case study shows how we test booking flows, load and payments before
            launch.
          </LinkPanel>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Fitness Booking and Scheduling Software">
          <CheckList items={benefits} className="max-w-5xl md:grid-cols-2" />
          <Note>Results depend on setup, adoption and your business model. No growth or revenue outcome is guaranteed.</Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose Fitness Scheduling Software">
          <ul className="grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chooseChecklist.map((item) => (
              <li key={shortKey(item)} className="cm-card4li">
                <span aria-hidden="true" className="ico ico-sqcheck cm-ic05l" style={{ color: ACCENT }} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Why us */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters Software Development Company?">
          <TitledList items={whyClickmasters} className="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <PrimaryCta label="Talk to Our Software Development Team" />
          </div>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Fitness Booking Software Development Process">
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
        <Section id="cost" eyebrow="Budgeting" title="Fitness Booking Software Cost">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <Prose>
                <p>The cost of custom fitness booking and scheduling software depends on:</p>
              </Prose>
              <CheckList items={costFactors} className="mt-4 md:grid-cols-2" />
            </div>
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-base leading-7 text-white/85">
                There&apos;s no fixed price. Clickmasters agrees scope, timeline and quote before development starts.
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
              Frequently Asked Questions About Fitness Booking and Scheduling Software
            </h2>
            <div className="cm-list">
              {fbFaqs.map((faq, index) => (
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
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Build Fitness Booking Software Around Your Schedule
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Whether you run one boutique studio, a busy gym with classes and personal training, or a multi-location
              fitness brand, the right booking system starts with your timetable, your rules and your members.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Tell Clickmasters Software Development Company how bookings work today and where they break. We&apos;ll
              recommend the modules and integrations you need and scope the first release of your custom fitness booking
              and scheduling software.
            </p>
            <div className="mt-8">
              <CtaPair light secondary={{ label: "Talk to Our Software Development Team", href: "/contact" }} />
            </div>
            <p className="mt-4 text-sm text-white/60">We scope the product, the timeline and the quote before development starts.</p>
          </div>
        </section>

        {/* Related products */}
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
            Discuss Your Booking Software
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
