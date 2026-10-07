"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Globe2,
  Layers3,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

const cardIcons = [
  Activity,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Globe2,
  Layers3,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  Sparkles,
  Zap,
];

export function AnimatedTable({ rows }: { rows: string[][] }) {
  const ref = useRef<HTMLDivElement>(null);

  const [head, ...body] = rows;

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const headEls = root.querySelectorAll<HTMLElement>("[data-table-head]");
      const rowEls = root.querySelectorAll<HTMLElement>("[data-table-row]");
      const indexEls = root.querySelectorAll<HTMLElement>("[data-row-index]");
      const headerLine = root.querySelector<HTMLElement>("[data-header-line]");
      const footer = root.querySelector<HTMLElement>("[data-table-footer]");

      if (reduceMotion) {
        gsap.set([headEls, rowEls, indexEls], { opacity: 1, y: 0, x: 0 });
        if (headerLine) gsap.set(headerLine, { scaleX: 1 });
        if (footer) gsap.set(footer, { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 88%" },
      });

      if (headerLine) {
        tl.fromTo(
          headerLine,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.7, ease: "power3.inOut" },
          0,
        );
      }

      tl.fromTo(
        headEls,
        { opacity: 0, y: 6 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.04,
        },
        0.05,
      );

      tl.fromTo(
        rowEls,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.05,
        },
        0.12,
      );

      tl.fromTo(
        indexEls,
        { x: -6, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.05,
        },
        0.2,
      );

      if (footer) {
        tl.fromTo(
          footer,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" },
          "-=0.1",
        );
      }
    },
    { scope: ref, dependencies: [] },
  );

  const colCount = head.length;

  return (
    <div
      ref={ref}
      className="relative mt-8 md:mt-10 -mx-2 md:-mx-4 px-2 md:px-4"
    >
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse text-[14px] md:text-[15px]">
          <thead>
            <tr className="relative">
              <th className="w-14" aria-hidden />

              {head.map((cell, i) => (
                <th
                  key={i}
                  data-table-head
                  className="text-left align-bottom pb-4 pr-5 md:pr-7 text-[11px] font-medium uppercase tracking-[0.18em] opacity-50 whitespace-nowrap"
                >
                  {cell || "—"}
                </th>
              ))}

              <th aria-hidden className="pointer-events-none relative w-0 p-0">
                <span
                  data-header-line
                  className="absolute left-0 -bottom-px h-px w-[100vw] origin-left bg-[oklch(0.65_0.18_250)]"
                />
              </th>
            </tr>
          </thead>

          <tbody>
            {body.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                data-table-row
                className="group relative transition-colors duration-300 hover:bg-[oklch(0.18_0.02_250)]/[0.03]"
              >
                <td className="relative w-14 align-top py-4 md:py-5 pl-5 md:pl-7">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-2.5 bottom-2.5 w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100 bg-[oklch(0.65_0.18_250)]"
                  />
                  <span
                    data-row-index
                    className="font-mono text-xs tabular-nums opacity-40 transition-colors duration-300 group-hover:opacity-100 group-hover:text-[oklch(0.65_0.18_250)]"
                  >
                    {String(rowIdx + 1).padStart(2, "0")}
                  </span>
                </td>

                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    data-table-cell
                    className={[
                      "align-top py-4 md:py-5 pr-5 md:pr-7 border-t border-[oklch(0.18_0.02_250)]/8 transition-opacity duration-300",
                      cellIdx === 0
                        ? "font-semibold tracking-tight leading-snug transition-colors duration-300 group-hover:text-[oklch(0.65_0.18_250)]"
                        : "opacity-70 group-hover:opacity-95 leading-relaxed",
                    ].join(" ")}
                  >
                    {cell || "—"}
                  </td>
                ))}

                <td aria-hidden className="w-0 p-0" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        data-table-footer
        className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] opacity-40"
      >
        <span>
          {body.length} {body.length === 1 ? "row" : "rows"}
        </span>
        <span className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-[oklch(0.65_0.18_250)]" />
          {colCount} {colCount === 1 ? "column" : "columns"}
        </span>
      </div>
    </div>
  );
}

export function AnimatedCard({ title, body }: { title: string; body: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const [Icon] = useState(() => {
    return cardIcons[Math.floor(Math.random() * cardIcons.length)];
  });

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        ref.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
          },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <div
      ref={ref}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-black/[0.14] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-8"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[oklch(0.65_0.18_250)]/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Random icon */}
      <div className="relative mb-8 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/[0.07] bg-black/[0.025] transition-all duration-500 group-hover:border-[oklch(0.65_0.18_250)]/20 group-hover:bg-[oklch(0.65_0.18_250)]/10">
          <Icon
            size={21}
            strokeWidth={1.8}
            className="text-black/60 transition-all duration-500 group-hover:text-[oklch(0.55_0.18_250)]"
          />
        </div>

        <ArrowUpRight
          size={18}
          className="text-black/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black/60"
        />
      </div>

      {/* Content */}
      <div className="relative">
        <h4 className="mb-3 text-lg font-semibold tracking-tight md:text-xl">
          {title}
        </h4>

        <p className="text-[15px] leading-7 text-black/60 md:text-base">
          {body}
        </p>
      </div>

      {/* Bottom accent */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-[oklch(0.65_0.18_250)] transition-all duration-700 ease-out group-hover:w-full"
      />
    </div>
  );
}
