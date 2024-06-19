import "./globals.css";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import EmergencyBanner from "./UI/Other/EmergencyBanner";
import { inter } from "./font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const metadataBase = new URL("https://keithbrowndds.com");

export const metadata = {
  title:
    "Keith Brown DDS - Comprehensive and Emergency Dental Care in Naperville",
  description:
    "Visit Keith Brown, DDS for trusted dental care in Naperville. We offer comprehensive dental services and emergency care, including weekends, to ensure your dental health is prioritized.",
  metadataBase,
  openGraph: {
    title:
      "Keith Brown DDS - Comprehensive and Emergency Dental Care in Naperville",
    description:
      "Visit Keith Brown, DDS for trusted dental care in Naperville. We offer comprehensive dental services and emergency care, including weekends, to ensure your dental health is prioritized.",
    url: metadataBase.href,
    siteName: "Keith Brown DDS",
    images: [
      {
        url: new URL("/og-image.jpg", metadataBase).href,
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Comprehensive and Emergency Dental Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title:
      "Keith Brown DDS - Comprehensive and Emergency Dental Care in Naperville",
    description:
      "Visit Keith Brown, DDS for trusted dental care in Naperville. We offer comprehensive dental services and emergency care, including weekends, to ensure your dental health is prioritized.",
    images: [
      {
        url: new URL("/twitter-image.jpg", metadataBase).href,
        alt: "Keith Brown DDS - Comprehensive and Emergency Dental Care",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={metadataBase.href} />
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
