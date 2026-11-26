# Remaining Issues

These items were verified during the 2026-11-25 audit but **could not or should not be fixed automatically**. Each one needs business information, an approval, editorial work, or access I do not have.

| ID | Issue | Severity | Blocked on | Access needed |
|---|---|---|---|---|
| R-00 | Deploy and re-verify | Critical | Deployment approval | Hosting |
| R-01 | 38 near-duplicate template service pages | High | Editorial work by someone who knows each service | Code/content |
| R-02 | Cannibalizing URL pairs need consolidation | High | URL-change approval | Code |
| R-03 | Removed statistics: confirm true figures | High | Company records | Content |
| R-04 | Privacy Policy **drafted (F-27), needs legal review before deploy**; Terms page not created | Medium | Legal review | Content |
| R-05 | Social profile URLs unknown | Low | Real profile URLs | Code (data only) |
| R-06 | ~~11.5 MB homepage videos~~ **resolved (F-27)**: 1.4 MB / 1.2 MB | — | — | — |
| R-07 | ~~Brand casing~~ **resolved (F-27)**: "Clickmasters" everywhere | — | — | — |
| R-08 | ~~Unverified certification claims~~ reworded (F-26); "SOC 2-aligned / HIPAA-ready practices" wording still to confirm | Low | Evidence | Content |
| R-09 | ~~Unused vulnerable dependencies~~ **resolved (F-26)**: production audit 0 vulnerabilities | — | — | — |
| R-10 | Server/DNS hygiene | Low | Server and DNS access | nginx, DNS |
| R-11 | Further HTML size reduction | Low | Refactor approval | Code |
| R-12 | ERP/CMS integration unreachable, domain not registered | Low | ERP admin | ERP |
| R-13 | Search Console follow-up | Medium | Deploy first | Search Console |
| R-14 | Mobile first paint: render-blocking CSS, JS weight | Medium | Refactor decision | Code |
| R-15 | ~~Homepage testimonial corridor contrast~~ **resolved (F-26)**: axe clean on 185/185 | — | — | — |

---

### R-00. Deploy and re-verify (Critical)
All fixes exist only in the working tree of `updated-content` (uncommitted, not deployed, as instructed). Until deployment, production still has the missing sitemap entries, the 5 schema errors, the contradictory statistics and the vulnerable Next.js version.
**Action:** review the diff, commit, deploy. Then re-run the crawl, submit `sitemap.xml` in Search Console, and run Google's Rich Results Test on the four healthcare product URLs.

### R-01. 38 service sub-pages are near-duplicates (High)
**Why it remains:** each of these pages shares 71–82% of its main text with another page. They are rendered by `lib/service-copy.ts → buildServiceArticle`, a fallback template that writes the same ~1,500-word article with only the service name swapped. Fixing this properly means writing distinct, accurate copy for each service: what the work involves, deliverables, typical stack, pitfalls, and real FAQs. Generating it automatically would replace one kind of generic text with another and risks inventing capabilities.
**Pages (worst first):**
- Cybersecurity (77–82%): `cloud-security`, `network-security`, `data-security`, `endpoint-security`, `cybersecurity-consulting`, `threat-detection`, `cybersecurity-software-development`, `managed-cybersecurity`, `cybersecurity-risk-assessment`
- Software development (77–79%): `ai-software-development`, `mobile-app-development`, `software-consulting`, `software-development-outsourcing`
- Web (70–80%): `pwa-development`, `progressive-web-app-development`, `custom-web-development`
- Machine learning (73–74%): `custom-ml-model-development`, `deep-learning-experts`, `machine-learning-experts`, `ml-model-development-services`, `ml-solutions-development`
- Cloud & DevOps (71–73%): `ci-cd-pipeline-setup`, `cloud-migration-modernization`, `cloud-monitoring-observability`, `containerization-docker-kubernetes`, `devops-consulting`, `infrastructure-as-code`, `managed-devops-services`
- Data (71–73%): `business-intelligence`, `data-integration-services`, `data-management-governance`
- AI (72–73%): `ai-consulting`, `ai-prompt-engineering`, `custom-ai-app-development`
- Other: `/blockchain-and-web3/dapp-development`, `/mobile-app-development/custom-mobile-app-development`, `/mobile-app-development/mobile-app-development-services`, `/ui-ux-design-services/ui-ux-design`

**Action:** for each page, add a catalog entry in `data/sub-services.js` (pages with catalog data render `CatalogArticle` and are already distinct). Prioritise by search demand. Alternatively, after R-02, consolidate thin variants into their parent. Until then, consider whether the weakest pages should be merged rather than kept indexable.

### R-02. Cannibalizing URL pairs (High, needs URL approval)
Each pair targets the same query with near-identical content. The recommendation is to keep the first URL and **308 redirect** the second, using the existing `subRedirects` map in `lib/site-routes.mjs`. That map already handles redirects, the sitemap exclusion and the in-page redirect fallback, with a precedent: `software-development/web-application-development`.

