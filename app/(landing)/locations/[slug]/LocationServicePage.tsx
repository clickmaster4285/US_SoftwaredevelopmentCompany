"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  CheckCircle2,
  ChevronRight,
  Plus,
  Minus,
  Quote,
  ArrowRight,
  Sparkles,
  ArrowUp,
  ShieldCheck,
  Award,
} from "lucide-react";

import type { LocationServiceData } from "@/data/location-service-data";

type Props = {
  data: LocationServiceData;
};

export default function LocationServicePage({ data }: Props) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const generateSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Clickmasters",
      description: data.metaDescription,
      url: `https://clickmasters.com/${data.slug}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dallas",
        addressRegion: "TX",
        addressCountry: "US",
      },
      areaServed: data.locations || ["Dallas"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement:
          data.serviceLines?.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: service.title,
            description: service.description,
          })) || [],
      },
    };
    return JSON.stringify(schema);
  };

  return (
    <>
      <Head>
        <title>{data.metaTitle || "Software Development Company"}</title>
        <meta name="description" content={data.metaDescription || ""} />
        <link rel="canonical" href={`https://clickmasters.com/${data.slug}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        {data.heroImage && (
          <meta property="og:image" content={data.heroImage} />
        )}
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* ===== SECTION 1: HERO ===== */}
        <section className="relative overflow-hidden bg-background px-5 pt-20 pb-10 md:px-10 md:pt-24 md:pb-16">
          <div className="absolute inset-x-0 top-0 h-px bg-border" />
          <div className="mx-auto max-w-7xl">
            <nav className="mb-6 flex items-center gap-2 text-sm font-medium flex-wrap">
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link
                href="/locations"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Locations
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold text-foreground">{data.title}</span>
            </nav>

            <div
              className={`grid gap-12 ${
                data.heroImage
                  ? "lg:grid-cols-[1.05fr_0.95fr]"
                  : "lg:grid-cols-1"
              } lg:items-center`}
            >
              <div>
                {data.heroBadge && (
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    {data.heroBadge}
                  </div>
                )}
                <h1 className="max-w-5xl text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
                  {data.title}
                </h1>
                {data.intro && (
                  <div className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl whitespace-pre-line">
                    {data.intro}
                  </div>
                )}
                {(data.ctaText || data.ctaHref) && (
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={data.ctaHref || "/contact"}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition hover:opacity-90 hover:shadow-lg"
                    >
                      {data.ctaText || "Get Started"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
              {data.heroImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border shadow-xl">
                  <Image
                    src={data.heroImage}
                    alt={data.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: TRUST ===== */}
        {(data.trustTitle ||
          data.trustDescription ||
          (data.trustPoints?.length ?? 0) > 0) && (
          <section className="bg-secondary px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                  {data.trustTitle && (
                    <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                      {data.trustTitle}
                    </h2>
                  )}
                  {data.trustDescription && (
                    <div className="mt-6 space-y-4 text-muted-foreground">
                      <p className="text-lg leading-8 whitespace-pre-line">
                        {data.trustDescription}
                      </p>
                    </div>
                  )}
                  {(data.trustPoints?.length ?? 0) > 0 && (
                    <div className="mt-6 space-y-3">
                      {data.trustPoints!.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1.5 h-5 w-5 shrink-0 text-primary" />
                          <p className="text-base leading-7">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {data.trustClosing && (
                    <p className="mt-4 text-lg text-foreground whitespace-pre-line">
                      {data.trustClosing}
                    </p>
                  )}
                </div>

                {/* Right side: Trust & Credibility Image Card */}
                <div className="relative">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                    <Image
                      src={data.trustImage || "/assets/why.png"}
                      alt={data.trustTitle || "Trusted Software Development Team"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle gradient overlay to enhance badge contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />

                    {/* Top Credibility Badge: ISO & Security */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span>ISO 27001 &amp; GDPR Compliant</span>
                    </div>

                    {/* Bottom Experience Metrics Card */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border/80 bg-background/95 p-3.5 shadow-xl backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">
                            500+ Projects Delivered
                          </p>
                          <p className="text-xs text-muted-foreground">
                            U.S. Enterprise &amp; Startups
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:block text-right">
                        <p className="text-xs font-semibold text-primary">
                          5+ Yrs Avg.
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Senior Engineers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== SECTION 3: SERVICES ===== */}
        {(data.servicesTitle || (data.serviceLines?.length ?? 0) > 0) && (
          <section className="bg-background px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              {data.servicesTitle && (
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.servicesTitle}
                </h2>
              )}
              {data.servicesDescription && (
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground whitespace-pre-line">
                  {data.servicesDescription}
                </p>
              )}
              {(data.serviceLines?.length ?? 0) > 0 && (
                <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {data.serviceLines!.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border bg-card p-6 text-card-foreground hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {data.servicesClosing && (
                <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
                  {data.servicesClosing}
                </p>
              )}
              {data.servicesCtaText && (
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 hover:shadow-lg"
                  >
                    {data.servicesCtaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===== SECTION 4: BENEFITS ===== */}
        {(data.benefitsTitle || (data.benefits?.length ?? 0) > 0) && (
          <section className="bg-secondary px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              {data.benefitsTitle && (
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.benefitsTitle}
                </h2>
              )}
              {data.benefitsDescription && (
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {data.benefitsDescription}
                </p>
              )}
              {(data.benefits?.length ?? 0) > 0 && (
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {data.benefits!.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-6"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-7">{benefit}</p>
                    </div>
                  ))}
                </div>
              )}
              {data.benefitsClosing && (
                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
                  {data.benefitsClosing}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ===== SECTION 5: WHY CHOOSE US ===== */}
        {(data.whyChooseTitle || (data.whyChoosePoints?.length ?? 0) > 0) && (
          <section className="bg-background px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              {data.whyChooseTitle && (
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.whyChooseTitle}
                </h2>
              )}
              {data.whyChooseDescription && (
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {data.whyChooseDescription}
                </p>
              )}
              {(data.whyChoosePoints?.length ?? 0) > 0 && (
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {data.whyChoosePoints!.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-6"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-7">{point}</p>
                    </div>
                  ))}
                </div>
              )}
              {data.whyChooseClosing && (
                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
                  {data.whyChooseClosing}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ===== SECTION 6: INDUSTRIES ===== */}
        {(data.industriesTitle || (data.industries?.length ?? 0) > 0) && (
          <section className="bg-secondary px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              {data.industriesTitle && (
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.industriesTitle}
                </h2>
              )}
              {data.industriesDescription && (
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {data.industriesDescription}
                </p>
              )}
              {(data.industries?.length ?? 0) > 0 && (
                <ul className="mt-10 grid gap-3 md:grid-cols-2">
                  {data.industries!.map((industry, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {industry}
                    </li>
                  ))}
                </ul>
              )}
              {data.industriesClosing && (
                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
                  {data.industriesClosing}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ===== SECTION 7: PROCESS ===== */}
        {(data.processTitle || (data.processSteps?.length ?? 0) > 0) && (
          <section className="bg-background px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              {data.processTitle && (
                <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.processTitle}
                </h2>
              )}
              {data.processDescription && (
                <p className="mt-4 max-w-3xl text-center text-lg leading-8 text-muted-foreground mx-auto">
                  {data.processDescription}
                </p>
              )}
              {(data.processSteps?.length ?? 0) > 0 && (
                <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {data.processSteps!.map((step, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {step.step}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {data.processClosing && (
                <p className="mt-8 max-w-3xl text-center text-base leading-7 text-muted-foreground mx-auto">
                  {data.processClosing}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ===== SECTION 8: TESTIMONIALS ===== */}
        {(data.testimonials?.length ?? 0) > 0 && (
          <section className="bg-secondary px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              {data.testimonialsTitle && (
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.testimonialsTitle}
                </h2>
              )}
              {data.testimonialsDescription && (
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {data.testimonialsDescription}
                </p>
              )}
              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {data.testimonials!.map((testimonial, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-2 text-yellow-400 text-sm font-bold">
                      ★★★★★
                    </div>
                    <Quote className="mb-4 h-8 w-8 text-primary/20" />
                    <p className="text-base leading-7 text-muted-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {data.testimonialsClosing && (
                <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
                  {data.testimonialsClosing}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ===== SECTION 9: LOCATIONS ===== */}
        {(data.locationsTitle || (data.locations?.length ?? 0) > 0) && (
          <section className="bg-background px-5 py-24 md:px-10">
            <div className="mx-auto max-w-7xl">
              {data.locationsTitle && (
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.locationsTitle}
                </h2>
              )}
              {data.locationsDescription && (
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground whitespace-pre-line">
                  {data.locationsDescription}
                </p>
              )}
              {data.locations?.length && data.locations.length > 0 && (
                <>
                  <p className="mt-6 text-base leading-7 text-muted-foreground">
                    We serve businesses in:
                  </p>
                  <ul className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {data.locations.map((location, index) => (
                      <li
                        key={index}
                        className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary transition-colors"
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {data.locationsClosing && (
                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
                  {data.locationsClosing}
                </p>
              )}
              {data.locationsCtaText && (
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 hover:shadow-lg"
                  >
                    {data.locationsCtaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===== SECTION 10: FAQ ===== */}
        {(data.faqs?.length ?? 0) > 0 && (
          <section className="bg-secondary px-5 py-24 md:px-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="mt-14 divide-y divide-border rounded-xl border border-border bg-card">
                {data.faqs!.map((faq, index) => (
                  <FaqAccordionItem key={index} index={index} faq={faq} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== SECTION 11: CLOSING CTA ===== */}
        {(data.closingTitle || data.closingDescription || data.closingCtaText) && (
          <section className="bg-background px-5 py-24 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              {data.closingTitle && (
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                  {data.closingTitle}
                </h2>
              )}
              {data.closingDescription && (
                <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
                  {data.closingDescription}
                </p>
              )}
              {data.closingCtaText && (
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition hover:opacity-90 hover:shadow-lg"
                  >
                    {data.closingCtaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        <Footer />

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 rounded-full bg-primary p-3 text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  );
}

// FAQ Accordion Component
type Faq = {
  question: string;
  answer: string;
};

function FaqAccordionItem({ faq, index }: { faq: Faq; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-muted/40"
      >
        <span
          className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-200 ${
            isOpen ? "text-primary" : "text-foreground"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-180 border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground"
          }`}
        >
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-7 text-muted-foreground md:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}