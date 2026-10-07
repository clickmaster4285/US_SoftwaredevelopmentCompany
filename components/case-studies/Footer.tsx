"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { caseStudy } from "@/content/case-studies/clickmasters-case-study-saas-booking-platform-qa";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ---------- local copies (small, only used here) ---------- */

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

/* ---------- FunSection ---------- */

export function FunSection() {
  const ref = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

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
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 88%" },
        },
      );

      const cards =
        gridRef.current?.querySelectorAll<HTMLElement>("[data-fun-card]");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
          },
        );
      }

      gsap.to(blobRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <section
      ref={ref}
      className="relative bg-[oklch(0.13_0.015_250)] text-[oklch(0.97_0.005_80)] py-24 md:py-32 overflow-hidden"
    >
      {/* grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.005 80) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.005 80) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
      />

      {/* glow blob */}
      <div
        ref={blobRef}
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.55), transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div ref={headRef} className="max-w-3xl mb-14 md:mb-16">
          <Eyebrow>Inside the engagement</Eyebrow>
          <AccentHeading lead="Five" accent="signals" trail="worth knowing" />
          <p className="mt-6 text-base md:text-lg opacity-70 max-w-xl">
            A quick shape of how the work runs, what you get, and where it
            stops. No padding, no retainer theatre.
          </p>
        </div>

        {/* 2-col grid; last card spans both so there is no orphan */}
        <ul
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {FUN_ITEMS.map((item, i) => {
            const isLast = i === FUN_ITEMS.length - 1;
            return (
              <li
                key={item.k}
                data-fun-card
                className={
                  "group relative rounded-2xl border border-[oklch(0.97_0.005_80)]/12 bg-[oklch(0.17_0.02_250)]/70 backdrop-blur-sm p-7 md:p-8 overflow-hidden will-change-transform transition-transform duration-500 hover:-translate-y-2" +
                  (isLast ? " md:col-span-2" : "")
                }
              >
                {/* hover radial tint */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 0%, oklch(0.65 0.18 250 / 0.22), transparent 60%)",
                  }}
                />

                <p className="relative text-[11px] uppercase tracking-[0.35em] opacity-55 mb-4">
                  {item.k}
                </p>
                <p className="relative text-[15px] md:text-base leading-relaxed opacity-85">
                  {item.v}
                </p>

                <span
                  aria-hidden
                  className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-[width] duration-700 ease-out bg-[oklch(0.65_0.18_250)]"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- CtaSection ---------- */

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const cta = caseStudy.cta as {
    h2: string;
    body: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    related: string;
  };

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      gsap.fromTo(
        "[data-cta-item]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <section
      ref={ref}
      className="relative bg-[oklch(0.10_0.015_250)] text-[oklch(0.97_0.005_80)] py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[560px] h-[560px] rounded-full pointer-events-none blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.6), transparent 65%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2
          data-cta-item
          className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight leading-[1.08] will-change-transform"
        >
          {cta.h2}
        </h2>
        <p
          data-cta-item
          className="mt-5 text-base md:text-lg opacity-75 will-change-transform"
        >
          {cta.body}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            data-cta-item
            href={cta.primary.href}
            className="group inline-flex items-center gap-2 rounded-full bg-[oklch(0.97_0.005_80)] px-7 py-3.5 text-sm font-medium text-[oklch(0.18_0.02_250)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {cta.primary.label}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            data-cta-item
            href={cta.secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            {cta.secondary.label}
          </a>
        </div>

        <p
          data-cta-item
          className="mt-10 text-xs uppercase tracking-[0.3em] opacity-50"
        >
          {cta.related}
        </p>
      </div>
    </section>
  );
}
