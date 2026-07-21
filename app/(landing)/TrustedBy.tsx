// components/TrustedBy.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Code2, Users, Award, Zap, Star } from "lucide-react";

const TRUST_REASONS = [
  {
    id: "projects",
    label: "Projects Delivered",
    value: 480,
    suffix: "+",
    icon: Code2,
    description: "From MVPs to enterprise platforms",
    bg: "#ffffff",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
  {
    id: "clients",
    label: "Happy Clients",
    value: 120,
    suffix: "+",
    icon: Users,
    description: "Across 15+ industries",
    bg: "#f5f5f5",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
  {
    id: "experience",
    label: "Years Combined Experience",
    value: 8,
    suffix: "+ yrs",
    icon: Award,
    description: "Deep full-stack expertise",
    bg: "#ffffff",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
  {
    id: "satisfaction",
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
    icon: Star,
    description: "Average project rating",
    bg: "#f5f5f5",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
];

const Counter = ({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default function TrustedBy() {
  return (
    <section className="py-24 md:py-32 bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[oklch(0.5_0.05_250)]">
            Trusted By Industry Leaders
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight text-[oklch(0.18_0.02_250)]">
            Built for teams that <span className="italic font-serif">ship</span>
          </h2>
          <p className="mt-5 text-sm md:text-base opacity-60 max-w-2xl mx-auto text-[oklch(0.18_0.02_250)]">
            Join 120+ companies that chose us for reliable, high-quality
            development
          </p>
        </div>

        {/* Counter Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative rounded-2xl border border-[oklch(0.7_0.02_250)]/20 bg-white p-6 md:p-8 transition-all duration-300 hover:border-[oklch(0.5_0.05_250)]/30 hover:shadow-xl hover:shadow-black/5"
                style={{
                  background: reason.bg,
                  color: reason.fg,
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.5_0.05_250)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors duration-300"
                    style={{
                      background: reason.accent,
                      color: reason.fg,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Counter */}
                  <div
                    className="text-4xl md:text-5xl font-bold tracking-tight"
                    style={{ color: reason.fg }}
                  >
                    <Counter
                      target={reason.value}
                      suffix={reason.suffix}
                      duration={2500}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="mt-3 text-sm font-medium"
                    style={{
                      color: reason.fg,
                      opacity: 0.9,
                    }}
                  >
                    {reason.label}
                  </p>

                  {/* Description */}
                  <p
                    className="mt-1.5 text-sm"
                    style={{
                      color: reason.fg,
                      opacity: 0.5,
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-sm opacity-60 text-[oklch(0.18_0.02_250)]">
            <CheckCircle className="w-4 h-4 text-[oklch(0.4_0.05_250)]" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-60 text-[oklch(0.18_0.02_250)]">
            <CheckCircle className="w-4 h-4 text-[oklch(0.4_0.05_250)]" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-60 text-[oklch(0.18_0.02_250)]">
            <CheckCircle className="w-4 h-4 text-[oklch(0.4_0.05_250)]" />
            <span>100+ 5-Star Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-60 text-[oklch(0.18_0.02_250)]">
            <CheckCircle className="w-4 h-4 text-[oklch(0.4_0.05_250)]" />
            <span>Next.js Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
