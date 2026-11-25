"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping background video that only downloads once it is near the
 * viewport. A plain <video autoPlay> starts fetching the whole file on page
 * load even when it sits far below the fold (the homepage "dominate" clip is
 * ~11 MB). The element keeps its box, so there is no layout shift.
 */
export default function LazyVideo({
  src,
  className,
  rootMargin = "300px",
}: {
  src: string;
  className?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      autoPlay={active}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    />
  );
}
