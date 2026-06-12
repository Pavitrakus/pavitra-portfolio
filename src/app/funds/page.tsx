"use client";

import Link from "next/link";
import Script from "next/script";

interface FundSource {
  id: string;
  name: string;
  category: string;
  amountUSD: string;
  amountINR: string;
  details: string;
  status: string;
}

export default function FundsPage() {
  const fundsList: FundSource[] = [
    {
      id: "yc",
      name: "Y Combinator",
      category: "Cohort Grant",
      amountUSD: "$25,000",
      amountINR: "₹20,87,500",
      details: "Seed funding received through selection into the Y Combinator Startup School India cohort.",
      status: "Selected",
    },
    {
      id: "redacted",
      name: "Redacted (Revealing soon)",
      category: "Pre-seed Angel",
      amountUSD: "$9,750",
      amountINR: "₹8,14,125",
      details: "Private pre-seed backing from prominent angel investors and operators in the AI ecosystem.",
      status: "Committed (NDA)",
    },
    {
      id: "u2u",
      name: "Uniform2Unicorn",
      category: "Seed Funding",
      amountUSD: "$15,569",
      amountINR: "₹13,00,000",
      details: "Seed grant awarded for securing the #1 position as India's Top Young Founder of the Year '26.",
      status: "Awarded",
    },
    {
      id: "sparkx",
      name: "SparkX IIT Bombay",
      category: "Pitch Prize",
      amountUSD: "$600",
      amountINR: "₹50,000",
      details: "Startup pitch competition prize money won under LumenSeed at IIT Bombay.",
      status: "Awarded",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Funding Ledger - Pavitra Kushwaha",
    "description": "Public ledger of funding, grants, and investments received. Cumulative funds: $43,015 USD.",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Funding Sources",
      "itemListElement": fundsList.map((fund, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "FinancialProduct",
          "name": fund.name,
          "description": fund.details,
          "category": fund.category,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": fund.amountUSD.replace(/[^0-9.]/g, '')
          }
        }
      }))
    }
  };

  return (
    <main className="min-h-screen bg-white px-5 py-16 text-gray-800">
      <Script
        id="funds-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-5xl mx-auto">
        
        {/* Back link */}
        <Link href="/" className="font-mono text-sm text-gray-400 hover:text-gray-800 transition-colors mb-12 inline-block">
          ← pavitra
        </Link>

        <h1 className="text-5xl font-bold font-serif text-gray-900 mt-8 mb-16">Funding Ledger</h1>

        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-start">
          
          {/* Left: Summary and conversion */}
          <div className="flex-1 flex flex-col gap-12">
            
            {/* CUMULATIVE FUNDS */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">CUMULATIVE FUNDS</h3>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
                <data value="43015">$43,015 USD</data>
              </div>
              <div className="font-mono text-lg text-gray-500 mt-2">
                <data value="3591750">₹35,91,750 INR</data>
              </div>
            </div>

            {/* TOTAL POOL */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">TOTAL POOL</h3>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
                <data value="50919">$50,919 USD</data>
              </div>
              <div className="font-mono text-lg text-gray-500 mt-2">
                <data value="4251625">₹42,51,625 INR</data>
              </div>
              <p className="font-mono text-xs text-gray-400 mt-4 leading-relaxed max-w-sm">
                * Includes incubator backing, pre-seed angel commitments, competitive grants, and hackathon prizes.
              </p>
            </div>

            {/* CONVERSION RATE */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">CONVERSION</h3>
              <div className="font-mono text-sm text-gray-600">
                1 USD = 83.5 INR (Fixed reporting rate)
              </div>
            </div>

          </div>

          {/* Right: Breakdown items */}
          <div className="flex-1 w-full">
            <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">LEDGER BREAKDOWN</h3>
            
            <ul className="flex flex-col gap-8 font-mono text-sm">
              {fundsList.map((fund) => (
                <li key={fund.id} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                  <div className="flex justify-between items-baseline gap-4 mb-2">
                    <span className="font-serif font-bold text-lg text-gray-900 normal-case">{fund.name}</span>
                    <span className="text-gray-800 shrink-0 font-medium">
                      <data value={fund.amountUSD.replace(/[^0-9.]/g, '')}>{fund.amountUSD}</data> / <data value={fund.amountINR.replace(/[^0-9.]/g, '')}>{fund.amountINR}</data>
                    </span>
                  </div>
                  
                  <div className="flex gap-2 mb-3 text-xs text-gray-400">
                    <span>&bull; {fund.category}</span>
                    <span>&bull; {fund.status}</span>
                  </div>

                  <p className="text-gray-600 font-sans text-sm leading-relaxed normal-case">
                    {fund.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
