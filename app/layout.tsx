import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The D'Sean Perry Foundation | A Legacy of Leadership, Love & Purpose",
  description:
    "Honoring the life and legacy of D'Sean Perry (#41) — UVA Cavalier, artist, and beloved leader — by empowering youth through athletics, education, and community.",
  keywords: [
    "D'Sean Perry",
    "D'Sean Perry Foundation",
    "UVA football",
    "memorial",
    "scholarship",
    "youth athletics",
    "Virginia Cavaliers",
    "1.15.41",
  ],
  openGraph: {
    title: "The D'Sean Perry Foundation",
    description:
      "A legacy of leadership, love, and purpose. Empowering youth through athletics, education, and community.",
    type: "website",
    locale: "en_US",
    siteName: "The D'Sean Perry Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "The D'Sean Perry Foundation",
    description:
      "A legacy of leadership, love, and purpose. Empowering youth through athletics, education, and community.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
