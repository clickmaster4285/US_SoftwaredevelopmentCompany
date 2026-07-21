// components/ComparisonSection.tsx

const COMPARISON_ROWS: {
  label: string;
  us: string;
  inhouse: string;
  freelancers: string;
  agencies: string;
}[] = [
  {
    label: "Tech Expertise",
    us: "Senior full-stack engineers",
    inhouse: "Limited skill range",
    freelancers: "Generalist skills",
    agencies: "Junior-heavy teams",
  },
  {
    label: "Speed to Ship",
    us: "MVP in 4–6 weeks",
    inhouse: "Slow ramp-up (3–6 mo)",
    freelancers: "Trial & error",
    agencies: "Endless discovery phases",
  },
  {
    label: "Code Quality",
    us: "Production-grade, tested",
    inhouse: "Tech debt over time",
    freelancers: "Inconsistent standards",
    agencies: "Template-driven builds",
  },
  {
    label: "Communication",
    us: "Daily standups, Slack",
    inhouse: "Internal silos",
    freelancers: "You manage them",
    agencies: "Account-manager filters",
  },
  {
    label: "Cost",
    us: "Niche team, fair rates",
    inhouse: "High fixed overhead",
    freelancers: "Cheap but unreliable",
    agencies: "High cost, low fit",
  },
  {
    label: "Secret Sauce?",
    us: "AI-assisted dev + 8+ yrs experience",
    inhouse: "No outside benchmarks",
    freelancers: "Guesswork-based",
    agencies: "One-size-fits-all stack",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Why choose us
        </p>
        <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
          A simple framework for better products.
        </h2>
        <p className="mt-5 text-sm md:text-base opacity-60">
          Here's why ours wins.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl sm:px-4 ">
        <div className="rounded-3xl border border-[oklch(0.18_0.02_250)]/15 bg-white/60 backdrop-blur-sm p-3 md:p-6 shadow-sm overflow-x-auto">
          <div className="min-w-[720px] grid grid-cols-5 gap-2 md:gap-3 relative">
            {/* Header row */}
            <div />
            <div className="rounded-t-2xl bg-[oklch(0.20_0.02_250)] text-[oklch(0.97_0.005_80)] px-4 py-5 text-center font-semibold tracking-tight">
              ⚡ OUR STUDIO
            </div>
            <div className="px-4 py-5 text-center text-sm md:text-base font-medium opacity-80">
              In-House Team
            </div>
            <div className="px-4 py-5 text-center text-sm md:text-base font-medium opacity-80">
              Freelancers
            </div>
            <div className="px-4 py-5 text-center text-sm md:text-base font-medium opacity-80">
              Other Agencies
            </div>

            {COMPARISON_ROWS.map((row, i) => {
              const last = i === COMPARISON_ROWS.length - 1;
              return (
                <div key={row.label} className="contents">
                  <div className="px-3 md:px-4 py-5 text-md md:text-base font-medium opacity-80 flex items-center">
                    {row.label}
                  </div>
                  <div
                    className={`bg-[oklch(0.20_0.02_250)] text-[oklch(0.97_0.005_80)] px-4 py-5 text-center text-sm md:text-base font-medium ${
                      last ? "rounded-b-2xl" : ""
                    }`}
                  >
                    {row.us}
                  </div>
                  <div className="px-3 md:px-4 py-5 text-center text-md opacity-60 border-t border-[oklch(0.18_0.02_250)]/10 flex items-center justify-center">
                    {row.inhouse}
                  </div>
                  <div className="px-3 md:px-4 py-5 text-center text-md opacity-60 border-t border-[oklch(0.18_0.02_250)]/10 flex items-center justify-center">
                    {row.freelancers}
                  </div>
                  <div className="px-3 md:px-4 py-5 text-center text-md opacity-60 border-t border-[oklch(0.18_0.02_250)]/10 flex items-center justify-center">
                    {row.agencies}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
