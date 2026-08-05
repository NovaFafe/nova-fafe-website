"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const duvidas = [
  {
    category: "Inscrição",
    question: "Posso pagar em prestações?",
    answer:
      "Sim. Trabalhamos com pagamento faseado para que o custo não seja um obstáculo. Definimos um plano à medida na inscrição, sem juros nem surpresas. Atenção: na marcação do exame teórico ou prático, o respetivo pagamento deve ser efetuado de imediato.",
  },
  {
    category: "Inscrição",
    question: "Que documentos preciso para me inscrever?",
    answer:
      "Precisas apenas do Cartão de Cidadão válido e de um Atestado Médico Eletrónico obtido através do SNS. Se precisares de ajuda com o atestado, tratamos nós.",
  },
  {
    category: "Formação",
    question: "Quanto tempo demora a tirar a carta?",
    answer:
      "Depende da tua disponibilidade e do ritmo de aprendizagem. Em média, alunos que frequentam com regularidade concluem o processo entre 3 a 6 meses. Com maior disponibilidade, é possível fazê-lo mais rápido.",
  },
  {
    category: "Formação",
    question: "Qual é a idade mínima para tirar a carta de carro?",
    answer:
      "Podes inscrever-te e começar as aulas teóricas (código) com 17 anos e 6 meses. Só podes fazer o exame prático e receber a carta após completares 18 anos.",
  },
  {
    category: "Formação",
    question: "Quando posso fazer o exame de código?",
    answer:
      "De acordo com a Portaria 185/2015, só podes ser submetido a exame de código depois de concluíres metade da formação prática — ou seja, 16 horas de aulas práticas.",
  },
  {
    category: "Formação",
    question: "As aulas teóricas são em sala ou posso fazer online?",
    answer:
      "Dispomos de sala de aulas equipada na escola, mas também tens acesso a plataforma online para estudar ao teu ritmo a partir de casa. Podes combinar os dois. O apoio teórico está disponível de segunda a sexta das 11:00 às 13:00 e das 15:00 às 20:00.",
  },
  {
    category: "Outros Serviços",
    question: "O que é a recuperação de pontos (AVF)?",
    answer:
      "O Curso AVF (Atualização e Valorização de Formandos) é um curso obrigatório para condutores que perderam pontos por infrações rodoviárias. Permite recuperar até 3 pontos por curso. Na NOVAFAFE organizamos estas sessões regularmente.",
  },
  {
    category: "Outros Serviços",
    question: "Quais as categorias de motociclo que posso tirar?",
    answer:
      "Formamos para A1, A2 e A. A1: a partir dos 16 anos, motociclos até 125cc. A2: a partir dos 18 anos, até 35 kW. A: a partir dos 24 anos (ou com 2 anos de experiência em A2), motociclos a partir de 55 kW. Podes optar por acesso direto ou progressivo — contacta-nos e indicamos o percurso certo para ti.",
  },
  {
    category: "Outros Serviços",
    question: "Fazem formação de pesados, TCC ou CAM?",
    answer:
      "Sim. Em parceria, oferecemos formação para pesados de passageiros e mercadorias, bem como TCC (Transporte Coletivo de Crianças) e CAM (Certificado de Aptidão). Ideal se queres trabalhar no transporte rodoviário. Fala connosco para saberes datas e condições.",
  },
  {
    category: "Outros Serviços",
    question: "Posso tirar a carta de trator agrícola?",
    answer:
      "Sim. Damos formação teórica e prática para condução de tratores agrícolas, com apoio na documentação e nos exames. Ideal para quem trabalha no setor agrícola e precisa da habilitação legal.",
  },
  {
    category: "Outros Serviços",
    question: "Posso trocar a minha carta estrangeira pela portuguesa?",
    answer:
      "Sim. Se já tens carta de condução emitida noutro país, ajudamos-te a trocá-la pela carta portuguesa junto do IMT — orientação sobre elegibilidade, tratamento da documentação e acompanhamento do processo.",
  },
  {
    category: "Outros Serviços",
    question: "Qual é o horário da escola?",
    answer:
      "Secretaria: segunda a sexta das 10:00 às 13:00 e das 15:00 às 19:30; sábado das 10:00 às 13:00. Apoio teórico: segunda a sexta das 11:00 às 13:00 e das 15:00 às 20:00. As aulas práticas podem ser agendadas fora deste horário, incluindo pós-laboral.",
  },
]

const categories = [...new Set(duvidas.map((item) => item.category))]

const categoryLabels: Record<string, string> = {
  Todos: "Todos",
  Inscrição: "Inscrição",
  Formação: "Formação",
  "Outros Serviços": "Outros",
}

export function DuvidasFrequentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>("Todos")

  const allCategories = ["Todos", ...categories]
  const filtered =
    activeCategory === "Todos" ? duvidas : duvidas.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/NovaFafe-Facebook/Marketing/faq-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] grayscale"
          />
          <div className="absolute inset-0 bg-[var(--brand-green)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl pb-12 pt-32 text-center sm:mx-0 sm:pb-16 sm:pt-36 sm:text-left lg:pb-24 lg:pt-44">
            <nav className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 sm:mb-8 sm:justify-start">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Dúvidas Frequentes</span>
            </nav>
            <h1 className="mb-4 text-balance text-4xl font-black leading-[1.05] tracking-tighter text-white sm:mb-6 sm:text-5xl lg:text-7xl">
              Tens
              <br />
              <span className="text-primary">dúvidas?</span>
            </h1>
            <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-zinc-300 sm:mx-0">
              As perguntas que nos fazem todos os dias — respondidas de forma direta e honesta.
            </p>
          </div>
        </div>
      </section>

      {/* Dúvidas */}
      <section className="bg-muted/30 py-14 sm:py-16 lg:py-28">
        <div className="mx-auto max-w-3xl px-7 sm:px-8 lg:px-12">
          {/* Category Filter */}
          <div className="mb-8 grid grid-cols-2 gap-2 sm:mb-10 sm:flex sm:flex-wrap sm:gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat)
                  setOpenIndex(null)
                }}
                className={cn(
                  "min-h-11 rounded-full px-3 py-2.5 text-xs font-bold transition-all duration-200 sm:px-4 sm:text-sm",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
                )}
              >
                {categoryLabels[cat] ?? cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-2.5 sm:space-y-3">
            {filtered.map((item) => {
              const globalIndex = duvidas.indexOf(item)
              const isOpen = openIndex === globalIndex
              return (
                <div
                  key={globalIndex}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-200",
                    isOpen
                      ? "border-primary/30 shadow-md shadow-primary/5"
                      : "border-border hover:border-border/70",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    className="flex w-full items-start gap-3 p-4 text-left sm:items-center sm:gap-4 sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "mb-2 inline-block rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest",
                          isOpen ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground",
                        )}
                      >
                        {item.category}
                      </span>
                      <span className="block text-base font-bold leading-snug text-foreground">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-180 bg-primary text-white"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6">
                        <div className="mb-4 h-px bg-border" />
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col items-center gap-5 rounded-3xl bg-zinc-950 p-5 text-center sm:mt-14 sm:flex-row sm:items-center sm:p-7 sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-white">
                Não encontraste a resposta?{" "}
                <span className="block font-normal text-zinc-400 sm:inline">
                  Respondemos em minutos.
                </span>
              </p>
            </div>
            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
              <a
                href="/contacto"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98] sm:w-auto"
              >
                Enviar mensagem
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+351253504130"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-[0.98] sm:w-auto"
              >
                253 504 130
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
