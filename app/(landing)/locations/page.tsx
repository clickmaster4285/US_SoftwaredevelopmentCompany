import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, ChevronRight, MapPin, Sparkles } from "lucide-react";
import {
  getLocationServiceData,
  getAllLocationServiceSlugs,
} from "@/data/location-service-data";

export const metadata = {
  title: "Software Development Company Locations | Clickmasters",
  description:
    "Find software development services in your area. Clickmasters serves businesses across Los Angeles and beyond with custom software, web, mobile, and AI solutions.",
};

export default function LocationsPage() {
  const locations = getAllLocationServiceSlugs()
    .map((slug) => getLocationServiceData(slug))
    .filter(
      (
        location,
      ): location is NonNullable<ReturnType<typeof getLocationServiceData>> =>
        location !== null,
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-5 pt-20 pb-10 md:px-10 md:pt-24 md:pb-16">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">Locations</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Our Locations
              </div>
              <h1 className="max-w-5xl text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
                Software Development Company Locations
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Find a software development partner near you. Clickmasters
                serves businesses across the United States with custom software,
                web, mobile, and AI solutions.
              </p>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/locations/hero-locations.jpg"
                alt="Clickmasters Software Development Company Locations"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-background px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition hover:-translate-y-1 hover:shadow-xl"
              >
                {location.heroImage && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={location.heroImage}
                      alt={location.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {location.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">
                    {location.intro}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
