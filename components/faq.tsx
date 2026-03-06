"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from "lucide-react"

const faqs = [
  {
    category: "Inscrição",
    question: "Quanto custa tirar a carta?",
    answer:
      "O preço varia consoante a categoria e o número de aulas práticas necessárias. É impossível dizer um valor exato sem conhecer o teu perfil. Contacta-nos via WhatsApp e respondemos em minutos com um orçamento personalizado e sem compromisso.",
  },
  {
    category: "Inscrição",
    question: "Posso pagar em prestações?",
    answer:
      "Sim. Trabalhamos com pagamento faseado para que o custo não seja um obstáculo. Definimos um plano à medida na inscrição, sem juros nem surpresas.",
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
    question: "As aulas teóricas são em sala ou posso fazer online?",
    answer:
      "Dispomos de sala de aulas equipada na escola, mas também tens acesso a plataforma online para estudar ao teu ritmo a partir de casa. Podes combinar os dois.",
  },
  {
    category: "Outros Serviços",
    question: "O que é a recuperação de pontos (AVF)?",
    answer:
      "O Curso AVF (Atualização e Valorização de Formandos) é um curso obrigatório para condutores que perderam pontos por infrações rodoviárias. Permite recuperar até 3 pontos por curso. Na NOVAFAFE organizamos estas sessões regularmente.",
  },
  {
    category: "Outros Serviços",
    question: "Qual é o horário da escola?",
    answer:
      "Estamos abertos de segunda a sexta das 09:30 às 13:00 e das 14:00 às 19:30, e ao sábado das 09:30 às 12:30. As aulas práticas podem ser agendadas fora deste horário, incluindo pós-laboral.",
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
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pt-36 lg:pt-44 pb-16 lg:pb-24 max-w-3xl">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-8 uppercase tracking-widest">
              <a href="/" className="hover:text-white transition-colors">Início</a>
              <span>·</span>
              <span className="text-primary">FAQ</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
              Tens<br />
              <span className="text-primary">dúvidas?</span>
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-xl font-light">
              As perguntas que nos fazem todos os dias — respondidas de forma direta e honesta.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
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
                    : "bg-white border border-gray-200 text-gray-500 hover:border-primary/40 hover:text-primary"
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
                  className={`bg-white rounded-2xl border overflow-hidden shadow-sm transition-all duration-200 ${
                    isOpen ? "border-primary/30 shadow-md shadow-primary/5" : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className={`hidden sm:block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0 ${
                        isOpen ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400"
                      }`}>
                        {faq.category}
                      </span>
                      <span className="font-bold text-foreground text-base">{faq.question}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-400"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px bg-gray-100 mb-4" />
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
                href="tel:+351253504148"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-[0.98] text-sm whitespace-nowrap"
              >
                253 504 148
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

