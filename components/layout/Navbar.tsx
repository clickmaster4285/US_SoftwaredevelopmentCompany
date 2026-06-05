import { useState, useEffect } from "react";
import { gsap } from "gsap";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on escape key
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[oklch(0.97_0.005_80)]/95 backdrop-blur-md border-b border-black/5 text-[oklch(0.20_0.02_250)]"
            : "bg-transparent text-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 font-semibold tracking-tight text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              <span className="inline-block h-3 w-3 rounded-full bg-current animate-pulse" />
              <span>Clickmasters</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm md:text-base font-medium hover:text-[oklch(0.35_0.03_250)] transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[oklch(0.35_0.03_250)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="mailto:sales@Clickmasterssoftwaredevelopmentcompany.com"
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative flex items-center gap-2 rounded-full pl-4 pr-3 py-2 border border-current/20 hover:border-current/50 transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.3em] font-medium">
                  {isMobileMenuOpen ? "Close" : "Menu"}
                </span>
                <span
                  className={`relative h-8 w-8 rounded-full flex items-center justify-center transition-colors ${scrolled ? "bg-[oklch(0.20_0.02_250)] text-white" : "bg-white text-[oklch(0.20_0.02_250)]"
                    }`}
                >
                  <span className="relative block w-4 h-3">
                    <span
                      className={`absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                        }`}
                    />
                    <span
                      className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45 bottom-auto" : ""
                        }`}
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="fixed top-0 right-0 left-0 z-50 h-[100vh] max-h-[800px] bg-white text-[oklch(0.20_0.02_250)]">
              {/* Menu Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
                <a
                  href="#"
                  className="flex items-center gap-3 font-semibold tracking-tight text-base"
                >
                  <span className="inline-block h-3 w-3 rounded-full bg-current animate-pulse" />
                  <span>Clickmasters</span>
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Close ×
                </button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-8 space-y-1">
                {LINKS.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-lg font-medium hover:text-[oklch(0.35_0.03_250)] transition-colors group"
                  >
                    <span className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <span className="text-xs opacity-40 tracking-[0.3em]">0{index + 1}</span>
                    </span>
                    <span className="block mt-1 h-px w-0 bg-[oklch(0.35_0.03_250)] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Contact & Social */}
              <div className="px-6 py-8 border-t border-black/10">
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-2">Say hello</p>
                  <a
                    href="mailto:sales@Clickmasterssoftwaredevelopmentcompany.com"
                    className="text-lg font-medium hover:opacity-80 transition-opacity"
                  >
                    sales@Clickmasterssoftwaredevelopmentcompany.com
                  </a>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {SOCIAL.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-xs uppercase tracking-[0.3em] opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}