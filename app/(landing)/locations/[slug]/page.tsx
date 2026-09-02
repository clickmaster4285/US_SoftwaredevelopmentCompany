import { notFound } from "next/navigation";
import LocationServicePage from "./LocationServicePage";
import {
  locationServiceData,
  getLocationServiceData,
  getAllLocationServiceSlugs,
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
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
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
