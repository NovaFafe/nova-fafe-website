import Image from "next/image"
import Link from "next/link"
import { MapPin, TrendingUp, Calendar, CarFront, Wallet, ArrowRight, MessageCircle } from "lucide-react"

const stats = [
  { value: "89%", label: "Aprovação IMT", hint: "exame prático · 2021", icon: TrendingUp },
  { value: "2018", label: "Desde", hint: "em Fafe", icon: Calendar },
  { value: "9+", label: "Categorias", hint: "B, A, AM e mais", icon: CarFront },
  { value: "Faseado", label: "Pagamento", hint: "sem surpresas", icon: Wallet },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/NovaFafe-Facebook/Veiculos/fundo-banner.jpeg"
          alt="Escola de condução NOVAFAFE em Fafe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-transparent" />
      </div>

      {/* Content — pt compensa header fixo (top bar + nav) */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Conduz o teu futuro. <span className="text-primary">Começa na NOVAFAFE.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4 max-w-2xl font-light">
              Ligeiros, motos, pesados e formação TCC/CAM — com horário flexível e acompanhamento personalizado em Fafe.
            </p>
            <p className="text-sm text-white/70 mb-10">
              Licenciada pelo IMT (n.º 1416), em Fafe desde 2018.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors text-sm"
              >
                <MessageCircle size={16} strokeWidth={2} />
                Fala Connosco
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="https://maps.app.goo.gl/mZE7x4AASsmaHKB4A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full border border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-colors"
              >
                <MapPin size={16} strokeWidth={2} />
                Ver Localização
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-auto">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="bg-white/95 backdrop-blur-xl border-t border-white/60 shadow-[0_-8px_32px_-8px_rgba(0,0,0,0.08)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={[
                    "group relative flex items-center gap-3 sm:gap-4 py-6 sm:py-7 px-4 sm:px-5 lg:px-6 transition-colors hover:bg-primary/[0.03]",
                    index % 2 === 0 ? "border-r border-border/50" : "",
                    index < 2 ? "border-b border-border/50 lg:border-b-0" : "",
                    index < stats.length - 1 ? "lg:border-r lg:border-border/50" : "",
                  ].join(" ")}
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20 transition-colors duration-300">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xl sm:text-2xl lg:text-[1.65rem] font-black text-foreground tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-foreground/70">
                      {stat.label}
                    </div>
                    {stat.hint && (
                      <div className="mt-0.5 text-[10px] text-muted-foreground/80 truncate hidden sm:block">
                        {stat.hint}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
