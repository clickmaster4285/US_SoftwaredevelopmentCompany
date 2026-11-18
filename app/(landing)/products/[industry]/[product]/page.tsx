import { notFound } from "next/navigation";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import HospitalManagementPage, {
  HOSPITAL_PATH,
  hospitalManagementSchema,
} from "../../hospital-management-page";
import ClinicManagementPage, {
  CLINIC_PATH,
  clinicDescription,
  clinicManagementSchema,
  clinicTitle,
} from "../../clinic-management-page";
import EhrPage, {
  EHR_PATH,
  ehrDescription,
  ehrSchema,
  ehrTitle,
} from "../../ehr-page";
import EmrPage, {
  EMR_PATH,
  emrDescription,
  emrSchema,
  emrTitle,
} from "../../emr-page";
import PharmacyPage, {
  PHARMACY_PATH,
  pharmacyDescription,
  pharmacySchema,
  pharmacyTitle,
} from "../../pharmacy-page";
import LimsPage, {
  LIMS_PATH,
  limsDescription,
  limsSchema,
  limsTitle,
} from "../../lims-page";
import BillingPage, {
  BILLING_PATH,
  billingDescription,
  billingSchema,
  billingTitle,
} from "../../billing-page";
import PatientPage, {
  PATIENT_PATH,
  patientDescription,
  patientSchema,
  patientTitle,
} from "../../patient-page";
import TelemedicinePage, {
  TELE_PATH,
  teleDescription,
  teleSchema,
  teleTitle,
} from "../../telemedicine-page";
import PracticeManagementPage, {
  PRACTICE_PATH,
  practiceDescription,
  practiceManagementSchema,
  practiceTitle,
} from "../../practice-management-page";
import {
  findProduct,
  industryPath,
  productIndustries,
  productPath,
} from "@/data/products";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import { fitDescription, fitTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { ProductDetailPage } from "../../views";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 60;

type PageProps = {
  params: Promise<{ industry: string; product: string }>;
};

export function generateStaticParams() {
  return productIndustries.flatMap((industry) =>
    industry.products.map((product) => ({
      industry: industry.slug,
      product: product.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: industrySlug, product: productSlug } = await params;
  const match = findProduct(industrySlug, productSlug);
  if (!match) return {};

  const path = productPath(match.industry.slug, match.product.slug);
  if (path === TELE_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: teleTitle },
      description: teleDescription,
      alternates: { canonical: path },
      openGraph: {
        title: teleTitle,
        description: teleDescription,
        url: path,
        images: [
          {
            url: "/products/telemedicine/telemedicine-software-og.png",
            width: 1200,
            height: 750,
            alt: "Illustrative concept of a telemedicine video consultation with the patient chart",
          },
        ],
      },
    });
  }
  if (path === PATIENT_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: patientTitle },
      description: patientDescription,
      alternates: { canonical: path },
      openGraph: {
        title: patientTitle,
        description: patientDescription,
        url: path,
        images: [
          {
            url: "/products/patient/patient-management-software-og.png",
            width: 1200,
            height: 750,
            alt: "Illustrative concept of a patient management software dashboard",
          },
        ],
      },
    });
  }
  if (path === BILLING_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: billingTitle },
      description: billingDescription,
      alternates: { canonical: path },
      openGraph: {
        title: billingTitle,
        description: billingDescription,
        url: path,
        images: [
          {
            url: "/products/billing/medical-billing-software-og.png",
            width: 1200,
            height: 750,
            alt: "Illustrative concept of a medical billing software dashboard",
          },
        ],
      },
    });
  }
  if (path === LIMS_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: limsTitle },
      description: limsDescription,
      alternates: { canonical: path },
      openGraph: {
        title: limsTitle,
        description: limsDescription,
        url: path,
        images: [
          {
            url: "/products/lims/lims-software-og.png",
            width: 1200,
            height: 750,
            alt: "Illustrative concept of a laboratory information management system dashboard",
          },
        ],
      },
    });
  }
  if (path === PHARMACY_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: pharmacyTitle },
      description: pharmacyDescription,
      alternates: { canonical: path },
      openGraph: {
        title: pharmacyTitle,
        description: pharmacyDescription,
        url: path,
        images: [
          {
            url: "/products/pharmacy/pharmacy-management-system-og.png",
            width: 1200,
            height: 750,
            alt: "Illustrative concept of a pharmacy management system dashboard",
          },
        ],
      },
    });
  }
  if (path === EMR_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: emrTitle },
      description: emrDescription,
      alternates: { canonical: path },
      openGraph: {
        title: emrTitle,
        description: emrDescription,
        url: path,
        images: [
          {
            url: "/products/emr/emr-software-og.png",
            width: 1200,
            height: 750,
            alt: "Illustrative concept of an Electronic Medical Records (EMR) software patient chart",
          },
        ],
      },
    });
  }
  if (path === EHR_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: ehrTitle },
      description: ehrDescription,
      alternates: { canonical: path },
      openGraph: {
        title: ehrTitle,
        description: ehrDescription,
        url: path,
        images: [
          {
            url: "/products/ehr/ehr-software-og.png",
            width: 1200,
            height: 750,
            alt: "Illustrative concept of an electronic health records software patient dashboard",
          },
        ],
      },
    });
  }
  if (path === PRACTICE_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: practiceTitle },
      description: practiceDescription,
      alternates: { canonical: path },
      openGraph: {
        title: practiceTitle,
        description: practiceDescription,
        url: path,
        images: [
          {
            url: "/products/practice/medical-practice-management-og.png",
            width: 1200,
            height: 750,
            alt: "Concept illustration of a medical practice management software dashboard",
          },
        ],
      },
    });
  }
  if (path === CLINIC_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: clinicTitle },
      description: clinicDescription,
      alternates: { canonical: path },
      openGraph: {
        title: clinicTitle,
        description: clinicDescription,
        url: path,
        images: [
          {
            url: "/products/clinic/clinic-management-software-og.png",
            width: 1200,
            height: 750,
            alt: "Concept illustration of a clinic management software dashboard",
          },
        ],
      },
    });
  }
  const isHospital = match.product.slug === "hospital-management-system";
  const title = fitTitle(
    isHospital ? "Hospital Management System Software" : match.product.title,
  );
  const description = fitDescription(
    isHospital
      ? "Hospital management system software by ClickMasters: patient records, appointments, billing, pharmacy, lab, IPD/OPD and reporting in one integrated platform."
      : match.product.description,
    isHospital ? "Hospital Management System" : match.product.title,
  );
  return withEditedPageSeo(path, {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  });
}

