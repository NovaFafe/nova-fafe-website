import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contacto - NOVAFE Escola de Condução",
  description: "Entre em contacto connosco para tirar dúvidas ou agendar uma visita.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
