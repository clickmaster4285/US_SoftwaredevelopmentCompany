"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * TrustedPartnerSection
 * -----------------------------------------------------------------------
 * Palette aligned with IndustriesSection: oklch warm-neutral background,
 * var(--chart-1)/var(--chart-2) accent pair, color-mix blends for tints,
 * dot-grid + ambient glow texture. Signature element: a "Credential
 * Ledger" — certifications as verified line items with stroke-drawn
 * checkmarks and a one-time scan-line sweep on reveal.
 * -----------------------------------------------------------------------
 */

const CERTIFICATIONS = [
  {
    id: "CRD—01",
    code: "AWS",
    label: "AWS Certified",
    detail: "Solutions Architect · SysOps Administrator",
  },
  {
    id: "CRD—02",
    code: "AZ",
    label: "Azure Certified",
    detail: "Solutions Architect Expert",
  },
  {
    id: "CRD—03",
    code: "GCP",
    label: "GCP Certified",
    detail: "Professional Cloud Architect",
  },
];

const GUARANTEES = [
  {
    title: "Fully documented",
    detail:
      "Every decision, API, and architecture choice written down not locked in someone's head.",
  },
  {
    title: "Ironclad agreements",
    detail:
      "Clear contracts covering scope, timelines, and deliverables before a line of code ships.",
  },
  {
    title: "Full code ownership",
    detail:
      "You own every repository, credential, and asset the moment we hand over.",
  },
];

const INDUSTRIES = ["Healthcare", "Fintech", "Logistics", "E-commerce"];

// Same accent pair + rotation logic as IndustriesSection
const ACCENTS = ["var(--chart-2)", "var(--chart-1)"];

