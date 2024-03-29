import "./globals.css";
import Script from "next/script";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import { roboto } from "./font";

export const metadata = {
  title: "Keith Brown DDS, Naperville's Trusted Dentist",
  description: "Keith Brown D.D.D.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Script
        src="https://kit.fontawesome.com/97ca5b5e4b.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className={`${roboto.className} p-2 text-teal-950 bg-teal-50`}>
        <Header />
        {children} <Footer />
      </body>
    </html>
  );
}
