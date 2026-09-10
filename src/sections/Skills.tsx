"use client";

import { Cloud, Code2, Database, Network, Server } from "lucide-react";
import { motion } from "motion/react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBar";
import { skillCategories, skillGradientClasses } from "@/data/skills";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const categoryIcons = [Code2, Server, Network, Cloud, Database, Cloud, Network];

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatedSection
      id="skills"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="A modern, battle-tested tech stack"
          subtitle="Technologies I use to build fast, reliable, and scalable mobile products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Code2;
            const gradient = skillGradientClasses[category.gradient];

            const card = (
              <article className="glass-panel group relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl transition-colors hover:border-[var(--glass-border)]">
                <div
                  className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${gradient.glow}`}
                />
                <div
                  className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20 ${gradient.glow}`}
                />
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${gradient.icon}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                      gradientClass={gradient.bar}
                    />
                  ))}
                </div>
              </article>
            );

            if (reducedMotion) {
              return <div key={category.name}>{card}</div>;
            }

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 1, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
