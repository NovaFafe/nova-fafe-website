import { ArrowRight, MapPin } from "lucide-react"
import { SectionLink } from "@/components/section-link"

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gray-950 py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 z-0 hidden sm:block">
        <img
          src="/NovaFafe-Facebook/Escola/decoracao.jpg"
          className="h-full w-full object-cover opacity-10 transition-transform duration-[10000ms] hover:scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 sm:space-y-8">
            <div className="section-heading lg:text-left">
              <h2 className="mb-4 text-3xl font-black leading-[1.1] tracking-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
                Tira a carta com <br className="hidden sm:block" /> quem{" "}
                <span className="font-serif italic text-primary">te entende.</span>
              </h2>
              <p className="section-heading-desc mx-auto max-w-xl text-base font-light leading-relaxed text-white/60 sm:mx-0 sm:text-lg">
                Na NOVAFAFE, não és apenas um número. Entendemos as tuas dificuldades, adaptamo-nos ao teu ritmo e celebramos cada vitória contigo.
              </p>
            </div>

            <div className="flex justify-center pt-1 lg:justify-start">
              <SectionLink href="/contacto">
                Fala Connosco
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Background accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl transition-all duration-700">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-bold text-xl text-white">Visita-nos em Fafe</span>
                </div>
                <p className="text-white/70 text-base font-light leading-relaxed mb-6 italic">
                  "Ambiente organizado, métodos de ensino fantásticos, receção e instrutores empenhados e uma excelente dinâmica de ensino. Fui aprovado <span className="underline decoration-white/60 underline-offset-4 decoration-2 text-white">de primeira</span> com <strong className="text-white font-bold">38/40</strong> no exame de código de A+B em cerca de 1 mês e meio de dedicação. Excelente escola de condução"
                </p>
                <div className="h-0.5 w-12 bg-primary/40 rounded-full" />
                <div className="mt-4">
                   <p className="text-white text-sm font-bold">José Roberto</p>
                   <p className="text-white/40 text-xs">Aprovado Categoria A</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
