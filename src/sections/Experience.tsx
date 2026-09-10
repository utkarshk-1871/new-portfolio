import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/data/experience";

export function Experience() {
  const entries = experience.map((entry) => ({
    id: `${entry.title}-${entry.period}`,
    period: entry.period,
    title: entry.title,
    subtitle: entry.company,
    location: entry.location,
    highlights: entry.highlights,
    isCurrent: entry.isCurrent,
  }));

  return (
    <AnimatedSection
      id="experience"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          subtitle="Building and shipping production software that serves real users at scale."
        />

        <Timeline entries={entries} variant="experience" />
      </div>
    </AnimatedSection>
  );
}
