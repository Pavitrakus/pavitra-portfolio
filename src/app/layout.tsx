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
  title: "Pavitra Kushwaha | Founder • Builder • Researcher",
  description: "Personal website of Pavitra Kushwaha, building Synthetic Intelligence and ORCA.",
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
        {children}
      </body>
    </html>
  );
}
