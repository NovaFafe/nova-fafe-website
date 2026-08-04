import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionLink } from "@/components/section-link"
import {
  Car,
  Bike,
  Zap,
  RotateCcw,
  RefreshCw,
  ClipboardList,
  ArrowRight,
  Truck,
  Tractor,
  Globe,
  Check,
  type LucideIcon,
} from "lucide-react"

export const metadata = {
  title: "Serviços - NOVAFAFE Escola de Condução",
  description: "Carta de ligeiros, motociclos, pesados, TCC/CAM, tratores, revalidação e troca de carta estrangeira em Fafe.",
}

type Service = {
  id: string
  icon: LucideIcon
  category: string
  title: string
  age?: { label: string; value: string; note?: string }
  description: string
  points: string[]
  badge?: string
}

const formation: Service[] = [
  {
    id: "categoria-b",
    icon: Car,
    category: "Categoria B",
    title: "Carta de Ligeiros",
    age: { label: "Inscrição", value: "17 anos e 6 meses", note: "Exame prático aos 18 anos" },
    description:
      "Aulas de código e condução em paralelo, ao teu ritmo. Acompanhamos-te desde a inscrição até ao exame final.",
    points: [
      "Código em sala e preparação em computador",
      "Formação prática com instrutor certificado",
      "Marcação e apoio nos exames IMT",
      "Pagamento faseado",
    ],
  },
  {
    id: "categoria-a",
    icon: Bike,
    category: "A / A1 / A2",
    title: "Carta de Motociclo",
    age: { label: "Desde", value: "16 anos" },
    description:
      "Três subcategorias — A1, A2 e A — com idades e potências diferentes. Acesso direto ou progressivo, consoante o teu perfil.",
    points: [
      "A1 — 16 anos, motociclos até 125 cc",
      "A2 — 18 anos, motociclos até 35 kW",
      "A — 24 anos, ou 20 anos com 2 anos de A2",
    ],
  },
  {
    id: "categoria-am",
    icon: Zap,
    category: "Categoria AM",
    title: "Carta de Ciclomotor",
    age: { label: "Idade mínima", value: "14 anos" },
    description:
      "Primeira habilitação para muitos jovens — ciclomotores e triciclos até 50 cc e 45 km/h.",
    points: ["Aulas teóricas e práticas incluídas", "Acompanhamento em todo o processo"],
  },
]

const partnership: Service[] = [
  {
    id: "pesados-tcc-cam",
    icon: Truck,
    category: "Parceria",
    title: "Pesados / TCC / CAM",
    description:
      "Formação profissional em parceria para quem quer trabalhar no transporte rodoviário.",
    points: [
      "Pesados de passageiros e mercadorias",
      "TCC — transporte coletivo de crianças",
      "CAM — certificado de aptidão de motorista",
      "Contacta-nos para datas e condições",
    ],
    badge: "Parceria",
  },
  {
    id: "tratores",
    icon: Tractor,
    category: "Tratores",
    title: "Tratores Agrícolas",
    description:
      "Habilitação para condução de tratores agrícolas — teórica, prática e apoio na documentação.",
    points: ["Formação teórica e prática", "Horários flexíveis", "Apoio nos exames"],
  },
]

const support: Service[] = [
  {
    id: "recuperacao-pontos",
    icon: RotateCcw,
    category: "AVF",
    title: "Recuperação de Pontos",
    description:
      "Curso de Atualização e Valorização de Formandos — recupera até 3 pontos na carta de condução.",
    points: [
      "Até 3 pontos por curso",
      "Obrigatório em certas infrações rodoviárias",
      "Certificado emitido pelo IMT",
    ],
  },
  {
    id: "revalidacao",
    icon: RefreshCw,
    category: "Revalidação",
    title: "Revalidação de Carta",
    description:
      "Renovação periódica do título de condução — tratamos das aulas, exame médico e submissão junto do IMT.",
    points: [
      "Até 60 anos — a cada 10 anos",
      "60 a 70 anos — a cada 5 anos",
      "Após 70 anos — a cada 2 anos",
    ],
  },
  {
    id: "troca-carta",
    icon: Globe,
    category: "Internacional",
    title: "Troca de Carta Estrangeira",
    description:
      "Carta emitida noutro país? Analisamos se podes trocar e tratamos do processo junto do IMT.",
    points: ["Verificação de elegibilidade", "Tratamento da documentação", "Acompanhamento até à conclusão"],
  },
  {
    id: "apoio-imt",
    icon: ClipboardList,
    category: "Administrativo",
    title: "Apoio IMT",
    description:
      "Apoio na burocracia junto do IMT — agendamentos, atestado médico eletrónico e submissão de documentos.",
    points: ["Agendamento de exames", "Atestado médico eletrónico", "Submissão online de documentos"],
  },
]

