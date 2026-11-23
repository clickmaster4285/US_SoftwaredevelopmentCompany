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
import ProductSeoPage, { productSeoMetadata, productSeoSchema } from "../../product-seo-page";
import { productSeoPages } from "../../product-seo-registry";
import FitnessBookingPage, {
  FB_PATH,
  fbDescription,
  fbImages,
  fbOgDescription,
  fbOgTitle,
  fbSchema,
  fbTitle,
} from "../../fitness-booking-page";
import YogaStudioPage, {
  YS_PATH,
  ysDescription,
  ysImages,
  ysOgDescription,
  ysOgTitle,
  ysSchema,
  ysTitle,
} from "../../yoga-studio-page";
import MembershipPage, {
  MM_PATH,
  mmDescription,
  mmImages,
  mmOgDescription,
  mmOgTitle,
  mmSchema,
  mmTitle,
} from "../../membership-page";
import SportsClubPage, {
  SC_PATH,
  scDescription,
  scImages,
  scOgDescription,
  scOgTitle,
  scSchema,
  scTitle,
} from "../../sports-club-page";
import PersonalTrainerPage, {
  PT_PATH,
  ptDescription,
  ptImages,
  ptOgDescription,
  ptOgTitle,
  ptSchema,
  ptTitle,
} from "../../personal-trainer-page";
import FitnessClubPage, {
  FC_PATH,
  fcDescription,
  fcImages,
  fcSchema,
  fcTitle,
} from "../../fitness-club-page";
import GymPage, {
  GYM_PATH,
  gymDescription,
  gymImages,
  gymSchema,
  gymTitle,
} from "../../gym-page";
import AssetPage, {
  ASSET_PATH,
  assetDescription,
  assetImages,
  assetSchema,
  assetTitle,
} from "../../asset-page";
import BpmPage, {
  BPM_PATH,
  bpmDescription,
  bpmImages,
  bpmSchema,
  bpmTitle,
} from "../../bpm-page";
import DmsPage, {
  DMS_PATH,
  dmsDescription,
  dmsImages,
  dmsSchema,
  dmsTitle,
} from "../../dms-page";
import ScmPage, {
  SCM_PATH,
  scmDescription,
  scmImages,
  scmSchema,
  scmTitle,
} from "../../scm-page";
import InventoryPage, {
  INVENTORY_PATH,
  inventoryDescription,
  inventoryImages,
  inventorySchema,
  inventoryTitle,
} from "../../inventory-page";
import AttendancePage, {
  ATTENDANCE_PATH,
  attendanceDescription,
  attendanceImages,
  attendanceSchema,
  attendanceTitle,
} from "../../attendance-page";
import PayrollPage, {
  PAYROLL_PATH,
  payrollDescription,
  payrollImages,
  payrollSchema,
  payrollTitle,
} from "../../payroll-page";
import HrmsPage, {
  HRMS_PATH,
  hrmsDescription,
  hrmsImages,
  hrmsSchema,
  hrmsTitle,
} from "../../hrms-page";
import CrmPage, {
  CRM_PATH,
  crmDescription,
  crmImages,
  crmSchema,
  crmTitle,
} from "../../crm-page";
import ErpPage, {
  ERP_PATH,
  erpDescription,
  erpImages,
  erpSchema,
  erpTitle,
} from "../../erp-page";
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
  const seoPage = productSeoPages[path];
  if (seoPage) return withEditedPageSeo(path, productSeoMetadata(seoPage));
  if (path === FB_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: fbTitle },
      description: fbDescription,
      alternates: { canonical: path },
      openGraph: {
        title: fbOgTitle,
        description: fbOgDescription,
        url: path,
        images: [
          {
            url: fbImages.og.src,
            width: fbImages.og.width,
            height: fbImages.og.height,
            alt: fbImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === YS_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: ysTitle },
      description: ysDescription,
      alternates: { canonical: path },
      openGraph: {
        title: ysOgTitle,
        description: ysOgDescription,
        url: path,
        images: [
          {
            url: ysImages.og.src,
            width: ysImages.og.width,
            height: ysImages.og.height,
            alt: ysImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === MM_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: mmTitle },
      description: mmDescription,
      alternates: { canonical: path },
      openGraph: {
        title: mmOgTitle,
        description: mmOgDescription,
        url: path,
        images: [
          {
            url: mmImages.og.src,
            width: mmImages.og.width,
            height: mmImages.og.height,
            alt: mmImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === SC_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: scTitle },
      description: scDescription,
      alternates: { canonical: path },
      openGraph: {
        title: scOgTitle,
        description: scOgDescription,
        url: path,
        images: [
          {
            url: scImages.og.src,
            width: scImages.og.width,
            height: scImages.og.height,
            alt: scImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === PT_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: ptTitle },
      description: ptDescription,
      alternates: { canonical: path },
      openGraph: {
        title: ptOgTitle,
        description: ptOgDescription,
        url: path,
        images: [
          {
            url: ptImages.og.src,
            width: ptImages.og.width,
            height: ptImages.og.height,
            alt: ptImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === FC_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: fcTitle },
      description: fcDescription,
      alternates: { canonical: path },
      openGraph: {
        title: fcTitle,
        description: fcDescription,
        url: path,
        images: [
          {
            url: fcImages.og.src,
            width: fcImages.og.width,
            height: fcImages.og.height,
            alt: fcImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === GYM_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: gymTitle },
      description: gymDescription,
      alternates: { canonical: path },
      openGraph: {
        title: gymTitle,
        description: gymDescription,
        url: path,
        images: [
          {
            url: gymImages.og.src,
            width: gymImages.og.width,
            height: gymImages.og.height,
            alt: gymImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === ASSET_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: assetTitle },
      description: assetDescription,
      alternates: { canonical: path },
      openGraph: {
        title: assetTitle,
        description: assetDescription,
        url: path,
        images: [
          {
            url: assetImages.og.src,
            width: assetImages.og.width,
            height: assetImages.og.height,
            alt: assetImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === BPM_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: bpmTitle },
      description: bpmDescription,
      alternates: { canonical: path },
      openGraph: {
        title: bpmTitle,
        description: bpmDescription,
        url: path,
        images: [
          {
            url: bpmImages.og.src,
            width: bpmImages.og.width,
            height: bpmImages.og.height,
            alt: bpmImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === DMS_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: dmsTitle },
      description: dmsDescription,
      alternates: { canonical: path },
      openGraph: {
        title: dmsTitle,
        description: dmsDescription,
        url: path,
        images: [
          {
            url: dmsImages.og.src,
            width: dmsImages.og.width,
            height: dmsImages.og.height,
            alt: dmsImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === SCM_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: scmTitle },
      description: scmDescription,
      alternates: { canonical: path },
      openGraph: {
        title: scmTitle,
        description: scmDescription,
        url: path,
        images: [
          {
            url: scmImages.og.src,
            width: scmImages.og.width,
            height: scmImages.og.height,
            alt: scmImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === INVENTORY_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: inventoryTitle },
      description: inventoryDescription,
      alternates: { canonical: path },
      openGraph: {
        title: inventoryTitle,
        description: inventoryDescription,
        url: path,
        images: [
          {
            url: inventoryImages.og.src,
            width: inventoryImages.og.width,
            height: inventoryImages.og.height,
            alt: inventoryImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === ATTENDANCE_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: attendanceTitle },
      description: attendanceDescription,
      alternates: { canonical: path },
      openGraph: {
        title: attendanceTitle,
        description: attendanceDescription,
        url: path,
        images: [
          {
            url: attendanceImages.og.src,
            width: attendanceImages.og.width,
            height: attendanceImages.og.height,
            alt: attendanceImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === PAYROLL_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: payrollTitle },
      description: payrollDescription,
      alternates: { canonical: path },
      openGraph: {
        title: payrollTitle,
        description: payrollDescription,
        url: path,
        images: [
          {
            url: payrollImages.og.src,
            width: payrollImages.og.width,
            height: payrollImages.og.height,
            alt: payrollImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === HRMS_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: hrmsTitle },
      description: hrmsDescription,
      alternates: { canonical: path },
      openGraph: {
        title: hrmsTitle,
        description: hrmsDescription,
        url: path,
        images: [
          {
            url: hrmsImages.og.src,
            width: hrmsImages.og.width,
            height: hrmsImages.og.height,
            alt: hrmsImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === CRM_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: crmTitle },
      description: crmDescription,
      alternates: { canonical: path },
      openGraph: {
        title: crmTitle,
        description: crmDescription,
        url: path,
        images: [
          {
            url: crmImages.og.src,
            width: crmImages.og.width,
            height: crmImages.og.height,
            alt: crmImages.og.alt,
          },
        ],
      },
    });
  }
  if (path === ERP_PATH) {
    return withEditedPageSeo(path, {
      title: { absolute: erpTitle },
      description: erpDescription,
      alternates: { canonical: path },
      openGraph: {
        title: erpTitle,
        description: erpDescription,
        url: path,
        images: [
          {
            url: erpImages.og.src,
            width: erpImages.og.width,
            height: erpImages.og.height,
            alt: erpImages.og.alt,
          },
        ],
      },
    });
  }
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

  const seoPage = productSeoPages[productPath(match.industry.slug, match.product.slug)];
  if (seoPage) {
    return (
      <>
        <JsonLd data={productSeoSchema(seoPage)} />
        <ProductSeoPage data={seoPage} />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === FB_PATH) {
    return (
      <>
        <JsonLd data={fbSchema()} />
        <FitnessBookingPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === YS_PATH) {
    return (
      <>
        <JsonLd data={ysSchema()} />
        <YogaStudioPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === MM_PATH) {
    return (
      <>
        <JsonLd data={mmSchema()} />
        <MembershipPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === SC_PATH) {
    return (
      <>
        <JsonLd data={scSchema()} />
        <SportsClubPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === PT_PATH) {
    return (
      <>
        <JsonLd data={ptSchema()} />
        <PersonalTrainerPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === FC_PATH) {
    return (
      <>
        <JsonLd data={fcSchema()} />
        <FitnessClubPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === GYM_PATH) {
    return (
      <>
        <JsonLd data={gymSchema()} />
        <GymPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === ASSET_PATH) {
    return (
      <>
        <JsonLd data={assetSchema()} />
        <AssetPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === BPM_PATH) {
    return (
      <>
        <JsonLd data={bpmSchema()} />
        <BpmPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === DMS_PATH) {
    return (
      <>
        <JsonLd data={dmsSchema()} />
        <DmsPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === SCM_PATH) {
    return (
      <>
        <JsonLd data={scmSchema()} />
        <ScmPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === INVENTORY_PATH) {
    return (
      <>
        <JsonLd data={inventorySchema()} />
        <InventoryPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === ATTENDANCE_PATH) {
    return (
      <>
        <JsonLd data={attendanceSchema()} />
        <AttendancePage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === PAYROLL_PATH) {
    return (
      <>
        <JsonLd data={payrollSchema()} />
        <PayrollPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === HRMS_PATH) {
    return (
      <>
        <JsonLd data={hrmsSchema()} />
        <HrmsPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === CRM_PATH) {
    return (
      <>
        <JsonLd data={crmSchema()} />
        <CrmPage />
      </>
    );
  }

  if (productPath(match.industry.slug, match.product.slug) === ERP_PATH) {
    return (
      <>
        <JsonLd data={erpSchema()} />
        <ErpPage />
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
