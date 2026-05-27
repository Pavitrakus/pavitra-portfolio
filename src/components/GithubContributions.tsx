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
      
      <svg className="hidden sm:block fill-white -mt-px h-6 sm:h-12 max-w-6xl mx-auto relative z-20" width="100%" height="100" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 59.5105V60.0001H1152V12.5105C1152 5.68705 1146.32 0.236812 1139.5 0.520875L11.5004 47.5209C5.07291 47.7887 0 53.0774 0 59.5105Z"></path>
      </svg>
    </>
  );
}
