import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CAPS,
  STACK_ROW_1,
  STACK_ROW_2,
  STACK_ROW_3,
  STEPS,
} from "@/app/(landing)/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Three stacked software-house sections before the SpaceJourney CTA:
 *  1) Capabilities what we build
 *  2) Tech stack marquee of tools
 *  3) Animated Path SVG path the user "walks" while scrolling, with milestones
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

function CapabilitiesSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
          scrollTrigger: {
            id: "cap-words",
            trigger: headRef.current,
            start: "top 80%",
          },
        },
      );

      const cards = gsap.utils.toArray<HTMLElement>("[data-cap-card]");
      gsap.set(cards, {
        transformPerspective: 1000,
        transformOrigin: "center bottom",
      });
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
          scrollTrigger: {
            id: "cap-cards",
            trigger: gridRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.to(blobRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          id: "cap-blob",
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-cap-icon]", {
        y: -6,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "random" },
      });
    },
    { scope: wrapRef, dependencies: [] },
  );

  return (
 <section
  ref={wrapRef}
  className="relative bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] py-28 md:py-36 overflow-hidden"
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
    className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none blur-3xl opacity-30"
    style={{
      background:
        "radial-gradient(circle at 30% 30%, oklch(0.65 0.18 250 / 0.55), transparent 65%)",
    }}
  />

  <div className="relative max-w-6xl mx-auto px-6 md:px-10">
    <div ref={headRef} className="max-w-3xl mx-auto mb-20 text-center">
      <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-5 flex items-center justify-center gap-3">
        <span className="inline-block w-8 h-px bg-current opacity-60" />
        What we build
        <span className="inline-block w-8 h-px bg-current opacity-60" />
      </p>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
        Our <span className="italic font-serif">Software</span>
        <br />
        <span className="italic font-serif">Development</span> Services
      </h2>
      <p className="mt-7 text-base md:text-lg opacity-70 max-w-xl mx-auto">
        Clickmasters offers complete software development services that cover every step from planning and design to building, testing, launch, and ongoing support.
      </p>
    </div>

    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      style={{ perspective: "1200px" }}
    >
      {CAPS.map((c) => (
        <div
          key={c.n}
          data-cap-card
          className="group relative rounded-2xl border border-[oklch(0.18_0.02_250)]/12 bg-white/70 backdrop-blur-sm p-7 md:p-8 overflow-hidden will-change-transform transition-transform duration-500 hover:-translate-y-2"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 30% 0%, ${c.accent.replace(")", " / 0.18)")}, transparent 60%)`,
            }}
          />
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
            <span className="text-[11px] uppercase tracking-[0.4em] opacity-50 font-medium">
              {c.n}
            </span>
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

function TechStackSection() {
  return (
    <section className="relative bg-[oklch(0.10_0.015_250)] text-[oklch(0.97_0.005_80)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center mb-14">
        <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4">
          The toolkit
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.02]">
          Modern stack, <span className="italic font-serif">battle-tested</span>
        </h2>
        <p className="mt-5 text-sm md:text-base opacity-60 max-w-xl mx-auto">
          We choose tools that age well fast to ship today, easy to maintain
          tomorrow.
        </p>
      </div>

      <StackRow items={STACK_ROW_1} duration={45} direction="left" />
      <StackRow items={STACK_ROW_2} duration={55} direction="right" />
      <StackRow items={STACK_ROW_3} duration={50} direction="left" />
    </section>
  );
}

function StackRow({
  items,
  duration,
  direction,
}: {
  items: string[];
  duration: number;
  direction: "left" | "right";
}) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex gap-4 md:gap-5 whitespace-nowrap w-max will-change-transform"
        style={{
          animationName:
            direction === "left" ? "marquee-left" : "marquee-right",
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

/* ---------------- 3. Process timeline ---------------- */

/* ---------------- 3. Process timeline ---------------- */

function ProcessPathSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(railFillRef.current, { scaleY: 1 });
        gsap.set("[data-step-content]", { opacity: 1, y: 0 });
        gsap.set("[data-step-node]", {
          backgroundColor: "oklch(0.20 0.04 250)",
          borderColor: "oklch(0.20 0.04 250)",
          color: "oklch(0.97 0.005 80)",
        });
        return;
      }

      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        },
      );

      // Rail fills top-to-bottom as the whole timeline scrolls through no pin needed.
      gsap.fromTo(
        railFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.4,
          },
        },
      );

      // Each step animates on its own trigger independent, resilient, nothing shared to fight over.
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        const node = el.querySelector<HTMLElement>("[data-step-node]");
        const content = el.querySelector<HTMLElement>("[data-step-content]");

        gsap.fromTo(
          content,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          },
        );

        if (node) {
          gsap.to(node, {
            backgroundColor: "oklch(0.20 0.04 250)",
            borderColor: "oklch(0.20 0.04 250)",
            color: "oklch(0.97 0.005 80)",
            duration: 0.4,
            scrollTrigger: {
              trigger: el,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="max-w-lg mb-20 md:mb-28">
          <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-current opacity-60" />
            The process
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
            How a project <span className="italic font-serif">moves</span>
          </h2>
          <p className="mt-5 text-base opacity-70">
            Five stages, no surprises here's what happens between the first
            call and going live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Video column stretches to match the steps column's height */}
          <div className="relative lg:sticky lg:top-24 h-[320px] md:h-[420px] lg:h-auto rounded-2xl overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/studio-path.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Steps column */}
          <div className="relative">
            <div className="absolute left-7 md:left-8 top-7 bottom-7 md:top-8 md:bottom-8 w-px bg-[oklch(0.18_0.02_250)]/12" />
            <div
              ref={railFillRef}
              className="absolute left-7 md:left-8 top-7 bottom-7 md:top-8 md:bottom-8 w-px origin-top bg-[oklch(0.20_0.04_250)]"
            />

            <div className="flex flex-col gap-12 md:gap-16">
              {STEPS.map((s) => (
                <div
                  key={s.k}
                  data-step
                  className="relative flex gap-6 md:gap-8"
                >
                  <div
                    data-step-node
                    className="relative z-10 shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[oklch(0.18_0.02_250)]/20 bg-[oklch(0.97_0.005_80)] flex items-center justify-center font-mono text-sm tracking-tight"
                  >
                    {s.k}
                  </div>
                  <div data-step-content className="pt-2 md:pt-3 max-w-md">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
                      {s.t}
                    </h3>
                    <p className="text-sm md:text-base opacity-70 leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
