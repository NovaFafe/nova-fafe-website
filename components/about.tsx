import { Award, Users, Car, Clock } from "lucide-react"

const stats = [
  { icon: Users, value: "5.000+", label: "Alunos Formados" },
  { icon: Award, value: "95%", label: "Taxa de Aprovação" },
  { icon: Car, value: "10+", label: "Veículos Modernos" },
  { icon: Clock, value: "20+", label: "Anos de Experiência" },
]

export function About() {
  return (
    <section id="sobre" className="relative z-0 py-20 lg:py-28 pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded overflow-hidden">
              <img
                src="/driving-instructor-teaching-student.jpg"
                alt="Instrutor da NOVAFAFE a ensinar um aluno"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-primary text-white p-4 lg:p-6 rounded shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold">20+</div>
              <div className="text-sm opacity-90">
                Anos de
                <br />
                Experiência
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Sobre a NOVAFAFE</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Escola de Condução de Referência em Fafe
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">NOVAFAFE</strong> é uma escola de condução estabelecida em Fafe,
                reconhecida pelo seu profissionalismo, qualidade no ensino e excelente atendimento aos alunos.
              </p>
              <p>
                A nossa equipa dedicada oferece condições espetaculares de formação, com rapidez no processo de obtenção
                da carta, tanto para automóvel como para motociclo e mudanças de categoria.
              </p>
              <p>
                Com mais de duas décadas de experiência, formamos milhares de condutores seguros e confiantes, mantendo
                uma das mais altas taxas de aprovação da região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
