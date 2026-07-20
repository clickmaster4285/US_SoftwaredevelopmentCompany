// components/AudienceCarousel.tsx

import { useState, useEffect } from "react";
import Image from "next/image";
import audienceAgencies from "@/public/assets/audience-agencies.jpg";
import audienceCreators from "@/public/assets/audience-creators.jpg";
import audienceMarketing from "@/public/assets/audience-marketing.jpg";

const AUDIENCE_SLIDES = [
  {
    title: "Marketing & Sales",
    subtitle:
      "Launch high-converting pages fast without waiting on developers.",
    image: audienceMarketing,
  },
  {
    title: "Agencies & Teams",
    subtitle:
      "Ship faster and deliver premium, immersive experiences to clients at scale.",
    image: audienceAgencies,
  },
  {
    title: "Creators & Founders",
    subtitle:
      "Create breathtaking interactive stories without any design or coding skills.",
    image: audienceCreators,
  },
];

export default function AudienceCarousel() {
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
        <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">
          Built for
        </p>
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
              style={{
                opacity: i === index ? 1 : 0,
                pointerEvents: i === index ? "auto" : "none",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority={i === 0}
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
