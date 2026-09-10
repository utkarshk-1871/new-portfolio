"use client";

import { Moon, Sun } from "lucide-react";

import { useThemeMode } from "@/theme/ThemeContext";

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-input-bg)] text-[var(--color-text-primary)] backdrop-blur-md transition-colors hover:bg-[var(--color-surface-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
      aria-label={
        mode === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
