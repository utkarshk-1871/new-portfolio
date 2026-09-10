import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="scroll-mt-[72px] border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with daily."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-light)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
