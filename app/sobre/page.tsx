import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Sobre Nós - NOVAFE Escola de Condução",
  description: "Conheça a história e valores da NOVAFE, escola de condução de referência em Fafe há mais de 25 anos.",
}

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  )
}
