"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  caseStudy,
  type Block,
  type Part,
} from "@/content/case-studies/clickmasters-case-study-saas-booking-platform-qa";
import {
  AtAGlanceSection,
  HeroSection,
} from "../../../components/case-studies/Header";
import {
  CtaSection,
  FunSection,
} from "../../../components/case-studies/Footer";
import {
  AnimatedCard,
  AnimatedTable,
} from "../../../components/case-studies/Table";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ------------------------------------------------------------------ */
/* Shared eyebrow + accent heading                                     */
/* ------------------------------------------------------------------ */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-5 flex items-center gap-3">
      <span className="inline-block w-8 h-px bg-current opacity-60" />
      {children}
    </p>
  );
}

function AccentHeading({
  lead,
  accent,
  trail,
  className = "",
}: {
  lead?: string;
  accent: string;
  trail?: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.05] ${className}`}
    >
      {lead ? `${lead} ` : ""}
      <span className="italic font-serif">{accent}</span>
      {trail ? ` ${trail}` : ""}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Parts                                                               */
/* ------------------------------------------------------------------ */
function PartsSection({ parts }: { parts: Part[] }) {
  return (
    <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="flex flex-col gap-28 md:gap-40">
        {parts.map((part) => (
          <PartSection key={part.n} part={part} />
        ))}
      </div>
    </div>
  );
}

function PartSection({ part }: { part: Part }) {
  const ref = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      gsap.fromTo(
        headRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 88%" },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <section ref={ref} className="relative">
      <div ref={headRef} className="max-w-3xl mb-12 will-change-transform">
        <Eyebrow>Part {part.n}</Eyebrow>
        <AccentHeading accent={part.title} />
      </div>

      <BlockList blocks={part.blocks} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Block list — groups consecutive cards into a 3-up grid              */
/* ------------------------------------------------------------------ */

function BlockList({ blocks }: { blocks: Block[] }) {
  const groups: { type: "card-grid" | "single"; items: Block[] }[] = [];

  for (const block of blocks) {
    const last = groups[groups.length - 1];
    if (block.kind === "card") {
      if (last && last.type === "card-grid") {
        last.items.push(block);
      } else {
        groups.push({ type: "card-grid", items: [block] });
      }
    } else {
      groups.push({ type: "single", items: [block] });
    }
  }

  return (
    <div className="space-y-8 md:space-y-10">
      {groups.map((group, gi) => {
        if (group.type === "card-grid") {
          return (
            <div
              key={`g-${gi}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
            >
              {group.items.map((block, i) =>
                block.kind === "card" ? (
                  <AnimatedCard key={i} title={block.title} body={block.body} />
                ) : null,
              )}
            </div>
          );
        }

        const block = group.items[0];
        return <BlockRenderer key={`s-${gi}`} block={block} />;
      })}
    </div>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case "heading":
      return (
        <div className="pt-4">
          {block.level <= 2 ? (
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              {block.text}
            </h3>
          ) : (
            <h4 className="text-lg md:text-xl font-semibold tracking-tight">
              {block.text}
            </h4>
          )}
        </div>
      );

    case "para":
      return (
        <p className="text-[15px] md:text-base leading-relaxed opacity-85 max-w-3xl">
          {block.text}
        </p>
      );

    case "list":
      return <ListBlock items={block.items} ordered={block.ordered} />;

    case "table":
      return <AnimatedTable rows={block.rows} />;

    case "card":
      return <AnimatedCard title={block.title} body={block.body} />;

    case "image":
      return (
        <figure className="rounded-2xl overflow-hidden border border-[oklch(0.18_0.02_250)]/12">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="px-4 py-3 text-xs opacity-60">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <pre className="rounded-xl border border-[oklch(0.18_0.02_250)]/12 bg-white/70 p-5 overflow-x-auto text-xs md:text-sm no-scrollbar">
          <code>{block.code}</code>
        </pre>
      );

    case "page":
      return null;

    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/* List                                                                */
/* ------------------------------------------------------------------ */

function ListBlock({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const listRef = useRef<HTMLOListElement | HTMLUListElement>(null);

  useGSAP(
    () => {
      const root = listRef.current;
      if (!root) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const rows = root.querySelectorAll<HTMLElement>("[data-list-row]");
      if (reduceMotion) {
        gsap.set(rows, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        rows,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root, start: "top 85%" },
        },
      );
    },
    { scope: listRef, dependencies: [] },
  );

  const ListTag: "ol" | "ul" = ordered ? "ol" : "ul";

  return (
    <ListTag
      ref={(element: HTMLOListElement | HTMLUListElement | null) => {
        listRef.current = element;
      }}
      className="relative -mx-6 md:-mx-10 divide-y divide-[oklch(0.18_0.02_250)]/10 border-y border-[oklch(0.18_0.02_250)]/10"
    >
      {items.map((item, i) => (
        <li
          key={i}
          data-list-row
          className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[88px_1fr] gap-5 md:gap-10 items-baseline px-6 md:px-10 py-6 md:py-7 will-change-transform transition-colors duration-500 hover:bg-[oklch(0.18_0.02_250)]/[0.03]"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, oklch(0.65 0.18 250 / 0.10), transparent 55%)",
            }}
          />

          <span className="relative select-none font-mono text-xs md:text-sm tracking-[0.2em] opacity-40 pt-1 tabular-nums">
            {ordered
              ? String(i + 1).padStart(2, "0")
              : `— ${String(i + 1).padStart(2, "0")}`}
          </span>

          <p className="relative text-[15px] md:text-lg leading-relaxed opacity-90 max-w-none">
            {item}
          </p>
        </li>
      ))}
    </ListTag>
  );
}

const FUN_ITEMS = [
  {
    k: "Signal",
    v: "Every charter maps to one line in the brief — nothing invented.",
  },
  {
    k: "Coverage",
    v: "Twenty charters, three plan tiers, two payment paths, one tenant edge case.",
  },
  {
    k: "Effort",
    v: "16–22 h launch-critical path; 32–46 h for full coverage including retest.",
  },
  {
    k: "Cadence",
    v: "Daily written status, a shared board, and a single threaded channel.",
  },
  {
    k: "Exit",
    v: "You keep the charters, the evidence, and the retest log. No lock-in.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CaseStudyPage() {
  const hero = caseStudy.hero as {
    eyebrow: string;
    h1: string;
    intro: string;
    disclaimer?: string;
    atAGlanceTitle: string;
    atAGlance: { label: string; value: string }[];
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };

  return (
    <main className="relative bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] overflow-hidden">
      <HeroSection hero={hero} />

      <AtAGlanceSection title={hero.atAGlanceTitle} rows={hero.atAGlance} />

      <div className="bg-white">
        {" "}
        <PartsSection parts={caseStudy.parts} />
      </div>

      {/* <FunSection /> */}

      <CtaSection />
    </main>
  );
}
