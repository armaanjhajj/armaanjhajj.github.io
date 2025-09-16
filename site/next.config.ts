import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Required for GitHub Pages/static export
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
