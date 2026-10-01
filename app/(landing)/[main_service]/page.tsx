import { notFound } from "next/navigation";
import DedicatedMainServicePage from "./main-service-page";
import LegacyMainServicePage from "./MainServicePage";
import { mainServiceData } from "@/data/main-services-data";
import { mainServicesData } from "@/data/main-services";
import { resolveService } from "./[sub_service]/service-data";

type PageProps = {
  params: Promise<{
    main_service: string;
  }>;
};

export function generateStaticParams() {
  const slugs = new Set([
    ...Object.values(mainServiceData).map((service) => service.slug),
    ...Object.values(mainServicesData).map((service) => service.slug),
  ]);

  return [...slugs].map((main_service) => ({ main_service }));
}

export async function generateMetadata({ params }: PageProps) {
  const { main_service } = await params;
  const dedicatedService = Object.values(mainServiceData).find(
    (entry) => entry.slug === main_service,
  );
  const service = dedicatedService ?? resolveService(main_service);

  if (!service) {
    return {
      title: "Service Not Found | Clickmasters",
    };
  }

  const canonical = `/${main_service}`;

  if (dedicatedService) {
    return {
      title: dedicatedService.metaTitle,
      description: dedicatedService.metaDescription,
      alternates: {
        canonical,
      },
      openGraph: {
        title: dedicatedService.metaTitle,
        description: dedicatedService.metaDescription,
        url: canonical,
      },
    };
  }

  return {
    title: `${service.title} | Clickmasters`,
    description: service.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${service.title} | Clickmasters`,
      description: service.description,
      url: canonical,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { main_service } = await params;
  const dedicatedService = Object.values(mainServiceData).find(
    (entry) => entry.slug === main_service,
  );

  if (dedicatedService) {
    return <DedicatedMainServicePage service={dedicatedService} />;
  }

  const service = resolveService(main_service);
  if (!service) {
    notFound();
  }

  return <LegacyMainServicePage service={service} />;
}
