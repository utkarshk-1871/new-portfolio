import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="scroll-mt-[72px] border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20">
        <SectionHeading
          title="Featured Projects"
          subtitle="Selected work across healthcare, SaaS, hospitality, and more."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <TiltCard key={project.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
                <div
                  className="flex h-40 items-center justify-center bg-gradient-to-br from-[var(--color-gradient-start)]/20 to-[var(--color-gradient-end)]/20"
                  aria-hidden="true"
                >
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1 text-xs font-semibold tracking-wide text-[var(--color-primary)] uppercase">
                    Flutter
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium tracking-wide text-[var(--color-primary)] uppercase">
                    Featured Project
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[var(--color-surface-light)] px-2 py-1 text-xs text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.playStoreUrl ||
                    project.appStoreUrl ||
                    project.demoUrl) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          className="text-sm font-medium text-[var(--color-primary)]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Play Store
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          className="text-sm font-medium text-[var(--color-primary)]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          App Store
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="text-sm font-medium text-[var(--color-primary)]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
