"use client";

import { useState } from "react";
import Link from "next/link";

export default function FishyMeshPage() {
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
      <div className="max-w-2xl mx-auto">

        <Link href="/blogs" className="font-mono text-sm text-gray-400 hover:text-gray-800 transition-colors mb-12 inline-block">
          ← back to blogs
        </Link>

        <div className="mt-8">
          <span className="text-sm font-mono text-orange-500 bg-orange-400/10 px-2 py-1 rounded">2025</span>
          <h1 className="text-5xl font-bold font-serif text-gray-900 mt-4 mb-6">Fishy Mesh</h1>
          <div className="w-12 h-0.5 bg-gray-200 mb-10"></div>
        </div>

        <p className="font-mono text-gray-500 text-base leading-relaxed italic">
          was a lil tired to write — will complete soon :)
        </p>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="font-mono text-sm text-gray-400 mb-4">get notified when it&apos;s ready</p>
          {sent ? (
            <p className="font-mono text-sm text-green-600">you&apos;re on the list :)</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
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
