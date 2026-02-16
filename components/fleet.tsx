import { Car, Bike, Zap, Info } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "cars",
    title: "Ligeiros Premium",
    description: "Aprenda ao volante das melhores marcas. A nossa frota de ligeiros é composta por viaturas recentes Mercedes Classe A e BMW Série 1.",
    icon: Car,
    features: ["Ar Condicionado", "Sensores de Estacionamento", "Assistência à Condução"],
    imageDefault: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-frente.jpeg",
    // Voltando a colocar a traseira nos ligeiros para libertar o interior
    imageHover: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-tras.jpeg",
    subLabel: "Categoria B",
    link: "/servicos#ligeiros"
  },
  {
    id: "bikes",
    title: "Motociclos",
    description: "Do iniciante ao avançado. Dispomos de uma gama variada de motociclos para todas as categorias de carta (A, A1, A2).",
    icon: Bike,
    features: ["Várias Cilindradas", "Equipamento de Proteção", "Acompanhamento Dedicado"],
    imageDefault: "/NovaFafe-Facebook/Veiculos/motociclos.jpeg",
    imageHover: "/NovaFafe-Facebook/Veiculos/mota-individual.jpeg",
    subLabel: "Categorias A, A1, A2",
    link: "/servicos#motas"
  },
  {
    id: "electric",
    title: "Mobilidade Elétrica",
    description: "O futuro da condução urbana. Conheça o nosso Citroën AMI, 100% elétrico, ideal para a nova geração de condutores.",
    icon: Zap,
    features: ["100% Elétrico", "Fácil de Conduzir", "Tecnologia Moderna"],
    imageDefault: "/NovaFafe-Facebook/Veiculos/citroen-ami-tras.jpeg",
    // Colocando o interior aqui conforme pedido
    imageHover: "/NovaFafe-Facebook/Veiculos/interior-carro-citroen.jpeg",
    subLabel: "Quadriciclos / AM",
    link: "/servicos#eletricos"
  }
]

export function Fleet() {
  return (
    <section id="frota" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            A nossa <span className="text-primary">Frota</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Qualidade, segurança e conforto. Escolhemos os melhores veículos para garantir a melhor aprendizagem.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.link}
              className="group flex flex-col bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container with Hover Switch Effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                {/* Default Image - stays visible to prevent holes properly */}
                <img
                  src={cat.imageDefault}
                  alt={`${cat.title} - Vista Principal`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Hover Image - simple fade in on top */}
                <img
                  src={cat.imageHover}
                  alt={`${cat.title} - Vista Detalhada`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm z-10">
                  {cat.subLabel}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                  {cat.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-6 border-t border-gray-100">
                  {cat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
