import type { SocialLink } from "@/types/content";

import { profile } from "@/data/profile";

export const resumeUrl =
  "https://drive.google.com/file/d/1vs2dnru_ws8mKEXfO7uM1SCFlFz_JEt1/view?usp=sharing";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/utkarshk-1871",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/utkarsh-karnik-1b2661176/",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    href: `tel:${profile.phone}`,
  },
  {
    label: "Resume",
    href: resumeUrl,
    external: true,
  },
];
