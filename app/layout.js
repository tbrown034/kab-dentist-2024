import "./globals.css";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import EmergencyBanner from "./UI/Other/EmergencyBanner";
import { inter } from "./font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Keith Brown DDS - Naperville's Trusted Dentist",
  description:
    "Comprehensive dental care provided by Keith Brown, D.D.S., serving Naperville and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Comprehensive dental care provided by Keith Brown, D.D.S., serving Naperville and surrounding areas."
        />
        <meta
          property="og:title"
          content="Keith Brown DDS - Naperville's Trusted Dentist"
        />
        <meta
          property="og:description"
          content="Comprehensive dental care provided by Keith Brown, D.D.S., serving Naperville and surrounding areas."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.keithbrowndds.com" />
      </head>
      <body
        className={`${inter.className} p-4 px-6 bg-teal-50 bg-opacity-70 text-black lg:text-xl dark:bg-gray-800 dark:text-gray-100`}
      >
        <Header />
        {children}
        <Footer />
        <EmergencyBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
