import { describe, expect, it } from "vitest";

import { profile, stats } from "@/data/profile";
import { projects } from "@/data/projects";

describe("profile data", () => {
  it("has required profile fields", () => {
    expect(profile.name).toBe("Utkarsh Karnik");
    expect(profile.email).toContain("@");
    expect(profile.roles.length).toBeGreaterThan(0);
  });

  it("has four stats", () => {
    expect(stats).toHaveLength(4);
  });
});

describe("projects data", () => {
  it("has six projects with unique ids", () => {
    expect(projects).toHaveLength(6);
    const ids = new Set(projects.map((project) => project.id));
    expect(ids.size).toBe(6);
  });
});
