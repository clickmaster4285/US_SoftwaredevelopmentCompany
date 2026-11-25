import Link from "next/link";
import type { CatalogPage } from "@/lib/catalog-page";
import type { ArticleSection } from "@/lib/service-copy";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="cx-mt6-spacey-f">
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c44a24]">
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
                <h2 className="cx-text3x-fontse-2">
                  {section.heading}
                </h2>
                {section.body ? (
                  <p className="cx-mt4-whites-j">
                    {section.body}
                  </p>
                ) : null}
                {section.items?.length ? (
                  <ul className="cx-mt4-listdi-18">
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
            <h2 className="cx-text3x-fontse-2">
              What this engagement delivers
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {page.servicesCards.map((card) => (
                <article
                  key={card.title}
                  className="cx-rounde-bgwhit-0"
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="cx-mt3-textsm-i">
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
            <h2 className="cx-text3x-fontse-2">
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
            <h2 className="cx-text3x-fontse-2">Process</h2>
            <ol className="mt-8 space-y-8">
              {page.processPhases.map((phase) => (
                <li key={`${phase.phase}-${phase.title}`}>
                  <p className="cx-textxs-fontse-7">
                    {[phase.phase, phase.timeline].filter(Boolean).join(" · ")}
                  </p>
                  <h3 className="cx-mt2-text2x-p">{phase.title}</h3>
                  <p className="cx-mt3-textba-g">
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
            <h2 className="cx-text3x-fontse-2">
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
            <h2 className="cx-text3x-fontse-2">
              How we work
            </h2>
            <div className="mt-6 space-y-5">
              {page.differentiators.map((item) => (
                <article key={item.feature}>
                  <h3 className="text-xl font-semibold">{item.feature}</h3>
                  <p className="cx-mt2-leadin-c">
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
            <h2 className="cx-text3x-fontse-2">
              Where this is used
            </h2>
            <div className="mt-6 space-y-5">
              {page.industryUseCases.map((item) => (
                <article key={item.name}>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="cx-mt2-leadin-c">
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
            <h2 className="cx-text3x-fontse-2">
              Pricing guidance
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-black/65">
              These ranges are planning anchors. The quote names scope,
              timeline, and what is excluded.{" "}
              <Link href="/contact" className="cx-fontse-textc4-4">
                Talk through a quote
              </Link>
              .
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {page.pricingTiers.map((tier) => (
                <article
                  key={tier.type}
                  className="cx-rounde-bgwhit-0"
                >
                  <h3 className="text-xl font-semibold">{tier.type}</h3>
                  <p className="cx-mt4-text3x-k">
                    {tier.investment}
                  </p>
                  <p className="cx-mt2-textsm-6">
                    {tier.timeline}
                  </p>
                  {tier.bestFor ? (
                    <p className="cx-mt4-textsm-e">
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
            <h2 className="cx-text3x-fontse-2">FAQs</h2>
            <div className="mt-8 space-y-8">
              {page.faqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className="cx-mt3-leadin-n">{faq.answer}</p>
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
            <h2 className="cx-text3x-fontse-2">
              {section.heading}
            </h2>
            <Prose paragraphs={section.paragraphs} />
          </article>
        ))}
      </div>
    </section>
  );
}
