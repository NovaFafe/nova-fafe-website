"use client"

import { useState } from "react"
import { ChevronDown, Phone } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo demora a tirar a carta?",
    answer:
      "O tempo médio para obter a carta de condução é de 3 a 6 meses, dependendo da disponibilidade do aluno para frequentar as aulas teóricas e práticas. Na NOVAFAFE, trabalhamos para otimizar o processo mantendo a qualidade da formação.",
  },
  {
    question: "Posso fazer aulas à noite ou ao fim de semana?",
    answer:
      "Sim, oferecemos horários flexíveis que incluem períodos noturnos e fins de semana. Adaptamos o horário das aulas à sua rotina profissional e pessoal.",
  },
  {
    question: "Qual é a idade mínima para tirar a carta?",
    answer:
      "Para a carta de automóvel (categoria B), a idade mínima é 17 anos e 6 meses. Para motociclos, varia conforme a categoria pretendida. Consulte-nos para mais detalhes.",
  },
  {
    question: "O que acontece se reprovar no exame?",
    answer:
      "Se reprovar, pode remarcar o exame após um período de espera. Na NOVAFAFE, oferecemos aulas adicionais de preparação para garantir que está pronto para a nova tentativa.",
  },
  {
    question: "Os veículos têm duplo comando?",
    answer:
      "Sim, todos os nossos veículos de instrução estão equipados com duplo comando, garantindo a máxima segurança durante as aulas práticas.",
  },
  {
    question: "Posso mudar de categoria com carta estrangeira?",
    answer:
      "Sim, é possível fazer a mudança de categoria mesmo com carta estrangeira, desde que cumpra os requisitos legais. Contacte-nos para avaliarmos o seu caso específico.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
