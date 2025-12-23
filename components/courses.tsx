"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Truck, Bike, Award, ArrowRight, Check, Sparkles } from "lucide-react"

const courses = [
  {
    icon: Car,
    title: "Carta de Ligeiros",
    category: "Categoria B",
    description: "Curso completo para condução de veículos ligeiros de passageiros.",
    features: ["28 aulas práticas", "Exame teórico incluso", "Material didático", "Acompanhamento personalizado"],
    popular: true,
    color: "from-primary to-emerald-500",
  },
  {
    icon: Bike,
    title: "Carta de Motociclos",
    category: "Categoria A",
    description: "Aprenda a conduzir motociclos com segurança e confiança.",
    features: ["20 aulas práticas", "Equipamento fornecido", "Circuito fechado", "Treino intensivo"],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Truck,
    title: "Carta de Pesados",
    category: "Categoria C",
    description: "Formação profissional para condução de veículos pesados.",
    features: ["32 aulas práticas", "CAM incluído", "Formação específica", "Certificação completa"],
    popular: false,
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Award,
    title: "Aulas de Reforço",
    category: "Todos",
    description: "Aulas adicionais para quem precisa de mais prática.",
    features: ["Horários flexíveis", "Avaliação personalizada", "Apoio ao exame", "Preços especiais"],
    popular: false,
    color: "from-purple-500 to-pink-500",
  },
]

export function Courses() {
  return (
    <section
      id="cursos"
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-secondary/20 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Cursos Disponíveis</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6">
            Escolha o Seu <span className="gradient-text">Caminho</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos cursos adaptados às suas necessidades com a melhor formação do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <Card
              key={i}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                course.popular ? "ring-2 ring-primary ring-offset-2" : ""
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center text-xs font-bold py-1.5 z-10">
                  MAIS POPULAR
                </div>
              )}

              {/* Gradient top bar */}
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />

              <div className={`p-6 flex flex-col h-full ${course.popular ? "pt-8" : ""}`}>
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <course.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{course.category}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                </div>

                <ul className="space-y-2.5 mb-6 flex-grow">
                  {course.features.map((feature, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full group/btn ${
                    course.popular
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                      : "bg-gray-100 hover:bg-primary hover:text-white text-foreground"
                  } transition-all duration-300`}
                >
                  Saber Mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
