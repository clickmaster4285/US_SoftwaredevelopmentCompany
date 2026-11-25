import type { CSSProperties } from "react";
import { Check, SquareCheckBig, type LucideIcon } from "lucide-react";

/**
 * Checklist bullet icon. The two icons used most often (Check, SquareCheckBig)
 * render as a masked <span> (`.ico-*` in globals.css) instead of an inline
 * <svg>: checklists repeat them dozens of times per page and each inline SVG
 * was shipped twice (HTML + hydration payload). Looks identical; any other
 * icon falls through to the normal lucide component.
 */
export function ListIcon({
  icon: Icon,
  className,
  style,
}: {
  icon: LucideIcon;
  className: string;
  style?: CSSProperties;
}) {
  if (Icon === Check || Icon === SquareCheckBig) {
    const shape = Icon === Check ? "ico-check" : "ico-sqcheck";
    return (
      <span
        aria-hidden="true"
        className={`ico ${shape} ${className}`}
        style={style}
      />
    );
  }
  return <Icon className={className} style={style} aria-hidden />;
}
