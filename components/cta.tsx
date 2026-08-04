import { ArrowRight, MapPin } from "lucide-react"
import { SectionLink } from "@/components/section-link"

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-950 border-t border-white/5">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NovaFafe-Facebook/Escola/decoracao.jpg" 
          className="h-full w-full object-cover opacity-10 transition-transform duration-[10000ms] hover:scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                 Tira a carta com <br className="hidden sm:block" /> quem <span className="text-primary italic font-serif">te entende.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed font-light max-w-xl">
                 Na NOVAFAFE, não és apenas um número. Entendemos as tuas dificuldades, adaptamo-nos ao teu ritmo e celebramos cada vitória contigo.
              </p>
            </div>

            <div className="pt-2">
              <SectionLink href="/contacto">
                Fala Connosco
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>
          </div>

          <div className="hidden lg:block relative">
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
