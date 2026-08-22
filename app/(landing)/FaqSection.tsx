// components/sections/FaqSection.tsx
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Terminal,
  Code2,
  Sparkles,
  ShieldCheck,
  Rocket,
  MessageSquareCode,
  CircleDot,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What does a software development company do?",
    answer:
      "A software development company designs, builds, tests, and maintains software like websites, mobile apps, and business systems built around your specific needs, instead of a one-size-fits-all product.",
  },
  {
    question: "How much does custom software development cost in the USA?",
    answer:
      "It depends on your project. Most custom software development services start around $15,000 for a small project and can go above $250,000 for large, enterprise-level platforms. Clickmasters gives you a clear, fixed quote after a quick discovery call.",
  },
  {
    question: "How long does it take to build custom software?",
    answer:
      "A simple first version usually takes 8-12 weeks. A full enterprise software development project can take 4-9 months, depending on how complex it is.",
  },
  {
    question: "Does Clickmasters work with US-based businesses remotely?",
    answer:
      "Yes. As a software development agency working with clients in the USA, UK, and UAE, we match your working hours, communicate through Slack and Zoom, and share weekly progress updates.",
  },
  {
    question: "What industries does Clickmasters build software for?",
    answer:
      "We build software development solutions for healthcare, fintech, e-commerce, logistics, real estate, education, and manufacturing businesses, among others.",
  },
  {
    question: "Does Clickmasters provide support after the software is launched?",
    answer:
      "Yes. Every project includes support after launch, with ongoing maintenance and upgrade options for the long run.",
  },
  {
    question: "How is Clickmasters different from other software development companies?",
    answer:
      "Clickmasters brings together experienced developers, honest pricing, and strong skills in AI software development services, cloud systems, and enterprise software giving you the reliability of an in-house team with the flexibility of an outside software development firm.",
  },
];

/** Reveals a child on scroll-into-view with a staggered fade/slide. */
function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), delayMs);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return { ref, visible };
}

function FaqRow({ item, index, isOpen, onToggle }: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(index * 70);

  return (
    <div
      ref={ref}
      className={`group border-b border-primary/10 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 py-3.5 text-left hover:bg-primary/5 px-3 -mx-3 rounded-lg transition-colors duration-200"
      >
        <span
          className={`flex-shrink-0 grid place-items-center w-6 h-6 rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-primary border-primary text-primary-foreground rotate-180"
              : "border-primary/20 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
          }`}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </span>

        <span
          className={`text-sm md:text-base font-medium leading-snug transition-colors duration-200 ${
            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
          }`}
        >
          {item.question}
        </span>
      </button>

      {/* Grid-row animation trick: animates height smoothly without a fixed max-height */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pl-9 pb-3.5 pr-4 text-muted-foreground text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Decorative, animated graphic for the right rail abstract "build & ship" motif. */
function FaqVisual() {
  const badges = [
    { icon: Rocket, label: "8-12 wk MVP", className: "top-6 -left-6 lg:-left-10" },
    { icon: ShieldCheck, label: "Post-launch support", className: "bottom-16 -right-4 lg:-right-10" },
    { icon: MessageSquareCode, label: "Weekly updates", className: "top-1/2 -right-8 lg:-right-14" },
  ];

  return (
    <div className="relative hidden lg:flex items-center justify-center h-full min-h-[520px]">
      <style>{`
        @keyframes faq-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes faq-float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        @keyframes faq-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes faq-blob {
          0%, 100% { border-radius: 42% 58% 65% 35% / 45% 40% 60% 55%; }
          50% { border-radius: 60% 40% 40% 60% / 55% 60% 40% 45%; }
        }
        .faq-anim-float { animation: faq-float 6s ease-in-out infinite; }
        .faq-anim-float-slow { animation: faq-float-slow 7s ease-in-out infinite; }
        .faq-anim-spin-slow { animation: faq-spin-slow 22s linear infinite; }
        .faq-anim-blob { animation: faq-blob 10s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .faq-anim-float, .faq-anim-float-slow, .faq-anim-spin-slow, .faq-anim-blob {
            animation: none;
          }
        }
      `}</style>

      {/* soft morphing blob backdrop - softer pastel colors */}
      <div className="absolute w-80 h-80 bg-blue-100/40 faq-anim-blob blur-2xl" />
      <div className="absolute w-72 h-72 bg-purple-100/30 faq-anim-blob blur-2xl" style={{ animationDelay: "-3s" }} />
      <div className="absolute w-64 h-64 border border-primary/10 rounded-full faq-anim-spin-slow" />
      <div className="absolute w-64 h-64 border border-dashed border-primary/8 rounded-full" />

      {/* central terminal card - softer background */}
      <div className="relative faq-anim-float">
        <div className="w-72 rounded-2xl border border-primary/10 bg-gradient-to-br from-white via-blue-50/60 to-purple-50/60 backdrop-blur-sm shadow-xl shadow-blue-200/40 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-primary/10 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-300/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/70" />
            <Terminal className="w-3.5 h-3.5 ml-auto text-muted-foreground/60" />
          </div>
          <div className="p-5 space-y-3 font-mono text-xs text-muted-foreground">
            <p>
              <span className="text-primary">$</span> clickmasters init project
            </p>
            <p className="flex items-center gap-2">
              <CircleDot className="w-3 h-3 text-primary faq-anim-spin-slow" />
              scoping requirements…
            </p>
            <p className="text-foreground/80">✓ discovery call scheduled</p>
            <p className="text-foreground/80">✓ fixed quote generated</p>
            <p className="text-primary">✓ build started</p>
          </div>
        </div>

        {/* floating icon chip - softer */}
        <div className="absolute -top-5 -right-5 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 text-white grid place-items-center shadow-lg shadow-blue-300/30 faq-anim-float-slow">
          <Code2 className="w-6 h-6" />
        </div>
        <div className="absolute -bottom-6 -left-6 w-11 h-11 rounded-full bg-white/90 border border-blue-200/50 grid place-items-center shadow-md shadow-blue-200/30 faq-anim-float">
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>
      </div>

      {/* orbiting stat badges - softer */}
      {badges.map(({ icon: Icon, label, className }, i) => (
        <div
          key={label}
          className={`absolute hidden xl:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-blue-100/60 shadow-md shadow-blue-100/40 text-xs font-medium text-foreground faq-anim-float-slow ${className}`}
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <Icon className="w-3.5 h-3.5 text-primary" />
          {label}
        </div>
      ))}
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Background applied to the section itself - full width
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/40 to-purple-50/30">
      {/* Content container with max-width and centered */}
      <div className="max-w-7xl mx-auto">
        {/* Section header left aligned */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to the most common questions about our software development services.
          </p>
        </div>

        {/* Content: left-aligned single-column FAQ list + right-side animated visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-100/40 shadow-sm shadow-blue-100/30">
              {faqData.map((item, index) => (
                <FaqRow
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>

            {/* Bottom CTA left aligned */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-muted-foreground">
                Still have questions? We&apos;re here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-blue-300/30 w-fit"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FaqVisual />
          </div>
        </div>
      </div>
    </section>
  );
}