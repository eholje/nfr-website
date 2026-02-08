import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Norsk Førstehjelpsråd",
  description:
    "Paraplyorganisasjonen for førstehjelp i Norge. 28 medlemsorganisasjoner, 2,2 millioner indirekte medlemmer.",
  openGraph: {
    title: "Norsk Førstehjelpsråd",
    description:
      "Paraplyorganisasjonen for førstehjelp i Norge. 28 medlemsorganisasjoner, 2,2 millioner indirekte medlemmer.",
    siteName: "Norsk Førstehjelpsråd",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${openSans.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
