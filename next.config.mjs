/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap.js",
      },
    ];
  },
};

export default nextConfig;
