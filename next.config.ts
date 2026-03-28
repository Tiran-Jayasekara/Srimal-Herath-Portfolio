import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/Tiran-Jayasekara-Portfolio',
  assetPrefix: '/Tiran-Jayasekara-Portfolio/',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
