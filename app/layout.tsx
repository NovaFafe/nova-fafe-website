import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingButtons } from "@/components/floating-buttons"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "NOVAFAFE - Escola de Condução | Conduz o Teu Futuro",
  description:
    "Escola de condução profissional em Fafe. Instrutores certificados, veículos modernos e 89% de aprovação no exame prático (IMT, 2021).",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    locale: "pt_PT",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-clip font-sans antialiased`}>
        {children}
        <FloatingButtons />
        <Toaster richColors position="top-center" theme="light" />
        <Analytics />
      </body>
    </html>
  )
}
