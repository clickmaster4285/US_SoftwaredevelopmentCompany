import Image from "next/image";
import mascot from "@/public/assets/footer-mascot.png";

const NAV_MAIN = [
  { label: "Work", href: "#" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const NAV_SECONDARY = [
  { label: "Clients", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Blog", href: "#" },
];

const OFFICES = [
  { city: "San Francisco", lines: ["300 Broadway,", "San Francisco, CA 94133"] },
  { city: "New York", lines: ["148 Lafayette St,", "New York, NY 10013"] },
  { city: "Austin", lines: ["600 Congress Ave,", "Austin, TX 78701"] },
  { city: "Denver", lines: ["1700 Lincoln St 17th fl,", "Denver, CO 80203"] },
  { city: "Lisbon", lines: ["Av. Alm. Reis 139, 1150-015", "Lisbon, Portugal"] },
  { city: "Belgrade", lines: ["Nušićeva 15, 11000", "Belgrade, Serbia"] },
];

const SOCIALS = [
  { label: "Dr", href: "#", aria: "Dribbble" },
  { label: "Bē", href: "#", aria: "Behance" },
  { label: "IG", href: "#", aria: "Instagram" },
  { label: "in", href: "#", aria: "LinkedIn" },
  { label: "X", href: "#", aria: "X" },
  { label: "f", href: "#", aria: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f3ee] text-[#1a1a1a]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16">
        {/* Top row: CTA + Nav */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left — CTA with mascot */}
          <div className="md:col-span-5 lg:col-span-5 relative">
            <div className="flex items-start gap-4">
              <div className="relative w-[80px] md:w-[100px] h-[100px] md:h-[130px] shrink-0 -mt-2">
                <Image
                  src={mascot}
                  alt=""
                  aria-hidden="true"
                  className="footer-mascot absolute bottom-0 left-0 w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 80px, 100px"
                />
              </div>
              <div>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1]">
                  Let's Talk
                </h2>
                <div className="mt-5 space-y-1.5">
                  <a
                    href="mailto:sales@Clickmasterssoftwaredevelopmentcompany.com"
                    className="block text-base md:text-lg font-medium hover:opacity-60 transition-opacity"
                  >
                    sales@Clickmasterssoftwaredevelopmentcompany.com
                  </a>
                  <p className="text-base md:text-lg opacity-70">+13252024074</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Navigation columns */}
          <div className="md:col-span-7 lg:col-span-7 md:justify-self-end">
            <div className="grid grid-cols-2 gap-12 md:gap-20">
              {/* Main nav */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-5 font-medium">
                  Navigation
                </p>
                <ul className="space-y-3">
                  {NAV_MAIN.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-lg font-medium hover:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary nav */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-5 font-medium">
                  Explore
                </p>
                <ul className="space-y-3">
                  {NAV_SECONDARY.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-lg font-medium hover:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Offices row */}
        <div className="mt-20 md:mt-24">
          <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-8 font-medium">
            Offices
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
            {OFFICES.map((o) => (
              <div key={o.city}>
                <p className="text-sm font-semibold mb-2 tracking-tight">{o.city}</p>
                <address className="not-italic text-sm leading-relaxed opacity-60">
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social links */}
            <div className="flex items-center gap-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.aria}
                  className="text-lg font-medium opacity-70 hover:opacity-100 transition-opacity"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Copyright + legal */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm opacity-60">
              <span>©2026 Clickmasterssoftwaredevelopmentcompany.com</span>
              <span className="hidden md:inline opacity-30">|</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
