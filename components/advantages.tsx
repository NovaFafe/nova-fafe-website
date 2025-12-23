import { CheckCircle2, Shield, Clock, Users, Award, Headphones } from "lucide-react"

const advantages = [
  {
    icon: Award,
    title: "Profissionalismo e Qualidade",
    description: "Equipa dedicada e focada na aprendizagem eficaz e segura de cada aluno.",
  },
  {
    icon: Clock,
    title: "Flexibilidade de Horários",
    description: "Horários adaptados ao seu ritmo: manhã, tarde, noite e fins de semana.",
  },
  {
    icon: Shield,
    title: "Alta Taxa de Aprovação",
    description: "95% dos nossos alunos aprovam à primeira tentativa no exame.",
  },
  {
    icon: Users,
    title: "Instrutores Certificados",
    description: "Profissionais experientes e pacientes, focados no seu sucesso.",
  },
  {
    icon: Headphones,
    title: "Acompanhamento Personalizado",
    description: "Suporte contínuo durante todo o processo de formação.",
  },
  {
    icon: CheckCircle2,
    title: "Avaliações Positivas",
    description: "Clientes destacam o bom atendimento e rapidez em obter a carta.",
  },
]

export function Advantages() {
  return (
    <section id="vantagens" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Vantagens</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Porquê Escolher a NOVAFAFE?</h2>
            <p className="text-muted-foreground mb-8">
              Descubra o que nos diferencia e porque somos a escolha certa para a sua formação de condução.
            </p>

            <div className="space-y-4">
              {advantages.map((advantage, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded border border-border hover:border-primary/30 hover:bg-muted/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded overflow-hidden">
              <img
                src="/happy-student-with-driving-license.jpg"
                alt="Aluno feliz com carta de condução"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Taxa de Aprovação</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Alunos Formados</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Avaliação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
