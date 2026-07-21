import { LOGOS_ROW_1, LOGOS_ROW_2, LOGOS_ROW_3 } from "@/app/(landing)/data";

const ROWS = [
  { items: LOGOS_ROW_1, duration: 40, direction: "left" as const },
  { items: LOGOS_ROW_2, duration: 50, direction: "right" as const },
  { items: LOGOS_ROW_3, duration: 45, direction: "left" as const },
];

export default function LogoMarquee() {
  return (
    <section className="bg-[oklch(0.97_0.005_80)] text-[oklch(0.25_0.02_250)] py-24 md:py-32 overflow-hidden">
      <div className="px-8 max-w-5xl mx-auto mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">
          Trusted by
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1]">
          Brands we&apos;ve partnered{" "}
          <span className="italic font-serif">with</span>
        </h2>
      </div>
      {ROWS.map((row, i) => (
        <MarqueeRow
          key={i}
          items={row.items}
          duration={row.duration}
          direction={row.direction}
        />
      ))}
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  direction,
}: {
  items: string[];
  duration: number;
  direction: "left" | "right";
}) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex gap-16 md:gap-24 whitespace-nowrap will-change-transform w-max"
        style={{
          animationName:
            direction === "left" ? "marquee-left" : "marquee-right",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {repeated.map((label, i) => (
          <span
            key={i}
            className="shrink-0 text-xl md:text-3xl font-medium tracking-tight opacity-60 hover:opacity-100 transition-opacity"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