export default function TrustedPartnerSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-24 md:py-32 bg-[oklch(0.97_0.005_80)]"
    >
      <style>{`
        @keyframes tp-rise-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tp-chip-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tp-row-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tp-check-draw {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes tp-scan-sweep {
          0% { transform: translateY(-100%); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes tp-glow-drift {
          0%, 100% { transform: translate(-6%, -4%) scale(1); }
          50% { transform: translate(4%, 6%) scale(1.15); }
        }
        @keyframes tp-id-fade {
          from { opacity: 0; letter-spacing: 0.4em; }
          to { opacity: 1; letter-spacing: 0.15em; }
        }

        .tp-rise { animation: tp-rise-in 0.7s cubic-bezier(.22,1,.36,1) both; }
        .tp-chip { animation: tp-chip-in 0.5s cubic-bezier(.22,1,.36,1) both; }
        .tp-row { animation: tp-row-in 0.6s cubic-bezier(.22,1,.36,1) both; }
        .tp-check-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: tp-check-draw 0.5s cubic-bezier(.65,0,.35,1) forwards;
        }
        .tp-scan { animation: tp-scan-sweep 1.6s cubic-bezier(.4,0,.2,1) both; }
        .tp-glow { animation: tp-glow-drift 14s ease-in-out infinite; }
        .tp-id { animation: tp-id-fade 0.8s cubic-bezier(.22,1,.36,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .tp-rise, .tp-chip, .tp-row, .tp-check-path, .tp-scan, .tp-glow, .tp-id {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      {/* Ambient glow blobs — same two-tone pair as IndustriesSection */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: "var(--chart-2)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "var(--chart-1)" }}
        />
      </div>

      {/* Dot grid texture, matches IndustriesSection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* faint ledger-line texture, ties to "documented / on the record" theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* additional drifting glow behind the ledger card specifically */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full blur-3xl ${
          inView ? "tp-glow" : ""
        }`}
        style={{
          background: "radial-gradient(circle, var(--chart-1) 0%, transparent 70%)",
          opacity: 0.12,
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        {/* ---------------- Left column ---------------- */}
        <div>
          <div
            className={`mb-5 flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 ${
              inView ? "tp-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.05s" }}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: "var(--chart-1)" }}
            />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary-foreground">
              Why Clients Stay
            </span>
          </div>

          <h2
            className={`text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl ${
              inView ? "tp-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.12s" }}
          >
            Your <span className="font-serif font-normal italic">trusted</span>{" "}
            software development partner
          </h2>

          <div
            className={`mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base ${
              inView ? "tp-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              Clickmasters is a software development company USA clients turn
              to when they need more than just code they need a real
              partner. We work as a dependable software development agency,
              mixing solid engineering with smart planning and clear
              communication.
            </p>
            <p>
              We build software development solutions for healthcare,
              fintech, logistics, and e-commerce businesses across the United
              States.
            </p>
          </div>

          {/* Industry chips — alternating chart-1/chart-2 accent, like IndustriesSection rows */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {INDUSTRIES.map((industry, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <li
                  key={industry}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground ${
                    inView ? "tp-chip" : "opacity-0"
                  }`}
                  style={{
                    borderColor: "color-mix(in oklch, " + accent + " 35%, var(--border))",
                    backgroundColor: "color-mix(in oklch, " + accent + " 8%, transparent)",
                    animationDelay: inView ? `${0.35 + i * 0.08}s` : undefined,
                  }}
                >
                  {industry}
                </li>
              );
            })}
          </ul>

          {/* Guarantees checklist */}
          <ul className="mt-10 space-y-5 border-t border-border pt-8">
            {GUARANTEES.map((item, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <li
                  key={item.title}
                  className={`flex gap-4 ${inView ? "tp-rise" : "opacity-0"}`}
                  style={
                    inView ? { animationDelay: `${0.5 + i * 0.12}s` } : undefined
                  }
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: accent, color: accent }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6.2L4.8 9L10 3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength="1"
                        className={inView ? "tp-check-path" : ""}
                        style={
                          inView
                            ? { animationDelay: `${0.65 + i * 0.12}s` }
                            : { strokeDashoffset: 0 }
                        }
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ---------------- Right column: credential ledger ---------------- */}
        <div className="relative flex flex-col justify-center">
          <p
            className={`mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground ${
              inView ? "tp-rise" : "opacity-0"
            }`}
          >
            Engineering credentials on file
          </p>

          <div
            className={`relative overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm shadow-sm ${
              inView ? "tp-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            {/* scan-line sweep, plays once on reveal */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-x-0 top-0 h-16 ${
                inView ? "tp-scan" : "opacity-0"
              }`}
              style={{
                background:
                  "linear-gradient(180deg, transparent, color-mix(in oklch, var(--chart-2) 18%, transparent), transparent)",
                animationDelay: "0.5s",
              }}
            />

            {/* ledger header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Credential Ledger
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--chart-1)" }}
              >
                Verified
              </span>
            </div>

            {/* rows — accent alternates chart-2 / chart-1, matching IndustriesSection */}
            <ul>
              {CERTIFICATIONS.map((cert, i) => {
                const accent = ACCENTS[i % ACCENTS.length];
                const rowDelay = 0.3 + i * 0.14;
                return (
                  <li
                    key={cert.code}
                    className={`group flex items-center gap-4 px-6 py-5 ${
                      i !== CERTIFICATIONS.length - 1 ? "border-b border-border" : ""
                    } transition-colors duration-300 ${inView ? "tp-row" : "opacity-0"}`}
                    style={{
                      ...(inView ? { animationDelay: `${rowDelay}s` } : {}),
                      ["--row-accent" as string]: accent,
                    } as CSSProperties}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "color-mix(in oklch, " + accent + " 6%, transparent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <span
                      className={`shrink-0 font-mono text-[10px] tracking-[0.15em] text-muted-foreground ${
                        inView ? "tp-id" : "opacity-0"
                      }`}
                      style={inView ? { animationDelay: `${rowDelay + 0.08}s` } : undefined}
                    >
                      {cert.id}
                    </span>

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold tracking-tight"
                      style={{
                        backgroundColor: "color-mix(in oklch, " + accent + " 16%, var(--secondary))",
                        color: accent,
                      }}
                    >
                      {cert.code}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {cert.label}
                      </p>
                      <p className="mt-0.5 truncate text-xs leading-relaxed text-muted-foreground">
                        {cert.detail}
                      </p>
                    </div>

                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110"
                      style={{ borderColor: accent, color: accent }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6.2L4.8 9L10 3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          pathLength="1"
                          className={inView ? "tp-check-path" : ""}
                          style={
                            inView
                              ? { animationDelay: `${rowDelay + 0.25}s` }
                              : { strokeDashoffset: 0 }
                          }
                        />
                      </svg>
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* footer strip */}
            <div className="flex items-center gap-2 border-t border-border bg-secondary/40 px-6 py-3">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--chart-1)" }}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Renewed annually · audit trail available on request
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}