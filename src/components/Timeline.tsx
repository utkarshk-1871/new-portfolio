"use client";

import Chip from "@mui/material/Chip";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

import { useInViewport } from "@/hooks/useInViewport";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  location?: string;
  highlights?: string[];
  isCurrent?: boolean;
  meta?: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
  variant: "experience" | "education";
}

export function Timeline({ entries, variant }: TimelineProps) {
  const reducedMotion = useReducedMotion();
  const [lineRef, lineInView] = useInViewport<HTMLDivElement>(0.1);
  const Icon = variant === "education" ? GraduationCap : Briefcase;

  return (
    <div ref={lineRef} className="relative mx-auto w-full max-w-5xl">
      <div
        className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 overflow-hidden bg-[var(--color-border)] md:block"
        aria-hidden="true"
      >
        {!reducedMotion ? (
          <motion.div
            className="bg-brand-gradient w-full origin-top"
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "100%" }}
          />
        ) : (
          <div className="bg-brand-gradient h-full w-full" />
        )}
      </div>

      <ol className="space-y-10 md:space-y-14">
        {entries.map((entry, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li
              key={entry.id}
              className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
            >
              <span
                className="absolute top-8 left-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-bg)] shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] md:flex"
                aria-hidden="true"
              >
                <Icon
                  className="h-4 w-4 text-[var(--color-primary)]"
                  strokeWidth={2}
                />
              </span>

              <article
                className={`glass-panel group w-full rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-[var(--shadow-glow)] md:w-[calc(50%-2.5rem)] ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {entry.isCurrent ? (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        borderRadius: 9999,
                        backgroundColor:
                          "color-mix(in srgb, var(--color-primary) 15%, transparent)",
                        color: "var(--color-primary)",
                        fontWeight: 600,
                      }}
                    />
                  ) : null}
                  <time className="text-sm text-[var(--color-text-secondary)]">
                    {entry.period}
                  </time>
                  {entry.meta ? (
                    <span className="text-sm font-medium text-[var(--color-focus)]">
                      {entry.meta}
                    </span>
                  ) : null}
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {entry.title}
                </h3>
                <p className="mt-1 text-[var(--color-primary)]">
                  {entry.subtitle}
                </p>
                {entry.location ? (
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {entry.location}
                  </p>
                ) : null}

                {entry.highlights && entry.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
