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
import TrustedBy from "./(landing)/TrustedBy";
import TrustedPartner from "./(landing)/TrustedPartner";
import BenefitsSection from "./(landing)/BenefitsSection";
import IndustrySection from "./(landing)/IndustrySection";
import AboutSection from "./(landing)/AboutSection";
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

 <section
  ref={sectionRef}
  className="relative"
  style={{ height: "260vh" }}
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
      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 pt-24 md:pt-28 pb-10 text-center will-change-[opacity,filter]"
      style={{ opacity: textOpacity, filter: `blur(${textBlur}px)` }}
    >
      <h1 className="leading-[1.15] tracking-tight space-y-1 text-black">
        <span className="block text-[clamp(2.25rem,6.5vw,6.5rem)] font-semibold">
          SOFTWARE DEVELOPMENT
        </span>
        <span className="block text-[clamp(2.25rem,6.5vw,6.5rem)] italic font-serif">
          COMPANY{" "}
          <span
            ref={slotRef}
            className="inline-block align-middle"
            style={{ width: slotSize, height: slotSize }}
          />{" "}
          OFFERING
        </span>
        <span className="block text-[clamp(2.25rem,6.5vw,6.5rem)] italic font-serif">
          WEB, MOBILE & AI
        </span>
        <span className="block text-[clamp(2.25rem,6.5vw,6.5rem)] font-semibold">
          DEVELOPMENT SERVICES
        </span>
      </h1>

      <div className="mt-6 w-full flex justify-center px-85 md:px-95">
        <div
          className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-md px-6 py-8 md:px-10 md:py-10 text-left animate-fade-up"
          style={{ 
            animationDelay: "0.3s",
            maxWidth: "calc(100% - 48px)",
            width: "auto",
            minWidth: "min(80%, 800px)",
          }}
        >
          {/* Eyebrow label */}
         

          {/* Primary description - INCREASED TEXT SIZE & DARKER COLOR */}
          <p className="text-[16px] md:text-[18px] leading-relaxed text-black/90 font-light">
            Clickmasters is a software development company USA businesses
            trust to design, build, and grow their software. We work as a
            hands-on software development agency and help startups, growing
            businesses, and large companies across the United States turn
            their ideas into secure, easy-to-use digital products. Our team
            offers custom software development services and enterprise
            software development, along with web development, mobile app
            development, UI/UX design, and AI software development services.
          </p>

          {/* Accent callout line - INCREASED TEXT SIZE & DARKER COLOR */}
          <div className="mt-6 flex items-start gap-3 border-t border-black/10 pt-6">
            <span className="mt-1 h-8 w-[2px] bg-black/60 shrink-0" />
            <p className="italic text-[16px] md:text-[18px] leading-relaxed text-black/95 font-light">
              Need a software development firm to build something new? Or a
              software development company to upgrade an old system? Either
              way, Clickmasters delivers real results, on time and within
              budget.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      className="fixed inset-0 z-0 will-change-[clip-path,transform]"
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
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs uppercase tracking-[0.3em] text-black"
      style={{ opacity: 1 - eased }}
    >
      Scroll ↓
    </div>
  </div>
</section>
      <AboutSection />
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
      <Footer />
    </div>
  );
}
