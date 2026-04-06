import { Users, Shield, Award, CheckCircle2, ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src="/NovaFafe-Facebook/Escola/mural.jpg"
                alt="Mural da NOVAFAFE"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
                Uma escola jovem <br />
                com espírito <span className="text-primary">inovador.</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fundada em 2018, a <strong className="text-foreground font-bold">NOVAFAFE</strong> nasceu para mudar a forma como se aprende a conduzir em Fafe. Deixamos para trás os métodos antiquados e focamo-nos no que realmente importa: a tua segurança e confiança.
                </p>
                <p>
                  Não somos apenas uma escola, somos uma equipa próxima. Aqui conhecemos o teu nome, as tuas dificuldades e celebramos contigo cada conquista.
                </p>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {[
                "Pedagogia paciente e adaptada ao teu ritmo",
                "Ambiente familiar e profissional",
                "Transparência total em preços e processos",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border">
              <a
                href="/sobre"
                className="group inline-flex items-center gap-3 text-foreground font-bold text-lg hover:text-primary transition-colors"
              >
                Conhece a nossa história
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
