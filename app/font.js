import {
  Montserrat,
  Roboto,
  Poppins,
  Nunito,
  Inter,
  Raleway,
} from "next/font/google";

// Logo Fonts
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["700", "800", "900"], // Modern and geometric, offering a clean, sophisticated look.
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "700"], // Versatile and modern, offering straightforward readability.
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "600", "700"], // Geometric and modern, ideal for impactful hero headers.
});

// Body Fonts
export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "700"], // Soft and rounded, presenting text in an inviting, approachable manner.
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700", "900"], // Highly legible and neutral, perfect for long-form body text.
});

// Section Header Fonts
export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "600", "700"], // Elegant and refined, perfect for distinctive section headers.
});
