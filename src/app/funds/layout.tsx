import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funding & Net Worth | Pavitra Kushwaha",
  description: "Public ledger of funding, grants, and investments received by Pavitra Kushwaha. Total cumulative funds: $43,015 USD (₹35.9 Lakhs INR).",
  openGraph: {
    title: "Funding & Net Worth | Pavitra Kushwaha",
    description: "Public ledger of funding, grants, and investments received by Pavitra Kushwaha. Total cumulative funds: $43,015 USD (₹35.9 Lakhs INR).",
    url: "https://pavitrakushwaha.dev/funds",
    siteName: "Pavitra Kushwaha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funding & Net Worth | Pavitra Kushwaha",
    description: "Public ledger of funding, grants, and investments received by Pavitra Kushwaha. Total cumulative funds: $43,015 USD (₹35.9 Lakhs INR).",
  },
};

export default function FundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
