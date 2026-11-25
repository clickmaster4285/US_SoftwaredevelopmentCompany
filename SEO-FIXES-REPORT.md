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

### F-19. Response headers
| | |
|---|---|
| Change | `poweredByHeader: false` (removes `X-Powered-By: Next.js`). Added `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`. |
| File | `next.config.mjs` |
| Validation | Local response: no `X-Powered-By`; `Permissions-Policy` present. |
| Status | Verified |
