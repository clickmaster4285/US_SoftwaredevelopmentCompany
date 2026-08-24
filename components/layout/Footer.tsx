import Image from "next/image";
import mascot from "@/public/assets/footer-mascot.png";

const NAV_MAIN = [
  { label: "Work", href: "#" },
  { label: "Services", href: "/software-development" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NAV_SECONDARY = [
  { label: "Clients", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Blog", href: "#" },
];

const OFFICES = [
  {
    city: "San Francisco",
    lines: ["300 Broadway,", "San Francisco, CA 94133"],
  },
  { city: "New York", lines: ["148 Lafayette St,", "New York, NY 10013"] },
  { city: "Austin", lines: ["600 Congress Ave,", "Austin, TX 78701"] },
  { city: "Denver", lines: ["1700 Lincoln St 17th fl,", "Denver, CO 80203"] },
  {
    city: "Lisbon",
    lines: ["Av. Alm. Reis 139, 1150-015", "Lisbon, Portugal"],
  },
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
  // Split email for better mobile display - fully visible, rendered on two lines
  const emailParts = {
    first: "sales@Clickmasters.softwaredevelopment",
    second: "company.com",
  };
  const emailFull = `${emailParts.first}${emailParts.second}`;

  return (
    <footer className="bg-[#f5f3ee] text-[#1a1a1a]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        {/* Top row: CTA + Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8">
          {/* Left CTA with mascot */}
          <div className="lg:col-span-5 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative w-[70px] sm:w-[80px] md:w-[100px] h-[90px] sm:h-[100px] md:h-[130px] shrink-0 -mt-2">
                <Image
                  src={mascot}
                  alt=""
                  aria-hidden="true"
                  className="footer-mascot absolute bottom-0 left-0 w-full h-full object-contain"
                  fill
                  sizes="(max-width: 640px) 70px, (max-width: 768px) 80px, 100px"
                />
              </div>
              <div className="w-full">
                <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-semibold tracking-tight leading-[1]">
                  Let's Talk
                </h2>
                <div className="mt-4 space-y-1.5">
                  <a
                    href={`mailto:${emailFull}`}
                    className="block text-sm sm:text-base md:text-lg font-medium hover:opacity-60 transition-opacity"
                  >
                    <span className="block whitespace-nowrap">{emailParts.first}</span>
                    <span className="block whitespace-nowrap">{emailParts.second}</span>
                  </a>
                  <p className="text-sm sm:text-base md:text-lg opacity-70">
                    +1 325 2024074
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation columns */}
          <div className="lg:col-span-7 lg:justify-self-end">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-20">
              {/* Main nav */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-4 md:mb-5 font-medium">
                  Navigation
                </p>
                <ul className="space-y-2.5 md:space-y-3">
                  {NAV_MAIN.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-base sm:text-lg font-medium hover:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary nav */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-4 md:mb-5 font-medium">
                  Explore
                </p>
                <ul className="space-y-2.5 md:space-y-3">
                  {NAV_SECONDARY.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-base sm:text-lg font-medium hover:opacity-60 transition-opacity"
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
        <div className="mt-16 md:mt-20 lg:mt-24">
          <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-6 md:mb-8 font-medium">
            Offices
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-6">
            {OFFICES.map((o) => (
              <div key={o.city}>
                <p className="text-sm font-semibold mb-2 tracking-tight">
                  {o.city}
                </p>
                <address className="not-italic text-xs sm:text-sm leading-relaxed opacity-60">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Social links */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.aria}
                  className="text-base sm:text-lg font-medium opacity-70 hover:opacity-100 transition-opacity"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Copyright + legal */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm opacity-60 text-center">
              <span className="w-full sm:w-auto">©2026 Clickmasterssoftwaredevelopmentcompany</span>
              <span className="hidden sm:inline opacity-30">|</span>
              <div className="flex items-center gap-3 sm:gap-5">
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Terms
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}