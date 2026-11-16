import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { IndustryIcon } from "@/components/products/IndustryIcon";
import {
  industryPath,
  productIndustries,
  productPath,
  type ProductIndustry,
  type ProductItem,
} from "@/data/products";

function Crumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function TalkToUs() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Want this built for your operation?
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Tell us the industry and the workflow. We scope the product, the timeline, and the quote before development starts.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function ProductsIndexPage() {
  const total = productIndustries.reduce(
    (count, industry) => count + industry.products.length,
    0,
  );

  return (
    <PageFrame>
      <main className="bg-background text-foreground">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
          <Crumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Products
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
                Software products for the work your industry already does
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {total} products across {productIndustries.length} industries. Open an industry to see its products, or go straight to the one you need.
              </p>
            </div>
            <aside className="rounded-3xl border border-border bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {productIndustries.length} industries · {total} products
              </p>
              <ul className="mt-4 space-y-1">
                {productIndustries.map((industry) => (
                  <li key={industry.slug}>
                    <a
                      href={`#${industry.slug}`}
                      className="flex items-center justify-between gap-3 rounded-xl px-2 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      <span className="flex min-w-0 items-start gap-2">
                        <IndustryIcon name={industry.icon} className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="leading-snug">{industry.label}</span>
                      </span>
                      <span className="text-xs text-muted-foreground">{industry.products.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {productIndustries.map((industry) => (
          <section
            key={industry.slug}
            id={industry.slug}
            className="scroll-mt-28 border-t border-border py-14 md:py-16"
          >
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <IndustryIcon name={industry.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {industry.products.length} products
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                      {industry.label}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={industryPath(industry.slug)}
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary"
                >
                  Industry page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {industry.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={productPath(industry.slug, product.slug)}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <h3 className="text-base font-semibold leading-snug group-hover:text-primary">
                      {product.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                      {product.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      View product
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
        <TalkToUs />
      </main>
    </PageFrame>
  );
}

export function IndustryProductsPage({ industry }: { industry: ProductIndustry }) {
  const others = productIndustries.filter((item) => item.slug !== industry.slug);

  return (
    <PageFrame>
      <main className="bg-background text-foreground">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
          <Crumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: industry.label },
            ]}
          />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Industry
              </p>
              <div className="mt-4 flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <IndustryIcon name={industry.icon} className="h-6 w-6" />
                </span>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
                  {industry.label}
                </h1>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {industry.lead}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                {industry.products.length} products in this suite. Open one to see what it covers, or tell us which workflow you want built.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  See the products
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold"
                >
                  Talk about this industry
                </Link>
              </div>
            </div>
            <aside className="rounded-3xl border border-border bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                On this page
              </p>
              <ol className="mt-4 space-y-1">
                {industry.products.map((product, index) => (
                  <li key={product.slug}>
                    <a
                      href={`#${product.slug}`}
                      className="flex items-start gap-3 rounded-xl px-2 py-2 text-sm font-medium leading-snug hover:bg-secondary"
                    >
                      <span className="mt-0.5 w-5 shrink-0 text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{product.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section className="border-t border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Built for
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {industry.audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-2xl border border-border bg-white px-4 py-4 text-sm font-semibold leading-snug"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="products" className="scroll-mt-28 py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {industry.products.length} products
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Products in {industry.label}
            </h2>
            <div className="mt-8 grid gap-4">
              {industry.products.map((product, index) => (
                <article
                  key={product.slug}
                  id={product.slug}
                  className="scroll-mt-28 rounded-3xl border border-border bg-white p-6 md:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                        {product.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                        {product.description}
                      </p>
                      <Link
                        href={productPath(industry.slug, product.slug)}
                        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                      >
                        Open product page
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <ul className="space-y-2">
                      {product.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-xl bg-secondary px-4 py-3 text-sm font-medium leading-6"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">Other industries</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={industryPath(item.slug)}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-4 hover:border-primary/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <IndustryIcon name={item.icon} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-snug group-hover:text-primary">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {item.products.length} products
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <TalkToUs />
      </main>
    </PageFrame>
  );
}

export function ProductDetailPage({
  industry,
  product,
}: {
  industry: ProductIndustry;
  product: ProductItem;
}) {
  const related = industry.products.filter((item) => item.slug !== product.slug);

  return (
    <PageFrame>
      <main className="bg-background pt-28 text-foreground md:pt-32">
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          <Crumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: industry.label, href: industryPath(industry.slug) },
              { label: product.title },
            ]}
          />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {industry.label}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {product.points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-border bg-white p-5 text-sm font-medium leading-6"
              >
                {point}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Talk about {product.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {related.length > 0 ? (
          <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              More in {industry.label}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={productPath(industry.slug, item.slug)}
                  className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold hover:border-primary/30 hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
        <TalkToUs />
      </main>
    </PageFrame>
  );
}
