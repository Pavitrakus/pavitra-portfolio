"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GithubContributions() {
  return (
    <>
      <section className="px-5 py-8 max-w-6xl mx-auto bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-gray-900 text-3xl font-bold font-serif mb-6">Github Contributions</h2>
          <div className="flex justify-center md:justify-start overflow-x-auto pb-4">
            <GitHubCalendar 
              username="Pavitrakus" 
              colorScheme="light"
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              }}
            />
          </div>
        </div>
      </section>
      
      {/* PERFECT TILTED CUTS */}
      <div className="hidden sm:block">
        <svg className="w-full h-12 text-white fill-current max-w-6xl mx-auto block" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="h-6"></div>
        <svg className="w-full h-12 text-white fill-current max-w-6xl mx-auto block" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>
    </>
  );
}
