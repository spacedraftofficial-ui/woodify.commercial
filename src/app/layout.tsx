import React from "react";

// Polyfill ReactCurrentOwner for libraries using older react-reconciler (like @react-three/fiber)
const internals = (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
if (internals && !internals.ReactCurrentOwner) {
  internals.ReactCurrentOwner = { current: null };
}

import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodifyindia.com"),
  title: {
    default: "Woodify Commercial | Engineered Office Furniture Systems",
    template: "%s | Woodify India",
  },
  description:
    "Precision-manufactured modular office furniture for enterprises that demand scale, sustainability, and uncompromising quality. Workstations, executive cabins, meeting tables, and more.",
  keywords: [
    "office furniture manufacturer India",
    "engineered office furniture",
    "modular workstations",
    "executive office furniture",
    "conference tables India",
    "corporate furniture manufacturer",
    "Woodify India",
    "sustainable office furniture",
    "furniture manufacturer Tamil Nadu",
  ],
  authors: [{ name: "Woodify Commercial" }],
  creator: "Woodify Commercial",
  publisher: "Woodify Commercial",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://woodifyindia.com",
    siteName: "Woodify Commercial",
    title: "Woodify Commercial | Engineered Office Furniture Systems",
    description:
      "Precision-manufactured modular office furniture for enterprises that demand scale, sustainability, and uncompromising quality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Woodify India — Premium Engineered Office Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodify Commercial | Engineered Office Furniture Systems",
    description:
      "Precision-manufactured modular office furniture for enterprises that demand scale, sustainability, and uncompromising quality.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://woodifyindia.com",
  },
  icons: {
    icon: [
      { url: "/logo-w.png", type: "image/png" },
    ],
    apple: "/logo-w.png",
    shortcut: "/logo-w.png",
  },
  themeColor: "#C41E14",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://woodifyindia.com/#organization",
      name: "Woodify Commercial",
      url: "https://woodifyindia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://woodifyindia.com/logo.png",
      },
      description:
        "Manufacturer of precision-engineered modular office furniture systems for corporate enterprises.",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tiruvallur",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/woodifyindia",
        "https://www.instagram.com/woodifyindia",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://woodifyindia.com/#website",
      url: "https://woodifyindia.com",
      name: "Woodify Commercial",
      publisher: { "@id": "https://woodifyindia.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/logo-w.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-w.png" />
        <meta name="theme-color" content="#C41E14" />
      </head>
      <body className="font-body bg-off-white text-text-dark antialiased">
        <SmoothScrollProvider>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgressBar />
          {children}
          <FloatingWhatsApp phone="+919999999999" />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
