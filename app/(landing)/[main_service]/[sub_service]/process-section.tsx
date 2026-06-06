import { SectionHeading } from "./landing-primitives";

const processSteps = [
  "Discovery and technical mapping",
  "Experience design and architecture",
  "Sprint delivery with weekly demos",
  "Launch, monitoring, and optimization",
];

export default function ProcessSection() {
  return (
    <section className="bg-[#171717] px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="Structured enough to stay predictable."
          copy="Every engagement has a clear path from first call to production handoff."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-[8px] border border-white/10 bg-white/8 p-6"
            >
              <p className="text-sm font-semibold text-[#f6c85f]">
                0{index + 1}
              </p>
              <p className="mt-12 text-xl font-semibold leading-tight">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
