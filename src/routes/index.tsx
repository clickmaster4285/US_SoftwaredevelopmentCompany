import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import projectNorton from "@/assets/project-norton.jpg";
import projectLumen from "@/assets/project-lumen.jpg";
import projectNorthwind from "@/assets/project-northwind.jpg";
import projectAtelier from "@/assets/project-atelier.jpg";
import testimonial1 from "@/assets/testimonial-1.mp4.asset.json";
import testimonial2 from "@/assets/testimonial-2.mp4.asset.json";
import testimonial3 from "@/assets/testimonial-3.mp4.asset.json";
import testimonial4 from "@/assets/testimonial-4.mp4.asset.json";
import dominateVideo from "@/assets/dominate-video.mp4";
import audienceAgencies from "@/assets/audience-agencies.jpg";
import audienceCreators from "@/assets/audience-creators.jpg";
import audienceMarketing from "@/assets/audience-marketing.jpg";
import AwardsSection from "@/components/AwardsSection";
import Testimonials3DRoom from "@/components/Testimonials3DRoom";
import SpaceJourney from "@/components/SpaceJourney";
import StudioPath from "@/components/StudioPath";
import SideNavbar from "@/components/SideNavbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);
  const [slot, setSlot] = useState({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const s = slotRef.current;
      if (!s) return;
      const r = s.getBoundingClientRect();
      setSlot({ x: r.left, y: r.top, w: r.width, h: r.height });
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 100);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  // Animation curve
  const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  // Square slot size based on line-height
  const slotSize = "0.75em";

  // Video is always rendered at full viewport size (no pixelation).
  // We clip it to a small square initially and expand the clip to fullscreen.
  const vw = typeof window !== "undefined" ? window.innerWidth : 1920;
  const vh = typeof window !== "undefined" ? window.innerHeight : 1080;
  const sx = slot.x;
  const sy = slot.y;
  const sw = slot.w || 80;
  const sh = slot.h || 80;

  const top = sy * (1 - eased);
  const right = (vw - (sx + sw)) * (1 - eased);
  const bottom = (vh - (sy + sh)) * (1 - eased);
  const left = sx * (1 - eased);
  const radius = 12 * (1 - eased);

  // 3D tilt that flattens as we zoom in
  const rotateX = (1 - eased) * 6;
  const translateZ = eased * 120;

  // Headline fades out as video takes over
  const textOpacity = 1 - Math.min(1, eased * 1.4);
  const textBlur = eased * 8;

  return (
    <div className="bg-background text-foreground">
      {/* Nav */}
      <SideNavbar />

      {/* Tall scroll container that drives the animation */}
      <section ref={sectionRef} className="relative" style={{ height: "260vh" }}>
        {/* Sticky stage */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden" style={{ perspective: "1200px" }}>
          {/* Headline */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center will-change-[opacity,filter]"
            style={{ opacity: textOpacity, filter: `blur(${textBlur}px)` }}
          >
            <h1 className="leading-[0.95] tracking-tight">
              <span className="block text-[clamp(3rem,9vw,9rem)] font-semibold">BEYOND</span>
              <span className="block text-[clamp(3rem,9vw,9rem)] italic font-serif">
                THE{" "}
                <span
                  ref={slotRef}
                  className="inline-block align-middle"
                  style={{ width: slotSize, height: slotSize }}
                />{" "}
                ORDINARY
              </span>
              <span className="block text-[clamp(3rem,9vw,9rem)] italic font-serif">
                BRANDING & UI UX
              </span>
              <span className="block text-[clamp(3rem,9vw,9rem)] font-semibold">
                DESIGN AGENCY
              </span>
            </h1>
          </div>

          {/* Video — always full viewport, clipped to slot then expands. No pixel scaling. */}
          <div
            className="fixed inset-0 will-change-[clip-path,transform]"
            style={{
              transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`,
              WebkitClipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`,
            }}
          >
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          {/* Tagline bottom-right */}
          <div
            className="absolute bottom-10 right-10 text-right text-sm md:text-base"
            style={{ opacity: textOpacity }}
          >
            <p>Helping brands and startups drive value</p>
            <p className="italic">through creatively functional design</p>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em]"
            style={{ opacity: 1 - eased }}
          >
            Scroll ↓
          </div>
        </div>
      </section>

      {/* Projects — stacked scroll cards */}
      <ProjectsStack />

      {/* Everything you need — feature section with auto-playing square video */}
      <DominateSection />

      {/* Comparison — why us vs others */}
      <ComparisonSection />

      {/* Awards — cinematic floating cards */}
      <AwardsSection />

      {/* Who it's for — auto-rotating audience slides */}
      <AudienceCarousel />

      {/* Trusted by — logo marquee */}
      <LogoMarquee />

      {/* Testimonials — 3D room you travel through */}
      <Testimonials3DRoom />

      {/* Studio capabilities, tech stack and animated process path */}
      <StudioPath />

      {/* Space journey → Let's work together CTA */}
      <SpaceJourney />


      {/* Footer */}
      <Footer />
    </div>
  );
}

const LOGOS_ROW_1 = [
  "masters' union", "airtel", "kotak", "NOISE", "Coca-Cola", "boAt", "DAT", "SWVL",
];
const LOGOS_ROW_2 = [
  "NUEGO", "ROYAL ENFIELD", "HBK", "ITC Limited", "RBL BANK", "GreyOrange", "Apollo 24|7", "DECATHLON",
];
const LOGOS_ROW_3 = [
  "TVS", "Qubo", "HT Media", "HEALTHKART", "HDFC securities", "DAT", "SWVL", "THERMAX",
];

function LogoMarquee() {
  return (
    <section className="bg-[oklch(0.97_0.005_80)] text-[oklch(0.25_0.02_250)] py-24 md:py-32 overflow-hidden">
      <div className="px-8 max-w-5xl mx-auto mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">Trusted by</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1]">
          Brands we've partnered <span className="italic font-serif">with</span>
        </h2>
      </div>

      <MarqueeRow items={LOGOS_ROW_1} duration={40} direction="left" />
      <MarqueeRow items={LOGOS_ROW_2} duration={50} direction="right" />
      <MarqueeRow items={LOGOS_ROW_3} duration={45} direction="left" />
    </section>
  );
}

