import { describe, expect, it } from "vitest";

import { skillCategories } from "@/data/skills";
import { getSkillIcon, skillIconMap } from "@/lib/skill-icons";

describe("skill icons", () => {
  it("maps every skill to an icon", () => {
    const names = skillCategories.flatMap((category) =>
      category.skills.map((skill) => skill.name),
    );

    for (const name of names) {
      expect(getSkillIcon(name), `missing icon for ${name}`).toBeDefined();
    }

    expect(Object.keys(skillIconMap)).toHaveLength(names.length);
  });

  it("uses each lucide fallback icon only once", () => {
    const lucideIcons = Object.values(skillIconMap)
      .filter((entry) => entry.kind === "lucide")
      .map((entry) => entry.icon);

    const unique = new Set(lucideIcons);
    expect(unique.size).toBe(lucideIcons.length);
  });
});
