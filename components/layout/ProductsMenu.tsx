"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  industryPath,
  productIndustries,
  productPath,
  type ProductIndustry,
} from "@/data/products";
import { IndustryIcon } from "@/components/products/IndustryIcon";

function clearTimer(timer: { current: ReturnType<typeof setTimeout> | null }) {
  if (timer.current) {
    clearTimeout(timer.current);
    timer.current = null;
  }
}

export default function ProductsMenu({ className }: { className: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pinnedRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [shift, setShift] = useState(0);
  const [activeSlug, setActiveSlug] = useState(productIndustries[0].slug);

  const active =
    productIndustries.find((industry) => industry.slug === activeSlug) ??
    productIndustries[0];

  const placePanel = () => {
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const panelWidth = Math.min(1040, window.innerWidth - 32);
    const center = rect.left + rect.width / 2;
    const unshifted = center - panelWidth / 2;
    const clamped = Math.max(
      16,
      Math.min(unshifted, window.innerWidth - 16 - panelWidth),
    );
    setShift(clamped - unshifted);
  };

  const show = () => {
    clearTimer(closeTimer);
    placePanel();
    setVisible(true);
    window.setTimeout(() => setOpen(true), 10);
  };

  const closeMenu = () => {
    pinnedRef.current = false;
    setOpen(false);
    clearTimer(closeTimer);
    closeTimer.current = setTimeout(() => {
      setVisible(false);
      setActiveSlug(productIndustries[0].slug);
    }, 280);
  };

  const hideIfUnpinned = () => {
    if (pinnedRef.current) return;
    closeMenu();
  };

  useEffect(() => () => clearTimer(closeTimer), []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeMenu();
    };
    const onResize = () => placePanel();
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [visible]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hideIfUnpinned}
      onFocus={show}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          hideIfUnpinned();
        }
      }}
    >
      {/* A real link so crawlers (and users without hover) reach /products.
          It used to be a <button>, so the server HTML had no link into the
          product catalogue. Hover/focus still opens the mega-menu. */}
      <Link
        href="/products"
        className={[
          "relative inline-flex cursor-pointer items-center gap-1 bg-transparent px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
          className,
        ].join(" ")}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Products
        <ChevronDown
          aria-hidden="true"
          className={[
            "h-3 w-3 opacity-60 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </Link>

      {visible && (
        <div
          className={[
            "absolute top-full left-1/2 z-50 w-[min(1040px,calc(100vw-2rem))] pt-3 transition-all duration-300 ease-out",
            open ? "visible opacity-100" : "invisible opacity-0",
          ].join(" ")}
          style={{ transform: `translateX(calc(-50% + ${shift}px))` }}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-black/10">
            <div className="flex max-h-[min(70vh,640px)] min-h-[420px]">
              <div className="flex w-[300px] shrink-0 flex-col border-r border-border bg-secondary">
                <div className="px-4 pb-2 pt-4">
                  <Link
                    href="/products"
                    className="mb-3 flex items-center justify-between rounded-xl bg-white px-3 py-2.5 text-[13px] font-semibold text-foreground hover:text-primary"
                  >
                    All products
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Industries
                  </p>
                </div>
                <div className="flex-1 space-y-1 overflow-y-auto px-3 pb-3">
                  {productIndustries.map((industry) => {
                    const selected = industry.slug === active.slug;
                    return (
                      <div
                        key={industry.slug}
                        className={[
                          "flex items-center gap-1 rounded-xl pr-1.5 transition-colors",
                          selected
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-foreground hover:bg-white",
                        ].join(" ")}
                        onMouseEnter={() => setActiveSlug(industry.slug)}
                      >
                        <Link
                          href={industryPath(industry.slug)}
                          className="flex min-w-0 flex-1 items-center gap-3 px-2.5 py-2.5 text-left"
                          onClick={closeMenu}
                        >
                          <span
                            className={[
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                              selected
                                ? "bg-white/15 text-primary-foreground"
                                : "bg-white text-primary",
                            ].join(" ")}
                          >
                            <IndustryIcon name={industry.icon} className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 flex-1 text-[13px] font-medium leading-snug">
                            {industry.label}
                          </span>
                        </Link>
                        <button
                          type="button"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                          aria-label={`Show ${industry.label} products`}
                          aria-pressed={selected}
                          onClick={() => setActiveSlug(industry.slug)}
                        >
                          <ChevronRight
                            className={[
                              "h-4 w-4",
                              selected ? "text-primary-foreground" : "text-muted-foreground",
                            ].join(" ")}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <IndustryProducts industry={active} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function IndustryProducts({ industry }: { industry: ProductIndustry }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {industry.label}
          </h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            {industry.description}
          </p>
        </div>
        <Link
          href={industryPath(industry.slug)}
          className="mt-1 inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-primary hover:underline"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid flex-1 grid-cols-2 content-start gap-2 overflow-y-auto p-4">
        {industry.products.map((product) => (
          <Link
            key={product.slug}
            href={productPath(industry.slug, product.slug)}
            className="group rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-border hover:bg-secondary"
          >
            <span className="block text-[13.5px] font-semibold leading-snug text-foreground group-hover:text-primary">
              {product.title}
            </span>
            <span className="mt-1 block line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
              {product.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileProductsSection({
  index,
  menuOpen,
  onNavigate,
}: {
  index: number;
  menuOpen: boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [industrySlug, setIndustrySlug] = useState<string | null>(null);

  useEffect(() => {
    if (!menuOpen) {
      setOpen(false);
      setIndustrySlug(null);
    }
  }, [menuOpen]);

  return (
    <div
      className="border-b border-black/[0.06]"
      style={{
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? "translateY(0)" : "translateY(12px)",
        transition: `all 0.4s ease ${menuOpen ? index * 60 : 0}ms`,
      }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
        onClick={() => {
          setOpen((current) => !current);
          setIndustrySlug(null);
        }}
      >
        <span className="text-xl font-medium text-[oklch(0.20_0.02_250)]">
          Products
        </span>
        <ChevronDown
          className={[
            "h-5 w-5 text-[oklch(0.20_0.02_250)]/50 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="pb-3">
          <Link
            href="/products"
            onClick={onNavigate}
            className="mb-2 block rounded-xl bg-secondary px-3 py-3 text-[15px] font-semibold text-primary"
          >
            All products
          </Link>
          {productIndustries.map((industry) => {
            const selected = industrySlug === industry.slug;
            return (
              <div key={industry.slug} className="border-t border-black/[0.04]">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 py-3 text-left"
                  aria-expanded={selected}
                  onClick={() =>
                    setIndustrySlug((current) =>
                      current === industry.slug ? null : industry.slug,
                    )
                  }
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <IndustryIcon name={industry.icon} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1 text-[15px] font-medium leading-snug text-[oklch(0.20_0.02_250)]">
                    {industry.label}
                  </span>
                  <ChevronDown
                    className={[
                      "h-4 w-4 shrink-0 text-[oklch(0.20_0.02_250)]/40 transition-transform",
                      selected ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  />
                </button>
                {selected && (
                  <div className="mb-2 ml-11 border-l border-black/10 pl-3">
                    <Link
                      href={industryPath(industry.slug)}
                      onClick={onNavigate}
                      className="block py-2.5 text-[13px] font-semibold text-primary"
                    >
                      Open {industry.label} page
                    </Link>
                    {industry.products.map((product) => (
                      <Link
                        key={product.slug}
                        href={productPath(industry.slug, product.slug)}
                        onClick={onNavigate}
                        className="block py-2.5 text-[14px] font-medium leading-snug text-[oklch(0.28_0.02_250)]"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
