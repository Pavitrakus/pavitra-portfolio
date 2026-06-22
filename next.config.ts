import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/heliosstresstest',
        destination: '/helios_stress_report.html',
      },
    ]
  },
};

export default nextConfig;
