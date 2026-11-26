"use client";

// Longest blocks of the fitness & sports hub (solution cards and FAQ) rendered
// from a client component that imports its own data: the HTML keeps the full
// server-rendered text, the React Server Components payload only references
// the component. See practice-sections.tsx. Helpers below mirror the page's.
import { shortKey } from "@/lib/short-key";
import { ListIcon } from "@/components/ui/list-icon";
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
  Lock,
  Trophy,
  Users,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { IndustryIcon } from "@/components/products/IndustryIcon";
import { industryPath, productIndustries, productPath, type ProductIndustry } from "@/data/products";
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
import { CompareTable, linkClass, Prose, Section } from "./product-primitives";

const ACCENT = "#1e40af";
const DARK = "#0a1633";


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
    <figure className="cx-overfl-rounde-3f">
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
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
      <h3 className="cm-h3">{solution.title}</h3>
      <dl className="mt-3 space-y-2 text-sm leading-6">
        {solution.rows.map(([label, text]) => (
          <div key={shortKey(label)}>
            <dt className="cx-inline-fontse-q">{label}: </dt>
            <dd className="cx-inline-textmu-v">{text}</dd>
          </div>
        ))}
      </dl>
      {solution.link ? <p className="cm-p4">{SOLUTION_LINK_TEXT[solution.link]}</p> : null}
    </article>
  );
}


export function FsFitnessSolutions() {
  return (
    <Section id="fitness-solutions" eyebrow="Memberships, classes, training" title="Fitness Management Software Solutions">
      <Prose>
        <p>Fitness solutions serve businesses whose revenue comes mainly from memberships, classes and training.</p>
      </Prose>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {fitnessSolutions.slice(0, 2).map((solution) => (
          <SolutionCard key={shortKey(solution.title)} solution={solution} featured />
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {fitnessSolutions.slice(2).map((solution) => (
          <SolutionCard key={shortKey(solution.title)} solution={solution} />
        ))}
      </div>
      <div className="mt-8">
        <AppFigure image={fsImages.membership} caption="Membership plans, statuses and renewals" />
      </div>
      <div className="mt-8">
        <PrimaryCta label="Talk About Fitness Business Software" />
      </div>
    </Section>
  );
}

export function FsSportsSolutions() {
  return (
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
          <SolutionCard key={shortKey(solution.title)} solution={solution} />
        ))}
      </div>
      <div className="mt-8">
        <AppFigure image={fsImages.academy} caption="Academy batches by age group and level, with coaches, attendance and fees" />
      </div>
      <div className="mt-8">
        <PrimaryCta label="Talk About Sports Organization Software" />
      </div>
    </Section>
  );
}

export function FsFaqList() {
  return (
    <div className="cm-list">
      {fsFaqs.map((faq, index) => (
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
  );
}
