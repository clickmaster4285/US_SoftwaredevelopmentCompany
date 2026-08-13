"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Users, Award, Zap } from "lucide-react";
import {
  IconFor,
  PageFrame,
  SectionHeading,
} from "../[main_service]/[sub_service]/landing-primitives";
import { services } from "../[main_service]/[sub_service]/service-data";

/**
 * About page advanced animation pass
 * -----------------------------------------------------------------------
 * Every section below the shared <Hero /> is rebuilt around one idea:
 * nothing appears until it's earned attention by scrolling into view,
 * and once it does, it arrives with real motion count-up numbers,
 * rotating icon rings, elastic pop-ins, gradient sweeps rather than a
 * flat fade. Colors stay inside the site's existing palette
 * (#e05b35 orange, #171717 near-black, #fffaf1 cream) so this reads as
 * the same brand, just with more life in it.
 * -----------------------------------------------------------------------
 */

const values = [
  {
    text: "Ship fast, without cutting corners MVP-ready products in 4–6 weeks",
    icon: Zap,
  },
  {
    text: "Design that gets used Research-backed, intuitive UI/UX",
    icon: Users,
  },
  {
    text: "Build for scale from day one Architecture designed to grow",
    icon: Award,
  },
  {
    text: "Stay accountable after launch Post-launch support and ownership",
    icon: CheckCircle2,
  },
  {
    text: "Earn trust through transparency ISO 27001 and GDPR compliance",
    icon: Shield,
  },
];

const trustBadges = [
  { icon: Shield, label: "ISO 27001 Certified", description: "Information security management you can audit" },
  { icon: Shield, label: "GDPR Compliant", description: "Data handling that meets EU standards by default" },
  { icon: Users, label: "100+ 5-Star Reviews", description: "Verifiable, not just claimed" },
  { icon: Award, label: "Production-grade code", description: "Every build is tested before it ships" },
];

const stats = [
  { number: "200+", label: "Projects delivered" },
  { number: "8+", label: "Years combined engineering experience" },
  { number: "15+", label: "Industries served" },
  { number: "24/7", label: "Support coverage" },
];

/* ---------------------------------------------------------------------- */
/* Small reusable helpers                                                  */
/* ---------------------------------------------------------------------- */

function useInViewOnce<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: any;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.15);
  return (
    <Tag
      ref={ref}
      className={`${inView ? "ab-rise" : "opacity-0"} ${className}`}
      style={{ animationDelay: inView ? `${delay}s` : undefined }}
    >
      {children}
    </Tag>
  );
}

function CountStat({ value, start }: { value: string; start: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    if (!match || !start) return;
    const target = parseInt(match[1], 10);
    const duration = 1200;
    const startTime = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target).toString());
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  if (!match) return <>{value}</>;
  return (
    <>
      {display}
      {match[2]}
    </>
  );
}

/* ---------------------------------------------------------------------- */

