// layout.js
import "./globals.css";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import { inter } from "./font";

export const metadata = {
  title: "Keith Brown DDS, Naperville's Trusted Dentist",
  description: "Keith Brown D.D.D.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body
        className={`${inter.className} p-4 dark:bg-red-800   text-teal-950  bg-teal-50 bg-opacity-70  lg:text-xl`}
      >
        <Header />
        {children} <Footer />
      </body>
    </html>
  );
}
