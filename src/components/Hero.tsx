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

      {/* PERFECT TILTED CUTS */}
      {/* Mobile: Direct transition Dark -> White */}
      <svg className="block sm:hidden w-full h-12 max-w-6xl mx-auto" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#0f172a" points="0,0 100,0 0,100" />
        <polygon fill="#ffffff" points="0,100 100,0 100,100" />
      </svg>

      {/* Desktop: Dark Bottom Cap + Grey Gap + White Top Cap */}
      <div className="hidden sm:block">
        <svg className="w-full h-12 text-slate-900 fill-current max-w-6xl mx-auto block" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="h-6"></div>
        <svg className="w-full h-12 text-white fill-current max-w-6xl mx-auto block" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>
    </>
  );
}
