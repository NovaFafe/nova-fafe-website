import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Termos e Condições - NOVAFAFE Escola de Condução",
  description: "Termos e Condições de utilização do website e dos serviços da NOVAFAFE Escola de Condução.",
}

const sections = [
  {
    id: "identificacao",
    title: "Identificação",
    content: (
      <p>
        A <strong className="font-semibold text-foreground">NOVAFAFE — Escola de Condução</strong>, com sede na Rua da Cumieira, n.º 6, 4820-179 Fafe, Portugal, é responsável pelo website{" "}
        <strong className="font-semibold text-foreground">novafafe.pt</strong> e pelos serviços de formação de condução prestados a alunos inscritos.
      </p>
    ),
  },
  {
    id: "website",
    title: "Utilização do Website",
    content: (
      <p>
        O acesso e utilização deste website implica a aceitação dos presentes Termos e Condições. O utilizador compromete-se a utilizar o website de forma lícita, não perturbando o seu normal funcionamento nem transmitindo conteúdos ilegais, ofensivos ou prejudiciais a terceiros.
      </p>
    ),
  },
  {
    id: "servicos",
    title: "Serviços e Contratação",
    content: (
      <p>
        A inscrição nos cursos de condução da NOVAFAFE implica a aceitação das condições específicas comunicadas no momento da matrícula, incluindo tabela de preços, calendário e regulamento interno. Os preços divulgados no website são indicativos e podem variar conforme a categoria e as necessidades individuais do aluno.
      </p>
    ),
  },
  {
    id: "exames",
    title: "Exames",
    content: (
      <p>
        O exame de código só pode ser marcado após a conclusão de 16 horas de formação prática, nos termos da Portaria n.º 185/2015. Na marcação do exame teórico ou prático, deve ser efetuado o respetivo pagamento.
      </p>
    ),
  },
  {
    id: "cancelamentos",
    title: "Cancelamentos e Reembolsos",
    content: (
      <p>
        O cancelamento de aulas práticas deve ser comunicado com pelo menos 24 horas de antecedência. A não comparência sem aviso prévio poderá ser debitada conforme tabela vigente. Pedidos de reembolso são analisados caso a caso, de acordo com a legislação em vigor.
      </p>
    ),
  },
  {
    id: "propriedade",
    title: "Propriedade Intelectual",
    content: (
      <p>
        Todo o conteúdo deste website — textos, imagens, logótipos e design — é propriedade da NOVAFAFE ou de terceiros devidamente autorizados. É proibida a reprodução total ou parcial sem autorização expressa por escrito.
      </p>
    ),
  },
  {
    id: "responsabilidade",
    title: "Limitação de Responsabilidade",
    content: (
      <p>
        A NOVAFAFE não se responsabiliza por danos resultantes de interrupções no acesso ao website, erros tipográficos ou informação desatualizada. O conteúdo é fornecido &quot;como está&quot; e pode ser alterado sem aviso prévio.
      </p>
    ),
  },
  {
    id: "lei",
    title: "Lei Aplicável",
    content: (
      <p>
        Os presentes Termos e Condições regem-se pela lei portuguesa. Qualquer litígio será submetido à competência dos tribunais da comarca de Fafe.
      </p>
    ),
  },
]

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl pb-16 pt-36 lg:pb-20 lg:pt-44">
            <nav className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Termos e Condições</span>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              <FileText className="h-3.5 w-3.5" />
              Documento legal
            </div>

            <h1 className="mb-4 text-4xl font-black leading-[1.0] tracking-tighter text-white sm:text-5xl lg:text-6xl">
              Termos e Condições
            </h1>
            <p className="text-sm text-zinc-500">Última atualização: março de 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm">
                <div className="space-y-0 divide-y divide-border/60">
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
                      Para questões relacionadas com estes termos, contacta-nos através dos seguintes meios:
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
                Ao utilizar este website, confirmas que leste e aceitas estes Termos e Condições.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
