import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import EmergencyBanner from "@/components/layout/extra/EmergencyBanner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { inter, raleway } from "@/app/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

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
            __html: `
              (function() {
                console.log('🎨 Theme Init Script: Starting theme initialization');
                try {
                  var theme = localStorage.getItem('theme');
                  var isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  console.log('🎨 Theme Init Script: Found saved theme:', theme);
                  console.log('🎨 Theme Init Script: System preference is dark:', isDarkSystem);

                  document.documentElement.classList.remove('light', 'dark');

                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    console.log('🎨 Theme Init Script: Applied light theme');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    console.log('🎨 Theme Init Script: Applied dark theme');
                  } else {
                    if (isDarkSystem) {
                      document.documentElement.classList.add('dark');
                      console.log('🎨 Theme Init Script: Applied system dark theme');
                    } else {
                      document.documentElement.classList.add('light');
                      console.log('🎨 Theme Init Script: Applied system light theme');
                    }
                  }
                  console.log('🎨 Theme Init Script: Theme initialization completed successfully');
                } catch (e) {
                  console.error('🎨 Theme Init Script: Error during initialization:', e);
                  document.documentElement.classList.add('light');
                  console.log('🎨 Theme Init Script: Fallback to light mode applied');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} p-4 px-6 bg-teal-50 bg-opacity-70 text-black lg:text-xl dark:bg-gray-800 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <EmergencyBanner />
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID || ""}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
