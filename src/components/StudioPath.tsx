import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Three stacked software-house sections before the SpaceJourney CTA:
 *  1) Capabilities — what we build
 *  2) Tech stack — marquee of tools
 *  3) Animated Path — SVG path the user "walks" while scrolling, with milestones
 */
export default function StudioPath() {
  return (
    <>
      <CapabilitiesSection />
      <TechStackSection />
      <ProcessPathSection />
    </>
  );
}

/* ---------------- 1. Capabilities ---------------- */

const CAPS = [
  { n: "01", title: "Web Platforms", desc: "Marketing sites, SaaS dashboards and content systems engineered for speed and SEO.", icon: "◐", accent: "oklch(0.55 0.18 250)" },
  { n: "02", title: "Mobile Apps", desc: "iOS, Android and cross-platform apps built with React Native and native modules.", icon: "▲", accent: "oklch(0.62 0.18 30)" },
  { n: "03", title: "AI Integrations", desc: "LLM features, RAG pipelines and intelligent automations wired into your product.", icon: "✦", accent: "oklch(0.65 0.18 160)" },
  { n: "04", title: "Cloud & DevOps", desc: "Scalable infrastructure on AWS, GCP and edge runtimes with CI/CD baked in.", icon: "◇", accent: "oklch(0.60 0.16 290)" },
  { n: "05", title: "Product Design", desc: "Research-led UI/UX, design systems and prototypes that ship straight to dev.", icon: "❋", accent: "oklch(0.65 0.18 60)" },
  { n: "06", title: "MVP Sprints", desc: "Go from idea to a working, investor-ready product in four to six weeks.", icon: "➔", accent: "oklch(0.58 0.20 350)" },
];

function CapabilitiesSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Headline word reveal
      const words = gsap.utils.toArray<HTMLElement>("[data-cap-word]");
      gsap.fromTo(
        words,
        { y: 80, opacity: 0, rotate: 4 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: { trigger: headRef.current, start: "top 80%" },
        },
      );

      // Cards 3D stagger
      const cards = gsap.utils.toArray<HTMLElement>("[data-cap-card]");
      gsap.set(cards, { transformPerspective: 1000, transformOrigin: "center bottom" });
      gsap.fromTo(
        cards,
        { y: 120, opacity: 0, rotateX: -25, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: { each: 0.1, from: "start" },
          scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
        },
      );

      // Parallax floating blob
      gsap.to(blobRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });

      // Subtle counter / icon idle
      gsap.to("[data-cap-icon]", {
        y: -6,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "random" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] py-28 md:py-36 overflow-hidden"
    >
      {/* Animated grid pattern background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.18 0.02 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.18 0.02 250) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
      />

      {/* Soft floating blob */}
      <div
        ref={blobRef}
        aria-hidden
        className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.55), transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div ref={headRef} className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-current opacity-60" />
            What we build
          </p>
          <h2 className="text-[clamp(2.25rem,5.5vw,4.75rem)] font-semibold tracking-tight leading-[1.02] overflow-hidden">
            {["A", "full-stack", "software", "studio"].map((w, i) => (
              <span key={i} data-cap-word className="inline-block mr-[0.25em] will-change-transform">{w}</span>
            ))}
            <br />
            {["for"].map((w, i) => (
              <span key={`a${i}`} data-cap-word className="inline-block mr-[0.25em] will-change-transform">{w}</span>
            ))}
            <span data-cap-word className="inline-block italic font-serif will-change-transform">ambitious teams</span>
          </h2>
          <p className="mt-7 text-base md:text-lg opacity-70 max-w-xl">
            From the first wireframe to the millionth user — design, engineering, AI and infrastructure under one roof.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" style={{ perspective: "1200px" }}>
          {CAPS.map((c) => (
            <div
              key={c.n}
              data-cap-card
              className="group relative rounded-2xl border border-[oklch(0.18_0.02_250)]/12 bg-white/70 backdrop-blur-sm p-7 md:p-8 overflow-hidden will-change-transform transition-transform duration-500 hover:-translate-y-2"
            >
              {/* hover gradient sheen */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 0%, ${c.accent.replace(")", " / 0.18)")}, transparent 60%)`,
                }}
              />
              {/* moving border beam */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, ${c.accent} 60deg, transparent 120deg)`,
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: 1,
                  animation: "spin 4s linear infinite",
                }}
              />

              <div className="relative flex items-start justify-between mb-12">
                <span className="text-[11px] uppercase tracking-[0.4em] opacity-50 font-medium">{c.n}</span>
                <span
                  data-cap-icon
                  className="text-2xl will-change-transform"
                  style={{ color: c.accent }}
                  aria-hidden
                >
                  {c.icon}
                </span>
              </div>

              <h3 className="relative text-xl md:text-2xl font-semibold tracking-tight mb-3">
                {c.title}
              </h3>
              <p className="relative text-sm md:text-[15px] leading-relaxed opacity-70">
                {c.desc}
              </p>

              <div
                className="relative mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-80 -translate-x-2 group-hover:translate-x-0 transition-all duration-500"
                style={{ color: c.accent }}
              >
                Explore <span aria-hidden>→</span>
              </div>

              {/* bottom accent bar */}
              <span
                aria-hidden
                className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-[width] duration-700 ease-out"
                style={{ background: c.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- 2. Tech stack ---------------- */

const STACK_ROW_1 = ["React", "Next.js", "TypeScript", "Tailwind", "GSAP", "Three.js", "Framer", "Vite"];
const STACK_ROW_2 = ["Node.js", "Python", "Go", "PostgreSQL", "Supabase", "Redis", "Prisma", "GraphQL"];
const STACK_ROW_3 = ["AWS", "Cloudflare", "Vercel", "Docker", "Kubernetes", "OpenAI", "LangChain", "Stripe"];

function TechStackSection() {
  return (
    <section className="relative bg-[oklch(0.10_0.015_250)] text-[oklch(0.97_0.005_80)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center mb-14">
        <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4">The toolkit</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.02]">
          Modern stack, <span className="italic font-serif">battle-tested</span>
        </h2>
        <p className="mt-5 text-sm md:text-base opacity-60 max-w-xl mx-auto">
          We choose tools that age well — fast to ship today, easy to maintain tomorrow.
        </p>
      </div>

      <StackRow items={STACK_ROW_1} duration={45} direction="left" />
      <StackRow items={STACK_ROW_2} duration={55} direction="right" />
      <StackRow items={STACK_ROW_3} duration={50} direction="left" />
    </section>
  );
}

function StackRow({ items, duration, direction }: { items: string[]; duration: number; direction: "left" | "right" }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex gap-4 md:gap-5 whitespace-nowrap w-max will-change-transform"
        style={{
          animationName: direction === "left" ? "marquee-left" : "marquee-right",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {repeated.map((label, i) => (
          <span
            key={i}
            className="shrink-0 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-sm md:text-base font-medium tracking-tight backdrop-blur-sm"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- 3. Animated Path ---------------- */

const STEPS = [
  { k: "01", t: "Discover", d: "Workshops, audits and a shared product brief." },
  { k: "02", t: "Design", d: "Flows, wireframes and a clickable prototype." },
  { k: "03", t: "Build", d: "Two-week sprints, continuous deploys, daily Slack." },
  { k: "04", t: "Launch", d: "QA, performance, analytics — then we go live." },
  { k: "05", t: "Scale", d: "Iterate on data, add features, grow the team." },
];

function ProcessPathSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // S-curve path. ViewBox 1000 x 1400.
  const d = useMemo(
    () =>
      "M 120 60 C 120 220, 880 220, 880 380 S 120 540, 120 700 S 880 860, 880 1020 S 120 1180, 120 1340",
    [],
  );

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!section || !path || !dot) return;

    const ctx = gsap.context(() => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 75%" } },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);

      // Move the traveling dot along the path
      const proxy = { p: 0 };
      tl.to(
        proxy,
        {
          p: 1,
          ease: "none",
          onUpdate: () => {
            const pt = path.getPointAtLength(length * proxy.p);
            gsap.set(dot, { attr: { cx: pt.x, cy: pt.y } });
          },
        },
        0,
      );

      // Reveal each milestone as the dot passes its anchor
      const milestones = gsap.utils.toArray<HTMLElement>("[data-step]");
      milestones.forEach((el, i) => {
        const start = i / milestones.length;
        const end = start + 0.08;
        tl.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: end - start, ease: "power2.out" }, start);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)]" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div ref={headerRef} className="absolute inset-x-0 top-10 md:top-14 px-6 text-center z-10">
          <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-3">The path</p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.02]">
            How a project <span className="italic font-serif">moves</span>
          </h2>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="relative w-full max-w-5xl h-full">
            <svg
              viewBox="0 0 1000 1400"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.40 0.06 250)" />
                  <stop offset="100%" stopColor="oklch(0.20 0.04 250)" />
                </linearGradient>
              </defs>

              {/* Faded base path */}
              <path d={d} fill="none" stroke="oklch(0.18 0.02 250 / 0.10)" strokeWidth="3" />

              {/* Animated drawn path */}
              <path
                ref={pathRef}
                d={d}
                fill="none"
                stroke="url(#pathGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Anchor dots along the path */}
              {[60, 380, 700, 1020, 1340].map((cy, i) => {
                const cx = i % 2 === 0 ? 120 : 880;
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="14" fill="oklch(0.97 0.005 80)" stroke="oklch(0.20 0.04 250)" strokeWidth="3" />
                    <text x={cx} y={cy + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="oklch(0.20 0.04 250)">
                      {STEPS[i].k}
                    </text>
                  </g>
                );
              })}

              {/* Traveling dot */}
              <circle
                ref={dotRef}
                cx="120"
                cy="60"
                r="11"
                fill="oklch(0.20 0.04 250)"
                stroke="oklch(0.97 0.005 80)"
                strokeWidth="3"
              />
            </svg>

            {/* Milestone cards positioned next to each anchor */}
            {STEPS.map((s, i) => {
              const yPct = [60, 380, 700, 1020, 1340][i] / 1400;
              const left = i % 2 === 0;
              return (
                <div
                  key={s.k}
                  data-step
                  className={`absolute w-[42%] max-w-[320px] ${left ? "left-[18%] md:left-[20%] text-left" : "right-[18%] md:right-[20%] text-right"}`}
                  style={{ top: `calc(${yPct * 100}% - 30px)` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-55 mb-1">Step {s.k}</p>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-1 text-sm opacity-70 leading-snug">{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
