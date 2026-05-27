"use client";

import { useState } from 'react';

export function Highlights() {
  const [showAIBounty, setShowAIBounty] = useState(false);
  const [showPriceBounty, setShowPriceBounty] = useState(false);

  const highlights = [
    {
      icon: <div className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center shrink-0"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/></svg></div>,
      text: (
        <span>
          Research Fellow at IIT Kanpur, working under{" "}
          <a
            href="https://scholar.google.com/citations?user=jeOME6wAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Prof. Adithya Vadapalli
          </a>{" "}
          (CSE Dept.).
        </span>
      ),
    },
    {
      icon: <div className="w-6 h-6 rounded bg-[#FF6600] text-white flex items-center justify-center font-bold text-[13px] leading-none shrink-0 font-sans">Y</div>,
      text: (
        <span>
          Got selected for{" "}
          <a
            href="https://www.ycombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6600] font-bold hover:underline"
          >
            Y Combinator
          </a>{" "}
          Startup School India (6% acceptance rate).
        </span>
      ),
    },
    {
      icon: <img src="/vibecon-logo.png" alt="VibeCon Logo" className="h-6 w-auto object-contain rounded-sm" />,
      text: (
        <span>
          Ranked in the top 20 builders across India out of 20,000+ applicants at{" "}
          <a
            href="https://vibecon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 font-bold hover:underline"
          >
            VIBECON
          </a>.
        </span>
      ),
    },
    {
      icon: <div className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center shrink-0"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></div>,
      text: (
        <span>
          Interviewed{" "}
          <a
            href="https://x.com/mukundjha"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:underline"
          >
            Mukund Jha
          </a>{" "}
          (Co-founder,{" "}
          <a
            href="https://emergent.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 font-bold hover:underline"
          >
            Emergent Labs
          </a>
          ) and{" "}
          <a
            href="https://www.ycombinator.com/people/jared-friedman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:underline"
          >
            Jared Friedman
          </a>{" "}
          (Partner, Y Combinator) @ VIBECON.
        </span>
      ),
    },
    {
      icon: <div className="w-6 h-6 rounded bg-red-100 text-red-700 flex items-center justify-center shrink-0"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg></div>,
      text: (
        <span>
          Independently identified a significant security vulnerability in a major AI platform (happy to discuss privately){" "}
          <button
            onClick={() => setShowAIBounty(!showAIBounty)}
            className="text-green-600 hover:text-green-700 font-bold focus:outline-none cursor-pointer align-baseline text-lg"
            title="Click to toggle bounty details"
          >
            $
          </button>
          {showAIBounty && (
            <span className="text-gray-500 font-normal ml-1.5">
              (got 5-figure bounty with it)
            </span>
          )}
        </span>
      ),
    },
    {
      icon: <div className="w-6 h-6 rounded bg-green-100 text-green-700 flex items-center justify-center shrink-0"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg></div>,
      text: (
        <span>
          Discovered a pricing logic vulnerability in a major quick-commerce platform&apos;s API{" "}
          <button
            onClick={() => setShowPriceBounty(!showPriceBounty)}
            className="text-green-600 hover:text-green-700 font-bold focus:outline-none cursor-pointer align-baseline text-lg"
            title="Click to toggle bounty details"
          >
            $
          </button>
          {showPriceBounty && (
            <span className="text-gray-500 font-normal ml-1.5">
              (got 6-figure bug bounty with it)
            </span>
          )}
        </span>
      ),
    },
    {
      icon: <div className="w-6 h-6 rounded bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg></div>,
      text: <span>Won 15+ hackathons in the last 2 months.</span>,
    },
    {
      icon: <div className="w-6 h-6 rounded bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 font-playfair font-bold text-[10px] leading-none italic">bf</div>,
      text: (
        <span>
          Founded{" "}
          <a
            href="https://byteforge.space"
            target="_blank"
            rel="noopener noreferrer"
            className="font-playfair font-semibold text-black hover:underline"
          >
            byteforge
          </a>
          <span className="text-[#39FF14] font-black font-serif select-none">.</span>{" "}
          One of North India&apos;s largest tech communities (4,500+ members).
        </span>
      ),
    },
    {
      icon: <div className="w-6 h-6 rounded bg-rose-100 text-rose-700 flex items-center justify-center shrink-0"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"/></svg></div>,
      text: <span>Former Content Analyst at KuKu TV.</span>,
    },
    {
      icon: <div className="w-6 h-6 rounded bg-sky-100 text-sky-700 flex items-center justify-center shrink-0"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div>,
      text: <span>Published a research paper on Synthetic Intelligence at 16.</span>,
    },
  ];

  return (
    <>
      <section id="highlights" className="px-5 pt-2 pb-8 max-w-6xl mx-auto bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-800 mb-2">Here are the coolest things I&apos;ve done:</p>
          <div className="w-16 h-0.5 bg-gray-200 mb-6"></div>
          <ul className="gap-3 flex flex-col text-lg text-gray-800">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 w-6 h-6 flex-shrink-0 flex items-center justify-center text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SVG Transition to next section */}
      <svg className="fill-white h-10 sm:h-12 max-w-6xl mx-auto relative z-10" width="100%" height="100" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.999781V0.510196H1152V47.9998C1152 54.8232 1146.32 60.2734 1139.5 59.9894L11.5004 12.9894C5.07291 12.7216 0 7.43288 0 0.999781Z"></path>
      </svg>
      <svg className="fill-white -mt-px h-10 sm:h-12 max-w-6xl mx-auto relative z-20" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 1152 59" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1152 59.5105V60.0001H0V12.5105C0 5.68705 5.68201 0.236812 12.4995 0.520875L1140.5 47.5209C1146.93 47.7887 1152 53.0774 1152 59.5105Z"></path>
      </svg>
    </>
  );
}
