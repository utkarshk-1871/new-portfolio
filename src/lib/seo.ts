import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const description =
  "Software Engineer with 4+ years of experience building scalable, high-performance mobile and web applications. Specialized in Flutter architecture, state management, and cross-platform deployments.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Flutter",
    "Mobile App Developer",
    "Dart",
    profile.name,
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description,
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
    images: ["/images/og-preview.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/Icon-192.png",
  },
};

export function getPersonJsonLd(): string {
  const sameAs = socialLinks
    .filter((link) => link.external)
    .map((link) => link.href);

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs,
    url: SITE_URL,
  });
}
