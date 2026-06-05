const dominateVideo = "/dominate-video.mp4";

export default function DominateSection() {
  return (
    <section className="bg-[oklch(0.98_0.005_170)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Everything you need
          </p>
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
            Your brand, built for momentum.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            We build immersive digital experiences that feel premium while keeping
            product goals centered.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 rounded-[2rem] overflow-hidden border border-border bg-black/10">
          <video
            src={dominateVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
