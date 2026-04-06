import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contacto - NOVAFAFE Escola de Condução",
  description: "Entra em contacto connosco para tirar dúvidas ou agendar uma visita. Fafe.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}
