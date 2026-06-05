const CARDS = [
  {
    title: "Built for growth",
    desc: "Design with performance, accessibility, and measurable business results in mind.",
  },
  {
    title: "Creative, not chaotic",
    desc: "A structured process keeps every idea aligned with your goals.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Why choose us
        </p>
        <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
          A simple framework for better products.
        </h2>
      </div>
      <div className="mx-auto mt-16 grid gap-6 px-6 md:grid-cols-2 lg:max-w-6xl">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-[2rem] border border-border bg-card p-8"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-4 text-muted-foreground">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
