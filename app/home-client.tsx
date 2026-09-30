"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import TrustedBy from "./(landing)/TrustedBy";
import TrustedPartner from "./(landing)/TrustedPartner";
import BenefitsSection from "./(landing)/BenefitsSection";
import IndustrySection from "./(landing)/IndustrySection";
import { FaqSection } from "./(landing)/FaqSection";
const heroVideo = "/hero-video.mp4";

export default function HomePage() {
  const sectionRef = useRef<HTMLElement>(null);
  const slotRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);
  const [slot, setSlot] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const slotSize = "0.75em";

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const total = section.offsetHeight - window.innerHeight;
      setProgress(Math.min(1, Math.max(0, -section.getBoundingClientRect().top / total)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const measureSlot = () => {
      const element = slotRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      setSlot({ x: rect.left, y: rect.top, w: rect.width, h: rect.height });
    };

    measureSlot();
    window.addEventListener("resize", measureSlot);
    window.addEventListener("scroll", measureSlot, { passive: true });
    return () => {
      window.removeEventListener("resize", measureSlot);
      window.removeEventListener("scroll", measureSlot);
    };
  }, []);

  const eased =
    progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  const vw = typeof window !== "undefined" ? window.innerWidth : 1920;
  const vh = typeof window !== "undefined" ? window.innerHeight : 1080;
  const expansion = eased;
  const sx = slot.x;
  const sy = slot.y;
  const sw = slot.w || 80;
  const sh = slot.h || 80;
  const top = sy * (1 - expansion);
  const right = (vw - (sx + sw)) * (1 - expansion);
  const bottom = (vh - (sy + sh)) * (1 - expansion);
  const left = sx * (1 - expansion);
  const radius = 12 * (1 - expansion);

  return (
    <div className="bg-background text-foreground">
      <Navbar />


<section
  ref={sectionRef}
  className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20 h-[200vh] sm:h-[230vh] md:h-[260vh]"
>
  <style>{`
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-up {
      animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  `}</style>

  <div
    className="sticky top-0 h-screen w-screen overflow-hidden"
    style={{ perspective: "1200px" }}
  >
    <div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 pt-2 sm:pt-4 md:pt-6 pb-6 sm:pb-10 text-center will-change-[opacity,filter]"
      style={{
        opacity: 1 - expansion,
        filter: `blur(${expansion * 8}px)`,
        pointerEvents: expansion > 0.95 ? "none" : "auto",
      }}
    >
      <h1 className="leading-[1.15] tracking-tight space-y-1 text-black">
        <span className="block text-[clamp(1.75rem,7.5vw,6.5rem)] font-semibold">
          SOFTWARE DEVELOPMENT
        </span>

        {/* Line 1: COMPANY [VIDEO] OFFERING */}
        <span className="block text-[clamp(1.75rem,7.5vw,6.5rem)] italic font-serif">
          COMPANY{" "}
          <span
            ref={slotRef}
            className="relative inline-block h-[0.75em] w-[0.75em] overflow-hidden align-middle rounded-2xl"
            style={{ width: slotSize, height: slotSize }}
          />{" "}
          OFFERING
        </span>

        {/* Line 2: WEB, MOBILE & AI - MOVED TO SEPARATE LINE */}
        <span className="block text-[clamp(1.75rem,7.5vw,6.5rem)] italic font-serif">
          WEB, MOBILE & AI
        </span>

        <span className="block text-[clamp(1.75rem,7.5vw,6.5rem)] font-semibold">
          DEVELOPMENT SERVICE
        </span>
      </h1>

      {/* Description - now in centered animated cards, aligned with heading */}
      <div className="mt-6 sm:mt-8 w-full flex justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-4 sm:gap-5">

          {/* Card 1 - Main description */}
          <div
            className="group relative rounded-3xl p-[1px] animate-fade-up transition-transform duration-500 hover:-translate-y-1"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black/10 via-black/20 to-black/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Actual card content */}
            <div className="relative rounded-3xl border border-black/10 bg-white/60 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-9 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_45px_rgba(0,0,0,0.12)] transition-shadow duration-500">
              <p className="text-sm sm:text-base md:text-[18px] leading-relaxed text-black/90 font-light">
                Clickmasters is a software development company USA businesses
                trust to design, build, and grow their software. We work as a
                hands-on software development agency and help startups, growing
                businesses, and large companies across the United States turn
                their ideas into secure, easy-to-use digital products. Our team
                offers custom software development services and enterprise
                software development, along with web development, mobile app
                development, UI/UX design, and AI software development services.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div
      className="fixed inset-0 z-0 will-change-[clip-path,transform]"
      style={{
        transform: `translateZ(${expansion * 120}px) rotateX(${(1 - expansion) * 6}deg)`,
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
  </div>
</section>
      <TrustedBy />  
      <TrustedPartner/>   
      <DominateSection />
      <StudioPath />
      <LogoMarquee />
      <ComparisonSection />
      <IndustrySection/>
      <AwardsSection />
      <AudienceCarousel />
      <ProjectsStack />
      <BenefitsSection/>
      <Testimonials3DRoom />  
      <SpaceJourney />
      <FaqSection />
      <Footer />
    </div>
  );
}