| Keep | Redirect | Evidence |
|---|---|---|
| `/web-development/pwa-development` (or the long form; choose by Search Console data) | `/web-development/progressive-web-app-development` | 80% identical |
| `/mobile-app-development` (hub) | `/software-development/mobile-app-development` | Same title as the next row; 79% template text |
| `/mobile-app-development` (hub) | `/mobile-app-development/mobile-app-development-services` | Duplicate title, same intent as hub |
| `/machine-learning-development-services/custom-ml-model-development` | `…/ml-model-development-services` | Same topic |
| `/machine-learning-development-services/ml-solutions-development` | `…/machine-learning-solutions` | Same topic |
| `/machine-learning-development-services/deep-learning-solutions` | `…/deep-learning-experts` | Same topic |

**Action:** confirm which URL in each pair has the impressions and backlinks (Search Console), then add the entries. Do not change URLs without that check.

### R-03. Removed statistics: confirm the true figures (High)
Removed because they contradicted each other and had no source in the repo. Restore any of them **only** with a verifiable source, and use the **same** figure everywhere.

| Page | Removed claim |
|---|---|
| `/about` | "200+ projects", "8+ Years Experience" badge |
| `/software-development` | "200+ delivered projects across SaaS, healthcare…" |
| `/web-development` | "For over a decade…", "500+ websites and web applications", "500+ websites and web apps launched", "500+ completed projects" |
| `/mobile-app-development` | "published 100+ mobile apps… average 4.8-star store rating", "100+ apps published", "4.8★ average App Store rating" (bullet deleted), "50+ dedicated mobile engineers", "100+ published apps with a 4.8★ average store rating" |
| `/data-services` | "delivered 200+ data projects", "200+ projects delivered as a leading data solutions provider" |
| `/locations/…-los-angeles`, `…-houston` | "120+ companies" |
| `/support-and-outsourcing/technical-support` | "10,000+ users", "85% first-contact resolution rate", "CSAT 4.7/5" |

Also still in data files but **not rendered today**: `stats`/`heroBadge` values ("98% client satisfaction", "99.9% uptime guarantee", "4.9/5 average client rating", "97% model accuracy", "500+ security assessments") and `caseStudy` outcome metrics in `data/sub-services.js`. The hub template already suppresses numeric badges. Clean these up before any component starts rendering them.
Still rendered and worth confirming: "5+ years of hands-on experience per developer" on the location pages. This is a hiring claim, not a company statistic, so it was left in place.

### R-04. Privacy Policy and Terms pages (Medium)
F-27 added `/privacy`, linked in the footer and under the contact form, and listed in the pages sitemap. It describes only what the site actually does: the contact form (name, email, company, budget, message, landing page, referrer and UTM tags sent to the CRM), Google Tag Manager / Analytics, server logs and embedded video.
**Action before deploy:** have it legally reviewed. In particular confirm the "we do not sell personal information" line and the retention wording, and add a postal address if your jurisdiction requires one. A Terms page was not created (no legal text available).

### R-05. Social profiles (Low)
All social icons pointed to `#`. They are now hidden, not deleted.
**Action:** put the real URLs in `TOP_SOCIALS`/`SOCIALS_ALL` (`components/layout/Footer.tsx`) and `SOCIAL` (`components/layout/Navbar.tsx`). Then add them as `sameAs` in `organizationSchema()` (`components/seo/JsonLd.tsx`).

### R-06. Homepage videos — resolved
F-27 re-encoded both in headless Chrome (WebCodecs H.264 High profile, fast-start MP4): `hero-video.mp4` 11.5 MB → 1.4 MB (1280×720), `dominate-video.mp4` 11.5 MB → 1.2 MB (960×960). Same 5.04 s length, loops, no visible difference in side-by-side frames. Originals are in git history.
**Optional:** add a `poster` image to the hero video.

### R-07. Brand casing — resolved
F-27 replaced "ClickMasters" with "Clickmasters" in visible text (914 replacements, 24 files). The code identifier `whyClickMasters` was left unchanged.

### R-08. Unverified certification / compliance claims (Low, was High)
**Resolved in F-26:** "Our engineers hold certifications from AWS, Microsoft Azure, and Google Cloud", "Certified engineers…", "Certified security engineers…", the "3 Cloud Certifications" stat and "GDPR/SOC 2 compliant" were reworded to describe experience and practices.
**Still to confirm:** `/data-services` says "SOC 2-aligned and HIPAA-ready practices". "Aligned"/"ready" describe practices, not an audit, so the wording was kept. Product pages mention HIPAA-aware design (also hedged, and they state that HHS does not certify software).
**Action:** if you do hold AWS/Azure/GCP certifications or a SOC 2 report, you can restore the stronger wording with that evidence.

