import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionLink } from "@/components/section-link"

const highlights = [
  "Pedagogia paciente e adaptada ao teu ritmo",
  "Ambiente familiar e profissional",
  "Clareza em todo o processo de formação",
]

export function About() {
  return (
    <section id="sobre" className="overflow-hidden">
      {/* Mobile — imagem + painel escuro */}
      <div className="lg:hidden">
        <div className="relative aspect-[4/3] min-h-[280px] sm:min-h-[360px]">
          <Image
            src="/NovaFafe-Facebook/Escola/mural.jpg"
            alt="Mural da NOVAFAFE"
            fill
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
        </div>

        <div className="relative bg-zinc-950 px-7 py-10 sm:px-8 sm:py-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary" />
          <AboutContent variant="mobile" />
        </div>
      </div>

      {/* Desktop — mural full-bleed com overlay editorial à direita */}
      <div className="relative hidden min-h-[720px] lg:block xl:min-h-[780px]">
        <Image
          src="/NovaFafe-Facebook/Escola/mural.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />

        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-l from-black/95 via-black/78 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-[58%] bg-[var(--brand-green)] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-primary/40 via-primary/15 to-transparent"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-12 py-28 xl:min-h-[780px] xl:px-16">
          <div className="ml-auto w-full max-w-xl">
            <AboutContent variant="desktop" />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutContent({ variant }: { variant: "mobile" | "desktop" }) {
  const isDesktop = variant === "desktop"

  return (
    <div className={`space-y-6 text-left sm:space-y-8 ${isDesktop ? "space-y-8" : ""}`}>
      <div className="space-y-4 sm:space-y-5">
        <h2
          className={
            isDesktop
              ? "text-balance text-5xl font-black leading-[0.98] tracking-tighter text-white xl:text-6xl"
              : "text-balance text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl"
          }
        >
          {isDesktop ? (
            <>
              Uma escola jovem
              <br />
              com espírito <span className="text-primary">inovador.</span>
            </>
          ) : (
            <>
              Uma escola jovem com espírito{" "}
              <span className="text-primary">inovador.</span>
            </>
          )}
        </h2>

        <div
          className={
            isDesktop
              ? "space-y-4 text-lg leading-relaxed text-white/75"
              : "space-y-4 text-base leading-relaxed text-zinc-200 sm:text-lg"
          }
        >
          <p>
            Fundada em 2018, a <strong className="font-semibold text-white">NOVAFAFE</strong> nasceu
            para mudar a forma como se aprende a conduzir em Fafe. Deixamos para trás os métodos
            antiquados e focamo-nos no que realmente importa: a tua segurança e confiança.
          </p>
          <p>
            Não somos apenas uma escola, somos uma equipa próxima. Aqui conhecemos o teu nome, as
            tuas dificuldades e celebramos contigo cada conquista.
          </p>
        </div>
      </div>

      <ul className={isDesktop ? "grid gap-2.5" : "space-y-3"}>
        {highlights.map((item) => (
          <li
            key={item}
            className={
              isDesktop
                ? "flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm"
                : "flex items-start gap-3 text-sm text-white sm:text-base"
            }
          >
            <span
              className={
                isDesktop
                  ? "h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              }
            />
            <span className={isDesktop ? "" : "leading-snug"}>{item}</span>
          </li>
        ))}
      </ul>

      {isDesktop ? (
        <SectionLink href="/sobre" variant="outlineDark">
          Conhece a nossa história
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </SectionLink>
      ) : (
        <div className="flex justify-center">
          <SectionLink href="/sobre" variant="primary">
            Conhece a nossa história
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </SectionLink>
        </div>
      )}
    </div>
  )
}
