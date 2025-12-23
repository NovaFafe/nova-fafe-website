import { Car, Bike, Truck, RefreshCw } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Carta de Ligeiros (Categoria B)",
    description:
      "Formação completa para condução de automóveis ligeiros. Aulas teóricas e práticas com instrutores certificados.",
    highlight: "Mais Procurado",
  },
  {
    icon: Bike,
    title: "Carta de Motociclo (Categoria A)",
    description:
      "Aprenda a conduzir motociclos com segurança. Equipamento de proteção fornecido e circuito de treino dedicado.",
    highlight: null,
  },
  {
    icon: Truck,
    title: "Carta de Pesados (Categoria C)",
    description: "Formação profissional para condução de veículos pesados. Inclui CAM e certificação completa.",
    highlight: null,
  },
  {
    icon: RefreshCw,
    title: "Mudança de Categoria",
    description:
      "Upgrade da sua carta de condução atual. Processo simplificado com acompanhamento personalizado e exames práticos.",
    highlight: null,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Nossos Serviços</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Formação Para Todas as Categorias</h2>
          <p className="text-muted-foreground">
            Cursos adaptados às suas necessidades com instrutores experientes e metodologia comprovada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-md p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              {service.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center text-xs font-bold py-1">
                  {service.highlight}
                </div>
              )}

              <div className={service.highlight ? "pt-4" : ""}>
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
