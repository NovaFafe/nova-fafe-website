"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_HREF = "https://wa.me/351968268952"
const MAPS_URL = "https://maps.app.goo.gl/mZE7x4AASsmaHKB4A"

const navLinks = [
  { label: "Início", href: "/" },
  { label: "A Escola", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Requisitos", href: "/requisitos" },
  { label: "Contactos", href: "/contacto" },
  { label: "Dúvidas Frequentes", href: "/duvidas-frequentes" },
]

const schedules = [
  {
    title: "Secretaria",
    rows: [
      { days: "Segunda – Sexta", slots: ["10:00 – 13:00", "15:00 – 19:30"] },
      { days: "Sábado", slots: ["10:00 – 13:00"] },
    ],
  },
  {
    title: "Apoio teórico",
    rows: [{ days: "Segunda – Sexta", slots: ["11:00 – 13:00", "15:00 – 20:00"] }],
  },
  {
    title: "Domingo",
    closed: true,
  },
] as const

type ScheduleRow = { days: string; slots: string[] }

function ScheduleDayRow({
  row,
  layout,
}: {
  row: ScheduleRow
  layout: "mobile" | "desktop"
}) {
  if (layout === "mobile") {
    return (
      <div className="py-3 text-center first:pt-0 last:pb-0 [&+&]:border-t [&+&]:border-white/[0.06]">
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-500">{row.days}</p>
        <ul className="space-y-1.5">
          {row.slots.map((slot) => (
            <li key={slot} className="text-sm font-medium tabular-nums text-gray-200">
              {slot}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_8.75rem] items-start gap-x-5 border-t border-white/[0.06] py-2.5 first:border-t-0 first:pt-0 last:pb-0">
      <dt className="pt-0.5 text-xs leading-snug text-gray-400">{row.days}</dt>
      <dd className="text-right">
        <ul className="space-y-1">
          {row.slots.map((slot) => (
            <li key={slot} className="whitespace-nowrap text-sm font-medium tabular-nums text-gray-200">
              {slot}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  )
}

function FooterSchedule({ className, layout = "desktop" }: { className?: string; layout?: "mobile" | "desktop" }) {
  const isMobile = layout === "mobile"

  return (
    <div className={cn(isMobile ? "space-y-3" : "space-y-5", className)}>
      {schedules.map((block) => {
        if ("closed" in block && block.closed) {
          return (
            <div
              key={block.title}
              className={cn(
                isMobile
                  ? "flex flex-col items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-4 text-center"
                  : "grid grid-cols-[minmax(0,1fr)_8.75rem] items-center gap-x-5 border-t border-white/[0.06] pt-4",
              )}
            >
              <p className={cn("font-medium text-white", isMobile ? "text-sm" : "text-sm")}>{block.title}</p>
              <span
                className={cn(
                  "text-xs font-medium uppercase tracking-wide text-gray-500",
                  isMobile && "rounded-full bg-white/[0.06] px-2.5 py-1",
                  !isMobile && "text-right",
                )}
              >
                Encerrado
              </span>
            </div>
          )
        }

        return (
          <div
            key={block.title}
            className={cn(
              isMobile ? "rounded-xl bg-white/[0.04] px-4 py-5 text-center" : "border-t border-white/[0.06] pt-4 first:border-t-0 first:pt-0",
            )}
          >
            <p
              className={cn(
                "font-semibold text-white",
                isMobile ? "mb-5 text-sm" : "mb-3 text-sm",
              )}
            >
              {block.title}
            </p>
            <dl className={isMobile ? "" : "min-w-0"}>
              {block.rows.map((row) => (
                <ScheduleDayRow key={row.days} row={row} layout={layout} />
              ))}
            </dl>
          </div>
        )
      })}
    </div>
  )
}

function FooterSocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <Link
        href="https://www.instagram.com/ecnovafafe/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-gray-500 transition-colors hover:text-white"
      >
        <Instagram className="h-5 w-5" strokeWidth={1.75} />
      </Link>
      <Link
        href="https://www.facebook.com/NovaFafe"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-gray-500 transition-colors hover:text-white"
      >
        <Facebook className="h-5 w-5" strokeWidth={1.75} />
      </Link>
      <Link
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="text-gray-500 transition-colors hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </div>
  )
}

/* ─── Mobile ─── */

function FooterMobilePanel({
  title,
  children,
  tone = "neutral",
  className,
}: {
  title: string
  children: React.ReactNode
  tone?: "neutral" | "green"
  className?: string
}) {
  return (
    <section
      className={cn(
        "rounded-2xl px-5 py-6 text-center",
        tone === "green" ? "bg-primary/[0.08]" : "bg-white/[0.04]",
        className,
      )}
    >
      <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">{title}</h3>
      {children}
    </section>
  )
}

function FooterMobileBrand() {
  return (
    <header className="space-y-3 pb-2 text-center">
      <Link href="/" className="inline-block">
        <Image
          src="/NovaFafe-Facebook/Brand/logo-emblema.png"
          alt="Nova Fafe"
          width={140}
          height={47}
          className="mx-auto h-10 w-auto object-contain brightness-0 invert opacity-90"
        />
      </Link>
      <p className="mx-auto max-w-[17rem] text-sm leading-relaxed text-gray-400">
        A tua escola de condução de referência em Fafe.
      </p>
      <FooterSocialLinks className="justify-center pt-1" />
    </header>
  )
}

function FooterMobileNav() {
  return (
    <FooterMobilePanel title="Navegação">
      <ul className="mx-auto grid max-w-[16rem] grid-cols-2 gap-x-3 gap-y-0.5">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="block py-2 text-sm text-gray-400 transition-colors hover:text-primary active:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </FooterMobilePanel>
  )
}

function FooterMobileContact() {
  return (
    <FooterMobilePanel title="Contacto" tone="green" className="py-6">
      <div className="mx-auto flex max-w-[19rem] flex-col gap-5">
        <div className="rounded-xl bg-white/[0.04] px-4 py-5">
          <p className="mb-5 text-xs font-medium uppercase tracking-wide text-gray-500">Telefones</p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="tel:+351253504130"
              className="flex flex-col items-center gap-2.5 text-gray-300 transition-colors active:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06]">
                <Phone className="h-4 w-4 text-primary" strokeWidth={2} />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Fixo</span>
              <span className="text-sm font-semibold tabular-nums">253 504 130</span>
            </a>
            <a
              href="tel:+351968268952"
              className="flex flex-col items-center gap-2.5 text-gray-300 transition-colors active:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06]">
                <Phone className="h-4 w-4 text-primary" strokeWidth={2} />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Telemóvel</span>
              <span className="text-sm font-semibold tabular-nums">968 268 952</span>
            </a>
          </div>
        </div>

        <a
          href="mailto:novafafe@gmail.com"
          className="flex flex-col items-center gap-2.5 rounded-xl bg-white/[0.04] px-4 py-5 text-gray-300 transition-colors active:text-primary"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06]">
            <Mail className="h-4 w-4 text-primary" strokeWidth={2} />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Email</span>
          <span className="text-sm font-semibold">novafafe@gmail.com</span>
        </a>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2.5 rounded-xl bg-white/[0.04] px-4 py-5 text-gray-400 transition-colors active:text-primary"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06]">
            <MapPin className="h-4 w-4 text-primary" strokeWidth={2} />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Morada</span>
          <span className="text-sm font-medium leading-relaxed text-gray-300">
            Rua da Cumieira, N.º 6
            <br />
            4820-179 Fafe
          </span>
        </a>
      </div>
    </FooterMobilePanel>
  )
}

function FooterMobileSchedule() {
  return (
    <FooterMobilePanel title="Horário">
      <FooterSchedule layout="mobile" className="mx-auto max-w-[19rem]" />
    </FooterMobilePanel>
  )
}

function FooterMobile() {
  return (
    <div className="mb-8 flex flex-col gap-3 lg:hidden">
      <FooterMobileBrand />
      <FooterMobileNav />
      <FooterMobileContact />
      <FooterMobileSchedule />
    </div>
  )
}

/* ─── Main ─── */

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-neutral-800 bg-black font-sans text-gray-300">
      <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
      <div className="pointer-events-none absolute top-20 left-10 h-72 w-72 rounded-full bg-green-500/10 blur-[96px]" />
      <div className="pointer-events-none absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-emerald-600/10 blur-[64px]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-8 sm:px-8 lg:px-12 lg:pt-12">
        <FooterMobile />

        {/* ── DESKTOP ── */}
        <div className="mb-16 hidden lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/NovaFafe-Facebook/Brand/logo-emblema.png"
                alt="Nova Fafe"
                width={160}
                height={53}
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Formamos condutores responsáveis e seguros. A tua escola de condução de referência em Fafe, com uma
              equipa experiente e dedicada ao teu sucesso.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/NovaFafe"
                target="_blank"
                className="group rounded-full bg-neutral-800 p-2 transition-colors duration-300 hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/ecnovafafe/"
                target="_blank"
                className="group rounded-full bg-neutral-800 p-2 transition-colors duration-300 hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="relative mb-6 inline-block text-lg font-semibold text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-12 after:rounded-full after:bg-primary after:content-['']">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 transition-colors duration-200 hover:text-primary"
                  >
                    <ChevronRight className="-ml-4 h-4 w-4 text-primary opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-1">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="relative mb-6 inline-block text-lg font-semibold text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-12 after:rounded-full after:bg-primary after:content-['']">
              Horário
            </h3>
            <FooterSchedule layout="desktop" />
          </div>

          <div>
            <h3 className="relative mb-6 inline-block text-lg font-semibold text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-12 after:rounded-full after:bg-primary after:content-['']">
              Contactos
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="group flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-colors group-hover:text-white" />
                <span className="text-gray-400 transition-colors group-hover:text-white">
                  Rua da Cumieira, Nº 6
                  <br />
                  4820-179 Fafe, Portugal
                </span>
              </li>
              <li className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-colors group-hover:text-white" />
                <div className="flex flex-col">
                  <a href="tel:+351253504130" className="text-gray-400 transition-colors hover:text-primary">
                    +351 253 504 130
                  </a>
                  <a href="tel:+351968268952" className="text-gray-400 transition-colors hover:text-primary">
                    +351 968 268 952
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-colors group-hover:text-white" />
                <a href="mailto:novafafe@gmail.com" className="break-all text-gray-400 transition-colors hover:text-primary">
                  novafafe@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-6 text-center lg:flex-row lg:items-center lg:justify-between lg:border-t lg:border-neutral-800 lg:text-left">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} NOVAFAFE — Escola de Condução. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 lg:justify-end">
            <Link href="/privacidade" className="transition-colors hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="transition-colors hover:text-primary">
              Termos e Condições
            </Link>
            <Link href="https://www.livroreclamacoes.pt" target="_blank" className="transition-colors hover:text-primary">
              Livro de Reclamações
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
