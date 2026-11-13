"use client";
// components/cms/CmsReveal.tsx
// settings.motion for CMS sections: fade-up | fade | slide-in | slide-left |
// slide-right | zoom | none. Respects prefers-reduced-motion.
import { motion, useReducedMotion, type Variants } from "framer-motion";

const VARIANTS: Record<string, Variants> = {
  "fade-up": { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  "slide-in": { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  "slide-left": { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  "slide-right": { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
};

export default function CmsReveal({
  motion: name,
  className,
  children,
}: {
  motion: string;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const variants = VARIANTS[name];
  if (!variants || reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
