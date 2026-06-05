"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AWARD_CARDS, AWARD_WORD } from "@/app/(landing)/data";

gsap.registerPlugin(ScrollTrigger);

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      // Initial state: cards offscreen / hidden, letters dim
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const c = AWARD_CARDS[i];
        gsap.set(el, {
          xPercent: -50,
          yPercent: -50,
          x: c.fromX,
          y: c.fromY,
          rotate: c.fromRot,
          scale: 0.4,
          opacity: 0,
        });
      });
      letterRefs.current.forEach((el) => {
        if (el) gsap.set(el, { color: "#0a0c22" });
      });

      // Master timeline pinned, one segment per card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${AWARD_CARDS.length * 100}%`,
          scrub: 1,
          pin: pin,
          anticipatePin: 1,
        },
      });

      AWARD_CARDS.forEach((c, i) => {
        const card = cardRefs.current[i];
        const letter = letterRefs.current[i];
        if (!card) return;

        tl.to(
          card,
          {
            x: 0,
            y: 0,
            rotate: c.rot,
            scale: c.scale,
            opacity: 1,
            ease: "power3.out",
            duration: 1,
          },
          i,
        );
        if (letter) {
          tl.to(
            letter,
            { color: "#ffffff", duration: 0.6, ease: "power2.out" },
            i + 0.3,
          );
        }
      });

      // Continuous floating loop on top (additive via separate transforms)
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const float = el.querySelector<HTMLDivElement>(".card-float");
        if (!float) return;
        gsap.to(float, {
          y: 12 + (i % 3) * 6,
          rotate: i % 2 ? 2 : -2,
          duration: 3 + i * 0.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, section);

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const tick = () => {
      mouse.x += (target.x - mouse.x) * 0.06;
      mouse.y += (target.y - mouse.y) * 0.06;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = 0.3 + (i % 3) * 0.25;
        el.style.setProperty("--px", `${mouse.x * 30 * d}px`);
        el.style.setProperty("--py", `${mouse.y * 20 * d}px`);
      });
      raf = requestAnimationFrame(tick);
    };
    section.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#10122b] text-white"
      aria-label="Awards"
    >
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {/* Glow gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(99,102,241,0.15), transparent 70%), radial-gradient(40% 40% at 80% 20%, rgba(236,72,153,0.10), transparent 70%)",
          }}
        />

        {/* Massive background typography — letters fill one by one */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center select-none"
        >
          <div
            className="font-black tracking-tighter leading-none flex"
            style={{
              fontSize: "clamp(140px, 26vw, 480px)",
              letterSpacing: "-0.06em",
            }}
          >
            {AWARD_WORD.split("").map((ch, i) => (
              <span
                key={i}
                ref={(el) => {
                  letterRefs.current[i] = el;
                }}
                className="inline-block"
                style={{ color: "#0a0c22", transition: "none" }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Header copy */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 md:pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Recognition
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-medium leading-tight md:text-4xl">
            Award-winning work, recognized worldwide.
          </h2>
        </div>

        {/* Cards stage */}
        <div className="absolute inset-0">
          {AWARD_CARDS.map((c, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute will-change-transform"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                width: "clamp(110px, 12vw, 200px)",
                aspectRatio: "3 / 4",
                zIndex: 10 + i,
                translate: "var(--px,0) var(--py,0)",
              }}
            >
              <div
                className="card-float h-full w-full will-change-transform"
                style={{
                  filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.45))",
                }}
              >
                <div
                  className="h-full w-full overflow-hidden rounded-[14px] ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.04]"
                  style={{
                    boxShadow:
                      "0 20px 60px -10px rgba(0,0,0,0.5), 0 0 60px rgba(99,102,241,0.10)",
                  }}
                >
                  <img
                    src={typeof c.src == "string" ? c.src : c.src.src}
                    alt="Award"
                    loading="lazy"
                    width={512}
                    height={704}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {AWARD_CARDS.map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-6 rounded-full bg-white/20"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
