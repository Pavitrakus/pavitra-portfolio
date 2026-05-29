"use client";

import { useState } from "react";

export function Blog() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:pavitra@paxus.in?subject=Notify me for new blogs&body=Hey Pavitra, notify me when you write something new! My email: ${email}`;
      setSent(true);
    }
  };

  return (
    <>
      <section id="blog" className="px-5 p-8 max-w-6xl mx-auto bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-gray-900 text-4xl font-bold font-serif">Blog</h1>
          <div className="mt-2 text-xl text-gray-500 font-mono">writing soon. stay tuned.</div>
          
          <div className="mt-8 max-w-md">
            {sent ? (
              <p className="font-mono text-sm text-green-600">you&apos;re on the list :)</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your email — i'll ping you when i write"
                  required
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm font-mono outline-none focus:border-gray-800 transition-colors"
                />
                <button
                  type="submit"
                  className="border border-gray-800 px-4 py-2 rounded-md text-sm font-mono hover:bg-gray-800 hover:text-white transition-colors"
                >
                  notify me
                </button>
              </form>
            )}
          </div>
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
