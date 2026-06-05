For full migration history, see @MIGRATION_SUMMARY.md. Note: the MIGRATION_SUMMARY references an older, more elaborate folder structure (admin/auth/api/models). The current repo is significantly slimmer than what that doc describes — see "Current State" below for what is actually on disk.

# Project Overview: parallax-portal-play-main

## Project Purpose
A single-page creative agency / portfolio site (ClickMasters branding). Landing-only — no admin, no auth, no API routes, no CMS. Built with Next.js App Router, React 19, Tailwind 4, with scroll-driven hero animation and video-led sections. Marketed toward brands/startups needing "branding & UI/UX design" work.

## Current State (verified 2026-06-05)

### Framework & Runtime
- **Next.js**: 16.2.4 (App Router, Turbopack)
- **React**: 19.2.0
- **Tailwind**: 4.2.1 (`@tailwindcss/postcss` 4.2.4)
- **React Query (TanStack)**: 5.100.9 — wired in `app/providers.tsx`, used by `app/layout.tsx`
- **Animations**: Framer Motion 12.38.0 + GSAP 3.12.2
- **UI primitives**: Radix UI (40+ packages) + shadcn/ui pattern in `components/ui/` (47 components)
- **Forms**: react-hook-form 7 + zod 3 + @hookform/resolvers
- **Icons**: lucide-react + @radix-ui/react-icons
- **State**: Redux Toolkit + react-redux installed but **unused** in current code

### Architecture: Single landing page
The entire app is one route: `/`. `app/(landing)/` is a route group, not a route — it holds section components imported directly by `app/page.tsx`. There is **no `(landing)/page.tsx`**.

## Actual File Tree (on disk)
```
app/
├── (landing)/             # Route group, NOT a route — holds section components
│   ├── AwardsSection.tsx
│   ├── ServicesDive.tsx
│   ├── SpaceJourney.tsx
│   ├── StudioPath.tsx
│   └── Testimonials3DRoom.tsx
├── error.tsx
├── globals.css            # Tailwind 4 + tw-animate-css, OKLCH tokens
├── layout.tsx             # Root layout — wraps in <Providers>
├── not-found.tsx
├── page.tsx               # THE landing page — "use client", all sections composed here
└── providers.tsx          # React Query client provider

components/
├── layout/
│   ├── Footer.tsx
│   └── Navbar.tsx
└── ui/                    # 47 shadcn primitives (accordion → tooltip)

data/                      # Static content for landing
├── aboutData.jsx
├── hire-us-pages.js
├── main-services.js
├── service-section-data.js
├── sub-services.js
└── whyChooseUsData.js

hooks/
└── use-mobile.tsx

lib/
├── error-capture.ts
├── error-page.ts
└── utils.ts               # cn() helper

public/
├── assets/                # JPGs + MP4s (audience, awards, projects, space, videos)
├── dominate-video.mp4
└── hero-video.mp4

types/
└── assets.d.ts            # Module declarations for .jpg/.png/.mp4/.asset.json

# Root-level (orphan / dead code)
routes/                    # Empty — leftover TanStack Start dir
server.ts                  # @tanstack/react-start server entry — NOT used by Next
start.ts                   # @tanstack/react-start client entry — NOT used by Next

# Config
next.config.mjs            # Only sets allowedDevOrigins — NO turbopack key
postcss.config.js
tsconfig.json              # @/* alias → /*, includes server.ts/start.ts/components
eslint.config.js
package.json               # Many unused deps still present
```

## App Composition (`app/page.tsx`)
A single client component, top to bottom:
1. **Hero** — sticky scroll-pinned, clip-path morphing reveal, 260vh tall, `hero-video.mp4` background
2. `ProjectsStack` — 4-card grid (Norton, Lumen, Northwind, Atelier) from `public/assets/project-*.jpg`
3. `DominateSection` — copy + `dominate-video.mp4`
4. `ComparisonSection` — "Built for growth" / "Creative, not chaotic"
5. `AwardsSection` (from `app/(landing)/`)
6. `AudienceCarousel` — 3-card grid (Agencies, Creators, Marketers)
7. `LogoMarquee` — 3 rows of brand names, CSS keyframe marquee
8. `Testimonials3DRoom` (from `app/(landing)/`)
9. `StudioPath` (from `app/(landing)/`)
10. `SpaceJourney` (from `app/(landing)/`)
11. `Footer` + `Navbar`

