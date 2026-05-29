export function Footer() {
  return (
    <footer id="contact" className="bg-white pt-16 pb-24 px-5 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
        
        {/* SAY HI */}
        <div className="flex-1">
          <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">SAY HI</h3>
          <ul className="flex flex-col gap-4 font-mono text-sm text-gray-800">
            <li>
              <span className="text-gray-400">&bull; email: </span>
              <a href="mailto:pavitra@paxus.in" className="hover:text-blue-500 hover:underline transition-colors">pavitra@paxus.in</a>
            </li>
            <li>
              <span className="text-gray-400">&bull; twitter: </span>
              <a href="https://twitter.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">@pavitrakushwaha</a>
            </li>
            <li>
              <span className="text-gray-400">&bull; linkedin: </span>
              <a href="https://linkedin.com/in/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">pavitrakushwaha</a>
            </li>
            <li>
              <span className="text-gray-400">&bull; instagram: </span>
              <a href="https://instagram.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">@pavitrakushwaha</a>
            </li>
            <li>
              <span className="text-gray-400">&bull; github: </span>
              <a href="https://github.com/Pavitrakus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">Pavitrakus</a>
            </li>
          </ul>
        </div>

        {/* BOOK A CALL */}
        <div className="flex-1">
          <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">BOOK A CALL</h3>
          <div className="font-mono text-sm text-gray-800 mb-2">30 minutes. direct with founder.</div>
          <a href="https://cal.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-blue-500 hover:underline transition-colors break-all">
            cal.com/pavitrakushwaha
          </a>
        </div>

        {/* OFFICE */}
        <div className="flex-1">
          <h3 className="text-xs tracking-[0.2em] text-gray-400 font-mono mb-6 uppercase">OFFICE</h3>
          <div className="font-mono text-sm text-gray-800 leading-relaxed">
            Kanpur, Uttar Pradesh<br />
            India
          </div>
        </div>

      </div>
    </footer>
  );
}
