import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-100 text-gray-800">
      <div className="bg-slate-900 relative h-[88px]">
        <NavBar />
      </div>

      <section className="flex-1 px-5 py-16 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-16 text-gray-900">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">SAY HI</h3>
              <ul className="flex flex-col gap-4 font-mono text-sm text-gray-800">
                <li><span className="text-gray-400">&bull; email: </span><a href="mailto:pavitra@paxus.in" className="hover:text-blue-600 hover:underline transition-colors">pavitra@paxus.in</a></li>
                <li><span className="text-gray-400">&bull; twitter: </span><a href="https://twitter.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline transition-colors">@pavitrakushwaha</a></li>
                <li><span className="text-gray-400">&bull; linkedin: </span><a href="https://linkedin.com/in/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline transition-colors">pavitrakushwaha</a></li>
                <li><span className="text-gray-400">&bull; instagram: </span><a href="https://instagram.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline transition-colors">@pavitrakushwaha</a></li>
                <li><span className="text-gray-400">&bull; github: </span><a href="https://github.com/Pavitrakus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline transition-colors">Pavitrakus</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">BOOK A CALL</h3>
              <div className="font-mono text-sm text-gray-800 mb-2">30 minutes. direct with founder.</div>
              <a href="https://cal.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-blue-600 hover:underline transition-colors break-all">
                cal.com/pavitrakushwaha
              </a>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">OFFICE</h3>
              <div className="font-mono text-sm text-gray-800 leading-relaxed">Kanpur, Uttar Pradesh<br />India</div>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">SEND MESSAGE</h3>
            <form action="mailto:pavitra@paxus.in" method="GET" encType="text/plain" className="flex flex-col gap-5">
              <input type="text" name="subject" placeholder="Subject" required className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-sm" />
              <textarea name="body" placeholder="Write your message..." required rows={6} className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-sm resize-y"></textarea>
              <button type="submit" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-mono text-sm hover:bg-black transition-colors shadow-md w-fit">Send via Email App</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
