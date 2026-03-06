import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Termos e Condições - NOVAFAFE Escola de Condução",
  description: "Termos e Condições de utilização do website e dos serviços da NOVAFAFE Escola de Condução.",
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pt-36 lg:pt-44 pb-16 lg:pb-20 max-w-3xl">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-8 uppercase tracking-widest">
              <a href="/" className="hover:text-white transition-colors">Início</a>
              <span>·</span>
              <span className="text-primary">Termos e Condições</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tighter mb-4">
              Termos e Condições
            </h1>
            <p className="text-zinc-500 text-sm">Última atualização: março de 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 prose prose-gray max-w-none">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Identificação</h2>
              <p>
                A NOVAFAFE — Escola de Condução, com sede em Fafe, Portugal, é responsável pelo website <strong>novafafe.pt</strong> e pelos serviços de formação de condução prestados a alunos inscritos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Utilização do Website</h2>
              <p>
                O acesso e utilização deste website implica a aceitação dos presentes Termos e Condições. O utilizador compromete-se a utilizar o website de forma lícita, não perturbando o seu normal funcionamento nem transmitindo conteúdos ilegais, ofensivos ou prejudiciais a terceiros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Serviços e Contratação</h2>
              <p>
                A inscrição nos cursos de condução da NOVAFAFE implica a aceitação das condições específicas comunicadas no momento da matrícula, incluindo tabela de preços, calendário e regulamento interno. Os preços divulgados no website são indicativos e podem variar conforme a categoria e as necessidades individuais do aluno.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancelamentos e Reembolsos</h2>
              <p>
                O cancelamento de aulas práticas deve ser comunicado com pelo menos 24 horas de antecedência. A não comparência sem aviso prévio poderá ser debitada conforme tabela vigente. Pedidos de reembolso são analisados caso a caso, de acordo com a legislação em vigor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste website — textos, imagens, logótipos e design — é propriedade da NOVAFAFE ou de terceiros devidamente autorizados. É proibida a reprodução total ou parcial sem autorização expressa por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitação de Responsabilidade</h2>
              <p>
                A NOVAFAFE não se responsabiliza por danos resultantes de interrupções no acesso ao website, erros tipográficos ou informação desatualizada. O conteúdo é fornecido "como está" e pode ser alterado sem aviso prévio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Lei Aplicável</h2>
              <p>
                Os presentes Termos e Condições regem-se pela lei portuguesa. Qualquer litígio será submetido à competência dos tribunais da comarca de Fafe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto</h2>
              <p>
                Para questões relacionadas com estes termos, contacta-nos através de <a href="mailto:novafafec@gmail.com" className="text-primary font-semibold hover:underline">novafafec@gmail.com</a> ou pelo telefone <a href="tel:+351253504148" className="text-primary font-semibold hover:underline">+351 253 504 148</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
