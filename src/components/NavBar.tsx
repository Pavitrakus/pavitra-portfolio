"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 text-white max-w-5xl mx-auto"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter hover:underline font-serif">
        pavitra.
      </Link>
      
      <div className="flex gap-4 md:gap-7 items-center text-[0.85rem] md:text-[0.95rem] font-mono opacity-80">
        <Link href="#projects" className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity hidden sm:inline">
          i do :)
        </Link>
        <Link href="/blogs" className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity hidden sm:inline">
          blogs
        </Link>
        <Link href="/contact" className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity">
          contact
        </Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/50 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors font-sans font-medium text-xs md:text-sm">
          resume
        </a>
      </div>
    </motion.nav>
  );
}
