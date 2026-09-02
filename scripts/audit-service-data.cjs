const { mainServiceData } = require("../data/main-services-data.js");
const keys = ["pricing","faqs","processSteps","sectionCtas","testimonials","stats","industries","trustedClients","pricingSection","faqsSection","processSection"];
for (const [k, s] of Object.entries(mainServiceData)) {
  const missing = keys.filter((key) => {
    return s[key] === undefined;
  });
  console.log(k.padEnd(38), "slug:", (s.slug || "").padEnd(28), missing.length ? "MISSING: " + missing.join(", ") : "complete");
}
