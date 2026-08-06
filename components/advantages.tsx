const advantages = [
  {
    num: "01",
    title: "O Teu Ritmo, a Nossa Prioridade",
    description: "Na NovaFafe, o plano de aulas é desenhado à tua medida. Ajustamos o ensino à tua evolução para que te sintas 100% preparado.",
  },
  {
    num: "02",
    title: "Instrutores que Inspiram Confiança",
    description: "Mais do que ensinar a conduzir, a nossa equipa foca-se em eliminar o stress e criar condutores seguros e decididos.",
  },
  {
    num: "03",
    title: "Ambiente de Estudo Moderno",
    description: "Esquece as salas de código abafadas. As nossas instalações na Rua da Cumieira oferecem o conforto ideal para a tua aprendizagem teórica.",
  },
  {
    num: "04",
    title: "Suporte em Cada Etapa",
    description: "Do exame médico à marcação da prova prática, tratamos de toda a burocracia para te focares apenas na estrada.",
  },
]

export function Advantages() {
  return (
    <section id="vantagens" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/NovaFafe-Facebook/Marketing/advantages-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gray-950/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/55 via-gray-950/72 to-gray-950/82" />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 pb-10 pt-16 sm:gap-8 sm:pb-16 sm:pt-20 lg:flex-row lg:items-end lg:justify-between lg:pb-20 lg:pt-28">
          <div className="section-heading max-w-2xl">
            <h2 className="text-3xl font-black leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Feitos para o<br />
              <span className="font-light italic text-white/25">teu sucesso.</span>
            </h2>
          </div>
          <p className="section-heading-desc max-w-sm text-base font-light leading-relaxed text-white/50 sm:text-lg lg:mx-0 lg:text-right">
            Mais do que tirar a carta — tornamos o processo simples, humano e sem stress.
          </p>
        </div>

        <div className="h-px w-full bg-white/8" />

        {/* Mobile cards */}
        <div className="space-y-3 py-6 md:hidden">
          {advantages.map((item) => (
            <div key={item.num} className="rounded-2xl bg-white/5 p-5">
              <span className="text-3xl font-black tabular-nums leading-none text-white/15">
                {item.num}
              </span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop rows */}
        <div className="hidden divide-y divide-white/8 md:block">
          {advantages.map((item) => (
            <div
              key={item.num}
              className="group relative grid grid-cols-[120px_1fr_1fr] items-center gap-x-16 overflow-hidden px-0 py-10 lg:-mx-12 lg:px-12 lg:py-12"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_50%,rgba(34,139,34,0.18)_0%,rgba(34,139,34,0.07)_45%,transparent_75%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="relative text-[3.5rem] font-black tabular-nums leading-none text-white/10 select-none lg:text-[5rem]">
                {item.num}
              </span>
              <h3 className="relative text-xl font-bold leading-snug text-white lg:text-2xl">
                {item.title}
              </h3>
              <p className="relative text-base font-light leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pb-16 lg:pb-28" />
      </div>
    </section>
  )
}
