"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionLink } from "@/components/section-link"
import { cn } from "@/lib/utils"

const ITEMS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  image: `/NovaFafe-Facebook/Aprovados/${i + 1}.jpg`,
}))

const AUTOPLAY_MS = 3000

function FacebookCta({ className }: { className?: string }) {
  return (
    <SectionLink
      href="https://www.facebook.com/NovaFafe"
      variant="facebook"
      external
      className={cn("shrink-0 px-6 py-3", className)}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-white" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      Ver no Facebook
    </SectionLink>
  )
}

export function RecentApprovals() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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

  useEffect(() => {
    if (!emblaApi || isPaused) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const id = window.setInterval(() => {
      emblaApi.scrollNext()
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [emblaApi, isPaused])

  useEffect(() => {
    if (!emblaApi) return

    const pause = () => setIsPaused(true)
    const resume = () => setIsPaused(false)

    emblaApi.on("pointerDown", pause)
    emblaApi.on("pointerUp", resume)
    return () => {
      emblaApi.off("pointerDown", pause)
      emblaApi.off("pointerUp", resume)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="relative isolate overflow-x-clip border-t border-border bg-muted/30 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-6 lg:mb-14">
          <div className="section-heading">
            <h2 className="text-3xl font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Os nossos
              <br />
              <span className="text-primary">aprovados.</span>
            </h2>
          </div>

          {/* Desktop — navegação + Facebook */}
          <div className="hidden flex-wrap items-center gap-3 sm:flex">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Seguinte"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="ml-1 text-xs font-medium tabular-nums text-muted-foreground">
                {selectedIndex + 1} / {ITEMS.length}
              </span>
            </div>

            <FacebookCta />
          </div>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-x">
            {ITEMS.map((student, index) => {
              const isActive = index === selectedIndex

              return (
                <div
                  key={student.id}
                  className="min-w-0 shrink-0 grow-0 basis-[220px] px-2 sm:basis-[240px] sm:px-2.5 lg:basis-[280px] lg:px-3"
                >
                  <article
                    className={cn(
                      "h-[300px] overflow-hidden rounded-2xl border bg-zinc-200 shadow-sm transition-[opacity,box-shadow,transform] duration-500 sm:h-[360px] lg:h-[420px]",
                      isActive
                        ? "scale-100 border-transparent opacity-100 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.2)]"
                        : "scale-[0.94] border-black/[0.06] opacity-45",
                    )}
                  >
                    <img
                      src={student.image}
                      alt={`Aluno aprovado ${student.id}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile — Facebook abaixo do slider */}
      <div className="mx-auto mt-6 flex max-w-7xl justify-center px-7 sm:hidden sm:px-8">
        <FacebookCta />
      </div>
    </section>
  )
}
