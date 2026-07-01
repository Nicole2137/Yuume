import { Plus_Jakarta_Sans } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Quicksand } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export const quickSand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});
