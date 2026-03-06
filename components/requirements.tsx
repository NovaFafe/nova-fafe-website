import { FileText, Calendar, CheckCircle2, ArrowRight, ClipboardList, Stethoscope } from "lucide-react"

const docs = [
  {
    icon: Calendar,
    title: "Idade Mínima",
    detail: "17 anos e 6 meses",
    description: "Para inscrição e aulas teóricas na Categoria B. O exame prático só pode ser feito aos 18 anos.",
  },
  {
    icon: FileText,
    title: "Cartão de Cidadão",
    detail: "Documento válido",
    description: "Identificação nacional válida e atualizada. Cidadãos estrangeiros devem apresentar título de residência.",
  },
  {
    icon: Stethoscope,
    title: "Atestado Médico",
    detail: "Via SNS / Médico de família",
    description: "Atestado Médico Eletrónico transmitido ao IMT. Podemos orientar-te no processo de obtenção.",
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
    title: "Aulas de código",
    description: "Frequenta as aulas teóricas em sala ou online e prepara-te para o exame.",
  },
  {
    step: "03",
    title: "Exame teórico (IMT)",
    description: "Realizas o exame de código no IMT. A nossa taxa de aprovação é elevada.",
  },
  {
    step: "04",
    title: "Aulas práticas",
    description: "Conduzes com instrutor certificado em viatura BMW ou Mercedes, ao teu ritmo.",
  },
  {
    step: "05",
    title: "Exame prático",
    description: "O exame final com examinador do IMT. Celebramos contigo a aprovação.",
  },
]

export function Requirements() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pt-36 lg:pt-44 pb-16 lg:pb-24 max-w-3xl">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-8 uppercase tracking-widest">
              <a href="/" className="hover:text-white transition-colors">Início</a>
              <span>·</span>
              <span className="text-primary">Requisitos & Inscrição</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
              Como<br />
              <span className="text-primary">funciona.</span>
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-xl font-light">
              O que precisas para te inscrever e como é o processo, passo a passo. Sem burocracia complicada.
            </p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3">Documentação</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">O que precisas para te inscrever</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {docs.map((doc, i) => (
              <div key={i} className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <doc.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{doc.detail}</p>
                <h3 className="text-xl font-bold text-foreground mb-3">{doc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3">Processo</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">Da inscrição à aprovação</h2>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gray-200" style={{zIndex: 0}} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative" style={{zIndex: 1}}>
              {steps.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-black text-lg mb-5 shadow-lg shadow-primary/20">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Revalidation note */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ClipboardList className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Já tens carta? Verifica a revalidação</h3>
              <p className="text-muted-foreground leading-relaxed">
                A carta de condução precisa de revalidação periódica — a cada 10 anos (até 60 anos), a cada 5 anos (60–70 anos) e a cada 2 anos após os 70. A NOVAFAFE trata de todo o processo, incluindo agendamento do exame médico.
              </p>
              <a href="/contacto" className="inline-flex items-center gap-2 mt-4 text-primary font-bold text-sm hover:gap-3 transition-all">
                Saber mais <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
