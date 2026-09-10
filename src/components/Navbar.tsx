"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Navbar() {
  const activeId = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const initials = getInitials(profile.name);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "glass-panel border shadow-[var(--shadow-nav)]"
            : "border border-transparent"
        }`}
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="group flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        >
          <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white shadow-[var(--color-primary)]/30 shadow-md">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold sm:block">
            {profile.name.split(" ")[0]}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {isActive ? (
                    <span
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--glass-bg)]"
                      aria-hidden="true"
                    />
                  ) : null}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button
            href="#contact"
            component="a"
            variant="contained"
            sx={{
              borderRadius: 9999,
              px: 2,
              py: 1,
              minHeight: 36,
              boxShadow:
                "0 10px 25px color-mix(in srgb, var(--color-primary) 25%, transparent)",
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: "var(--color-primary)",
              "&:hover": {
                boxShadow:
                  "0 10px 25px color-mix(in srgb, var(--color-primary) 40%, transparent)",
                transform: "scale(1.03)",
              },
            }}
          >
            Let&apos;s Talk
          </Button>
        </div>

        <MobileNav activeId={activeId} />
      </nav>
    </header>
  );
}
