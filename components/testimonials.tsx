"use client"

import { Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    name: "José Roberto",
    role: "Categoria A",
    contentHtml:
      "Ambiente organizado, métodos de ensino fantásticos, receção e instrutores empenhados e uma excelente dinâmica de ensino. Fui aprovado <span class='underline decoration-foreground/30 underline-offset-4 text-foreground font-medium'>de primeira</span> com <strong class='text-foreground font-bold'>38/40</strong> no exame de código de A+B em cerca de 1 mês e meio de dedicação. Excelente escola de condução",
    rating: 5,
    image: "/NovaFafe-Facebook/Aprovados/1.jpg",
  },
  {
    name: "Rui Silva",
    role: "Categoria B",
    contentHtml:
      "Sempre quis tirar a carta e a NOVAFAFE tornou isso possível. Instalações de topo e equipamento moderno.",
    rating: 5,
    image: "/NovaFafe-Facebook/Aprovados/2.jpg",
  },
  {
    name: "Aluno Aprovado",
    role: "Categoria B",
    contentHtml:
      "Recomendo a todos! A flexibilidade de horários permitiu-me conciliar com o trabalho. Aprovei à primeira tentativa!",
    rating: 5,
    image: "/NovaFafe-Facebook/Aprovados/3.jpg",
  },
  {
    name: "Aluno Aprovado",
    role: "Categoria B",
    contentHtml: "Formação profissional de excelência. A equipa da NOVAFAFE é muito competente e prestável.",
    rating: 5,
    image: "/NovaFafe-Facebook/Aprovados/4.jpg",
  },
  {
    name: "Aluno Aprovado",
    role: "Categoria B",
    contentHtml: "Muito satisfeito com a formação recebida. Passei ao exame à primeira tentativa!",
    rating: 5,
    image: "/NovaFafe-Facebook/Aprovados/5.jpg",
  },
  {
    name: "Aluno Aprovado",
    role: "Categoria B",
    contentHtml: "Os instrutores são excelentes e as aulas práticas são muito bem organizadas.",
    rating: 5,
    image: "/NovaFafe-Facebook/Aprovados/6.jpg",
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="group h-full bg-muted/30 rounded-3xl p-7 hover:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-border/50">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p
        className="text-sm text-muted-foreground leading-relaxed mb-6 italic"
        dangerouslySetInnerHTML={{ __html: `&ldquo;${testimonial.contentHtml}&rdquo;` }}
      />

      <div className="flex items-center gap-3 pt-5 border-t border-border/30">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-2xl object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
            <CheckCircle2 className="h-3 w-3 text-white" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-foreground">{testimonial.name}</div>
          <div className="text-xs text-primary font-bold">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  })

  return (
    <section id="testemunhos" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span>Testemunhos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
            O Que Dizem os{" "}
            <span className="text-primary">Nossos Alunos</span>
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            A satisfação dos nossos alunos é a nossa maior conquista.
          </p>
        </div>

        {/* Mobile carousel — peek next card */}
        <div className="-mx-7 md:hidden">
          <div className="overflow-hidden pl-7" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-[82%] pr-3 snap-start">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/testemunhos"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-sm transition-all"
          >
            Ver todos os testemunhos
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
