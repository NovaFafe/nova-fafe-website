import { Header } from "@/components/header"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Preços - NOVAFAFE Escola de Condução",
  description: "Consulta os nossos preços e planos de pagamento flexíveis para tirar a carta em Fafe.",
}

export default function PrecosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Pricing />
      </div>
      <CTA />
      <Footer />
    </main>
  )
}
