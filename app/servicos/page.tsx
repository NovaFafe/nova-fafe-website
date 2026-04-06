import { Header } from "@/components/header"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Car, Bike, Zap, RotateCcw, RefreshCw, ClipboardList, ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react"

export const metadata = {
  title: "Serviços - NOVAFAFE Escola de Condução",
  description: "Carta de ligeiros, motociclos, ciclomotores, recuperação de pontos e apoio IMT. Toda a formação de condução em Fafe.",
}

const services = [
  {
    id: "categoria-b",
    icon: Car,
    badge: "Mais Procurado",
    category: "Categoria B",
    title: "Carta de Ligeiros",
    description: "O percurso completo para tirar a carta de carro. Aulas teóricas, exame de código, aulas práticas e exame final — acompanhado em cada etapa.",
    features: [
      "Aulas de código em sala e online",
      "Frota BMW e Mercedes Classe A",
      "Instrutores certificados e pacientes",
      "Apoio total nos exames IMT",
      "Pagamento faseado disponível",
    ],
    highlight: true,
  },
  {
    id: "categoria-a",
    icon: Bike,
    badge: null,
    category: "Categoria A / A1 / A2",
    title: "Carta de Motociclo",
    description: "Para quem quer conduzir em duas rodas. Formamos para as três subcategorias com equipamento adequado e pistas de treino.",
    features: [
      "A1 — motociclos até 125cc (16 anos)",
      "A2 — motociclos até 35kW (18 anos)",
      "A — sem limitações (≥ 24 anos ou 2 anos de A2)",
      "Acesso direto ou progressivo",
      "Inclui equipa de proteção básica",
    ],
    highlight: false,
  },
  {
    id: "categoria-am",
    icon: Zap,
    badge: null,
    category: "Categoria AM",
    title: "Carta de Ciclomotor",
    description: "A partir dos 14 anos. Ideal para jovens que querem ingressar na estrada em segurança com ciclomotores e triciclos de baixa potência.",
    features: [
      "A partir dos 14 anos de idade",
      "Veículos até 45 km/h e 50cc",
      "Processo rápido e acessível",
      "Aulas teóricas e práticas incluídas",
    ],
    highlight: false,
  },
  {
    id: "recuperacao-pontos",
    icon: RotateCcw,
    badge: null,
    category: "Recuperação de Pontos",
    title: "Curso AVF",
    description: "Perdeste pontos na tua carta? O Curso de Atualização e Valorização de Formandos (AVF) permite recuperar até 3 pontos.",
    features: [
      "Recupera até 3 pontos por curso",
      "Obrigatório após certos crimes rodoviários",
      "Turmas reduzidas para melhor aprendizagem",
      "Certificado emitido pelo IMT",
    ],
    highlight: false,
  },
  {
    id: "revalidacao",
    icon: RefreshCw,
    badge: null,
    category: "Revalidação",
    title: "Revalidação de Título",
    description: "A carta precisa de revalidação periódica. Tratamos de todo o processo, incluindo aulas de atualização e agendamento de exame médico.",
    features: [
      "A cada 10 anos (até aos 60 anos)",
      "A cada 5 anos (60–70 anos)",
      "A cada 2 anos (após 70 anos)",
      "Apoio no agendamento e documentação",
    ],
    highlight: false,
  },
  {
    id: "apoio-imt",
    icon: ClipboardList,
    badge: null,
    category: "Apoio Administrativo",
    title: "Apoio IMT",
    description: "Toda a burocracia do IMT tratada por nós. Agendamentos, submissão de documentos, atestados médicos eletrónicos e muito mais.",
    features: [
      "Agendamento de exames no IMT",
      "Tratamento do Atestado Médico Eletrónico",
      "Submissão de documentos online",
      "Acompanhamento personalizado",
    ],
    highlight: false,
  },
]

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pt-36 lg:pt-44 pb-16 lg:pb-24 max-w-3xl">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-8 uppercase tracking-widest">
              <a href="/" className="hover:text-white transition-colors">Início</a>
              <span>·</span>
              <span className="text-primary">Serviços</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
              O que<br />
              <span className="text-primary">oferecemos.</span>
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-xl font-light">
              Desde a carta de carro à recuperação de pontos. Toda a formação rodoviária de que precisas, num só lugar em Fafe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`group relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${
                  service.highlight
                    ? "bg-primary border-primary shadow-2xl shadow-primary/20 text-white"
                    : "bg-card border-border shadow-sm hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {service.badge && (
                  <div className="absolute -top-3 right-8 bg-zinc-900 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {service.badge}
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.highlight ? "bg-white/20" : "bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                }`}>
                  <service.icon className={`h-7 w-7 ${
                    service.highlight ? "text-white" : "text-primary group-hover:text-white transition-colors"
                  }`} />
                </div>

                <p className={`text-xs font-black uppercase tracking-[0.2em] mb-2 ${
                  service.highlight ? "text-white/70" : "text-primary"
                }`}>{service.category}</p>
                <h2 className={`text-2xl font-bold mb-3 tracking-tight ${
                  service.highlight ? "text-white" : "text-foreground"
                }`}>{service.title}</h2>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${
                  service.highlight ? "text-white/80" : "text-muted-foreground"
                }`}>{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                        service.highlight ? "text-white/70" : "text-primary"
                      }`} />
                      <span className={`text-sm ${
                        service.highlight ? "text-white/80" : "text-muted-foreground"
                      }`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contacto"
                  className={`inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all mt-auto ${
                    service.highlight ? "text-white" : "text-primary"
                  }`}
                >
                  Pedir informações <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
