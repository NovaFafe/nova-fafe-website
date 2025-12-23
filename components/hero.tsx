import { Phone, MapPin, Clock, Award, Users, TrendingUp, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-white flex flex-col lg:block">
      {/* Mobile Image Section */}
      <div className="lg:hidden relative h-[45vh] w-full overflow-hidden">
        <img
          src="/professional-driving-school-car-on-portuguese-road.jpg"
          alt="Carro da escola de condução"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Desktop Background Image */}
      <div className="hidden lg:block absolute inset-0">
        <img
          src="/professional-driving-school-car-on-portuguese-road.jpg"
          alt="Carro da escola de condução"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 lg:to-white/50" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto lg:min-h-[70vh] flex items-center">
        <div className="w-full px-6 sm:px-8 lg:px-12 pt-12 pb-24 lg:pt-20 lg:pb-32 bg-white lg:bg-transparent rounded-t-2xl lg:rounded-none shadow-lg lg:shadow-none">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-primary text-xs font-bold mb-6">
              <Award className="h-3.5 w-3.5" />
              <span>Escola de Condução Certificada</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              A Sua Carta de Condução{" "}
              <span className="text-primary">Começa Aqui</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Formação de excelência com instrutores experientes e veículos modernos. 
              Junte-se aos milhares de condutores que confiaram na NOVAFAFE.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="tel:253504130"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/10 active:scale-95 text-sm cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <Phone className="h-4 w-4" />
                <span>Ligar: 253 504 130</span>
              </a>
              <a
                href="/contacto"
                className="group relative overflow-hidden inline-flex items-center justify-center px-5 py-3 bg-white border border-border text-foreground font-bold rounded-lg hover:bg-muted transition-all active:scale-95 text-sm cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                Pedir Informações
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Absolute Positioned on the edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              { value: "25+", label: "Anos de Experiência", icon: Award },
              { value: "5000+", label: "Alunos Formados", icon: Users },
              { value: "95%", label: "Taxa de Aprovação", icon: TrendingUp },
              { value: "4.9", label: "Avaliação Média", icon: Star },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 lg:p-5 rounded-xl shadow-xl border border-border/50 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-lg text-primary mb-2 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-4 w-4 lg:h-5 lg:h-5" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-[9px] lg:text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
