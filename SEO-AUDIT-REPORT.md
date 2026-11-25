# SEO Audit Report: clickmasterssoftwaredevelopmentcompany.com

**Audit date:** 2026-11-25
**Scope:** every public URL on the production site, plus the Next.js codebase that renders it (branch `updated-content`, HEAD `d1d1c8f`).
**Method:** independent crawl of the live site (sitemaps + every internal link, 4 workers, retries), source-code review, structured-data validation, near-duplicate analysis (5-word shingle Jaccard over `<main>` text), Lighthouse (mobile), `npm audit`.

The supplied third-party report (28 URLs) was used as a checklist. Each of its findings was re-checked independently; results are noted against each item below.

---

## 1. Project architecture (Phase 1)

| Item | Finding |
|---|---|
| Framework | Next.js App Router, React 19, Tailwind 4, TypeScript. Was Next 16.2.7, now 16.4.6. |
| Hosting | Self-hosted `next start` behind **nginx 1.24 (Ubuntu)**. gzip on. `Cache-Control: s-maxage=60, stale-while-revalidate`. |
| Rendering | All public pages are statically generated (`force-static`, `revalidate = 60`). Service and product routes are dynamic segments with `generateStaticParams`. |
| Routes | `/`, `/about`, `/contact`, `/locations` + 6 city pages, `/case-studies` + 1 case study, 11 service hubs + 99 service sub-pages, `/products` + 7 industry hubs + 55 product pages. **185 unique indexable URLs.** |
| Content sources | `data/main-services.js`, `data/main-services-data.js`, `data/sub-services.js` (28k lines), `data/products.ts`, per-product `app/(landing)/products/*-data.ts` and `*-page.tsx`, `data/location-service-data.ts`. |
| Metadata | Per-route `generateMetadata`; `lib/seo.ts` (`fitTitle`, `fitDescription`); ERP/CMS override layer `withEditedPageSeo` (inactive: domain not registered in the ERP). |
| Sitemaps | Route handlers: `sitemap.xml` (index) → `pages-`, `services-`, `posts-sitemap.xml`. |
| robots.txt | Static `public/robots.txt`: disallows `/api/`, `/admin/`, declares the sitemap index. Correct. |
| Structured data | `components/seo/JsonLd.tsx` (Organization, WebSite, BreadcrumbList, Service, FAQPage) + bespoke `@graph` blocks on the healthcare/fitness product pages. |
| Analytics | Google Tag Manager `GTM-WT6MM33D` (afterInteractive); Search Console verification meta tag present. Untouched. |
| Lead capture | Contact form posts to the external CRM (`crm.clickmasters.pk`). Untouched. |
| Git state at start | Clean working tree on `updated-content`. |

---

## 2. Live URL inventory (Phase 2)

| Section | URLs | In sitemap (before) | Avg HTML (before) |
|---|---|---|---|
| Home, About, Contact, Case studies (index + 1) | 5 | 5 | 49–286 KB |
| Locations (index + 6 cities) | 7 | 7 | ~103 KB |
| Service hubs | 11 | 11 | ~215 KB |
| Service sub-pages | 99 | **97** | ~123 KB |
| `/products` | 1 | 1 | 230 KB |
| Product industry hubs | 7 | **0** | ~200 KB |
| Product pages | 55 | **0** | **~528 KB** |
| **Total** | **185** | **121** | |

- **HTTP status:** all 185 return 200. No broken internal links, no redirect chains, no loops, no soft 404s (unknown paths return a real 404).
- **Redirects:** `http://` → `https://` is one 301 hop. Trailing slash `/about/` → `/about` is one 308. Legacy aliases (e.g. `/cloud-and-devops`) 308 to their canonical URLs. `www.` does not resolve in DNS (see REMAINING-ISSUES).
- **Parameters:** `?utm_source=x` serves the page with the clean canonical. OK.
- **Canonicals:** every page self-canonicalises to an absolute HTTPS URL without trailing slash. Consistent with the redirects.
- **Indexability:** no `noindex`, no `X-Robots-Tag`. Six location pages and `/contact` carry an explicit `index, follow, max-snippet:-1…` robots meta (harmless).
- **Orphans:** none. Every URL is reachable through links, but see 3-B: product pages were reachable *only* from inside `/products`.
- **hreflang:** the site has a single English (en-US) version, so hreflang is not required and none was added.

