"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <>
      <section className="relative px-5 pt-32 pb-24 text-white max-w-6xl mx-auto -z-10 bg-slate-900 overflow-hidden">
        <div className="max-w-5xl mx-auto pt-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-5xl md:text-6xl font-serif"
          >
            Pavitra Kushwaha
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl leading-snug font-mono text-gray-300"
          >
            founder &bull; builder &bull; researcher @ IIT Kanpur
          </motion.h2>
        </div>
        
        {/* Dark Video / Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 -z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-80"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </section>

      {/* SVG Transition matching the HTML */}
      <svg className="fill-[var(--background)] transition-colors duration-300 -mt-6 h-6 sm:-mt-12 sm:h-12 max-w-6xl mx-auto" width="100%" height="59" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 47.0001V59.0002H11.9299C11.9701 59.0004 12.0104 59.0004 12.0506 59.0002H1152V0C1152 6.43303 1146.93 11.7322 1140.5 12L12.4995 58.9897C12.3493 58.9959 12.1997 58.9994 12.0506 59.0002H11.9299C5.36844 58.9676 0 53.6326 0 47.0001Z"></path>
      </svg>
      <svg className="fill-white h-6 sm:h-12 max-w-6xl mx-auto" width="100%" height="100" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 59.5105V60.0001H1152V12.5105C1152 5.68705 1146.32 0.236812 1139.5 0.520875L11.5004 47.5209C5.07291 47.7887 0 53.0774 0 59.5105Z"></path>
      </svg>
    </>
  );
}
