import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import EmergencyBanner from "@/components/layout/extra/EmergencyBanner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { inter, raleway } from "@/app/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const metadataBase = new URL("https://keithbrowndds.com");

export const metadata = {
  title: "Dr. Keith Brown DDS, FAGD | Naperville Family & Emergency Dentist",
  description:
    "Visit Dr. Keith Brown, DDS, FAGD's dental office for trusted dental care in Naperville and Chicagoland. We offer comprehensive dental services and emergency care, including weekends.",
  keywords:
    "Keith Brown, DDS, FAGD, Keith A. Brown, dentist, emergency, Chicagoland, Aurora, Bolingbrook, weekend, weekend dentist, urgent dental, Naperville, dentist near me, emergency dentist, dr, dr.",
  metadataBase,
  openGraph: {
    title: "Dr. Keith Brown DDS, FAGD | Naperville Family & Emergency Dentist",
    description:
      "Visit Keith Brown, DDS, FAGD for trusted dental care in Naperville and Chicagoland. We offer comprehensive dental services and emergency care, including weekends.",
    url: metadataBase.href,
    siteName: "Keith Brown DDS",
    images: [
      {
        url: `${metadataBase.href}/og-image.jpg`,
        width: 800,
        height: 600,
        alt: "Dr. Keith Brown DDS, FAGD | Naperville Family & Emergency Dentist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Keith Brown DDS, FAGD | Naperville Family & Emergency Dentist",
    description:
      "Visit Dr. Keith Brown, DDS, FAGD for trusted dental care in Naperville and Chicagoland. We offer comprehensive dental services and emergency care, including weekends.",
    image: `${metadataBase.href}/twitter-image.jpg`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-W3JKZNL4'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W3JKZNL4');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  document.documentElement.classList.remove('light', 'dark');

                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    if (isDarkSystem) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.add('light');
                    }
                  }
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} p-4 px-6 bg-teal-50 bg-opacity-70 text-black lg:text-xl dark:bg-gray-800 dark:text-gray-100`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3JKZNL4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <EmergencyBanner />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
