import { CheckCircle, Code2, FileText, Shield, Video } from "lucide-react";

const TRUST_REASONS = [
  {
    id: "scope",
    label: "Written scope",
    icon: FileText,
    description: "Milestones and exclusions before development starts",
    bg: "#ffffff",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
  {
    id: "code",
    label: "Client-owned code",
    icon: Code2,
    description: "Repositories and credentials transfer to you",
    bg: "#f5f5f5",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
  {
    id: "remote",
    label: "Remote-first",
    icon: Video,
    description: "Working sessions by video and phone",
    bg: "#ffffff",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
  {
    id: "review",
    label: "Reviewed releases",
    icon: Shield,
    description: "Checks run on the agreed workflows before launch",
    bg: "#f5f5f5",
    fg: "#1a1a1a",
    accent: "rgba(0,0,0,0.06)",
  },
];

export default function TrustedBy() {
  return (
    <section className="py-24 md:py-32 bg-[oklch(0.97_0.005_80)] text-[oklch(0.18_0.02_250)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[oklch(0.5_0.05_250)]">
            How engagements run
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight text-[oklch(0.18_0.02_250)]">
            Built for teams that <span className="italic font-serif">ship</span>
          </h2>
          <p className="mt-5 text-sm md:text-base opacity-60 max-w-2xl mx-auto text-[oklch(0.18_0.02_250)]">
            Scope, ownership, and review are written into the engagement. We
            publish a client result only when that client has agreed to a case
            study.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative rounded-2xl border border-[oklch(0.7_0.02_250)]/20 bg-white p-6 md:p-8 transition-all duration-300 hover:border-[oklch(0.5_0.05_250)]/30 hover:shadow-xl hover:shadow-black/5"
                style={{
                  background: reason.bg,
                  color: reason.fg,
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.5_0.05_250)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors duration-300"
                    style={{
                      background: reason.accent,
                      color: reason.fg,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Counter */}
                  <p
                    className="mt-3 text-2xl font-semibold tracking-tight"
                    style={{ color: reason.fg }}
                  >
                    {reason.label}
                  </p>

                  {/* Description */}
                  <p
                    className="mt-1.5 text-sm"
                    style={{
                      color: reason.fg,
                      opacity: 0.5,
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-sm opacity-60 text-[oklch(0.18_0.02_250)]">
            <CheckCircle className="w-4 h-4 text-[oklch(0.4_0.05_250)]" />
            <span>Written scope before build</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-60 text-[oklch(0.18_0.02_250)]">
            <CheckCircle className="w-4 h-4 text-[oklch(0.4_0.05_250)]" />
            <span>Client-owned code</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-60 text-[oklch(0.18_0.02_250)]">
            <CheckCircle className="w-4 h-4 text-[oklch(0.4_0.05_250)]" />
            <span>Remote-first delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
