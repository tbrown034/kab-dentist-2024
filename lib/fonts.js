// app/lib/fonts.js

import {
  Inter,
  Roboto,
  Lato,
  Merriweather,
  Montserrat,
  Open_Sans,
  Raleway,
  Nunito,
  Poppins,
  Playfair_Display,
  Angkor,
  Rubik,
} from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"], // Common weights for Inter
  display: "swap",
});
export const angkor = Angkor({
  subsets: ["latin"],
  weight: ["400"], // Common weights for Inter
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Inter
  display: "swap",
});

export const roboto = Roboto({
  weight: ["400", "700"], // Already specified
  subsets: ["latin"],
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Already specified
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Merriweather
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Montserrat
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Open Sans
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Raleway
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Nunito
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Poppins
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Common weights for Playfair Display
  display: "swap",
});
