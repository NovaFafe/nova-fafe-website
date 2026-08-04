import { Car, Bike, Leaf } from "lucide-react"
import { FleetCard, type FleetItem } from "./fleet-card"

const ligeiros: FleetItem = {
  id: "cars",
  title: "Ligeiros Premium",
  description: "Mercedes Classe A e BMW Série 1. Viaturas recentes com toda a tecnologia que mereces.",
  icon: Car,
  imageDefault: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-frente.jpeg",
  imageHover: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-tras.jpeg",
  subLabel: "Categoria B",
  link: "/servicos#categoria-b",
}

const motociclos: FleetItem = {
  id: "bikes",
  title: "Motociclos",
  description: "Do iniciante ao avançado, com motociclos para as categorias A, A1 e A2.",
  icon: Bike,
  imageDefault: "/NovaFafe-Facebook/Veiculos/motociclos.jpeg",
  imageHover: "/NovaFafe-Facebook/Veiculos/mota-individual.jpeg",
  subLabel: "Categorias A, A1, A2",
  link: "/servicos#categoria-a",
}

const eletricos: FleetItem[] = [
  {
    id: "volvo",
    title: "Volvo EX30",
    description: "Compacto elétrico premium com design escandinavo e máxima segurança.",
    icon: Leaf,
    imageDefault: "/NovaFafe-Facebook/Veiculos/volvo-ex30-frente.jpg",
    imageHover: "/NovaFafe-Facebook/Veiculos/volvo-ex30-tras.jpg",
    subLabel: "Cat. B Elétrico",
    link: "/servicos#categoria-b",
  },
  {
    id: "yoyo",
    title: "XEV Yoyo",
    description: "100% elétrico — formação para quadriciclos (B1) e ciclomotores (AM).",
    icon: Bike,
    imageDefault: "/NovaFafe-Facebook/Veiculos/xev-yoyo-tras.jpeg",
    imageHover: "/NovaFafe-Facebook/Veiculos/xev-yoyo-interior.jpeg",
    subLabel: "Quadriciclos (B1) / ciclomotores (AM)",
    link: "/servicos#categoria-am",
  },
]

export function Fleet() {
  return (
    <section id="frota" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">
            Viaturas & equipamento
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[0.95] tracking-tight">
            A nossa <span className="text-primary">frota.</span>
          </h2>
          <p className="text-muted-foreground text-base font-light mt-3 max-w-lg">
            Viaturas modernas e seguras para formação prática em todas as categorias. Clica numa viatura para ver a categoria.
          </p>
        </div>

        {/* Bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-4 lg:gap-5">
          {/* Ligeiros — destaque à esquerda, altura total */}
          <FleetCard {...ligeiros} variant="featured" className="lg:row-span-2" />

          {/* Motociclos — topo direita */}
          <FleetCard {...motociclos} variant="compact" className="lg:col-start-2 lg:row-start-1" />

          {/* Elétricos — base direita, lado a lado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 lg:col-start-2 lg:row-start-2">
            {eletricos.map((item) => (
              <FleetCard key={item.id} {...item} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
