# SEO Fixes Report

**Date:** 2026-11-25. **Branch:** `updated-content` (uncommitted; not deployed).
**How each fix was validated:** `next build` (TypeScript included), then a full crawl of the local production server (`next start`, 185 URLs), automated checks (sitemaps, canonicals, metadata, headings, ALT, JSON-LD, links, landmarks, numeric claims), and Lighthouse on four templates. "Before" values come from the live site crawl on the same day.

Status key: **Verified** = change made and the result measured on the local build. Live verification happens after deployment.

---

### F-01. Product pages missing from the XML sitemap
| | |
|---|---|
| URLs | `/products/<industry>` ×7, `/products/<industry>/<product>` ×55 (plus 2 service URLs, see F-02) |
| Original behavior | 121 URLs across 3 child sitemaps. 0 product URLs. Every `lastmod` = build time. |
| Root cause | `pages-sitemap.xml` skips `[dynamic]` folders, and nothing else enumerated product routes. |
| Files | **new** `app/products-sitemap.xml/route.ts`, **new** `lib/sitemap.ts`, `app/sitemap.xml/route.ts`, `app/pages-sitemap.xml/route.ts`, `app/posts-sitemap.xml/route.ts` |
| Change | New products sitemap built from `data/products.ts`, the same data as the routes' `generateStaticParams`, so it cannot drift. Added to the sitemap index. `/products` moved there from the pages sitemap (no duplicates). Shared XML builder with escaping, de-duplication and sorting. `lastmod` is now the last git commit date of the files that render each page (product page + its data file; template files for generic pages); it is omitted if git history is unavailable at build time. The index no longer carries a fake `lastmod`. |
| Validation | Index lists 4 child sitemaps. Totals: pages 11 + services 110 + products 63 + posts 1 = **185 URLs = every crawled URL**, each returning 200, indexable, matching its canonical. 0 duplicates. 185/185 have `lastmod`. XML is well-formed. |
| Status | Verified |

### F-02. Two service URLs missing from the services sitemap
| | |
|---|---|
| URLs | `/web-development/progressive-web-app-development`, `/mobile-app-development/mobile-app-development-services` |
| Root cause | The sitemap read `data/main-services.js`; the route renders from the merged `services` map (also `data/main-services-data.js`). |
| File | `app/services-sitemap.xml/route.ts` |
| Change | Uses the same `services` map plus `isRetiredSub`/`destinationFor` as the route, so redirected aliases are excluded. |
| Validation | Both URLs present. 110 service URLs, none a redirect. |
| Status | Verified |

### F-03. No internal links to product pages from outside `/products`
| | |
|---|---|
| URLs | All 63 product-section URLs |
| Original behavior | 0 inbound links from outside `/products` (nav links render client-side only on hover). |
| Files | `components/layout/Footer.tsx`, `app/(landing)/IndustrySection.tsx`, `lib/contextual-links.ts`, `components/seo/ServiceAreaLinks.tsx`, `app/(landing)/[main_service]/[sub_service]/SubServicePage.tsx` |
| Change | (1) The footer "Industries" column now links to the 7 industry hubs; it previously sent 4 of 5 items to `/software-development`. Added "Software Products" (`/products`) to the Company column. (2) The homepage industry section gained a sentence linking 6 industry hubs and `/products`. It sits outside the `role="button"` rows to avoid nested controls. (3) New curated `PRODUCTS_FOR_PATH` map: 36 service pages each link 2–4 genuinely related products, using product titles as varied, natural anchors. These render in the existing "Related reading" / "Related on this site" paragraphs. Labels and URLs come from `data/products.ts`, so a renamed product cannot produce a broken link. |
| Validation | 63/63 product-section URLs now have ≥1 inbound link from outside `/products` (942 such links in total, up from 0). 36/36 mapped service pages contain their 81 product links, all returning 200. |
| Status | Verified |

