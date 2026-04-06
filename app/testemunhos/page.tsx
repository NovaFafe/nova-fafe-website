import { Header } from "@/components/header"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Testemunhos - NOVAFAFE Escola de Condução",
  description: "Lê o que os nossos alunos dizem sobre a experiência na NOVAFAFE em Fafe.",
}

export default function TestemunhosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Testimonials />
      </div>
      <CTA />
      <Footer />
    </main>
  )
}
