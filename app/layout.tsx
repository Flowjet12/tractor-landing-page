import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rightsizeland.com"),

  title:
    "Tractor Services & Property Maintenance in Boerne, TX | Right Size Land & Tractor",

  description:
    "Boerne-based tractor services and property maintenance for acreage, hunting land, vacant lots, and commercial properties. Brush mowing, driveway repair, grading, fire mitigation, and recurring land stewardship across the Texas Hill Country.",

  keywords: [
    "tractor services Boerne TX",
    "brush hogging Boerne TX",
    "acreage mowing Boerne",
    "property maintenance Boerne TX",
    "driveway grading Boerne",
    "hunting property maintenance Texas",
    "vacant lot mowing Boerne",
    "land clearing Boerne TX",
    "fire mitigation Boerne TX",
  ],

  openGraph: {
    title:
      "Right Size Land & Tractor | Boerne Property Maintenance & Tractor Services",
    description:
      "Acreage maintenance, brush mowing, driveway repair, grading, hunting-property care, and recurring land stewardship in Boerne and the Texas Hill Country.",
    type: "website",
    locale: "en_US",
    url: "https://rightsizeland.com/",
    siteName: "Right Size Land & Tractor",
  },

  alternates: {
    canonical: "https://rightsizeland.com/",
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
      <body>
        {children}
        <GoogleAnalytics gaId="G-4F2B5FBEBZ" />
      </body>
    </html>
  );
}
