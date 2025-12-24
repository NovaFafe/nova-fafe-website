import { CheckCircle2, Shield, Clock, Users, Award, Headphones } from "lucide-react"

const advantages = [
  {
    icon: Award,
    title: "Ensino de Excelência",
    description: "Metodologia focada na aprendizagem real, preparando-o para qualquer situação na estrada.",
  },
  {
    icon: Clock,
    title: "Horários à Sua Medida",
    description: "Aulas teóricas e práticas disponíveis em horários flexíveis, incluindo pós-laboral.",
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Frota moderna equipada com os mais recentes sistemas de segurança ativa e passiva.",
  },
  {
    icon: Users,
    title: "Instrutores Pacientes",
    description: "Equipa experiente que entende o seu ritmo e ajuda a superar o nervosismo inicial.",
  },
  {
    icon: Headphones,
    title: "Suporte Administrativo",
    description: "Tratamos de toda a burocracia e documentação para que se foque apenas em aprender.",
  },
  {
    icon: CheckCircle2,
    title: "Pista de Treino Própria",
    description: "Espaço exclusivo para as primeiras manobras, garantindo confiança antes de ir para a estrada.",
  },
]

export function Advantages() {
  return (
    <section id="vantagens" className="relative py-16 lg:py-24 bg-primary/5 overflow-hidden">
      {/* Top Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/20 blur-xl" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent lg:from-white/80" />

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/10 blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent lg:from-white/80" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold mb-6">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Diferenciais</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              O Que Nos Torna a <span className="text-primary">Melhor Escolha?</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Focamo-nos na experiência do aluno e na qualidade da formação.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/[0.02] transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <advantage.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1 tracking-tight">{advantage.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/happy-student-with-driving-license.jpg"
                alt="Aluno feliz com carta de condução"
                className="w-full h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
