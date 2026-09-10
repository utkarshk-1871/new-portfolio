"use client";

import { motion } from "motion/react";

import { SkillIcon } from "@/components/SkillIcon";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInViewport } from "@/hooks/useInViewport";

interface SkillBarProps {
  name: string;
  proficiency: number;
  gradientClass: string;
}

export function SkillBar({ name, proficiency, gradientClass }: SkillBarProps) {
  const [ref, isInView] = useInViewport<HTMLDivElement>(0.2);
  const reducedMotion = useReducedMotion();
  const width = reducedMotion || isInView ? `${proficiency}%` : "0%";

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2.5 text-[var(--color-text-primary)]/80">
          <SkillIcon name={name} />
          {name}
        </span>
        <span className="text-xs text-[var(--color-text-secondary)]">
          {proficiency}%
        </span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--glass-bg)]"
        role="progressbar"
        aria-valuenow={proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradientClass}`}
          initial={false}
          animate={{ width }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
