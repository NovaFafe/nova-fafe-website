import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionLink } from "@/components/section-link"
import { contactHref, SERVICE_CONTACT_CATEGORY } from "@/lib/contact-categories"
import {
  Car,
  Bike,
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
  image?: string
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
    image: "/NovaFafe-Facebook/Marketing/categoria-b-bmw.png",
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
    image: "/NovaFafe-Facebook/Marketing/categoria-a-yamaha-r1.png",
  },
  {
    id: "categoria-am",
    icon: Bike,
    category: "Categoria AM",
    title: "Carta de Ciclomotor",
    age: { label: "Idade mínima", value: "14 anos" },
    description:
      "Primeira habilitação para muitos jovens — ciclomotores e triciclos até 50 cc e 45 km/h.",
    points: ["Aulas teóricas e práticas incluídas", "Acompanhamento em todo o processo"],
    image: "/NovaFafe-Facebook/Marketing/categoria-am-sym.png",
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
    image: "/NovaFafe-Facebook/Marketing/categoria-pesados.png",
  },
  {
    id: "tratores",
    icon: Tractor,
    category: "Tratores",
    title: "Tratores Agrícolas",
    description:
      "Habilitação para condução de tratores agrícolas — teórica, prática e apoio na documentação.",
    points: ["Formação teórica e prática", "Horários flexíveis", "Apoio nos exames"],
    image: "/NovaFafe-Facebook/Marketing/categoria-tratores.png",
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
    image: "/NovaFafe-Facebook/Marketing/categoria-pontos.png",
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
    image: "/NovaFafe-Facebook/Marketing/categoria-revalidacao.png",
  },
  {
    id: "troca-carta",
    icon: Globe,
    category: "Internacional",
    title: "Troca de Carta Estrangeira",
    description:
      "Carta emitida noutro país? Analisamos se podes trocar e tratamos do processo junto do IMT.",
    points: ["Verificação de elegibilidade", "Tratamento da documentação", "Acompanhamento até à conclusão"],
    image: "/NovaFafe-Facebook/Marketing/categoria-troca.png",
  },
  {
    id: "apoio-imt",
    icon: ClipboardList,
    category: "Administrativo",
    title: "Apoio IMT",
    description:
      "Apoio na burocracia junto do IMT — agendamentos, atestado médico eletrónico e submissão de documentos.",
    points: ["Agendamento de exames", "Atestado médico eletrónico", "Submissão online de documentos"],
    image: "/NovaFafe-Facebook/Marketing/categoria-imt.png",
  },
]

const quickGuide = [
  { label: "Quero tirar a carta de carro", href: "#categoria-b", icon: Car },
  { label: "Quero tirar carta de mota", href: "#categoria-a", icon: Bike },
  { label: "Tenho 14 ou 15 anos", href: "#categoria-am", icon: Bike },
]

