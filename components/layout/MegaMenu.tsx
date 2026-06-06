"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { slugify, iconMap  } from "@/data/main-services";

export type SubService = {
  title: string;
  icon:string;
  slug: string;
  description: string;
};

export type ServiceCategory = {
  label: string;
  slug: string;
  items: SubService[];
};

type MegaMenuProps = {
  categories: ServiceCategory[];
  trigger: ReactNode;
};

export default function MegaMenu({ categories, trigger }: MegaMenuProps) {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (categories.length > 0 && hoveredIdx >= categories.length) {
      setHoveredIdx(0);
    }
  }, [categories, hoveredIdx]);

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setVisible(true);
    if (categories.length > 0 && !categories[hoveredIdx]) {
      setHoveredIdx(0);
    }
    setTimeout(() => setOpen(true), 10);
  };

  const handleLeave = () => {
    setOpen(false);
    closeTimer.current = setTimeout(() => {
      setVisible(false);
      setHoveredIdx(0);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const active = categories[hoveredIdx];

  const getCategoryHref = (category: ServiceCategory) => {
    const categorySlug = category.slug || slugify(category.label);
    return `/${categorySlug}`;
  };

  const getItemHref = (category: ServiceCategory, item: SubService) => {
    const categorySlug = category.slug || slugify(category.label);
    const itemSlug = item.slug || slugify(item.title);
    return `/${categorySlug}/${itemSlug}`;
  };

const DynamicIcon = ({ name, className = "h-4 w-4" }: { name: string; className?: string }) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {trigger}

      {/* Invisible hover bridge */}
      <div className="absolute -bottom-4 left-0 right-0 h-4" />

      {/* ── Dropdown Panel ── */}
      {visible && (
        <div
          className={[
            "absolute top-full left-1/2 z-50 w-[min(960px,92vw)] pt-4 transition-all duration-300 ease-out",
            open
              ? "translate-x-[-50%] translate-y-0 scale-100 opacity-100"
              : "translate-x-[-50%] -translate-y-2 scale-[0.97] opacity-0",
          ].join(" ")}
        >
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-2xl">
            <div className="flex min-h-[340px] max-h-[70vh]">
              {/* ── Left: Categories ── */}
              <div className="w-[260px] shrink-0 border-r border-border bg-secondary p-4">
                <h3 className="mb-4 px-3 text-lg font-bold text-primary">
                  Our Services
                </h3>
                <div className="space-y-1">
                  {categories.map((cat, i) => {
                    const isActive = hoveredIdx === i;
                    return (
                      <Link
                        key={cat.slug}
                        href={getCategoryHref(cat)}
                        className="group block"
                        onMouseEnter={() => setHoveredIdx(i)}
                      >
                        <div
                          className={[
                            "flex items-center justify-between rounded-lg p-3 transition-all border  duration-200",
                            isActive
                              ? "bg-primary text-accent shadow-md"
                              : "text-foreground hover:bg-accent hover:text-white",
                          ].join(" ")}
                        >
                          <span className="text-sm font-medium">
                            {cat.label}
                          </span>
                          <ChevronRight
                            className={[
                              "h-4 w-4 transition-colors",
                              isActive
                                ? "text-white"
                                : "text-muted-foreground group-hover:text-white",
                            ].join(" ")}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* ── Right: Sub-services ── */}
              <div className="flex-1 overflow-y-auto p-6">
                {active ? (
                  <div>
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-primary">
                        {active.label}
                      </h3>
                      <Link
                        href={getCategoryHref(active)}
                        className="flex items-center gap-1 text-sm font-medium text-accent underline transition-colors hover:opacity-80"
                      >
                        View All <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Grid of sub-services */}
                    <div className="grid grid-cols-2 gap-4">
                      {active.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={getItemHref(active, item)}
                          className="group/sub flex h-full items-start gap-3 rounded-2xl border border-border/50 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20"
                        >
                          <DynamicIcon   name={item.icon} className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-primary transition-colors group-hover/sub:bg-accent group-hover/sub:scale-105" />
                          <div className="min-w-0">
                            <h4 className="mb-2 text-sm font-semibold text-foreground transition-colors group-hover/sub:text-primary">
                              {item.title}
                            </h4>
                            <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center py-20 text-center">
                    <div className="max-w-sm">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                        <ChevronRight className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">
                        Explore Our Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Select a service category to discover how we can help your business grow with tailored solutions.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
