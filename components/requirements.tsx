import { FileText, Calendar, Camera, CreditCard, CheckCircle2 } from "lucide-react"

const requirements = [
  {
    icon: Calendar,
    title: "Idade Mínima",
    description: "17 anos e 6 meses para carta de automóvel (categoria B).",
  },
  {
    icon: FileText,
    title: "Cartão de Cidadão",
    description: "Documento de identificação válido (CC ou Passaporte).",
  },
  {
    icon: CreditCard,
    title: "NIF",
    description: "Número de Identificação Fiscal (se aplicável).",
  },
  {
    icon: Camera,
    title: "Fotografia",
    description: "Foto tipo passe recente a cores.",
  },
]

const steps = [
  { step: "1", title: "Inscrição", description: "Inscreva-se na autoescola com os documentos necessários." },
  { step: "2", title: "Aulas Teóricas", description: "Frequente as aulas de código e prepare-se para o exame." },
  { step: "3", title: "Exame Teórico", description: "Realize o exame teórico no IMT." },
  { step: "4", title: "Aulas Práticas", description: "Inicie as aulas de condução com instrutor certificado." },
  { step: "5", title: "Exame Prático", description: "Realize o exame prático e obtenha a sua carta." },
]

export function Requirements() {
  return (
    <section id="requisitos" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Requisitos</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">O Que Precisa Para Tirar a Carta</h2>
          <p className="text-muted-foreground">
            Conheça os documentos e requisitos necessários para iniciar a sua formação de condução em Portugal.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {requirements.map((req, i) => (
            <div key={i} className="bg-white border border-border rounded p-5 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded mx-auto mb-4 flex items-center justify-center">
                <req.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{req.title}</h3>
              <p className="text-sm text-muted-foreground">{req.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white border border-border rounded p-6 lg:p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Processo de Obtenção da Carta</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Revalidation Info */}
        <div className="mt-8 bg-primary/5 border border-primary/20 rounded p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Revalidação da Carta</h3>
              <p className="text-sm text-muted-foreground">
                A carta de condução precisa de revalidação a cada 10 anos (até aos 60 anos) e depois com maior
                frequência. A NOVAFAFE pode ajudar a preparar e agendar a revalidação, incluindo aulas de atualização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
