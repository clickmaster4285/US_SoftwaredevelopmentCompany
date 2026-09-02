import { mainServiceData } from "../data/main-services-data.js";

const BASE = "http://localhost:3000";

function decode(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;|&rsquo;|&#39;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&hellip;/g, "\u2026");
}
const norm = (s) => decode(s).replace(/\s+/g, " ").trim().toLowerCase();

function collectChecks(service) {
  const checks = [];
  const add = (section, label, text) => {
    if (text !== undefined && text !== null && String(text).trim() !== "") {
      checks.push({ section, label, text: String(text) });
    }
  };

  add("Hero", "badge", service.heroBadge);
  if (service.heroCtas) {
    add("Hero", "primary CTA", service.heroCtas.primary);
    add("Hero", "secondary CTA", service.heroCtas.secondary);
  }
  (service.stats || []).forEach((st, i) => {
    add("Hero Stats", `stat label ${i + 1}`, st.label);
  });

  (service.features || []).forEach((f) => add("Features", f.title, f.title));

  if (service.ourServices) {
    add("Our Services heading", "title", service.ourServices.title);
    add("Our Services heading", "description", service.ourServices.description);
  }

  if (service.trustSection) {
    add("Trust Section", "title", service.trustSection.title);
    (service.trustSection.points || []).forEach((p, i) =>
      add("Trust Section", `point ${i + 1}`, p)
    );
  }

  (service.benefits || []).forEach((b, i) => {
    if (typeof b === "string") {
      // benefits like "Title: description" or "Title — description"
      const head = b.split(/[:\u2014]/)[0];
      checks.push({ section: "Benefits", label: `benefit ${i + 1}`, text: b, alt: head });
    } else if (b && b.title) {
      checks.push({ section: "Benefits", label: b.title, text: b.title });
    }
  });

  if (service.benefitsSection) add("Benefits heading", "title", service.benefitsSection.title);

  if (service.whyChooseUs) {
    add("Why Choose Us", "title", service.whyChooseUs.title);
    (service.whyChooseUs.reasons || []).forEach((r) =>
      add("Why Choose Us", `reason: ${r.title}`, r.title)
    );
  }

  if (service.techStack) {
    const ts = service.techStack;
    (ts.groups || []).forEach((g) => (g.items || []).forEach((it) => add("Tech Stack", it, it)));
    ["frontend", "backend", "databases", "cloudDevOps", "aiAutomation", "native", "crossPlatform", "backend", "data", "aiModelsFrameworks", "mlData", "infrastructure", "applicationLayer"].forEach((k) => {
      (ts[k] || []).forEach((it) => add("Tech Stack", it, it));
    });
  }

  if (service.industriesSection) add("Industries heading", "title", service.industriesSection.title);
  (service.industries || []).forEach((ind) => add("Industries", ind.name, ind.name));

  if (service.testimonialsSection) add("Testimonials heading", "title", service.testimonialsSection.title);
  (service.testimonials || []).forEach((t, i) => {
    add("Testimonials", `author ${i + 1}`, t.author);
    if (t.company) add("Testimonials", `company ${i + 1}`, t.company);
  });

  if (service.processSection) add("Process heading", "title", service.processSection.title);
  (service.processSteps || []).forEach((p) => add("Process", p.title, p.title));

  (service.pricing || []).forEach((p) => {
    add("Pricing", p.type, p.type);
    if (p.investment) add("Pricing", `${p.type} investment`, p.investment);
  });

  (service.faqs || []).forEach((f) => add("FAQs", f.question, f.question));

  if (service.finalCta) {
    add("Final CTA", "title", service.finalCta.title);
    add("Final CTA", "primary button", service.finalCta.primary);
    if (service.finalCta.secondary) add("Final CTA", "secondary button", service.finalCta.secondary);
  }

  if (service.sectionCtas) {
    Object.entries(service.sectionCtas).forEach(([k, v]) => add("Section CTAs", k, v));
  }

  (service.subServices || []).forEach((s) => {
    add("Sub-Services", s.title, s.title);
  });

  return checks;
}

const results = {};
for (const [key, service] of Object.entries(mainServiceData)) {
  const slug = service.slug;
  let html = "";
  try {
    const res = await fetch(`${BASE}/${slug}`, { signal: AbortSignal.timeout(180000) });
    html = await res.text();
  } catch (e) {
    results[slug] = { error: String(e) };
    continue;
  }
  const page = norm(html);
  const checks = collectChecks(service);
  const missing = [];
  for (const c of checks) {
    const t = norm(c.text);
    const a = c.alt ? norm(c.alt) : null;
    if (!page.includes(t) && !(a && page.includes(a))) {
      missing.push({ section: c.section, label: c.label, text: c.text });
    }
  }
  // dedupe by section+label+text
  const seen = new Set();
  const uniq = missing.filter((m) => {
    const k = `${m.section}|${m.label}|${m.text}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  results[slug] = { total: checks.length, missingCount: uniq.length, missing: uniq };
}

for (const [slug, r] of Object.entries(results)) {
  console.log(`\n===== /${slug} =====`);
  if (r.error) {
    console.log("FETCH ERROR:", r.error);
    continue;
  }
  console.log(`checked ${r.total} data points, missing ${r.missingCount}`);
  if (r.missingCount > 0) {
    let currentSection = "";
    for (const m of r.missing) {
      if (m.section !== currentSection) {
        currentSection = m.section;
        console.log(`  [${m.section}]`);
      }
      const text = m.text.length > 90 ? m.text.slice(0, 90) + "\u2026" : m.text;
      console.log(`    - (${m.label}) "${text}"`);
    }
  }
}
