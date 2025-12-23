"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "Maria Santos",
    role: "Categoria B",
    content:
      "Excelente escola! Os instrutores são muito profissionais e pacientes. Passei à primeira graças ao método de ensino da NOVAFE.",
    rating: 5,
    image: "/young-woman-smiling-portrait-professional.jpg",
  },
  {
    name: "João Pereira",
    role: "Categoria A",
    content:
      "Sempre quis tirar a carta de mota e a NOVAFE tornou isso possível. Instalações de topo e equipamento moderno.",
    rating: 5,
    image: "/young-man-smiling-portrait-professional.jpg",
  },
  {
    name: "Ana Costa",
    role: "Categoria B",
    content:
      "Recomendo a todos! A flexibilidade de horários permitiu-me conciliar com o trabalho. Aprovei à primeira tentativa!",
    rating: 5,
    image: "/young-woman-professional-portrait-smiling.jpg",
  },
  {
    name: "Pedro Almeida",
    role: "Categoria C",
    content: "Formação profissional de excelência. A equipa da NOVAFE é muito competente e prestável.",
    rating: 5,
    image: "/man-30s-professional-portrait-smiling.jpg",
  },
]

export function Testimonials() {
  return (
    <section
      id="testemunhos"
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Testemunhos</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6">
            O Que Dizem os <span className="gradient-text">Nossos Alunos</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A satisfação dos nossos alunos é a nossa maior conquista.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="group p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{testimonial.content}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
