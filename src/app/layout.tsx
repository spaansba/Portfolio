import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainWrapper from "./_components/MainWrapper";
import PrefetchTester from "./_components/PagePreloader/PrefetchLinks";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bart Spaans - Frontend Developer",
  description: "Portfolio of Bart Spaans, Frontend Developer",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" }
    ],
    other: [
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-SecondaryGray antialiased`}>
        <PrefetchTester />
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
