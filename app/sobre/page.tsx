import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionLink } from "@/components/section-link"
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "A Escola - NOVAFAFE Escola de Condução",
  description: "Conhece a história e valores da NOVAFAFE, a escola de condução de referência em Fafe desde 2018.",
}

const serviceTeasers = [
  { label: "Carta de Ligeiros", tag: "Cat. B · 17½ anos", href: "/servicos#categoria-b" },
  { label: "Motociclos", tag: "A / A1 / A2 · 16+ anos", href: "/servicos#categoria-a" },
  { label: "Ciclomotor", tag: "Cat. AM · 14+ anos", href: "/servicos#categoria-am" },
]

const differentiators = [
  "Frota BMW e Mercedes",
  "Salas de código com computador",
  "Horários flexíveis",
  "Apoio IMT incluído",
  "Pagamento faseado",
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
    className: "lg:col-span-8 min-h-[220px] sm:min-h-[320px] lg:min-h-[400px]",
    titleClass: "text-2xl sm:text-3xl",
  },
  {
    src: "/NovaFafe-Facebook/Escola/sala-de-aula.jpg",
    alt: "Sala de aula NOVAFAFE",
    title: "Salas de Aula",
    description: "Mesas amplas e ambiente confortável para as aulas teóricas.",
    objectPosition: "center 42%",
    className: "lg:col-span-4 min-h-[220px] sm:min-h-[320px] lg:min-h-[400px]",
    titleClass: "text-xl sm:text-2xl",
  },
  {
    src: "/NovaFafe-Facebook/Escola/sala-de-simulados.jpg",
    alt: "Sala de código com postos de computador NOVAFAFE",
    title: "Sala de Código",
    description: "Postos individuais com computador para preparação do exame teórico.",
    objectPosition: "72% center",
    className: "lg:col-span-4 min-h-[200px] sm:min-h-[280px] lg:min-h-[300px]",
    titleClass: "text-xl",
  },
  {
    src: "/NovaFafe-Facebook/Escola/balcao.jpg",
    alt: "Balcão de atendimento NOVAFAFE",
    title: "Balcão de Atendimento",
    description: "Equipa disponível para esclarecer dúvidas, marcar aulas e apoiar no processo IMT.",
    objectPosition: "center 58%",
    className: "lg:col-span-8 min-h-[200px] sm:min-h-[280px] lg:min-h-[300px]",
    titleClass: "text-xl sm:text-2xl",
  },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/NovaFafe-Facebook/Marketing/sobre-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-[var(--brand-green)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="pb-12 pt-36 text-center sm:text-left lg:pb-16 lg:pt-44">
            <nav className="mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 sm:justify-start">
              <Link href="/" className="transition-colors hover:text-white">Início</Link>
              <span aria-hidden>·</span>
              <span className="text-primary">A Escola</span>
            </nav>

            <h1 className="mx-auto mb-4 max-w-2xl text-balance text-5xl font-black leading-[1.05] tracking-tighter text-white sm:mx-0 sm:text-6xl lg:text-7xl">
              <span className="block sm:contents">A escola</span>{" "}
              <span className="block sm:contents">
                que <span className="text-primary">te entende.</span>
              </span>
            </h1>

            <p className="mx-auto max-w-sm text-pretty text-sm font-light leading-relaxed text-zinc-400 sm:mx-0 sm:max-w-md sm:text-base sm:text-zinc-300">
              Em Fafe desde 2018 — ensino próximo, ao teu ritmo.
            </p>
          </div>
        </div>
      </section>

      {/* History & Story Section */}
      <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border group">
                <img
                  src="/NovaFafe-Facebook/Veiculos/bmw-mercedes-frente.jpeg"
                  alt="Frota NOVAFAFE — BMW e Mercedes"
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[400px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-10">
              <div className="section-heading space-y-4 lg:text-left">
                <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                  <span className="block sm:contents">Uma escola</span>{" "}
                  <span className="block sm:contents">
                    onde <span className="text-primary">o aluno importa.</span>
                  </span>
                </h2>
                <p className="section-heading-desc mx-auto max-w-prose text-base font-light leading-relaxed text-muted-foreground sm:mx-0 sm:text-lg">
                  Aprendes sem pressa e sem stress — com instrutores pacientes e um ambiente onde podes errar, perguntar e evoluir.
                </p>
              </div>

              <ul className="grid gap-2.5 sm:grid-cols-2">
                {differentiators.map((text) => (
                  <li key={text} className="flex items-center gap-2.5 rounded-xl bg-background px-3.5 py-2.5 text-sm font-medium text-foreground ring-1 ring-border/60">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing — ponte para serviços */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 lg:py-20">
        <div className="absolute inset-0">
          <Image
            src="/NovaFafe-Facebook/Marketing/sobre-servicos-bridge.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-[var(--brand-green)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
            <div>
              <div className="section-heading lg:text-left">
                <h2 className="text-balance text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  <span className="block sm:contents">Já sabes quem somos.</span>{" "}
                  <span className="block sm:contents text-white/40">Vê o que podes tirar.</span>
                </h2>
              </div>
              <p className="mt-4 max-w-sm text-pretty text-sm font-light leading-relaxed text-white/50 sm:max-w-md sm:text-base">
                Do ciclomotor ao pesado — tudo explicado sem rodeios.
              </p>
              <div className="mt-8 hidden lg:block">
                <SectionLink href="/servicos">
                  Ver todos os serviços
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </SectionLink>
              </div>
            </div>

            <div className="space-y-3">
              {serviceTeasers.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-white/[0.04] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.08] sm:px-6 sm:py-5"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{item.tag}</p>
                    <p className="mt-1 text-base font-bold text-white sm:text-lg">{item.label}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
              <Link
                href="/servicos#complementar"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-dashed border-white/10 px-5 py-4 transition-colors hover:border-primary/30 hover:bg-primary/[0.06] sm:px-6 sm:py-5"
              >
                <p className="text-sm font-semibold text-white/70 transition-colors group-hover:text-white">
                  Já tens carta? Revalidação, pontos, troca e apoio IMT
                </p>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all group-hover:text-primary" />
              </Link>
            </div>

            <div className="flex justify-center lg:hidden">
              <SectionLink href="/servicos">
                Ver todos os serviços
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="border-y border-border bg-background py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="section-heading mx-auto mb-10 max-w-2xl sm:mb-16">
            <h2 className="text-balance text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              Anos de <span className="text-primary">conquistas.</span>
            </h2>
          </div>

          {/* Mobile — cards empilhados */}
          <div className="space-y-3 sm:hidden">
            {milestones.map((item) => (
              <article
                key={item.year}
                className="overflow-hidden rounded-2xl bg-muted/40 ring-1 ring-border/50"
              >
                <div className="flex">
                  <div className="flex w-[4.25rem] shrink-0 items-center justify-center bg-primary py-4">
                    <span className="text-xs font-black tabular-nums text-white">{item.year}</span>
                  </div>
                  <div className="min-w-0 flex-1 px-4 py-3.5">
                    <h3 className="font-bold text-foreground">{item.label}</h3>
                    <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop — 3 colunas */}
          <div className="hidden gap-8 sm:grid sm:grid-cols-3 lg:gap-8">
            {milestones.map((item, i) => (
              <div key={item.year} className="relative flex flex-col items-center px-4 text-center">
                {i < milestones.length - 1 && (
                  <div className="absolute left-[calc(50%+2.5rem)] right-0 top-8 hidden h-px bg-border sm:block" />
                )}
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                  <span className="text-xs font-black text-white">{item.year}</span>
                </div>
                <h3 className="mb-2 text-lg font-black text-foreground">{item.label}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities/Gallery Section */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-12">
          <div className="section-heading mx-auto mb-14 max-w-2xl sm:mb-16">
            <h2 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              As nossas <span className="text-primary">instalações</span>
            </h2>
            <p className="section-heading-desc mt-4 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              Espaços confortáveis para aprender e tratar do processo em Fafe.
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
        <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="section-heading max-w-xl lg:text-left">
              <h2 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Pronto para começar?
              </h2>
              <p className="section-heading-desc text-base font-light leading-relaxed text-white/55 sm:text-lg">
                Explicamos tudo, sem compromisso.
              </p>
            </div>
            <div className="flex w-full justify-center lg:w-auto lg:justify-start">
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