The full per-URL table is in **URL-BY-URL-SEO-STATUS.md**.

---

## 3. Findings

Severity: **Critical** (blocks indexing or a security exposure), **High** (material ranking, trust or UX impact), **Medium**, **Low**.

### 3-A. Product catalogue missing from the XML sitemap. **High.** Report finding confirmed.
- **Evidence:** 63 URLs (`/products/<industry>` ×7, `/products/<industry>/<product>` ×55, plus none missing at `/products`) return 200, are indexable and self-canonical, and are absent from every sitemap. Two service URLs were missing too: `/web-development/progressive-web-app-development`, `/mobile-app-development/mobile-app-development-services`.
- **Root cause:** `pages-sitemap.xml` walks `app/` and skips any `[dynamic]` folder; no other sitemap enumerated the product routes. `services-sitemap.xml` read only `data/main-services.js`, while the route renders from a merged map that also includes `data/main-services-data.js`.
- **Also:** every `<lastmod>` was the build timestamp, so each deploy claimed all pages changed.

### 3-B. No internal links into product pages from outside `/products`. **High.** Report finding confirmed.
- **Evidence:** 0 of 63 product URLs had an inbound link from any page outside `/products`.
- **Root cause:** the Products nav item is a `<button>`; its mega-menu links render client-side only after hover/click, so they are not in the server HTML. The footer's "Industries" column pointed Healthcare, FinTech, Education and Logistics all at `/software-development`. No service page linked to a product.

### 3-C. Structured-data errors on four healthcare product pages. **High.** Report finding confirmed and narrowed.
- **Evidence:** validated all 185 pages. Exactly 5 Google rich-result errors, on exactly the 4 reported URLs:
  - Hospital Management System: `@type: ["SoftwareApplication","Product"]` with no `offers`, `review` or `aggregateRating` (fails both types).
  - Clinic Management, Medical Practice Management, EHR: `SoftwareApplication` with no `offers` and no `aggregateRating`/`review`.
- **Root cause:** these are custom-built systems with no public price and no ratings, so the required properties cannot be supplied truthfully. The other 51 product pages already describe the offering as a `Service` and validate cleanly.
- JSON syntax, breadcrumb order/URLs, `@id` uniqueness and FAQ ↔ visible-content parity were all clean on every page.

### 3-D. Large HTML documents. **Medium.** Report finding confirmed; cause differs from the report's implication.
- **Evidence:** product pages 356–665 KB uncompressed (55–80 KB gzipped; nginx gzip is on). 9,000+ words of content on the largest pages.
- **Root causes, measured on the largest page:**
  1. **Duplicated markup:** the shared `CompareTable` component rendered every comparison table twice (a mobile card list plus a hidden desktop table). It is used by all 29 bespoke product pages.
  2. **RSC payload:** ~58% of each document is the React Server Components flight data, which repeats the rendered tree for hydration. This is inherent to the App Router.
  3. **Repeated utility classes:** ~28% of bytes are Tailwind class strings repeated hundreds of times across about 30 hand-written product page files.
  4. Footer social icons with placeholder `#` links repeated on every page.
- Not causes: no duplicated JSON-LD, no hidden SEO text, no oversized inline scripts.

### 3-E. Metadata. **Medium.**
- **21 meta descriptions cut off mid-sentence** (e.g. "…Get a free", "…scope, timeline, and"). Root cause: `fitDescription` hard-sliced at 145 characters.
- **3 descriptions over 160 characters** (EMR 214, Pharmacy 200, Medical Billing 161). The EMR one repeated its keyword ("Electronic medical health records software and custom Electronic Medical Records (EMR) software…").
- **Generic titles:** `/about` ("About | Clickmasters", 20 chars), `/contact` (22), `/case-studies` (27).
- **Duplicate title:** `/software-development/mobile-app-development` and `/mobile-app-development/mobile-app-development-services` share "Mobile App Development Services | Clickmasters". Both also overlap the `/mobile-app-development` hub (cannibalization, see 3-I).
- No missing titles or descriptions. No other duplicates.

