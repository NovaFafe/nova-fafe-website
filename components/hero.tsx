import Image from "next/image"
import Link from "next/link"
import { MapPin, TrendingUp, Calendar, CarFront, Wallet, ArrowRight, MessageCircle } from "lucide-react"

const stats = [
  { value: "89%", label: "Aprovação IMT", icon: TrendingUp },
  { value: "2018", label: "Desde", icon: Calendar },
  { value: "9+", label: "Categorias", icon: CarFront },
  { value: "Faseado", label: "Pagamento", icon: Wallet },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[85svh] flex-col sm:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/NovaFafe-Facebook/Veiculos/fundo-banner.jpeg"
          alt="Escola de condução NOVAFAFE em Fafe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 sm:hidden" />
      </div>

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-7 pb-10 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-36">
          <div className="mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">
            <h1 className="mb-4 text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:mb-6 sm:text-6xl sm:leading-tight lg:text-7xl">
              Conduz o teu futuro.{" "}
              <span className="text-primary">Começa na NOVAFAFE.</span>
            </h1>

            <p className="mx-auto mb-3 max-w-2xl text-base font-light leading-relaxed text-white/80 sm:mx-0 sm:mb-4 sm:text-xl">
              Ligeiros, motos, pesados e formação TCC/CAM — com horário flexível e acompanhamento personalizado em Fafe.
            </p>
            <p className="mb-8 text-sm text-white/70 sm:mb-10">
              Licenciada pelo IMT (n.º 1416), em Fafe desde 2018.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-start">
              <Link
                href="/contacto"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                <MessageCircle size={16} strokeWidth={2} />
                Fala Connosco
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://maps.app.goo.gl/mZE7x4AASsmaHKB4A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/20"
              >
                <MapPin size={16} strokeWidth={2} />
                Ver Localização
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full bg-zinc-100">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-2 py-2.5 sm:flex-row sm:justify-center sm:gap-2 sm:py-3"
            >
              <stat.icon className="mb-1 hidden h-3.5 w-3.5 shrink-0 text-zinc-400 sm:mb-0 sm:block" strokeWidth={2} />
              <div className="text-center sm:text-left">
                <div className="text-sm font-bold tabular-nums leading-none text-zinc-800 sm:text-base">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-zinc-500 sm:text-[10px]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
