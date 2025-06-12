// @ts-check

import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MEASUREMENT_ID: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    OPENAIAPI: process.env.OPENAIAPI,
    EMAIL_PASS: process.env.EMAIL_PASS,
    ZOHO_MAIL_USER: process.env.ZOHO_MAIL_USER,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  async redirects() {
    return [
      {
        source: "/www.keithbrowndds.com/:path*",
        destination: "https://keithbrowndds.com/:path*",
        permanent: true,
      },
      {
        source: "/keithbrowndds.com/:path*",
        destination: "https://keithbrowndds.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
