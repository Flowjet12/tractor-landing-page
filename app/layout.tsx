import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rightsizeland.com"),
  title:
    "Property Maintenance & Tractor Services | Boerne, TX | Right Size Land & Tractor",
  description:
    "Owner-operated property maintenance, pasture management, hunting property preparation, vacant lot care, driveway repair, and acreage stewardship throughout Boerne and the Texas Hill Country.",
  keywords: [
    "brush hogging",
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
    url: "https://rightsizeland.com",
    siteName: "Right Size Land & Tractor",
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
      <body>
        {children}
        <GoogleAnalytics gaId="G-4F2B5FBEBZ" />
      </body>
    </html>
  );
}