export default function AboutPage() {
  const [statsRef, statsInView] = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <PageFrame>
      <style>{`
        @property --ab-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        @keyframes ab-rise-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ab-pop-in {
          0% { opacity: 0; transform: translateY(24px) scale(0.88) rotate(var(--ab-rotate, 0deg)); }
          55% { opacity: 1; transform: translateY(-4px) scale(1.03) rotate(var(--ab-rotate, 0deg)); }
          78% { transform: translateY(1px) scale(0.99) rotate(var(--ab-rotate, 0deg)); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(var(--ab-rotate, 0deg)); }
        }
        @keyframes ab-ring-spin { to { --ab-angle: 360deg; } }
        @keyframes ab-pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(224,91,53,0.35); }
          50% { box-shadow: 0 0 0 6px rgba(224,91,53,0); }
        }
        @keyframes ab-underline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes ab-blob-a {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(60px,-40px) scale(1.15); }
        }
        @keyframes ab-blob-b {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-50px,45px) scale(1.1); }
        }
        @keyframes ab-shine-sweep {
          0% { transform: translateX(-130%) skewX(-15deg); }
          100% { transform: translateX(230%) skewX(-15deg); }
        }
        @keyframes ab-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes ab-slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ab-image-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
        }

        .ab-rise { animation: ab-rise-in 0.7s cubic-bezier(.22,1,.36,1) both; }
        .ab-pop { animation: ab-pop-in 0.75s cubic-bezier(.24,1.5,.5,1) both; }
        .ab-ring { animation: ab-ring-spin 7s linear infinite; }
        .ab-pulse { animation: ab-pulse-ring 2.4s ease-in-out infinite; }
        .ab-underline { transform-origin: left; animation: ab-underline 0.6s cubic-bezier(.22,1,.36,1) both; }
        .ab-blob-a { animation: ab-blob-a 18s ease-in-out infinite; }
        .ab-blob-b { animation: ab-blob-b 22s ease-in-out infinite; }
        .ab-dot { animation: ab-dot-pulse 1.8s ease-in-out infinite; }
        .ab-image-float { animation: ab-image-float 6s ease-in-out infinite; }

        .ab-shine-btn { position: relative; overflow: hidden; }
        .ab-shine-btn::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 45%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: translateX(-130%) skewX(-15deg);
          pointer-events: none;
        }
        .ab-shine-btn:hover::after { animation: ab-shine-sweep 0.9s ease forwards; }

        .ab-slider-wrapper {
          overflow: hidden;
          position: relative;
        }

        .ab-slider-track {
          display: flex;
          animation: ab-slide-left 25s linear infinite;
          width: max-content;
        }
        .ab-slider-track:hover {
          animation-play-state: paused;
        }

        .ab-slider-item {
          flex-shrink: 0;
          width: 320px;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-right: 1px solid rgba(0,0,0,0.06);
        }
        .ab-slider-item:last-child {
          border-right: none;
        }

        .ab-slider-item .badge-text {
          min-width: 0;
          flex: 1;
        }
        .ab-slider-item .badge-text .label {
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ab-slider-item .badge-text .desc {
          font-size: 0.75rem;
          color: rgba(0,0,0,0.5);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 640px) {
          .ab-slider-item {
            width: 260px;
            padding: 0 1rem;
          }
          .ab-slider-item .badge-text .label {
            font-size: 0.75rem;
          }
          .ab-slider-item .badge-text .desc {
            font-size: 0.65rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ab-rise, .ab-pop, .ab-ring, .ab-pulse, .ab-underline, .ab-blob-a,
          .ab-blob-b, .ab-dot, .ab-shine-btn::after, .ab-slider-track,
          .ab-image-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Hero Section with consistent font styling */}
      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="ab-blob-a absolute -left-20 -top-10 h-[380px] w-[380px] rounded-full opacity-[0.16]"
            style={{ background: "radial-gradient(circle, #e05b35, transparent 70%)", filter: "blur(90px)" }}
          />
          <div
            className="ab-blob-b absolute right-0 top-1/4 h-[340px] w-[340px] rounded-full opacity-[0.12]"
            style={{ background: "radial-gradient(circle, #e05b35, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>
        <div className="relative px-5 pt-24 pb-12 md:px-10 md:pt-32 md:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <p className="text-xs uppercase tracking-[0.4em] text-black/40 mb-5 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-black/20" />
                About Clickmasters
              </p>

              {/* Title with consistent font styling */}
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-[#171717]">
                We're a Software Development & Design Studio Built for{" "}
                <span className="italic font-serif">Modern Businesses</span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-base md:text-lg leading-relaxed text-black/70 max-w-2xl">
                Clickmasters is a full-stack software development company based in the USA, helping startups and growing businesses turn ideas into products that work and look like they mean it. We combine senior engineering, sharp UI/UX design, and applied AI to build web platforms, mobile apps, and automation systems that hold up under real-world use. No bloated teams, no six-month "discovery phases" just people who ship.
              </p>

              {/* Badge */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fffaf1] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e05b35]" />
                <span className="text-xs font-medium tracking-[0.08em] text-black/60">
                  Strategy, design, engineering, and support under one roof
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="ab-shine-btn inline-flex items-center gap-2 rounded-full bg-[#e05b35] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c94d2a]"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 font-semibold text-[#171717] transition hover:-translate-y-0.5 hover:bg-black/5"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar - Stats (count-up on scroll) */}
      <section ref={statsRef} className="border-b border-black/5 px-5 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${statsInView ? "ab-rise" : "opacity-0"}`}
                style={{ animationDelay: statsInView ? `${i * 0.12}s` : undefined }}
              >
                <div className="text-3xl font-bold text-[#e05b35] md:text-4xl tabular-nums">
                  <CountStat value={stat.number} start={statsInView} />
                </div>
                <div
                  className="mx-auto mt-2 h-[2px] w-8 bg-[#e05b35]/40 ab-underline"
                  style={{ animationDelay: statsInView ? `${0.2 + i * 0.12}s` : undefined }}
                />
                <div className="mt-2 text-sm text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - Animated Slider */}
      <section className="bg-[#fffaf1] border-y border-black/5">
        <div className="ab-slider-wrapper py-6">
          <div className="ab-slider-track">
            {/* First set of badges */}
            {trustBadges.map((badge, i) => (
              <div key={`${badge.label}-1`} className="ab-slider-item">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e05b35]/10">
                  <badge.icon className="h-5 w-5 text-[#e05b35]" />
                </span>
                <div className="badge-text">
                  <div className="label">{badge.label}</div>
                  <div className="desc">{badge.description}</div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless looping */}
            {trustBadges.map((badge, i) => (
              <div key={`${badge.label}-2`} className="ab-slider-item">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e05b35]/10">
                  <badge.icon className="h-5 w-5 text-[#e05b35]" />
                </span>
                <div className="badge-text">
                  <div className="label">{badge.label}</div>
                  <div className="desc">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started Clickmasters with Image */}
      <section className="relative overflow-hidden px-5 py-24 md:px-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 left-0 select-none font-serif text-[220px] italic leading-none text-[#e05b35]/[0.05] md:text-[300px]"
        >
          "
        </span>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Why we started"
                  title="Why We Started Clickmasters"
                  copy="Most software agencies make you choose: work with a cheap freelancer and manage the chaos yourself, or pay enterprise rates to a big agency and wait months for a junior-heavy team to 'ramp up.' We built Clickmasters as the alternative a senior, full-stack studio that moves at startup speed without cutting corners on code quality or design craft."
                />
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-lg leading-relaxed text-black/70">
                  Since then, we've shipped{" "}
                  <strong className="font-semibold text-[#e05b35]">200+ projects</strong> across
                  automotive, retail tech, fintech, and e-commerce from MVPs launched in{" "}
                  <strong className="font-semibold text-[#e05b35]">4–6 weeks</strong> to enterprise
                  platforms built to scale past a million users. Every project runs through the same
                  core team: strategists, designers, and engineers who stay accountable from the first
                  wireframe to post-launch support.
                </p>
              </Reveal>
            </div>

            {/* Right - Image */}
            <Reveal delay={0.2} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ab-image-float">
                <Image
                  src="/assets/why.png"
                  alt="Clickmasters team - Software Development Company"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Decorative overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#e05b35]/10 via-transparent to-transparent pointer-events-none" />
                {/* Corner accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-4 border-b-4 border-[#e05b35]/30 rounded-br-2xl" />
                <div className="absolute -top-3 -left-3 w-24 h-24 border-l-4 border-t-4 border-[#e05b35]/30 rounded-tl-2xl" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-xl px-5 py-3 flex items-center gap-3 border border-black/5">
                <span className="flex h-3 w-3 rounded-full bg-[#e05b35] animate-pulse" />
                <span className="text-sm font-semibold text-[#171717]">8+ Years Experience</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Mission - Values */}
      <section className="bg-[#fffaf1] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Our Mission"
              title="Ship fast, build scale, stay accountable"
              copy="Five principles that guide everything we build."
            />
          </Reveal>
          <div className="mt-14 divide-y divide-black/10 border-t border-b border-black/10">
            {values.map((value, i) => (
              <ManifestoRow key={value.text} value={value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Security & Quality divided certification strip, no boxes */}
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Security and Quality You Can Verify"
              title="Enterprise-grade standards, startup delivery"
              copy="Every project meets the security and quality benchmarks your business needs."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 divide-y divide-black/10 border-y border-black/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {trustBadges.map((badge, i) => (
              <Reveal
                key={badge.label}
                delay={i * 0.1}
                className="group flex flex-col items-center gap-3 px-6 py-10 text-center"
              >
                <div className="relative flex h-14 w-14 items-center justify-center">
                  <span
                    className="ab-ring absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: "conic-gradient(from var(--ab-angle, 0deg), #e05b35, transparent 40%, transparent 60%, #e05b35)",
                      padding: "2px",
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span className="ab-pulse relative flex h-12 w-12 items-center justify-center rounded-full bg-[#e05b35]/10">
                    <badge.icon className="h-6 w-6 text-[#e05b35]" />
                  </span>
                </div>
                <h4 className="text-sm font-semibold">{badge.label}</h4>
                <p className="max-w-[14rem] text-xs text-black/50">{badge.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-[#fffaf1] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="One team for the full build."
              copy="From product strategy to cloud delivery, the pages below are powered by the service catalog used in the navigation."
            />
          </Reveal>
          <div className="mt-14 divide-y divide-black/10 border-t border-b border-black/10">
            {Object.values(services)
              .slice(0, 6)
              .map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.06}>
                  <Link
                    href={`/${service.slug}`}
                    className="group flex flex-col gap-4 py-8 transition-colors duration-300 hover:bg-[#e05b35]/[0.03] sm:flex-row sm:items-center sm:gap-8 sm:px-2"
                  >
                    <span className="font-mono text-sm text-black/30 transition-colors duration-300 group-hover:text-[#e05b35] sm:w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                      <IconFor name={service.icon} />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-black/58">
                        {service.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#e05b35] sm:pr-2">
                      View service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#171717] px-5 py-24 text-white md:px-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="ab-blob-a absolute -left-16 top-0 h-[420px] w-[420px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #e05b35, transparent 70%)", filter: "blur(100px)" }}
          />
          <div
            className="ab-blob-b absolute -right-16 bottom-0 h-[420px] w-[420px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #e05b35, transparent 70%)", filter: "blur(100px)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5">
            <span className="ab-dot h-1.5 w-1.5 rounded-full bg-[#e05b35]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
              Currently taking new projects
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Let's Build Something That Ships
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Whether you need an MVP in six weeks or a platform rebuild that won't break under
              scale, Clickmasters brings the same senior team from kickoff to launch.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="ab-shine-btn inline-flex items-center gap-2 rounded-full bg-[#e05b35] px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c94d2a]"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Book a Call
            </Link>
          </Reveal>

          <Reveal
            delay={0.4}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60"
          >
            <span>sales@clickmasterssoftwaredevelopmentcompany.com</span>
            <span className="hidden sm:block">·</span>
            <span>+1 325 202 4074</span>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  );
}

/* ---------------------------------------------------------------------- */
/* Value card separated so each gets its own scroll trigger + rotation   */
/* ---------------------------------------------------------------------- */

function ManifestoRow({
  value,
  index,
}: {
  value: { text: string; icon: typeof CheckCircle2 };
  index: number;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>(0.3);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`group flex flex-col gap-4 py-8 transition-colors duration-300 hover:bg-[#e05b35]/[0.03] sm:flex-row sm:items-center sm:gap-8 sm:px-2 ${
        inView ? "ab-rise" : "opacity-0"
      }`}
      style={{ animationDelay: inView ? `${index * 0.08}s` : undefined }}
    >
      <span className="font-mono text-sm text-black/30 transition-colors duration-300 group-hover:text-[#e05b35] sm:w-10">
        {num}
      </span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e05b35]/10 transition-transform duration-300 group-hover:scale-110">
        <value.icon className="h-5 w-5 text-[#e05b35]" />
      </span>
      <p className="text-lg font-semibold leading-snug text-black/90 sm:text-xl">{value.text}</p>
    </div>
  );
}