# Home Page Audit – Issues & Improvements

**Page:** https://clickmasterssoftwaredevelopmentcompany.com/
**Audited:** 2026-11-20 (source review of `app/page.tsx`, `app/home-client.tsx`, `app/(landing)/*`)
**Priority key:** 🔴 Critical (fix now) · 🟠 High · 🟡 Medium · 🟢 Low

---

## Summary

The page looks premium, but the problems below cost leads:

1. **Broken or missing calls to action.** The hero has no button, the final "Start a project" button emails a placeholder address, and the "View Project" buttons do nothing.
2. **It's too heavy.** Two videos of about 11.5 MB each load right away, and several long scroll-locked animations are built on React state updates.
3. **Weak social proof.** There are no client logos, named testimonials or numbers. The same four points ("Written scope", "Client-owned code", "Remote-first", "Reviewed releases") repeat in three sections.
4. **It's very long.** About 13 sections, five of them pinned or scroll-locked. A visitor scrolls roughly 30+ screen heights to reach the footer.

---

## 🔴 Critical

| # | Issue | Where | Fix |
|---|-------|-------|-----|
| C1 | **The final CTA emails a placeholder address.** "Start a project" links to `mailto:hello@example.com`, so every lead from this button is lost. | `app/(landing)/SpaceJourney.tsx:661` | Change it to `/contact`, or to the real company email. |
| C2 | **The hero has no CTA button.** The first screen has only a heading and a long paragraph, with no "Get a free quote" or "Book a call". | `app/home-client.tsx` (hero block) | Add a main button ("Get a Free Quote" → `/contact`) and a second one ("View our work" → `/case-studies`) under the heading. |
| C3 | **"View Project →" buttons do nothing.** They are `<button>` elements with no link or click handler (4 of them). | `app/(landing)/ProjectsStack.tsx:110` | Make them `<Link>`s to the case-study or project pages, or remove them. |
| C4 | **The hero video is 11.5 MB and has no poster.** It autoplays right away, which hurts LCP on mobile and 4G. `dominate-video.mp4` is another 11.5 MB. | `public/hero-video.mp4`, `public/dominate-video.mp4` | Compress to WebM/MP4 under 2–3 MB (720p, about 1.5 Mbps), add a `poster` image and `preload="metadata"`, and lazy-load the Dominate video when it scrolls into view. Consider a static image on mobile. |

## 🟠 High – Performance / Core Web Vitals

| # | Issue | Where | Fix |
|---|-------|-------|-----|
| P1 | **The whole home page is a client component** (`"use client"` on `home-client.tsx`). Every section's JS is shipped and hydrated, even static text sections. | `app/home-client.tsx` | Make `page.tsx` render the sections server-side, and keep only the animated hero, carousels and GSAP sections as client components. Load below-the-fold heavy sections with `next/dynamic`. |
| P2 | **The hero re-renders on every scroll event.** `setProgress` plus `setSlot` cause two React renders of the whole home tree per scroll frame. | `app/home-client.tsx` scroll/resize listeners | Update styles through refs or `requestAnimationFrame` (or GSAP ScrollTrigger, which is already used elsewhere) instead of React state. |
| P3 | **Testimonials3DRoom also uses React state on scroll**, in a section that is `120 + 6×120 = 840vh` tall. | `app/(landing)/Testimonials3DRoom.tsx:14-30` | Same fix as P2, and shorten the section (see U1). |
| P4 | **AwardsSection runs a `requestAnimationFrame` loop forever**, even when the section is off-screen. | `app/(landing)/AwardsSection.tsx:104-116` | Start and stop the loop with an IntersectionObserver, and skip it on touch devices. |
| P5 | **Plain `<img>` is used instead of `next/image`** (no responsive sizes or AVIF/WebP). | `ProjectsStack.tsx:91`, `AwardsSection.tsx:214`, `SpaceJourney.tsx:508-592` | Switch to `next/image` with `sizes`. |
| P6 | **Four autoplay videos** on one page (hero, dominate, studio-path, industry-bg). | various | Play only when visible (IntersectionObserver), pause when off-screen, and add posters. |
| P7 | **The `fadeUp` keyframes are written in an inline `<style>`** inside the component, so they are re-injected on every render. | `app/home-client.tsx` | Move them to `globals.css` or the Tailwind config. |

## 🟠 High – Conversion & Trust (UX / content)

