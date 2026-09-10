"use client";

import { useMemo } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParticleSpec {
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  color: "primary" | "accent" | "focus";
}

function createParticles(count: number): ParticleSpec[] {
  let seed = 17;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const colors: ParticleSpec["color"][] = ["primary", "accent", "focus"];

  return Array.from({ length: count }, (_, index) => ({
    left: `${(random() * 100).toFixed(1)}%`,
    top: `${(random() * 100).toFixed(1)}%`,
    size: 2 + Math.floor(random() * 3),
    duration: `${8 + random() * 12}s`,
    delay: `${random() * 8}s`,
    color: colors[index % colors.length] ?? "primary",
  }));
}

const PARTICLES = createParticles(48);

export function BackgroundParticles() {
  const reducedMotion = useReducedMotion();
  const particles = useMemo(() => PARTICLES, []);

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${particle.top}-${index}`}
          className={`bg-bubble animate-bubble-drift absolute rotate-45 opacity-70 ${particle.color === "primary" ? "bg-bubble-primary" : particle.color === "accent" ? "bg-bubble-accent" : "bg-bubble-focus"}`}
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
  );
}
