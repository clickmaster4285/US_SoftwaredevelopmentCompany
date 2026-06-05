import audienceAgencies from "@/public/assets/audience-agencies.jpg";
import audienceCreators from "@/public/assets/audience-creators.jpg";
import audienceMarketing from "@/public/assets/audience-marketing.jpg";
import { resolveMediaSrc } from "@/lib/media";

const AUDIENCES = [
  { title: "Agencies", image: audienceAgencies },
  { title: "Creators", image: audienceCreators },
  { title: "Marketers", image: audienceMarketing },
];

export default function AudienceCarousel() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Who it's for
        </p>
        <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
          Brands, agencies, and founders who want better digital work.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3 px-6">
        {AUDIENCES.map((audience) => (
          <div
            key={audience.title}
            className="rounded-[2rem] border border-border overflow-hidden bg-card"
          >
            <img
              src={resolveMediaSrc(audience.image)}
              alt={audience.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{audience.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
