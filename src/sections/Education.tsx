import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <AnimatedSection
      id="education"
      className="scroll-mt-[72px] border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20">
        <SectionHeading
          title="Education"
          subtitle="Academic background and qualifications."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((entry) => (
            <article
              key={entry.institution}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                {entry.degree}
              </h3>
              <p className="mt-2 text-[var(--color-primary)]">
                {entry.institution}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {entry.location}
              </p>
              <time className="mt-3 block text-sm font-medium text-[var(--color-text-secondary)]">
                {entry.period}
              </time>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
