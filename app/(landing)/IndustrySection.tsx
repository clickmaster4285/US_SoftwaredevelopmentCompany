"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type Industry = {
  code: string;
  title: string;
  chips: string[];
};

const INDUSTRIES: Industry[] = [
  {
    code: "HLTH",
    title: "Healthcare & HealthTech",
    chips: ["Patient portals", "Telehealth apps", "Secure health platforms"],
  },
  {
    code: "FTC",
    title: "Fintech & Banking",
    chips: ["Payment systems", "Lending platforms", "Compliance tools"],
  },
  {
    code: "RTL",
    title: "E-commerce & Retail",
    chips: ["Online stores", "Inventory systems", "Personalized shopping"],
  },
  {
    code: "LOG",
    title: "Logistics & Supply Chain",
    chips: ["Real-time tracking", "Route planning", "Warehouse tools"],
  },
  {
    code: "PROP",
    title: "Real Estate & PropTech",
    chips: ["Property listings", "CRM tools", "Virtual tours"],
  },
  {
    code: "EDU",
    title: "Education & EdTech",
    chips: ["Learning platforms", "Virtual classrooms", "Testing tools"],
  },
  {
    code: "MFG",
    title: "Manufacturing",
    chips: ["Smart monitoring", "Maintenance alerts", "ERP systems"],
  },
  {
    code: "SAAS",
    title: "Professional Services & SaaS",
    chips: ["Internal tools", "Client portals", "SaaS products"],
  },
];

const ICONS: Record<string, React.ReactNode> = {
  HLTH: (
    <>
      <path d="M12 20.5S4.5 16 4.5 10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.9c0 5.8-7.5 10.3-7.5 10.3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M8.5 12h1.8l1-2 1.4 4 1-2H15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  FTC: (
    <>
      <rect x="3.5" y="6.5" width="17" height="11.5" rx="1.8" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M3.5 10.2h17" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 14.2h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  RTL: (
    <>
      <path d="M6 8.5V7a3 3 0 1 1 6 0v1.5M6 8.5h9l.8 10.2a1.8 1.8 0 0 1-1.8 1.8H7a1.8 1.8 0 0 1-1.8-1.8L6 8.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </>
  ),
  LOG: (
    <>
      <path d="M3.5 8h9v8h-9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M12.5 11h3.3L19 13.6V16h-6.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <circle cx="7" cy="17.3" r="1.6" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="16" cy="17.3" r="1.6" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </>
  ),
  PROP: (
    <>
      <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6 10.5V19a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-8.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </>
  ),
  EDU: (
    <>
      <path d="M2.5 9 12 5l9.5 4-9.5 4-9.5-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M6.5 11v4.2c0 1 2.5 2.3 5.5 2.3s5.5-1.3 5.5-2.3V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M21 10v5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  MFG: (
    <path
      d="M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Z M19.3 12a7.2 7.2 0 0 0-.1-1.3l1.9-1.5-1.5-2.6-2.3.7a7.3 7.3 0 0 0-2.2-1.3L14.7 4h-3l-.4 2a7.3 7.3 0 0 0-2.2 1.3l-2.3-.7-1.5 2.6 1.9 1.5a7.2 7.2 0 0 0 0 2.6l-1.9 1.5 1.5 2.6 2.3-.7c.65.55 1.4.99 2.2 1.3l.4 2h3l.4-2c.8-.31 1.55-.75 2.2-1.3l2.3.7 1.5-2.6-1.9-1.5c.07-.43.1-.86.1-1.3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  SAAS: (
    <>
      <path d="M12 4 3.5 8.3 12 12.6l8.5-4.3L12 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M3.5 12.3 12 16.6l8.5-4.3M3.5 16.3 12 20.6l8.5-4.3" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </>
  ),
};

const ACCENTS = ["var(--chart-2)", "var(--chart-1)"];
const SCRAMBLE_CHARS = "01#%&$XZQKJ";

function scrambledFrame(target: string, progress: number) {
  // progress: 0..1, how much of the string (left to right) is resolved
  const resolveCount = Math.floor(target.length * progress);
  return target
    .split("")
    .map((ch, i) => {
      if (i < resolveCount) return ch;
      if (ch === " ") return " ";
      return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    })
    .join("");
}

