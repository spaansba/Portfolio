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
