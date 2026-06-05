---
name: navbar-mega-menu
description: Build a two-column hover mega menu for Next.js navbars with left categories and right sub-items driven by external data
source: auto-skill
extracted_at: '2026-06-05T12:10:00.000Z'
---

## Pattern: Two-Column Hover Mega Menu

A reusable pattern for a navbar mega menu where hovering a nav link reveals a two-panel dropdown: **categories on the left**, **sub-items on the right**. The active category is selected by hovering its row in the left column.

### Data Structure

Define your menu data as an array of categories, each with a `label`, `slug`, and `items` array:

```ts
// data/main-services.js (or any data file)
export const serviceMenuSections = Object.values(mainServicesData).map(main => ({
  label: main.title,       // e.g. "Software Development"
  slug: main.slug,         // e.g. "software-development"
  items: main.subServices.map(sub => ({
    title: sub.title,      // e.g. "Custom Software Development"
    slug: sub.slug,        // e.g. "custom-software-development"
    description: sub.description,
  })),
}));
```

### MegaMenu Component

```tsx
// components/layout/MegaMenu.tsx
"use client";
import { useState, useRef, useEffect, type ReactNode } from "react";

type MegaMenuProps = {
  categories: Array<{
    label: string;
    slug: string;
    items: Array<{ title: string; slug: string; description: string }>;
  }>;
  trigger: ReactNode;  // The nav link element that opens the menu
};

export default function MegaMenu({ categories, trigger }: MegaMenuProps) {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setVisible(true);
    setTimeout(() => setOpen(true), 10);
  };

  const handleLeave = () => {
    setOpen(false);
    closeTimer.current = setTimeout(() => {
      setVisible(false);
      setHoveredIdx(0);
    }, 250);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const active = categories[hoveredIdx];

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {trigger}
      {/* Hover bridge — prevents menu from closing while moving cursor to panel */}
      <div className="absolute -bottom-4 left-0 right-0 h-4" />

      {visible && (
        <div className={`absolute top-full left-1/2 z-50 w-[min(960px,92vw)] pt-3 transition-all duration-300
          ${open ? "translate-x-[-50%] translate-y-0 scale-100 opacity-100"
                   : "translate-x-[-50%] -translate-y-2 scale-[0.97] opacity-0"}`}>
          <div className="flex min-h-[340px] max-h-[70vh] rounded-2xl border bg-white shadow-2xl overflow-hidden">
            {/* Left: Categories */}
            <div className="w-[260px] shrink-0 border-r bg-gray-50 p-4">
              {categories.map((cat, i) => (
                <button key={cat.slug} type="button" onMouseEnter={() => setHoveredIdx(i)}
                  className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-left
                    ${hoveredIdx === i ? "bg-indigo-600 text-white" : "hover:bg-indigo-50"}`}>
                  <span className="text-[13px] font-medium">{cat.label}</span>
                </button>
              ))}
            </div>
            {/* Right: Sub-items */}
            <div className="flex-1 overflow-y-auto p-5">
              {active && (
                <div className="grid grid-cols-2 gap-3">
                  {active.items.map((item) => (
                    <a key={item.slug} href={`/services/${active.slug}/${item.slug}`}
                      className="rounded-xl border p-3.5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                      <p className="text-[13px] font-semibold">{item.title}</p>
                      <p className="text-[11px] text-gray-500 line-clamp-2">{item.description}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

### Navbar Integration

```tsx
// In your Navbar component:
import MegaMenu from "./MegaMenu";
import { serviceMenuSections } from "@/data/main-services";

// For links with mega menu:
<MegaMenu
  categories={serviceMenuSections}
  trigger={
    <span className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium cursor-pointer">
      Services
      <ChevronDown className="h-3 w-3 opacity-60" />
    </span>
  }
/>

// For regular links:
<a href="/about" className="px-4 py-2 text-[13px] font-medium">About</a>
```

### Key Implementation Details

1. **Hover bridge**: An invisible `div` between the trigger and the panel prevents the menu from closing when the user moves their cursor diagonally from the link to the dropdown.
2. **Close timer with reset**: `handleEnter` clears any pending close timer, so rapid mouse movements don't cause flicker.
3. **Reset on close**: `setHoveredIdx(0)` on close ensures the first category is selected next time the menu opens.
4. **`trigger` prop pattern**: The MegaMenu doesn't own the nav link — it receives it as a child prop. This keeps the navbar in control of link styling and the menu in control of positioning.
5. **Data-driven**: The menu reads from a plain data array, so adding/removing services requires zero component changes.
6. **Scrollable right panel**: `overflow-y-auto` with `max-h-[70vh]` handles categories with many sub-items gracefully.
