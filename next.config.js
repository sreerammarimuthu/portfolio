/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static export
  basePath: '/portfolio', // Ensures paths are correctly set for GitHub Pages
  trailingSlash: true, // Ensures all paths have a trailing slash for GitHub Pages compatibility
};

module.exports = nextConfig;