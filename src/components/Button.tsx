import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";
  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-primary-muted)] text-white shadow-[var(--shadow-glow)] hover:opacity-90",
    secondary:
      "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  };

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
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
