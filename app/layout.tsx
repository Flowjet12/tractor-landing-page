import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lonestartractorworks.com"),
  title:
    "Texas Tractor Services | Brush Clearing, Driveway Grading & Dirt Work",
  description:
    "Owner-operated tractor services for Texas Hill Country and San Antonio area properties. Brush clearing, driveway grading, pad prep, dirt work, drainage improvement, and small acreage maintenance.",
  keywords: [
    "land clearing Texas",
    "driveway grading",
    "tractor services near me",
    "brush clearing",
    "dirt work",
    "Texas Hill Country tractor services",
    "San Antonio land clearing",
  ],
  openGraph: {
    title: "Owner-Operated Tractor Services in the Texas Hill Country",
    description:
      "Fast responses, honest pricing, and rugged tractor work for rural homes, ranches, and small acreage near San Antonio.",
    type: "website",
    locale: "en_US",
    url: "https://lonestartractorworks.com",
    siteName: "Lone Star Tractor Works",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