function ServicePanel({
  service,
  featured = false,
  layout,
}: {
  service: Service
  featured?: boolean
  layout?: "banner" | "tile"
}) {
  const contactCategory = SERVICE_CONTACT_CATEGORY[service.id]

  if (service.image) {
    const isBanner = layout === "banner"

    return (
      <article
        id={service.id}
        className={[
          "group relative flex scroll-mt-28 flex-col overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]",
          isBanner
            ? "min-h-[340px] sm:min-h-[380px] lg:col-span-2 lg:min-h-[420px]"
            : "h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[460px]",
        ].join(" ")}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes={isBanner ? "100vw" : "(max-width: 1024px) 50vw, 40vw"}
          className={[
            "object-cover scale-105 grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0",
            isBanner ? "object-[center_40%] lg:object-right" : "object-center",
          ].join(" ")}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-black/85 via-black/50 to-transparent transition-all duration-700 group-hover:from-black/70 group-hover:via-black/35" />
        <div
          className={[
            "absolute inset-0 transition-all duration-700",
            isBanner
              ? "bg-gradient-to-r from-black/90 via-black/65 to-black/25 group-hover:from-black/82 group-hover:via-black/50 group-hover:to-black/15"
              : "bg-gradient-to-t from-black/95 via-black/55 to-transparent group-hover:from-black/85 group-hover:via-black/40",
          ].join(" ")}
        />

        <div
          className={[
            "relative z-10 flex flex-1 flex-col p-7 sm:p-8",
            isBanner ? "lg:p-10" : "",
          ].join(" ")}
        >
          {/* Cabeçalho */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black/30 text-white backdrop-blur-md transition-colors group-hover:bg-primary">
                <service.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary sm:text-xs">
                {service.category}
              </span>
            </div>

            {service.age && isBanner && service.age.note && (
              <div className="hidden shrink-0 rounded-2xl bg-black/30 px-5 py-4 text-right backdrop-blur-md lg:block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{service.age.label}</p>
                <p className="mt-0.5 text-xl font-black leading-tight text-white">{service.age.value}</p>
                <p className="mt-1 text-xs font-medium text-white/50">{service.age.note}</p>
              </div>
            )}

            {service.age && !isBanner && service.id !== "categoria-a" && (
              <span className="shrink-0 rounded-full bg-black/30 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                {service.age.value}
              </span>
            )}

            {service.age && isBanner && service.age.note && (
              <span className="shrink-0 rounded-full bg-black/30 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md lg:hidden">
                {service.age.value}
              </span>
            )}
          </div>

          {/* Corpo */}
          <div className="mt-5 flex flex-1 flex-col">
            <h3
              className={[
                "font-black tracking-tight text-white",
                isBanner ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl",
              ].join(" ")}
            >
              {service.title}
            </h3>
            <p
              className={[
                "mt-2 font-light leading-relaxed text-white/70",
                isBanner ? "max-w-2xl text-base" : "text-sm",
              ].join(" ")}
            >
              {service.description}
            </p>

            <ul className={["mt-5 flex-1", isBanner ? "space-y-2.5" : "space-y-2"].join(" ")}>
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>

            {contactCategory && (
              <div className="mt-6 flex justify-center border-t border-white/10 pt-6 lg:justify-start">
                <SectionLink href={contactHref(contactCategory, service.title)} variant="outlineDark">
                  Pedir informações
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </SectionLink>
              </div>
            )}
          </div>
        </div>
      </article>
    )
  }

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
            {contactCategory && (
              <div className="mt-8 flex justify-center lg:justify-start">
                <SectionLink href={contactHref(contactCategory, service.title)} variant="outlineDark">
                  Pedir informações
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </SectionLink>
              </div>
            )}
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
            <span className="inline-flex items-center rounded-full bg-background px-3 py-1 text-xs font-bold leading-snug text-foreground text-balance">
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
      {contactCategory && (
        <div className="mt-6 flex justify-center border-t border-border/60 pt-6 sm:justify-start">
          <SectionLink href={contactHref(contactCategory, service.title)}>
            Pedir informações
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </SectionLink>
        </div>
      )}
    </article>
  )
}

function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <header id={id} className="section-heading mb-10 scroll-mt-28">
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">{title}</h2>
    </header>
  )
}

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/NovaFafe-Facebook/Marketing/servicos-hero.png"
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
              <span className="text-primary">Serviços</span>
            </nav>
            <h1 className="mx-auto mb-4 max-w-2xl text-5xl font-black leading-[1.0] tracking-tighter text-white sm:mx-0 sm:text-6xl lg:text-7xl">
              Encontra a formação
              <br />
              <span className="text-primary">
                certa para&nbsp;ti.
              </span>
            </h1>
            <p className="mx-auto max-w-lg text-base font-light leading-relaxed text-zinc-300 sm:mx-0">
              Carro, mota, pesados ou serviços para quem já tem carta — explicamos cada opção de forma clara.
            </p>
          </div>
        </div>
      </section>

      {/* Guia rápido */}
      <section className="border-b border-border/60 bg-muted/30 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <h2 className="section-heading mb-5 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Por onde começar?
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <SectionHeader title="Cartas de condução" id="formacao" />
          <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
            <ServicePanel service={formation[0]} layout="banner" />
            <ServicePanel service={formation[1]} layout="tile" />
            <ServicePanel service={formation[2]} layout="tile" />
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
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <SectionHeader title="Pesados e agrícola" id="parceria" />
          <div className="grid gap-5 md:grid-cols-2">
            {partnership.map((service) => (
              <ServicePanel key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Complementar */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <SectionHeader title="Já tens carta?" id="complementar" />
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
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-2xl font-black text-white sm:text-3xl">Ainda com dúvidas?</h2>
              <p className="max-w-md font-light leading-relaxed text-white/60">
                Explicamos qual formação precisas e como te inscrever — sem compromisso.
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
