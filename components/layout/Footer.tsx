import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Twitter, Dribbble, Facebook } from "lucide-react";
import mascot from "@/public/assets/footer-mascot.webp";
import logo from "@/public/cm-logos/logo.webp";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/site";

/* ───────────────── Data ───────────────── */

// NEW: the four columns from the reference design
const FOOTER_NAV = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Software Products", href: "/products" },
      { label: "Case Studies", href: "/case-studies" },
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
      { label: "Maintenance & Support", href: "/support-and-outsourcing" },
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
      {
        label: "MVP Development",
        href: "/software-development/mvp-development",
      },
      { label: "Cloud & DevOps", href: "/cloud-devops-services" },
    ],
  },
  {
    // Each industry links to its product hub (previously four of these all
    // pointed at /software-development, and no page outside /products
    // linked into the product catalogue).
    title: "Industries",
    items: [
      { label: "Healthcare", href: "/products/healthcare-medical-software" },
      {
        label: "Business & Enterprise",
        href: "/products/business-enterprise-management",
      },
      { label: "Fitness & Sports", href: "/products/fitness-sports-management" },
      { label: "Education", href: "/products/education-management-software" },
      { label: "Retail & E-commerce", href: "/products/retail-ecommerce-software" },
      {
        label: "Logistics",
        href: "/products/logistics-transportation-software",
      },
      {
        label: "Real Estate",
        href: "/products/real-estate-property-management",
      },
    ],
  },
];

// Social profiles. Entries with href "#" are placeholders and are not
// rendered (dead "#" links hurt crawl quality and keyboard users); add the
// real profile URL to show an icon.
const TOP_SOCIALS = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "X", href: "#", Icon: Twitter },
  { label: "Dribbble", href: "#", Icon: Dribbble },
];

const SERVICE_AREAS = [
  "Los Angeles",
  "Houston",
  "New York",
  "San Francisco",
  "Chicago",
  "Dallas",
];

// UNCHANGED (bottom bar)
const SOCIALS_ALL = [
  { label: "Dribbble", href: "#", aria: "Dribbble", Icon: Dribbble },
  { label: "Behance", href: "#", aria: "Behance", Icon: null },
  { label: "Instagram", href: "#", aria: "Instagram", Icon: Instagram },
  { label: "LinkedIn", href: "#", aria: "LinkedIn", Icon: Linkedin },
  { label: "X", href: "#", aria: "X", Icon: Twitter },
  { label: "Facebook", href: "#", aria: "Facebook", Icon: Facebook },
];
const SOCIALS = SOCIALS_ALL.filter((s) => s.href !== "#");
const TOP_SOCIALS_LIVE = TOP_SOCIALS.filter((s) => s.href !== "#");

/** Optional ERP/CMS overrides for pages created in the ERP. Without props the
 * default ClickMasters footer renders unchanged. */
export type FooterColumn = {
  title: string;
  items: { label: string; href: string; newTab?: boolean }[];
};

export default function Footer({
  columns,
  tagline,
  copyright,
}: {
  columns?: FooterColumn[];
  tagline?: string;
  copyright?: string;
} = {}) {
  const navColumns = columns?.length ? columns : FOOTER_NAV;

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
                {tagline ||
                  "ClickMasters is a software development company delivering high-performance web, mobile, AI, SaaS, and cloud solutions for startups and growing businesses."}
              </p>
            </div>

            {/* Contact */}
            <div className="mt-6 sm:mt-8 space-y-1.5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm sm:text-base md:text-lg font-medium hover:opacity-60 transition-opacity"
              >
                {/* One text node so the address reads/copies correctly; <wbr>
                    keeps the old two-line wrap on narrow columns. */}
                {CONTACT_EMAIL.replace(/company\.com$/, "")}
                <wbr />
                company.com
              </a>
              <a
                href={CONTACT_PHONE_TEL}
                className="block text-sm sm:text-base md:text-lg font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            {/* Social row */}
            {TOP_SOCIALS_LIVE.length > 0 && (
            <ul className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base font-medium">
              {TOP_SOCIALS_LIVE.map((s, i) => (
                <li key={s.label} className="cx-flex-itemsc-h">
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/60 text-foreground opacity-70 hover:opacity-100 hover:border-primary/40 hover:text-primary transition-all duration-200"
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                  {i < TOP_SOCIALS_LIVE.length - 1 && (
                    <span aria-hidden="true" className="opacity-30">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
            )}
          </div>

          {/* Right: the four nav columns */}
          <nav aria-label="Footer" className="lg:col-span-8 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8">
              {navColumns.map((col: FooterColumn) => (
                <div key={col.title}>
                  <p className="cm-fhead">
                    {col.title}
                  </p>
                  <ul className="space-y-2.5 md:space-y-3">
                    {col.items.map((item) => (
                      <li key={`${item.label}-${item.href}`}>
                        <a
                          href={item.href}
                          {...(item.newTab
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="cm-flink"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-16 md:mt-20 lg:mt-24">
          <p className="text-xs uppercase tracking-[0.25em] opacity-70 mb-4 font-medium">
            Service area
          </p>
          <p className="max-w-3xl text-sm leading-7 opacity-70">
            Clickmasters is remote-first and does not publish a street
            address. We work with clients in{" "}
            {SERVICE_AREAS.join(", ")} by video and phone.{" "}
            <Link href="/locations" className="font-semibold underline">
              See service areas
            </Link>
            .
          </p>
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

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm opacity-70 text-center">
              <span className="w-full sm:w-auto">
                {copyright || "©2026 Clickmasters"}
              </span>
              <span className="hidden sm:inline opacity-30">|</span>
              {/* Privacy and Terms links pointed at "#" (no such pages
                  exist yet); removed until the pages are published. */}
              <div className="flex items-center gap-3 sm:gap-5">
                <a
                  href="/sitemap.xml"
                  className="hover:opacity-100 transition-opacity"
                >
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
