"use client";

import Chip from "@mui/material/Chip";
import { motion } from "motion/react";

import { Button } from "@/components/Button";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { SocialLinks } from "@/components/SocialLinks";
import { heroParticles } from "@/data/hero";
import { profile } from "@/data/profile";
import { resumeUrl } from "@/data/social";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTypewriter } from "@/hooks/useTypewriter";

// import dynamic from "next/dynamic";
// import { CodeSnippet } from "@/components/CodeSnippet";
// import { HeroBadge } from "@/components/HeroBadge";
// import { codeSnippet, heroBadges } from "@/data/hero";
// import { useDeviceCapability } from "@/three/useDeviceCapability";
//
// const HeroScene = dynamic(
//   () => import("@/three/HeroScene").then((mod) => mod.HeroScene),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="bg-brand-gradient h-40 w-40 animate-pulse rounded-full opacity-20 blur-3xl" />
//       </div>
//     ),
//   },
// );
//
// const badgePositions = [
//   "left-0 top-6",
//   "right-0 top-24",
//   "bottom-12 left-2",
//   "bottom-4 right-6",
// ];

const fadeUp = {
  hidden: { opacity: 1, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const reducedMotion = useReducedMotion();
  const roleText = useTypewriter(profile.roles, !reducedMotion);
  const particles = heroParticles;

  const motionProps = reducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        transition: { staggerChildren: 0.12 },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float-slow absolute top-0 -left-40 h-[36rem] w-[36rem] rounded-full bg-[var(--color-primary)]/25 blur-[120px]" />
        <div className="animate-float absolute top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[var(--color-accent)]/25 blur-[120px]" />
        <div className="animate-float-slow absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/15 blur-[120px]" />
      </div>

      {!reducedMotion ? (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {particles.map((particle, index) => (
            <span
              key={`${particle.left}-${index}`}
              className="particle bg-bubble-primary absolute opacity-80"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDuration: particle.duration,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="bg-grid-pattern absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] bg-[size:48px_48px]" />

      <div className="container flex justify-center">
        <motion.div
          className="flex w-full max-w-3xl flex-col items-center gap-6 text-center"
          {...motionProps}
        >
          <motion.div variants={fadeUp}>
            <Chip
              label="Available for new opportunities"
              icon={
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              }
              sx={{
                borderRadius: 9999,
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-input-bg)",
                backdropFilter: "blur(4px)",
                color: "var(--color-text-primary)",
                "& .MuiChip-icon": { ml: 1 },
              }}
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient-animated">{profile.name}</span>
            <br />
            <span className="text-[var(--color-text-primary)]/90">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base text-[var(--color-text-secondary)] sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="min-h-8 text-lg font-medium text-[var(--color-text-primary)] sm:text-xl"
          >
            I&apos;m a{" "}
            <span className="text-gradient" aria-live="polite">
              {roleText || "\u00A0"}
            </span>
            {!reducedMotion ? (
              <span className="animate-pulse text-[var(--color-focus)]">|</span>
            ) : null}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-wrap items-center justify-center gap-3"
          >
            <Button href="#projects" variant="primary" icon="arrow">
              View Projects
            </Button>
            <Button
              href={resumeUrl}
              variant="secondary"
              external
              icon="download"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <span className="text-sm text-[var(--color-text-secondary)]">
              Follow me
            </span>
            <div className="h-px w-8 bg-[var(--color-border)]" />
            <SocialLinks variant="hero" />
          </motion.div>
        </motion.div>

        {/* Right-column 3D globe, badges, and code snippet — disabled for now */}
        {/* <motion.div
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
          initial={reducedMotion ? false : { opacity: 1, scale: 0.96 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-brand-gradient absolute inset-10 rounded-full opacity-20 blur-3xl" />
          <div className="relative h-full w-full">
            {canRender3D ? (
              <HeroScene />
            ) : (
              <div className="bg-brand-gradient absolute inset-0 rounded-full opacity-20 blur-3xl" />
            )}
            {heroBadges.map((badge, index) => (
              <HeroBadge
                key={badge.label}
                badge={badge}
                className={badgePositions[index] ?? ""}
              />
            ))}
            <CodeSnippet
              variable={codeSnippet.variable}
              value={codeSnippet.value}
            />
          </div>
        </motion.div> */}
      </div>

      <ScrollIndicator />
    </section>
  );
}
