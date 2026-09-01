"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import {
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

const inputClass =
  "h-12 rounded-[8px] border border-white/12 bg-white/8 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#f6c85f]";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <PageFrame>
      <section className="relative overflow-hidden bg-background px-5 pt-20 pb-10 md:px-10 md:pt-24 md:pb-16">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm font-medium">
            <span className="text-muted-foreground">Home</span>
            <span className="text-muted-foreground">/</span>
            <span className="font-semibold text-foreground">Contact</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Contact
              </div>
              <h1 className="max-w-5xl text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
                Contact Us
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Ready to turn your software idea into reality? Talk to our
                US-based development experts today. It only takes a few minutes
                to get started.
              </p>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/uscontact.jpeg"
                alt="Contact Clickmasters"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact Info"
              title="A direct line to the team."
              copy="Have a software project in mind? Talk to our development experts in the US today. Whether you need a custom app, web platform, or software solution, we're here to help you get started."
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

          <form
            onSubmit={handleSubmit}
            className="rounded-[8px] bg-[#171717] p-6 text-white shadow-2xl md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Email"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Company
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Company"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Budget
                <input
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Budget"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Project notes
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="min-h-40 rounded-[8px] border border-white/12 bg-white/8 p-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#f6c85f]"
                placeholder="What are you building?"
              />
            </label>

            {/* Status messages */}
            {status === "success" && (
              <p className="mt-4 rounded-[8px] bg-green-500/15 px-4 py-3 text-sm font-semibold text-green-400">
                ✅ Thanks! Your inquiry has been sent. We&apos;ll get back to
                you within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-[8px] bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-400">
                ❌ {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#f6c85f] px-6 py-3 text-sm font-bold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  Sending <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send inquiry <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </PageFrame>
  );
}