const quickGuide = [
  { label: "Quero tirar a carta de carro", href: "#categoria-b", icon: Car },
  { label: "Quero tirar carta de mota", href: "#categoria-a", icon: Bike },
  { label: "Tenho 14 ou 15 anos", href: "#categoria-am", icon: Zap },
]

function ServicePanel({ service, featured = false }: { service: Service; featured?: boolean }) {
  if (featured) {
    return (
      <article
        id={service.id}
        className="scroll-mt-28 rounded-3xl bg-zinc-950 p-8 sm:p-10 lg:col-span-2"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.2em] text-primary sm:text-sm">
              {service.category}
            </span>
            <h3 className="mb-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{service.title}</h3>
            <p className="mb-6 text-base font-light leading-relaxed text-white/65">{service.description}</p>
            <ul className="space-y-2.5">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {service.age && (
            <div className="shrink-0 rounded-2xl bg-white/5 px-6 py-5 text-center lg:min-w-[160px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{service.age.label}</p>
              <p className="mt-1 text-2xl font-black text-white">{service.age.value}</p>
              {service.age.note && (
                <p className="mt-2 text-xs font-medium text-white/45">{service.age.note}</p>
              )}
            </div>
          )}
        </div>
      </article>
    )
  }

  return (
    <article id={service.id} className="scroll-mt-28 rounded-3xl bg-muted/50 p-7 sm:p-8">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
          <service.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
        </div>
        {service.age && (
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none">
              {service.age.label}
            </span>
            <span className="inline-flex items-center rounded-full bg-background px-3 py-1 text-xs font-bold leading-none text-foreground whitespace-nowrap">
              {service.age.value}
            </span>
          </div>
        )}
        {service.badge && !service.age && (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary">
            {service.badge}
          </span>
        )}
      </div>
      <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-primary sm:text-sm">{service.category}</p>
      <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <ul className="space-y-2">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}

function SectionHeader({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <header id={id} className="mb-10 scroll-mt-28">
      <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">{title}</h2>
    </header>
  )
}

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="pb-12 pt-36 lg:pb-16 lg:pt-44">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
              <Link href="/" className="transition-colors hover:text-white">Início</Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Serviços</span>
            </nav>
            <h1 className="mb-4 max-w-2xl text-5xl font-black leading-[1.0] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Encontra a formação
              <span className="text-primary"> certa para ti.</span>
            </h1>
            <p className="max-w-lg text-base font-light leading-relaxed text-zinc-400">
              Carro, mota, pesados ou serviços para quem já tem carta — explicamos cada opção de forma clara.
            </p>
          </div>
        </div>
      </section>

      {/* Guia rápido */}
      <section className="border-b border-border/60 bg-muted/30 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-primary">Por onde começar?</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {quickGuide.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 rounded-2xl bg-background px-5 py-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <item.icon className="h-5 w-5 text-primary transition-colors group-hover:text-white" strokeWidth={1.75} />
                </div>
                <span className="flex-1 text-sm font-semibold text-foreground">{item.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Formação" title="Cartas de condução" id="formacao" />
          <div className="grid gap-5 lg:grid-cols-2">
            <ServicePanel service={formation[0]} featured />
            <ServicePanel service={formation[1]} />
            <ServicePanel service={formation[2]} />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Documentos, prazos e passo a passo da inscrição estão em{" "}
            <Link href="/requisitos" className="font-semibold text-primary hover:underline">
              Requisitos
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Parceria */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Parceria" title="Pesados e agrícola" id="parceria" />
          <div className="grid gap-5 md:grid-cols-2">
            {partnership.map((service) => (
              <ServicePanel key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Complementar */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Complementar" title="Já tens carta?" id="complementar" />
          <p className="-mt-6 mb-10 max-w-xl text-muted-foreground">
            Para condutores que precisam de revalidar, trocar carta, recuperar pontos ou tratar de assuntos no IMT.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {support.map((service) => (
              <ServicePanel key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-zinc-950 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-2xl font-black text-white sm:text-3xl">Ainda com dúvidas?</h2>
              <p className="max-w-md font-light leading-relaxed text-white/60">
                Explicamos qual formação precisas e como te inscrever — sem compromisso.
              </p>
            </div>
            <SectionLink href="/contacto">
              Fala Connosco
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </SectionLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
