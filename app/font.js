import { Inter, Raleway } from "next/font/google";

// Body font - clean, highly legible for long-form content
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

// Header font - elegant and refined for section headers
export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "600", "700", "800"],
});
