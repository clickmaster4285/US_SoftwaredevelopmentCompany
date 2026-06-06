import { notFound } from "next/navigation";
import SubServicePage from "./SubServicePage";
import { services } from "./service-data";

type PageProps = {
  params: Promise<{
    main_service: string;
    sub_service: string;
  }>;
};

export function generateStaticParams() {
  return Object.values(services).flatMap((service) =>
    (service.subServices || []).map((subService) => ({
      main_service: service.slug,
      sub_service: subService.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { main_service, sub_service } = await params;
  const service = services[main_service];
  const subService = service?.subServices?.find((item) => item.slug === sub_service);

  if (!service || !subService) {
    return {
      title: "Service Not Found | Clickmasters",
    };
  }

  return {
    title: `${subService.title} | ${service.title} | Clickmasters`,
    description: subService.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { main_service, sub_service } = await params;
  const service = services[main_service];
  const subService = service?.subServices?.find((item) => item.slug === sub_service);

  if (!service || !subService) {
    notFound();
  }

  return <SubServicePage service={service} subService={subService} />;
}
