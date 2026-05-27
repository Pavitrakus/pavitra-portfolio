export function Projects() {
  const projects = [
    { year: "2025", name: "ORCA", desc: "Agentic AI — Android control via WhatsApp/Telegram" },
    { year: "2025", name: "Prompthus", desc: "AI Hackathon, 400+ participants, IIT Kanpur collab" },
    { year: "2025", name: "Execron 1.0 BuildFest", desc: "93-paid-participant hackathon at IIT Kanpur" },
    { year: "2025", name: "ORBIS 2045", desc: "Raspberry Pi + local LLM + ADB phone control device" },
    { year: "2024", name: "ByteForge", desc: "Student tech community, MOU with IIT Kanpur" },
    { year: "2024", name: "PaXus", desc: "Digital agency — real clients, real revenue" },
    { year: "2024", name: "ClusterOrch-Gym", desc: "RL env for distributed GPU failure diagnosis" },
  ];

  return (
    <section id="projects" className="px-5 pb-16 pt-8 max-w-6xl mx-auto bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-gray-900 text-5xl font-bold font-serif">Projects</h1>
        <div className="mt-2 text-2xl text-gray-800">Here&apos;s a collection of some of my favorite work!</div>
        
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="rounded-lg relative group shadow-lg h-48 sm:h-72 border border-black/20 bg-gray-50 flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="absolute top-0 right-0 group-hover:opacity-30 transition pr-3 pt-2 z-10">
                <span className="text-lg text-yellow-500">★</span>
              </div>
              <div className="absolute top-0 left-0 p-2 text-left text-black z-10">
                <p className="font-serif text-sm bg-white px-1 rounded-md border border-gray-200">{p.year}</p>
              </div>
              <div className="absolute bottom-2 left-2 p-3 text-left bg-white rounded-md text-black border border-black/20 shadow-md right-2 z-10 group-hover:-translate-y-1 transition-transform">
                <h2 className="text-xl sm:text-2xl font-semibold font-serif leading-tight">{p.name}</h2>
                <p className="text-sm text-gray-700 mt-1 line-clamp-2">{p.desc}</p>
              </div>
              {/* Decorative background for project cards */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
