import { Check, Phone } from "lucide-react"

const packages = [
  {
    name: "Pacote Código",
    description: "Ideal para quem só precisa de preparação teórica",
    price: "Consultar",
    features: [
      "Acesso às aulas teóricas",
      "Material didático incluído",
      "Testes de código ilimitados",
      "Horários flexíveis",
      "Apoio personalizado",
    ],
    popular: false,
  },
  {
    name: "Pacote Completo",
    description: "Formação completa para carta de automóvel",
    price: "Consultar",
    features: [
      "Aulas teóricas incluídas",
      "32 aulas práticas",
      "Material didático",
      "Marcação de exames",
      "Seguro incluído",
      "Acompanhamento total",
    ],
    popular: true,
  },
  {
    name: "Aulas Avulsas",
    description: "Para quem precisa de aulas adicionais",
    price: "Consultar",
    features: [
      "Aulas práticas individuais",
      "Horário à escolha",
      "Instrutor dedicado",
      "Veículo moderno",
      "Flexibilidade total",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Preços</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Pacotes de Formação</h2>
          <p className="text-muted-foreground">
            Oferecemos diferentes opções adaptadas às tuas necessidades e orçamento. Contacta-nos para um
            orçamento personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded border p-6 lg:p-8 ${
                pkg.popular ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-card hover:border-primary/30"
              } transition-colors`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded">Mais Popular</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-primary">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/351968268951"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <Phone className="h-4 w-4" />
                Peça Orçamento Personalizado
              </a>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Opções de pagamento faseado disponíveis. Possibilidade de promoções para estudantes.
            <br />
            Contacta-nos para mais informações sobre preços e condições.
          </p>
        </div>
      </div>
    </section>
  )
}
