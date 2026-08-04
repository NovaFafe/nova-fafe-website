import Link from "next/link"
import Image from "next/image"
import { SectionLink } from "@/components/section-link"
import {
  FileText,
  Calendar,
  ArrowRight,
  ClipboardList,
  Stethoscope,
  AlertCircle,
  CreditCard,
  type LucideIcon,
} from "lucide-react"

const docs = [
  {
    icon: Calendar,
    title: "Idade mínima",
    value: "17 anos e 6 meses",
    description: "Para te inscreveres e começares as aulas teóricas (Cat. B). O exame prático só aos 18 anos.",
  },
  {
    icon: FileText,
    title: "Cartão de Cidadão",
    value: "Documento válido",
    description: "Identificação atualizada. Estrangeiros: título ou autorização de residência válidos.",
  },
  {
    icon: Stethoscope,
    title: "Atestado Médico",
    value: "Via SNS",
    description: "Atestado Médico Eletrónico transmitido ao IMT. Orientamos-te na obtenção, se precisares.",
  },
]

const steps = [
  {
    step: "01",
    title: "Inscrição na escola",
    description: "Traz o Cartão de Cidadão e o Atestado Médico Eletrónico. Tratamos do resto.",
  },
  {
    step: "02",
    title: "Aulas de código e práticas",
    description: "Frequenta as aulas teóricas e inicia a formação prática — avançam em paralelo.",
  },
  {
    step: "03",
    title: "Exame teórico (IMT)",
    description: "Após 16 h de formação prática (Portaria 185/2015), podes ser submetido ao exame de código.",
  },
  {
    step: "04",
    title: "Continuação das práticas",
    description: "Conduzes com instrutor certificado ao teu ritmo, até estares pronto para o exame.",
  },
  {
    step: "05",
    title: "Exame prático",
    description: "Exame final com examinador do IMT. Acompanhamos-te até à aprovação.",
  },
]

const notices: {
  icon: LucideIcon
  title: string
  description: string
  link?: { href: string; label: string }
}[] = [
  {
    icon: AlertCircle,
    title: "Exame de código",
    description:
      "Só podes ser submetido ao exame de código depois de concluíres 16 horas de formação prática (Portaria 185/2015).",
  },
  {
    icon: CreditCard,
    title: "Pagamento na marcação",
    description:
      "Na marcação do exame teórico ou prático, deve ser efetuado o respetivo pagamento junto do IMT.",
  },
  {
    icon: ClipboardList,
    title: "Já tens carta?",
    description:
      "Revalidação, troca de carta estrangeira e recuperação de pontos — consulta os serviços complementares.",
    link: { href: "/servicos#complementar", label: "Ver serviços complementares" },
  },
]

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="mb-10 lg:mb-12">
      <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">{intro}</p>}
    </header>
  )
}

export function Requirements() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/NovaFafe-Facebook/Marketing/requisitos-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-[var(--brand-green)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl pb-14 pt-36 lg:pb-20 lg:pt-44">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Requisitos</span>
            </nav>
            <h1 className="mb-4 text-5xl font-black leading-[1.0] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Como
              <span className="text-primary"> funciona.</span>
            </h1>
            <p className="max-w-lg text-base font-light leading-relaxed text-zinc-300">
              Documentos, idades e processo passo a passo — tudo o que precisas para te inscrever sem surpresas.
            </p>
          </div>
        </div>
      </section>

      {/* Documentação */}
      <section id="documentos" className="scroll-mt-28 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Documentação"
            title="O que trazer na inscrição"
            intro="Três documentos bastam para dar o primeiro passo na NOVAFAFE."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {docs.map((doc) => (
              <article key={doc.title} className="rounded-3xl bg-muted/50 p-7 sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <doc.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                </div>
                <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-primary sm:text-sm">
                  {doc.value}
                </p>
                <h3 className="mb-2 text-xl font-bold text-foreground">{doc.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{doc.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="scroll-mt-28 bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Processo"
            title="Da inscrição à aprovação"
            intro="Cinco etapas — da primeira visita à escola à carta na mão."
          />

          <ol className="max-w-3xl">
            {steps.map((step, index) => (
              <li key={step.step} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6">
                {index < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-10 bottom-0 w-px bg-border sm:left-[21px]"
                  />
                )}
                <span className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white sm:h-11 sm:w-11">
                  {step.step}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="mb-1.5 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* A saber */}
      <section id="a-saber" className="scroll-mt-28 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader eyebrow="Importante" title="A saber antes dos exames" />
          <div className="grid gap-5 md:grid-cols-3">
            {notices.map((notice) => (
              <article key={notice.title} className="flex flex-col rounded-3xl bg-primary/[0.04] p-6 sm:p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <notice.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 font-bold text-foreground">{notice.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{notice.description}</p>
                {notice.link && (
                  <Link
                    href={notice.link.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {notice.link.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-zinc-950 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="mb-2 text-2xl font-black text-white sm:text-3xl">Pronto para te inscrever?</h2>
              <p className="max-w-md font-light leading-relaxed text-white/60">
                Traz os documentos e tratamos do resto. Dúvidas sobre categorias ou inscrição? Fala connosco.
              </p>
            </div>
            <SectionLink href="/contacto">
              Fala Connosco
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </SectionLink>
          </div>
        </div>
      </section>
    </>
  )
}
