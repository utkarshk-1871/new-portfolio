import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { achievementStats } from "@/data/achievements";

export function Achievements() {
  return (
    <AnimatedSection
      id="achievements"
      className="scroll-mt-[72px] border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20">
        <SectionHeading
          title="Achievements"
          subtitle="Highlights from my career so far."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievementStats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-[var(--shadow-card)]"
            >
              <p className="font-display text-2xl font-bold text-[var(--color-primary)]">
                {stat.title}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
