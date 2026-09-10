import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { getPersonJsonLd, siteMetadata } from "@/lib/seo";
import { getThemeInitScript } from "@/lib/theme-script";
import { ThemeRegistry } from "@/theme/ThemeContext";

import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {getThemeInitScript()}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getPersonJsonLd() }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeRegistry>
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
