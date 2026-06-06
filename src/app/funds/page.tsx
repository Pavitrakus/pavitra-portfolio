"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Coins, 
  Lock, 
  Award, 
  Sparkles, 
  TrendingUp, 
  Info, 
  DollarSign, 
  Wallet 
} from "lucide-react";

type CurrencyMode = "both" | "usd" | "inr";

interface FundSource {
  id: string;
  name: string;
  category: "incubator" | "angel" | "grant" | "prize";
  amountUSD: number;
  amountINR: number;
  amountRawDisplay: {
    usd: string;
    inr: string;
  };
  details: string;
  status: string;
  icon: React.ReactNode;
}

export default function FundsPage() {
  const [currencyMode, setCurrencyMode] = useState<CurrencyMode>("both");

  // Exchange rate used: 1 USD = 83.5 INR
  const exchangeRate = 83.5;

  const fundsList: FundSource[] = [
    {
      id: "yc",
      name: "Y Combinator",
      category: "incubator",
      amountUSD: 25000,
      amountINR: 2087500,
      amountRawDisplay: {
        usd: "$25,000",
        inr: "₹20,87,500"
      },
      details: "Seed funding received through selection into the Y Combinator Startup School India cohort.",
      status: "Committed",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#FF6600]/10 text-[#FF6600] flex items-center justify-center font-bold text-lg font-sans">
          Y
        </div>
      ),
    },
    {
      id: "redacted",
      name: "Redacted — Revealing Soon",
      category: "angel",
      amountUSD: 9750,
      amountINR: 814125,
      amountRawDisplay: {
        usd: "$9,750",
        inr: "₹8,14,125"
      },
      details: "Private pre-seed backing from prominent angel investors and operators in the AI ecosystem.",
      status: "Committed (NDA)",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center">
          <Lock className="w-5 h-5" />
        </div>
      ),
    },
    {
      id: "u2u",
      name: "Uniform2Unicorn Seed Funding",
      category: "grant",
      amountUSD: 15569, // approx from 13L
      amountINR: 1300000,
      amountRawDisplay: {
        usd: "$15,569",
        inr: "₹13,00,000"
      },
      details: "Seed grant awarded for securing the #1 position as India's Top Young Founder of the Year '26.",
      status: "Awarded",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center text-lg leading-none">
          🦄
        </div>
      ),
    },
    {
      id: "sparkx",
      name: "SparkX IIT Bombay",
      category: "prize",
      amountUSD: 600, // approx from 50k
      amountINR: 50000,
      amountRawDisplay: {
        usd: "$600",
        inr: "₹50,000"
      },
      details: "Startup pitch competition prize money won under LumenSeed at IIT Bombay.",
      status: "Awarded",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
          <Sparkles className="w-5 h-5" />
        </div>
      ),
    },
  ];

  // Calculated totals
  const totalSumUSD = fundsList.reduce((sum, item) => sum + item.amountUSD, 0); // $50,919
  const totalSumINR = fundsList.reduce((sum, item) => sum + item.amountINR, 0); // ₹42,51,625

  // Display totals based on user's target or actual sum
  // Target: $43,015 / ₹35.9 Lakhs
  const displayedTotalUSD = 43015;
  const displayedTotalINR = 3591750; // approx 35.9L

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-16 sm:px-6 md:py-24 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden p-6 sm:p-12">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-gray-900 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>back to home</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-emerald-600 font-mono text-xs uppercase tracking-widest font-semibold mb-2">
            <Coins className="w-4 h-4" />
            <span>financial transparency ledger</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 leading-tight">
            Funding Ledger
          </h1>
          <p className="text-gray-500 mt-3 text-lg font-sans max-w-2xl leading-relaxed">
            A comprehensive, transparent breakdown of seed capital, venture backing, and grants raised to support my research and product development.
          </p>
        </header>

        {/* Summary Dashboard Card */}
        <div className="bg-stone-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm relative">
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-gray-400 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span>1 USD = ₹83.5</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/60">
            {/* Displayed Target Total */}
            <div className="pb-6 sm:pb-0">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-1">Target Funding Highlight</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
                  $43,015
                </span>
                <span className="text-gray-400 font-mono text-sm">/</span>
                <span className="text-xl sm:text-2xl font-semibold font-mono text-emerald-600">
                  ₹35.9L
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-mono flex items-center gap-1">
                <Info className="w-3 h-3 text-blue-500 shrink-0" />
                Primary round target committed.
              </p>
            </div>

            {/* Total Cumulative Pool */}
            <div className="pt-6 sm:pt-0 sm:pl-8">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-1">Total Pool (Inc. Grants)</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 text-emerald-700">
                  ${totalSumUSD.toLocaleString()}
                </span>
                <span className="text-gray-400 font-mono text-sm">/</span>
                <span className="text-xl sm:text-2xl font-semibold font-mono text-emerald-600">
                  ₹42.5L
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-mono flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-500 shrink-0" />
                Includes hackathon prize money & winner grants.
              </p>
            </div>
          </div>
        </div>

        {/* Currency Selector Controls */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <h3 className="font-serif font-bold text-xl text-gray-800">Ledger Items</h3>
          
          <div className="flex bg-stone-100 p-1 rounded-lg border border-gray-200 text-xs font-mono">
            <button
              onClick={() => setCurrencyMode("both")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                currencyMode === "both" 
                  ? "bg-white text-gray-900 shadow-sm font-semibold" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Both
            </button>
            <button
              onClick={() => setCurrencyMode("usd")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                currencyMode === "usd" 
                  ? "bg-white text-gray-900 shadow-sm font-semibold" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrencyMode("inr")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                currencyMode === "inr" 
                  ? "bg-white text-gray-900 shadow-sm font-semibold" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              INR
            </button>
          </div>
        </div>

        {/* List of Funding Sources */}
        <div className="space-y-6">
          {fundsList.map((fund, index) => (
            <motion.div
              key={fund.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors bg-white hover:bg-stone-50/20 group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  {fund.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="font-serif font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {fund.name}
                    </h4>

                    {/* Dynamic currency display with animation */}
                    <div className="font-mono text-sm shrink-0">
                      <AnimatePresence mode="wait">
                        {currencyMode === "both" && (
                          <motion.div
                            initial={{ opacity: 0, x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -5 }}
                            className="flex items-center gap-1.5 font-bold text-gray-900"
                          >
                            <span>{fund.amountRawDisplay.usd}</span>
                            <span className="text-gray-300 font-normal">/</span>
                            <span className="text-emerald-600">{fund.amountRawDisplay.inr}</span>
                          </motion.div>
                        )}
                        {currencyMode === "usd" && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="font-bold text-gray-900"
                          >
                            {fund.amountRawDisplay.usd}
                          </motion.div>
                        )}
                        {currencyMode === "inr" && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="font-bold text-emerald-600"
                          >
                            {fund.amountRawDisplay.inr}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase bg-stone-100 text-gray-500 px-2 py-0.5 rounded">
                      {fund.category}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                      fund.status.includes("Committed") 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                        : "bg-blue-50 text-blue-600 border border-blue-100"
                    }`}>
                      {fund.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {fund.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Allocation Graph */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="font-serif font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
            <Wallet className="w-4 h-4 text-emerald-600" />
            <span>Fund Allocation Distribution</span>
          </h3>

          <div className="w-full bg-stone-100 h-6 rounded-full overflow-hidden flex shadow-inner">
            {fundsList.map((fund, idx) => {
              const percentage = (fund.amountUSD / totalSumUSD) * 100;
              const colors = [
                "bg-[#FF6600]", // YC orange
                "bg-zinc-800",   // Redacted dark gray
                "bg-yellow-500", // U2U gold
                "bg-purple-600"  // SparkX purple
              ];
              return (
                <div 
                  key={fund.id}
                  style={{ width: `${percentage}%` }}
                  className={`${colors[idx % colors.length]} h-full transition-all duration-500 relative group`}
                  title={`${fund.name}: ${percentage.toFixed(1)}%`}
                />
              );
            })}
          </div>

          {/* Allocation Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xs font-mono">
            {fundsList.map((fund, idx) => {
              const percentage = (fund.amountUSD / totalSumUSD) * 100;
              const dotColors = [
                "bg-[#FF6600]",
                "bg-zinc-800",
                "bg-yellow-500",
                "bg-purple-600"
              ];
              return (
                <div key={fund.id} className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${dotColors[idx % dotColors.length]}`} />
                  <div className="text-gray-500 min-w-0">
                    <p className="font-semibold text-gray-700 truncate">{fund.name.split(" — ")[0]}</p>
                    <p className="text-[10px]">{percentage.toFixed(1)}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
