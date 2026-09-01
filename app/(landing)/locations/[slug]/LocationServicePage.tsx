"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Quote,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type LocationServiceData = {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  title: string;
  heroBadge?: string;
  heroImage?: string;
  intro?: string;
  ctaText?: string;
  ctaHref?: string;
  trustTitle?: string;
  trustDescription?: string;
  trustPoints?: string[];
  trustClosing?: string;
  servicesTitle?: string;
  servicesDescription?: string;
  serviceLines?: Array<{ title: string; description: string }>;
  servicesCtaText?: string;
  benefitsTitle?: string;
  benefitsDescription?: string;
  benefits?: string[];
  whyChooseTitle?: string;
  whyChooseDescription?: string;
  whyChoosePoints?: string[];
  whyChooseClosing?: string;
  industriesTitle?: string;
  industriesDescription?: string;
  industries?: string[];
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
  processTitle?: string;
  processDescription?: string;
  processSteps?: Array<{ step: string; title: string; description: string }>;
  locationsTitle?: string;
  locationsDescription?: string;
  locations?: string[];
  locationsClosing?: string;
  locationsCtaText?: string;
  faqs?: Array<{ question: string; answer: string }>;
  closingTitle?: string;
  closingCtaText?: string;
};

type Props = {
  data: LocationServiceData;
};

export default function LocationServicePage({ data }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-5 pt-20 pb-10 md:px-10 md:pt-24 md:pb-16 ">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">{data.title}</span>
          </nav>

          <div
            className={`grid gap-12 ${
              data.heroImage ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-1"
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
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl whitespace-pre-line">
                  {data.intro}
                </p>
              )}
              {(data.ctaText || data.ctaHref) && (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={data.ctaHref || "/contact"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
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
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      {(data.trustTitle || data.trustDescription || data.trustPoints) && (
        <section className="bg-secondary px-5 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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
                  <p className="mt-4 text-lg font-semibold text-foreground whitespace-pre-line">
                    {data.trustClosing}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {(data.servicesTitle || data.serviceLines?.length) && (
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
                    className="rounded-lg border border-border bg-card p-6 text-card-foreground"
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
            {data.servicesCtaText && (
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  {data.servicesCtaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {(data.benefitsTitle || data.benefits?.length) && (
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
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {(data.whyChooseTitle || data.whyChoosePoints?.length) && (
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

      {/* Industries Section */}
      {(data.industriesTitle || data.industries?.length) && (
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
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {data.testimonials?.length ? (
        <section className="bg-background px-5 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
              Success Stories
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {data.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative rounded-lg border border-border bg-card p-6"
                >
                  <Quote className="mb-4 h-8 w-8 text-primary/20" />
                  <p className="text-base leading-7 text-muted-foreground">
                    {testimonial.quote}
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
          </div>
        </section>
      ) : null}

      {/* Process Section */}
      {(data.processTitle || data.processSteps?.length) && (
        <section className="bg-secondary px-5 py-24 md:px-10">
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
                    className="rounded-lg border border-border bg-card p-6"
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
          </div>
        </section>
      )}

      {/* Locations Section */}
      {(data.locationsTitle || data.locations?.length) && (
        <section className="bg-background px-5 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            {data.locationsTitle && (
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                {data.locationsTitle}
              </h2>
            )}
            {data.locationsDescription && (
              <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                {data.locationsDescription}
              </p>
            )}
            {(data.locations?.length ?? 0) > 0 && (
              <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {data.locations!.map((location, index) => (
                  <li
                    key={index}
                    className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {location}
                  </li>
                ))}
              </ul>
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
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  {data.locationsCtaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faqs?.length ? (
        <section className="bg-secondary px-5 py-24 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="mt-14 divide-y divide-border rounded-xl border border-border bg-card">
              {data.faqs.map((faq, index) => (
                <FaqAccordionItem key={index} index={index} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Closing CTA Section */}
      {(data.closingTitle || data.closingCtaText) && (
        <section className="bg-background px-5 py-24 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            {data.closingTitle && (
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                {data.closingTitle}
              </h2>
            )}
            {data.closingCtaText && (
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
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
    </div>
  );
}

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
