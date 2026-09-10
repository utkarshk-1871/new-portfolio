import type { ProjectEntry } from "@/types/content";

export const projects: ProjectEntry[] = [
  {
    id: "charades-game",
    title: "Charades Game",
    description:
      "Sensor-driven game using Gyroscope and Accelerometer with monetization via Google Ads and in-app purchases.",
    technologies: [
      "Flutter",
      "Bloc",
      "Google Play Services",
      "Google Ads",
      "In-App Purchases",
    ],
  },
  {
    id: "health-monitoring",
    title: "Health Monitoring App",
    description:
      "Connected wearable devices for health tracking with native widgets and real-time data visualization.",
    technologies: [
      "Flutter",
      "Deep-Linking",
      "Analytics",
      "Crashlytics",
      "Method Channel",
    ],
  },
  {
    id: "hospitality-app",
    title: "White-Label Hospitality App",
    description:
      "Scalable white-label apps for hotels, bars, and golf clubs with automated CI/CD deployments.",
    technologies: ["Flutter", "Riverpod", "Firebase", "Google Maps", "CI/CD"],
  },
  {
    id: "music-insights",
    title: "Music Insights App for Artists",
    description:
      "Analytics dashboard for music artists with subscription model, push notifications, and location insights.",
    technologies: [
      "Flutter",
      "Riverpod",
      "Firebase Auth",
      "Push Notifications",
      "Google Maps",
    ],
  },
  {
    id: "medical-tanker",
    title: "Medical Tanker Management Software",
    description:
      "Custom responsive UI for tanker tracking and admin tools with custom data tables.",
    technologies: ["Flutter", "Bloc", "Responsive Web Design", "Custom Tables"],
  },
  {
    id: "saas-resource",
    title: "SaaS Resource Management",
    description:
      "Modules for resource planning, asset tracking, and geofencing with full analytics suite.",
    technologies: [
      "Flutter",
      "Google Maps",
      "Analytics",
      "Crashlytics",
      "Geofencing",
    ],
  },
];