function MarqueeRow({
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
    <div className="relative py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex gap-16 md:gap-24 whitespace-nowrap will-change-transform w-max"
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
            className="shrink-0 text-xl md:text-3xl font-medium tracking-tight opacity-60 hover:opacity-100 transition-opacity"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  { src: testimonial1.url, name: "Sarah · Founder", quote: "Transformed our brand entirely." },
  { src: testimonial2.url, name: "Daniel · CTO", quote: "Best design partner we've worked with." },
  { src: testimonial3.url, name: "Maya · Designer", quote: "Pixel-perfect, every single detail." },
  { src: testimonial4.url, name: "Alex · CMO", quote: "Doubled our conversion overnight." },
];

function TestimonialMarquee() {
  const repeated = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="bg-[oklch(0.97_0.005_80)] text-[oklch(0.20_0.02_250)] py-24 md:py-32 overflow-hidden">
      <div className="px-8 max-w-5xl mx-auto mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">Kind Words</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1]">
          What our clients <span className="italic font-serif">say</span>
        </h2>
      </div>

      <div className="relative py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex gap-8 md:gap-12 w-max will-change-transform"
          style={{
            animationName: "marquee-left",
            animationDuration: "60s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {repeated.map((t, i) => {
            const tilt = (i % 2 === 0 ? -1 : 1) * (3 + (i % 3));
            return (
              <div
                key={i}
                className="shrink-0 w-[180px] md:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black relative"
                style={{ transform: `rotate(${tilt}deg)` }}
              >
                <video
                  src={t.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-sm font-medium leading-snug">"{t.quote}"</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] opacity-80">{t.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const COMPARISON_ROWS: { label: string; us: string; inhouse: string; freelancers: string; agencies: string }[] = [
  { label: "Tech Expertise", us: "Senior full-stack engineers", inhouse: "Limited skill range", freelancers: "Generalist skills", agencies: "Junior-heavy teams" },
  { label: "Speed to Ship", us: "MVP in 4–6 weeks", inhouse: "Slow ramp-up (3–6 mo)", freelancers: "Trial & error", agencies: "Endless discovery phases" },
  { label: "Code Quality", us: "Production-grade, tested", inhouse: "Tech debt over time", freelancers: "Inconsistent standards", agencies: "Template-driven builds" },
  { label: "Communication", us: "Daily standups, Slack", inhouse: "Internal silos", freelancers: "You manage them", agencies: "Account-manager filters" },
  { label: "Cost", us: "Niche team, fair rates", inhouse: "High fixed overhead", freelancers: "Cheap but unreliable", agencies: "High cost, low fit" },
  { label: "Secret Sauce?", us: "AI-assisted dev + 8+ yrs experience", inhouse: "No outside benchmarks", freelancers: "Guesswork-based", agencies: "One-size-fits-all stack" },
];

function ComparisonSection() {
  return (
    <section className="bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center mb-12 md:mb-16">
        <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-semibold tracking-tight leading-[1.02]">
          <span className="italic font-serif text-[oklch(0.45_0.04_250)]">Sure</span>, you
          <br />have choices
        </h2>
        <p className="mt-5 text-sm md:text-base opacity-60">Here's why ours wins.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="rounded-3xl border border-[oklch(0.18_0.02_250)]/15 bg-white/60 backdrop-blur-sm p-3 md:p-6 shadow-sm overflow-x-auto">
          <div className="min-w-[720px] grid grid-cols-5 gap-2 md:gap-3 relative">
            {/* Header row */}
            <div />
            <div className="rounded-t-2xl bg-[oklch(0.20_0.02_250)] text-[oklch(0.97_0.005_80)] px-4 py-5 text-center font-semibold tracking-tight">
              ⚡ OUR STUDIO
            </div>
            <div className="px-4 py-5 text-center text-sm md:text-base font-medium opacity-80">In-House Team</div>
            <div className="px-4 py-5 text-center text-sm md:text-base font-medium opacity-80">Freelancers</div>
            <div className="px-4 py-5 text-center text-sm md:text-base font-medium opacity-80">Other Agencies</div>

            {COMPARISON_ROWS.map((row, i) => {
              const last = i === COMPARISON_ROWS.length - 1;
              return (
                <div key={row.label} className="contents">
                  <div className="px-3 md:px-4 py-5 text-sm md:text-base font-medium opacity-80 flex items-center">
                    {row.label}
                  </div>
                  <div
                    className={`bg-[oklch(0.20_0.02_250)] text-[oklch(0.97_0.005_80)] px-4 py-5 text-center text-sm md:text-base font-medium ${last ? "rounded-b-2xl" : ""}`}
                  >
                    {row.us}
                  </div>
                  <div className="px-3 md:px-4 py-5 text-center text-sm opacity-60 border-t border-[oklch(0.18_0.02_250)]/10 flex items-center justify-center">
                    {row.inhouse}
                  </div>
                  <div className="px-3 md:px-4 py-5 text-center text-sm opacity-60 border-t border-[oklch(0.18_0.02_250)]/10 flex items-center justify-center">
                    {row.freelancers}
                  </div>
                  <div className="px-3 md:px-4 py-5 text-center text-sm opacity-60 border-t border-[oklch(0.18_0.02_250)]/10 flex items-center justify-center">
                    {row.agencies}
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


const PROJECTS = [
  {
    tag: "Automotive · Web",
    title: "Norton — Return of a Legend",
    desc: "Reimagining Norton for a new generation, rooted in legacy.",
    bg: "oklch(0.96 0.01 80)",
    fg: "oklch(0.18 0.02 250)",
    image: projectNorton,
  },
  {
    tag: "Branding · Identity",
    title: "Lumen Studio — Visual System",
    desc: "A modular identity built for motion-first storytelling.",
    bg: "oklch(0.94 0.02 60)",
    fg: "oklch(0.18 0.02 30)",
    image: projectLumen,
  },
  {
    tag: "UI/UX · SaaS",
    title: "Northwind Dashboard",
    desc: "Data-dense product surfaces designed for clarity and speed.",
    bg: "oklch(0.95 0.015 220)",
    fg: "oklch(0.20 0.03 230)",
    image: projectNorthwind,
  },
  {
    tag: "E-commerce · Web",
    title: "Atelier Maison",
    desc: "A boutique storefront with editorial pacing and craft details.",
    bg: "oklch(0.96 0.012 40)",
    fg: "oklch(0.20 0.02 30)",
    image: projectAtelier,
  },
];

function ProjectsStack() {
  return (
    <section className="relative bg-background">
      <div className="px-8 pt-32 pb-16 max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">Selected Work</p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1] max-w-3xl">
          Projects we've shipped <span className="italic font-serif">recently</span>
        </h2>
      </div>

      <div className="relative">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="sticky px-4 md:px-8"
            style={{
              top: `${80 + i * 24}px`,
              zIndex: i + 1,
            }}
          >
            <div
              className="mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
              style={{
                height: "78vh",
                background: p.bg,
                color: p.fg,
              }}
            >
              <div className="h-full w-full flex flex-col justify-between p-8 md:p-14">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] opacity-70">
                  <span>{p.tag}</span>
                  <span>0{i + 1} / 0{PROJECTS.length}</span>
                </div>

                <div className="flex-1 flex items-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full aspect-[16/9] object-cover rounded-2xl border border-black/5 shadow-lg"
                  />
                </div>

                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h3 className="text-2xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl">{p.desc}</p>
                  </div>
                  <button
                    className="shrink-0 rounded-full border border-current/30 px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors"
                    style={{ borderColor: "currentColor" }}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
            <div style={{ height: "22vh" }} />
          </div>
        ))}
        <div style={{ height: "30vh" }} />
      </div>
    </section>
  );
}


const AUDIENCE_SLIDES = [
  {
    title: "Marketing & Sales",
    subtitle: "Launch high-converting pages fast without waiting on developers.",
    image: audienceMarketing,
  },
  {
    title: "Agencies & Teams",
    subtitle: "Ship faster and deliver premium, immersive experiences to clients at scale.",
    image: audienceAgencies,
  },
  {
    title: "Creators & Founders",
    subtitle: "Create breathtaking interactive stories without any design or coding skills.",
    image: audienceCreators,
  },
];

function AudienceCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % AUDIENCE_SLIDES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <section className="bg-black text-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10 md:mb-14 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">Built for</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1]">
          Who it's <span className="italic font-serif">for</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[oklch(0.12_0.01_250)] shadow-2xl">
          {AUDIENCE_SLIDES.map((slide, i) => (
            <div
              key={slide.title}
              className="absolute inset-0 transition-opacity duration-700 ease-out"
              style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1088}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute top-0 left-0 p-6 md:p-12 max-w-2xl">
                <h3 className="text-[clamp(1.75rem,4.5vw,3.5rem)] italic font-serif leading-[1.05] tracking-tight">
                  {slide.title}
                </h3>
                <p className="mt-3 md:mt-4 text-sm md:text-base opacity-80 max-w-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-2 border border-white/15">
            {AUDIENCE_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 24 : 6,
                  background: i === index ? "white" : "rgba(255,255,255,0.45)",
                }}
              />
            ))}
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
            className="absolute bottom-5 right-5 h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 transition-colors"
          >
            {playing ? (
              <span className="flex gap-[3px]">
                <span className="block h-3 w-[3px] bg-white" />
                <span className="block h-3 w-[3px] bg-white" />
              </span>
            ) : (
              <span className="block h-0 w-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white ml-[2px]" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function DominateSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const c = containerRef.current;
    if (!v || !c) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(c);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] py-24 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center mb-16 md:mb-24">
        <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-semibold tracking-tight leading-[1.02]">
          Everything you need
          <br />
          to <span className="italic font-serif">dominate</span> the web
        </h2>
        <p className="mt-6 text-base md:text-lg opacity-60 max-w-xl mx-auto">
          From strategy to engineering to scaling. We handle everything so you don't have to.
        </p>
      </div>

      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
      >
        <div className="border-l-2 border-[oklch(0.18_0.02_250)] pl-6 md:pl-8">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5">
            Engineering
          </h3>
          <p className="opacity-70 text-sm md:text-base leading-relaxed max-w-md">
            We don't guess what works for software—we know. Our engineering combines battle-tested
            architecture, performance-first delivery, and over a decade of shipping production code
            for ambitious teams.
          </p>
          <ul className="mt-8 space-y-4 text-base md:text-lg font-medium">
            <li className="hover:opacity-60 transition-opacity cursor-pointer">Web Development</li>
            <li className="hover:opacity-60 transition-opacity cursor-pointer">Mobile Apps</li>
            <li className="hover:opacity-60 transition-opacity cursor-pointer">Cloud & DevOps</li>
            <li className="hover:opacity-60 transition-opacity cursor-pointer">AI Integration</li>
          </ul>
        </div>

        <div className="aspect-square w-full rounded-3xl overflow-hidden shadow-2xl bg-black">
          <video
            ref={videoRef}
            src={dominateVideo}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
