import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function Blog() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-100 text-gray-800">
      <div className="bg-slate-900 relative h-[88px]">
        <NavBar />
      </div>

      <section className="flex-1 px-5 py-24 max-w-2xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gray-900">Thoughts & Updates</h1>
        <p className="font-mono text-gray-600 mb-12 leading-relaxed">
          I'm currently writing some new pieces. Type your email below and I'll inform you when I publish a new blog.
        </p>

        <form action="mailto:pavitra@paxus.in" method="GET" encType="text/plain" className="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="hidden" name="subject" value="Blog Subscription Request" />
          <input type="email" name="body" placeholder="Email address" required className="bg-white border border-gray-200 px-5 py-3 rounded-lg font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-sm sm:w-64" />
          <button type="submit" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-mono text-sm hover:bg-black transition-colors shadow-md">Notify Me</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
