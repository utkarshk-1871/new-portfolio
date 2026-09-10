import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  icon?: "arrow" | "download" | "mail";
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  icon,
}: ButtonProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]";
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25 hover:scale-[1.03] hover:shadow-[var(--color-primary)]/40 active:scale-[0.98]",
    secondary:
      "border border-[var(--color-border)] bg-[var(--color-input-bg)] text-[var(--color-text-primary)] backdrop-blur-md hover:scale-[1.03] hover:border-[var(--color-focus)] hover:bg-[var(--color-surface-light)] active:scale-[0.98]",
    ghost:
      "text-[var(--color-text-primary)] hover:bg-[var(--color-input-bg)] hover:scale-[1.03] active:scale-[0.98]",
  };

  const iconNode =
    icon === "arrow" ? (
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    ) : icon === "download" ? (
      <Download className="h-4 w-4" aria-hidden="true" />
    ) : icon === "mail" ? (
      <Mail className="h-4 w-4" aria-hidden="true" />
    ) : null;

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {iconNode}
      </a>
    );
  }

  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return (
      <a href={href} className={classes}>
        {children}
        {iconNode}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {iconNode}
    </Link>
  );
}
