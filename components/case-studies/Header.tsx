"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ------------------------------------------------------------------ */
/* Shared hero stats (consumed by HeroSection)                        */
/* ------------------------------------------------------------------ */
const heroStats = [
  {
    value: "20+",
    label: "Test charters",
    note: "TEST-001 to TEST-020, each traced to a line in the brief",
  },
  {
    value: "16–22h",
    label: "Launch-critical estimate",
    note: "32 to 46 hours for full coverage, retest included",
  },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export function HeroSection({
  hero,
}: {
  hero: {
    eyebrow: string;
    h1: string;
    subtitle?: string;
    byline?: string;
    intro: string;
    // fields passed by CaseStudyPage that HeroSection doesn't render
    disclaimer?: string;
    atAGlance?: { label: string; value: string }[];
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) {
        gsap.set("[data-hero-word], [data-hero-meta], [data-hero-form]", {
          opacity: 1,
          y: 0,
          rotate: 0,
        });
        return;
      }

      gsap.fromTo(
        "[data-hero-word]",
        { y: 80, opacity: 0, rotate: 4 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: {
            id: "hero-words",
            trigger: headRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        "[data-hero-meta]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.2,
        },
      );

      gsap.fromTo(
        "[data-hero-form]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.35,
          scrollTrigger: {
            id: "hero-form",
            trigger: formRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.to(blobRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          id: "hero-blob",
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: wrapRef, dependencies: [] },
  );

  const words = hero.h1.split(" ");

  return (
    <section
      ref={wrapRef}
      className="relative py-28 md:py-36 overflow-hidden bg-[oklch(0.13_0.015_250)] text-[oklch(0.97_0.005_80)]"
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
        className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.55), transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT: text */}
          <div ref={headRef} className="max-w-xl">
            <p
              data-hero-meta
              className="text-xs uppercase tracking-[0.4em] opacity-60 mb-5 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-current opacity-60" />
              {hero.eyebrow}
            </p>

            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
              {words.map((w, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <span
                    data-hero-word
                    className="inline-block will-change-transform"
                  >
                    {w}
                    {i < words.length - 1 ? "\u00A0" : ""}
                  </span>
                </span>
              ))}
            </h1>

            {hero.subtitle && (
              <p
                data-hero-meta
                className="mt-5 text-base md:text-lg opacity-75"
              >
                {hero.subtitle}
              </p>
            )}

            {hero.byline && (
              <p data-hero-meta className="mt-4 text-sm opacity-50">
                {hero.byline}
              </p>
            )}

            <p data-hero-meta className="mt-7 text-base md:text-lg opacity-80">
              {hero.intro}
            </p>

            {/* Stats */}
            <dl
              data-hero-meta
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[oklch(0.97_0.005_80)]/12 pt-8"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] uppercase tracking-[0.3em] opacity-50 mb-2">
                    {stat.label}
                  </dt>
                  <dd>
                    <span className="block text-2xl md:text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs opacity-55 leading-relaxed">
                      {stat.note}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT: contact form */}
          <div ref={formRef} data-hero-form className="w-full lg:pt-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ContactForm — unchanged                                             */
/* ------------------------------------------------------------------ */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-2xl border border-[oklch(0.97_0.005_80)]/12 bg-[oklch(0.17_0.02_250)]/60 backdrop-blur p-7 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight">
        Book a free QA scoping call
      </h2>
      <p className="mt-2 text-sm opacity-65">
        Tell us about your platform. We will reply with scoping questions and a
        written estimate.
      </p>

      {sent ? (
        <p className="mt-6 text-sm opacity-80">
          Thanks — we&apos;ll be in touch within one working day.
        </p>
      ) : (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.25em] opacity-55">
                Name
              </span>
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                className="mt-2 w-full rounded-lg border border-[oklch(0.97_0.005_80)]/15 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[oklch(0.97_0.005_80)]/40"
              />
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.25em] opacity-55">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-[oklch(0.97_0.005_80)]/15 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[oklch(0.97_0.005_80)]/40"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.25em] opacity-55">
              Company
            </span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              className="mt-2 w-full rounded-lg border border-[oklch(0.97_0.005_80)]/15 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[oklch(0.97_0.005_80)]/40"
            />
          </label>

          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.25em] opacity-55">
              About your platform
            </span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Multi-tenant booking platform, deposits via Mollie, three plan tiers…"
              className="mt-2 w-full resize-none rounded-lg border border-[oklch(0.97_0.005_80)]/15 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:opacity-40 focus:border-[oklch(0.97_0.005_80)]/40"
            />
          </label>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[oklch(0.97_0.005_80)] px-7 py-3.5 text-sm font-medium text-[oklch(0.13_0.015_250)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request a scoping call
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>

          <p className="text-[11px] opacity-40 leading-relaxed">
            We reply within one working day. No marketing emails.
          </p>
        </form>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AtAGlanceSection — unchanged                                        */
/* ------------------------------------------------------------------ */
export function AtAGlanceSection({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string }[];
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDListElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set("[data-glance-row], [data-glance-head]", { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        "[data-glance-head]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            id: "glance-head",
            trigger: headRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        "[data-glance-row]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            id: "glance-rows",
            trigger: listRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.to(blobRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          id: "glance-blob",
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: wrapRef, dependencies: [] },
  );

  return (
    <section
      ref={wrapRef}
      className="relative bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.18 0.02 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.18 0.02 250) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
      />

      <div
        ref={blobRef}
        aria-hidden
        className="absolute -top-32 -left-40 w-[640px] h-[640px] rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.55), transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div ref={headRef} className="max-w-3xl mb-14 md:mb-16">
          <p
            data-glance-head
            className="text-xs uppercase tracking-[0.4em] opacity-60 mb-5 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-current opacity-60" />
            {title}
          </p>
          <h2
            data-glance-head
            className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.05]"
          >
            The <span className="italic font-serif">brief</span> at a glance
          </h2>
          <p
            data-glance-head
            className="mt-6 text-base md:text-lg opacity-70 max-w-xl"
          >
            Platform, users, payments, plans and effort the whole engagement
            summarised in one view.
          </p>
        </div>

        <dl
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {rows.map((row) => (
            <div
              key={row.label}
              data-glance-row
              className="group relative rounded-2xl border border-[oklch(0.18_0.02_250)]/12 bg-white/70 backdrop-blur-sm p-6 md:p-7 overflow-hidden will-change-transform transition-transform duration-500 hover:-translate-y-2"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, oklch(0.65 0.18 250 / 0.14), transparent 60%)",
                }}
              />

              <dt className="relative text-[11px] uppercase tracking-[0.35em] opacity-50 mb-3">
                {row.label}
              </dt>
              <dd className="relative text-sm md:text-[15px] leading-relaxed opacity-85">
                {row.value}
              </dd>

              <span
                aria-hidden
                className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-[width] duration-700 ease-out bg-[oklch(0.65_0.18_250)]"
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
