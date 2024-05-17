// layout.js
import "./globals.css";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import { inter } from "./font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Keith Brown DDS, Naperville's Trusted Dentist",
  description: "Keith Brown D.D.D.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.className} p-4 bg-teal-50 bg-opacity-70 text-black lg:text-xl dark:bg-gray-800 dark:text-gray-100`}
      >
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />

        <Footer />
      </body>
    </html>
  );
}
