import type { Metadata } from "next";
import { Inter, Fraunces, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pavitrakushwaha.dev"),
  title: "Pavitra Kushwaha | Founder • Builder • Researcher",
  description: "Personal website of Pavitra Kushwaha, building Synthetic Intelligence and ORCA.",
  keywords: ["Pavitra Kushwaha", "AI Researcher", "Founder", "ORCA", "Synthetic Intelligence", "D2AR", "IIT Kanpur", "LumenSeed"],
  openGraph: {
    title: "Pavitra Kushwaha | Founder • Builder • Researcher",
    description: "Personal website of Pavitra Kushwaha, building Synthetic Intelligence and ORCA.",
    url: "https://pavitrakushwaha.dev",
    siteName: "Pavitra Kushwaha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavitra Kushwaha | Founder • Builder • Researcher",
    description: "Personal website of Pavitra Kushwaha, building Synthetic Intelligence and ORCA.",
    creator: "@Pavitra_Kushwah",
    site: "@Pavitra_Kushwah",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pavitra Kushwaha",
  "url": "https://pavitrakushwaha.dev",
  "jobTitle": "Founder & AI Researcher",
  "sameAs": [
    "https://github.com/Pavitrakus",
    "https://www.linkedin.com/in/pavitra-kushwaha/",
    "https://x.com/Pavitra_Kushwah",
    "https://www.instagram.com/pavitrakuswaha/"
  ],
  "knowsAbout": ["Artificial Intelligence", "Synthetic Intelligence", "Software Engineering", "Agentic AI"],
  "description": "Personal website of Pavitra Kushwaha, building Synthetic Intelligence and ORCA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${playfair.variable} font-sans antialiased bg-stone-100 text-gray-800 min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
