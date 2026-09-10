import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, stats } from "@/data/profile";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="scroll-mt-[72px] border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20">
        <SectionHeading
          title="About"
          subtitle="Building mobile experiences that scale."
        />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              {profile.summary}
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              {profile.aboutExtended}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
              >
                <p className="font-display text-3xl font-bold text-[var(--color-primary)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
