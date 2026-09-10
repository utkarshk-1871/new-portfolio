"use client";

import type { HeroBadge as HeroBadgeType } from "@/types/content";
import { motion } from "motion/react";
import {
  Cloud,
  Cpu,
  Rocket,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

const iconMap = {
  terminal: Terminal,
  cpu: Cpu,
  cloud: Cloud,
  sparkles: Sparkles,
  smartphone: Smartphone,
  rocket: Rocket,
} as const;

const colorMap = {
  terminal: "text-emerald-400",
  cpu: "text-blue-400",
  cloud: "text-violet-400",
  sparkles: "text-amber-400",
  smartphone: "text-cyan-400",
  rocket: "text-pink-400",
} as const;

interface HeroBadgeProps {
  badge: HeroBadgeType;
  className?: string;
}

export function HeroBadge({ badge, className = "" }: HeroBadgeProps) {
  const reducedMotion = useReducedMotion();
  const Icon = iconMap[badge.icon];

  return (
    <motion.div
      className={`glass-panel absolute z-10 flex cursor-default items-center gap-2 rounded-full px-3 py-2 text-xs font-medium shadow-lg ${className}`}
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 4 + badge.label.length * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      whileHover={
        reducedMotion
          ? undefined
          : {
              scale: 1.08,
              y: -10,
              boxShadow:
                "0 0 24px color-mix(in srgb, var(--color-primary) 35%, transparent)",
            }
      }
    >
      <Icon className={`h-4 w-4 ${colorMap[badge.icon]}`} aria-hidden="true" />
      {badge.label}
    </motion.div>
  );
}
