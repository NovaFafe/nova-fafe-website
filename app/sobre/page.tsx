import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Shield, Star, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "A Escola - NOVAFAFE Escola de Condução",
  description: "Conheça a história e valores da NOVAFAFE, a escola de condução de referência em Fafe desde 2018.",
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Page Hero */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/NovaFafe-Facebook/Escola/mural.jpg"
            alt="Mural da NOVAFAFE"
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Conheça a nossa história
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
              Uma escola moderna com um <span className="text-primary italic font-medium">legado de confiança.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              Nascemos para transformar a aprendizagem na estrada. Na NOVAFAFE, combinamos tecnologia, proximidade e paixão por ensinar.
            </p>
          </div>
        </div>
      </section>

      {/* History & Story Section */}
      <section className="py-24 lg:py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 group">
                    <img
                        src="/NovaFafe-Facebook/Escola/mural.jpg"
                        alt="Escola NOVAFAFE"
                        className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                            <p className="text-white text-lg font-medium italic">"Ensinar não é apenas passar regras, é construir condutores conscientes e seguros."</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Mais do que uma escola, uma <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-4">família.</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    A <strong className="text-foreground font-bold">NOVAFAFE</strong> nasceu em 2018 com o propósito de redefinir o setor da formação automóvel em Fafe. A nossa missão foi clara desde o primeiro dia: criar um ambiente onde o aluno se sinta em casa, removendo o stress associado ao processo de tirar a carta.
                  </p>
                  <p>
                    Ao longo destes anos, crescemos não apenas em número de alunos, mas em qualidade de ensino. Investimos constantemente em novas tecnologias e metodologias pedagógicas que facilitam a compreensão teórica e a destreza prática.
                  </p>
                </div>
              </div>

              {/* Stats/Values Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Star, title: "Foco no Aluno", desc: "Cada percurso de aprendizagem é único e adaptado ao seu ritmo." },
                  { icon: Shield, title: "Segurança Total", desc: "Veículos modernos e instrutores experientes para sua tranquilidade." },
                  { icon: Sparkles, title: "Inovação", desc: "Simuladores e ferramentas digitais para facilitar o teu estudo." },
                  { icon: Users, title: "Equipa Próxima", desc: "Instrutores pacientes que celebram cada vitória contigo." },
                ].map((item, i) => (
                  <div key={i} className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities/Gallery Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
                    As Nossas <span className="text-primary italic">Instalações</span>
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Preparadas para oferecer o máximo conforto e as melhores ferramentas para a tua aprendizagem.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Main Feature Image */}
                <div className="md:col-span-2 relative group rounded-3xl overflow-hidden h-[400px] lg:h-[500px] shadow-lg">
                    <img 
                        src="/NovaFafe-Facebook/Escola/sala-de-aula.jpg" 
                        alt="Sala de Aula NOVAFAFE"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-10 left-10">
                        <div className="bg-primary/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Formação Teórica</div>
                        <h3 className="text-3xl font-bold text-white mb-2">Salas de Aula Modernas</h3>
                        <p className="text-white/80 max-w-md font-light">Onde a teoria ganha vida com sistemas multimédia de última geração.</p>
                    </div>
                </div>

                {/* Second Feature Image */}
                <div className="relative group rounded-3xl overflow-hidden h-[400px] lg:h-[500px] shadow-lg">
                    <img 
                        src="/NovaFafe-Facebook/Escola/sala-de-simulados.jpg" 
                        alt="Simuladores NOVAFAFE"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-10">
                        <div className="bg-primary/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Prática Antecipada</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Área de Simulados</h3>
                        <p className="text-white/80 font-light">Reduz a ansiedade inicial com a preparação tecnológica.</p>
                    </div>
                </div>

                {/* Third Image */}
                <div className="relative group rounded-3xl overflow-hidden h-[350px] shadow-lg">
                    <img 
                        src="/NovaFafe-Facebook/Escola/balcao.jpg" 
                        alt="Receção NOVAFAFE"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-8 left-8">
                        <h3 className="text-xl font-bold text-white">Receção & Apoio</h3>
                        <p className="text-white/70 text-sm font-light">Sempre prontos para te ajudar em toda a burocracia.</p>
                    </div>
                </div>

                {/* Fourth Image */}
                <div className="md:col-span-2 relative group rounded-3xl overflow-hidden h-[350px] shadow-lg">
                    <img 
                        src="/NovaFafe-Facebook/Escola/decoracao.jpg" 
                        alt="Ambiente da Escola"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-8 left-8">
                        <h3 className="text-xl font-bold text-white">Ambiente Acollhedor</h3>
                        <p className="text-white/70 text-sm font-light">Desenhamos a escola para que te sintas relaxado e focado.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA - Full Length Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-gray-900 border-t border-white/5">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
              <img 
                  src="/NovaFafe-Facebook/Escola/mural.jpg" 
                  alt="Fundo NOVAFAFE"
                  className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <div className="text-left">
                      <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1] tracking-tight mb-8">
                          O teu futuro <br className="hidden sm:block" />
                          no <span className="text-white/40 italic font-light">volante.</span>
                      </h2>
                      <p className="text-white/80 text-xl lg:text-2xl max-w-xl mb-12 font-light leading-relaxed">
                          Não esperes mais para conquistar a tua liberdade. Estamos prontos para te ensinar com as melhores ferramentas e a melhor equipa de Fafe.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-5">
                          <a href="/contacto" className="px-12 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-2xl active:scale-95 text-xl flex items-center justify-center gap-3">
                              Pedir Orçamento Grátis
                              <ArrowRight className="h-6 w-6" />
                          </a>
                          <a href="tel:+351253095892" className="px-12 py-5 bg-white/10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 backdrop-blur-md transition-all active:scale-95 text-xl text-center">
                              253 095 892
                          </a>
                      </div>
                  </div>

                  <div className="hidden lg:block">
                      <div className="relative">
                          {/* Decorative floating proof of approval */}
                          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[3rem] shadow-2xl transform hover:scale-105 transition-transform duration-700">
                               <div className="flex items-center gap-6 mb-8">
                                   <div className="flex -space-x-4">
                                       {[1,2,3,4].map(i => (
                                           <div key={i} className="w-14 h-14 rounded-full border-4 border-primary/50 overflow-hidden bg-gray-200">
                                               <img src={`/NovaFafe-Facebook/Aprovados/${i}.jpg`} alt="Aluno Aprovado" className="w-full h-full object-cover" />
                                           </div>
                                       ))}
                                   </div>
                                   <div>
                                       <p className="text-white font-black text-2xl leading-none">+1.000</p>
                                       <p className="text-white/60 text-sm font-medium uppercase tracking-widest mt-1">Alunos Aprovados</p>
                                   </div>
                               </div>
                               <p className="text-white/80 text-lg leading-relaxed font-light italic">
                                   "A NOVAFAFE mudou a minha vida. Pensava que nunca ia tirar a carta, mas com esta equipa foi fácil!"
                               </p>
                               <p className="text-white font-bold mt-4">— João M., Aluno satisfeito</p>
                          </div>
                          
                          {/* Elements behind for depth */}
                          <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary rounded-full blur-3xl opacity-50" />
                          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  )
}
