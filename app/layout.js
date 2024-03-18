import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Keith Brown DDS, Naperville's Trusted Dentist",
  description: "Keith Brown D.D.D.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <Script
        src="https://kit.fontawesome.com/97ca5b5e4b.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className="text-teal-950 bg-teal-50">{children}</body>
    </html>
  );
}
