"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogsPage() {
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
    <main className="min-h-screen bg-white px-5 py-16">
      <div className="max-w-5xl mx-auto">

        <Link href="/" className="font-mono text-sm text-gray-400 hover:text-gray-800 transition-colors mb-12 inline-block">
          ← pavitra
        </Link>

        <h1 className="text-5xl font-bold font-serif text-gray-900 mt-8 mb-4">Blog</h1>
        <p className="font-mono text-gray-500 text-sm mb-12">writing soon. stay tuned.</p>

        <div className="max-w-md">
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
                className="border border-gray-800 px-4 py-2 rounded-md text-sm font-mono hover:bg-gray-800 hover:text-white transition-colors whitespace-nowrap"
              >
                notify me
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
