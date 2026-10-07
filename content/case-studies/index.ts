// content/case-studies/index.ts
import bookingQa from "./clickmasters-case-study-saas-booking-platform-qa";
export const caseStudies = { [bookingQa.slug]: bookingQa } as const;
