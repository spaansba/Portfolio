import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MainWrapper from "./_components/MainWrapper"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bart Spaans - Frontend Developer",
  description: "Portfolio of Bart Spaans, Frontend Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-SecondaryGray overflow-x-hidden overflow-y-auto`}
      >
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  )
}
