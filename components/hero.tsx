import { Phone, MapPin, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pb-32">
      <div className="absolute inset-0">
        <img
          src="/professional-driving-school-car-on-portuguese-road.jpg"
          alt="Carro da escola de condução"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/98 to-white/85" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Escola de Condução Certificada em Fafe
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up">
            A Sua Carta de Condução <span className="text-primary block mt-2">Começa Aqui</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up delay-100">
            Formação de excelência com instrutores experientes, veículos modernos e uma metodologia focada no seu
            sucesso. Junte-se aos milhares de condutores que confiaram na NOVAFAFE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up delay-200">
            <a
              href="tel:253504130"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span>Ligar Agora: 253 504 130</span>
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted/50 transition-all duration-300 hover:border-primary/30"
            >
              Pedir Informações
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 animate-fade-up delay-300">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Localização</p>
                <p className="text-sm text-muted-foreground">Av. João Paulo II, Fafe</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Horário</p>
                <p className="text-sm text-muted-foreground">Flexível e Adaptado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: "20+", label: "Anos de Experiência" },
              { value: "5000+", label: "Alunos Formados" },
              { value: "95%", label: "Taxa de Aprovação" },
              { value: "4.9★", label: "Avaliação Média" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
