export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-mono text-xs text-gray-400">
          © {new Date().getFullYear()} pavitra kushwaha
        </div>
        <div className="flex gap-6 font-mono text-sm text-gray-500">
          <a href="https://github.com/Pavitrakus" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">github</a>
          <a href="https://instagram.com/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">instagram</a>
          <a href="https://linkedin.com/in/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">linkedin</a>
        </div>
      </div>
    </footer>
  );
}
