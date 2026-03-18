import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  distDir: ".next-app",
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
