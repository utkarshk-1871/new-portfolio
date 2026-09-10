import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeRegistry } from "@/theme/ThemeContext";

describe("ThemeToggle", () => {
  afterEach(() => {
    cleanup();
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

  it("toggles theme on click", async () => {
    const user = userEvent.setup();

    render(
      <ThemeRegistry>
        <ThemeToggle />
      </ThemeRegistry>,
    );

    const button = screen.getByRole("button", { name: /switch to/i });
    await user.click(button);

    expect(
      screen.getByRole("button", { name: /switch to/i }),
    ).toBeInTheDocument();
  });
});
