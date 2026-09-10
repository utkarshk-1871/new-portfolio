"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s ease",
        background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, color-mix(in srgb, var(--color-primary) 14%, transparent), transparent 42%)`,
      }}
    />
  );
}
