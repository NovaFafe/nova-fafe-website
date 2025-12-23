"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Morada",
    content: "Rua 5 de Outubro, 123\n4820-000 Fafe",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "253 490 080\n910 123 456",
    color: "from-primary to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email",
    content: "geral@novafe.pt",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg-Sex: 9h-20h\nSábado: 9h-13h",
    color: "from-orange-500 to-amber-500",
  },
]

export function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 bg-gradient-to-b from-secondary/30 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Contacte-nos</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tem alguma dúvida? Estamos aqui para ajudar. Entre em contacto connosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <Card
                key={i}
                className="group p-5 border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card className="overflow-hidden border-0 shadow-md">
              <div className="h-[180px] bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Fafe, Portugal</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 lg:p-10 border-0 shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envie-nos uma Mensagem</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Nome Completo</label>
                  <Input
                    placeholder="João Silva"
                    className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="joao@email.com"
                    className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Telefone</label>
                  <Input
                    placeholder="+351 910 000 000"
                    className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Curso de Interesse</label>
                  <Input
                    placeholder="Ex: Categoria B"
                    className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Mensagem</label>
                <Textarea
                  placeholder="Escreva a sua mensagem aqui..."
                  rows={5}
                  className="border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
