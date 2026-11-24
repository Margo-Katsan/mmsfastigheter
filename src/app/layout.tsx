import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MMS Fastigheter",
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
      <body>{children}</body>
    </html>
  );
}