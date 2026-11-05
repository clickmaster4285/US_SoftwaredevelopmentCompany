import { notFound, redirect } from "next/navigation";
import DedicatedMainServicePage from "./main-service-page";
import LegacyMainServicePage from "./MainServicePage";
import { mainServiceData } from "@/data/main-services-data";
import { mainServicesData } from "@/data/main-services";
import { resolveService } from "./[sub_service]/service-data";
import { destinationFor } from "@/lib/site-routes.mjs";
import { fitDescription, fitTitle } from "@/lib/seo";
import {
  breadcrumbSchema,
  JsonLd,
  serviceSchema,
} from "@/components/seo/JsonLd";

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
    const title = fitTitle(dedicatedService.metaTitle || dedicatedService.title);
    const description = fitDescription(
      dedicatedService.metaDescription,
      dedicatedService.title,
    );
    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
      },
    };
  }

  const title = fitTitle(service.title);
  const description = fitDescription(service.description, service.title);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { main_service } = await params;
  const target = destinationFor(main_service);
  if (target) redirect(target);

  const dedicatedService = Object.values(mainServiceData).find(
    (entry) => entry.slug === main_service,
  );

  const service = dedicatedService ?? resolveService(main_service);
  if (!service) {
    notFound();
  }

  const description = fitDescription(
    "metaDescription" in service && typeof service.metaDescription === "string"
      ? service.metaDescription
      : service.description,
    service.title,
  );
  const seo = (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: service.title, path: `/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description,
          path: `/${service.slug}`,
        })}
      />
    </>
  );

  if (dedicatedService) {
    return (
      <>
        {seo}
        <DedicatedMainServicePage service={dedicatedService} />
      </>
    );
  }

  const legacy = resolveService(main_service);
  if (!legacy) notFound();

  return (
    <>
      {seo}
      <LegacyMainServicePage service={legacy} />
    </>
  );
}
