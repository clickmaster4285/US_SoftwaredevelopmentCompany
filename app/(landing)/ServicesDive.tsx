import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { icon: "</>", title: "Web Development", desc: "Fast, scalable web apps built with modern stacks." },
  { icon: "◐", title: "UI / UX Design", desc: "Interfaces designed for clarity, delight and conversion." },
  { icon: "✦", title: "Branding & Identity", desc: "Memorable brand systems with depth and meaning." },
  { icon: "▣", title: "Mobile Apps", desc: "Native-feeling iOS & Android experiences." },
  { icon: "◈", title: "3D & Motion", desc: "Cinematic motion that elevates your product story." },
  { icon: "✺", title: "E-commerce", desc: "Storefronts that feel editorial and sell hard." },
  { icon: "◉", title: "SEO & Growth", desc: "Technical SEO and growth loops engineered to scale." },
  { icon: "✜", title: "AI Integration", desc: "Smart assistants and AI flows woven into your product." },
];

const BUBBLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 53) % 100,
  size: 6 + ((i * 7) % 18),
  delay: (i * 0.4) % 6,
  duration: 6 + ((i * 1.3) % 6),
}));

const RAYS = Array.from({ length: 6 }, (_, i) => ({
  left: 8 + i * 16,
  rotate: -8 + ((i * 5) % 12),
}));

export default function ServicesDive() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Phases
  // 0 - 0.15  : above water (sky / entry)
  // 0.15 - 0.85 : underwater (cards revealed in waves)
  // 0.85 - 1   : surfacing
  const underwater = p > 0.15 && p < 0.9;
  const depth = Math.min(1, Math.max(0, (p - 0.12) / 0.7));
  const depthMeters = Math.round(depth * 80);

  // Sky color interpolation by depth
  const skyOpacity = 1 - depth * 0.4;
  const deepBg = `linear-gradient(to bottom,
    oklch(0.75 0.12 235 / ${1 - depth}) 0%,
    oklch(0.55 0.15 235) ${20 + depth * 10}%,
    oklch(0.35 0.13 240) ${50 + depth * 10}%,
    oklch(0.18 0.09 250) 100%)`;

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: "500vh", background: "oklch(0.18 0.09 250)" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: deepBg }}>
        {/* Sky overlay fades as we dive */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-150"
          style={{
            opacity: skyOpacity,
            background:
              "linear-gradient(to bottom, #87CEEB 0%, #b0e0f5 30%, #d0f0ff 45%, #7ec8e3 55%, #1a6fa8 65%, #0d4d8a 80%, #071f3a 100%)",
          }}
        />

        {/* Light rays from surface */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: depth * 0.9 }}>
          {RAYS.map((r, i) => (
            <div
              key={i}
              className="absolute top-0 h-full"
              style={{
                left: `${r.left}%`,
                width: "60px",
                transform: `rotate(${r.rotate}deg) translateY(${-50 + depth * 30}px)`,
                background:
                  "linear-gradient(to bottom, rgba(180,230,255,0.35), rgba(180,230,255,0.05) 60%, transparent)",
                filter: "blur(6px)",
              }}
            />
          ))}
        </div>

        {/* Depth fog */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10,42,74,0.35) 55%, rgba(5,15,30,0.75) 100%)",
            opacity: depth,
          }}
        />

        {/* Bubbles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: depth }}>
          {BUBBLES.map((b, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/40 border border-white/50"
              style={{
                left: `${b.left}%`,
                bottom: "-40px",
                width: `${b.size}px`,
                height: `${b.size}px`,
                animation: `bubble-rise ${b.duration}s linear ${b.delay}s infinite`,
                boxShadow: "inset 0 0 4px rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>

        {/* Entry text (above water) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - depth * 4), color: "#0d2a4a" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">🌊 Our Services</h2>
          <p className="text-base md:text-lg opacity-80">Scroll down to dive in</p>
        </div>

        {/* Underwater heading */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none transition-opacity duration-500"
          style={{
            opacity: underwater ? 1 : 0,
            color: "rgba(200,235,255,0.95)",
            textShadow: "0 2px 16px rgba(0,100,200,0.7)",
          }}
        >
          <h3 className="text-xl md:text-3xl font-semibold mb-1">Explore Our Services</h3>
          <p className="text-sm opacity-80">Discover what we offer in the deep</p>
        </div>

        {/* Services cards grid */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pt-24 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full">
            {SERVICES.map((s, i) => {
              const reveal = (i + 1) / (SERVICES.length + 1);
              const visible = depth > reveal * 0.7;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl p-4 flex flex-col items-center text-center gap-2 border border-white/30 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.04]"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0) scale(1)"
                      : "translateY(40px) scale(0.9)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl border border-white/30"
                    style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                  >
                    {s.icon}
                  </div>
                  <div className="text-sm font-semibold text-white leading-tight">{s.title}</div>
                  <div className="text-xs text-white/75 leading-snug">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Depth meter */}
        <div className="absolute right-3 top-5 bottom-5 w-1 rounded-full bg-white/15 z-20">
          <div
            className="w-full rounded-full"
            style={{
              height: `${p * 100}%`,
              background: "rgba(120,210,255,0.85)",
              boxShadow: "0 0 10px rgba(120,210,255,0.7)",
            }}
          />
        </div>
        <div
          className="absolute right-6 z-20 text-xs font-mono text-white/80 transition-opacity"
          style={{ top: `calc(${p * 100}% + 12px)`, opacity: depth > 0.05 ? 1 : 0 }}
        >
          {depthMeters}m
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white text-sm flex flex-col items-center gap-1 pointer-events-none transition-opacity"
          style={{
            opacity: p < 0.05 ? 1 : 0,
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            animation: "bounceHint 2s ease-in-out infinite",
          }}
        >
          <span>Scroll to dive</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
