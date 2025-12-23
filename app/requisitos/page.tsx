import { Header } from "@/components/header"
import { Requirements } from "@/components/requirements"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Requisitos - NOVAFE Escola de Condução",
  description: "Saiba quais os requisitos necessários para tirar a carta de condução.",
}

export default function RequisitosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Requirements />
      </div>
      <Footer />
    </main>
  )
}
