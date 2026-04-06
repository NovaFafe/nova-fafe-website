import { Header } from "@/components/header"
import { Requirements } from "@/components/requirements"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Requisitos & Inscrição - NOVAFAFE Escola de Condução",
  description: "Documentos necessários e processo passo a passo para tirar a carta de condução na NOVAFAFE em Fafe.",
}

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Requirements />
      <CTA />
      <Footer />
    </main>
  )
}
