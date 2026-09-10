import type { CSSProperties } from "react";

import { getSkillIcon } from "@/lib/skill-icons";

interface SkillIconProps {
  name: string;
}

export function SkillIcon({ name }: SkillIconProps) {
  const definition = getSkillIcon(name);

  if (!definition) {
    return null;
  }

  return (
    <span className="skill-icon-pill flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-light)] transition-colors group-hover:border-[var(--color-primary)]/35">
      {definition.kind === "simple" ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="skill-brand-icon h-[18px] w-[18px]"
          style={
            {
              "--skill-icon-brand-fill": `#${definition.icon.hex}`,
            } as CSSProperties
          }
        >
          <title>{definition.icon.title}</title>
          <path d={definition.icon.path} />
        </svg>
      ) : (
        <definition.icon
          className="skill-fallback-icon h-[18px] w-[18px]"
          aria-hidden="true"
          strokeWidth={1.75}
        />
      )}
    </span>
  );
}
