"use client";

import { motion } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const reducedMotion = useReducedMotion();
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  const content = (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1.5 text-xs font-medium tracking-widest text-[var(--color-primary)] uppercase backdrop-blur-sm">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`max-w-2xl text-base text-[var(--color-text-secondary)] sm:text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );

  if (reducedMotion) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}
