import Link from "next/link";
import type { CatalogPage } from "@/lib/catalog-page";
import type { ArticleSection } from "@/lib/service-copy";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-6 space-y-5 text-base leading-8 text-black/70 md:text-lg">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 80)} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function CatalogArticle({ page }: { page: CatalogPage }) {
  return (
    <div className="space-y-20">
      {page.lead ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e05b35]">
              Scope
            </p>
            <p className="mt-4 text-xl leading-9 text-black/75">{page.lead}</p>
          </div>
        </section>
      ) : null}

      {page.sections?.length ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl space-y-12">
            {page.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-3xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                {section.body ? (
                  <p className="mt-4 whitespace-pre-line text-base leading-8 text-black/70 md:text-lg">
                    {section.body}
                  </p>
                ) : null}
                {section.items?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {page.servicesCards?.length ? (
        <section className="bg-[#fffaf1] px-5 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              What this engagement delivers
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {page.servicesCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[8px] bg-white p-6 ring-1 ring-black/10"
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.checklist?.length ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Engineering baseline
            </h2>
            <ul className="mt-6 space-y-4">
              {page.checklist.map((item) => (
                <li key={item.item}>
                  <p className="font-semibold">{item.item}</p>
                  {item.standard ? (
                    <p className="text-sm text-black/55">{item.standard}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {page.processPhases?.length ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">Process</h2>
            <ol className="mt-8 space-y-8">
              {page.processPhases.map((phase) => (
                <li key={`${phase.phase}-${phase.title}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05b35]">
                    {[phase.phase, phase.timeline].filter(Boolean).join(" · ")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{phase.title}</h3>
                  <p className="mt-3 text-base leading-8 text-black/70">
                    {phase.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {page.techStackCategories?.length ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Tech stack
            </h2>
            <dl className="mt-6 space-y-4">
              {page.techStackCategories.map((layer) => (
                <div key={layer.layer}>
                  <dt className="font-semibold">{layer.layer}</dt>
                  <dd className="text-black/70">{layer.technologies}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {page.differentiators?.length ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              How we work
            </h2>
            <div className="mt-6 space-y-5">
              {page.differentiators.map((item) => (
                <article key={item.feature}>
                  <h3 className="text-xl font-semibold">{item.feature}</h3>
                  <p className="mt-2 leading-7 text-black/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.industryUseCases?.length ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Where this is used
            </h2>
            <div className="mt-6 space-y-5">
              {page.industryUseCases.map((item) => (
                <article key={item.name}>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 leading-7 text-black/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.pricingTiers?.length ? (
        <section className="bg-[#fffaf1] px-5 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Pricing guidance
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-black/65">
              These ranges are planning anchors. The quote names scope,
              timeline, and what is excluded.{" "}
              <Link href="/contact" className="font-semibold text-[#e05b35]">
                Talk through a quote
              </Link>
              .
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {page.pricingTiers.map((tier) => (
                <article
                  key={tier.type}
                  className="rounded-[8px] bg-white p-6 ring-1 ring-black/10"
                >
                  <h3 className="text-xl font-semibold">{tier.type}</h3>
                  <p className="mt-4 text-3xl font-semibold">
                    {tier.investment}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-black/45">
                    {tier.timeline}
                  </p>
                  {tier.bestFor ? (
                    <p className="mt-4 text-sm leading-6 text-black/65">
                      {tier.bestFor}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.faqs?.length ? (
        <section className="px-5 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">FAQs</h2>
            <div className="mt-8 space-y-8">
              {page.faqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className="mt-3 leading-8 text-black/70">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export function FallbackArticle({ sections }: { sections: ArticleSection[] }) {
  return (
    <section className="px-5 py-8 md:px-10">
      <div className="mx-auto max-w-3xl space-y-14">
        {sections.map((section) => (
          <article key={section.heading}>
            <h2 className="text-3xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <Prose paragraphs={section.paragraphs} />
          </article>
        ))}
      </div>
    </section>
  );
}
