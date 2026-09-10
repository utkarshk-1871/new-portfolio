import type { Profile, Stat } from "@/types/content";

export const profile: Profile = {
  name: "Utkarsh Karnik",
  title: "Mobile App Developer",
  tagline: "A developer who builds scalable apps that users love.",
  roles: [
    "Software Engineer",
    "Flutter Developer",
    "Mobile Engineer",
    "Riverpod Enthusiast",
    "Cross-Platform Builder",
  ],
  summary:
    "Software Engineer with 4+ years of experience in building scalable, high-performance mobile and web applications. Specialized in Flutter architecture, state management (Bloc, Riverpod), and cross-platform deployments. Proven ability to design user-centric interfaces and implement complex business logic for industries such as healthcare, SaaS, finance, and entertainment. Experienced in CI/CD, testing, and full application lifecycle management.",
  aboutExtended:
    "I specialize in Flutter architecture, clean code, and shipping production-ready apps across healthcare, SaaS, finance, and entertainment. From state management to CI/CD pipelines, I focus on building products that are fast, maintainable, and delightful.",
  location: "Gandhinagar, Gujarat, India",
  email: "utkarshk1871@gmail.com",
  phone: "+91 9925788460",
};

export const stats: Stat[] = [
  { value: "4+", label: "Years Experience" },
  { value: "8+", label: "Apps Delivered" },
  { value: "6", label: "Industries Served" },
  { value: "2", label: "Platforms (iOS & Android)" },
];
