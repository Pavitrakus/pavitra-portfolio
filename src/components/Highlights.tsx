"use client";

import { useState } from 'react';

export function Highlights() {
  const [showAIBounty, setShowAIBounty] = useState(false);
  const [showPriceBounty, setShowPriceBounty] = useState(false);

  const highlights = [
    {
      icon: "🎓",
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
      icon: "🎙️",
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
      icon: "🔒",
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
      icon: "🐛",
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
      icon: "🏆",
      text: <span>Won 15+ hackathons in the last 2 months.</span>,
    },
    {
      icon: "🚀",
      text: (
        <span>
          Founded
          <a
            href="https://byteforge.space"
            target="_blank"
            rel="noopener noreferrer"
            className="font-playfair font-semibold text-black hover:underline"
          >
            byteforge
          </a>
          <span className="text-[#39FF14] font-black font-serif select-none">.</span>{" "}
          one of North India&apos;s largest tech communities (4,500+ members).
        </span>
      ),
    },
    {
      icon: "📺",
      text: <span>Former Content Analyst at KuKu TV.</span>,
    },
    {
      icon: "📄",
      text: <span>Published a research paper on Synthetic Intelligence at 16.</span>,
    },
  ];

  return (
    <>
      <section id="highlights" className="px-5 pt-2 pb-8 max-w-6xl mx-auto bg-[#fdfbf7] sm:bg-white">
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
      <svg className="fill-white h-6 sm:h-12 max-w-6xl mx-auto" width="100%" height="100" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.999781V0.510196H1152V47.9998C1152 54.8232 1146.32 60.2734 1139.5 59.9894L11.5004 12.9894C5.07291 12.7216 0 7.43288 0 0.999781Z"></path>
      </svg>
      <svg className="fill-white h-6 sm:h-12 max-w-6xl mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 1152 59" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1152 59.5105V60.0001H0V12.5105C0 5.68705 5.68201 0.236812 12.4995 0.520875L1140.5 47.5209C1146.93 47.7887 1152 53.0774 1152 59.5105Z"></path>
      </svg>
    </>
  );
}
