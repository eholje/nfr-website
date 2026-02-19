import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Norsk Førstehjelpsråd",
  description:
    "Den nasjonale paraplyorganisasjonen for førstehjelp i Norge. 28 medlemsorganisasjoner, 2,2 millioner indirekte medlemmer.",
  openGraph: {
    title: "Norsk Førstehjelpsråd",
    description:
      "Den nasjonale paraplyorganisasjonen for førstehjelp i Norge. 28 medlemsorganisasjoner, 2,2 millioner indirekte medlemmer.",
    siteName: "Norsk Førstehjelpsråd",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/images/hero-fjord.jpg",
        width: 1200,
        height: 630,
        alt: "Norsk Førstehjelpsråd",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${dmSerif.variable} ${inter.variable} antialiased`}>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
