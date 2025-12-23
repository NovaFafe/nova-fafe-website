import { Header } from "@/components/header"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Preços - NOVAFE Escola de Condução",
  description: "Consulte os nossos preços transparentes e planos de pagamento flexíveis.",
}

export default function PrecosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
}
