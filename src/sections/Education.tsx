import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { education } from "@/data/education";

export function Education() {
  const entries = education.map((entry) => ({
    id: entry.institution,
    period: entry.period,
    title: entry.degree,
    subtitle: entry.institution,
    location: entry.location,
    meta: entry.cgpa ? `CGPA: ${entry.cgpa}` : undefined,
  }));

  return (
    <AnimatedSection
      id="education"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container flex flex-col gap-16">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <Timeline entries={entries} variant="education" />
      </div>
    </AnimatedSection>
  );
}
