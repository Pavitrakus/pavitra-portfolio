"use client";

import { useState } from 'react';

export function About() {
  const [showPaxusDesc, setShowPaxusDesc] = useState(false);
  return (
    <section id="about" className="px-5 pt-16 pb-4 sm:pt-16 sm:pb-4 max-w-6xl mx-auto bg-[#fdfbf7] sm:bg-white relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold font-serif text-gray-900">Hey there!</h1>

        <div className="mt-5 text-xl text-gray-800 space-y-4">
          <p className="leading-relaxed">
            I&apos;m <span className="font-serif font-semibold text-gray-900">Pavitra Kushwaha</span>, a builder, <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline transition-all hover:-translate-y-0.5 text-gray-800"><span className="font-normal">wannabe</span><img src="/block-s-right.avif" alt="Stanford S Logo" className="h-7 w-auto inline-block align-middle" /><span className="text-[#8C1515] font-serif font-bold">Stanford</span><span className="font-normal">guy</span></a>, and currently at <a href="https://dpskalyanpur.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline transition-all hover:-translate-y-0.5 text-gray-800"><img src="/dps-logo.webp" alt="DPS Logo" className="h-5 w-auto inline-block align-middle rounded-sm" /><span className="text-green-600 font-serif font-bold">DPS</span></a>.
          </p>

          <p className="leading-relaxed">
            I&apos;m obsessed with understanding intelligence,how to build it, accelerate it, and eventually, define it.
            <span className="block mt-4 p-3 bg-[#fcf9f2] rounded-lg font-playfair italic text-gray-800 shadow-sm border border-[#f5eedc] sm:inline sm:mt-0 sm:p-0 sm:bg-transparent sm:border-transparent sm:font-sans sm:not-italic sm:shadow-none sm:rounded-none sm:text-inherit">
              Founder of <button onClick={() => setShowPaxusDesc(!showPaxusDesc)} className="font-serif font-bold text-black hover:underline cursor-pointer focus:outline-none align-baseline not-italic">PaXus</button>
              {showPaxusDesc && (
                <span className="text-gray-600 text-[0.9em] transition-all duration-300 not-italic block sm:inline">
                  {" "}(a multi-venture technology company driving innovation across AI, software development, digital commerce, and intelligent systems)
                </span>
              )}
              {" "}and <a href="https://byteforge.space" target="_blank" rel="noopener noreferrer" className="font-playfair font-semibold text-black hover:underline not-italic">byteforge</a><span className="not-italic text-[#39FF14] font-black font-serif select-none">.</span> My ultimate goal is to build something that dents <a href="https://www.google.com/search?q=Silicon+Valley" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline transition-colors not-italic">Silicon Valley</a>.
            </span>
          </p>

          <p className="leading-relaxed">
            For fun, I break APIs, win hackathons, write about 2045, do researches on the <a href="https://www.simulation-argument.com/simulation.pdf" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#B07D54] hover:text-[#96633D] transition-colors">Simulation Hypothesis</a>, and go on long bike rides.
          </p>

          <p className="text-sm mt-[-8px] text-gray-500">
            Research reference: <a href="https://www.simulation-argument.com/simulation.pdf" target="_blank" rel="noopener noreferrer" className="text-[#B07D54] hover:underline font-semibold">Nick Bostrom&apos;s Simulation Argument paper</a>
          </p>

          <div className="mt-8 flex flex-col gap-4 border-l-2 border-gray-200 pl-4 ml-1">
            <div className="relative">
              <div className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Now</span>
              <div>Building ORCA — agentic AI for Android via WhatsApp/Telegram</div>
              <div className="mt-1">Researching MPC/Cryptography with <a href="https://scholar.google.com/citations?user=jeOME6wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Prof. Adithya Vadapalli</a> @ IIT Kanpur</div>
            </div>

            <div className="relative">
              <div className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">DID</span>
              <div><span className="font-playfair font-semibold text-black">byteforge</span><span className="text-[#39FF14] font-black font-serif select-none">.</span> &middot; PaXus &middot; Execron &middot; ORBIS</div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
