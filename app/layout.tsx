import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Libre_Baskerville as FontSerif } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WIP Design | Tools and Resources for Designers by Bridger Tower",
  description:
    "WIP Design provides tools and resources for designers. Join out community and grow your skills as a designer. Always a Work In Progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSerif.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
