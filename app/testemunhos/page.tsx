import { Header } from "@/components/header"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Testemunhos - NOVAFE Escola de Condução",
  description: "Leia o que os nossos alunos dizem sobre a experiência na NOVAFE.",
}

export default function TestemunhosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
