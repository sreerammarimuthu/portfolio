/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/portfolio', // Ensures correct asset paths for GitHub Pages
  trailingSlash: true, // Ensures compatibility with GitHub Pages
};

module.exports = nextConfig;