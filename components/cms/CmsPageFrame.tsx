// components/cms/CmsPageFrame.tsx
// Wraps a page created in the ERP in the site's own chrome:
// - Navbar / Footer are the ClickMasters components. ERP navigation (A1 site
//   navigation, the page's context.navigation, or the page's header/footer
//   section) replaces their links only when the ERP provides some.
// - Colours are the site's own theme (globals.css) by default, so created
//   pages look like the rest of the site. Only with CMS_USE_ERP_COLORS=true are
//   the ERP colours (A1 design.colors, overridden by the page's design.colors)
//   mapped onto the theme tokens for this page.
// - customCode: css → filtered <style>; html → allow-list sanitizer;
//   js → only with CMS_ALLOW_CUSTOM_JS=true (explicit opt-in).
import type { CSSProperties } from "react";
import Navbar, { type NavbarItem } from "@/components/layout/Navbar";
import Footer, { type FooterColumn } from "@/components/layout/Footer";
import type { CmsPage } from "@/lib/cms/cms";
import type { CmsNavItem, CmsSite } from "@/lib/cms/site";
import { contrastText, luminance, safeHref } from "@/lib/cms/safe";
import CmsRichText from "./CmsRichText";
import CmsSectionRenderer from "./CmsSectionRenderer";
import { items, pick } from "./cmsContent";

const toNavbarItem = (item: CmsNavItem): NavbarItem => ({
  label: item.label,
  href: item.href,
  newTab: item.newTab,
  children: item.children.map(toNavbarItem),
});

function footerColumns(nav: CmsNavItem[]): FooterColumn[] {
  const groups = nav.filter((i) => i.children.length);
  const loose = nav.filter((i) => !i.children.length && i.href);
  return [
    ...groups.map((g) => ({
      title: g.label,
      items: g.children
        .filter((c) => c.href)
        .map((c) => ({ label: c.label, href: c.href, newTab: c.newTab })),
    })),
    ...(loose.length
      ? [
          {
            title: "Links",
            items: loose.map((c) => ({
              label: c.label,
              href: c.href,
              newTab: c.newTab,
            })),
          },
        ]
      : []),
  ].slice(0, 4);
}

/** Strips anything that could break out of <style> or pull remote code. */
function filterCss(css: string): string {
  return (
    css
      // CSS never needs "<": dropping it makes breaking out of <style> impossible.
      .replace(/</g, "")
      .replace(/@import[^;]*;?/gi, "")
      .replace(/expression\s*\(/gi, "")
      .replace(/javascript\s*:/gi, "")
      .replace(/behavior\s*:/gi, "")
      .replace(/-moz-binding/gi, "")
      .slice(0, 100_000)
  );
}

function themeVars(primary: string, secondary: string): CSSProperties {
  const vars: Record<string, string> = {
    // Defaults = the site's own theme (globals.css).
    "--cms-brand": "var(--primary)",
    "--cms-brand-foreground": "var(--primary-foreground)",
    // The site's own dark navy (globals.css light-theme --foreground).
    "--cms-dark": "oklch(0.129 0.042 264.695)",
    "--cms-on-dark-primary": "#ffffff",
    "--cms-on-dark-primary-foreground": "oklch(0.18 0.02 250)",
  };
  if (primary) {
    const fg = contrastText(primary);
    vars["--cms-brand"] = primary;
    vars["--cms-brand-foreground"] = fg;
    vars["--primary"] = primary;
    vars["--primary-foreground"] = fg;
    vars["--ring"] = primary;
    // Buttons on dark sections: the brand colour, unless it is too dark to
    // stand out — then white with brand-coloured text.
    const tooDark = luminance(primary) < 0.08;
    vars["--cms-on-dark-primary"] = tooDark ? "#ffffff" : primary;
    vars["--cms-on-dark-primary-foreground"] = tooDark ? primary : fg;
  }
  if (secondary) vars["--cms-dark"] = secondary;
  return vars as CSSProperties;
}

export default function CmsPageFrame({
  page,
  site,
}: {
  page: CmsPage;
  site: CmsSite | null;
}) {
  const headerSection = page.sections.find(
    (s) => s.type === "header" || s.type === "navbar",
  );
  const footerSection = page.sections.find((s) => s.type === "footer");

  // Header nav: the page's header section > page context > site navigation.
  const sectionNav = headerSection
    ? items(headerSection.content)
        .map((i) => ({
          label: pick(i, "label"),
          href: safeHref(pick(i, "url")),
          newTab: i.newTab === true || i.target === "_blank",
        }))
        .filter((i) => i.label && i.href)
    : [];
  const headerNav: NavbarItem[] = sectionNav.length
    ? sectionNav
    : (page.navigation.header.length
        ? page.navigation.header
        : (site?.header ?? [])
      ).map(toNavbarItem);
  const ctaLabel = headerSection ? pick(headerSection.content, "ctaLabel") : "";
  const ctaHref = headerSection
    ? safeHref(pick(headerSection.content, "ctaUrl"))
    : "";

  const footerNav = page.navigation.footer.length
    ? page.navigation.footer
    : (site?.footer ?? []);
  const columns = footerColumns(footerNav);

  // Site theme unless ERP colours are explicitly opted into.
  const useErpColors = process.env.CMS_USE_ERP_COLORS === "true";
  const primary = useErpColors
    ? page.colors.primary || site?.colors.primary || ""
    : "";
  const secondary = useErpColors
    ? page.colors.secondary || site?.colors.secondary || ""
    : "";

  const css = filterCss(page.customCode.css);
  const allowJs =
    process.env.CMS_ALLOW_CUSTOM_JS === "true" && page.customCode.js.trim();

  return (
    <div
      data-cms-page={page.slug}
      data-cms-signature={page.signature}
      className="min-h-screen bg-background text-foreground"
      style={themeVars(primary, secondary)}
    >
      {css ? <style dangerouslySetInnerHTML={{ __html: css }} /> : null}
      <Navbar
        items={headerNav.length ? headerNav : undefined}
        cta={
          ctaLabel && ctaHref ? { label: ctaLabel, href: ctaHref } : undefined
        }
      />
      <main>
        <CmsSectionRenderer page={page} />
        {page.customCode.html.trim() ? (
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-10">
            <CmsRichText html={page.customCode.html} />
          </div>
        ) : null}
      </main>
      <Footer
        columns={columns.length ? columns : undefined}
        tagline={
          footerSection ? pick(footerSection.content, "tagline") : undefined
        }
        copyright={
          footerSection ? pick(footerSection.content, "copyright") : undefined
        }
      />
      {allowJs ? (
        // Explicit opt-in only (CMS_ALLOW_CUSTOM_JS=true): runs ERP-authored script.
        <script
          dangerouslySetInnerHTML={{
            __html: page.customCode.js.replace(/<\/script/gi, "<\\/script"),
          }}
        />
      ) : null}
    </div>
  );
}
