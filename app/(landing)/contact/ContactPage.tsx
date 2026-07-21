import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import {
  Hero,
  PageFrame,
  SectionHeading,
} from "../[main_service]/[sub_service]/landing-primitives";

const contactItems = [
  {
    icon: Mail,
    label: "sales@Clickmasterssoftwaredevelopmentcompany.com",
  },
  { icon: Phone, label: "+1 325 2024074" },
  {
    icon: MapPin,
    label: "Remote-first delivery across US, Europe, Canada, and Australia",
  },
];

const fields = ["Name", "Email", "Company", "Budget"];

export default function ContactPage() {
  return (
    <PageFrame>
      <Hero
        eyebrow="Contact"
        title="Bring the messy brief. We will shape the build."
        copy="Tell us what you are trying to launch, repair, automate, or scale. We will come back with the cleanest route to production."
        badge="Response within one business day"
      />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Start here"
              title="A direct line to the team."
              copy="Send a short note with your goals, timeline, and current stack if you have one."
            />
            <div className="mt-10 space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-black/10"
                >
                  <item.icon className="mt-0.5 h-5 w-5 text-[#e05b35]" />
                  <p className="font-medium leading-6">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-[8px] bg-[#171717] p-6 text-white shadow-2xl md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((label) => (
                <label key={label} className="grid gap-2 text-sm font-semibold">
                  {label}
                  <input
                    className="h-12 rounded-[8px] border border-white/12 bg-white/8 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#f6c85f]"
                    placeholder={label}
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Project notes
              <textarea
                className="min-h-40 rounded-[8px] border border-white/12 bg-white/8 p-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#f6c85f]"
                placeholder="What are you building?"
              />
            </label>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#f6c85f] px-6 py-3 text-sm font-bold text-black transition hover:bg-white"
            >
              Send inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </PageFrame>
  );
}
