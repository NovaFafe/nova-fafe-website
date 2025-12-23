import { Car, Bike, Truck, RefreshCw, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Carta de Ligeiros",
    subtitle: "Categoria B",
    description: "Aulas teóricas e práticas completas para automóveis ligeiros.",
    highlight: "Mais Popular",
  },
  {
    icon: Bike,
    title: "Carta de Motociclo",
    subtitle: "Categoria A",
    description: "Aprenda a conduzir motociclos com segurança e confiança.",
    highlight: null,
  },
  {
    icon: Truck,
    title: "Carta de Pesados",
    subtitle: "Categoria C",
    description: "Formação profissional completa para veículos pesados e CAM.",
    highlight: null,
  },
  {
    icon: RefreshCw,
    title: "Revalidação",
    subtitle: "Mudança de Categoria",
    description: "Processo simplificado para upgrade ou renovação da sua carta.",
    highlight: null,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
            <Car className="h-4 w-4" />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-8 leading-tight">
            Formação Para Todas as <span className="text-primary">Categorias</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cursos adaptados às suas necessidades com instrutores experientes e metodologia comprovada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:-translate-y-2 flex flex-col"
            >
              {service.highlight && (
                <div className="absolute -top-3 right-8 bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
                  {service.highlight}
                </div>
              )}

              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-3">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>

              <div className="mb-6">
                <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2">{service.subtitle}</p>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">{service.title}</h3>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              <div className="flex items-center text-primary font-bold text-sm group-hover:gap-3 transition-all cursor-pointer gap-2">
                Saber mais <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
