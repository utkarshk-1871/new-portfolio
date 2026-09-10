import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="scroll-mt-[72px] border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey in mobile development."
        />
        <ol className="relative space-y-8 border-l border-[var(--color-border)] pl-8">
          {experience.map((entry) => (
            <li key={`${entry.title}-${entry.period}`} className="relative">
              <span
                className="absolute top-1 -left-[2.125rem] h-4 w-4 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg)]"
                aria-hidden="true"
              />
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-[var(--color-primary)]">
                      {entry.company}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {entry.location}
                    </p>
                  </div>
                  <time className="text-sm font-medium text-[var(--color-text-secondary)]">
                    {entry.period}
                  </time>
                </div>
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
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
