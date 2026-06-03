import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function SideNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const linksWrapRef = useRef<HTMLDivElement>(null);
  const sideMetaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initial hidden state
  useEffect(() => {
    gsap.set(panelRef.current, { xPercent: 100 });
    gsap.set(layerRef.current, { xPercent: 100 });
    gsap.set(backdropRef.current, { autoAlpha: 0 });
  }, []);

  // Open / close animation
  useEffect(() => {
    const links = linksWrapRef.current?.querySelectorAll<HTMLElement>("[data-nav-link]") ?? [];
    const lineEls = linksWrapRef.current?.querySelectorAll<HTMLElement>("[data-nav-line]") ?? [];
    const meta = sideMetaRef.current?.querySelectorAll<HTMLElement>("[data-nav-meta]") ?? [];

    if (open) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(backdropRef.current, { autoAlpha: 1, duration: 0.4 }, 0)
        .to(layerRef.current, { xPercent: 0, duration: 0.7 }, 0)
        .to(panelRef.current, { xPercent: 0, duration: 0.9 }, 0.12)
        .fromTo(
          links,
          { yPercent: 130, opacity: 0, rotate: 4 },
          { yPercent: 0, opacity: 1, rotate: 0, duration: 0.9, stagger: 0.07 },
          0.35,
        )
        .fromTo(
          lineEls,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.6, stagger: 0.07 },
          0.4,
        )
        .fromTo(
          meta,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
          0.6,
        );
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.to(panelRef.current, { xPercent: 100, duration: 0.55 }, 0)
        .to(layerRef.current, { xPercent: 100, duration: 0.65 }, 0.05)
        .to(backdropRef.current, { autoAlpha: 0, duration: 0.4 }, 0)
        .add(() => {
          document.body.style.overflow = "";
        });
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.97_0.005_80)]/85 backdrop-blur-md border-b border-black/5 text-[oklch(0.20_0.02_250)]"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-base">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-current animate-pulse" />
            studio.motion
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group relative flex items-center gap-3 rounded-full pl-5 pr-2 py-2 border border-current/20 hover:border-current/50 transition-colors"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium">
              {open ? "Close" : "Menu"}
            </span>
            <span
              className={`relative h-9 w-9 rounded-full flex items-center justify-center transition-colors ${
                scrolled ? "bg-[oklch(0.20_0.02_250)] text-white" : "bg-white text-[oklch(0.20_0.02_250)]"
              }`}
            >
              <span className="relative block w-4 h-3">
                <span
                  className={`absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-current transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45 bottom-auto" : ""
                  }`}
                />
              </span>
            </span>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        style={{ opacity: 0, visibility: "hidden" }}
        aria-hidden
      />

      {/* Parallax back layer (slides slower, creates depth) */}
      <div
        ref={layerRef}
        aria-hidden
        className="fixed top-0 right-0 z-40 h-screen w-[88vw] md:w-[58vw] lg:w-[44vw] pointer-events-none"
        style={{ background: "oklch(0.14 0.02 250)" }}
      />

      {/* Front panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className="fixed top-0 right-0 z-50 h-screen w-[88vw] md:w-[55vw] lg:w-[40vw] flex flex-col text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.20 0.03 250) 0%, oklch(0.10 0.02 250) 100%)",
          boxShadow: "-30px 0 80px -20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Decorative glow */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.18 250 / 0.35), transparent 70%)" }}
        />

        <div className="relative flex items-center justify-between px-8 md:px-12 py-6 border-b border-white/10">
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-60">Navigate</p>
          <button
            onClick={() => setOpen(false)}
            className="text-[11px] uppercase tracking-[0.3em] opacity-70 hover:opacity-100"
          >
            Close ×
          </button>
        </div>

        <div ref={linksWrapRef} className="relative flex-1 flex flex-col justify-center px-8 md:px-12">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group relative block py-3 md:py-4 border-b border-white/10 overflow-hidden"
            >
              <span data-nav-line className="absolute left-0 bottom-0 h-px w-full bg-white/60 origin-left" />
              <span className="flex items-baseline justify-between overflow-hidden">
                <span data-nav-link className="inline-block text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold tracking-tight leading-[1] will-change-transform group-hover:italic group-hover:font-serif transition-all duration-500">
                  {l.label}
                </span>
                <span className="text-xs opacity-40 tracking-[0.3em]">0{i + 1}</span>
              </span>
            </a>
          ))}
        </div>

        <div ref={sideMetaRef} className="relative px-8 md:px-12 py-8 border-t border-white/10 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
          <div data-nav-meta>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-2">Say hello</p>
            <a href="mailto:hello@studio.com" className="text-base md:text-lg font-medium hover:opacity-70">
              hello@studio.com
            </a>
          </div>
          <div data-nav-meta className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs uppercase tracking-[0.3em] opacity-60 hover:opacity-100 transition-opacity"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
