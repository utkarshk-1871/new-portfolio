"use client";

import { Moon, Sun } from "lucide-react";

import { useThemeMode } from "@/theme/ThemeContext";

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
      aria-label={
        mode === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