function SectorCode({ code, trigger }: { code: string; trigger: number }) {
  const [display, setDisplay] = useState(code);

  useEffect(() => {
    if (trigger === 0) return; // don't scramble on initial idle state
    let frame = 0;
    const totalFrames = 7;
    const id = setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      if (progress >= 1) {
        setDisplay(code);
        clearInterval(id);
      } else {
        setDisplay(scrambledFrame(code, progress));
      }
    }, 35);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return <span className="ind-code">{display}</span>;
}

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [inView, setInView] = useState(false);
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dotTop, setDotTop] = useState<number | null>(null);
  const [scrambleTrigger, setScrambleTrigger] = useState<number[]>(
    () => INDUSTRIES.map(() => 0)
  );

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Boot-decode every row's code once the section scrolls into view.
  useEffect(() => {
    if (!inView) return;
    INDUSTRIES.forEach((_, i) => {
      window.setTimeout(() => {
        setScrambleTrigger((prev) => {
          const next = [...prev];
          next[i] = next[i] + 1;
          return next;
        });
      }, 300 + i * 110);
    });
  }, [inView]);

  const bumpScramble = (i: number) => {
    setScrambleTrigger((prev) => {
      const next = [...prev];
      next[i] = next[i] + 1;
      return next;
    });
  };

  const moveDotTo = (i: number) => {
    const row = rowRefs.current[i];
    const list = listRef.current;
    if (!row || !list) return;
    const rowRect = row.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    setDotTop(rowRect.top - listRect.top + rowRect.height / 2);
    setActiveIndex(i);
  };

  const handleEnter = (i: number) => {
    moveDotTo(i);
    bumpScramble(i);
  };

  const handleLeave = (i: number) => {
    if (openSet.size === 0) {
      setActiveIndex(null);
      return;
    }
    // fall back to the most recently opened row, if any
    const remaining = [...openSet];
    const fallback = remaining[remaining.length - 1];
    if (fallback !== undefined) moveDotTo(fallback);
  };

  const toggleRow = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    moveDotTo(i);
    bumpScramble(i);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-6 py-24 md:py-32 bg-[oklch(0.97_0.005_80)]">
      <style>{`
        @keyframes ind-rise-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ind-row-print {
          from { opacity: 0; transform: translateX(-14px); clip-path: inset(0 100% 0 0); }
          60% { clip-path: inset(0 0% 0 0); }
          to { opacity: 1; transform: translateX(0); clip-path: inset(0 0% 0 0); }
        }
        @keyframes ind-beam-drift {
          0% { top: -10%; opacity: 0; }
          8% { opacity: 0.5; }
          92% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes ind-dot-pulse {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklch, var(--active-accent, var(--chart-2)) 55%, transparent); }
          50% { box-shadow: 0 0 0 6px color-mix(in oklch, var(--active-accent, var(--chart-2)) 0%, transparent); }
        }
        @keyframes ind-chip-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ind-rise { animation: ind-rise-in 0.7s cubic-bezier(.22,1,.36,1) both; }
        .ind-row-anim { animation: ind-row-print 0.6s cubic-bezier(.22,1,.36,1) both; }

        .ind-beam {
          position: absolute;
          left: 0;
          right: 0;
          height: 22%;
          background: linear-gradient(180deg, transparent, color-mix(in oklch, var(--chart-2) 10%, transparent) 45%, color-mix(in oklch, var(--chart-1) 8%, transparent) 55%, transparent);
          animation: ind-beam-drift 9s ease-in-out infinite;
          pointer-events: none;
        }

        .ind-code {
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.04em;
        }

        .ind-row {
          cursor: pointer;
          transition: background-color 0.3s ease, border-color 0.3s ease;
          border-color: var(--border);
        }
        .ind-row:hover,
        .ind-row.is-open {
          background-color: color-mix(in oklch, var(--row-accent) 6%, transparent);
        }
        .ind-row:focus-visible {
          outline: 2px solid var(--row-accent);
          outline-offset: -2px;
        }

        .ind-chevron {
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), color 0.3s ease;
        }
        .ind-row.is-open .ind-chevron {
          transform: rotate(180deg);
          color: var(--row-accent);
        }

        .ind-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(.22,1,.36,1);
        }
        .ind-row.is-open .ind-panel {
          grid-template-rows: 1fr;
        }
        .ind-panel-inner {
          overflow: hidden;
        }

        .ind-chip {
          animation: ind-chip-in 0.4s cubic-bezier(.22,1,.36,1) both;
        }

        .ind-icon-wrap {
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        .ind-row:hover .ind-icon-wrap,
        .ind-row.is-open .ind-icon-wrap {
          transform: scale(1.06);
        }

        .ind-dot {
          animation: ind-dot-pulse 1.8s ease-in-out infinite;
        }

        .ind-corner {
          position: absolute;
          width: 22px;
          height: 22px;
          border-color: var(--border);
          opacity: 0.7;
        }

        @media (prefers-reduced-motion: reduce) {
          .ind-rise, .ind-row-anim, .ind-chip { animation: none !important; opacity: 1 !important; transform: none !important; clip-path: none !important; }
          .ind-beam { animation: none !important; opacity: 0.15 !important; }
          .ind-dot { animation: none !important; }
          .ind-chevron, .ind-panel, .ind-icon-wrap, .ind-row { transition: none !important; }
        }
      `}</style>

      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
      >
        <div
          className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: "var(--chart-2)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "var(--chart-1)" }}
        />
      </div>

      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* faint scanline texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(180deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 5px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-16">
          <div className={`mb-5 flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 ${inView ? "ind-rise" : "opacity-0"}`}>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--chart-1)" }} />
            <span className="font-mono text-[11px] tracking-[0.08em] text-secondary-foreground">
              SECTOR MANIFEST · 8 ENTRIES
            </span>
          </div>

          <h2 className={`max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.05] text-foreground ${inView ? "ind-rise" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Industries{" "}
            <span className="font-serif font-normal italic text-foreground/90">we</span> serve
          </h2>

          <p className={`mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base ${inView ? "ind-rise" : "opacity-0"}`} style={{ animationDelay: "0.18s" }}>
            Clickmasters builds software across eight sectors.
          </p>
        </div>

        {/* Manifest list */}
        <div className={`relative ${inView ? "ind-rise" : "opacity-0"}`} style={{ animationDelay: "0.24s" }}>
          {/* blueprint corner brackets */}
          <span aria-hidden="true" className="ind-corner -left-2 -top-2 border-l-2 border-t-2 rounded-tl-md" />
          <span aria-hidden="true" className="ind-corner -right-2 -top-2 border-r-2 border-t-2 rounded-tr-md" />
          <span aria-hidden="true" className="ind-corner -left-2 -bottom-2 border-l-2 border-b-2 rounded-bl-md" />
          <span aria-hidden="true" className="ind-corner -right-2 -bottom-2 border-r-2 border-b-2 rounded-br-md" />

          <div
            ref={listRef}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm"
            onMouseLeave={() => handleLeave(-1)}
          >
            {/* ambient scanning beam */}
            <div aria-hidden="true" className="ind-beam" />

            {/* tracking spine + dot (desktop only, needs measured positions) */}
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-10 sm:block">
              <div className="absolute bottom-4 left-5 top-4 w-px bg-border" />
              {dotTop !== null && activeIndex !== null && (
                <div
                  className="ind-dot absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[top] duration-300 ease-out"
                  style={{
                    left: "20px",
                    top: dotTop,
                    backgroundColor: ACCENTS[activeIndex % ACCENTS.length],
                    ["--active-accent" as string]: ACCENTS[activeIndex % ACCENTS.length],
                  }}
                />
              )}
            </div>

            {INDUSTRIES.map((industry, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              const isOpen = openSet.has(i);
              return (
                <div
                  key={industry.code}
                  ref={(el) => {
                    rowRefs.current[i] = el;
                  }}
                  className={`ind-row ${isOpen ? "is-open" : ""} ${inView ? "ind-row-anim" : "opacity-0"} ${i !== 0 ? "border-t border-border" : ""}`}
                  style={
                    {
                      "--row-accent": accent,
                      animationDelay: inView ? `${0.3 + i * 0.07}s` : undefined,
                    } as CSSProperties
                  }
                  onMouseEnter={() => handleEnter(i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleRow(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleRow(i);
                    }
                  }}
                >
                  <div className="flex items-center gap-4 px-5 py-4 pl-5 sm:pl-14 sm:pr-6 md:px-6 md:py-5 md:pl-16">
                    <span
                      className="ind-icon-wrap flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: "color-mix(in oklch, var(--row-accent) 16%, var(--secondary))",
                        color: accent,
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5">
                        {ICONS[industry.code]}
                      </svg>
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                        <span
                          className="font-mono text-[11px] font-semibold tracking-[0.08em]"
                          style={{ color: accent }}
                        >
                          <SectorCode code={industry.code} trigger={scrambleTrigger[i]} />
                        </span>
                        <h3 className="text-base font-bold text-foreground md:text-lg">
                          {industry.title}
                        </h3>
                      </div>
                    </div>

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="ind-chevron h-4 w-4 shrink-0 text-muted-foreground"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  <div className="ind-panel px-5 sm:pl-14 sm:pr-6 md:px-6 md:pl-16">
                    <div className="ind-panel-inner">
                      <div className="flex flex-wrap gap-2 pb-5 pt-1">
                        {industry.chips.map((chip, ci) => (
                          <span
                            key={chip}
                            className="ind-chip rounded-full border px-3 py-1 text-xs font-medium text-foreground"
                            style={{
                              borderColor: "color-mix(in oklch, var(--row-accent) 35%, var(--border))",
                              backgroundColor: "color-mix(in oklch, var(--row-accent) 8%, transparent)",
                              animationDelay: isOpen ? `${ci * 0.06}s` : undefined,
                            }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}