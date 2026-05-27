export function Blog() {
  const posts = [
    { date: "Oct 24", title: "My 2045 Thesis — Why I think AGI arrives then, not sooner." },
    { date: "Aug 24", title: "How I Reverse-Engineered a Delivery API to Build ORCA" },
    { date: "May 24", title: "What Running a Hackathon at 16 Taught Me About People" },
  ];

  return (
    <>
      <section id="blog" className="px-5 p-8 max-w-6xl mx-auto bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-gray-900 text-4xl font-bold font-serif">Blog</h1>
          <div className="mt-2 text-xl sm:text-2xl text-gray-800">Here&apos;s some writing about cool things I&apos;ve done!</div>
          
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <a 
                key={i}
                href="#"
                className="hover:-rotate-1 hover:scale-105 transform transition p-4 rounded-lg relative group overflow-hidden border border-orange-400 bg-orange-400/10 flex flex-col justify-between"
              >
                <div className="text-left text-black flex flex-col gap-2 relative z-10">
                  <p className="text-sm font-serif w-fit rounded-md px-1 py-0.5 bg-orange-400/40">{post.date}</p>
                  <h2 className="text-2xl font-serif leading-tight mt-2">{post.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <svg className="fill-white h-6 sm:h-12 max-w-6xl mx-auto" width="100%" height="100" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1152 0.999781V0.510196H0V47.9998C0 54.8232 5.68201 60.2734 12.4995 59.9894L1140.5 12.9894C1146.93 12.7216 1152 7.43288 1152 0.999781Z"></path>
      </svg>
    </>
  );
}