| # | Issue | Where | Fix |
|---|-------|-------|-----|
| U1 | **Too much scroll-locking.** Hero 200–260vh, Awards pinned `+600%`, Projects 400vh, Testimonials 840vh, SpaceJourney pinned `+750%`. Many visitors will leave before the FAQ or footer. | multiple sections | Cut the number of sections to about 8, shorten the pinned distances by 50–70%, and remove or merge at least two of the cinematic sections. |
| U2 | **No real social proof.** There are no client logos, named testimonials, star ratings (Clutch/Google/GoodFirms) or numbers (projects delivered, years, team size). The "Testimonials" section shows process notes, not client quotes. | `TrustedBy`, `Testimonials3DRoom`, `data.tsx:341` | Add a logo strip, 3–6 real testimonials with name, role, company and photo, review badges, and a stats bar. |
| U3 | **Repeated content.** "Written scope / Client-owned code / Remote-first / Reviewed releases" appears in TrustedBy, TrustedPartner **and** Testimonials3DRoom. | `TrustedBy.tsx`, `TrustedPartner.tsx`, `data.tsx` | Keep these points in one section and use the freed space for proof or services. |
| U4 | **Two sections share the "Selected work" label** (Awards and ProjectsStack). The Awards section has no awards in it, only images over the word "studio". | `AwardsSection.tsx:176`, `ProjectsStack.tsx:53` | Merge them into one portfolio section, or rename and repurpose Awards as real certifications or partners. |
| U5 | **The hero copy is long and keyword-stuffed.** About 80 words in one paragraph ("software development company USA businesses trust…"). | `app/home-client.tsx` hero paragraph | Use one strong value proposition of no more than 25 words, then 3 short benefit bullets, then the CTA. |
| U6 | **The H1 reads awkwardly**: "SOFTWARE DEVELOPMENT COMPANY OFFERING WEB, MOBILE & AI DEVELOPMENT SERVICE" (singular "SERVICE", repeats "development", all caps). | `app/home-client.tsx` `<h1>` | For example: "Software Development Company for Web, Mobile & AI Products". Use sentence case in the markup and keep uppercase as CSS styling only. |
| U7 | **No services overview section.** Visitors can't quickly see the service list with links to the service pages. | home page | Add a services grid linking to `/[main_service]` pages. This also helps internal linking for SEO. |
| U8 | **No lead-capture form on the page.** Only the FAQ and the broken final CTA link onward. | home page | Add a short "Get a quote" form (name, email, budget, message) above the footer. |

## 🟡 Medium – SEO

| # | Issue | Where | Fix |
|---|-------|-------|-----|
| S1 | The home page relies on the **root-layout title and description**. There is no home-specific `title`, `openGraph.images` or Twitter image, so links shared on social media have no preview image. | `app/page.tsx`, `app/layout.tsx` | Add a home-specific `title`, `description` and a 1200×630 `opengraph-image`. |
| S2 | The heading order is flat: many `<h2>`s with "kicker" labels in `<p>`, and the SpaceJourney section renders **several `<h2>`s stacked on top of each other** (chapters and CTA). | `SpaceJourney.tsx:639,657` | Use one H2 per section. Make the chapter titles `h3`, or hide the ones that aren't visible from assistive tech. |
| S3 | Important text sits inside scroll-animated layers that start at `opacity: 0`. Crawlers handle this, but it's fragile. | GSAP sections | Make sure the content is in the server HTML (it is today) and avoid hiding key copy behind JS. |
| S4 | The logo in the mobile menu uses `href="#"`. | `components/layout/Navbar.tsx:423` | Change it to `href="/"`. |

## 🟡 Medium – Accessibility

| # | Issue | Where | Fix |
|---|-------|-------|-----|
| A1 | **Reduced motion is not respected** in the hero, AwardsSection, SpaceJourney, Testimonials3DRoom or ProjectsStack (only StudioPath, Benefits, FAQ, Industry and TrustedPartner check it). | listed files | Skip the scroll and parallax animations when `prefers-reduced-motion: reduce` is set. |
| A2 | Autoplay videos have **no pause control** (WCAG 2.2.2). | hero, Dominate, StudioPath, Industry | Add a pause button, or stop them with reduced motion. |
| A3 | The hero text and video use `w-screen`, which **causes horizontal scroll** on desktops with visible scrollbars. | `home-client.tsx`, `Testimonials3DRoom.tsx:55` | Use `w-full`. |
| A4 | Contrast: many labels use `opacity-60`/`opacity-70` or `text-white/50` at 10–12px. | multiple | Keep body and label text at a 4.5:1 contrast ratio or higher. |
| A5 | AudienceCarousel and IndustrySection auto-rotate with `setInterval` and have no pause on hover or focus. | `AudienceCarousel.tsx:36`, `IndustrySection.tsx:235` | Pause on hover or focus, and add prev/next controls. |

## 🟢 Low – Code quality

- `ProjectsStack.tsx` has a wrong header comment (`// components/ProjectsStack.tsx`).
- Tailwind `border-current/30` is overridden by the inline `borderColor: currentColor` (`ProjectsStack.tsx:111-112`).
- The project titles "AutoMotive", "ClothingPOS" and "MarketPOS" use inconsistent naming and casing.
- `home-client.tsx` has stale comments ("MOVED TO SEPARATE LINE", "now in centered animated cards").

---

## Suggested new section order (shorter, conversion-focused)

1. **Hero:** clear value proposition, 2 CTAs, trust badges (Clutch/Google rating), compressed video with poster.
2. **Client logos and stats bar** (projects, years, countries, retention).
3. **Services grid** linking to service pages.
4. **Why Clickmasters:** one merged section from TrustedBy, TrustedPartner and the Testimonials process notes.
5. **Selected work / case studies:** ProjectsStack with working links, merged with Awards.
6. **Process:** StudioPath.
7. **Industries:** IndustrySection.
8. **Real client testimonials.**
9. **FAQ.**
10. **Final CTA and short quote form**, then the footer.

## Quick-win checklist (about 1 day of work)

- [ ] C1 Fix the `hello@example.com` CTA link
- [ ] C2 Add hero CTA buttons
- [ ] C3 Link or remove the "View Project" buttons
- [ ] C4 Compress the hero and dominate videos and add posters
- [ ] S4 Fix the mobile logo `href="#"`
- [ ] A3 Replace `w-screen` with `w-full`
- [ ] S1 Add a home Open Graph image
