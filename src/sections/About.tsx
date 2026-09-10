"use client";

import Chip from "@mui/material/Chip";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { CountUpStat } from "@/components/CountUpStat";
import { SectionHeading } from "@/components/SectionHeading";
import { achievementStats } from "@/data/achievements";
import { focusTags } from "@/data/hero";
import { profile, stats } from "@/data/profile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatedSection
      id="about"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60">
        <div className="animate-float-slow absolute top-[20%] left-[10%] h-24 w-24 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm" />
        <div className="animate-float absolute top-[30%] right-[15%] h-16 w-16 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5" />
        <div className="animate-float absolute bottom-[20%] left-[20%] h-20 w-20 rotate-45 rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5" />
      </div>

      <div className="container flex flex-col gap-16">
        <SectionHeading eyebrow="About Me" title={profile.aboutHeadline} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-lg text-[var(--color-text-secondary)]">
              {profile.summary}
            </p>
            <p className="text-base text-[var(--color-text-secondary)]">
              {profile.aboutExtended}
            </p>
            <div className="flex flex-wrap gap-3">
              {focusTags.map((tag) => (
                <Chip
                  key={tag.label}
                  label={tag.label}
                  icon={
                    <CheckCircle2
                      className="h-4 w-4 text-[var(--color-primary)]"
                      aria-hidden="true"
                    />
                  }
                  sx={{
                    borderRadius: 9999,
                    border: "1px solid var(--glass-border)",
                    backgroundColor: "var(--glass-bg)",
                    color: "hsl(var(--foreground) / 0.8)",
                    "&:hover": {
                      borderColor: "hsl(var(--primary) / 0.4)",
                    },
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <CountUpStat
                key={stat.label}
                value={stat.numericValue ?? 0}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {!reducedMotion ? (
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {achievementStats.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-2xl p-5 text-center backdrop-blur-xl"
              >
                <p className="text-gradient text-2xl font-bold">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievementStats.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-2xl p-5 text-center backdrop-blur-xl"
              >
                <p className="text-gradient text-2xl font-bold">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
