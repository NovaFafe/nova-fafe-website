import { Users } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-50 overflow-hidden">
      {/* Top Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/20 blur-xl" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent lg:from-white/80" />

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/10 blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent lg:from-white/80" />

      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] select-none flex items-start justify-center pt-20">
        <span className="text-[20rem] font-black leading-none">25</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/driving-instructor-teaching-student.jpg"
                alt="Instrutor da NOVAFAFE a ensinar um aluno"
                className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Experience Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg text-white shrink-0">
                  <span className="text-xl font-bold">25</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground leading-tight">Anos de Compromisso</div>
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Com a sua segurança</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold mb-6">
                <Users className="h-3.5 w-3.5" />
                <span>A Nossa História</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-6">
                Mais de Duas Décadas a Formar <span className="text-primary">Bons Condutores</span>
                <span className="block text-sm font-bold text-primary/40 mt-2 uppercase tracking-[0.2em]">Desde 1999</span>
              </h2>
              
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Fundada com o objetivo de elevar o padrão do ensino da condução em Fafe, a 
                  <strong className="text-foreground"> NOVAFAFE</strong> tornou-se uma referência 
                  pela sua dedicação e resultados.
                </p>
                <p>
                  Acreditamos que aprender a conduzir é mais do que passar num exame; é adquirir 
                  competências para uma vida inteira de segurança na estrada.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button className="group relative overflow-hidden px-6 py-3 bg-foreground text-white rounded-lg font-bold hover:bg-foreground/90 transition-all active:scale-95 text-sm cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                Conheça a Nossa Equipa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
