"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

import { THEME_STORAGE_KEY } from "@/lib/theme-script";
import { createAppTheme } from "@/theme/muiTheme";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialMode(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY && event.newValue) {
        const next = event.newValue === "dark" ? "dark" : "light";
        setMode(next);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((current) => {
      const next: ThemeMode = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const value = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme]);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export function useThemeMode(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeRegistry");
  }
  return context;
}
