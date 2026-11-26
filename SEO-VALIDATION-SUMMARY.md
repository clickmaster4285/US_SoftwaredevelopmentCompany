# SEO Validation Summary

**Date:** 2026-11-25. **Before** = live production crawl, same day. **After** = final local production build of the working tree (`next build` + `next start`), not yet deployed.

## Totals

| Metric | Value |
|---|---|
| URLs discovered | **185** unique (sitemaps + internal links; live and local crawls found the same set) |
| URLs audited | **185** (all) |
| Verified issues | **36** distinct issues (each may span many URLs), detailed in SEO-AUDIT-REPORT.md, plus the deployment step |
| Fixed and verified locally | **21** (F-01 to F-21 in SEO-FIXES-REPORT.md) |
| Remaining | **15** open issues (R-01 to R-15) + R-00 deploy, in REMAINING-ISSUES.md |
| Critical remaining | **1**: R-00, *deploy*. All code-level critical items (vulnerable Next.js, analytics blocked by CSP) are fixed but take effect only once deployed. |
| High remaining (need people, not code) | R-01 duplicate template content (38 pages), R-02 URL consolidation approval, R-03 confirm statistics, R-08 certification evidence |

## Build, type check, lint, tests

| Check | Result |
|---|---|
| `npm run build` (Next 16.4.6, Turbopack) | **Pass**: 193 routes generated, 0 errors. Expected warnings: `ERP unreachable` (external CMS, pre-existing) and 13 `Icon "…" not found in iconMap` (pre-existing, same count as the baseline build). |
| TypeScript (run by `next build`) | **Pass** |
| ESLint on all changed/new files | **0 non-formatting errors introduced.** New files are Prettier-clean. Existing files carry pre-existing Prettier CRLF formatting errors (not reformatted, to keep the diff reviewable) and 2 pre-existing rule hits (`SpaceJourney.tsx:386` exhaustive-deps, `AboutPage.tsx:130` no-explicit-any). |
| Automated tests | **None configured** in the project (no test script or test files). |
| `npm audit --omit=dev` | `next` criticals resolved by the upgrade. Remaining advisories are in unused packages (R-09). |

## Crawl validation (all 185 URLs)

| Check | Before (live) | After (final build) |
|---|---|---|
| HTTP 200 | 185/185 | 185/185 |
| Broken internal links / redirect chains / loops | 0 | 0 |
| Indexable (no noindex / X-Robots-Tag) | 185 | 185 |
| Self-referencing absolute canonical | 185 | 185 |
| URLs in XML sitemaps | **121** | **185** (pages 11, services 110, products 63, posts 1) |
| Sitemap entries that are non-200, redirected, non-canonical or duplicated | 0 | 0 |
| Sitemap `lastmod` | build time on every URL | last git commit date of each page's source files |
| Product-section URLs with ≥1 inbound link from outside `/products` | **0 / 63** | **63 / 63** (942 links) |
| JSON-LD Google rich-result errors | **5** (4 URLs) | **0** |
| JSON-LD parse errors / duplicate `@id` / FAQ not visible | 0 | 0 |
| Missing title / description | 0 | 0 |
| Descriptions cut mid-sentence | **21** | **0** |
| Descriptions > 160 chars | 3 | 0 |
| Duplicate titles | 1 pair | 1 pair (needs URL decision, R-02) |
| Pages with ≠ 1 H1 | 0 | 0 |
| Empty headings | 1 | 0 |
| Images without `alt` | 0 | 0 |
| Pages with `href="#"` links | **185** | **0** |
| Pages without `<main>` landmark | **108** | **0** |
| Email addresses in HTML | 3 variants incl. `hello@example.com` | 1 (`sales@clickmasterssoftwaredevelopmentcompany.com`) |
| Rendered company-level numeric claims (counts, ratings, tenure) | 13 | 0 |
| Unique content lines lost (beyond intentional claim edits) | n/a | **0** (verified line by line) |
| Response headers | `X-Powered-By: Next.js`; no Permissions-Policy; GTM blocked by CSP | header removed; Permissions-Policy added; GTM allowed |

## HTML size (uncompressed HTML; gzip = transfer size)

