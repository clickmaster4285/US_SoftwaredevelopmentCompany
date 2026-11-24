import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Brain,
  Building2,
  CalendarDays,
  Check,
  CheckSquare,
  ChevronRight,
  Lock,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { IndustryIcon } from "@/components/products/IndustryIcon";
import { industryPath, productIndustries, productPath, type ProductIndustry } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  aiPoints,
  appRows,
  benefits,
  categoryRows,
  chooseChecklist,
  classPoints,
  cloudRows,
  clubPoints,
  coachPoints,
  costFactors,
  customReasons,
  eventPoints,
  facilityPoints,
  fitnessSolutions,
  FS_LABEL,
  FS_PATH,
  FS_SLUG,
  fsDescription,
  fsFaqs,
  fsImages,
  fsLinks,
  fsTitle,
  integrations,
  moduleRows,
  movingParts,
  orgRows,
  paymentRows,
  processSteps,
  reportRows,
  sharedCore,
  sportsSolutions,
  teamPoints,
  venueRows,
  whyClickmasters,
  type LinkSpec,
  type Solution,
} from "./fitness-sports-data";

export { FS_PATH, FS_SLUG, fsDescription, fsImages, fsTitle };

const ACCENT = "#1e40af";
const DARK = "#0a1633";

export function fsSchema(industry: ProductIndustry) {
  const url = pageUrl(FS_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        name: "Fitness & Sports Management Software",
        description:
          "Custom fitness and sports management software for gyms, studios, sports clubs, academies and facilities.",
        url,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: pageUrl(fsImages.dashboard.src),
        hasPart: industry.products.map((product) => ({
          "@type": "WebPage",
          url: pageUrl(productPath(industry.slug, product.slug)),
          name: product.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl("/products") },
          { "@type": "ListItem", position: 3, name: FS_LABEL, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: fsFaqs.map((faq) => ({
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
  { href: "#what-is-fitness-sports-software", label: "What it is" },
  { href: "#ecosystem", label: "How it fits together" },
  { href: "#products", label: "Our products" },
  { href: "#fitness-solutions", label: "Fitness solutions" },
  { href: "#sports-solutions", label: "Sports solutions" },
  { href: "#facilities", label: "Facilities" },
  { href: "#events", label: "Events and tournaments" },
  { href: "#payments", label: "Payments" },
  { href: "#mobile", label: "Mobile apps" },
  { href: "#reporting", label: "Reporting" },
  { href: "#organizations", label: "Organizations" },
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
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#0a1633] shadow-xl shadow-blue-950/10 ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-3 hidden items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/60 sm:inline-flex">
          <Lock className="h-3 w-3" /> sports.example / concept
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

const PRIMARY_CTA = "Discuss Your Fitness or Sports Software Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#0a1633]" : "bg-primary text-primary-foreground"}`}
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
    <div className="mt-8 max-w-4xl rounded-2xl border border-[#bfdbfe] bg-[#eff6ff] p-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

const SOLUTION_LINK_TEXT: Record<string, ReactNode> = {
  gym: (
    <>
      The detailed capabilities, from member registration to multi-branch reporting, are covered on our dedicated{" "}
      <BodyLink link={fsLinks.gym} /> page.
    </>
  ),
  club: (
    <>
      Our <BodyLink link={fsLinks.club} /> is designed for this multi-amenity environment.
    </>
  ),
  sportsClub: (
    <>
      For clubs running seasons and teams, our <BodyLink link={fsLinks.sportsClub} /> covers members, teams, fixtures
      and club fees.
    </>
  ),
};

function SolutionCard({ solution, featured = false }: { solution: Solution; featured?: boolean }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-6 ${featured ? "border-[#93c5fd] bg-[#eff6ff]" : "border-border bg-white"}`}
    >
      <h3 className="text-lg font-semibold leading-snug">{solution.title}</h3>
      <dl className="mt-3 space-y-2 text-sm leading-6">
        {solution.rows.map(([label, text]) => (
          <div key={label}>
            <dt className="inline font-semibold text-foreground">{label}: </dt>
            <dd className="inline text-muted-foreground">{text}</dd>
          </div>
        ))}
      </dl>
      {solution.link ? <p className="mt-4 text-sm leading-6 text-muted-foreground">{SOLUTION_LINK_TEXT[solution.link]}</p> : null}
    </article>
  );
}

export default function FitnessSportsPillarPage({ industry }: { industry: ProductIndustry }) {
  const others = productIndustries.filter((item) => item.slug !== industry.slug);
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
              <li className="text-foreground">{FS_LABEL}</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                <IndustryIcon name={industry.icon} className="h-4 w-4" />
                Industry · {industry.products.length} products
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                Fitness &amp; Sports Management Software for Gyms, Clubs, Academies and Sports Facilities
              </h1>
              <p className="mt-4 text-lg font-semibold leading-snug text-foreground md:text-xl">
                Custom software for running memberships, teams, classes, facilities, events and payments, from a
                single studio to a multi-sport organization.
              </p>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                <p>
                  Fitness businesses and sports organizations run on schedules, people and payments. A gym sells
                  memberships and checks members in at the door. A sports club registers players, builds teams and
                  publishes fixtures. An academy tracks athletes across age groups and coaches. A facility operator
                  rents courts and fields by the hour. Each needs software that fits how it actually operates.
                </p>
                <p>
                  Clickmasters designs, builds and integrates custom fitness and sports management software for US
                  businesses and organizations. That can be a focused product for one need, or a connected platform
                  for members, athletes, coaches, facilities and finances: gym management software, a fitness club
                  management system, yoga studio management software, sports club management software, personal
                  trainer management software, membership management software, and fitness booking and scheduling
                  software.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore Fitness & Sports Solutions", href: "#fitness-solutions" }} />
              </div>
            </div>
            <AppFigure image={fsImages.dashboard} caption="Members, teams, facilities, events and revenue in one view" priority />
          </div>

          <nav aria-label="On this page" className="mt-12 rounded-3xl border border-border bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">On this page</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {contents.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border px-3 py-1.5 text-sm font-medium hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </section>

        {/* Built for (template) */}
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Built for</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {industry.audiences.map((audience) => (
                <li key={audience} className="rounded-2xl border border-border bg-white px-4 py-4 text-sm font-semibold leading-snug">
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why connected */}
        <Section id="why-connected" eyebrow="The challenge" title="Why Fitness and Sports Organizations Need Connected Software">
          <Prose>
            <p>
              Modern fitness and sports operations involve more moving parts than spreadsheets, group chats and paper
              forms can handle:
            </p>
          </Prose>
          <TitledList items={movingParts} className="mt-6 sm:grid-cols-2 lg:grid-cols-5" />
          <Note>
            When these live in separate tools, the same problems keep appearing: double-booked courts, outdated
            rosters, unpaid fees nobody chases, members who stop coming without anyone noticing, and owners who
            can&apos;t see how the business is performing. Centralized management software gives each group a single
            source of truth and a clear workflow.
          </Note>
        </Section>

        {/* What is */}
        <Section id="what-is-fitness-sports-software" eyebrow="Definition" title="What Is Fitness & Sports Management Software?">
          <Prose>
            <p>
              Fitness &amp; sports management software is a category of business software that helps fitness businesses
              and sports organizations manage their people, schedules, facilities, payments and operational records.
              It covers two related but different environments:
            </p>
          </Prose>
          <CompareTable
            caption="Fitness and sports software categories, their operating environment and typical core records"
            headers={["Category", "Operating environment", "Typical core records"]}
            rows={categoryRows}
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Fitness software usually revolves around <strong className="text-foreground">recurring memberships and individual visits</strong>.
            Sports software usually revolves around <strong className="text-foreground">teams, seasons and competitions</strong>.
            Facility software revolves around <strong className="text-foreground">space and time</strong>. Many organizations need a
            combination. A multi-sport recreation center, for example, sells fitness memberships, runs youth leagues and
            rents courts.
          </p>
        </Section>

        {/* Ecosystem */}
        <Section id="ecosystem" eyebrow="Building blocks" title="How the Fitness and Sports Software Ecosystem Fits Together">
          <Prose>
            <p>
              It helps to think of fitness and sports software as a set of building blocks that share a common core,
              rather than one giant product.
            </p>
          </Prose>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#93c5fd]">The shared core</p>
              <p className="mt-2 text-sm text-white/70">Usually the same for every organization:</p>
              <ul className="mt-5 space-y-4">
                {sharedCore.map(([title, text]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#93c5fd] text-[#0a1633]">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span>
                      <span className="font-semibold">{title}:</span>{" "}
                      <span className="text-white/80">{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                Specialized modules
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Sit on top of that core and match the organization&apos;s operating model:
              </p>
              <CompareTable caption="The module that matters most by organization type" headers={["If your organization mainly…", "The module that matters most"]} rows={moduleRows} />
            </div>
          </div>
          <Note>
            Because the modules share one core, a member who also plays in a league, books a tennis court and trains
            with a coach has a single profile, a single payment history and a single schedule. Staff don&apos;t have to
            reconcile three systems. This is also why many organizations <strong className="text-foreground">start with one module and expand</strong>.
            A studio might begin with class booking and add a member app later. A club might start with registrations
            and fees, then add fixtures and facility booking. A custom platform designed around a shared core makes
            those additions straightforward. Each solution below describes one building block. The dedicated product
            pages go deeper into each.
          </Note>
          <DiagramFigure image={fsImages.app} caption="One family profile: a gym membership, court bookings and a child's team schedule" className="mt-8" />
        </Section>

        {/* Products grid (template) */}
        <section id="products" className="scroll-mt-28 border-t border-border py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{industry.products.length} products</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Products in {industry.label}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {industry.products.map((product, index) => (
                <article key={product.slug} id={product.slug} className="scroll-mt-28 flex flex-col rounded-3xl border border-border bg-white p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{product.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.points.map((point) => (
                      <li key={point} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={productPath(industry.slug, product.slug)}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Open product page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Fitness solutions */}
        <Section id="fitness-solutions" eyebrow="Memberships, classes, training" title="Fitness Management Software Solutions">
          <Prose>
            <p>Fitness solutions serve businesses whose revenue comes mainly from memberships, classes and training.</p>
          </Prose>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {fitnessSolutions.slice(0, 2).map((solution) => (
              <SolutionCard key={solution.title} solution={solution} featured />
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {fitnessSolutions.slice(2).map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </div>
          <div className="mt-8">
            <AppFigure image={fsImages.membership} caption="Membership plans, statuses and renewals" />
          </div>
          <div className="mt-8">
            <PrimaryCta label="Talk About Fitness Business Software" />
          </div>
        </Section>

        {/* Sports solutions */}
        <Section id="sports-solutions" eyebrow="Athletes, teams, seasons, venues" title="Sports Management Software Solutions">
          <Prose>
            <p>
              Sports solutions serve organizations built around athletes, teams, seasons, competitions and venues.
              Requirements differ significantly between a community club, a competitive academy and a league operator.
            </p>
          </Prose>
          <div className="mt-8">
            <SolutionCard solution={sportsSolutions[0]} featured />
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sportsSolutions.slice(1).map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </div>
          <div className="mt-8">
            <AppFigure image={fsImages.academy} caption="Academy batches by age group and level, with coaches, attendance and fees" />
          </div>
          <div className="mt-8">
            <PrimaryCta label="Talk About Sports Organization Software" />
          </div>
        </Section>

        {/* Club */}
        <Section id="sports-club" eyebrow="Clubs" title="Sports Club and Membership Management">
          <Prose>
            <p>Sports clubs blend membership administration with team operations:</p>
          </Prose>
          <TitledList items={clubPoints} icon={Users} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={fsImages.club} caption="Members by category, teams, fixtures and club fees" />
          </div>
        </Section>

        {/* Team & athlete */}
        <Section id="teams-athletes" eyebrow="Teams" title="Sports Team and Athlete Management">
          <CheckList items={teamPoints} className="max-w-5xl md:grid-cols-2" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure image={fsImages.team} caption="Roster, availability and the week's schedule" />
            <AppFigure image={fsImages.athlete} caption="Youth player record with guardian access and coach notes" />
          </div>
          <Caution>
            Youth programs need extra care with guardian consent, minors&apos; data and communication policies.
            Professional-grade performance analytics or device integrations are optional, project-specific additions.
          </Caution>
        </Section>

        {/* Facilities */}
        <Section id="facilities" eyebrow="Time and space" title="Sports Facility and Venue Management">
          <Prose>
            <p>
              Facilities sell <strong className="text-foreground">time and space</strong>, so their software centers on resources and
              calendars:
            </p>
          </Prose>
          <TitledList items={facilityPoints} icon={Building2} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-8">
            <AppFigure image={fsImages.facility} caption="Courts, fields, pool and gym booked by hour" />
          </div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
            Examples
          </p>
          <CompareTable caption="Typical booking patterns by venue" headers={["Venue", "Typical booking pattern"]} rows={venueRows} />
          <LinkPanel>
            Self-booking, capacity and open-slot management are also the focus of our{" "}
            <BodyLink link={fsLinks.booking} />, which keeps trainers, rooms and capacity on one calendar.
          </LinkPanel>
        </Section>

        {/* Events */}
        <Section id="events" eyebrow="Competitions" title="Sports Event and Tournament Management">
          <TitledList items={eventPoints} icon={Trophy} className="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={fsImages.tournament} caption="Pools, knockouts, match schedule and results" />
          </div>
          <Note>
            Workflows vary. A weekend youth soccer tournament, a tennis ladder, a martial arts competition and a 5K
            race each have different formats, eligibility rules and scoring. That&apos;s why event software is often
            tailored.
          </Note>
        </Section>

        {/* Classes and coaches */}
        <Section id="classes-coaches" eyebrow="Training" title="Fitness Class and Training Management">
          <CheckList items={classPoints} icon={CalendarDays} className="max-w-5xl md:grid-cols-2" />
          <div className="mt-8">
            <AppFigure image={fsImages.classes} caption="Weekly timetable with instructors, capacity and waitlists" />
          </div>
          <h2 className="mt-14 text-2xl font-semibold tracking-tight md:text-3xl">Coach and Personal Trainer Management</h2>
          <CheckList items={coachPoints} className="mt-6 max-w-5xl md:grid-cols-2" />
        </Section>

        {/* Payments */}
        <Section id="payments" eyebrow="Money in" title="Payments, Billing and Financial Operations">
          <Prose>
            <p>Fitness and sports organizations collect many types of payments:</p>
          </Prose>
          <CompareTable caption="Payment types and typical examples" headers={["Payment type", "Typical example"]} rows={paymentRows} />
          <Note>
            Supporting capabilities include invoices, payment history, outstanding balances, installment plans,
            discounts, refunds and financial reporting. Payments are processed through a{" "}
            <strong className="text-foreground">payment gateway integration</strong> chosen during the project, with tokenized card
            handling. No specific gateway is assumed to be prebuilt.
          </Note>
        </Section>

        {/* Mobile */}
        <Section id="mobile" eyebrow="Apps and portals" title="Mobile Applications and Member Portals">
          <Prose>
            <p>Digital experiences differ by user:</p>
          </Prose>
          <CompareTable caption="Possible mobile capabilities by user" headers={["User", "Possible capabilities"]} rows={appRows} />
          <LinkPanel>
            Common features include profiles, schedules, bookings, notifications, payments, training information, event
            updates and membership information. Clickmasters builds iOS and Android apps from a single codebase through
            its <BodyLink link={fsLinks.crossPlatform} /> practice, including push notifications. Installable web apps
            are an alternative when an app-store presence isn&apos;t needed.
          </LinkPanel>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Insight" title="Reporting and Analytics">
          <CompareTable caption="Report areas and examples" headers={["Report area", "Examples"]} rows={reportRows} />
          <div className="mt-8">
            <AppFigure image={fsImages.analytics} caption="Membership trends, facility utilization and event registrations" />
          </div>
        </Section>

        {/* AI */}
        <Section id="ai" eyebrow="Optional" title="AI in Fitness and Sports Management">
          <Prose>
            <p>
              These are <strong className="text-foreground">optional, project-specific capabilities</strong>, not standard features,
              and they depend on data quality and volume:
            </p>
          </Prose>
          <TitledList items={aiPoints} icon={Brain} className="mt-6 sm:grid-cols-2 lg:grid-cols-4" />
          <Caution>
            AI outputs need validation and human oversight. Training, health and performance decisions should stay with
            qualified coaches, trainers and medical professionals. No medical or athletic-performance outcomes are
            claimed.
          </Caution>
        </Section>

        {/* Organizations */}
        <Section id="organizations" eyebrow="Who uses it" title="Industries and Organizations">
          <CompareTable caption="Key software requirements by organization" headers={["Organization", "Key software requirements"]} rows={orgRows} />
          <div className="mt-8">
            <AppFigure image={fsImages.multiLocation} caption="Multi-location view comparing members, check-ins and revenue" />
          </div>
        </Section>

        {/* Custom */}
        <Section id="custom" eyebrow="Build to fit" title="Custom Fitness and Sports Software Development">
          <Prose>
            <p>Custom development is useful when:</p>
          </Prose>
          <TitledList items={customReasons} className="mt-6 sm:grid-cols-2 lg:grid-cols-5" />
        </Section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Software">
          <CompareTable caption="Cloud-based compared with on-premise fitness and sports software" headers={["Factor", "Cloud-based", "On-premise"]} rows={cloudRows} />
          <Note>Security depends on configuration and operations, not on the deployment model alone.</Note>
        </Section>

        {/* Integrations & benefits */}
        <Section id="integrations" eyebrow="Connected systems" title="Software Integrations">
          <Prose>
            <p>Potential integrations, confirmed during scoping, include:</p>
          </Prose>
          <CheckList items={integrations} className="mt-6 max-w-5xl sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Fitness & Sports Management Software">
          <CheckList items={benefits} className="max-w-5xl md:grid-cols-2" />
          <Note>Results depend on setup, adoption and the organization&apos;s processes. No performance figures are promised.</Note>
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation checklist" title="How to Choose the Right Software">
          <CheckList items={chooseChecklist} icon={CheckSquare} className="max-w-5xl sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Why */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters Software Development Company?">
          <Prose>
            <p>These points are verified from the Clickmasters website:</p>
          </Prose>
          <TitledList items={whyClickmasters} className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Custom Software Development Process">
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

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Cost of Fitness & Sports Management Software">
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
              Frequently Asked Questions About Fitness &amp; Sports Management Software
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {fsFaqs.map((faq, index) => (
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
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Build Fitness &amp; Sports Software Around Your Organization
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Whether you run a gym, a studio, a sports club, an academy, a league or a sports facility, the right
              software starts with how your organization actually works.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Tell Clickmasters Software Development Company about your members, athletes, teams, facilities and events.
              We&apos;ll recommend the right modules and integrations and scope the first phase of your custom fitness and
              sports management software.
            </p>
            <div className="mt-8">
              <CtaPair light secondary={{ label: "Talk to Our Software Development Team", href: "/contact" }} />
            </div>
            <p className="mt-4 text-sm text-white/60">We scope the product, the timeline and the quote before development starts.</p>
          </div>
        </section>

        {/* Other industries (template) */}
        <section className="border-t border-border py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">Other industries</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={industryPath(item.slug)}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-4 hover:border-primary/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <IndustryIcon name={item.icon} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-snug group-hover:text-primary">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{item.products.length} products</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky mobile CTA */}
        <style>{"@media (max-width: 767px) { body { padding-bottom: 72px; } }"}</style>
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Discuss Your Software Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
