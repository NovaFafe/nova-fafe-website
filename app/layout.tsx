import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingButtons } from "@/components/floating-buttons"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "NOVAFAFE - Escola de Condução | Conduz o Teu Futuro",
  description:
    "Escola de condução profissional em Fafe. Aprenda a conduzir com instrutores certificados, veículos modernos e a maior taxa de aprovação da região.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  )
}
