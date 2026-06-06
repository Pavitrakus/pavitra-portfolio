"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FundsRaised() {
  return (
    <>
      <section id="funds" className="px-5 py-16 max-w-6xl mx-auto bg-white relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-gray-900 text-3xl font-bold font-serif mb-2">Capital Raised</h2>
          <div className="w-16 h-0.5 bg-gray-200 mb-8"></div>

          <Link href="/funds" className="block group">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-stone-50/60 border border-gray-100 rounded-2xl p-6 sm:p-10 transition-all duration-300 group-hover:border-gray-200 group-hover:bg-stone-50 cursor-pointer"
            >
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">Total Funding &amp; Grants</span>

              {/* Numbers — stacked on mobile, inline on sm+ */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="text-4xl font-bold font-serif text-gray-900 tracking-tight sm:text-6xl">
                  $43,015
                </span>
                <span className="hidden sm:inline text-gray-300 font-serif text-4xl">/</span>
                <span className="text-2xl font-semibold font-sans text-gray-400 tracking-tight sm:text-4xl">
                  &#x20B9;35.9 Lakhs
                </span>
              </div>

              <p className="font-mono text-sm text-gray-400 mt-4 leading-relaxed">
                across incubators, grants &amp; angel rounds.
              </p>

              <div className="mt-6 flex items-center gap-2 text-gray-400 font-mono text-sm group-hover:text-gray-700 group-hover:gap-3 transition-all duration-300">
                <span>view ledger</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* SVG Transition to next section */}
      <svg className="fill-white h-6 sm:h-12 max-w-6xl mx-auto relative z-10" width="100%" height="100" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.999781V0.510196H1152V47.9998C1152 54.8232 1146.32 60.2734 1139.5 59.9894L11.5004 12.9894C5.07291 12.7216 0 7.43288 0 0.999781Z"></path>
      </svg>
      <svg className="fill-white -mt-px h-6 sm:h-12 max-w-6xl mx-auto relative z-20" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 1152 59" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1152 59.5105V60.0001H0V12.5105C0 5.68705 5.68201 0.236812 12.4995 0.520875L1140.5 47.5209C1146.93 47.7887 1152 53.0774 1152 59.5105Z"></path>
      </svg>
    </>
  );
}
