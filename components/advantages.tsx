const advantages = [
  {
    num: "01",
    title: "O Teu Ritmo, a Nossa Prioridade",
    description: "Na NovaFafe, o plano de aulas é desenhado à tua medida. Ajustamos o ensino à tua evolução para que te sintas 100% preparado.",
    tag: "Ensino Personalizado",
  },
  {
    num: "02",
    title: "Instrutores que Inspiram Confiança",
    description: "Mais do que ensinar a conduzir, a nossa equipa foca-se em eliminar o stress e criar condutores seguros e decididos.",
    tag: "Equipa Dedicada",
  },
  {
    num: "03",
    title: "Ambiente de Estudo Moderno",
    description: "Esqueceá as salas de código abafadas. As nossas instalações na Rua da Cumieira oferecem o conforto ideal para a tua aprendizagem teórica.",
    tag: "Instalações Modernas",
  },
  {
    num: "04",
    title: "Suporte em Cada Etapa",
    description: "Do exame médico à marcação da prova prática, tratamos de toda a burocracia para te focares apenas na estrada.",
    tag: "Apoio Total",
  },
]

export function Advantages() {
  return (
    <section id="vantagens" className="bg-gray-950 overflow-hidden relative">
      {/* Subtle glow accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="pt-20 lg:pt-28 pb-16 lg:pb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">
              Porque escolher a NovaFafe
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter">
              Feitos para o<br />
              <span className="text-white/25 italic font-light">seu sucesso.</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg leading-relaxed max-w-sm font-light lg:text-right">
            Mais do que tirar a carta — tornamos o processo simples, humano e sem stress.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/8" />

        {/* Items */}
        <div className="divide-y divide-white/8">
          {advantages.map((item) => (
            <div
              key={item.num}
              className="group relative grid grid-cols-[auto_1fr] lg:grid-cols-[120px_1fr_1fr] gap-x-8 lg:gap-x-16 gap-y-3 py-10 lg:py-12 items-start lg:items-center -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 overflow-hidden"
            >
              {/* Green glow background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[radial-gradient(ellipse_80%_120%_at_50%_50%,rgba(34,139,34,0.18)_0%,rgba(34,139,34,0.07)_45%,transparent_75%)]" />

              {/* Number */}
              <span className="relative text-[3.5rem] lg:text-[5rem] font-black leading-none text-white/10 transition-colors duration-500 tabular-nums select-none">
                {item.num}
              </span>

              {/* Title + Tag */}
              <div className="relative flex flex-col gap-2 pt-2 lg:pt-0">
                <span className="inline-block self-start text-[9px] font-black uppercase tracking-[0.2em] text-primary/70 border border-primary/20 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description — on desktop, 3rd column; on mobile, spans both columns */}
              <p className="relative col-span-2 lg:col-span-1 text-white/50 text-base leading-relaxed font-light lg:pt-0 pl-[calc(3.5rem+2rem)] lg:pl-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pb-20 lg:pb-28" />
      </div>
    </section>
  )
}
