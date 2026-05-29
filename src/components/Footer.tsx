export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-8 pb-12 px-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500 font-mono">
          © {new Date().getFullYear()} Pavitra Kushwaha
        </div>
        <div className="flex gap-6 font-mono text-sm text-gray-500">
          <a href="https://github.com/Pavitrakus" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">github</a>
          <a href="https://instagram.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">instagram</a>
          <a href="https://linkedin.com/in/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">linkedin</a>
        </div>
      </div>
    </footer>
  );
}
