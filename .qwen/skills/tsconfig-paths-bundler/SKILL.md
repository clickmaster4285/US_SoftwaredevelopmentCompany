---
name: tsconfig-paths-bundler
description: Fix TypeScript path alias resolution when using moduleResolution: "Bundler" (Next.js, Vite, etc.)
source: auto-skill
extracted_at: '2026-06-05T11:40:39.685Z'
---

## Problem

`tsc --noEmit` reports hundreds of `TS2307: Cannot find module '@/...'` errors even though the files exist on disk. All `@/*` path aliases fail to resolve.

## Root Cause

When `tsconfig.json` uses `"moduleResolution": "Bundler"` (standard for Next.js), the `paths` entries are resolved relative to `baseUrl`. Without `baseUrl`, or with absolute path patterns like `"/*"`, TypeScript cannot resolve any path aliases.

## Fix

Add `"baseUrl": "."` and use relative path patterns in `paths`:

```json
{
  "compilerOptions": {
    "moduleResolution": "Bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## How to verify

```bash
npx tsc --noEmit --pretty
```

Zero errors = paths are resolving correctly.

## Common mistake

Using `"@/*": ["/*"]` (absolute) without `baseUrl` — this silently fails with `moduleResolution: "Bundler"`. The correct form is `"@/*": ["./*"]` with `"baseUrl": "."`.
