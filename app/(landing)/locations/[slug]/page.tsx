import { notFound } from "next/navigation";
import LocationServicePage from "./LocationServicePage";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import {
  getLocationServiceData,
  getAllLocationServiceSlugs,
  type LocationServiceData,
} from "@/data/location-service-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLocationServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = getLocationServiceData(slug);

  if (!data) {
    return {
      title: "Service Not Found | Clickmasters",
      description: "The page you are looking for does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = fitTitle(data.metaTitle);
  const description = fitDescription(data.metaDescription, data.title);

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/locations/${slug}`,
      siteName: "Clickmasters",
      locale: "en_US",
      type: "website",
      images: data.heroImage
        ? [
            {
              url: data.heroImage,
              width: 1200,
              height: 630,
              alt: data.metaTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.heroImage ? [data.heroImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = getLocationServiceData(slug);

  if (!data) {
    notFound();
  }

  const description = fitDescription(data.metaDescription, data.title);
  const areaServed = (data.locations?.length ? data.locations : [data.title]).map(
    (name) => ({ "@type": "AdministrativeArea", name }),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: data.title, path: `/locations/${data.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.title,
          serviceType: "Software development",
          description,
          url: `${SITE_URL}/locations/${data.slug}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed,
        }}
      />
      <LocationServicePage data={{ ...data, testimonials: [] }} />
    </>
  );
}
