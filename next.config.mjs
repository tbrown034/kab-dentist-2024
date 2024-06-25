// @ts-check

import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode to catch potential issues in the app.
  swcMinify: true, // Enables SWC-based minification for faster builds.

  // Defines URL redirects to ensure all variations of the site URL use HTTPS.
  async redirects() {
    return [
      {
        source: "/www.keithbrowndds.com/:path*",
        destination: "https://keithbrowndds.com/:path*",
        permanent: true, // Permanent redirect (HTTP 308)
      },
      {
        source: "/keithbrowndds.com/:path*",
        destination: "https://keithbrowndds.com/:path*",
        permanent: true, // Permanent redirect (HTTP 308)
      },
    ];
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
