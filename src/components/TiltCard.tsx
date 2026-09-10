"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const reducedMotion = useReducedMotion();
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !canHover) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };

  const handleLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <div
      className={`transition-transform duration-200 ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
