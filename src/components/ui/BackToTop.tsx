"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Tillbaka till toppen"
      title="Tillbaka till toppen"
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-primary focus-visible:outline-white"
    >
      <ArrowUp
        size={19}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </button>
  );
}