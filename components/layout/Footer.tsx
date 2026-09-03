import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Twitter, Dribbble, Facebook } from "lucide-react";
import mascot from "@/public/assets/footer-mascot.png";
import logo from "@/public/cm-logos/logo.webp";

/* ───────────────── Data ───────────────── */

// NEW: the four columns from the reference design
const FOOTER_NAV = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Web Development", href: "/web-development" },
      { label: "Mobile App Development", href: "/mobile-app-development" },
      { label: "UI/UX Design", href: "/ui-ux-design-services" },
      { label: "QA & Testing", href: "/qa-testing-services" },
      {
        label: "Maintenance & Support",
        href: "/support-and-outsourcing/maintenance-support",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        label: "Custom Software Solutions",
        href: "/software-development/custom-software-development",
      },
      {
        label: "Dedicated Teams",
        href: "/support-and-outsourcing/dedicated-development-teams",
      },
      { label: "MVP Development", href: "/software-development/mvp-development" },
      { label: "Cloud & DevOps", href: "/cloud-and-devops" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Healthcare", href: "#" },
      { label: "FinTech", href: "#" },
      { label: "E-commerce", href: "/web-development/ecommerce-development" },
      { label: "Education", href: "#" },
      { label: "Logistics", href: "#" },
    ],
  },
];

// NEW: social row next to contact info (per reference image)
const TOP_SOCIALS = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "X", href: "#", Icon: Twitter },
  { label: "Dribbble", href: "#", Icon: Dribbble },
];

// UNCHANGED
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

// UNCHANGED (bottom bar)
const SOCIALS = [
  { label: "Dribbble", href: "#", aria: "Dribbble", Icon: Dribbble },
  { label: "Behance", href: "#", aria: "Behance", Icon: null },
  { label: "Instagram", href: "#", aria: "Instagram", Icon: Instagram },
  { label: "LinkedIn", href: "#", aria: "LinkedIn", Icon: Linkedin },
  { label: "X", href: "#", aria: "X", Icon: Twitter },
  { label: "Facebook", href: "#", aria: "Facebook", Icon: Facebook },
];

export default function Footer() {
  const emailParts = {
    first: "sales@Clickmasterssoftwaredevelopment",
    second: "company.com",
  };
  const emailFull = `${emailParts.first}${emailParts.second}`;
  const PHONE_DISPLAY = "+1 325 202 4074";
  const PHONE_TEL = "tel:+13252024074";

  return (
    <footer className="bg-[#f5f3ee] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        {/* ══ NEW: intro + contact + nav columns (reference design) ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
          {/* Left: description + contact + socials */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src={logo}
                alt="Clickmasters Logo"
                width={142}
                height={32}
                className="object-contain"
              />
            </Link>

            <div className="flex items-start gap-4 sm:gap-5">
              {/* Mascet — delete this wrapper if you don't want it */}
              {/* <div className="relative w-[70px] sm:w-[80px] md:w-[100px] h-[90px] sm:h-[100px] md:h-[130px] shrink-0 -mt-2">
                <Image
                  src={mascot}
                  alt=""
                  aria-hidden="true"
                  className="footer-mascot absolute bottom-0 left-0 w-full h-full object-contain"
                  fill
                  sizes="(max-width: 640px) 70px, (max-width: 768px) 80px, 100px"
                />
              </div> */}

              <p className="text-base sm:text-lg leading-relaxed max-w-sm font-medium">
                ClickMasters is a software development company delivering
                high-performance web, mobile, AI, SaaS, and cloud solutions for
                startups and growing businesses.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-6 sm:mt-8 space-y-1.5">
              <a
                href={`mailto:${emailFull}`}
                className="block text-sm sm:text-base md:text-lg font-medium hover:opacity-60 transition-opacity"
              >
                <span className="block whitespace-nowrap">
                  {emailParts.first}
                </span>
                <span className="block whitespace-nowrap">
                  {emailParts.second}
                </span>
              </a>
              <a
                href={PHONE_TEL}
                className="block text-sm sm:text-base md:text-lg font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Social row */}
            <ul className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base font-medium">
              {TOP_SOCIALS.map((s, i) => (
                <li key={s.label} className="flex items-center gap-3">
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/60 text-foreground opacity-70 hover:opacity-100 hover:border-primary/40 hover:text-primary transition-all duration-200"
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                  {i < TOP_SOCIALS.length - 1 && (
                    <span aria-hidden="true" className="opacity-30">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: the four nav columns */}
          <nav aria-label="Footer" className="lg:col-span-8 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8">
              {FOOTER_NAV.map((col) => (
                <div key={col.title}>
                  <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-4 md:mb-5 font-medium">
                    {col.title}
                  </p>
                  <ul className="space-y-2.5 md:space-y-3">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        {item.href.startsWith("/") ? (
                          <Link
                            href={item.href}
                            className="text-sm sm:text-base font-medium hover:opacity-60 transition-opacity"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="text-sm sm:text-base font-medium hover:opacity-60 transition-opacity"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* ══ UNCHANGED: Offices ══ */}
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

      {/* ══ UNCHANGED: Bottom bar ══ */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.aria}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/60 text-foreground opacity-70 hover:opacity-100 hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  {s.Icon ? <s.Icon className="h-4 w-4" /> : s.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm opacity-60 text-center">
              <span className="w-full sm:w-auto">©2026 Clickmasters</span>
              <span className="hidden sm:inline opacity-30">|</span>
              <div className="flex items-center gap-3 sm:gap-5">
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Terms
                </a>
                <Link
                  href="/sitemap.xml"
                  className="hover:opacity-100 transition-opacity"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
