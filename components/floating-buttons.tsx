"use client"

import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { MessageCircle, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_HREF = "https://wa.me/351968268952"
const PHONES = [
  { label: "Fixo", href: "tel:+351253504130", display: "253 504 130" },
  { label: "Telemóvel", href: "tel:+351968268952", display: "968 268 952" },
] as const

type SocialLink = {
  id: string
  label: string
  href: string
  className?: string
  style?: CSSProperties
  icon: ReactNode
}

const SOCIALS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/ecnovafafe/",
    style: {
      background:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    },
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/NovaFafe",
    className: "bg-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-white", className)} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function FloatingButtons() {
  const [open, setOpen] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const fabRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const fabId = "floating-contact-trigger"

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    panelRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        setOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    panel.addEventListener("keydown", trapFocus)
    return () => panel.removeEventListener("keydown", trapFocus)
  }, [open])

  useEffect(() => {
    if (open) return
    if (document.activeElement?.closest("#floating-contact-panel")) {
      fabRef.current?.focus()
    }
  }, [open])

  const close = () => setOpen(false)
  const closeOnNavigate = () => setOpen(false)

  const duration = reducedMotion ? "duration-0" : "duration-300"

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity",
          duration,
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
        onClick={close}
      />

      {/* Panel — mobile bottom sheet / desktop anchored card */}
      <div
        ref={panelRef}
        id="floating-contact-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
        inert={!open}
        tabIndex={-1}
        className={cn(
          "fixed z-40 outline-none",
          // Mobile: bottom sheet (extra bottom pad so FAB doesn't cover actions)
          "inset-x-0 bottom-0 max-h-[min(85dvh,560px)]",
          "rounded-t-3xl bg-white shadow-2xl",
          "pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.25rem))]",
          // Desktop: anchored above FAB
          "sm:inset-x-auto sm:bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] sm:right-6",
          "sm:w-[min(360px,calc(100vw-3rem))] sm:max-h-none sm:rounded-3xl",
          "sm:pb-5",
          "transition-all",
          duration,
          "ease-out",
          open
            ? "translate-y-0 opacity-100 pointer-events-auto visible"
            : "translate-y-full opacity-0 pointer-events-none invisible sm:translate-y-3",
        )}
      >
        {/* Mobile handle */}
        <div className="flex justify-center pt-3 sm:hidden" aria-hidden>
          <span className="h-1 w-10 rounded-full bg-gray-300" />
        </div>

        <div className="flex items-start justify-between gap-3 px-5 pb-1 pt-3 sm:pt-5">
          <div className="min-w-0">
            <h2 id={titleId} className="text-lg font-bold tracking-tight text-gray-900">
              Como preferes falar?
            </h2>
            <p className="mt-1 text-sm text-gray-500">Escolhe o canal — respondemos depressa.</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto overscroll-contain px-5 pb-2 pt-4">
          {/* WhatsApp — primary */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeOnNavigate}
            className="group flex min-h-14 w-full items-center gap-3 rounded-2xl bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-[#25D366]/30 transition-transform active:scale-[0.98] sm:hover:brightness-105"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block text-base font-bold leading-tight">WhatsApp</span>
              <span className="block text-xs font-medium text-white/85">Resposta rápida</span>
            </span>
            <MessageCircle className="h-5 w-5 shrink-0 opacity-80 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Phones */}
          <div className="grid grid-cols-2 gap-2">
            {PHONES.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                onClick={closeOnNavigate}
                className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl bg-muted/80 px-2 py-3 text-center transition-colors active:bg-muted sm:hover:bg-muted"
              >
                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-primary">
                  <Phone className="h-3.5 w-3.5" />
                  {phone.label}
                </span>
                <span className="text-sm font-semibold text-gray-800">{phone.display}</span>
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3 border-t border-gray-100 pt-4">
            {SOCIALS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeOnNavigate}
                aria-label={social.label}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full shadow-md shadow-black/15 transition-transform active:scale-95 sm:hover:scale-105",
                  social.className,
                )}
                style={social.style}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAB */}
      <button
        ref={fabRef}
        id={fabId}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="floating-contact-panel"
        aria-label={open ? "Fechar contacto" : "Contactar"}
        className={cn(
          "fixed z-40 flex h-14 w-14 items-center justify-center rounded-full",
          "right-3 bottom-[max(1rem,env(safe-area-inset-bottom))]",
          "sm:right-6 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]",
          "bg-primary text-white shadow-xl shadow-primary/35",
          "transition-all",
          duration,
          "hover:bg-primary/90 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          open && "rotate-0 bg-neutral-900 shadow-black/30 hover:bg-neutral-800",
        )}
      >
        {open ? (
          <X className="h-6 w-6" strokeWidth={2.25} />
        ) : (
          <MessageCircle className="h-6 w-6" strokeWidth={2.25} />
        )}
      </button>
    </>
  )
}
