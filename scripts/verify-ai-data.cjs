const { mainServiceData } = require("../data/main-services-data.js");
const ai = mainServiceData.artificialIntelligence;
console.log("finalCta:", JSON.stringify(ai.finalCta, null, 2));
console.log("sectionCtas:", JSON.stringify(ai.sectionCtas, null, 2));
console.log("faq2 answer:", ai.faqs[1].answer);
console.log("closingText:", ai.trustSection.closingText);
console.log("whyChooseUs desc ends with:", ai.whyChooseUs.description.slice(-80));