### 3-F. Headings. **Low.**
- Every page has exactly one H1. One **empty `<h3>`** on `/ui-ux-design-services/mobile-app-design`, caused by a typo'd data key (`nameame:`). Also a typo "Mobile Bang/Fintech".
- Homepage H1 typed in capitals in the source (screen readers may spell it out). Switched to sentence case styled with CSS `uppercase`.
- Long H1s (15 over 70 chars) are natural, descriptive sentences. Only the 98-character Inventory H1 was tightened. The others were left: length alone is not a ranking factor.

### 3-G. Images. **Medium.** Report finding not reproduced for ALT.
- **ALT:** 0 images without an `alt` attribute on all 185 pages (the reported 8 on the homepage are already fixed in production). Decorative images correctly use `alt=""`.
- **Service hero photos** (38 stock JPEGs, 150–616 KB) were plain `<img>` with no dimensions, no WebP and no `srcset`, on 110 service pages. These are the LCP element.
- **Video:** homepage `hero-video.mp4` and `dominate-video.mp4` are **11.5 MB each**. The below-the-fold `dominate` and `studio-path` videos autoplayed, so they downloaded on every homepage visit.

### 3-H. Credibility and trust (Phase 5). **High.**
- **Contradictory statistics** rendered on live pages, none traceable to a source in the repo:
  - About: "200+ projects", "8+ Years Experience".
  - Web Development: "For over a decade", "500+ websites and web applications", "500+ completed projects". This contradicts About on both years and total project count.
  - Mobile: "100+ mobile apps", "4.8★ average store rating", "50+ dedicated mobile engineers".
  - Data Services: "200+ data projects".
  - Locations (LA, Houston): "120+ companies".
  - Technical Support use case: "10,000+ users", "85% first-contact resolution", "CSAT 4.7/5".
  - The codebase had already adopted a policy against unverified numbers (the hub template replaces any numeric hero badge with "Remote-first delivery"). These prose fields slipped past it.
  - The "0+" figures named in the brief no longer appear in production HTML.
- **Contact details:** `hello@example.com` was the "Start a project" link on the homepage. The footer email was split across two spans as `sales@Clickmasterssoftwaredevelopment` + `company.com`, which crawlers read as two strings. Casing was mixed (`sales@Clickmasters…`). The phone appeared as "+1 325 2024074" on `/contact`. `sales@Clickmasters.softwaredevelopmentcompany.com` (named in the brief) was not found anywhere.
- **Placeholder links:** social profile icons (footer ×2 rows, mobile nav) and the footer "Privacy" and "Terms" links all pointed to `#` on every page.
- **Testimonials:** none rendered. The homepage states that client results are published only with consent. No Review/AggregateRating schema. ✔
- **Brand casing** is split: "ClickMasters" 922 occurrences vs "Clickmasters" 885. Schema, titles, `og:site_name` and the copyright line use "Clickmasters".
- **Organization schema** had no `logo`.
- **Unverified certification claims:** "Our engineers hold certifications from AWS, Microsoft Azure, and Google Cloud", "SOC 2-aligned and HIPAA-ready practices", "3 Cloud Certifications". These need evidence; see REMAINING-ISSUES.

### 3-I. Content quality and duplication (Phase 4). **High.**
- **38 service sub-pages are near-duplicates.** They share 71–82% of their main-content text with another page. They are rendered by the fallback template `lib/service-copy.ts → buildServiceArticle`, which writes the same ~1,500-word article with only the service name and a few bullets swapped. The worst cluster is cybersecurity (cloud, network, data, endpoint security, threat detection, consulting: 77–82%). Full list in URL-BY-URL-SEO-STATUS.md.
- **Topic cannibalization:** `/web-development/pwa-development` vs `/web-development/progressive-web-app-development` (80% identical). The two mobile-app URLs in 3-E. `/machine-learning-development-services/ml-model-development-services` vs `custom-ml-model-development`, `machine-learning-solutions` vs `ml-solutions-development`, `deep-learning-experts` vs `deep-learning-solutions`.
- **Product pages** are long and distinct from each other: no product pair exceeds 25% shared text. They describe custom-built systems and use hedged language ("can", "typically") rather than claiming shipped features. No fabricated customer stories were found.

