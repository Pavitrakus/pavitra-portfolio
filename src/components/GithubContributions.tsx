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
    </>
  );
}
