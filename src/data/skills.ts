import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    gradient: "blue-cyan",
    skills: [
      { name: "Dart", proficiency: 95 },
      { name: "Kotlin", proficiency: 82 },
      { name: "Python", proficiency: 78 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    gradient: "violet-purple",
    skills: [
      { name: "Flutter", proficiency: 95 },
      { name: "Jetpack Compose", proficiency: 80 },
      { name: "NumPy", proficiency: 72 },
      { name: "Pandas", proficiency: 70 },
    ],
  },
  {
    name: "State Management",
    gradient: "pink-rose",
    skills: [
      { name: "Riverpod", proficiency: 92 },
      { name: "Provider", proficiency: 88 },
      { name: "Bloc", proficiency: 85 },
      { name: "GetX", proficiency: 80 },
    ],
  },
  {
    name: "Tools",
    gradient: "orange-amber",
    skills: [
      { name: "Android Studio", proficiency: 90 },
      { name: "VS Code", proficiency: 92 },
      { name: "Git", proficiency: 90 },
      { name: "GitHub Actions", proficiency: 85 },
    ],
  },
  {
    name: "Backend & APIs",
    gradient: "emerald-teal",
    skills: [
      { name: "Firebase", proficiency: 88 },
      { name: "Strapi", proficiency: 80 },
      { name: "Stripe", proficiency: 82 },
      { name: "RevenueCat", proficiency: 78 },
      { name: "REST APIs", proficiency: 90 },
      { name: "GraphQL", proficiency: 75 },
    ],
  },
  {
    name: "DevOps & Architecture",
    gradient: "orange-amber",
    skills: [
      { name: "CI/CD", proficiency: 85 },
      { name: "MVVM", proficiency: 90 },
      { name: "MVC", proficiency: 88 },
    ],
  },
  {
    name: "Testing",
    gradient: "pink-rose",
    skills: [
      { name: "Automation Testing", proficiency: 82 },
      { name: "Unit Testing", proficiency: 88 },
      { name: "Integration Testing", proficiency: 85 },
    ],
  },
];

export const skillGradientClasses: Record<
  SkillCategory["gradient"],
  { bar: string; icon: string; glow: string }
> = {
  "blue-cyan": {
    bar: "from-blue-500 to-cyan-400",
    icon: "from-blue-500 to-cyan-400",
    glow: "from-blue-500 to-cyan-400",
  },
  "violet-purple": {
    bar: "from-violet-500 to-purple-400",
    icon: "from-violet-500 to-purple-400",
    glow: "from-violet-500 to-purple-400",
  },
  "emerald-teal": {
    bar: "from-emerald-500 to-teal-400",
    icon: "from-emerald-500 to-teal-400",
    glow: "from-emerald-500 to-teal-400",
  },
  "orange-amber": {
    bar: "from-orange-500 to-amber-400",
    icon: "from-orange-500 to-amber-400",
    glow: "from-orange-500 to-amber-400",
  },
  "pink-rose": {
    bar: "from-pink-500 to-rose-400",
    icon: "from-pink-500 to-rose-400",
    glow: "from-pink-500 to-rose-400",
  },
};
