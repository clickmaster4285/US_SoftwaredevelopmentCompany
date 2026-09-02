# Plan: Fix main-services-data.js missing exports + sync UI/UX slug

## Part A: Add missing exports to `data/main-services-data.js` (done)
- Added imports for `iconMap`, `slugify`, `enrichServiceData`, `SERVICE_SECTION_DATA`, `getWhyChooseUsData`, `DEFAULT_WHY_CHOOSE_US_BENEFITS`
- Added `getServiceData(slug)` — URL-slug lookup via `Object.values(mainServiceData).find(s => s.slug === slug)`
- Added `getSubServiceData(slug)` — iterates categories, returns flattened sub-service with `categorySlug`/`categoryTitle`
- Added `getAllServiceSlugs()` — returns URL slugs via `Object.values(mainServiceData).map(s => s.slug)`
- Added `getAllSubServicePages()` — flattens all sub-services with parent category metadata
- Added re-exports for `enrichServiceData`, `SERVICE_SECTION_DATA`, `getWhyChooseUsData`, `DEFAULT_WHY_CHOOSE_US_BENEFITS`
- Validated with `node --check` — no syntax errors

## Part B: Sync UI/UX slug from `main-services-data.js` into `main-services.js`

### Current state
- `data/main-services.js` has key `"design-ui-ux"` with `slug: "design-ui-ux"`
- `data/main-services-data.js` has key `uiUxDesignServices` with `slug: "ui-ux-design-services"`
- `data/service-section-data.js` has key `"design-ui-ux"`
- `data/whyChooseUsData.js` has key `"design-ui-ux"`
- `data/sub-services.js` has 7 override objects with `categorySlug: "design-ui-ux"`
- No hardcoded references in `app/` or `components/` directories

### Goal
Rename the UI/UX category slug from `design-ui-ux` to `ui-ux-design-services` across all data files so it matches the canonical slug in `main-services-data.js`.

### Steps

1. **Update `data/main-services.js`**
   - Rename the object key from `"design-ui-ux"` to `"ui-ux-design-services"`
   - Update the `slug` field from `"design-ui-ux"` to `"ui-ux-design-services"`
   - Update `title`, `tagline`, `description`, `heroBadge`, `heroImage`, `stats`, `trustedClients`, and `subServices` to match the rich data from `main-services-data.js`
   - Keep the simplified structure (do NOT add `metaTitle`, `canonical`, `trustSection`, etc. — those belong in `main-services-data.js`)

2. **Update `data/service-section-data.js`**
   - Rename the key from `"design-ui-ux"` to `"ui-ux-design-services"`

3. **Update `data/whyChooseUsData.js`**
   - Rename the key from `"design-ui-ux"` to `"ui-ux-design-services"`

4. **Update `data/sub-services.js`**
   - Update all 7 occurrences of `categorySlug: "design-ui-ux"` to `categorySlug: "ui-ux-design-services"` in the override objects:
     - `uiUxDesignOverride` (line 11037)
     - `productDesignOverride` (line 11709)
     - `webDesignOverride` (line 12033)
     - `mobileAppDesignOverride` (line 12340)
     - `uxResearchOverride` (line 12663)
     - `wireframingPrototypingOverride` (line 12966)
     - `designSystemsOverride` (line 13256)

5. **Validation**
   - Run `grep -r "design-ui-ux" .` to confirm zero remaining references
   - Run `node --check data/main-services.js` to verify syntax
   - Run `node --check data/sub-services.js` to verify syntax

### Risks
- `sub-services.js` overrides are keyed by sub-service slug, not category slug, so changing `categorySlug` only affects the resolved service object's category reference
- No dynamic routes in `app/(landing)` are hardcoded to `design-ui-ux`; they use `[main_service]` and `[sub_service]` params derived from these slugs
- If any external links or sitemaps reference `/design-ui-ux`, they will 404 after this change — confirm with the team if URL redirects are needed
