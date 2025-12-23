"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Categoria B",
    subtitle: "Carta de Ligeiros",
    price: "600€",
    period: "/total",
    features: ["28 aulas práticas", "Aulas teóricas ilimitadas", "Material de estudo digital", "Taxas de exame incluídas"],
    popular: true,
  },
  {
    name: "Categoria A",
    subtitle: "Carta de Motociclo",
    price: "500€",
    period: "/total",
    features: ["20 aulas práticas", "Equipamento de proteção", "Pista de treino privada", "Seguro incluído"],
    popular: false,
  },
  {
    name: "Categoria C",
    subtitle: "Carta de Pesados",
    price: "Sob Consulta",
    period: "",
    features: ["Aulas em veículo moderno", "Formação CAM incluída", "Horário pós-laboral", "Acompanhamento dedicado"],
    popular: false,
  },
  {
    name: "Revalidação",
    subtitle: "Aulas de Reforço",
    price: "35€",
    period: "/aula",
    features: ["Avaliação de condução", "Apoio ao exame prático", "Horários flexíveis", "Sem taxas de inscrição"],
    popular: false,
  },
]

export function PricingPreview() {
  return (
    <section id="precos" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Top Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/20 blur-xl" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent lg:from-slate-50/80" />

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/10 blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent lg:from-slate-50/80" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Nossos Cursos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 leading-tight">
            Formação Para Todas as <span className="text-primary">Categorias</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Escolha o plano que melhor se adapta aos seus objetivos. Preços transparentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-6 transition-all flex flex-col ${
                plan.popular 
                  ? "border-2 border-primary shadow-lg lg:scale-105 z-10" 
                  : "border border-border shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">{plan.name}</h3>
                <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-4">{plan.subtitle}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-extrabold text-foreground tracking-tighter">{plan.price}</span>
                  {plan.period && <span className="text-[10px] text-muted-foreground font-bold">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`group relative overflow-hidden w-full font-bold h-10 rounded-lg text-xs transition-all active:scale-95 ${
                  plan.popular 
                    ? "bg-primary hover:bg-primary/90 text-white shadow-md" 
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${plan.popular ? "via-white/20" : "via-primary/5"} to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out`} />
                Saber Mais
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/precos" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-all group gap-2">
            Ver tabela de preços completa
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
