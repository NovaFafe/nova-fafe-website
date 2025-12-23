import { Header } from "@/components/header"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "FAQ - NOVAFE Escola de Condução",
  description: "Perguntas frequentes sobre os nossos cursos e processos.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
