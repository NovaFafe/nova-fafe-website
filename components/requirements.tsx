"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SectionLink, sectionButtonVariants } from "@/components/section-link"
import { cn } from "@/lib/utils"
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

function SectionHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="section-heading mb-10 scroll-mt-28 lg:mb-12">
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {intro && (
        <p className="section-heading-desc mt-3 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </header>
  )
}

export function Requirements() {
  const [activeSection, setActiveSection] = useState("documentos")
  const complementNotice = notices[2]

  const subNav = [
    { id: "documentos", label: "Documentos" },
    { id: "processo", label: "Processo" },
    { id: "a-saber", label: "A saber" },
  ]

  return (
    <>
      {/* Sticky sub-nav — mobile */}
      <nav
        className="sticky top-14 z-30 border-b border-border/60 bg-background/95 backdrop-blur-md lg:hidden"
        aria-label="Secções de requisitos"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-1.5 px-7 py-2.5 sm:px-8">
          {subNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={[
                "flex min-h-11 items-center justify-center rounded-full px-2 py-2 text-center text-[11px] font-bold leading-tight transition-colors sm:text-xs",
                activeSection === item.id
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/NovaFafe-Facebook/Marketing/requisitos-hero.png"
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
          <div className="mx-auto max-w-2xl pb-12 pt-32 text-center sm:mx-0 sm:pb-14 sm:pt-36 sm:text-left lg:pb-20 lg:pt-44">
            <nav className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 sm:mb-6 sm:justify-start">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Requisitos</span>
            </nav>
            <h1 className="mb-4 text-balance text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
              Como
              <span className="text-primary"> funciona.</span>
            </h1>
            <p className="mx-auto max-w-lg text-base font-light leading-relaxed text-zinc-300 sm:mx-0">
              Documentos, idades e processo passo a passo — tudo o que precisas para te inscrever sem surpresas.
            </p>
          </div>
        </div>
      </section>

      {/* Documentação */}
      <section id="documentos" className="scroll-mt-28 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <SectionHeader
            title="O que trazer na inscrição"
            intro="Três documentos bastam para dar o primeiro passo na NOVAFAFE."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
            {docs.map((doc) => (
              <article
                key={doc.title}
                className="flex gap-4 rounded-2xl bg-muted/50 p-5 ring-1 ring-border/40 sm:block sm:rounded-3xl sm:p-8 sm:ring-0"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <doc.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1 sm:flex-none">
                  <p className="mb-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:mb-1 sm:text-xs">
                    {doc.value}
                  </p>
                  <h3 className="mb-1.5 text-lg font-bold text-foreground sm:mb-2 sm:text-xl">{doc.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{doc.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="scroll-mt-28 bg-muted/30 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <SectionHeader
            title="Da inscrição à aprovação"
            intro="Cinco etapas — da primeira visita à escola à carta na mão."
          />

          <ol className="mx-auto max-w-3xl space-y-3 sm:space-y-0">
            {steps.map((step, index) => (
              <li
                key={step.step}
                className="relative flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-border/50 sm:gap-6 sm:rounded-none sm:bg-transparent sm:p-0 sm:pb-10 sm:ring-0 sm:last:pb-0"
              >
                {index < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[27px] top-12 bottom-0 hidden w-px bg-border sm:block sm:left-[21px] sm:top-11"
                  />
                )}
                <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white sm:h-11 sm:w-11 sm:text-sm">
                  {step.step}
                </span>
                <div className="min-w-0 flex-1 pt-0.5 sm:pt-1">
                  <h3 className="mb-1 text-base font-bold text-foreground sm:mb-1.5 sm:text-lg">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* A saber */}
      <section id="a-saber" className="scroll-mt-28 border-y border-border/50 bg-muted/30 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <SectionHeader title="A saber antes dos exames" intro="Regras do IMT e informações que evitam surpresas na marcação dos exames." />

          <div className="grid gap-4 lg:grid-cols-5 lg:gap-5">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.05] lg:col-span-3">
              {notices.slice(0, 2).map((notice, index) => (
                <article
                  key={notice.title}
                  className={cn(
                    "flex gap-4 p-5 sm:gap-5 sm:p-6",
                    index === 0 && "border-b border-gray-100",
                  )}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <notice.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-base font-bold text-foreground sm:text-lg">{notice.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{notice.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <article className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-zinc-950 p-6 text-center sm:min-h-[320px] sm:p-8 lg:col-span-2 lg:min-h-full">
              <div className="absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute inset-[-12%] [mask-image:radial-gradient(ellipse_90%_75%_at_50%_35%,#000_25%,transparent_78%)] [-webkit-mask-image:radial-gradient(ellipse_90%_75%_at_50%_35%,#000_25%,transparent_78%)]">
                  <Image
                    src="/NovaFafe-Facebook/Marketing/categoria-revalidacao.png"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center grayscale"
                  />
                  <div className="absolute inset-0 bg-[var(--brand-green)] mix-blend-multiply" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="relative z-10 flex w-full max-w-xs flex-col items-center sm:max-w-sm">
                <h3 className="text-balance text-2xl font-black tracking-tight text-white">
                  {complementNotice.title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm font-light leading-relaxed text-white/65 sm:max-w-none">
                  {complementNotice.description}
                </p>
                {complementNotice.link && (
                  <Link
                    href={complementNotice.link.href}
                    className={cn(
                      sectionButtonVariants.primary,
                      "mt-6 w-full max-w-[18rem] gap-2 px-5 py-3.5 text-sm shadow-xl shadow-primary/30",
                    )}
                  >
                    {complementNotice.link.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-zinc-950 py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-black text-white sm:text-3xl">Pronto para te inscrever?</h2>
              <p className="mx-auto max-w-md font-light leading-relaxed text-white/60 sm:mx-0">
                Traz os documentos e tratamos do resto. Dúvidas sobre categorias ou inscrição? Fala connosco.
              </p>
            </div>
            <div className="flex w-full justify-center sm:w-auto sm:shrink-0 sm:justify-start">
              <SectionLink href="/contacto" fullWidth size="mobile" className="sm:w-auto">
                Fala Connosco
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
