"use client";

import { createTheme } from "@mui/material/styles";

export function createAppTheme(mode: "light" | "dark") {
  return createTheme({
    cssVariables: true,
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#00d2ff" : "#009e9e",
      },
      background: {
        default: mode === "dark" ? "#0c0e12" : "#ffffff",
        paper: mode === "dark" ? "#12151b" : "#fafafa",
      },
      text: {
        primary: mode === "dark" ? "#f0f1f4" : "#141820",
        secondary: mode === "dark" ? "#9296a0" : "#5b606b",
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: "var(--font-inter), sans-serif",
    },
  });
}
