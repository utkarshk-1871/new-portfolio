"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInViewport } from "@/hooks/useInViewport";

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export function CountUpStat({ value, suffix = "", label }: CountUpStatProps) {
  const [ref, isInView] = useInViewport<HTMLDivElement>(0.3);
  const reducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 backdrop-blur-xl"
    >
      <div
        className="bg-brand-gradient absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
        aria-hidden="true"
      />
      <div className="text-gradient text-4xl font-bold sm:text-5xl">
        <CountUpNumber
          target={value}
          active={reducedMotion || isInView}
          reducedMotion={reducedMotion}
        />
        {suffix}
      </div>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{label}</p>
    </div>
  );
}

function CountUpNumber({
  target,
  active,
  reducedMotion,
}: {
  target: number;
  active: boolean;
  reducedMotion: boolean;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) {
      return;
    }

    if (reducedMotion || !active) {
      node.textContent = String(reducedMotion ? target : 0);
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      node.textContent = String(Math.round(target * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, reducedMotion]);

  return <motion.span ref={spanRef}>0</motion.span>;
}

export function CountUpStatFromValue({
  rawValue,
  label,
}: {
  rawValue: string;
  label: string;
}) {
  const match = rawValue.match(/\d+/);
  const numeric = match ? Number.parseInt(match[0], 10) : 0;
  const suffix = rawValue.replace(String(numeric), "") || "";
  return <CountUpStat value={numeric} suffix={suffix} label={label} />;
}
