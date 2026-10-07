"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { caseStudies } from "@/content/case-studies";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type CaseStudyEntry = (typeof caseStudies)[keyof typeof caseStudies];

function getHeroText(study: CaseStudyEntry, key: string) {
  const value = study.hero[key];
  return typeof value === "string" ? value : "";
}

/* ------------------------------------------------------------------ */
/* Ambient background — same treatment as the detail pages             */
/* ------------------------------------------------------------------ */

function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      if (blobARef.current) {
        gsap.to(blobARef.current, {
          xPercent: 10,
          yPercent: -20,
          scale: 1.15,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
      if (blobBRef.current) {
        gsap.to(blobBRef.current, {
          xPercent: -14,
          yPercent: 12,
          scale: 1.1,
          duration: 28,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 bg-[oklch(0.97_0.005_80)] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.18 0.02 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.18 0.02 250) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 80%)",
        }}
      />

      <div
        ref={blobARef}
        className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full blur-[120px] opacity-60 will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, oklch(0.65 0.18 250 / 0.85), transparent 70%)",
        }}
      />

      <div
        ref={blobBRef}
        className="absolute -bottom-40 -right-40 w-[640px] h-[640px] rounded-full blur-[120px] opacity-45 will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, oklch(0.78 0.12 60 / 0.75), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small shared bits                                                   */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-5 flex items-center gap-3">
      <span className="inline-block w-8 h-px bg-current opacity-60" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Case study card                                                     */
/* ------------------------------------------------------------------ */

function CaseStudyCard({ study }: { study: CaseStudyEntry }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      gsap.set(ref.current, {
        transformPerspective: 1000,
        transformOrigin: "center bottom",
      });

      gsap.fromTo(
        ref.current,
        { y: 100, opacity: 0, rotateX: -18, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%" },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <Link
      ref={ref}
      href={`/case-studies/${study.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-[oklch(0.18_0.02_250)]/12 bg-white/70 backdrop-blur-sm p-7 md:p-8 overflow-hidden will-change-transform transition-transform duration-500 hover:-translate-y-2"
    >
      {/* hover glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, oklch(0.65 0.18 250 / 0.18), transparent 60%)",
        }}
      />

      {/* top meta row */}
      <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.25em] opacity-50 mb-6">
        <span>{getHeroText(study, "eyebrow")}</span>
        <span className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-[oklch(0.65_0.18_250)]" />
          {new Date(study.meta.updatedAt).getFullYear()}
        </span>
      </div>

      {/* title */}
      <h3 className="relative text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-3">
        {getHeroText(study, "h1")}
      </h3>

      {/* summary */}
      <p className="relative text-[15px] leading-relaxed opacity-75 mb-6">
        {getHeroText(study, "intro")}
      </p>

      {/* footer meta */}
      <div className="relative mt-auto flex items-center justify-between pt-5 border-t border-[oklch(0.18_0.02_250)]/10 text-[11px] uppercase tracking-[0.2em] opacity-50">
        <span>{study.meta.readingMinutes} min read</span>
        <span className="flex items-center gap-2 transition-opacity duration-300 group-hover:opacity-100">
          Read
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>

      {/* bottom accent sweep */}
      <span
        aria-hidden
        className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-[width] duration-700 ease-out bg-[oklch(0.65_0.18_250)]"
      />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CaseStudiesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      gsap.fromTo(
        heroRef.current!.querySelectorAll("[data-hero]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.15,
        },
      );
    },
    { scope: heroRef, dependencies: [] },
  );

  const published = Object.values(caseStudies).filter(
    (study) => study.meta.status !== "draft",
  );

  return (
    <main className="relative text-[oklch(0.18_0.02_250)] overflow-hidden min-h-screen">
      <AmbientBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* ── Hero ── */}
        <div ref={heroRef} className="max-w-3xl mb-20 md:mb-28">
          <p
            data-hero
            className="text-xs uppercase tracking-[0.4em] opacity-60 mb-5 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-current opacity-60" />
            Case Studies
          </p>

          <h1
            data-hero
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.02]"
          >
            Selected <span className="italic font-serif">work</span>
            <br />
            and the thinking behind it.
          </h1>

          <p
            data-hero
            className="mt-7 text-base md:text-lg opacity-70 max-w-xl leading-relaxed"
          >
            {published.length} {published.length === 1 ? "study" : "studies"} —
            QA engagements, AI experiments, and operational deep-dives. Each one
            is a working document, not a highlight reel.
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
        >
          {published.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>

        {/* ── Empty state ── */}
        {published.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[oklch(0.18_0.02_250)]/20 p-12 text-center opacity-60">
            <p className="text-sm uppercase tracking-[0.2em]">
              No case studies published yet.
            </p>
          </div>
        )}

        {/* ── Footer note ── */}
        <div className="mt-20 pt-8 border-t border-[oklch(0.18_0.02_250)]/10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] opacity-40">
          <span>
            {published.length}{" "}
            {published.length === 1 ? "case study" : "case studies"}
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-[oklch(0.65_0.18_250)]" />
            Updated {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