## Known Issues / Drift

### Config drift
- **`next.config.mjs`** is missing the `turbopack: {}` key (Turbopack is the default dev bundler in Next 16, but explicit declaration is documented best practice and the MIGRATION_SUMMARY claims Turbopack is configured).
- **`tsconfig.json`** includes `server.ts`, `start.ts`, `components` but **not** `lib/`, `data/`, `hooks/`, `types/`. Inconsistent — `lib/utils.ts` is referenced by code but the dir isn't listed.
- **`app/layout.tsx`** metadata is still placeholder ("Lovable App", "Immersive Hero creates an engaging hero section...") — never updated to ClickMasters branding.

### Dead code / leftover
- `server.ts` + `start.ts` at root — TanStack Start entries, unrelated to Next.js. Should be deleted or moved into a separate workspace.
- `routes/` — empty leftover dir from TanStack Router. Delete.
- **`@tanstack/react-start`** dependency in `package.json` — unused by current Next.js app.
- **`@reduxjs/toolkit` + `react-redux`** — installed, no usage in current code.

### Document drift
- `MIGRATION_SUMMARY.md` describes an `(admin)/`, `(auth)/`, `api/`, `models/`, `pages/` structure that **does not exist on disk**. Either the doc is aspirational/historical, or those dirs were removed during cleanup.
- The file tree embedded in the previous version of this `claude.md` is fictional — none of those routes exist.

### Stale `.next` cache
Documented as a recurring build failure. Standard fix: `rmdir /s /q .next && npm run build`.

## What Is Working
- Tailwind 4 OKLCH theme system compiles cleanly
- React Query provider mounts via `app/providers.tsx`
- All public assets are present in `public/assets/` and the JPG imports work (typed via `types/assets.d.ts`)
- Hero scroll-pinned clip-path animation runs on the client
- Logo marquee animates via CSS keyframes
- `app/error.tsx` and `app/not-found.tsx` exist and are App-Router-compliant

## Migration Status
✅ Done
- Vite → Next.js App Router scaffolding
- Tailwind 4 + Radix + shadcn component library
- React Query provider wired into root layout
- All section components in `app/(landing)/` rendering
- Public asset migration to `public/`
- TypeScript declarations for media imports

🟡 In progress
- Document accuracy (`claude.md` + `MIGRATION_SUMMARY.md` still describe removed structure)
- Layout metadata still placeholder
- `next.config.mjs` missing Turbopack declaration

❌ Not done
- Admin / auth / API / CMS routes (MIGRATION_SUMMARY implied these existed)
- Data models (none on disk)
- API features (blogApi, caseStudyApi, etc. in MIGRATION_SUMMARY do not exist)
- Dead-code cleanup: `server.ts`, `start.ts`, `routes/`, unused deps

## Next Steps
1. **Reconcile docs with reality** — update `MIGRATION_SUMMARY.md` to reflect the single-landing-page reality, or re-add the admin/auth/API sections if they are actually planned
2. **Update `app/layout.tsx` metadata** to ClickMasters branding
3. **Delete dead code**: `server.ts`, `start.ts`, `routes/`, unused deps in `package.json`
4. **Fix `tsconfig.json`** `include` to cover `lib/`, `data/`, `hooks/`, `types/`, drop `server.ts`/`start.ts`
5. **Add `turbopack: {}` to `next.config.mjs`** for explicit declaration
6. **Verify build** after cleanup: `rmdir /s /q .next && npm run build`
7. **Decide on routing model** — landing-only is fine for a portfolio, but confirm no admin/CMS work is planned
