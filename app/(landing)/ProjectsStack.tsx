// components/ProjectsStack.tsx
"use client";

import { resolveMediaSrc } from "@/lib/media";
import projectNorton from "@/public/assets/project-norton.jpg";
import projectLumen from "@/public/assets/project-lumen.jpg";
import projectNorthwind from "@/public/assets/project-northwind.jpg";
import projectAtelier from "@/public/assets/project-atelier.jpg";

const PROJECTS = [
  {
    title: "AutoMotive",
    image: projectNorton,
    desc: "Premium automotive showroom platform.",
    tag: "Automotive",
    bg: "#1a1a1a",
    fg: "#ffffff",
  },
  {
    title: "ClothingPOS",
    image:  projectAtelier,
    desc: "Modern retail management system for fashion.",
    tag: "Retail Tech",
    bg: "#f5f5f5",
    fg: "#1a1a1a",
  },
  {
    title: "JewelryPOS",
    image: projectNorthwind,
    desc: "Luxury inventory & sales management solution.",
    tag: "Luxury Retail",
    bg: "#2d2d2d",
    fg: "#ffffff",
  },
{
    title: "MarketPOS",
    image: projectLumen,
    desc: "Full-featured supermarket operations platform.",
    tag: "Retail Tech",
    bg: "#e8e0d8",
    fg: "#1a1a1a",
},
];

export default function ProjectsStack() {
  return (
    <section className="relative mb-26 bg-background" style={{ minHeight: "100vh" }}>
      <div className="px-8 pt-32 pb-6 max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">Selected Work</p>
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1] max-w-3xl">
          Projects we've shipped <span className="italic font-serif">recently</span>
        </h2>
      </div>

      <div className="relative" style={{ height: `${PROJECTS.length * 100}vh` }}>
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="sticky px-4 md:px-8"
            style={{
              top: `${80 + i * 24}px`,
              zIndex: i + 1,
              height: "78vh",
            }}
          >
            <div
              className="mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-2xl h-full"
              style={{
                background: p.bg,
                color: p.fg,
              }}
            >
              <div className="h-full  w-full flex flex-col justify-between p-8 md:p-14">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] opacity-70">
                  <span>{p.tag}</span>
                  <span>0{i + 1} / 0{PROJECTS.length}</span>
                </div>

                <div className="flex-1 flex items-center">
                  <img
                    src={resolveMediaSrc(p.image)}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full aspect-[17/8] object-cover rounded-2xl border border-black/5 shadow-lg"
                  />
                </div>

                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h3 className="text-2xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl">{p.desc}</p>
                  </div>
                  <button
                    className="shrink-0 rounded-full border border-current/30 px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors"
                    style={{ borderColor: "currentColor" }}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
            <div style={{ height: "22vh" }} />
          </div>
        ))}
      </div>
    </section>
  );
}