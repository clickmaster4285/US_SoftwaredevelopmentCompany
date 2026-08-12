"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * TrustedPartnerSection
 * -----------------------------------------------------------------------
 * Signature element: certification "medallions" circular badges that
 * pop in with a shockwave-ring + elastic scale/rotate impact as the
 * section scrolls into view, then settle into a slow idle float.
 * -----------------------------------------------------------------------
 */

const CERTIFICATIONS = [
  {
    code: "AWS",
    label: "AWS CERTIFIED",
    detail: "Solutions Architect · SysOps Administrator",
    rotate: -18,
  },
  {
    code: "AZ",
    label: "AZURE CERTIFIED",
    detail: "Solutions Architect Expert",
    rotate: 14,
  },
  {
    code: "GCP",
    label: "GCP CERTIFIED",
    detail: "Professional Cloud Architect",
    rotate: -10,
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
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      <style>{`
        @keyframes tp-rise-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tp-chip-in {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes tp-pop-in {
          0% { opacity: 0; transform: scale(0.15) rotate(var(--pop-rotate)); }
          55% { opacity: 1; transform: scale(1.22) rotate(calc(var(--pop-rotate) * -0.35)); }
          75% { transform: scale(0.92) rotate(calc(var(--pop-rotate) * 0.18)); }
          90% { transform: scale(1.04) rotate(calc(var(--pop-rotate) * -0.06)); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes tp-shockwave {
          0% { opacity: 0.75; transform: scale(0.4); border-width: 3px; }
          100% { opacity: 0; transform: scale(2.4); border-width: 0px; }
        }
        @keyframes tp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .tp-rise { animation: tp-rise-in 0.7s cubic-bezier(.22,1,.36,1) both; }
        .tp-chip { animation: tp-chip-in 0.5s cubic-bezier(.22,1,.36,1) both; }
        .tp-pop { animation: tp-pop-in 0.9s cubic-bezier(.34,1.56,.64,1) both; }
        .tp-shockwave { animation: tp-shockwave 0.9s cubic-bezier(.16,1,.3,1) both; }
        .tp-float { animation: tp-float 3.2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .tp-rise, .tp-chip, .tp-pop, .tp-shockwave, .tp-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* faint ledger-line texture, ties to "documented / on the record" theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        {/* ---------------- Left column ---------------- */}
        <div>
          <div
            className={inView ? "tp-rise" : "opacity-0"}
            style={{ animationDelay: "0.05s" }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-border" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Why Clients Stay
              </span>
            </div>
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

          {/* Industry chips */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {INDUSTRIES.map((industry, i) => (
              <li
                key={industry}
                className={`rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground ${
                  inView ? "tp-chip" : "opacity-0"
                }`}
                style={
                  inView ? { animationDelay: `${0.35 + i * 0.08}s` } : undefined
                }
              >
                {industry}
              </li>
            ))}
          </ul>

          {/* Guarantees checklist */}
          <ul className="mt-10 space-y-5 border-t border-border pt-8">
            {GUARANTEES.map((item, i) => (
              <li
                key={item.title}
                className={`flex gap-4 ${inView ? "tp-rise" : "opacity-0"}`}
                style={
                  inView ? { animationDelay: `${0.5 + i * 0.12}s` } : undefined
                }
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                  style={{ borderColor: "var(--chart-1)", color: "var(--chart-1)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6.2L4.8 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
            ))}
          </ul>
        </div>

        {/* ---------------- Right column: certification medallions ---------------- */}
        <div className="relative flex flex-col justify-center">
          <p
            className={`mb-8 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-left ${
              inView ? "tp-rise" : "opacity-0"
            }`}
          >
            Engineering credentials on file
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {CERTIFICATIONS.map((cert, i) => {
              const offsetClass =
                i % 2 === 1 ? "md:-translate-y-5" : "md:translate-y-5";
              const popDelay = 0.15 + i * 0.2;
              const floatDelay = popDelay + 0.95;

              return (
                <div
                  key={cert.code}
                  className={`group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 ${offsetClass}`}
                >
                  <div
                    className={`relative ${inView ? "tp-pop" : "opacity-0"}`}
                    style={
                      {
                        "--pop-rotate": `${cert.rotate}deg`,
                        animationDelay: inView ? `${popDelay}s` : undefined,
                      } as CSSProperties
                    }
                  >
                    {/* shockwave ring */}
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-full border-2 ${
                        inView ? "tp-shockwave" : "opacity-0"
                      }`}
                      style={{
                        borderColor: "var(--chart-1)",
                        animationDelay: inView ? `${popDelay}s` : undefined,
                      }}
                    />

                    {/* gradient ring + medallion */}
                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-full p-[3px] shadow-lg md:h-28 md:w-28 ${
                        inView ? "tp-float" : ""
                      }`}
                      style={{
                        background:
                          "conic-gradient(from 180deg, var(--chart-1), var(--chart-5), var(--chart-1))",
                        animationDelay: inView ? `${floatDelay}s` : undefined,
                      }}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-card transition-transform duration-300 group-hover:scale-95">
                        <span
                          className="font-mono text-base font-black tracking-tight md:text-lg"
                          style={{ color: "var(--chart-1)" }}
                        >
                          {cert.code}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    className="mt-4 font-mono text-[10px] font-bold uppercase leading-tight tracking-[0.12em] md:text-[11px]"
                    style={{ color: "var(--chart-1)" }}
                  >
                    {cert.label}
                  </p>
                  <p className="mt-1 max-w-[8.5rem] text-[11px] leading-snug text-muted-foreground md:text-xs">
                    {cert.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}