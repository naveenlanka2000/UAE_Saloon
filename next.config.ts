import type { NextConfig } from "next";
import path from "node:path";

const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: ".next-app",
  outputFileTracingRoot: path.resolve(__dirname),
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