### R-09. Unused vulnerable dependencies — resolved
Removed in F-26: `@tanstack/react-start`, `nodemailer`, `xlsx`, `zod`, `@reduxjs/toolkit`, `react-redux`, `@hookform/resolvers`, `@types/nodemailer` (none were imported; `server.ts`/`start.ts` were already gone). `eslint-config-next` moved to devDependencies. `npm audit --omit=dev`: 0 vulnerabilities. Remaining advisories are in dev-only lint tooling.

### R-10. Server and DNS hygiene (Low)
- `Server: nginx/1.24.0 (Ubuntu)` reveals the version. Set `server_tokens off;`.
- `www.clickmasterssoftwaredevelopmentcompany.com` does not resolve. Add a DNS record and a 301 to the apex so typed or linked `www.` URLs work.
- `robots.txt` is served with `max-age=0`. A short public cache would be fine.

### R-11. Further HTML size reduction (Low)
Product pages are now 356–550 KB uncompressed (about 55–75 KB gzipped). What remains is mostly (a) the React Server Components payload, which is inherent to the App Router, and (b) Tailwind utility strings repeated across about 30 hand-written product page files.
**Action (optional):** move the most repeated card/list/FAQ class strings into shared components or `@layer components` classes, as done for `CompareTable`. Estimated −10–15% more. This was not done here because it touches about 30 large files for a modest gain.

### R-12. ERP / headless CMS (Low)
Every build logs `ERP unreachable … apierp.clickmasters.pk`, and CLAUDE.md notes the domain is not registered in the ERP. The site renders normally without it.
**Action:** register the domain in the ERP if the integration is wanted, or leave `CMS_API_URL` empty to stop the build-time calls.

### R-13. Search Console follow-up (Medium)
I have no Search Console access.
**Action after deploy:** submit `sitemap.xml`; inspect a few product URLs; watch Coverage for the 63 newly listed URLs; review Enhancements for the removed SoftwareApplication items; use query data to decide R-02.

### R-14. Mobile first paint: render-blocking CSS and JavaScript weight (Medium, performance)
**Measured** on the final build with DevTools-throttled mobile Lighthouse: service page FCP = LCP = 3.5 s, contact 3.2 s, CLS 0. LCP equals first paint, so the hero image is not the bottleneck (it is now a 19 KB WebP, preloaded). First paint waits on a **30 KB (gzipped) render-blocking stylesheet**, an estimated ~0.9 s on 4G, plus **~464 KB of JavaScript** (framework, Framer Motion/GSAP, GTM).
**Why it remains:** inlining CSS (`experimental.inlineCss`) would add ~150–200 KB to every HTML document, which works against the HTML-size goal. Trimming JS means removing or deferring animation libraries on content pages, a design and engineering decision.
**Action:** (1) Check Tailwind's generated CSS for unused shadcn/ui component styles. (2) Load Framer Motion/GSAP only on the homepage sections that use them (dynamic import). (3) Consider GTM `strategy="lazyOnload"` if early-pageview loss is acceptable (it currently adds ~300 ms TBT). (4) After deploy, use PageSpeed Insights field data (CrUX) as the source of truth.

### R-15. Contrast — resolved
F-26 raised the testimonial corridor's minimum card opacity (0.16 → 0.72) and its inner labels; the initials avatars are now large bold text and hidden from screen readers. axe is clean on 185/185 pages and the homepage scores Accessibility 100.
Orange **buttons** (white on `#e05b35`, 3.67:1) pass only because their text is large/bold; keep that if they are restyled.

### R-16. Server response time on production (Low, hosting)
~~Three pages over 400 KB~~: resolved in F-24 (every page is now ≤290 KB).
The audit measured 0.59 s median / 1.32 s max response time from its crawler to the production server; locally the same pages respond in 68 ms median. Time to first byte on production depends on the server and network path (nginx → `next start`, `revalidate = 60` regenerating pages in the background, and the build-time ERP lookups noted in R-12). Pages are already static.
**Action (hosting):** enable nginx `proxy_cache` (or a CDN) in front of `next start` for HTML with a short TTL, and Brotli. Re-measure with field data (PageSpeed Insights / CrUX) before treating it as a Core Web Vitals issue, as the auditor also advises.
**Keep page weight down:** four audited pages sit at 288–289 KB. If long content is added to a product page, use the client-section pattern in `practice-sections.tsx` for its longest blocks.

### R-17. "Low text-to-HTML ratio" notices (Low)
41 pages are below 10% (Semrush shows this as a notice, not an error). The cause is the App Router hydration payload described in R-16, which every Next.js App Router site has. It improved as HTML shrank, but it cannot reach 10% on design-heavy pages without removing the hydration payload, which would break navigation and interactivity.

### Not fixed by design
- Long but natural H1s (14 between 71 and 88 characters) were left unchanged. Length is not a ranking rule.
- Award-card images on the homepage keep `alt=""` (decorative collage behind the "Selected work" heading, with no captions to describe).
- No FAQ, Review or rating schema was added. No prices or offers were invented.
