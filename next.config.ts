import type { NextConfig } from "next";

// GitHub Pages serves this project at /Isaac-Gamah-Website, so the static export
// is only enabled (with that base path) when building in CI via GITHUB_PAGES=true.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/Isaac-Gamah-Website" : "";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  ...(isPages && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
