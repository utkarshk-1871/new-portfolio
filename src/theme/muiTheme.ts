"use client";

import { createTheme } from "@mui/material/styles";

const paletteByMode = {
  light: {
    primary: { main: "#4f46e5", contrastText: "#ffffff" },
    secondary: { main: "#6366f1", contrastText: "#ffffff" },
    error: { main: "#dc2626", contrastText: "#ffffff" },
    background: { default: "#fafafa", paper: "#ffffff" },
    text: { primary: "#09090b", secondary: "#52525b" },
    divider: "#e4e4e7",
  },
  dark: {
    primary: { main: "#7c3aed", contrastText: "#f4f4f5" },
    secondary: { main: "#8b5cf6", contrastText: "#f4f4f5" },
    error: { main: "#ef4444", contrastText: "#f4f4f5" },
    background: { default: "#09090b", paper: "#18181b" },
    text: { primary: "#f4f4f5", secondary: "#a1a1aa" },
    divider: "#27272a",
  },
} as const;

export function createAppTheme(mode: "light" | "dark") {
  return createTheme({
    palette: {
      mode,
      ...paletteByMode[mode],
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: "var(--font-inter), sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "var(--color-bg)",
            color: "var(--color-text-primary)",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text-primary)",
            borderLeft: "1px solid var(--color-border)",
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 6,
            borderRadius: 9999,
            backgroundColor: "var(--color-input-bg)",
          },
          bar: {
            borderRadius: 9999,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 14,
              backgroundColor: "var(--color-input-bg)",
              color: "var(--color-text-primary)",
              "& fieldset": {
                borderColor: "var(--color-border)",
              },
              "&:hover fieldset": {
                borderColor: "var(--color-focus)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--color-focus)",
                borderWidth: 2,
              },
            },
            "& .MuiInputLabel-root": {
              color: "var(--color-text-secondary)",
            },
            "& .MuiFormHelperText-root.Mui-error": {
              color: "var(--color-error)",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 9999,
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 9999,
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-input-bg)",
            color: "var(--color-text-primary)",
          },
        },
      },
    },
  });
}
