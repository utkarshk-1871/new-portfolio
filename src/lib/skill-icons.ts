import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  Code2,
  Globe,
  Layers,
  LayoutGrid,
  LayoutTemplate,
  Package,
  Puzzle,
  RefreshCw,
  TestTube,
  Zap,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siAndroidstudio,
  siDart,
  siFirebase,
  siFlutter,
  siGit,
  siGithubactions,
  siGraphql,
  siJetpackcompose,
  siKotlin,
  siNumpy,
  siPandas,
  siPython,
  siRevenuecat,
  siStrapi,
  siStripe,
} from "simple-icons";

export type SkillIconDefinition =
  { kind: "simple"; icon: SimpleIcon } | { kind: "lucide"; icon: LucideIcon };

export const skillIconMap = {
  Dart: { kind: "simple", icon: siDart },
  Kotlin: { kind: "simple", icon: siKotlin },
  Python: { kind: "simple", icon: siPython },
  Flutter: { kind: "simple", icon: siFlutter },
  "Jetpack Compose": { kind: "simple", icon: siJetpackcompose },
  NumPy: { kind: "simple", icon: siNumpy },
  Pandas: { kind: "simple", icon: siPandas },
  Riverpod: { kind: "lucide", icon: Layers },
  Provider: { kind: "lucide", icon: Package },
  Bloc: { kind: "lucide", icon: Blocks },
  GetX: { kind: "lucide", icon: Zap },
  "Android Studio": { kind: "simple", icon: siAndroidstudio },
  "VS Code": { kind: "lucide", icon: Code2 },
  Git: { kind: "simple", icon: siGit },
  "GitHub Actions": { kind: "simple", icon: siGithubactions },
  Firebase: { kind: "simple", icon: siFirebase },
  Strapi: { kind: "simple", icon: siStrapi },
  Stripe: { kind: "simple", icon: siStripe },
  RevenueCat: { kind: "simple", icon: siRevenuecat },
  "REST APIs": { kind: "lucide", icon: Globe },
  GraphQL: { kind: "simple", icon: siGraphql },
  "CI/CD": { kind: "lucide", icon: RefreshCw },
  MVVM: { kind: "lucide", icon: LayoutGrid },
  MVC: { kind: "lucide", icon: LayoutTemplate },
  "Automation Testing": { kind: "lucide", icon: Bot },
  "Unit Testing": { kind: "lucide", icon: TestTube },
  "Integration Testing": { kind: "lucide", icon: Puzzle },
} as const satisfies Record<string, SkillIconDefinition>;

export function getSkillIcon(name: string): SkillIconDefinition | undefined {
  return skillIconMap[name as keyof typeof skillIconMap];
}
