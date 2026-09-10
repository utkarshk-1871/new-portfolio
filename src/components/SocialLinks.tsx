"use client";

import { Globe, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialBrandIcons";
import { socialLinks } from "@/data/social";

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: Mail,
  Portfolio: Globe,
} as const;

interface SocialLinksProps {
  className?: string;
  variant?: "default" | "hero";
}

export function SocialLinks({
  className = "",
  variant = "default",
}: SocialLinksProps) {
  const heroLinks = socialLinks.filter(
    (link) =>
      link.label === "GitHub" ||
      link.label === "LinkedIn" ||
      link.label === "Email",
  );

  const links = variant === "hero" ? heroLinks : socialLinks;

  if (variant === "hero") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {heroLinks.map((link) => {
          const Icon = iconMap[link.label as keyof typeof iconMap] ?? Globe;
          return (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--color-text-secondary)] transition-all hover:scale-110 hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap] ?? Globe;
        return (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={`Open ${link.label}`}
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
