import { Header } from "@/components/header"
import { Advantages } from "@/components/advantages"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Vantagens - NOVAFAFE Escola de Condução",
  description: "Conhece as vantagens de escolher a NOVAFAFE como a tua escola de condução em Fafe.",
}

export default function VantagensPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Advantages />
      </div>
      <CTA />
      <Footer />
    </main>
  )
}
