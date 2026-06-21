export function Projects() {
  const projects = [
    { year: "2025", name: "ORCA", desc: "Agentic AI — Android control via WhatsApp/Telegram", image: "/orca.jpg" },
    { year: "2024", name: "D2AR", desc: "Benchmark of 8 Diffusion vs Auto-Regressive language models for Hindi NLP.", image: "/d2ar.jpeg", link: "https://github.com/Pavitrakus/D2AR-diffusion-vs-ar-hindi-nlp/blob/master/README.md" },
    { year: "2025", name: "Execron 1.0 BuildFest", desc: "290+ participant hackathon at IIT Kanpur, one of the biggest in the city", image: "/execron.jpg" },
    { year: "2025", name: "ORBIS 2045", desc: "Raspberry Pi + local LLM + ADB phone control device — a device from year 2045", image: "/orbis.jpeg" },
    { year: "2024", name: "ClusterOrch-Gym", desc: "RL benchmark in Python for AI agents diagnosing distributed GPU failures in massive clusters.", image: "/ascend3.jpg" },
    { year: "2024", name: "LumenSeed", desc: "GenAI healthcare platform. 1st Prize at Sprakx Startup Pitching, IIT Bombay.", image: "/lumenseed.png" },
  ];

  const heliosLink = "/heliosstresstest";

  return (
    <section id="projects" className="px-5 pb-16 pt-8 max-w-6xl mx-auto bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-gray-900 text-5xl font-bold font-serif">I Do :)</h1>
        <div className="mt-2 text-2xl text-gray-800">Here&apos;s a collection of some of my favorite work!</div>
        
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Card = p.link ? "a" : "div";
            return (
            <Card 
              key={i} 
              href={p.link}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              className="rounded-lg relative group shadow-lg h-48 sm:h-72 border border-black/20 bg-gray-50 flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer block"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 group-hover:scale-105 transition-transform duration-500 z-0"></div>
              {p.image && (
                <>
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] z-0 rounded-lg pointer-events-none"></div>
                </>
              )}
            </Card>
          )})}

          {/* Helios Stress Card */}
          <a
            href={heliosLink}
            className="rounded-lg relative group shadow-lg h-48 sm:h-72 border border-black/20 flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer block"
            style={{ background: '#c9b49a' }}
          >
            {/* Full light-brown bg layer */}
            <div style={{ position: 'absolute', inset: 0, background: '#c9b49a', zIndex: 0 }} />
            {/* Scanline overlay */}
            <div
              style={{
                position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 4px)',
              }}
            />
            {/* Glow pulse ring */}
            <div className="absolute w-32 h-32 rounded-full animate-ping" style={{ animationDuration: '2.5s', zIndex: 2, border: '1px solid rgba(0,180,80,0.4)', background: 'rgba(0,180,80,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div className="absolute w-52 h-52 rounded-full" style={{ zIndex: 2, border: '1px solid rgba(0,180,80,0.18)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            {/* Robotic text */}
            <span
              style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                zIndex: 10,
                fontFamily: "'Courier New', Courier, monospace",
                letterSpacing: '0.2em',
                fontSize: 'clamp(13px, 2.4vw, 18px)',
                textTransform: 'uppercase',
                color: '#1a7a3c',
                textShadow: '0 0 10px rgba(0,180,80,0.3)',
                fontWeight: 700,
                textAlign: 'center',
                lineHeight: 1.7,
                whiteSpace: 'nowrap',
              }}
            >
              REACTOR<br />HELIOS<br />STRESS TEST
            </span>
            {/* Star */}
            <div className="absolute top-0 right-0 group-hover:opacity-30 transition pr-3 pt-2" style={{ zIndex: 20 }}>
              <span className="text-lg" style={{ color: '#1a7a3c' }}>★</span>
            </div>
            {/* Year badge */}
            <div className="absolute top-0 left-0 p-2 text-left" style={{ zIndex: 20 }}>
              <p className="font-serif text-sm bg-white px-1 rounded-md border border-gray-200" style={{ color: '#000' }}>2026</p>
            </div>
            {/* Info card */}
            <div className="absolute bottom-2 left-2 p-3 text-left bg-white rounded-md border border-black/20 shadow-md right-2 group-hover:-translate-y-1 transition-transform" style={{ zIndex: 20, color: '#000' }}>
              <h2 className="text-xl sm:text-2xl font-semibold font-serif leading-tight">Helios Stress</h2>
              <p className="text-sm text-gray-700 mt-1 line-clamp-2">Session Stability Under Static and Rotating Prompt Conditions</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
