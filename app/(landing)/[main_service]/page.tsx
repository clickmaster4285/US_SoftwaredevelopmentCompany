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
import type { Metadata } from "next";
import CmsRoute, { cmsRouteMetadata } from "@/components/cms/CmsRoute";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";

type PageProps = {
  params: Promise<{
    main_service: string;
  }>;
};

export const dynamic = "force-static";
// Slugs this route doesn't own fall back to pages created in the ERP (rendered
// on demand, then cached); unknown slugs still end in the normal 404.
export const dynamicParams = true;
// Re-check ERP edits / created pages about once a minute.
export const revalidate = 60;

export function generateStaticParams() {
  const slugs = new Set([
    ...Object.values(mainServiceData).map((service) => service.slug),
    ...Object.values(mainServicesData).map((service) => service.slug),
  ]);

  return [...slugs].map((main_service) => ({ main_service }));
}

export async function generateMetadata({ params }: PageProps) {
  const { main_service } = await params;
  return withEditedPageSeo(`/${main_service}`, await baseMetadata(main_service));
}

async function baseMetadata(main_service: string): Promise<Metadata> {
  const dedicatedService = Object.values(mainServiceData).find(
    (entry) => entry.slug === main_service,
  );
  const service = dedicatedService ?? resolveService(main_service);

  if (!service) {
    return cmsRouteMetadata(`/${main_service}`);
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
    // Not a code-owned service: a page created in the ERP, or the normal 404.
    return <CmsRoute path={`/${main_service}`} />;
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
