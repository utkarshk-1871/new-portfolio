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

import {
  applyTheme,
  persistTheme,
  readStoredTheme,
  type ThemeMode,
} from "@/lib/apply-theme";
import { createAppTheme } from "@/theme/muiTheme";

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = readStoredTheme();
    applyTheme(initial);
    queueMicrotask(() => {
      setMode(initial);
    });

    const onStorage = (event: StorageEvent) => {
      if (event.key === "portfolio-theme" && event.newValue) {
        const next: ThemeMode = event.newValue === "dark" ? "dark" : "light";
        applyTheme(next);
        setMode(next);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((current) => {
      const next: ThemeMode = current === "dark" ? "light" : "dark";
      applyTheme(next);
      persistTheme(next);
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
