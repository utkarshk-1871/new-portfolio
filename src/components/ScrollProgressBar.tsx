"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      className="bg-brand-gradient fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}
