"use client";

import { motion } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollIndicator() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      aria-hidden="true"
    >
      <span className="text-xs tracking-widest text-[var(--color-text-secondary)] uppercase">
        Scroll
      </span>
      <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--glass-border)] p-1">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
