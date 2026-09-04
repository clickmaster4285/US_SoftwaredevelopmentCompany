import { notFound } from "next/navigation";
import LocationServicePage from "./LocationServicePage";
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

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://clickmasters.com/${slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://clickmasters.com/${slug}`,
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
      title: data.metaTitle,
      description: data.metaDescription,
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

  return <LocationServicePage data={data} />;
}