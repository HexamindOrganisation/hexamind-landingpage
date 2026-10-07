"use client";

import { useEffect, useRef } from "react";

/**
 * Fades + lifts its children into view when scrolled to. Descendants marked
 * `data-stagger` reveal their own children one after another. Progressive
 * enhancement: the content is fully visible without JS, and the animation is
 * skipped for `prefers-reduced-motion` (handled in globals.css). `delay`
 * staggers grouped reveals.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // The block itself plus any staggered groups inside it, each revealed
    // when it scrolls into view (long sections reveal their lower parts later).
    const targets = [el, ...el.querySelectorAll<HTMLElement>("[data-stagger]")];
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
