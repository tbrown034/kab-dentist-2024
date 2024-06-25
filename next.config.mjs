/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode to catch potential issues in the app.
  swcMinify: true, // Enables SWC-based minification for faster builds.

  // Defines URL redirects to ensure all variations of the site URL use HTTPS.
  async redirects() {
    return [
      {
        source: "/http://www.keithbrowndds.com/:path*",
        destination: "https://keithbrowndds.com/:path*",
        permanent: true, // Permanent redirect (HTTP 308)
      },
      {
        source: "/https://www.keithbrowndds.com/:path*",
        destination: "https://keithbrowndds.com/:path*",
        permanent: true, // Permanent redirect (HTTP 308)
      },
      {
        source: "/http://keithbrowndds.com/:path*",
        destination: "https://keithbrowndds.com/:path*",
        permanent: true, // Permanent redirect (HTTP 308)
      },
    ];
  },
};

export default nextConfig;
