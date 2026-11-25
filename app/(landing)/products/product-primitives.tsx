// Presentational building blocks shared by the product pages. Kept free of
// page code so client sections (practice-sections.tsx, ehr-sections.tsx) can
// import them without pulling whole pages into the browser bundle.
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/mask-icons";
import { shortKey } from "@/lib/short-key";
import { productLink } from "./clinic-management-data";

export function Section({
  id,
  eyebrow,
  title,
  children,
  aside,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section id={id} className="cm-sec">
      <div className="cm-wrap">
        {eyebrow ? (
          <p className="cm-eyebrow">
            {eyebrow}
          </p>
        ) : null}
        {aside ? (
          <div className="mt-3 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </div>
            {aside}
          </div>
        ) : (
          <>
            <h2 className="cm-h2">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </>
        )}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="cm-prose">
      {children}
    </div>
  );
}

export function CompareTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  // One table for every viewport. It used to render twice (a card list for
  // mobile plus a hidden desktop table), so every table's text shipped twice
  // in the HTML and twice again in the RSC payload. Below md, `.cm-compare`
  // (globals.css) restyles rows as cards and labels cells from data-label.
  return (
    <div className="cx-mt8-overfl-3">
      <table className="cm-compare w-full border-collapse text-left text-sm md:min-w-[720px]">
        <caption className="sr-only">{caption}</caption>
        <thead className="cx-bgseco-textfo-l">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={`${index}-${cell}`} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={`${index}-${cell}`} data-label={headers[index]}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const linkClass = "font-medium text-foreground underline underline-offset-4";

export function ProductLink({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  return (
    <Link href={productLink(slug)} className={linkClass}>
      {children}
    </Link>
  );
}

export function CtaBand({
  title,
  text,
  cta,
}: {
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-secondary p-6 md:flex-row md:items-center md:p-8">
      <div className="max-w-2xl">
        <p className="text-lg font-semibold tracking-tight md:text-xl">
          {title}
        </p>
        <p className="cm-p2">{text}</p>
      </div>
      <Link
        href="/contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
