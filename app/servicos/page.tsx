import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Serviços - NOVAFE Escola de Condução",
  description: "Descubra todos os nossos serviços e cursos de condução disponíveis.",
}

export default function ServicosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <CTA />
      <Footer />
    </main>
  )
}
