import { notFound } from "next/navigation";
import { MainServicePage, services } from "../LandingPageShell";

type PageProps = {
  params: Promise<{
    main_service: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(services).map((main_service) => ({ main_service }));
}

export async function generateMetadata({ params }: PageProps) {
  const { main_service } = await params;
  const service = services[main_service];

  if (!service) {
    return {
      title: "Service Not Found | Clickmasters",
    };
  }

  return {
    title: `${service.title} | Clickmasters`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { main_service } = await params;
  const service = services[main_service];

  if (!service) {
    notFound();
  }

  return <MainServicePage service={service} />;
}
