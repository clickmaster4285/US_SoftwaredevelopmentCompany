import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import astronaut from "@/public/assets/space-astronaut.png";
import planet1 from "@/public/assets/space-planet-1.png";
import planet2 from "@/public/assets/space-planet-2.png";

gsap.registerPlugin(ScrollTrigger);

type Chapter = {
  ref: React.RefObject<HTMLDivElement | null>;
  kicker: string;
  title: React.ReactNode;
  sub: string;
};

export default function SpaceJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const astroRef = useRef<HTMLImageElement>(null);
  const astroWrapRef = useRef<HTMLDivElement>(null);
  const planet1Ref = useRef<HTMLImageElement>(null);
  const planet2Ref = useRef<HTMLImageElement>(null);
  const starsNearRef = useRef<HTMLDivElement>(null);
  const starsMidRef = useRef<HTMLDivElement>(null);
  const starsFarRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // intro
  const introRef = useRef<HTMLDivElement>(null);
  const introBgRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const introCopyRef = useRef<HTMLDivElement>(null);
  const introBlobRef = useRef<HTMLDivElement>(null);

  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null);
  const c4 = useRef<HTMLDivElement>(null);

  const chapters: Chapter[] = [
    { ref: c1, kicker: "01 — Discovery", title: <>Ideas, <span className="italic font-serif">engineered</span></>, sub: "We turn ambitious product ideas into clear, buildable roadmaps." },
    { ref: c2, kicker: "02 — Design", title: <>Interfaces that <span className="italic font-serif">feel right</span></>, sub: "Pixel-precise UI/UX crafted around real users, not assumptions." },
    { ref: c3, kicker: "03 — Engineering", title: <>Code built to <span className="italic font-serif">scale</span></>, sub: "Web, mobile and cloud systems shipped clean, fast and tested." },
    { ref: c4, kicker: "04 — Launch", title: <>From beta to <span className="italic font-serif">millions</span></>, sub: "We deploy, monitor and iterate so your product keeps growing." },
  ];

  const starsNear = useMemo(() => Array.from({ length: 80 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, s: 1 + Math.random() * 2.5 })), []);
  const starsMid = useMemo(() => Array.from({ length: 140 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, s: 0.8 + Math.random() * 1.6 })), []);
  const starsFar = useMemo(() => Array.from({ length: 200 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, s: 0.4 + Math.random() * 1 })), []);
  const rings = useMemo(() => Array.from({ length: 14 }), []);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      // World starts hidden behind the intro
      gsap.set(astroWrapRef.current, { xPercent: -50, yPercent: -50, left: "50%", top: "82%", scale: 0.5, rotate: 0 });
      gsap.set(planet1Ref.current, { xPercent: -50, yPercent: -50, left: "130%", top: "55%", scale: 0.55, opacity: 0, rotate: -15 });
      gsap.set(planet2Ref.current, { xPercent: -50, yPercent: -50, left: "-30%", top: "40%", scale: 0.5, opacity: 0, rotate: 10 });
      gsap.set(skyRef.current, { background: "linear-gradient(180deg, oklch(0.30 0.03 250) 0%, oklch(0.18 0.02 250) 100%)", opacity: 0 });
      gsap.set([starsFarRef.current, starsMidRef.current, starsNearRef.current], { opacity: 0 });
      gsap.set(nebulaRef.current, { opacity: 0, scale: 1 });
      gsap.set(ringsRef.current, { opacity: 0 });
      gsap.set(ctaRef.current, { opacity: 0, y: 60, scale: 0.9 });
      gsap.set(worldRef.current, { transformPerspective: 1200, transformStyle: "preserve-3d", opacity: 0 });

      // Intro visible at start
      gsap.set(introRef.current, { opacity: 1 });
      gsap.set(tabletRef.current, { scale: 1, rotate: 0, transformOrigin: "center center" });
      gsap.set(introCopyRef.current, { opacity: 1, x: 0 });
      gsap.set(introBlobRef.current, { opacity: 1, rotate: 0 });

      chapters.forEach((c) => gsap.set(c.ref.current, { opacity: 0, y: 40 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=750%",
          scrub: 1,
          pin: stage,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      // SCENE 0 — Intro: tablet zooms toward camera, copy slides away, fade into world
      tl.to(introCopyRef.current, { opacity: 0, x: 120, duration: 0.5 }, 0)
        .to(introBlobRef.current, { opacity: 0, rotate: 80, duration: 0.5 }, 0)
        .to(tabletRef.current, { scale: 6, rotate: -2, duration: 1, ease: "power2.in" }, 0)
        .to(introBgRef.current, { opacity: 0, duration: 0.6 }, 0.4)
        .to(worldRef.current, { opacity: 1, duration: 0.6 }, 0.5)
        .to(skyRef.current, { opacity: 1, duration: 0.6 }, 0.5)
        .to(introRef.current, { opacity: 0, duration: 0.3 }, 0.8)
        .fromTo(c1.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 0.85);

      // SCENE 1 — Discovery: leave the ground, stars emerge
      tl.to(skyRef.current, { background: "linear-gradient(180deg, oklch(0.18 0.02 250) 0%, oklch(0.08 0.01 250) 100%)", duration: 1 }, 1)
        .to(groundRef.current, { y: 700, opacity: 0, duration: 1, ease: "power2.in" }, 1)
        .to(astroWrapRef.current, { top: "55%", scale: 0.85, rotate: -6, duration: 1, ease: "power2.out" }, 1)
        .to(starsFarRef.current, { opacity: 1, duration: 1 }, 1.3)
        .to(starsMidRef.current, { opacity: 1, duration: 1 }, 1.4)
        .to(starsNearRef.current, { opacity: 1, duration: 1 }, 1.5)
        .to(ringsRef.current, { opacity: 0.6, duration: 0.6 }, 1.6)
        .to(c1.current, { opacity: 0, y: -40, duration: 0.4 }, 1.7)
        .fromTo(c2.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 1.85);

      // SCENE 2 — Design: subtle tilt, blueprint grid feel, robot fills frame
      tl.to(worldRef.current, { rotateZ: 2, duration: 1 }, 2)
        .to(astroWrapRef.current, { scale: 1.4, top: "52%", rotate: -10, duration: 1, ease: "power2.inOut" }, 2)
        .to(ringsRef.current, { scale: 4, opacity: 0.25, duration: 1, ease: "power1.in" }, 2)
        .to([starsNearRef.current, starsMidRef.current], { scale: 1.6, y: -100, duration: 1 }, 2)
        .to(nebulaRef.current, { opacity: 0.25, scale: 1.3, duration: 1 }, 2)
        .to(planet1Ref.current, { left: "78%", top: "40%", scale: 0.95, opacity: 0.9, duration: 1, ease: "power1.out" }, 2.2)
        .to(c2.current, { opacity: 0, y: -40, duration: 0.4 }, 2.7)
        .fromTo(c3.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 2.85);

      // SCENE 3 — Engineering: drift past a quiet structure, robot off-center working
      tl.to(worldRef.current, { rotateZ: -1.5, duration: 1 }, 3)
        .to(skyRef.current, { background: "linear-gradient(180deg, oklch(0.14 0.015 240) 0%, oklch(0.06 0.01 250) 100%)", duration: 1 }, 3)
        .to(planet1Ref.current, { left: "-25%", top: "22%", scale: 0.6, opacity: 0, duration: 1 }, 3)
        .to(planet2Ref.current, { left: "62%", top: "52%", scale: 1.3, opacity: 0.85, rotate: -8, duration: 1 }, 3)
        .to(astroWrapRef.current, { left: "30%", top: "58%", scale: 0.9, rotate: 14, duration: 1 }, 3)
        .to([starsNearRef.current, starsMidRef.current, starsFarRef.current], { y: -240, duration: 1 }, 3)
        .to(c3.current, { opacity: 0, y: -40, duration: 0.4 }, 3.7)
        .fromTo(c4.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 3.85);

      // SCENE 4 — Launch: zoom forward into deep field
      tl.to(worldRef.current, { rotateZ: 0, duration: 1 }, 4)
        .to(planet2Ref.current, { left: "140%", top: "70%", scale: 0.5, opacity: 0, duration: 1 }, 4)
        .to(skyRef.current, { background: "radial-gradient(circle at 50% 50%, oklch(0.20 0.02 250) 0%, oklch(0.05 0.01 250) 75%)", duration: 1 }, 4)
        .to(astroWrapRef.current, { left: "50%", top: "55%", scale: 2.4, rotate: 0, duration: 1, ease: "power2.in" }, 4)
        .to([starsNearRef.current, starsMidRef.current, starsFarRef.current], { scale: 2.6, y: -460, opacity: 0.5, duration: 1 }, 4)
        .to(ringsRef.current, { scale: 10, opacity: 0, duration: 1 }, 4)
        .to(vignetteRef.current, { opacity: 1, duration: 1 }, 4.3);

      // SCENE 5 — Landing CTA (5 → 6)
      tl.to(astroWrapRef.current, { scale: 1.1, top: "30%", left: "50%", duration: 1, ease: "power2.out" }, 5)
        .to(c4.current, { opacity: 0, y: -40, duration: 0.4 }, 5)
        .to(ctaRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, 5.2);

      // ambient
      gsap.to(astroWrapRef.current, { y: "+=22", duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(planet1Ref.current, { rotate: "+=360", duration: 60, ease: "none", repeat: -1 });
      gsap.to(planet2Ref.current, { rotate: "-=360", duration: 80, ease: "none", repeat: -1 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height: "850vh" }} aria-label="Cinematic journey to Let's Work Together">
      <div ref={stageRef} className="relative h-screen w-full overflow-hidden text-white">
        {/* Sky (world bg) */}
        <div ref={skyRef} className="absolute inset-0" />

        {/* Nebula */}
        <div
          ref={nebulaRef}
          aria-hidden
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{
            background:
              "radial-gradient(50% 50% at 25% 35%, oklch(0.40 0.04 250 / 0.45), transparent 70%), radial-gradient(45% 45% at 78% 65%, oklch(0.35 0.03 240 / 0.40), transparent 70%)",
          }}
        />

        {/* 3D world wrapper */}
        <div ref={worldRef} className="absolute inset-0">
          <div ref={starsFarRef} className="absolute inset-0 pointer-events-none">
            {starsFar.map((s, i) => (
              <span key={i} className="absolute rounded-full bg-white" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, opacity: 0.4 }} />
            ))}
          </div>
          <div ref={starsMidRef} className="absolute inset-0 pointer-events-none">
            {starsMid.map((s, i) => (
              <span key={i} className="absolute rounded-full bg-white" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, opacity: 0.7 }} />
            ))}
          </div>
          <div ref={starsNearRef} className="absolute inset-0 pointer-events-none">
            {starsNear.map((s, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s * 1.6, height: s.s * 1.6, boxShadow: "0 0 8px rgba(255,255,255,0.9)" }}
              />
            ))}
          </div>

          <div ref={ringsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {rings.map((_, i) => {
              const size = 80 + i * 90;
              return (
                <span
                  key={i}
                  className="absolute rounded-full border"
                  style={{
                    width: size,
                    height: size,
                    borderColor: `rgba(255,255,255,${0.05 + (1 - i / rings.length) * 0.18})`,
                  }}
                />
              );
            })}
          </div>

          <div
            ref={groundRef}
            className="absolute inset-x-0 bottom-0 h-[28vh]"
            style={{
              background: "linear-gradient(180deg, oklch(0.32 0.04 80) 0%, oklch(0.16 0.03 60) 100%)",
              boxShadow: "inset 0 30px 60px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{ background: "repeating-linear-gradient(90deg, transparent 0 60px, rgba(255,255,255,0.06) 60px 62px)" }}
            />
          </div>

          <img
            ref={planet1Ref}
            src={planet1.src}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute w-[42vw] max-w-[640px] will-change-transform pointer-events-none"
            style={{ filter: "drop-shadow(0 0 60px oklch(0.40 0.03 250 / 0.55))" }}
          />
          <img
            ref={planet2Ref}
            src={planet2.src}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute w-[48vw] max-w-[720px] will-change-transform pointer-events-none"
            style={{ filter: "drop-shadow(0 0 70px oklch(0.45 0.02 240 / 0.5))" }}
          />

          <div ref={astroWrapRef} className="absolute will-change-transform pointer-events-none">
            <img
              ref={astroRef}
              src={astronaut.src}
              alt="Robot astronaut floating through space"
              loading="lazy"
              className="w-[28vw] max-w-[420px]"
              style={{ filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 30px oklch(0.55 0.02 240 / 0.35))" }}
            />
          </div>
        </div>

        {/* Vignette */}
        <div
          ref={vignetteRef}
          className="absolute inset-0 pointer-events-none opacity-0"
          style={{ background: "radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 90%)" }}
        />

        {/* INTRO — sits above the world until the first scroll burst */}
        <div ref={introRef} className="absolute inset-0 z-20">
          <div
            ref={introBgRef}
            className="absolute inset-0"
            style={{ background: "oklch(0.97 0.01 280)" }}
          />
          {/* Decorative arc / blob */}
          <div
            ref={introBlobRef}
            aria-hidden
            className="absolute -right-24 -top-10 w-[520px] h-[520px] rounded-full border-[36px] pointer-events-none"
            style={{ borderColor: "oklch(0.88 0.12 190)", borderRightColor: "transparent", borderBottomColor: "transparent" }}
          />

          <div className="relative h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 md:px-16 max-w-7xl mx-auto">
            {/* Tablet */}
            <div className="flex items-center justify-center">
              <div
                ref={tabletRef}
                className="relative w-[78vw] max-w-[640px] aspect-[4/3] rounded-[36px] bg-neutral-900 p-3 shadow-2xl will-change-transform"
                style={{ boxShadow: "0 40px 120px -20px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.04)" }}
              >
                <div className="absolute inset-3 rounded-[26px] overflow-hidden bg-black">
                  <img
                    src={astronaut.src}
                    alt="Robot astronaut in space"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(120% 80% at 50% 100%, oklch(0.30 0.12 240 / 0.55), transparent 60%)" }}
                  />
                </div>
                {/* Camera dot */}
                <div className="absolute top-1/2 -translate-y-1/2 right-[10px] w-1.5 h-1.5 rounded-full bg-neutral-700" />
              </div>
            </div>

            {/* Copy */}
            <div ref={introCopyRef} className="text-neutral-900 max-w-md">
              <p>
                We do not chase trends or produce work that looks like everyone else. We focus on creating
                visually distinctive digital experiences that reflect your brand, engage your audience, and
                make people remember what they saw.
              </p>
              <p className="mt-6">
                Our process blends creative direction, 3D craft, and interactive development to build tailored
                digital journeys that feel original, polished, and built for impact.
              </p>
              <p className="mt-10 text-[10px] uppercase tracking-[0.5em] opacity-60">Scroll to enter</p>
            </div>
          </div>
        </div>

        {/* Chapter captions */}
        <div className="absolute inset-x-0 top-[14%] flex justify-center px-6 pointer-events-none z-10">
          {chapters.map((c, i) => (
            <div key={i} ref={c.ref} className={`text-center max-w-2xl ${i === 0 ? "" : "absolute"}`}>
              <p className="text-[10px] uppercase tracking-[0.5em] opacity-60 mb-3">{c.kicker}</p>
              <h2 className="text-[clamp(2rem,5.4vw,4.5rem)] font-semibold tracking-tight leading-[1.02]">{c.title}</h2>
              <p className="mt-4 text-sm md:text-base opacity-70 max-w-md mx-auto">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div ref={ctaRef} className="absolute inset-x-0 bottom-[12%] flex flex-col items-center px-6 text-center z-10">
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-60 mb-4">The mission</p>
          <h2 className="text-[clamp(2.5rem,7.5vw,6.5rem)] font-semibold tracking-tight leading-[0.95]">
            Let's work <span className="italic font-serif">together</span>
          </h2>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-sm uppercase tracking-[0.3em] font-medium hover:scale-105 transition-transform"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Progress rail */}
        <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-white/10 z-30">
          <div ref={progressRef} className="h-full origin-left bg-white/70" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
  );
}
