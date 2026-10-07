"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { serviceMenuSections } from "@/data/main-services";
import Link from "next/link";
import Image from "next/image";

// ─── Inline case studies (flat list, no categories) ───
const CASE_STUDIES = [
  {
    label: "Pre-launch QA for a SaaS Booking Platform",
    description:
      "End-to-end QA on a multi-tenant booking SaaS ahead of public launch — regression, load, and payment-flow testing.",
    href: "/case-studies/clickmasters-case-study-saas-booking-platform-qa",
  },
];

const NAV_LINKS = [
  { label: "Services", href: "/software-development", hasMegaMenu: true },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Case Studies", href: "/case-studies", hasCaseStudyMenu: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setCaseOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const linkClasses =
    "text-[oklch(0.30_0.02_250)] hover:text-[oklch(0.15_0.02_250)]";

  return (
    <>
      {/* ─── Desktop / Main Nav ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
        aria-label="Main navigation"
      >
        <div
          className={[
            "mx-auto mt-4 md:mt-6 max-w-6xl rounded-2xl transition-all duration-500 ease-out",
            scrolled
              ? "bg-white/70 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.06] backdrop-blur-2xl"
              : "bg-white/90 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.06] backdrop-blur-2xl",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 md:px-8 h-14 md:h-16">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
            >
              <Image
                src="/cm-logos/logo.webp"
                alt="Clickmasters Logo"
                width={142}
                height={32}
                className="object-contain"
              />
            </Link>

            {/* ── Desktop Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.hasMegaMenu) {
                  return (
                    <MegaMenu
                      key={link.label}
                      categories={serviceMenuSections}
                      trigger={
                        <span
                          className={[
                            "relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 cursor-pointer",
                            linkClasses,
                          ].join(" ")}
                        >
                          {link.label}
                          <ChevronDown className="h-3 w-3 opacity-60" />
                        </span>
                      }
                    />
                  );
                }

                if (link.hasCaseStudyMenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setCaseOpen(true)}
                      onMouseLeave={() => setCaseOpen(false)}
                    >
                      <span
                        className={[
                          "relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 cursor-pointer",
                          linkClasses,
                        ].join(" ")}
                      >
                        {link.label}
                        <ChevronDown
                          className={[
                            "h-3 w-3 opacity-60 transition-transform duration-300",
                            caseOpen ? "rotate-180" : "rotate-0",
                          ].join(" ")}
                        />
                      </span>

                      {/* ── Case Studies dropdown (flat, Services-style items) ── */}
                      <div
                        className={[
                          "absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2 transition-all duration-300 ease-out",
                          caseOpen
                            ? "visible opacity-100 translate-y-0"
                            : "invisible opacity-0 -translate-y-1 pointer-events-none",
                        ].join(" ")}
                      >
                        <div className="w-[380px] rounded-2xl bg-white/95 shadow-xl shadow-black/[0.08] ring-1 ring-black/[0.06] backdrop-blur-2xl p-2">
                          {CASE_STUDIES.map((cs) => (
                            <a
                              key={cs.href}
                              href={cs.href}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-black/[0.03]"
                            >
                              {/* icon slot — match your Services icon style */}
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-500/10 text-gray-600">
                                <svg
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[13.5px] font-medium text-[oklch(0.20_0.02_250)] group-hover:text-gray-600 transition-colors">
                                  {cs.label}
                                </span>
                                <span className="mt-0.5 block text-[12px] leading-relaxed text-[oklch(0.30_0.02_250)]/60">
                                  {cs.description}
                                </span>
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={[
                      "relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
                      linkClasses,
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-3">
              {/* CTA Button desktop */}
              <a
                href="/contact"
                className={[
                  "hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300",
                  scrolled
                    ? "bg-primary text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/30 hover:scale-[1.03]"
                    : "bg-primary text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/30 hover:scale-[1.03]",
                ].join(" ")}
              >
                Get in touch
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18m0 0-7.5-7.5M21 12l-7.5 7.5"
                  />
                </svg>
              </a>

              {/* Hamburger mobile */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={[
                  "relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 md:hidden",
                  scrolled
                    ? "bg-[oklch(0.20_0.02_250)] text-white"
                    : "bg-[oklch(0.20_0.02_250)] text-white",
                ].join(" ")}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={[
                      "absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300",
                      mobileOpen
                        ? "top-1/2 -translate-y-1/2 rotate-45"
                        : "top-0",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current transition-all duration-300",
                      mobileOpen
                        ? "scale-x-0 opacity-0"
                        : "scale-x-100 opacity-100",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300",
                      mobileOpen
                        ? "top-1/2 -translate-y-1/2 -rotate-45"
                        : "bottom-0",
                    ].join(" ")}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={[
          "fixed inset-0 z-[60] transition-all duration-500 md:hidden",
          mobileOpen ? "visible" : "invisible",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={closeMobile}
        />

        {/* Panel */}
        <div
          className={[
            "absolute inset-x-0 top-0 bg-white/95 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-out",
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0",
          ].join(" ")}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <a
              href="#"
              className="flex items-center gap-2.5"
              onClick={closeMobile}
            >
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-500 opacity-90" />
                <span className="absolute inset-[3px] rounded-full bg-white/90" />
                <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-primary to-primary-500" />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-primary">
                Clickmasters
              </span>
            </a>
            <button
              onClick={closeMobile}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105"
              aria-label="Close menu"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="px-5 pt-6 pb-4">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="group flex items-center justify-between border-b border-black/[0.06] py-4 transition-colors hover:border-gray-300"
                style={{
                  transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                  transition: `all 0.4s ease ${mobileOpen ? i * 60 : 0}ms`,
                }}
              >
                <span className="text-xl font-medium text-[oklch(0.20_0.02_250)] transition-colors group-hover:text-gray-600">
                  {link.label}
                </span>
                <span className="text-[11px] font-medium tracking-[0.2em] text-[oklch(0.20_0.02_250)]/30">
                  0{i + 1}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="px-5 pt-4 pb-6">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-gray-500/20 transition-all hover:shadow-xl hover:shadow-gray-500/30 hover:scale-[1.02]"
            >
              Get in touch
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18m0 0-7.5-7.5M21 12l-7.5 7.5"
                />
              </svg>
            </a>
          </div>

          {/* Social */}
          <div className="border-t border-black/[0.06] px-5 py-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[oklch(0.20_0.02_250)]/40">
              Follow us
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[13px] font-medium tracking-wide text-[oklch(0.20_0.02_250)]/60 transition-colors hover:text-gray-600"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