### F-04. Structured-data errors (Hospital, Clinic, Practice Management, EHR)
| | |
|---|---|
| URLs | `/products/healthcare-medical-software/{hospital-management-system, clinic-management-software, medical-practice-management-software, electronic-health-records-ehr-software}` |
| Original behavior | `SoftwareApplication` (and `Product` on Hospital) without `offers`/`aggregateRating`/`review`: 5 Google errors. |
| Root cause | These are custom-built systems with no public price or ratings, so the required properties cannot be supplied without inventing them. |
| Files | `app/(landing)/products/hospital-management-page.tsx`, `clinic-management-page.tsx`, `ehr-page.tsx`, `practice-management-page.tsx` |
| Change | Removed the `SoftwareApplication` nodes (clinic, practice, EHR already had an accurate `Service` node). Hospital's node became a `Service` (`serviceType: Healthcare software development`) with its module list as an `OfferCatalog` of services, with no prices. `WebPage.mainEntity`/`about` now point at `#service`. Removed now-unused imports. |
| Validation | Validator over all 185 pages: **0 issues** (was 5). Checks: JSON parse, `@context`, unique `@id`, breadcrumb order/absolute URLs/last item = page, FAQ questions present and visible on the page, no SoftwareApplication/Product without required fields, Service has name and provider. |
| Status | Verified (please also confirm with Google's Rich Results Test after deploy) |

### F-05. Organization schema
| | |
|---|---|
| URLs | All (root layout) |
| Change | Added `logo` (`/cm-logos/logo.webp`). Email now comes from the single `CONTACT_EMAIL` constant (lowercase). |
| Files | `components/seo/JsonLd.tsx`, `lib/site.ts` |
| Status | Verified |

### F-06. Duplicated comparison-table markup / HTML size
| | |
|---|---|
| URLs | All 29 bespoke product pages + the fitness pillar hub |
| Original behavior | Every table rendered twice (mobile cards + hidden desktop table). |
| Files | `app/(landing)/products/hospital-management-page.tsx` (`CompareTable`), `app/globals.css` |
| Change | One semantic table (`th scope="col"` / `th scope="row"`, caption kept). Below `md`, the `.cm-compare` CSS shows rows as cards and labels each cell from `data-label`. Same look, half the markup. |
| Validation | Product pages average **528 → 439 KB** (−17%); largest page **665 → 550 KB**. Site-wide HTML −15.2%, gzip −9%. No text was removed: word counts are unchanged. |
| Status | Verified (visual check at mobile width recommended; see SEO-VALIDATION-SUMMARY) |

### F-07. Truncated / over-long meta descriptions
| | |
|---|---|
| URLs | 21 pages (contact, locations, service hubs…) + EMR, Pharmacy, Medical Billing |
| Root cause | `fitDescription` sliced at 145 characters on a word boundary. |
| Files | `lib/seo.ts`, `app/(landing)/products/{emr,pharmacy,billing}-data.ts` |
| Change | Descriptions up to 160 characters are kept whole. Longer ones end at the last complete sentence; if there is none, at a word boundary with "…" and without a dangling "and/of/the". Three hand-written descriptions were rewritten to ≤160 characters, and the EMR keyword repetition was removed. |
| Validation | 0 descriptions ending mid-sentence (was 21). 0 over 160 characters (was 3). 0 duplicates. |
| Status | Verified |

### F-08. Generic titles
| | |
|---|---|
| URLs | `/about`, `/contact`, `/case-studies` |
| Change | "About Our Software Development Studio \| Clickmasters", "Contact Us – Request a Software Project Quote \| Clickmasters", "Software Project Case Studies \| Clickmasters". The wording comes from each page's existing H1/description. |
| Files | `app/(landing)/about/page.tsx`, `app/(landing)/contact/page.tsx`, `app/case-studies/layout.tsx` |
| Status | Verified in final build |

### F-09. Empty heading and data typos
| | |
|---|---|
| URL | `/ui-ux-design-services/mobile-app-design` |
| Root cause | `nameame: "Consumer Mobile App"` in `data/sub-services.js`. Also "Mobile Bang/Fintech". |
| Change | Fixed key and label. |
| Validation | 0 empty headings site-wide. |
| Status | Verified |

### F-10. Homepage H1 and inventory H1
| | |
|---|---|
| Change | Homepage H1 text in sentence case ("Software development company offering web, mobile & AI development services"), shown uppercase via CSS, so the visual is unchanged. Inventory H1 shortened from 98 to 76 characters without changing its intent. |
| Files | `app/home-client.tsx`, `app/(landing)/products/inventory-page.tsx` |
| Status | Verified |

### F-11. Unverified and contradictory statistics removed from rendered copy
| | |
|---|---|
| URLs | `/about`, `/software-development`, `/web-development`, `/mobile-app-development`, `/data-services`, `/locations/…-los-angeles`, `/locations/…-houston`, `/support-and-outsourcing/technical-support` |
| Original behavior | "200+ projects", "8+ Years Experience", "over a decade", "500+ websites", "100+ apps", "4.8★ store rating", "50+ engineers", "200+ data projects", "120+ companies", "10,000+ users / 85% FCR / CSAT 4.7/5". These contradict each other (e.g. 500+ websites vs 200+ total projects; a decade vs 8 years). |
| Files | `data/main-services-data.js`, `app/(landing)/about/AboutPage.tsx`, `data/location-service-data.ts`, `data/sub-services.js`, `app/(landing)/[main_service]/[sub_service]/landing-primitives.tsx` (unused `StatsBand` defaults) |
| Change | Sentences kept and numbers removed (e.g. "Our developers… ship websites and web applications across…"). The 4.8★ bullet was deleted outright because it is a rating claim. The About badge now reads "Remote-first delivery", matching the existing hub-badge policy. **No replacement numbers were invented.** The originals are listed in REMAINING-ISSUES R-03 so verified figures can be restored. |
| Validation | Scan of all 185 pages: 0 company-level count, rating or tenure claims remain. The only match is "8,000+ apps", a third-party fact about Shopify's app store. |
| Status | Verified. **Owner approval needed to reinstate any figure.** |

### F-12. Contact details
| | |
|---|---|
| Change | Single source in `lib/site.ts`: `sales@clickmasterssoftwaredevelopmentcompany.com`, `+1 325 202 4074`. Homepage "Start a project" now goes to `/contact` (was `mailto:hello@example.com`). The footer email is one text node with a `<wbr>` (same two-line wrap). On `/contact`, email and phone are clickable and the phone format matches everywhere else. |
| Files | `lib/site.ts`, `components/layout/Footer.tsx`, `app/(landing)/contact/ContactPage.tsx`, `app/(landing)/SpaceJourney.tsx`, `components/seo/JsonLd.tsx` |
| Validation | Exactly one email address appears in all crawled HTML: the lowercase sales address. |
| Status | Verified |

### F-13. Placeholder `#` links
| | |
|---|---|
| Change | Social icons (footer, mobile menu) whose URL is `#` are no longer rendered. The data arrays are kept, so adding a real URL brings the icon back. The mobile-menu logo links to `/`. Footer "Privacy"/"Terms" (`#`) were removed until pages exist. "Sitemap" now links to `/sitemap.xml`. "Case Studies" now goes to `/case-studies` (was a service page). |
| Files | `components/layout/Footer.tsx`, `components/layout/Navbar.tsx` |
| Validation | 0 pages with `href="#"` (was 185). |
| Status | Verified |

### F-14. `<main>` landmark
| | |
|---|---|
| Change | `PageFrame` takes a `main` prop. About, Contact and service sub-pages use it. Home and locations templates wrap their content in `<main id="main-content">`. Templates that already had `<main>` are unchanged, so nothing is nested. |
| Files | `landing-primitives.tsx`, `SubServicePage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`, `home-client.tsx`, `locations/page.tsx`, `locations/[slug]/LocationServicePage.tsx` |
| Validation | 0 pages without `<main>` (was 108). |
| Status | Verified |

### F-15. Footer contrast
| | |
|---|---|
| Change | Column headings `opacity-50` → `opacity-70` (≈3.3:1 → ≈6:1). Bottom bar `opacity-60` → `opacity-70` (≈4.4:1 → ≈6:1). |
| File | `components/layout/Footer.tsx` |
| Status | Verified (computed against `#f5f3ee`) |

### F-16. Videos: below-the-fold downloads and accessibility
| | |
|---|---|
| Change | **New** `components/ui/lazy-video.tsx` attaches the source only when the video is within 300px of the viewport. Used for the 11.5 MB `dominate-video.mp4` and `studio-path.mp4`. The box size is unchanged, so there is no layout shift. All decorative videos are `aria-hidden`. The hero video is unchanged (above the fold). |
| Files | `components/ui/lazy-video.tsx`, `DominateSection.tsx`, `StudioPath.tsx`, `home-client.tsx` |
| Validation | Built and rendered. Lighthouse homepage transfer size: see SEO-VALIDATION-SUMMARY. |
| Status | Verified |

### F-17. Service hero images
| | |
|---|---|
| URLs | 110 service hub/sub-pages |
| Change | Plain `<img>` → `next/image` (`fill`, `priority` because it is the LCP image, responsive `sizes`). This serves WebP with a `srcset` instead of the 150–616 KB JPEG. Added 1080/1920 to `images.deviceSizes` so desktop heroes are not upscaled from 828px. All 38 sources verified to be local files. |
| Files | `landing-primitives.tsx` (`Hero`), `main-service-sections.tsx`, `next.config.mjs` |
| Status | Verified in final build |

### F-18. Next.js security upgrade
| | |
|---|---|
| Change | `next` and `eslint-config-next` 16.2.7 → **16.4.6** (same major; the `^16.2.4` range already allowed it). Closes the critical Image-Optimization RCE and self-hosted cache-poisoning advisories, among others. |
| Files | `package.json`, `package-lock.json` |
| Validation | Build and TypeScript pass. All 185 pages render 200 with unchanged structure. |
| Status | Verified |

### F-20. Google Tag Manager blocked by the Content-Security-Policy (analytics not running)
| | |
|---|---|
| URLs | All |
| Original behavior | `app/layout.tsx` loads `gtm.js`, but the CSP `script-src` allowed only `'self'`. Lighthouse on the **live** site logs "Loading the script 'https://www.googletagmanager.com/gtm.js?id=GTM-WT6MM33D' violates the following Content Security Policy directive". No tag fired in production. |
| Root cause | The CSP did not list the GTM/GA4 hosts. |
| File | `next.config.mjs` |
| Change | `script-src` + `https://www.googletagmanager.com`; `connect-src` + GTM and `*.google-analytics.com` / `*.analytics.google.com`; `frame-src` + GTM (noscript iframe). No other CSP relaxation. |
| Validation | Local Lighthouse: no CSP violations in the console; GTM requests succeed. **Cost:** GTM now executes, so Total Blocking Time rises on some pages (e.g. service page 154 ms with GTM blocked vs ~450 ms with it). See SEO-VALIDATION-SUMMARY. |
| Status | Verified. **Please confirm in GTM/GA4 real-time after deploy that hits arrive, and that consent requirements for your audience are met.** |

### F-21. Colour contrast (WCAG AA)
| | |
|---|---|
| Change | Light-theme `--muted-foreground` `oklch(0.554…)` → `oklch(0.52…)`: #62748e 4.3:1 on the gray sections → ≈5:1. Orange accent **text/icon** colour `#e05b35` (3.67:1) → `#c44a24` (4.83:1) in 3 files; orange backgrounds and buttons are unchanged. "Why us" descriptions on the homepage opacity 0.5 → 0.75. Pricing timeline labels `text-black/45` → `/60`. Plus the footer change in F-15. |
| Files | `app/globals.css`, `ContactPage.tsx`, `CatalogArticle.tsx`, `SubServicePage.tsx`, `AboutPage.tsx`, `TrustedBy.tsx` |
| Validation | Lighthouse contrast failures, live → final: home 16 → 2, product 93 → 6, service 35 → 0, contact 14 → 0. Accessibility score: service and contact 95 → **100**, product 96 → 97. Remaining failures are illustrative dashboard mock-ups and decorative avatar initials (REMAINING-ISSUES R-15). |
| Status | Verified. Design note: accent text is now a slightly deeper orange than the orange buttons. |

### F-22. Follow-up audit items (second audit, same day)
| Item | Change | Files | Result on re-crawl |
|---|---|---|---|
| 8 homepage images with empty `alt` | Award badges now carry the text they show (the owner confirmed these awards are genuine). The two planet illustrations are described. | `app/(landing)/data.tsx`, `AwardsSection.tsx`, `SpaceJourney.tsx` | 19 homepage images, 0 with missing/empty alt |
| Nav "Products" was a `<button>` | Now `<a href="/products">` on every page. Hover/focus still opens the mega-menu. | `components/layout/ProductsMenu.tsx` | 185/185 pages |
| Descriptions > 155 chars (11) | Rewritten by hand to ≤155. `fitDescription` limit lowered 160 → 155. Case-study description shortened. | `lib/seo.ts`, 10 product data files, `data/main-services-data.js`, case-study content | 0 over 155; 0 ending mid-sentence |
| H1 > 70 chars (14) | Shortened with the product name kept first. Homepage H1 now reads "Software development company offering web, mobile & AI services" (63). | about, home, crm, bpm, dms, attendance, erp, hrms, inventory, scm, gym, ehr, practice, fitness pillar | 0 over 70 (max 70) |
| Title > 60 (CRM, 62) | "Customer Relationship Management (CRM) Software" (47) | `crm-data.ts` | 0 over 60 |
| Case-study data had a stale canonical slug (unused) | Corrected to the live URL | case-study content file | n/a |

Re-verified with the full crawl: all 185 URLs return 200, 0 schema issues, 185/185 in the sitemap, 55/55 product pages linked from a service page.

### F-23. Third audit pass: broad SEO-tool sweep (Ahrefs / Semrush-style checks)
| Issue found | Pages | Fix | Files | Re-crawl |
|---|---|---|---|---|
| Missing `og:site_name` / `og:type` (page `openGraph` replaced the layout's) | 178 | Defaults merged in the shared `withEditedPageSeo` helper; page values still win | `lib/cms/erp-edits.ts` | 0 missing |
| Missing `og:image`; `summary_large_image` card without image | 124 | New 1200×630 default share image used when a page has none | `public/og-default.png`, `lib/cms/erp-edits.ts` | 0 missing |
| Meta description < 110 chars ("too short") | 50 | `fitDescription` appends the longest factual closing sentence that keeps it ≤155 | `lib/seo.ts` | 0 under 110, 0 over 155 |
| Pages with only 1 incoming internal link | 50 | Sub-service "related" links now rotate (next two siblings) instead of always the first two | `SubServicePage.tsx` | 0 pages under 2 |
| Title < 30 chars; duplicate title pair | 2 | `TITLE_OVERRIDES` for crypto-wallet and `/software-development/mobile-app-development` | `lib/seo.ts`, sub-service `page.tsx` | 0 |
| Heading level skipped / no H2 | 5 | Card headings H3→H2 (`/case-studies`, `/locations`), H4→H3 (about, case study, case-study table) | 5 files | 0 |
| Images without width/height | 17 | Intrinsic sizes on homepage illustrations, hospital hero, case-study figures (the data had wrong 1200×675 values, now real sizes); legacy hub hero → `next/image` | `SpaceJourney.tsx`, `hospital-management-page.tsx`, case-study page + content, `data/main-services-components.js` | 0 |
| HTML size | 55 pages > 300 KB | (1) 205 heavily repeated Tailwind class strings moved to `cm-*`/`cx-*` component classes (`@apply` of the same utilities). (2) FAQPage JSON-LD no longer emitted: not eligible for Google FAQ rich results (gov/health sites only since 2023); FAQs stay visible. (3) The most repeated icons (check, chevron, check-square) drawn with CSS masks instead of inline SVG (`.ico-*`, `components/ui/list-icon.tsx`). | `app/globals.css`, ~60 TSX files, `components/seo/JsonLd.tsx` | Site HTML −28.9% vs live; product median 342 KB (live ~530), max 447 KB (live 665) |

**Rendering verified unchanged:** full-page screenshots of 19 templates at 412px and 1280px before and after, pixel-diffed. 36/38 shots are identical. The case study differs only because its figures now reserve their space (the layout-shift fix). The icon change differs by ≤36 pixels per page at ≤3/765 colour difference (anti-aliasing).

**Deployment note:** build from a clean `.next` (`rm -rf .next && npm run build`). An incremental local build kept a stale stylesheet without the new classes; a clean build is correct.

### F-24. Fourth audit pass: page weight under 300 KB, hero image ≤100 KB
Audit finding: 26 of 27 product pages were 410–654 KB of HTML, about 60% of it the Next.js server-component payload (`self.__next_f.push`). `hospital-management-hero.jpg` was 204 KB.

| Change | Why | Files |
|---|---|---|
| All lucide icons on product pages render as a `<span>` drawn by a CSS mask instead of an inline `<svg>` (252 icons, generated from lucide's own SVG) | Each inline SVG (~0.8 KB) was shipped twice (HTML + payload) and repeated dozens of times per page | `scripts/gen-mask-icons.cjs` (generator), `components/ui/mask-icons.tsx`, `app/(landing)/products/product-icons.css`, `app/(landing)/products/layout.tsx` (loads the CSS on /products only), 30 product files switched their import |
| React list keys hashed (`shortKey`) instead of the full text | `key={item}` / `key={faq.question}` put every list item's text into the payload a third time | `lib/short-key.ts`, 30 product files (306 keys) |
| Longest static sections rendered from client components that import their own data (medical practice: 22 feature cards, FAQ, 5 sections; EHR: feature cards, FAQ, 3 sections; clinic: FAQ; fitness hub: solution cards, FAQ) | The HTML still contains the full server-rendered text (crawlers see everything); the payload carries only a component reference instead of a second copy of the text | `practice-sections.tsx`, `ehr-sections.tsx`, `clinic-sections.tsx`, `fitness-sports-sections.tsx`, `practice-icons.ts`, `ehr-icons.ts`; shared building blocks moved to `product-primitives.tsx` (re-exported from the hospital/clinic pages, so existing imports are unchanged) |
| Hero re-encoded: 204 KB → 68 KB, same 1152×864 | Auditor threshold ≤100 KB | `public/products/hospital-management-hero.jpg` |

**Results (final clean build, full crawl of 185 URLs):**
- All 27 audited pages are **under 300 KB**: max 289 KB, median 267 KB (they were 410–654 KB). No page on the site exceeds 300 KB (max 290 KB). Site-wide HTML is −38.1% vs live.
- 0 images over 100 KB among the 234 image URLs on the audited pages.
- **Nothing changed for users or crawlers:** the rendered `<main>` markup of the converted pages is byte-identical to before (React's invisible `<!-- -->` separators excepted). Full-page screenshots are pixel-identical apart from icon anti-aliasing (≤0.002% of pixels). There are no hydration errors. FAQ open/close works. Client-side navigation into the converted pages renders all cards, FAQs and in-text links.
- Lighthouse mobile (medical practice): performance 84 → 85, TBT 632 → 597 ms, total bytes 608 → 528 KB, CLS 0. Best Practices showed 96 only because Google Tag Manager was unreachable from the test machine at that moment.
- Response time: 68 ms median locally (110 ms max). The 0.59 s median / 1.32 s max in the audit is measured from the crawler to the production server; see REMAINING-ISSUES R-16.

**Maintenance:** when a product page starts using a new lucide icon, import it from `@/components/ui/mask-icons` and run `node scripts/gen-mask-icons.cjs` (TypeScript fails the build if the icon hasn't been generated).

### F-25. Fifth audit pass: whole-site technical, image and accessibility sweep
Scope: full crawl of all 185 URLs plus robots.txt, 404 handling, redirects, every referenced asset (745 URLs), response headers, duplicate head tags, sitemap XML/lastmod validity, axe-core (WCAG 2.2 AA + best practice) on every page, and Lighthouse SEO / Accessibility / Best Practices on 14 page templates.

| Finding | Fix | Files |
|---|---|---|
| **Process heading invisible on 38 service pages** (dark text on the near-black "Process" section) and the "Tech stack" heading on main service pages (same problem on `bg-primary`) | `SectionHeading` takes `tone="dark"` (white heading, light eyebrow/copy); used by both dark sections | `[sub_service]/landing-primitives.tsx`, `[sub_service]/process-section.tsx`, `[main_service]/main-service-sections.tsx` |
| **Case-study video caption invisible** (dark text on the black video frame) | Caption is `text-white/75` | `app/case-studies/[slug]/page.tsx` |
| 54 Open Graph share images 102–154 KB | Re-encoded in place (same file names, same 1200×750): now 37–58 KB, mean pixel difference 0.21/255. Originals backed up outside the repo | `public/products/**/*-og.png` |
| `favicon.ico` was a non-square 352×169 PNG (Google shows only square favicons, multiples of 48 px); no apple-touch-icon | Real ICO (16/32/48 px) built from the existing CM mark on its own background; added `app/icon.png` (192 px) and `app/apple-icon.png` (180 px). Next adds the `<link>` tags automatically | `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` |
| Product accent colours below 4.5:1 as text/badges (emerald, orange, teal, sky, cyan, yellow, green "600" shades) on 16 product pages | Same hues, Tailwind "700" shades: all ≥4.5:1 on white and on each page's tint | 16 files in `app/(landing)/products/` (ACCENT / `theme.accent`) |
| Security-layer diagrams (clinic, medical practice): middle layers failed contrast for both dark and white text | Per-layer opacities chosen so every layer passes (still light → dark) | `clinic-management-page.tsx`, `practice-sections.tsx` |
| 92 empty comparison-table corner headers; table scroll area not keyboard-focusable | Empty header gets screen-reader text; wrapper is a labelled, focusable region | `product-primitives.tsx` (`CompareTable`) |
| Case-study tables: row-number cells had no header; faint 11 px labels (40% opacity) | Row column labelled for screen readers, `scope="col"`; labels at 70% opacity | `components/case-studies/Table.tsx`, `Header.tsx`, `app/case-studies/page.tsx`, `globals.css` |
| EHR "At a glance" `<dl>` had `dt`/`dd` nested two divs deep (invalid list) | Icon moved inside the `dt`; identical layout | `ehr-page.tsx` |
| Homepage slider dots were 6 px tap targets | 24 px buttons with the same visible bar inside | `app/(landing)/AudienceCarousel.tsx` |
| About badge descriptions 3.9:1 | Text darkened (7.1:1) | `about/AboutPage.tsx` |

**Checked and already correct:** unknown URLs return 404 (also nested and product paths); `/about/` 308-redirects to `/about`; uppercase URLs 404; robots.txt valid and points to the sitemap index; 4 sitemaps are valid XML with valid `lastmod`; no broken internal links or assets; no `http://` resources; no duplicate title/description/canonical/robots tags; `og:url` equals canonical everywhere; og:image absolute; security headers present; gzip on.

**Results (clean build, full re-crawl):**
- All 14 auditor criteria pass; JSON-LD 0 issues; 0 non-200 pages; every page ≤300 KB.
- axe: violations on 98 pages → **1 page** (184/185 clean). The remaining one is the homepage 3D testimonial corridor (see R-15).
- Lighthouse (14 templates): **SEO 100 on all**; Accessibility 100 on 13 of 14 (homepage 96, same corridor); Best Practices 100, except when Google Tag Manager is unreachable from the test machine (a network error, not a site error).
- No console or hydration errors on the changed pages; FAQ toggles work.
- Typecheck passes; lint shows no new findings in changed files.

### F-26. Sixth pass: clearing the remaining-issues list
| Finding | Fix | Files |
|---|---|---|
| Homepage testimonial corridor failed contrast (distant cards faded to 16%; labels faded again inside) | Card opacity floor raised to 0.72 and inner labels to 80%; initials avatars are large bold text and `aria-hidden` (the name is printed beside them). Depth still comes from the 3D perspective, scale and glow | `app/(landing)/Testimonials3DRoom.tsx` |
| Unused packages with known vulnerabilities (R-09): `@tanstack/react-start` (critical), `nodemailer`, `xlsx` (high, no fix upstream), `zod` (high), `@reduxjs/toolkit`, `react-redux`, `@hookform/resolvers`, `@types/nodemailer` | Removed (none were imported). `eslint-config-next` moved to devDependencies; `npm audit fix` for non-breaking patches. `npm audit --omit=dev` now reports **0 vulnerabilities** | `package.json`, `package-lock.json` |
| Unverified certification claims (R-08): "Our engineers hold certifications from AWS, Microsoft Azure, and Google Cloud", "Certified engineers…", "Certified security engineers…", "3 Cloud Certifications", "GDPR/SOC 2 compliant" | Reworded to describe experience and practices, not certifications ("work hands-on with AWS, Azure and Google Cloud", "Cloud Platforms", "GDPR-aware") | `data/main-services-data.js`, `data/main-services.js`, `data/sub-services.js` |
| `npm run lint` linted the `.next` build output (116,000+ findings, timed out) and could not parse JSX in `data/*.js`; a leftover TanStack rule blocked `server-only` | ESLint ignores `.next`, `node_modules`, `public`; JSX enabled for `.js`; stale rule removed; Prettier `endOfLine: "auto"` (repo files are CRLF). Fixed the 3 real errors (`any` types). Remaining output is formatting-only Prettier style in older files | `eslint.config.js`, `.prettierrc.json`, `about/AboutPage.tsx`, `types/assets.d.ts` |

**Results (clean build, full re-crawl):** all 14 auditor criteria pass; JSON-LD 0 issues; 185/185 pages HTTP 200; **axe clean on 185/185 pages**; homepage Lighthouse Accessibility / Best Practices / SEO **100 / 100 / 100**; no console errors; typecheck passes; production dependencies 0 vulnerabilities.

### F-27. Videos, brand casing, Privacy Policy
| Finding | Fix | Files |
|---|---|---|
| Homepage videos 11.5 MB each (R-06) | Re-encoded to H.264 fast-start MP4: 1.4 MB (1280×720) and 1.2 MB (960×960); same length, loops, visually identical | `public/hero-video.mp4`, `public/dominate-video.mp4` |
| Brand spelled "ClickMasters" and "Clickmasters" (R-07) | "Clickmasters" everywhere in visible text (914 replacements) | 24 files in `app/`, `components/`, `data/`, `lib/` |
| No Privacy Policy although the contact form collects personal data (R-04) | New `/privacy` page (draft for legal review), footer link, note under the contact form; auto-listed in `pages-sitemap.xml` | `app/(landing)/privacy/page.tsx`, `components/layout/Footer.tsx`, `contact/ContactPage.tsx` |

**Results (clean build, full re-crawl):** 186 pages, all 14 criteria pass, JSON-LD 0 issues, axe clean on 186/186, no video over 3 MB, no console errors.

### F-19. Response headers
| | |
|---|---|
| Change | `poweredByHeader: false` (removes `X-Powered-By: Next.js`). Added `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`. |
| File | `next.config.mjs` |
| Validation | Local response: no `X-Powered-By`; `Permissions-Policy` present. |
| Status | Verified |
