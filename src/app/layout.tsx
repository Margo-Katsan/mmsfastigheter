import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://mmsfastigheter.se"
  ),

  title: {
    default: "MMS Fastigheter",
    template: "%s | MMS Fastigheter",
  },

  description:
    "Fastigheter, uthyrning och fastighetsutveckling i Skåne sedan 1984.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${inter.variable} ${playfair.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}