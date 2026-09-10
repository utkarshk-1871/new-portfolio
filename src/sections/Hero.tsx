"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import { MagneticButton } from "@/components/MagneticButton";
import { profile } from "@/data/profile";
import { resumeUrl } from "@/data/social";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useDeviceCapability } from "@/three/useDeviceCapability";

const HeroScene = dynamic(
  () => import("@/three/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-[var(--color-surface-light)]" />
    ),
  },
);

export function Hero() {
  const reducedMotion = useReducedMotion();
  const canRender3D = useDeviceCapability();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const currentRole = profile.roles[roleIndex] ?? "";
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % profile.roles.length);
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, reducedMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[72px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-gradient-start)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-gradient-end)_0%,transparent_50%)] opacity-20"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 md:px-10 lg:grid-cols-2 lg:px-20">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
            Hello There, I Am
          </p>
          <h1 className="font-display text-[clamp(2.125rem,5vw,3.5rem)] leading-tight font-bold text-[var(--color-text-primary)]">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] md:text-xl">
            {profile.tagline}
          </p>
          <p className="font-display mt-6 min-h-8 text-xl font-semibold text-[var(--color-text-primary)] md:text-2xl">
            I&apos;m a{" "}
            <span className="bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] bg-clip-text text-transparent">
              {reducedMotion ? profile.roles[0] : displayText}
            </span>
            {!reducedMotion && (
              <span className="animate-pulse text-[var(--color-primary)]">
                |
              </span>
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#projects">View Work</MagneticButton>
            <Button href={resumeUrl} variant="secondary" external>
              Resume
            </Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Email Me
            </Button>
          </div>
        </div>
        <div className="relative z-10 h-[280px] md:h-[400px] lg:h-[480px]">
          {canRender3D ? (
            <HeroScene />
          ) : (
            <div
              className="h-full w-full rounded-2xl bg-gradient-to-br from-[var(--color-gradient-start)]/20 to-[var(--color-gradient-end)]/20"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
}
