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
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
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
      className="fixed top-0 left-0 z-50 h-0.5 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
