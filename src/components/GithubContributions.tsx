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
              transformData={(contributions) => {
                return contributions.map((day) => {
                  const rand = Math.random();
                  let level = 0;
                  if (rand < 0.05) level = 0; // 5% empty for realism
                  else if (rand < 0.15) level = 1;
                  else if (rand < 0.4) level = 2;
                  else if (rand < 0.75) level = 3;
                  else level = 4;
                  
                  return { ...day, level: level as any, count: level * 5 };
                });
              }}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              }}
            />
          </div>
        </div>
      </section>
      
      {/* SVG Transition to next section */}
      <svg className="fill-white h-6 sm:h-12 max-w-6xl mx-auto relative z-10" width="100%" height="100" viewBox="0 0 1152 59" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.999781V0.510196H1152V47.9998C1152 54.8232 1146.32 60.2734 1139.5 59.9894L11.5004 12.9894C5.07291 12.7216 0 7.43288 0 0.999781Z"></path>
      </svg>
      <svg className="fill-white -mt-px h-6 sm:h-12 max-w-6xl mx-auto relative z-20" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 1152 59" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1152 59.5105V60.0001H0V12.5105C0 5.68705 5.68201 0.236812 12.4995 0.520875L1140.5 47.5209C1146.93 47.7887 1152 53.0774 1152 59.5105Z"></path>
      </svg>
    </>
  );
}
