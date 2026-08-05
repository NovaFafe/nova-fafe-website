import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LegalMobileToc } from "@/components/legal-mobile-toc"
import { Shield, Mail, Phone, MapPin } from "lucide-react"
import type { ReactNode } from "react"

export const metadata = {
  title: "Política de Privacidade - NOVAFAFE Escola de Condução",
  description: "Como a NOVAFAFE recolhe, utiliza e protege os teus dados pessoais, em conformidade com o RGPD.",
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const sections: { id: string; title: string; content: ReactNode }[] = [
  {
    id: "responsavel",
    title: "Responsável pelo Tratamento",
    content: (
      <p>
        A <strong className="font-semibold text-foreground">NOVAFAFE — Escola de Condução</strong>, com sede na Rua da Cumieira, n.º 6, 4820-179 Fafe, Portugal, é a entidade responsável pelo tratamento dos teus dados pessoais. Para questões de privacidade, contacta-nos em{" "}
        <a href="mailto:novafafe@gmail.com" className="font-semibold text-primary hover:underline">
          novafafe@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    id: "dados",
    title: "Dados Recolhidos",
    content: (
      <>
        <p>Recolhemos os seguintes tipos de dados pessoais:</p>
        <BulletList
          items={[
            "Dados de identificação: nome completo, data de nascimento, número de CC",
            "Dados de contacto: endereço de email, número de telemóvel",
            "Dados de navegação: endereço IP, páginas visitadas, via analytics (Vercel Analytics)",
            "Dados de formulários de contacto: mensagens enviadas voluntariamente",
          ]}
        />
      </>
    ),
  },
  {
    id: "finalidade",
    title: "Finalidade do Tratamento",
    content: (
      <>
        <p>Os teus dados são tratados para:</p>
        <BulletList
          items={[
            "Gerir a tua inscrição e formação na escola de condução",
            "Comunicar sobre o teu processo de aprendizagem e exames",
            "Responder a pedidos de contacto e orçamentos",
            "Cumprir obrigações legais perante o IMT e outras entidades",
            "Melhorar a experiência de navegação no website (dados anónimos)",
          ]}
        />
      </>
    ),
  },
  {
    id: "base-legal",
    title: "Base Legal",
    content: (
      <p>
        O tratamento dos teus dados baseia-se no consentimento prestado no momento do contacto ou inscrição, na execução do contrato de formação, e no cumprimento de obrigações legais (nomeadamente as impostas pelo IMT para efeitos de registo e habilitação de condutores).
      </p>
    ),
  },
  {
    id: "partilha",
    title: "Partilha de Dados",
    content: (
      <p>
        Os teus dados não são vendidos nem cedidos a terceiros para fins comerciais. Podem ser partilhados com o{" "}
        <strong className="font-semibold text-foreground">Instituto da Mobilidade e dos Transportes (IMT)</strong> no âmbito do processo de habilitação legal, e com prestadores de serviços técnicos que operam sob contrato de confidencialidade (ex.: plataformas de email, alojamento web).
      </p>
    ),
  },
  {
    id: "conservacao",
    title: "Conservação dos Dados",
    content: (
      <p>
        Os dados relativos à formação são conservados pelo período legalmente exigido (mínimo de 5 anos após cessação da relação contratual). Dados de contacto de potenciais clientes são eliminados após 12 meses sem interação.
      </p>
    ),
  },
  {
    id: "direitos",
    title: "Os Teus Direitos (RGPD)",
    content: (
      <>
        <p>Tens o direito de:</p>
        <BulletList
          items={[
            "Aceder aos dados que temos sobre ti",
            "Solicitar a correção de dados incorretos",
            'Solicitar a eliminação dos teus dados ("direito ao esquecimento")',
            "Opor-te ao tratamento para fins de marketing",
            "Solicitar a portabilidade dos teus dados",
            "Apresentar reclamação à CNPD (cnpd.pt)",
          ]}
        />
        <p className="mt-4">
          Para exerceres estes direitos, contacta-nos em{" "}
          <a href="mailto:novafafe@gmail.com" className="font-semibold text-primary hover:underline">
            novafafe@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        Este website utiliza cookies técnicos (necessários para o funcionamento) e Vercel Analytics para compreender o comportamento de navegação de forma agregada e anónima, sem recurso a cookies de rastreamento de terceiros. Podes limitar a recolha de dados de analytics nas definições do teu browser sem afetar a funcionalidade do site.
      </p>
    ),
  },
]

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl pb-16 pt-36 text-center sm:mx-0 sm:text-left lg:pb-20 lg:pt-44">
            <nav className="mb-8 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500 sm:justify-start">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Privacidade</span>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              <Shield className="h-3.5 w-3.5" />
              RGPD · Proteção de dados
            </div>

            <h1 className="mb-4 text-4xl font-black leading-[1.0] tracking-tighter text-white sm:text-5xl lg:text-6xl">
              Política de Privacidade
            </h1>
            <p className="text-sm text-zinc-500">Última atualização: março de 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[240px_minmax(0,1fr)]">

            {/* Table of contents — desktop */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 rounded-2xl border border-border/70 bg-background p-5 shadow-sm" aria-label="Índice">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Índice
                </p>
                <ol className="space-y-1">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="mr-2 text-xs font-bold text-primary/60">{index + 1}.</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contacto"
                      className="block rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="mr-2 text-xs font-bold text-primary/60">9.</span>
                      Contacto
                    </a>
                  </li>
                </ol>
              </nav>
            </aside>

            {/* Main article */}
            <article className="min-w-0">
              <LegalMobileToc items={sections.map((s) => ({ id: s.id, title: s.title }))} />
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm">
                <div className="divide-y divide-border/60">
                  {sections.map((section, index) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
                    >
                      <div className="mb-4 flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-black text-primary">
                          {index + 1}
                        </span>
                        <h2 className="pt-1 text-xl font-bold text-foreground sm:text-2xl">
                          {section.title}
                        </h2>
                      </div>
                      <div className="pl-0 text-base leading-relaxed text-muted-foreground sm:pl-[52px]">
                        {section.content}
                      </div>
                    </section>
                  ))}

                  {/* Contact */}
                  <section id="contacto" className="scroll-mt-28 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
                    <div className="mb-4 flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-black text-primary">
                        9
                      </span>
                      <h2 className="pt-1 text-xl font-bold text-foreground sm:text-2xl">
                        Contacto
                      </h2>
                    </div>

                    <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:pl-[52px]">
                      Para qualquer questão relacionada com a privacidade dos teus dados, contacta-nos através dos seguintes meios:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 sm:pl-[52px]">
                      <a
                        href="mailto:novafafe@gmail.com"
                        className="flex items-center gap-3 rounded-xl border border-border/70 bg-muted/30 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Mail className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email</p>
                          <p className="truncate text-sm font-semibold text-foreground">novafafe@gmail.com</p>
                        </div>
                      </a>

                      <a
                        href="tel:+351253504130"
                        className="flex items-center gap-3 rounded-xl border border-border/70 bg-muted/30 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Phone className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Telefone</p>
                          <p className="text-sm font-semibold text-foreground">253 504 130</p>
                        </div>
                      </a>

                      <a
                        href="https://maps.app.goo.gl/mZE7x4AASsmaHKB4A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl border border-border/70 bg-muted/30 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5 sm:col-span-2"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Morada</p>
                          <p className="text-sm font-semibold text-foreground">Rua da Cumieira, n.º 6 — 4820-179 Fafe</p>
                        </div>
                      </a>
                    </div>
                  </section>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Os teus dados são tratados em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
