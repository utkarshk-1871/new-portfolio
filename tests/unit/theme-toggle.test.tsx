import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeRegistry } from "@/theme/ThemeContext";

describe("ThemeToggle", () => {
  afterEach(() => {
    cleanup();
    localStorage.removeItem("portfolio-theme");
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.classList.remove("dark");
  });

  it("renders with accessible label", () => {
    render(
      <ThemeRegistry>
        <ThemeToggle />
      </ThemeRegistry>,
    );

    expect(
      screen.getByRole("button", { name: /switch to/i }),
    ).toBeInTheDocument();
  });

  it("toggles data-theme on click", async () => {
    const user = userEvent.setup();
    document.documentElement.setAttribute("data-theme", "light");

    render(
      <ThemeRegistry>
        <ThemeToggle />
      </ThemeRegistry>,
    );

    await user.click(screen.getByRole("button", { name: /switch to dark/i }));

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
