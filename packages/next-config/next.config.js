const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: !!process.env.ANALYZE,
});

const isProduction = process.env.NODE_ENV === "production";
const githubRepository = (isProduction && process.env.GITHUB_REPOSITORY) || "";
const githubRepositoryName = githubRepository.replace(/.*?\//, "/");

/** @type {import('next').NextConfig} */
const config = {
  assetPrefix: githubRepositoryName,
  basePath: githubRepositoryName,
  output: "export",
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(config);
