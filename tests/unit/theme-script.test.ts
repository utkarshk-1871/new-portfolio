import { describe, expect, it } from "vitest";

import { getThemeInitScript, THEME_STORAGE_KEY } from "@/lib/theme-script";

describe("theme init script", () => {
  it("includes storage key", () => {
    expect(getThemeInitScript()).toContain(THEME_STORAGE_KEY);
  });

  it("sets data-theme attribute", () => {
    expect(getThemeInitScript()).toContain("data-theme");
  });
});
