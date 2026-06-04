"use client";

import { useEffect, useRef, useState } from 'react';
import projectNorton from '@/assets/project-norton.jpg';
import projectLumen from '@/assets/project-lumen.jpg';
import projectNorthwind from '@/assets/project-northwind.jpg';
import projectAtelier from '@/assets/project-atelier.jpg';
import audienceAgencies from '@/assets/audience-agencies.jpg';
const heroVideo = '/hero-video.mp4';
const dominateVideo = '/dominate-video.mp4';
import audienceCreators from '@/assets/audience-creators.jpg';
import audienceMarketing from '@/assets/audience-marketing.jpg';
import AwardsSection from '@/components/AwardsSection';
import Testimonials3DRoom from '@/components/Testimonials3DRoom';
import SpaceJourney from '@/components/SpaceJourney';
import StudioPath from '@/components/StudioPath';
import SideNavbar from '@/components/SideNavbar';
import Footer from '@/components/Footer';

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
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);

      return () => {
         window.removeEventListener('scroll', onScroll);
         window.removeEventListener('resize', onScroll);
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
      window.addEventListener('resize', measure);
      const t = setTimeout(measure, 100);
      return () => {
         window.removeEventListener('resize', measure);
         clearTimeout(t);
      };
   }, []);

   const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
   const slotSize = '0.75em';
   const vw = typeof window !== 'undefined' ? window.innerWidth : 1920;
   const vh = typeof window !== 'undefined' ? window.innerHeight : 1080;
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
         <SideNavbar />

         <section ref={sectionRef} className="relative" style={{ height: '260vh' }}>
            <div className="sticky top-0 h-screen w-screen overflow-hidden" style={{ perspective: '1200px' }}>
               <div
                  className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center will-change-[opacity,filter]"
                  style={{ opacity: textOpacity, filter: `blur(${textBlur}px)` }}
               >
                  <h1 className="leading-[0.95] tracking-tight">
                     <span className="block text-[clamp(3rem,9vw,9rem)] font-semibold">BEYOND</span>
                     <span className="block text-[clamp(3rem,9vw,9rem)] italic font-serif">
                        THE{' '}
                        <span ref={slotRef} className="inline-block align-middle" style={{ width: slotSize, height: slotSize }} />{' '}
                        ORDINARY
                     </span>
                     <span className="block text-[clamp(3rem,9vw,9rem)] italic font-serif">BRANDING & UI UX</span>
                     <span className="block text-[clamp(3rem,9vw,9rem)] font-semibold">DESIGN AGENCY</span>
                  </h1>
               </div>

               <div
                  className="fixed inset-0 will-change-[clip-path,transform]"
                  style={{
                     transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
                     transformStyle: 'preserve-3d',
                     transformOrigin: 'center center',
                     clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`,
                     WebkitClipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`,
                  }}
               >
                  <video src={heroVideo} autoPlay muted loop playsInline className="h-full w-full object-cover" />
               </div>

               <div className="absolute bottom-10 right-10 text-right text-sm md:text-base" style={{ opacity: textOpacity }}>
                  <p>Helping brands and startups drive value</p>
                  <p className="italic">through creatively functional design</p>
               </div>

               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em]" style={{ opacity: 1 - eased }}>
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

const LOGOS_ROW_1 = [
   "masters' union",
   'airtel',
   'kotak',
   'NOISE',
   'Coca-Cola',
   'boAt',
   'DAT',
   'SWVL',
];
const LOGOS_ROW_2 = [
   'NUEGO',
   'ROYAL ENFIELD',
   'HBK',
   'ITC Limited',
   'RBL BANK',
   'GreyOrange',
   'Apollo 24|7',
   'DECATHLON',
];
const LOGOS_ROW_3 = [
   'TVS',
   'Qubo',
   'HT Media',
   'HEALTHKART',
   'HDFC securities',
   'DAT',
   'SWVL',
   'THERMAX',
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
   direction: 'left' | 'right';
}) {
   const repeated = [...items, ...items, ...items];
   return (
      <div className="relative py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
         <div
            className="flex gap-16 md:gap-24 whitespace-nowrap will-change-transform w-max"
            style={{
               animationName: direction === 'left' ? 'marquee-left' : 'marquee-right',
               animationDuration: `${duration}s`,
               animationTimingFunction: 'linear',
               animationIterationCount: 'infinite',
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

function ProjectsStack() {
   return (
      <section className="relative pt-20 pb-32 overflow-hidden">
         <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
               {[
                  { title: 'Norton', image: projectNorton, text: 'Creative campaign with precision UX.' },
                  { title: 'Lumen', image: projectLumen, text: 'Modern product design for scale.' },
                  { title: 'Northwind', image: projectNorthwind, text: 'High-converting brand experience.' },
                  { title: 'Atelier', image: projectAtelier, text: 'Luxury digital storytelling.' },
               ].map((project) => (
                  <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-border bg-card p-6 transition-all hover:-translate-y-1">
                     <img src={resolveMediaSrc(project.image)} alt={project.title} className="h-72 w-full object-cover rounded-[1.5rem]" />
                     <div className="mt-6">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.text}</p>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

function DominateSection() {
   return (
      <section className="bg-[oklch(0.98_0.005_170)] py-24 md:py-32">
         <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div className="space-y-6">
               <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Everything you need</p>
               <h2 className="text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">Your brand, built for momentum.</h2>
               <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  We build immersive digital experiences that feel premium while keeping product goals centered.
               </p>
            </div>
            <div className="mt-12 lg:mt-0 rounded-[2rem] overflow-hidden border border-border bg-black/10">
               <video src={dominateVideo} autoPlay muted loop playsInline className="h-full w-full object-cover" />
            </div>
         </div>
      </section>
   );
}

function ComparisonSection() {
   return (
      <section className="py-24 md:py-32">
         <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Why choose us</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">A simple framework for better products.</h2>
         </div>
         <div className="mx-auto mt-16 grid gap-6 px-6 md:grid-cols-2 lg:max-w-6xl">
            <div className="rounded-[2rem] border border-border bg-card p-8">
               <h3 className="text-xl font-semibold">Built for growth</h3>
               <p className="mt-4 text-muted-foreground">Design with performance, accessibility, and measurable business results in mind.</p>
            </div>
            <div className="rounded-[2rem] border border-border bg-card p-8">
               <h3 className="text-xl font-semibold">Creative, not chaotic</h3>
               <p className="mt-4 text-muted-foreground">A structured process keeps every idea aligned with your goals.</p>
            </div>
         </div>
      </section>
   );
}

function AudienceCarousel() {
   return (
      <section className="py-24 md:py-32">
         <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Who it's for</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">Brands, agencies, and founders who want better digital work.</h2>
         </div>
         <div className="mt-16 grid gap-6 md:grid-cols-3 px-6">
            {[
               { title: 'Agencies', image: audienceAgencies },
               { title: 'Creators', image: audienceCreators },
               { title: 'Marketers', image: audienceMarketing },
            ].map((audience) => (
               <div key={audience.title} className="rounded-[2rem] border border-border overflow-hidden bg-card">
                  <img src={resolveMediaSrc(audience.image)} alt={audience.title} className="h-64 w-full object-cover" />
                  <div className="p-6">
                     <h3 className="text-xl font-semibold">{audience.title}</h3>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

function resolveMediaSrc(image: string | { src: string }) {
   return typeof image === 'string' ? image : image.src;
}
