import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de Privacidade - NOVAFAFE Escola de Condução",
  description: "Como a NOVAFAFE recolhe, utiliza e protege os teus dados pessoais, em conformidade com o RGPD.",
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pt-36 lg:pt-44 pb-16 lg:pb-20 max-w-3xl">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-8 uppercase tracking-widest">
              <a href="/" className="hover:text-white transition-colors">Início</a>
              <span>·</span>
              <span className="text-primary">Privacidade</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tighter mb-4">
              Política de Privacidade
            </h1>
            <p className="text-zinc-500 text-sm">Última atualização: março de 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsável pelo Tratamento</h2>
              <p>
                A <strong>NOVAFAFE — Escola de Condução</strong>, com sede em Fafe, Portugal, é a entidade responsável pelo tratamento dos teus dados pessoais. Para questões de privacidade, contacta-nos em <a href="mailto:novafafec@gmail.com" className="text-primary font-semibold hover:underline">novafafec@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados Recolhidos</h2>
              <p className="mb-3">Recolhemos os seguintes tipos de dados pessoais:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Dados de identificação: nome completo, data de nascimento, número de CC",
                  "Dados de contacto: endereço de email, número de telemóvel",
                  "Dados de navegação: endereço IP, páginas visitadas, via cookies analíticos (Google Analytics)",
                  "Dados de formulários de contacto: mensagens enviadas voluntariamente",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidade do Tratamento</h2>
              <p className="mb-3">Os teus dados são tratados para:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Gerir a tua inscrição e formação na escola de condução",
                  "Comunicar sobre o teu processo de aprendizagem e exames",
                  "Responder a pedidos de contacto e orçamentos",
                  "Cumprir obrigações legais perante o IMT e outras entidades",
                  "Melhorar a experiência de navegação no website (dados anónimos)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Base Legal</h2>
              <p>
                O tratamento dos teus dados baseia-se no consentimento prestado no momento do contacto ou inscrição, na execução do contrato de formação, e no cumprimento de obrigações legais (nomeadamente as impostas pelo IMT para efeitos de registo e habilitação de condutores).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Partilha de Dados</h2>
              <p>
                Os teus dados não são vendidos nem cedidos a terceiros para fins comerciais. Podem ser partilhados com o <strong>Instituto da Mobilidade e dos Transportes (IMT)</strong> no âmbito do processo de habilitação legal, e com prestadores de serviços técnicos que operam sob contrato de confidencialidade (ex.: plataformas de email, alojamento web).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Conservação dos Dados</h2>
              <p>
                Os dados relativos à formação são conservados pelo período legalmente exigido (mínimo de 5 anos após cessação da relação contratual). Dados de contacto de potenciais clientes são eliminados após 12 meses sem interação.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Os Teus Direitos (RGPD)</h2>
              <p className="mb-3">Tens o direito de:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Aceder aos dados que temos sobre ti",
                  "Solicitar a correção de dados incorretos",
                  "Solicitar a eliminação dos teus dados (\"direito ao esquecimento\")",
                  "Opor-te ao tratamento para fins de marketing",
                  "Solicitar a portabilidade dos teus dados",
                  "Apresentar reclamação à CNPD (cnpd.pt)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">Para exerceres estes direitos, contacta-nos em <a href="mailto:novafafec@gmail.com" className="text-primary font-semibold hover:underline">novafafec@gmail.com</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
              <p>
                Este website utiliza cookies técnicos (necessários para o funcionamento) e cookies analíticos (Google Analytics, com IP anonimizado) para compreender o comportamento de navegação de forma agregada. Podes desativar os cookies analíticos nas definições do teu browser sem afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contacto</h2>
              <p>
                Para qualquer questão relacionada com a privacidade dos teus dados, contacta-nos:<br />
                <a href="mailto:novafafec@gmail.com" className="text-primary font-semibold hover:underline">novafafec@gmail.com</a><br />
                <a href="tel:+351253504148" className="text-primary font-semibold hover:underline">+351 253 504 148</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
