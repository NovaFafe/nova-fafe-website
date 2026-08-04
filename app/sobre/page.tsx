import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionLink } from "@/components/section-link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "A Escola - NOVAFAFE Escola de Condução",
  description: "Conhece a história e valores da NOVAFAFE, a escola de condução de referência em Fafe desde 2018.",
}

const heroStats = [
  { value: "89%", label: "Aprovação IMT" },
  { value: "7+", label: "Anos" },
  { value: "9+", label: "Categorias" },
]

const differentiators = [
  "Frota BMW e Mercedes — viaturas recentes e tecnológicas",
  "Salas de código com postos de computador",
  "Horário pós-laboral e fins de semana",
  "Apoio total no processo IMT e exames médicos",
  "Pagamento faseado, sem surpresas",
]

const milestones = [
  { year: "2018", label: "Abertura", desc: "Abrimos em Fafe com o objetivo de tornar o ensino da condução mais humano e acessível." },
  { year: "2019", label: "95% IMT", desc: "Melhor taxa de aprovação prática entre escolas de Fafe, segundo dados do IMT." },
  { year: "2021", label: "89% IMT", desc: "89% de aprovação no exame prático — melhor taxa entre escolas de Fafe (dados IMT)." },
]

const facilities = [
  {
    src: "/NovaFafe-Facebook/Escola/mural.jpg",
    alt: "Receção NOVAFAFE com logótipo",
    title: "Receção NOVAFAFE",
    description: "Instalações modernas na Rua da Cumieira — um espaço acolhedor desde o primeiro contacto.",
    objectPosition: "center 38%",
    className: "lg:col-span-8 min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]",
    titleClass: "text-2xl sm:text-3xl",
  },
  {
    src: "/NovaFafe-Facebook/Escola/sala-de-aula.jpg",
    alt: "Sala de aula NOVAFAFE",
    title: "Salas de Aula",
    description: "Mesas amplas e ambiente confortável para as aulas teóricas.",
    objectPosition: "center 42%",
    className: "lg:col-span-4 min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]",
    titleClass: "text-xl sm:text-2xl",
  },
  {
    src: "/NovaFafe-Facebook/Escola/sala-de-simulados.jpg",
    alt: "Sala de código com postos de computador NOVAFAFE",
    title: "Sala de Código",
    description: "Postos individuais com computador para preparação do exame teórico.",
    objectPosition: "72% center",
    className: "lg:col-span-4 min-h-[240px] sm:min-h-[280px] lg:min-h-[300px]",
    titleClass: "text-xl",
  },
  {
    src: "/NovaFafe-Facebook/Escola/balcao.jpg",
    alt: "Balcão de atendimento NOVAFAFE",
    title: "Balcão de Atendimento",
    description: "Equipa disponível para esclarecer dúvidas, marcar aulas e apoiar no processo IMT.",
    objectPosition: "center 58%",
    className: "lg:col-span-8 min-h-[240px] sm:min-h-[280px] lg:min-h-[300px]",
    titleClass: "text-xl sm:text-2xl",
  },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-36 lg:pt-44 pb-16 lg:pb-24">

            {/* Left — Copy */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-6 uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">Início</Link>
                <span aria-hidden>·</span>
                <span className="text-primary">A Escola</span>
              </nav>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
                A escola que<br />
                <span className="text-primary">te entende.</span>
              </h1>

              <p className="text-base text-zinc-400 leading-relaxed max-w-md font-light mb-10">
                Fundada em Fafe em 2018, somos uma equipa que conhece o teu nome, respeita o teu ritmo e celebra contigo cada conquista na estrada.
              </p>

              <div className="flex items-center gap-8 pt-8 border-t border-zinc-800">
                {heroStats.map((s) => (
                  <div key={s.label}>
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
                    Uma equipa próxima que te acompanha do primeiro dia de código até ao exame prático, sempre disponível para tirar dúvidas.
                  </p>
                </div>
              </div>

              {/* Concrete differentiators */}
              <ul className="space-y-4">
                {differentiators.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{text}</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8">
            {milestones.map((item, i) => (
              <div key={item.year} className="relative flex flex-col items-center text-center px-4">
                {/* Line connector (not on last) */}
                {i < milestones.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px bg-border hidden sm:block" />
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
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">Conhece o espaço</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
              As Nossas <span className="text-primary">Instalações</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Espaços confortáveis para a formação teórica, apoio administrativo e um ambiente acolhedor em Fafe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-fr">
            {facilities.map((facility) => (
              <article
                key={facility.title}
                className={`relative group rounded-3xl overflow-hidden shadow-lg ${facility.className}`}
              >
                <img
                  src={facility.src}
                  alt={facility.alt}
                  style={{ objectPosition: facility.objectPosition }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className={`font-bold text-white mb-1.5 ${facility.titleClass}`}>{facility.title}</h3>
                  <p className="text-white/75 text-sm sm:text-base font-light max-w-md leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950 border-t border-white/5">
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
            <div className="flex-shrink-0">
              <SectionLink href="/contacto">
                Fala Connosco
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
