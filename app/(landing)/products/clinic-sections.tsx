"use client";

// Clinic FAQ list rendered from a client component that imports its own data:
// the HTML keeps the full server-rendered text, while the React Server
// Components payload carries a component reference instead of a second copy
// of every answer. See practice-sections.tsx.
import { shortKey } from "@/lib/short-key";
import { clinicFaqs } from "./clinic-management-data";

export function ClinicFaqList() {
  return (
    <div className="cm-list">
      {clinicFaqs.map((faq, index) => (
        <details
          key={shortKey(faq.question)}
          className="group p-5 md:p-6"
          open={index === 0}
        >
          <summary className="cm-faq-q">
            <h3>{faq.question}</h3>
            <span aria-hidden="true" className="ico ico-chev cm-faq-ic" />
          </summary>
          <p className="cm-intro">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
