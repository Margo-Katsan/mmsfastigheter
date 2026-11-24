import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Inter, Playfair_Display } from "next/font/google";
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
      </body>
    </html>
  );
}