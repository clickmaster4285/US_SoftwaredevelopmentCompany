import Link from "next/link";
import type { InternalLink } from "@/lib/contextual-links";

export function InlineLinks({
  links,
  className = "font-semibold text-primary",
}: {
  links: InternalLink[];
  className?: string;
}) {
  return (
    <>
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? (index === links.length - 1 ? " and " : ", ") : null}
          <Link href={link.href} className={className}>
            {link.label}
          </Link>
        </span>
      ))}
    </>
  );
}
