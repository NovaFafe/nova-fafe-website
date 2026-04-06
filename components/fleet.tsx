import { Car, Bike, Zap, ArrowUpRight, Leaf } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "cars",
    title: "Ligeiros Premium",
    description: "Mercedes Classe A e BMW Série 1. Viaturas recentes com toda a tecnologia que merece.",
    icon: Car,
    features: ["Categoria B", "Mercedes & BMW", "Assistência à Condução"],
    imageDefault: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-frente.jpeg",
    imageHover: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-tras.jpeg",
    subLabel: "Categoria B",
    link: "/servicos#ligeiros"
  },
  {
    id: "bikes",
    title: "Motociclos",
    description: "Do iniciante ao avançado, com motociclos para todas as categorias de carta.",
    icon: Bike,
    features: ["Cat. A, A1, A2", "Várias Cilindradas", "Equipamento Incluído"],
    imageDefault: "/NovaFafe-Facebook/Veiculos/motociclos.jpeg",
    imageHover: "/NovaFafe-Facebook/Veiculos/mota-individual.jpeg",
    subLabel: "Categorias A, A1, A2",
    link: "/servicos#motas"
  },
  {
    id: "volvo",
    title: "Volvo EX30",
    description: "Compacto elétrico premium com design escandinavo. Segurança, performance e sustentabilidade.",
    icon: Leaf,
    features: ["100% Elétrico", "Categoria B", "Design Premium"],
    imageDefault: "/NovaFafe-Facebook/Veiculos/Volvo-EX30-frente.jpg",
    imageHover: "/NovaFafe-Facebook/Veiculos/Volvo-EX30-tras.jpg",
    subLabel: "Categoria B Elétrico",
    link: "/servicos#eletricos"
  },
  {
    id: "electric",
    title: "Mobilidade Elétrica",
    description: "Citroën AMI 100% elétrico. O futuro da condução urbana, disponível já hoje.",
    icon: Zap,
    features: ["Quadriciclos / AM", "100% Elétrico", "Tecnologia Moderna"],
    imageDefault: "/NovaFafe-Facebook/Veiculos/citroen-ami-tras.jpeg",
    imageHover: "/NovaFafe-Facebook/Veiculos/interior-carro-citroen.jpeg",
    subLabel: "Quadriciclos / AM",
    link: "/servicos#eletricos"
  }
]

export function Fleet() {
  const [main, ...rest] = categories

  return (
    <section id="frota" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[0.95] tracking-tight">
            A nossa <span className="text-primary">frota.</span>
          </h2>
          <p className="text-muted-foreground text-base font-light mt-3">
            Viaturas modernas e seguras para todos os níveis de condução.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-4 lg:gap-5 auto-rows-max">

          {/* Main card — tall */}
          <Link
            href={main.link}
            className="group relative rounded-3xl overflow-hidden block bg-gray-900 min-h-[480px] lg:min-h-0 lg:row-span-2"
          >
            <img src={main.imageDefault} alt={main.title}
              className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-90 scale-105 group-hover:scale-100 group-hover:opacity-0 transition-all duration-700" loading="lazy" />
            <img src={main.imageHover} alt={main.title}
              className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-90 scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="inline-flex items-center gap-1.5 mb-4">
                <main.icon className="h-4 w-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                <span className="text-sm font-semibold text-white tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">{main.subLabel}</span>
              </div>
              <h3 className="text-4xl font-black text-white leading-tight tracking-tight mb-2 drop-shadow-lg">{main.title}</h3>
              <p className="text-base text-white/75 leading-relaxed font-light max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-500">{main.description}</p>
              <div className="mt-5 h-px w-8 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </Link>

          {/* Secondary cards — stacked */}
          {rest.map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group relative rounded-3xl overflow-hidden block bg-gray-900 min-h-[280px]"
            >
              <img src={cat.imageDefault} alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-90 scale-105 group-hover:scale-100 group-hover:opacity-0 transition-all duration-700" loading="lazy" />
              <img src={cat.imageHover} alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-90 scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex items-center gap-1.5 mb-2">
                  <cat.icon className="h-4 w-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                  <span className="text-sm font-semibold text-white tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">{cat.subLabel}</span>
                </div>
                <h3 className="text-2xl font-black text-white leading-tight tracking-tight mb-1 drop-shadow-lg">{cat.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed font-light max-h-0 group-hover:max-h-12 overflow-hidden transition-all duration-500">{cat.description}</p>
                <div className="mt-3 h-px w-6 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}
