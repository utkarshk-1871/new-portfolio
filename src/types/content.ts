export interface Profile {
  name: string;
  title: string;
  tagline: string;
  roles: string[];
  summary: string;
  aboutExtended: string;
  aboutHeadline: string;
  location: string;
  email: string;
  phone: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

export type SkillGradient =
  "blue-cyan" | "violet-purple" | "emerald-teal" | "orange-amber" | "pink-rose";

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
  gradient: SkillGradient;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  cgpa?: string;
}

export interface AchievementStat {
  title: string;
  subtitle: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface HeroBadge {
  label: string;
  icon: "terminal" | "cpu" | "cloud" | "sparkles" | "smartphone" | "rocket";
}

export interface FocusTag {
  label: string;
}
