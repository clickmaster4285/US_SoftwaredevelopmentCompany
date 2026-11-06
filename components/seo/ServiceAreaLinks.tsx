import {
  extraLinksForPath,
  locationLinksForPath,
} from "@/lib/contextual-links";
import { InlineLinks } from "./InlineLinks";

export default function ServiceAreaLinks({ path }: { path: string }) {
  const locations = locationLinksForPath(path);
  const extras = extraLinksForPath(path);

  if (locations.length === 0 && extras.length === 0) return null;

  return (
    <section className="border-t border-border bg-background px-5 py-12 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Related on this site
        </h2>
        {extras.length > 0 ? (
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            See also <InlineLinks links={extras} />.
          </p>
        ) : null}
        {locations.length > 0 ? (
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Clickmasters is remote-first and works by video and phone with
            clients in <InlineLinks links={locations} />.
          </p>
        ) : null}
      </div>
    </section>
  );
}
