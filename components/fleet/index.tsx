"use client"

import { useCallback, useEffect, useState } from "react"
import { Car, Bike, Leaf } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { FleetCard, type FleetItem } from "./fleet-card"

const ligeiros: FleetItem = {
  id: "cars",
  title: "Ligeiros Premium",
  description: "Mercedes Classe A e BMW Série 1. Viaturas recentes com toda a tecnologia que mereces.",
  icon: Car,
  imageDefault: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-frente.jpeg",
  imageHover: "/NovaFafe-Facebook/Veiculos/bmw-mercedes-tras.jpeg",
  subLabel: "Categoria B",
  link: "/servicos#categoria-b",
}

const motociclos: FleetItem = {
  id: "bikes",
  title: "Yamaha R1",
  description: "Formação nas categorias A, A1 e A2 — do iniciante ao avançado.",
  icon: Bike,
  imageDefault: "/NovaFafe-Facebook/Veiculos/yamaha-r1.jpeg",
  imageHover: "/NovaFafe-Facebook/Veiculos/yamaha-r1.jpeg",
  subLabel: "Categorias A, A1, A2",
  link: "/servicos#categoria-a",
}

const eletricos: FleetItem[] = [
  {
    id: "volvo",
    title: "Volvo EX30",
    description: "Compacto elétrico premium com design escandinavo e máxima segurança.",
    icon: Leaf,
    imageDefault: "/NovaFafe-Facebook/Veiculos/volvo-ex30-frente.jpg",
    imageHover: "/NovaFafe-Facebook/Veiculos/volvo-ex30-tras.jpg",
    subLabel: "Cat. B Elétrico",
    link: "/servicos#categoria-b",
  },
  {
    id: "yoyo",
    title: "XEV Yoyo",
    description: "100% elétrico — formação para quadriciclos (B1) e ciclomotores (AM).",
    icon: Bike,
    imageDefault: "/NovaFafe-Facebook/Veiculos/xev-yoyo-tras.jpeg",
    imageHover: "/NovaFafe-Facebook/Veiculos/xev-yoyo-interior.jpeg",
    subLabel: "Quadriciclos (B1) / ciclomotores (AM)",
    link: "/servicos#categoria-am",
  },
]

const carouselItems: FleetItem[] = [ligeiros, motociclos, ...eletricos]

export function Fleet() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="frota" className="relative overflow-hidden bg-muted/30 py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:mb-12">
          <div className="section-heading">
            <h2 className="text-3xl font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A nossa <span className="text-primary">frota.</span>
            </h2>
            <p className="section-heading-desc mt-3 max-w-lg text-base font-light text-muted-foreground">
              Viaturas modernas e seguras para formação prática em todas as categorias.
            </p>
          </div>
        </div>

        {/* Mobile + tablet carousel (< lg) */}
        <div className="-mx-7 sm:-mx-8 lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-x pl-7 sm:pl-8">
              {carouselItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] pr-3 sm:basis-[55%] sm:pr-4 md:basis-[45%]"
                >
                  <FleetCard {...item} variant="compact" className="h-[280px] sm:h-[300px]" />
                </div>
              ))}
              {/* end spacer so last card has right margin */}
              <div className="w-4 shrink-0 grow-0 basis-4 sm:w-4" aria-hidden />
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-1.5 px-7 sm:px-8">
            {carouselItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir para ${item.title}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={[
                  "h-1.5 rounded-full transition-all",
                  index === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-border",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Desktop bento (lg+) */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto]">
          <FleetCard {...ligeiros} variant="featured" className="lg:row-span-2" />
          <FleetCard {...motociclos} variant="compact" className="lg:col-start-2 lg:row-start-1" />
          <div className="grid grid-cols-2 gap-5 lg:col-start-2 lg:row-start-2">
            {eletricos.map((item) => (
              <FleetCard key={item.id} {...item} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
