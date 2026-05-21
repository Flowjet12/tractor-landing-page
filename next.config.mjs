/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export keeps the site compatible with Cloudflare Pages without a Node server.
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
