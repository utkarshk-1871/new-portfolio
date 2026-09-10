"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInViewport } from "@/hooks/useInViewport";
import { motion } from "motion/react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  className = "",
  id,
}: AnimatedSectionProps) {
  const [ref, isInView] = useInViewport<HTMLElement>(0.08);
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <section ref={ref} id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 1, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 28 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
