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

const pages: ProductPageData[] = [school, college, university, lms, sis, exam, coaching, course, grocery];

export const productSeoPages: Record<string, ProductPageData> = Object.fromEntries(pages.map((p) => [p.path, p]));
