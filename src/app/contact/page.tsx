"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    window.location.href = `mailto:pavitra@paxus.in?subject=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white px-5 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Back link */}
        <Link href="/" className="font-mono text-sm text-gray-400 hover:text-gray-800 transition-colors mb-12 inline-block">
          ← pavitra
        </Link>

        <h1 className="text-5xl font-bold font-serif text-gray-900 mt-8 mb-16">Contact</h1>

        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-start">

          {/* Left: SAY HI + BOOK A CALL + OFFICE */}
          <div className="flex-1 flex flex-col gap-12">

            {/* SAY HI */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">SAY HI</h3>
              <ul className="flex flex-col gap-4 font-mono text-sm text-gray-800">
                <li>
                  <span className="text-gray-400">&bull; email: </span>
                  <a href="mailto:pavitra@paxus.in" className="hover:text-blue-500 hover:underline transition-colors">pavitra@paxus.in</a>
                </li>
                <li>
                  <span className="text-gray-400">&bull; twitter: </span>
                  <a href="https://x.com/Pavitra_Kushwah" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">@Pavitra_Kushwah</a>
                </li>
                <li>
                  <span className="text-gray-400">&bull; linkedin: </span>
                  <a href="https://www.linkedin.com/in/pavitra-kushwaha/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">pavitra-kushwaha</a>
                </li>
                <li>
                  <span className="text-gray-400">&bull; instagram: </span>
                  <a href="https://instagram.com/pavitrakuswaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">@pavitrakuswaha</a>
                </li>
                <li>
                  <span className="text-gray-400">&bull; github: </span>
                  <a href="https://github.com/Pavitrakus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">Pavitrakus</a>
                </li>
              </ul>
            </div>

            {/* BOOK A CALL */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">BOOK A CALL</h3>
              <div className="font-mono text-sm text-gray-800 mb-2">30 minutes. direct with founder.</div>
              <a href="https://cal.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-blue-500 hover:underline transition-colors">
                cal.com/pavitrakushwaha
              </a>
            </div>

            {/* OFFICE */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">OFFICE</h3>
              <div className="font-mono text-sm text-gray-800 leading-relaxed">
                Kanpur, Uttar Pradesh<br />
                India
              </div>
            </div>

          </div>

          {/* Right: SEND A MESSAGE */}
          <div className="flex-1 w-full">
            <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">SEND A MESSAGE</h3>
            {sent ? (
              <p className="font-mono text-sm text-green-600">message sent! i&apos;ll get back to you soon :)</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-gray-200 rounded-md px-4 py-3 font-mono text-sm outline-none focus:border-gray-800 transition-colors"
                />
                <input
                  type="email"
                  placeholder="your email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border border-gray-200 rounded-md px-4 py-3 font-mono text-sm outline-none focus:border-gray-800 transition-colors"
                />
                <textarea
                  placeholder="what's on your mind?"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border border-gray-200 rounded-md px-4 py-3 font-mono text-sm outline-none focus:border-gray-800 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="border border-gray-800 px-6 py-3 rounded-md font-mono text-sm hover:bg-gray-800 hover:text-white transition-colors self-start"
                >
                  send message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
