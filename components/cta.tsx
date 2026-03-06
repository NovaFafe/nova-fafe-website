import { ArrowRight, Phone, MapPin } from "lucide-react"

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
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">Pronto para começar?</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                 Tira a carta com <br className="hidden sm:block" /> quem <span className="text-primary italic font-serif">te entende.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed font-light max-w-xl">
                 Na NOVAFAFE, não és apenas um número. Entendemos as tuas dificuldades, adaptamo-nos ao teu ritmo e celebramos cada vitória contigo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contacto"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-0.5 active:scale-[0.98] text-base cursor-pointer"
              >
                Pedir Orçamento Grátis
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+351253095892"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-0.5 active:scale-[0.98] text-base cursor-pointer"
              >
                <Phone className="h-4 w-4 text-primary" />
                253 095 892
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary/50 bg-gray-200 overflow-hidden shadow-xl">
                       <img src={`/NovaFafe-Facebook/Aprovados/${i}.jpg`} alt="Aluno Aprovado" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <p className="text-sm text-white/50 font-medium">
                  Junta-te aos +1000 alunos aprovados em Fafe.
               </p>
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
