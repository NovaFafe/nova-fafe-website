import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionLink } from "@/components/section-link"

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-background pt-4 pb-16 sm:pb-20 lg:pt-6 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(480px,58%)]"
      >
        <div
          className="absolute inset-0 bg-[length:14px_14px] opacity-[0.22] sm:opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(163 163 163 / 0.7) 0.6px, transparent 0.6px)",
            maskImage: "linear-gradient(to top, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-200/25 via-neutral-100/8 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-24">
          <div className="relative order-1">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/NovaFafe-Facebook/Escola/mural.jpg"
                alt="Mural da NOVAFAFE"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[260px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          <div className="order-2 space-y-6 sm:space-y-10">
            <div>
              <h2 className="section-heading mb-5 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:mb-8 sm:text-5xl lg:text-left lg:text-6xl">
                Uma escola jovem <br />
                com espírito <span className="text-primary">inovador.</span>
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:space-y-6 sm:text-lg">
                <p>
                  Fundada em 2018, a <strong className="font-bold text-foreground">NOVAFAFE</strong> nasceu para mudar a forma como se aprende a conduzir em Fafe. Deixamos para trás os métodos antiquados e focamo-nos no que realmente importa: a tua segurança e confiança.
                </p>
                <p>
                  Não somos apenas uma escola, somos uma equipa próxima. Aqui conhecemos o teu nome, as tuas dificuldades e celebramos contigo cada conquista.
                </p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Pedagogia paciente e adaptada ao teu ritmo",
                "Ambiente familiar e profissional",
                "Clareza em todo o processo de formação",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-base font-medium text-foreground sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center pt-1 lg:justify-start">
              <SectionLink href="/sobre">
                Conhece a nossa história
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
