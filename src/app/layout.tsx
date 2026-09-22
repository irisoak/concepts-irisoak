import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Take a look — Iris & Oak Concepts",
  description: "Concept website by Iris & Oak.",

  icons: {
    icon: "/iris-oak-icon.png",
    shortcut: "/iris-oak-icon.png",
    apple: "/iris-oak-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}