// Product pages rendered by the shared data-driven template (product-seo-page.tsx).
// Add a page by importing its data file and listing it below.
import type { ProductPageData } from "./product-seo-types";
import school from "./edu-school-data";
import coaching from "./edu-coaching-data";
import college from "./edu-college-data";
import university from "./edu-university-data";
import sis from "./edu-sis-data";
import exam from "./edu-exam-data";
import lms from "./edu-lms-data";
import course from "./edu-course-data";
import grocery from "./retail-grocery-data";
import retailPos from "./retail-pos-data";
import restaurantPos from "./retail-restaurant-pos-data";
import retailInventory from "./retail-inventory-data";
import ecommerce from "./retail-ecommerce-data";
import marketplace from "./retail-marketplace-data";
import wms from "./retail-wms-data";
import oms from "./retail-oms-data";
import fleet from "./logistics-fleet-data";
import delivery from "./logistics-delivery-data";
import tms from "./logistics-tms-data";
import route from "./logistics-route-data";
import maintenance from "./logistics-maintenance-data";
import dispatch from "./logistics-dispatch-data";
import courier from "./logistics-courier-data";
import reProperty from "./realestate-property-data";
import reCrm from "./realestate-crm-data";
import reRental from "./realestate-rental-data";
import reListing from "./realestate-listing-data";
import reConstruction from "./realestate-construction-data";

const pages: ProductPageData[] = [school, college, university, lms, sis, exam, coaching, course, grocery, retailPos, restaurantPos, retailInventory, ecommerce, marketplace, wms, oms, fleet, delivery, tms, route, maintenance, dispatch, courier, reProperty, reCrm, reRental, reListing, reConstruction];

export const productSeoPages: Record<string, ProductPageData> = Object.fromEntries(pages.map((p) => [p.path, p]));
