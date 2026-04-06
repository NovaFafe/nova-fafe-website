import { MapPin, Award, Users, TrendingUp, Star, ArrowRight, Wallet } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0">
        <img
          src="/NovaFafe-Facebook/Veiculos/Fundo_Banner.jpeg"
          alt="Escola de condução NOVAFAFE"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent h-32" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 tracking-tight">
              Conduz o teu futuro. <span className="text-primary">Começa na NOVAFAFE.</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl font-light">
              Na Escola de Condução <strong>NOVAFAFE</strong>, em Fafe, acreditamos que tirar a carta deve ser um processo de confiança e segurança. Com uma abordagem moderna e personalizada, preparamos os nossos alunos para todos os desafios da estrada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all text-base shadow-xl shadow-primary/30 active:scale-[0.98]"
              >
                Fala Connosco
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Escola+de+Condução+Novafafe+Rua+da+Cumieira+Fafe"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/40 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white hover:-translate-y-0.5 backdrop-blur-md transition-all text-base shadow-xl shadow-primary/10 active:scale-[0.98]"
              >
                <MapPin className="h-5 w-5" />
                <span>Ver Localização</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Bottom */}
      <div className="relative z-10 border-t border-border/50 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { value: "Faseado", label: "Pagamento Facilitado", icon: Wallet },
              { value: "Elevada", label: "Taxa de Sucesso", icon: TrendingUp },
              { value: "Flexível", label: "Horário Pós-Laboral", icon: Star },
              { value: "Moderna", label: "Frota de Veículos", icon: Users },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 py-6 px-4 lg:justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-none mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
