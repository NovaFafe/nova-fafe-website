import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Car,
  Truck,
  Tractor,
  RefreshCw,
  Globe,
  RotateCcw,
  ClipboardList,
  type LucideIcon,
} from "lucide-react"
import { Motorbike, Ciclomotor } from "@/components/icons/category-icons"
import { SectionLink } from "@/components/section-link"

type Category = {
  icon: LucideIcon
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
    icon: Car,
    label: "Categoria B",
    title: "Carta de Ligeiros",
    age: "17½ anos",
    description: "Código e condução em paralelo, ao teu ritmo.",
    href: "/servicos#categoria-b",
    image: "/NovaFafe-Facebook/Marketing/categoria-b-bmw.png",
    featured: true,
  },
  {
    icon: Motorbike,
    label: "A / A1 / A2",
    title: "Motociclos",
    age: "16+ anos",
    description: "Acesso directo ou progressivo entre subcategorias.",
    href: "/servicos#categoria-a",
    image: "/NovaFafe-Facebook/Marketing/categoria-a-s1000rr.png",
  },
  {
    icon: Ciclomotor,
    label: "Categoria AM",
    title: "Ciclomotor",
    age: "14+ anos",
    description: "Primeira habilitação a partir dos 14 anos.",
    href: "/servicos#categoria-am",
    image: "/NovaFafe-Facebook/Marketing/categoria-am-sym.png",
  },
]

const otherServices: { icon: LucideIcon; label: string; tag: string; href: string }[] = [
  {
    icon: Truck,
    label: "Pesados / TCC / CAM",
    tag: "Parceria",
    href: "/servicos#pesados-tcc-cam",
  },
  {
    icon: Tractor,
    label: "Tratores Agrícolas",
    tag: "Parceria",
    href: "/servicos#tratores",
  },
  {
    icon: RefreshCw,
    label: "Revalidação de Carta",
    tag: "Complementar",
    href: "/servicos#revalidacao",
  },
  {
    icon: Globe,
    label: "Troca de Carta Estrangeira",
    tag: "Complementar",
    href: "/servicos#troca-carta",
  },
  {
    icon: RotateCcw,
    label: "Recuperação de Pontos",
    tag: "Complementar",
    href: "/servicos#recuperacao-pontos",
  },
  {
    icon: ClipboardList,
    label: "Apoio IMT",
    tag: "Administrativo",
    href: "/servicos#apoio-imt",
  },
]

function CategoryCard({ item }: { item: Category }) {
  const featured = item.featured

  return (
    <Link
      href={item.href}
      className={[
        "group relative block overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-14px_rgba(0,0,0,0.45)]",
        featured
          ? "min-h-[340px] sm:min-h-[380px] sm:col-span-2 lg:col-span-3 lg:row-span-2 lg:min-h-[560px]"
          : "min-h-[240px] sm:min-h-[260px] lg:col-span-2 lg:min-h-[270px]",
      ].join(" ")}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 50vw, 40vw"}
        className="object-cover scale-105 grayscale brightness-[0.45] transition-all duration-700 group-hover:scale-100 group-hover:brightness-100 group-hover:grayscale-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/15 transition-all duration-700 group-hover:from-black/82 group-hover:via-black/30 group-hover:to-black/5" />

      {/* Topo — utilitários */}
      <div
        className={[
          "absolute inset-x-0 top-0 z-10 flex items-start justify-between",
          featured ? "pl-6 pt-5 pr-4 sm:pl-7 sm:pt-5 sm:pr-4 lg:pl-8" : "pl-5 pt-4 pr-3.5 sm:pl-5 sm:pt-4 sm:pr-3.5",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-center rounded-2xl bg-black/30 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-primary",
            featured ? "h-12 w-12 sm:h-14 sm:w-14" : "h-11 w-11",
          ].join(" ")}
        >
          <item.icon className={featured ? "h-6 w-6 sm:h-7 sm:w-7" : "h-5 w-5"} strokeWidth={1.75} />
        </div>

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
          featured ? "p-7 sm:p-8 lg:p-10" : "p-5 sm:p-6",
        ].join(" ")}
      >
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
          {item.label}
        </p>

        <h3
          className={[
            "font-black leading-[1.05] tracking-tight text-white",
            featured ? "mb-3 text-3xl sm:text-4xl lg:text-[2.75rem]" : "mb-1 text-xl sm:text-2xl",
          ].join(" ")}
        >
          {item.title}
        </h3>

        <p
          className={[
            "font-light leading-relaxed text-white/70 transition-all duration-500",
            featured
              ? "max-w-sm text-sm sm:text-base"
              : "max-h-0 overflow-hidden text-sm opacity-0 group-hover:mt-2 group-hover:max-h-16 group-hover:opacity-100",
          ].join(" ")}
        >
          {item.description}
        </p>

        <div
          className={[
            "h-px bg-primary transition-all duration-500 ease-out",
            featured ? "mt-6 w-10 group-hover:w-full" : "mt-4 w-6 group-hover:w-full",
          ].join(" ")}
        />

        <span
          className={[
            "inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 group-hover:gap-3",
            featured ? "mt-5 text-sm" : "mt-3 text-xs sm:text-sm",
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
    <section id="servicos" className="relative bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
              Formação
            </span>
            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              O que queres
              <span className="text-primary"> tirar?</span>
            </h2>
          </div>
          <p className="max-w-sm text-base font-light leading-relaxed text-muted-foreground lg:text-right">
            Ligeiros, motas e ciclomotor — escolhe a categoria e vê o detalhe na página de serviços.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
          {categories.map((item) => (
            <CategoryCard key={item.href} item={item} />
          ))}
        </div>

        <div className="mt-12 lg:mt-14">
          <div className="rounded-3xl bg-muted/50 p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Também fazemos
                </span>
                <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  Outras formações e serviços
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Pesados, tratores, revalidação, troca de carta e apoio administrativo — tudo num só lugar.
                </p>
              </div>
              <SectionLink href="/servicos" className="shrink-0 self-start lg:self-auto">
                Ver todos os serviços
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </SectionLink>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-4 rounded-2xl bg-background p-4 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <service.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      {service.tag}
                    </p>
                    <p className="mt-0.5 text-sm font-bold leading-snug text-foreground sm:text-base">
                      {service.label}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
