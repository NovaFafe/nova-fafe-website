"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Categoria B",
    subtitle: "Carta de Ligeiros",
    price: "Desde 600€",
    features: ["28 aulas práticas", "Aulas teóricas incluídas", "Material didático", "Exame teórico e prático"],
    popular: true,
  },
  {
    name: "Categoria A",
    subtitle: "Carta de Motociclo",
    price: "Desde 500€",
    features: ["20 aulas práticas", "Equipamento fornecido", "Circuito de treino", "Exames incluídos"],
    popular: false,
  },
  {
    name: "Categoria C",
    subtitle: "Carta de Pesados",
    price: "Consultar",
    features: ["32 aulas práticas", "CAM incluído", "Formação específica", "Certificação completa"],
    popular: false,
  },
]

export function PricingPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Preços Transparentes</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Invista no Seu <span className="text-primary">Futuro</span>
          </h2>
          <p className="text-muted-foreground">
            Valores competitivos e opções de pagamento flexíveis para todas as categorias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white border rounded-md p-6 lg:p-8 hover:shadow-lg transition-all duration-300 ${
                plan.popular ? "border-primary ring-2 ring-primary ring-offset-2 scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="text-3xl font-black text-primary">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/precos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 font-semibold group">
              Ver Todos os Preços
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
