import Image from "next/image";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { projectStatStrip } from "@/data/hero";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I'm proud of"
          subtitle="Selected production applications spanning healthcare, SaaS, hospitality, finance, and entertainment."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <TiltCard key={project.id}>
              <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-2xl backdrop-blur-xl transition-colors hover:border-[var(--color-primary)]/30">
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-accent)]/15">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={`${project.title} project preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : (
                    <>
                      <div className="bg-brand-gradient absolute inset-0 opacity-10" />
                      <span className="relative rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1 text-xs font-semibold tracking-wide text-[var(--color-primary)] uppercase">
                        {project.technologies[0] ?? "Mobile"}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium tracking-wide text-[var(--color-primary)] uppercase">
                    Featured Project
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.playStoreUrl ||
                    project.appStoreUrl ||
                    project.demoUrl) && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.playStoreUrl ? (
                        <a
                          href={project.playStoreUrl}
                          className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Play Store
                        </a>
                      ) : null}
                      {project.appStoreUrl ? (
                        <a
                          href={project.appStoreUrl}
                          className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          App Store
                        </a>
                      ) : null}
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            </TiltCard>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {projectStatStrip.map((item) => (
            <div
              key={item.label}
              className="glass-panel rounded-2xl p-5 text-center backdrop-blur-xl"
            >
              <p className="text-gradient text-3xl font-bold">{item.value}</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
