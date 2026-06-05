"use client";

import { useEffect, useRef, useState } from "react";
import ProjectsStack from "@/app/(landing)/ProjectsStack";
import DominateSection from "@/app/(landing)/DominateSection";
import ComparisonSection from "@/app/(landing)/ComparisonSection";
import AwardsSection from "@/app/(landing)/AwardsSection";
import AudienceCarousel from "@/app/(landing)/AudienceCarousel";
import LogoMarquee from "@/app/(landing)/LogoMarquee";
import Testimonials3DRoom from "@/app/(landing)/Testimonials3DRoom";
import StudioPath from "@/app/(landing)/StudioPath";
import SpaceJourney from "@/app/(landing)/SpaceJourney";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const heroVideo = "/hero-video.mp4";

export default function HomePage() {
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

  const eased =
    progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  const slotSize = "0.75em";
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

  const rotateX = (1 - eased) * 6;
  const translateZ = eased * 120;

  const textOpacity = 1 - Math.min(1, eased * 1.4);
  const textBlur = eased * 8;

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <section ref={sectionRef} className="relative" style={{ height: "260vh" }}>
        <div
          className="sticky top-0 h-screen w-screen overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center will-change-[opacity,filter]"
            style={{ opacity: textOpacity, filter: `blur(${textBlur}px)` }}
          >
            <h1 className="leading-[0.95] tracking-tight">
              <span className="block text-[clamp(3rem,9vw,9rem)] font-semibold">
                BEYOND
              </span>
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

          <div
            className="absolute bottom-10 right-10 text-right text-sm md:text-base"
            style={{ opacity: textOpacity }}
          >
            <p>Helping brands and startups drive value</p>
            <p className="italic">through creatively functional design</p>
          </div>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em]"
            style={{ opacity: 1 - eased }}
          >
            Scroll ↓
          </div>
        </div>
      </section>

      <ProjectsStack />
      <DominateSection />
      <ComparisonSection />
      <AwardsSection />
      <AudienceCarousel />
      <LogoMarquee />
      <Testimonials3DRoom />
      <StudioPath />
      <SpaceJourney />
      <Footer />
    </div>
  );
}
