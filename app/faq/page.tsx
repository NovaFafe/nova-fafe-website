import { Header } from "@/components/header"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Perguntas Frequentes - NOVAFAFE Escola de Condução",
  description: "Respostas às dúvidas mais comuns sobre a formação de condução na NOVAFAFE em Fafe.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
