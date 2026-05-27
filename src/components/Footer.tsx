export function Footer() {
  return (
    <div className="bg-[#fdfbf7] sm:bg-white border-t border-gray-200 mt-16">
      <div className="mx-5 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg text-gray-800 font-serif">
            © {new Date().getFullYear()} Pavitra Kushwaha
          </div>
          <div className="flex gap-6 font-serif text-gray-600">
            <a href="mailto:pavitra@paxus.in" className="hover:text-blue-500 hover:underline transition-colors">Email</a>
            <a href="https://github.com/Pavitrakus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/pavitrakushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
