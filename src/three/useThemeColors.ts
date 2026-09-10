"use client";

import { useEffect, useState } from "react";

interface ThemeColors {
  primary: string;
  accent: string;
}

export function useThemeColors(): ThemeColors {
  const [colors, setColors] = useState<ThemeColors>({
    primary: "#3b82f6",
    accent: "#8b5cf6",
  });

  useEffect(() => {
    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      setColors({
        primary: styles.getPropertyValue("--color-primary").trim() || "#3b82f6",
        accent: styles.getPropertyValue("--color-accent").trim() || "#8b5cf6",
      });
    };

    readColors();

    const observer = new MutationObserver(readColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => observer.disconnect();
  }, []);

  return colors;
}
