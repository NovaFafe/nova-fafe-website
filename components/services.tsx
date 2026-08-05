import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SectionLink } from "@/components/section-link"

type Category = {
  label: string
  title: string
  age: string
  description: string
  href: string
  image: string
  featured?: boolean
}

const categories: Category[] = [
  {
    label: "Categoria B",
    title: "Carta de Ligeiros",
    age: "17½ anos",
    description: "Código e condução em paralelo, ao teu ritmo.",
    href: "/servicos#categoria-b",
    image: "/NovaFafe-Facebook/Marketing/categoria-b-bmw.png",
    featured: true,
  },
  {
    label: "A / A1 / A2",
    title: "Motociclos",
    age: "16+ anos",
    description: "Acesso directo ou progressivo entre subcategorias.",
    href: "/servicos#categoria-a",
    image: "/NovaFafe-Facebook/Marketing/categoria-a-s1000rr.png",
  },
  {
    label: "Categoria AM",
    title: "Ciclomotor",
    age: "14+ anos",
    description: "Primeira habilitação a partir dos 14 anos.",
    href: "/servicos#categoria-am",
    image: "/NovaFafe-Facebook/Marketing/categoria-am-sym.png",
  },
]

const otherServices: { image: string; label: string; tag: string; href: string }[] = [
  {
    image: "/NovaFafe-Facebook/Marketing/categoria-pesados.png",
    label: "Pesados / TCC / CAM",
    tag: "Parceria",
    href: "/servicos#pesados-tcc-cam",
  },
  {
    image: "/NovaFafe-Facebook/Marketing/categoria-tratores.png",
    label: "Tratores Agrícolas",
    tag: "Parceria",
    href: "/servicos#tratores",
  },
  {
    image: "/NovaFafe-Facebook/Marketing/categoria-revalidacao.png",
    label: "Revalidação de Carta",
    tag: "Complementar",
    href: "/servicos#revalidacao",
  },
  {
    image: "/NovaFafe-Facebook/Marketing/categoria-troca.png",
    label: "Troca de Carta Estrangeira",
    tag: "Complementar",
    href: "/servicos#troca-carta",
  },
  {
    image: "/NovaFafe-Facebook/Marketing/categoria-pontos.png",
    label: "Recuperação de Pontos",
    tag: "Complementar",
    href: "/servicos#recuperacao-pontos",
  },
  {
    image: "/NovaFafe-Facebook/Marketing/categoria-imt.png",
    label: "Apoio IMT",
    tag: "Administrativo",
    href: "/servicos#apoio-imt",
  },
]

function OtherServiceCard({ service }: { service: (typeof otherServices)[number] }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col overflow-hidden rounded-xl bg-background shadow-[0_8px_24px_-10px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.22)] sm:h-20 sm:flex-row sm:rounded-2xl"
    >
      <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-full sm:w-20">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, 80px"
          className="object-cover grayscale"
        />
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-2 px-2.5 py-2.5 sm:px-4">
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500 leading-none">
            {service.tag}
          </p>
          <p className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-zinc-800 sm:text-[13px]">
            {service.label}
          </p>
        </div>
        <ArrowUpRight
          className="hidden h-3.5 w-3.5 shrink-0 text-zinc-400 sm:block"
          strokeWidth={2}
        />
      </div>
    </Link>
  )
}

