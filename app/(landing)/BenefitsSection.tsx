"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from "react";

const BENEFITS = [
  {
    title: "Faster launches",
    detail:
      "Agile, sprint-based development means working software ships in weeks, not quarters.",
    rotate: -2,
    icon: (
      <path
        d="M12 2c2.8 2 4.5 5.2 4.5 8.7 0 2-.6 3.8-1.6 5.3l-2.9 3-2.9-3c-1-1.5-1.6-3.3-1.6-5.3C7.5 7.2 9.2 4 12 2Z M9.5 15.5 7 18l1 3.5L11 19 M14.5 15.5 17 18l-1 3.5L13 19"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Lower costs",
    detail:
      "Skip the overhead of hiring and managing an in-house team pay for output, not payroll.",
    rotate: 2,
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path
          d="M14.5 9.3c-.4-.7-1.3-1.2-2.5-1.2-1.6 0-2.7.9-2.7 2s1 1.6 2.7 2c1.7.4 2.7 1 2.7 2.1s-1.1 2-2.7 2c-1.2 0-2.1-.5-2.5-1.2M12 6.7v1.2M12 16.1v1.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    title: "Skilled experts",
    detail:
      "Direct access to specialists in AI, cloud architecture, mobile, and enterprise systems.",
    rotate: -1,
    icon: (
      <>
        <rect x="8" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path
          d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M6.5 17.5l1.4-1.4M16.1 7.9l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Flexible plans",
    detail: "Scale from a single developer to a full team as your roadmap changes.",
    rotate: 2,
    icon: (
      <>
        <path d="M4.5 8h15M4.5 8a2 2 0 1 1 0-.01M8.5 8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M4.5 16h15M15.5 16a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    title: "Strong security",
    detail: "Security reviews and best practices are built into every sprint, not bolted on at the end.",
    rotate: -2,
    icon: (
      <path
        d="M12 3.5 5.5 6v5.3c0 4.1 2.7 7.3 6.5 8.7 3.8-1.4 6.5-4.6 6.5-8.7V6L12 3.5Z M9.3 12.2l1.9 1.9 3.5-3.9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Weekly updates",
    detail: "Clear, weekly check-ins so you always know exactly where your project stands.",
    rotate: 1,
    icon: (
      <>
        <rect x="4.5" y="5.5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M4.5 9.5h15M8 3.5v3M16 3.5v3M8.3 13.3h2M13.7 13.3h2M8.3 16.3h2M13.7 16.3h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Ongoing support",
    detail: "We stay on after launch to keep your software running smoothly.",
    rotate: -1,
    icon: (
      <>
        <path d="M4.5 13v-1a7.5 7.5 0 1 1 15 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <rect x="3.5" y="13" width="3.5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <rect x="17" y="13" width="3.5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M17 18v.5a3 3 0 0 1-3 3h-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
  },
];

const ACCENTS = ["var(--chart-2)", "var(--chart-1)"];

function BenefitCard({
  benefit,
  index,
  inView,
}: {
  benefit: (typeof BENEFITS)[number];
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accent = ACCENTS[index % ACCENTS.length];

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--tilt-x", `${(0.5 - py) * 6}deg`);
    el.style.setProperty("--tilt-y", `${(px - 0.5) * 8}deg`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", `0deg`);
    el.style.setProperty("--tilt-y", `0deg`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bn-card group relative overflow-hidden rounded-2xl border border-border bg-card p-6 ${
        inView ? "bn-pop" : "opacity-0"
      } ${index === 6 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
      style={
        {
          "--card-rotate": `${benefit.rotate}deg`,
          "--accent": accent,
          animationDelay: inView ? `${0.15 + index * 0.09}s` : undefined,
        } as CSSProperties
      }
    >
      <span aria-hidden="true" className="bn-ring pointer-events-none absolute inset-0 rounded-2xl" />
      <span aria-hidden="true" className="bn-ring-mask pointer-events-none absolute inset-[1px] rounded-2xl bg-card" />
      <span aria-hidden="true" className="bn-spotlight pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div
        className="bn-tilt relative"
        style={{
          transform: "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
        }}
      >
        <div className="mb-5 flex items-center justify-between">
          <div
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl"
            style={{
              background:
                "linear-gradient(155deg, color-mix(in oklch, var(--accent) 16%, var(--secondary)), var(--secondary))",
            }}
          >
            <svg viewBox="0 0 24 24" className="relative z-10 h-5 w-5" style={{ color: "var(--accent)" }}>
              {benefit.icon}
            </svg>
            <span
              aria-hidden="true"
              className="bn-shine pointer-events-none absolute inset-0 w-1/2"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in oklch, var(--accent) 35%, transparent), transparent)",
              }}
            />
            <span
              aria-hidden="true"
              className="bn-icon-pulse pointer-events-none absolute -inset-2 rounded-full blur-lg"
              style={{ background: "var(--accent)" }}
            />
          </div>

          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
            </span>
            Active
          </span>
        </div>

        <h3 className="text-base font-bold text-foreground md:text-lg">{benefit.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.detail}</p>

        <div className="mt-5 h-px w-full overflow-hidden rounded-full bg-border">
          <div
            className="bn-boot h-full rounded-full"
            style={{
              background: "var(--accent)",
              animationDelay: inView ? `${0.35 + index * 0.09}s` : undefined,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-6 py-24 md:py-32">
      <style>{`
        @keyframes bn-rise-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bn-card-pop {
          0% { opacity: 0; transform: translateY(30px) scale(0.82) rotate(var(--card-rotate)); }
          55% { opacity: 1; transform: translateY(-4px) scale(1.045) rotate(var(--card-rotate)); }
          78% { transform: translateY(2px) scale(0.985) rotate(var(--card-rotate)); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(var(--card-rotate)); }
        }
        @keyframes bn-typing {
          from { width: 0; }
          to { width: 25ch; }
        }
        @keyframes bn-caret {
          50% { border-color: transparent; }
        }
        @keyframes bn-drift-a {
          0%, 100% { transform: translate(-6%, -4%) scale(1); }
          50% { transform: translate(4%, 6%) scale(1.15); }
        }
        @keyframes bn-drift-b {
          0%, 100% { transform: translate(6%, 4%) scale(1.1); }
          50% { transform: translate(-4%, -6%) scale(0.95); }
        }
        @keyframes bn-ring-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes bn-boot-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes bn-icon-pulse {
          0%, 100% { opacity: 0.12; transform: scale(0.9); }
          50% { opacity: 0.28; transform: scale(1.08); }
        }

        .bn-rise { animation: bn-rise-in 0.7s cubic-bezier(.22,1,.36,1) both; }
        .bn-pop { animation: bn-card-pop 0.75s cubic-bezier(.24,1.5,.5,1) both; }
        .bn-type {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          border-right: 2px solid var(--chart-2);
          width: 25ch;
          animation: bn-typing 1.1s steps(25, end) both,
            bn-caret 0.75s step-end infinite 1.1s;
        }

        .bn-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(64px);
          opacity: 0.16;
          will-change: transform;
        }
        .bn-blob-a {
          top: -10%;
          left: -8%;
          width: 42vw;
          height: 42vw;
          background: var(--chart-2);
          animation: bn-drift-a 22s ease-in-out infinite;
        }
        .bn-blob-b {
          bottom: -14%;
          right: -8%;
          width: 38vw;
          height: 38vw;
          background: var(--chart-1);
          animation: bn-drift-b 26s ease-in-out infinite;
        }

        .bn-card {
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease, border-color 0.35s ease;
          transform-style: preserve-3d;
          perspective: 800px;
        }
        .bn-card:hover {
          border-color: color-mix(in oklch, var(--accent) 45%, var(--border));
          box-shadow: 0 18px 40px -18px color-mix(in oklch, var(--accent) 35%, transparent);
          transform: translateY(-6px);
        }
        .bn-tilt {
          transition: transform 0.2s ease-out;
          transform-style: preserve-3d;
        }

        .bn-ring {
          background: conic-gradient(from 0deg, transparent 0%, var(--accent) 12%, transparent 24%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .bn-card:hover .bn-ring {
          opacity: 1;
          animation: bn-ring-spin 3.5s linear infinite;
        }

        .bn-spotlight {
          background: radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklch, var(--accent) 14%, transparent), transparent 70%);
        }

        .bn-shine {
          transform: translateX(-160%) skewX(-12deg);
          transition: transform 0.6s ease;
        }
        .bn-card:hover .bn-shine {
          transform: translateX(160%) skewX(-12deg);
        }

        .bn-icon-pulse {
          animation: bn-icon-pulse 3.2s ease-in-out infinite;
        }

        .bn-boot {
          width: 0%;
          animation: bn-boot-fill 1s cubic-bezier(.22,1,.36,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .bn-rise, .bn-pop, .bn-type, .bn-boot, .bn-icon-pulse { animation: none !important; opacity: 1 !important; transform: none !important; width: 100% !important; border-right: none !important; }
          .bn-blob-a, .bn-blob-b { animation: none !important; }
          .bn-card, .bn-tilt { transition: none !important; }
          .bn-card:hover { transform: none !important; }
          .bn-ring { display: none !important; }
        }
      `}</style>

      {/* ambient drifting glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="bn-blob bn-blob-a" />
        <span className="bn-blob bn-blob-b" />
      </div>

      {/* faint dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <div
            className={`mb-5 flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 ${
              inView ? "bn-rise" : "opacity-0"
            }`}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full"
              style={{ backgroundColor: "var(--chart-2)" }}
            />
            <span className="font-mono text-[11px] tracking-[0.08em] text-secondary-foreground">
              {inView ? (
                <span className="bn-type">SYSTEM STATUS: ALL ACTIVE</span>
              ) : (
                <span className="opacity-0">SYSTEM STATUS: ALL ACTIVE</span>
              )}
            </span>
          </div>

          {/* Professional Bold Title - 2 lines matching first section style */}
          <h2
            className={`max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.05] text-foreground ${
              inView ? "bn-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="font-serif italic">Why</span> choose our 
            <br />
            software development <span className="font-serif italic">company</span>
          </h2>

          <p
            className={`mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base ${
              inView ? "bn-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.18s" }}
          >
            When you work with Clickmasters, your business gets a real
            advantage end to end.
          </p>
        </div>

        {/* Benefit tiles */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}