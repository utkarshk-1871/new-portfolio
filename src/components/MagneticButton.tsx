"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function MagneticButton({
  href,
  children,
  external = false,
  className = "",
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const baseClass =
    "inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-primary-muted)] px-6 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.a
      href={href}
      className={`${baseClass} ${className}`}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...linkProps}
    >
      {children}
    </motion.a>
  );
}