export default async function Page({ params }: PageProps) {
  const { industry: industrySlug, product: productSlug } = await params;
  const match = findProduct(industrySlug, productSlug);
  if (!match) notFound();

  if (productPath(match.industry.slug, match.product.slug) === HOSPITAL_PATH) {
    return (
      <>
        <JsonLd data={hospitalManagementSchema()} />
        <HospitalManagementPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === TELE_PATH) {
    return (
      <>
        <JsonLd data={teleSchema()} />
        <TelemedicinePage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === PATIENT_PATH) {
    return (
      <>
        <JsonLd data={patientSchema()} />
        <PatientPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === BILLING_PATH) {
    return (
      <>
        <JsonLd data={billingSchema()} />
        <BillingPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === LIMS_PATH) {
    return (
      <>
        <JsonLd data={limsSchema()} />
        <LimsPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === PHARMACY_PATH) {
    return (
      <>
        <JsonLd data={pharmacySchema()} />
        <PharmacyPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === EMR_PATH) {
    return (
      <>
        <JsonLd data={emrSchema()} />
        <EmrPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === EHR_PATH) {
    return (
      <>
        <JsonLd data={ehrSchema()} />
        <EhrPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === PRACTICE_PATH) {
    return (
      <>
        <JsonLd data={practiceManagementSchema()} />
        <PracticeManagementPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === CLINIC_PATH) {
    return (
      <>
        <JsonLd data={clinicManagementSchema()} />
        <ClinicManagementPage />
      </>
    );
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: match.industry.label, path: industryPath(match.industry.slug) },
          {
            name: match.product.title,
            path: productPath(match.industry.slug, match.product.slug),
          },
        ])}
      />
      <ProductDetailPage industry={match.industry} product={match.product} />
    </>
  );
}
