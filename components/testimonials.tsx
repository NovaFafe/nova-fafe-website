"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote, MessageCircle, CheckCircle2 } from "lucide-react"

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
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden"
    >
      {/* Top Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/20 blur-xl" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent lg:from-primary/5" />

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/10 blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/5 to-transparent lg:from-primary/5" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
            <MessageCircle className="h-4 w-4" />
            <span>Testemunhos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-8 leading-tight">
            O Que Dizem os <span className="text-primary">Nossos Alunos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A satisfação dos nossos alunos é a nossa maior conquista e o reflexo da nossa dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 flex flex-col"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-1 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="relative">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-2xl object-cover shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-foreground tracking-tight">{testimonial.name}</div>
                  <div className="text-xs text-primary font-black uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
