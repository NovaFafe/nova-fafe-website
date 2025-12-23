import { Header } from "@/components/header"
import { Advantages } from "@/components/advantages"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Vantagens - NOVAFE Escola de Condução",
  description: "Conheça as vantagens de escolher a NOVAFE como sua escola de condução.",
}

export default function VantagensPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Advantages />
      </div>
      <Footer />
    </main>
  )
}
