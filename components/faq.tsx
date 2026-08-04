"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react"

const faqs = [
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

const categories = [...new Set(faqs.map(f => f.category))]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>("Todos")

  const allCategories = ["Todos", ...categories]
  const filtered = activeCategory === "Todos" ? faqs : faqs.filter(f => f.category === activeCategory)

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
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl pb-16 pt-36 lg:pb-24 lg:pt-44">
            <nav className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">FAQ</span>
            </nav>
            <h1 className="mb-6 text-5xl font-black leading-[1.0] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Tens
              <br />
              <span className="text-primary">dúvidas?</span>
            </h1>
            <p className="max-w-xl text-base font-light leading-relaxed text-zinc-300">
              As perguntas que nos fazem todos os dias — respondidas de forma direta e honesta.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const globalIndex = faqs.indexOf(faq)
              const isOpen = openIndex === globalIndex
              return (
                <div
                  key={globalIndex}
                  className={`bg-card rounded-2xl border overflow-hidden shadow-sm transition-all duration-200 ${
                    isOpen ? "border-primary/30 shadow-md shadow-primary/5" : "border-border hover:border-border/70"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className={`hidden sm:block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0 ${
                        isOpen ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {faq.category}
                      </span>
                      <span className="font-bold text-foreground text-base">{faq.question}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-muted text-muted-foreground"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px bg-border mb-4" />
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 bg-zinc-950 rounded-3xl p-7 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white font-bold">Não encontraste a resposta? <span className="text-zinc-400 font-normal">Respondemos em minutos.</span></p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] text-sm whitespace-nowrap"
              >
                Enviar mensagem <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+351253504130"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-[0.98] text-sm whitespace-nowrap"
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