function CategoryCard({ item }: { item: Category }) {
  const featured = item.featured

  return (
    <Link
      href={item.href}
      className={[
        "group relative block overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-14px_rgba(0,0,0,0.45)]",
        featured
          ? "min-h-[300px] sm:min-h-[380px] sm:col-span-2 lg:col-span-3 lg:row-span-2 lg:min-h-[560px]"
          : "min-h-[220px] sm:min-h-[200px] lg:col-span-2 lg:min-h-0 lg:h-full",
      ].join(" ")}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 50vw, 40vw"}
        className="object-cover scale-105 grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/15 transition-all duration-700 group-hover:from-black/82 group-hover:via-black/30 group-hover:to-black/5" />

      {/* Topo — idade */}
      <div
        className={[
          "absolute inset-x-0 top-0 z-10 flex items-start justify-end",
          featured ? "px-6 pt-5 sm:px-7 sm:pt-5 lg:px-8" : "px-4 pt-3 sm:px-4 sm:pt-3",
        ].join(" ")}
      >
        <span
          className={[
            "rounded-full bg-black/30 px-3 py-1.5 font-bold tabular-nums text-white ring-1 ring-white/10 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0",
            featured ? "text-xs" : "text-[11px]",
          ].join(" ")}
        >
          {item.age}
        </span>
      </div>

      <div
        className={[
          "absolute z-10 flex items-center justify-center rounded-full bg-primary text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          featured ? "right-4 top-5 h-9 w-9 sm:right-4 sm:top-5" : "right-3.5 top-4 h-8 w-8",
        ].join(" ")}
      >
        <ArrowUpRight className={featured ? "h-4 w-4" : "h-3.5 w-3.5"} />
      </div>

      {/* Base — conteúdo editorial */}
      <div
        className={[
          "absolute inset-x-0 bottom-0 z-10",
          featured ? "p-5 sm:p-8 lg:p-10" : "p-4 sm:p-5",
        ].join(" ")}
      >
        <p className="mb-1.5 text-xs font-black uppercase tracking-[0.2em] text-primary sm:mb-2 sm:text-[10px] sm:tracking-[0.25em]">
          {item.label}
        </p>

        <h3
          className={[
            "font-black leading-[1.05] tracking-tight text-white",
            featured ? "mb-2 text-2xl sm:mb-3 sm:text-4xl lg:text-[2.75rem]" : "mb-1 text-lg sm:mb-0.5 sm:text-xl",
          ].join(" ")}
        >
          {item.title}
        </h3>

        <p
          className={[
            "font-light leading-relaxed text-white/70 transition-all duration-500",
            featured
              ? "max-w-sm text-sm sm:text-base"
              : "mt-1.5 line-clamp-2 text-sm opacity-100 sm:mt-0 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:group-hover:mt-2 sm:group-hover:max-h-16 sm:group-hover:opacity-100",
          ].join(" ")}
        >
          {item.description}
        </p>

        <div
          className={[
            "h-px bg-primary transition-all duration-500 ease-out",
            featured ? "mt-4 w-10 group-hover:w-full sm:mt-6" : "mt-2.5 w-5 group-hover:w-full",
          ].join(" ")}
        />

        <span
          className={[
            "inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 group-hover:gap-3",
            featured ? "mt-3 text-sm sm:mt-5" : "mt-2 text-xs",
          ].join(" ")}
        >
          Ver formação
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

export function Services() {
  return (
    <section id="servicos" className="relative bg-background py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="section-heading max-w-2xl">
            <h2 className="text-3xl font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              O que queres
              <span className="text-primary"> tirar?</span>
            </h2>
          </div>
          <p className="section-heading-desc max-w-sm text-base font-light leading-relaxed text-muted-foreground lg:mx-0 lg:text-right">
            Ligeiros, motas e ciclomotor — escolhe a categoria e vê o detalhe na página de serviços.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 lg:items-stretch">
          {categories.map((item) => (
            <CategoryCard key={item.href} item={item} />
          ))}
        </div>

        <div className="mt-12 lg:mt-14">
          <div className="rounded-3xl border border-border/40 bg-muted/40 p-5 sm:p-7 lg:p-9">
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="section-heading">
                <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  Outras formações e serviços
                </h3>
                <p className="section-heading-desc mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Pesados, tratores, revalidação, troca de carta e apoio administrativo — tudo num só lugar.
                </p>
              </div>
              <SectionLink href="/servicos" className="shrink-0 self-center lg:self-start">
                Ver todos os serviços
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>

            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <OtherServiceCard key={service.href} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
