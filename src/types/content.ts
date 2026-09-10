export interface Profile {
  name: string;
  title: string;
  tagline: string;
  roles: string[];
  summary: string;
  aboutExtended: string;
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
}

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
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

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface AchievementStat {
  title: string;
  subtitle: string;
}

export interface NavItem {
  id: string;
  label: string;
}
