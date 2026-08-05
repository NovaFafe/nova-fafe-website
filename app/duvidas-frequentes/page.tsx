import { Header } from "@/components/header"
import { DuvidasFrequentes } from "@/components/duvidas-frequentes"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Dúvidas Frequentes - NOVAFAFE Escola de Condução",
  description: "Respostas às dúvidas mais comuns sobre a formação de condução na NOVAFAFE em Fafe.",
}

export default function DuvidasFrequentesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DuvidasFrequentes />
      <CTA />
      <Footer />
    </main>
  )
}
