import "./globals.css";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import EmergencyBanner from "./UI/Other/EmergencyBanner";
import { inter } from "./font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const metadataBase = new URL("https://keithbrowndds.com");

export const metadata = {
  title:
    "Keith Brown DDS, FAGD | Naperville's Trusted Family & Emergency Dentist",
  description:
    "Visit Keith Brown, DDS, FAGD for trusted dental care in Naperville and Chicagoland. We offer comprehensive dental services and emergency care, including weekends, to ensure your dental health is prioritized.",
  keywords:
    "Keith Brown, DDS, FAGD, Keith A. Brown, dentist, emergency, Chicagoland, Aurora, Bolingbrook, weekend, weekend dentist, urgent dental, Naperville",
  metadataBase,
  openGraph: {
    title:
      "Keith Brown DDS, FAGD | Naperville's Trusted Family & Emergency Dentist",
    description:
      "Visit Keith Brown, DDS, FAGD for trusted dental care in Naperville and Chicagoland. We offer comprehensive dental services and emergency care, including weekends, to ensure your dental health is prioritized.",
    url: metadataBase.href,
    siteName: "Keith Brown DDS",
    images: [
      {
        url: `${metadataBase.href}/og-image.jpg`,
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Comprehensive and Emergency Dental Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
