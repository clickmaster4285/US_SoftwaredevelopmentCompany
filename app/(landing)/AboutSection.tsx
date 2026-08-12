"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Users, Award, Zap } from "lucide-react";

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

function CountStat({ value, start }: { value: string; start: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    if (!match || !start) return;
    const target = parseInt(match[1], 10);
    const duration = 1100;
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

export default function AboutSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stats = statsRef.current;
    if (!stats) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(stats);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-5 py-24 md:px-10 md:py-32">
      <style>{`
        @keyframes ab-rise-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        @keyframes ab-blob-c {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,30px) scale(0.9); }
        }
        @keyframes ab-image-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
        }
        @keyframes ab-count-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ab-badge-pop {
          0% { opacity: 0; transform: translateY(10px) scale(0.85); }
          60% { opacity: 1; transform: translateY(-1px) scale(1.04); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ab-chip-pop {
          0% { opacity: 0; transform: translateY(14px) scale(0.7); }
          55% { opacity: 1; transform: translateY(-2px) scale(1.06); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ab-corner-draw {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes ab-shine-sweep {
          0% { transform: translateX(-130%) skewX(-15deg); }
          100% { transform: translateX(230%) skewX(-15deg); }
        }

        .ab-rise { animation: ab-rise-in 0.7s cubic-bezier(.22,1,.36,1) both; }
        .ab-underline { transform-origin: left; animation: ab-underline 0.6s cubic-bezier(.22,1,.36,1) both; }
        .ab-blob-a { animation: ab-blob-a 18s ease-in-out infinite; }
        .ab-blob-b { animation: ab-blob-b 22s ease-in-out infinite; }
        .ab-blob-c { animation: ab-blob-c 26s ease-in-out infinite; }
        .ab-image-float { animation: ab-image-float 6s ease-in-out infinite; }
        .ab-count-up { animation: ab-count-up 0.6s cubic-bezier(.22,1,.36,1) both; }
        .ab-badge-pop { animation: ab-badge-pop 0.55s cubic-bezier(.24,1.4,.5,1) both; }
        .ab-chip-pop { animation: ab-chip-pop 0.7s cubic-bezier(.24,1.4,.5,1) both; }
        .ab-corner-draw { animation: ab-corner-draw 0.6s ease both; }

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

        @media (prefers-reduced-motion: reduce) {
          .ab-rise, .ab-underline, .ab-blob-a, .ab-blob-b, .ab-blob-c, .ab-image-float,
          .ab-count-up, .ab-badge-pop, .ab-chip-pop, .ab-corner-draw, .ab-shine-btn::after {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Background: aurora blobs + dot-grid texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ab-blob-a absolute -left-20 -top-10 h-[420px] w-[420px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #e05b35, transparent 70%)", filter: "blur(95px)" }}
        />
        <div
          className="ab-blob-b absolute right-0 top-1/4 h-[380px] w-[380px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #e05b35, transparent 70%)", filter: "blur(95px)" }}
        />
        <div
          className="ab-blob-c absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #171717, transparent 70%)", filter: "blur(90px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-black/40">
            <span
              className={`inline-block h-px w-8 bg-black/20 ab-underline ${inView ? "" : "opacity-0"}`}
            />
            About Clickmasters
            <span
              className={`inline-block h-px w-8 bg-black/20 ab-underline ${inView ? "" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            />
          </p>
          <h2
            className={`text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-[#171717] ${
              inView ? "ab-rise" : "opacity-0"
            }`}
          >
            We're a Software Development & Design Studio Built for{" "}
            <span className="font-serif italic">Modern Businesses</span>
          </h2>
          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg ${
              inView ? "ab-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Clickmasters is a full-stack software development company based in the USA, helping
            startups and growing businesses turn ideas into products that work and look like they
            mean it.
          </p>
        </div>

        {/* Stats Bar */}
        <div ref={statsRef} className="mb-16 border-y border-black/5 py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${statsInView ? "ab-count-up" : "opacity-0"}`}
                style={{ animationDelay: statsInView ? `${i * 0.12}s` : undefined }}
              >
                <div className="text-3xl font-bold tabular-nums text-[#e05b35] md:text-4xl">
                  <CountStat value={stat.number} start={statsInView} />
                </div>
                <div
                  className="ab-underline mx-auto mt-2 h-[2px] w-8 bg-[#e05b35]/40"
                  style={{ animationDelay: statsInView ? `${0.2 + i * 0.12}s` : undefined }}
                />
                <div className="mt-2 text-sm text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text Content */}
          <div>
            <div className={`${inView ? "ab-rise" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#171717] md:text-3xl">
                The alternative to freelancer chaos and agency bloat
              </h3>
              <p className="text-base leading-relaxed text-black/70">
                Most software agencies make you choose: work with a cheap freelancer and manage the
                chaos yourself, or pay enterprise rates to a big agency and wait months for a
                junior-heavy team to "ramp up." We built Clickmasters as the alternative a senior,
                full-stack studio that moves at startup speed without cutting corners on code quality
                or design craft.
              </p>
            </div>
            <div className={`mt-6 ${inView ? "ab-rise" : "opacity-0"}`} style={{ animationDelay: "0.25s" }}>
              <p className="text-base leading-relaxed text-black/70">
                Since then, we've shipped{" "}
                <strong className="font-semibold text-[#e05b35]">200+ projects</strong> across
                automotive, retail tech, fintech, and e-commerce from MVPs launched in{" "}
                <strong className="font-semibold text-[#e05b35]">4–6 weeks</strong> to enterprise
                platforms built to scale past a million users.
              </p>
            </div>

            {/* Trust Badges each pops in individually */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {trustBadges.slice(0, 4).map((badge, i) => (
                <div
                  key={badge.label}
                  className={`group flex items-center gap-3 rounded-lg p-1 transition-colors duration-300 hover:bg-[#e05b35]/[0.04] ${
                    inView ? "ab-badge-pop" : "opacity-0"
                  }`}
                  style={{ animationDelay: inView ? `${0.4 + i * 0.1}s` : undefined }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e05b35]/10 transition-transform duration-300 group-hover:scale-110">
                    <badge.icon className="h-4 w-4 text-[#e05b35]" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold">{badge.label}</div>
                    <div className="text-[10px] text-black/50">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`mt-8 ${inView ? "ab-rise" : "opacity-0"}`} style={{ animationDelay: "0.75s" }}>
              <Link
                href="/about"
                className="ab-shine-btn inline-flex items-center gap-2 rounded-full bg-[#e05b35] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c94d2a]"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className={`relative ${inView ? "ab-rise" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="ab-image-float relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/assets/why.png"
                alt="Clickmasters team - Software Development Company"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#e05b35]/10 via-transparent to-transparent" />
              <div
                className={`absolute -bottom-3 -right-3 h-24 w-24 rounded-br-2xl border-b-4 border-r-4 border-[#e05b35]/30 ab-corner-draw ${
                  inView ? "" : "opacity-0"
                }`}
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className={`absolute -left-3 -top-3 h-24 w-24 rounded-tl-2xl border-l-4 border-t-4 border-[#e05b35]/30 ab-corner-draw ${
                  inView ? "" : "opacity-0"
                }`}
                style={{ animationDelay: "0.6s" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className={`absolute -bottom-4 -right-4 flex items-center gap-3 rounded-full border border-black/5 bg-white px-5 py-3 shadow-xl ${
                inView ? "ab-chip-pop" : "opacity-0"
              }`}
              style={{ animationDelay: "0.85s" }}
            >
              <span className="flex h-3 w-3 animate-pulse rounded-full bg-[#e05b35]" />
              <span className="text-sm font-semibold text-[#171717]">8+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}