| Template | Pages | Avg KB before → after | Largest KB before → after | Avg gzip KB before → after |
|---|---|---|---|---|
| Product pages | 55 | 528 → **439** (−17%) | 665 → **550** | 67 → 59 |
| Industry hubs | 7 | 200 → 171 (−15%) | 631 → 534 | 25 → 23 |
| Products index | 1 | 230 → 212 (−8%) | | 25 → 23 |
| Service sub-pages | 98 | 123 → 106 (−13%) | 160 → 143 | 23 → 21 |
| Service hubs | 12 | 218 → 201 (−8%) | 249 → 230 | 29 → 28 |
| Locations | 7 | 103 → 94 (−8%) | | 19 → 18 |
| Company pages | 4 | 111 → 98 (−11%) | | 15 → 14 |
| Homepage | 1 | 286 → 280 (−2%) | | 48 → 48 |
| **All pages** | 185 | 46.8 MB → **39.7 MB (−15.0%)** total | | 6.7 MB → 6.1 MB (−9.0%) |

Caveat: "before" is the deployed site, which may not match HEAD byte for byte. The main saving (the duplicated comparison tables) was isolated by an intermediate crawl after that single change.

## Lighthouse 13.6 (mobile, simulated throttling unless noted)

| Page | Run | Perf | A11y | Best Pr. | SEO | FCP | LCP | TBT | CLS | Contrast fails |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | live | 60 | 93 | 92 | 100 | 1.8 s | 1.8 s | 2,492 ms | 0 | 16 |
| `/` | final (warm) | 69 | 93 | **100** | 100 | 1.5 s | 1.5 s | 2,931 ms | 0 | 2 |
| Medical practice mgmt (product) | live | 88 | 96 | 92 | 100 | 2.0 s | 2.0 s | 13 ms | 0 | 93 |
| | final (warm) | 84 | 97 | **100** | 100 | 1.4 s | 1.4 s | 632 ms | 0 | 6 |
| Custom software dev (service) | live | 88 | 95 | 92 | 100 | 1.8 s | 1.8 s | 69 ms | 0 | 35 |
| | final (warm) | 77 | **100** | **100** | 100 | 1.1 s | 3.9 s | 450 ms | 0 | 0 |
| | final, GTM blocked | 85 | | | | | 4.0 s | 154 ms | | |
| | final, DevTools throttling (measured) | 83 | | | | 3.5 s | 3.5 s | 53 ms | 0 | |
| `/contact` | live | 68 | 95 | 92 | 100 | 1.6 s | 1.6 s | 965 ms | 0 | 14 |
| | final (warm) | 88 | **100** | 96 | 100 | 0.9 s | 3.2 s | 248 ms | 0 | 0 |
| | final, DevTools throttling (measured) | 86 | | | | 3.2 s | 3.2 s | 8 ms | 0 | |

**How to read this honestly:**
- **Accessibility and Best Practices improved on every template.** Best Practices reached 100 because the CSP console violations are gone. SEO is 100 throughout.
- **TBT increases are the cost of analytics now working.** On live, GTM was blocked by the CSP, so its JavaScript never ran. With GTM blocked locally, the service page TBT is 154 ms instead of ~450 ms.
- **The live LCP figures are not a reliable baseline.** The live runs recorded server response times of 10–15 s from this machine's unstable connection, which distorts Lighthouse's simulation. Locally, LCP is unchanged when GTM is blocked, and under real DevTools throttling **LCP = FCP**: the page is gated by first paint (render-blocking CSS, R-14), not by the hero image. The hero image dropped from a 155 KB JPEG to a 19 KB WebP on mobile.
- **Core Web Vitals pass/fail is not claimed.** Use PageSpeed Insights field data (CrUX) after deployment.
- Homepage total page weight fell from 23.4 MB to 11.5 MB because the below-the-fold 11.5 MB video is no longer downloaded on load. The remaining weight is mostly the 11.5 MB hero video (R-06).

## Conversion paths
- `/contact` form: renders, all fields labelled, posts to the unchanged CRM endpoint (`connect-src` still allows it). **Not submitted during testing**, to avoid creating a fake lead in the live CRM.
- Every "Start a project" / "Get in touch" CTA resolves to `/contact` (the homepage CTA previously opened `mailto:hello@example.com`).
- Email and phone links on `/contact` and in the footer use the single verified address and number.

## Mobile layout
- Screenshots taken with headless Chrome (puppeteer) at 412px and 1280px against the final build:
  - Comparison table: stacked cards with "Header." labels on mobile, a normal table on desktop. Computed styles confirm `display: block` / `table`.
  - Footer: email on one line, 7 industry links, no social placeholders.
  - Homepage product-hub paragraph wraps cleanly.
  - No horizontal scroll at 412px (`scrollWidth = clientWidth`).
- Still recommended: a quick look on a physical phone before deploy.
- CLS is 0 on every tested page, before and after.
