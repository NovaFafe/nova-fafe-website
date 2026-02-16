import { ArrowRight, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-primary mix-blend-multiply"
        style={{
          backgroundImage: 'url("/NovaFafe-Facebook/Escola/decoracao.jpg")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Absolute Solid Green Multiply Overlay */}
      <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-80" />
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          Estás Pronto para{" "}
          <span className="text-white/90">Assumir o Volante?</span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-10">
          Faz como milhares de alunos e começa hoje a tua formação na Escola de Condução NOVAFAFE. O teu sucesso na estrada começa aqui.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-white/95 transition-all shadow-xl active:scale-95 text-base cursor-pointer"
          >
            Inscrever Agora
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:253504130"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 backdrop-blur-md transition-all active:scale-95 text-base cursor-pointer"
          >
            <Phone className="h-5 w-5" />
            253 504 130
          </a>
        </div>
      </div>
    </section>
  )
}
