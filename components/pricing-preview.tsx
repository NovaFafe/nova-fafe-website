import { Check, ArrowRight } from "lucide-react"
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
    name: "Categoria AM",
    subtitle: "Carta de Ciclomotor",
    price: "Sob Consulta",
    period: "",
    features: ["A partir dos 14 anos", "Veículos até 45 km/h", "Processo rápido e acessível", "Aulas teóricas e práticas"],
    popular: false,
  },
  {
    name: "Recuperação",
    subtitle: "Curso AVF — Pontos",
    price: "Sob Consulta",
    period: "",
    features: ["Recupera até 3 pontos", "Turmas reduzidas", "Certificado IMT emitido", "Horários flexíveis"],
    popular: false,
  },
]

export function PricingPreview() {
  return (
    <section id="precos" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
            <span>Nossos Cursos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
            Formação Para Todas as{" "}
            <span className="text-primary">Categorias</span>
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Preços transparentes, sem surpresas. Escolha o plano ideal para si.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-7 transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "border-2 border-primary shadow-xl shadow-primary/10 lg:scale-[1.03] z-10"
                  : "border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-black text-foreground mb-1">{plan.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-foreground tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground font-medium">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contacto"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-2xl text-sm transition-all active:scale-95 cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Saber Mais
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/precos"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-sm transition-all group"
          >
            Ver tabela de preços completa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
