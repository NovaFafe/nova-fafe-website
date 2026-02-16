"use client"

import { useState } from "react"
import { ChevronDown, Phone } from "lucide-react"

const faqs = [
  {
    question: "Quanto custa a carta?",
    answer:
      "Temos pacotes adaptados a cada aluno e categoria. Contacta-nos via WhatsApp para um orçamento imediato e personalizado!",
  },
  {
    question: "Posso pagar em prestações?",
    answer:
      "Sim, facilitamos o pagamento em fases para que possas focar-te apenas na tua aprendizagem, sem preocupações financeiras imediatas.",
  },
  {
    question: "Quanto tempo demora a tirar a carta?",
    answer:
      "O tempo depende da tua disponibilidade e dedicação. Na NOVAFAFE, trabalhamos para otimizar o processo mantendo a qualidade da formação.",
  },
  {
    question: "Qual é a idade mínima para tirar a carta?",
    answer:
      "Podes inscrever-te e começar as aulas teóricas com 17 anos e 6 meses (para a categoria B).",
  },
  {
    question: "Que documentos preciso para me inscrever?",
    answer:
      "Apenas do teu Cartão de Cidadão e de um Atestado Médico Eletrónico (que podemos ajudar a tratar).",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground">
            Encontre respostas às dúvidas mais comuns sobre a formação de condução.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-border rounded overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 lg:p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 lg:px-5 pb-4 lg:pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">Não encontrou a resposta que procurava?</p>
          <a
            href="tel:253504130"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Fale Connosco
          </a>
        </div>
      </div>
    </section>
  )
}