### 3-J. Accessibility (Phase 8). **Medium.**
- **No `<main>` landmark on 108 pages** (home, about, contact, all service sub-pages, locations).
- Dead `href="#"` links on all 185 pages (mobile-menu logo, social placeholders).
- Footer column headings (`opacity-50`, ≈3.3:1) and the bottom bar (`opacity-60`, ≈4.4:1) are below the WCAG AA 4.5:1 contrast ratio for small text.
- Lighthouse contrast failures on live: 16 (home), 93 (product), 35 (service), 14 (contact). Causes: theme `--muted-foreground` #62748e on gray sections (4.3:1), orange accent text #e05b35 (3.67:1), and `opacity:0.5` / `text-black/45` labels.
- Decorative hero/background videos were not hidden from assistive tech.
- The homepage industry list uses `role="button"` rows with headings inside. Acceptable; links were kept out of them to avoid nested interactive controls.
- Forms: all fields are labelled (wrapping `<label>`). Buttons have accessible names. No positive `tabindex`. Focus outlines are not suppressed.

### 3-K0. Analytics blocked by the site's own CSP. **Critical (measurement).**
- **Evidence:** Lighthouse on the live site logs CSP violations for `https://www.googletagmanager.com/gtm.js?id=GTM-WT6MM33D` on every tested page.
- **Root cause:** `next.config.mjs` CSP `script-src 'self' 'unsafe-inline' 'unsafe-eval'` does not allow the GTM host, while `app/layout.tsx` loads GTM. No analytics tags have been running in production, so organic traffic data from GA4/GTM for this domain is likely missing.

### 3-K. Security and quality (Phase 9).
- **Critical:** `next@16.2.7` is affected by multiple advisories, including unauthenticated RCE in the Image Optimization API and cache poisoning of SSG/ISR pages on self-hosted deployments. This site is self-hosted and uses `next/image`.
- `X-Powered-By: Next.js` header exposed. nginx version exposed in `Server`. No `Permissions-Policy`.
- HTTPS, HSTS (2 years, includeSubDomains), CSP, `X-Frame-Options`, `nosniff` and `Referrer-Policy` all present. No mixed content. No secrets in client bundles or pages. `.env` is not committed.
- Unused but vulnerable dependencies: `@tanstack/react-start` (critical), `nodemailer`, `xlsx` (no fix available). None is imported by the app.
- Build logs show the ERP/CMS API (`apierp.clickmasters.pk`) unreachable at build time. The integration degrades gracefully.

### 3-L. Performance (Phase 7)
Lighthouse mobile results for four templates, before vs after, are in SEO-VALIDATION-SUMMARY.md. Key structural issues: the 11.5 MB hero video, unoptimised hero JPEGs, large RSC payloads on product pages, and Tailwind class repetition.

---

## 4. Recommended actions (summary)

| # | Action | Severity | Status |
|---|---|---|---|
| 1 | Add products sitemap, fix services sitemap source, real `lastmod` | High | Fixed |
| 2 | Crawlable links into the product catalogue (footer, homepage, 36 service pages) | High | Fixed |
| 3 | Replace invalid `SoftwareApplication`/`Product` schema with `Service` | High | Fixed |
| 4 | Remove unverified/contradictory statistics; fix contact details and placeholders | High | Fixed (numbers need owner confirmation to reinstate) |
| 5 | Upgrade Next.js 16.2.7 → 16.4.6 | Critical | Fixed |
| 6 | Rewrite the 38 template service pages with unique content | High | **Needs editorial work**: REMAINING-ISSUES R-01 |
| 7 | Consolidate cannibalizing URL pairs with 301s | High | **Needs URL approval**: R-02 |
| 8 | De-duplicate `CompareTable` markup | Medium | Fixed |
| 9 | Sentence-complete descriptions, better generic titles | Medium | Fixed |
| 10 | `<main>` landmarks, dead links, contrast, decorative media | Medium | Fixed |
| 11 | Hero images → `next/image`; lazy-load below-fold videos | Medium | Fixed |
| 12 | Re-encode 11.5 MB videos | Medium | **Needs ffmpeg/assets**: R-06 |
| 13 | Privacy/Terms pages, social profile URLs, brand casing | Medium | **Needs business input**: R-04, R-05, R-07 |
| 14 | Allow GTM/GA4 in the CSP so analytics runs | Critical | Fixed |
| 15 | Contrast: muted text, orange accent text | Medium | Fixed (2–6 decorative/mock-up items remain: R-15) |
| 16 | Render-blocking CSS and 464 KB JS on mobile first paint | Medium | **Needs refactor decision**: R-14 |
