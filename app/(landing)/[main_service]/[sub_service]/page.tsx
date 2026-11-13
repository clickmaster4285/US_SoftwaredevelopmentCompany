import { redirect } from "next/navigation";
import SubServicePage from "./SubServicePage";
import { resolveService, services } from "./service-data";
import { destinationFor, isRetiredSub } from "@/lib/site-routes.mjs";
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
    sub_service: string;
  }>;
};

export const dynamic = "force-static";
// Slugs this route doesn't own fall back to pages created in the ERP (rendered
// on demand, then cached); unknown slugs still end in the normal 404.
export const dynamicParams = true;
// Re-check ERP edits / created pages about once a minute.
export const revalidate = 60;

export function generateStaticParams() {
  return Object.values(services).flatMap((service) =>
    (service.subServices || [])
      .filter((subService) => !isRetiredSub(service.slug, subService.slug))
      .map((subService) => ({
        main_service: service.slug,
        sub_service: subService.slug,
      })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { main_service, sub_service } = await params;
  return withEditedPageSeo(
    `/${main_service}/${sub_service}`,
    await baseMetadata(main_service, sub_service),
  );
}

async function baseMetadata(
  main_service: string,
  sub_service: string,
): Promise<Metadata> {
  const service = resolveService(main_service);
  const subService = service?.subServices?.find(
    (item) => item.slug === sub_service,
  );

  if (!service || !subService) {
    return cmsRouteMetadata(`/${main_service}/${sub_service}`);
  }

  const canonical = `/${main_service}/${sub_service}`;
  const title = fitTitle(subService.metaTitle || subService.title);
  const description = fitDescription(
    subService.metaDescription || subService.description,
    subService.title,
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

export default async function Page({ params }: PageProps) {
  const { main_service, sub_service } = await params;
  const service = resolveService(main_service);
  const subService = service?.subServices?.find(
    (item) => item.slug === sub_service,
  );

  if (!service || !subService) {
    // Not a code-owned sub-service: a page created in the ERP, or the normal 404.
    return <CmsRoute path={`/${main_service}/${sub_service}`} />;
  }

  const target = destinationFor(main_service, sub_service);
  if (target) redirect(target);

  const path = `/${service.slug}/${subService.slug}`;
  const description = fitDescription(
    subService.metaDescription || subService.description,
    subService.title,
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: service.title, path: `/${service.slug}` },
          { name: subService.title, path },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: subService.title,
          description,
          path,
        })}
      />
      <SubServicePage service={service} subService={subService} />
    </>
  );
}
