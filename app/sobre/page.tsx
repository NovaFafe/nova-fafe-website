import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Shield, Star, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "A Escola - NOVAFAFE Escola de Condução",
  description: "Conhece a história e valores da NOVAFAFE, a escola de condução de referência em Fafe desde 2018.",
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Hero */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-36 lg:pt-44 pb-16 lg:pb-24">

            {/* Left — Copy */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-8 uppercase tracking-widest">
                <a href="/" className="hover:text-white transition-colors">Início</a>
                <span>·</span>
                <span className="text-primary">A Escola</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
                A escola que<br />
                <span className="text-primary">te entende.</span>
              </h1>

              <p className="text-base text-zinc-400 leading-relaxed max-w-md font-light mb-10">
                Fundada em Fafe em 2018, somos uma equipa que conhece o teu nome, respeita o teu ritmo e celebra contigo cada conquista na estrada.
              </p>

              <div className="flex items-center gap-8 pt-8 border-t border-zinc-800">
                {[
                  { value: "+1000", label: "Aprovados" },
                  { value: "7+", label: "Anos" },
                  { value: "3", label: "Categorias" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-white leading-none">{s.value}</div>
                    <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                <img
                  src="/NovaFafe-Facebook/Escola/mural.jpg"
                  alt="Escola NOVAFAFE"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
              </div>
              {/* Small floating image */}
              <div className="absolute -bottom-6 -left-6 w-40 h-28 rounded-xl overflow-hidden border-4 border-zinc-950 shadow-2xl">
                <img
                  src="/NovaFafe-Facebook/Escola/sala-de-aula.jpg"
                  alt="Sala de aula"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* History & Story Section */}
      <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border group">
                    <img
                        src="/NovaFafe-Facebook/Veiculos/bmw-mercedes-frente.jpeg"
                        alt="Frota NOVAFAFE — BMW e Mercedes"
                        className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
            </div>

            {/* Content Side */}
            <div className="space-y-10">
              <div className="space-y-5">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Uma escola onde <span className="text-primary">o aluno importa.</span>
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Tirar a carta pode ser stressante. Sabemos isso — e foi precisamente por isso que a <strong className="text-foreground font-bold">NOVAFAFE</strong> foi criada de forma diferente: sem filas, sem pressão, sem instrutores impacientes. Uma escola onde te sentes à vontade para errar, perguntar e evoluir.
                  </p>
                  <p>
                    Temos frota moderna, instalações confortáveis e uma equipa que te acompanha do primeiro dia de código até ao exame prático.
                  </p>
                </div>
              </div>

              {/* Concrete differentiators */}
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle2, text: "Frota BMW e Mercedes — viaturas recentes e tecnológicas" },
                  { icon: CheckCircle2, text: "Simulador de condução para preparação sem stress" },
                  { icon: CheckCircle2, text: "Horário pós-laboral e fins de semana" },
                  { icon: CheckCircle2, text: "Apoio total no processo IMT e exames médicos" },
                  { icon: CheckCircle2, text: "Pagamento faseado, sem surpresas" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 lg:py-28 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">A nossa história</span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight tracking-tight">
              Anos de <span className="text-primary">conquistas.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { year: "2018", label: "Abertura", desc: "Abrimos em Fafe com o objetivo de tornar o ensino da condução mais humano e acessível." },
              { year: "2019", label: "Frota BMW & Mercedes", desc: "Investimos na melhor frota da região para oferecer condições de aprendizagem premium." },
              { year: "2021", label: "Simulador", desc: "Adquirimos simulador de condução para reduzir a ansiedade dos alunos antes da primeira aula." },
              { year: "2025", label: "+1000 Aprovados", desc: "Mais de mil alunos aprovados. Uma conquista que pertence a cada um deles." },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-4">
                {/* Line connector (not on last) */}
                {i < 3 && (
                  <div className="absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px bg-border hidden lg:block" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20 relative z-10">
                  <span className="text-white font-black text-xs">{item.year}</span>
                </div>
                <h3 className="font-black text-foreground text-lg mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities/Gallery Section */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
                    As Nossas <span className="text-primary italic">Instalações</span>
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Preparadas para te oferecer o máximo conforto e as melhores ferramentas para a tua aprendizagem.
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
                        <p className="text-white/80 max-w-md font-light">Sala equipada com sistema de projeção e fichas de treino para o exame de código.</p>
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
                        <p className="text-white/80 font-light">Treina a reação e tomada de decisão antes da primeira aula na estrada.</p>
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
                        <h3 className="text-xl font-bold text-white">Ambiente Acolhedor</h3>
                        <p className="text-white/70 text-sm font-light">Um espaço pensado para te sentires à vontade desde o primeiro dia.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                  <div className="max-w-xl">
                      <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                          Pronto para começar?
                      </h2>
                      <p className="text-white/60 text-lg font-light leading-relaxed">
                          Fala connosco. Explicamos tudo, sem compromisso.
                      </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                      <a href="/contacto" className="group px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] text-base flex items-center justify-center gap-3">
                          Pedir Orçamento Grátis
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href="tel:+351253504148" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-[0.98] text-base text-center">
                          253 504 148
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  )
}
