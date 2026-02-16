import { CheckCircle2, Shield, Users, Award, MapPin, Zap } from "lucide-react"

const advantages = [
  {
    icon: Zap,
    title: "Ensino Moderno",
    description: "Foco na facilidade de aprendizagem com métodos atuais.",
  },
  {
    icon: Users,
    title: "Equipa Qualificada",
    description: "Instrutores dedicados e experientes ao seu lado.",
  },
  {
    icon: MapPin,
    title: "Localização Prática",
    description: "Instalações modernas na Rua da Cumieira, em Fafe.",
  },
  {
    icon: Shield,
    title: "Frota Recente",
    description: "Aprenda em viaturas seguras e confortáveis.",
  },
]

export function Advantages() {
  return (
    <section id="vantagens" className="py-16 lg:py-24 bg-gray-50 overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Intro */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/20 rounded-full" />
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
                Porque os alunos preferem a <span className="text-primary border-b-4 border-primary/10">NOVAFAFE.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Mais do que tirar a carta, garantimos que se torna um condutor seguro, num ambiente que respeita o seu tempo e as suas necessidades.
            </p>
          </div>

          {/* Right Column: Grid of Advantages */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {advantages.map((advantage, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/80 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500 shadow-inner">
                    <advantage.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
