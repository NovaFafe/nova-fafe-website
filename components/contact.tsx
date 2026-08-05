import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { sectionButtonVariants } from "@/components/section-link"
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Facebook,
  Instagram,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

const MAPS_URL = "https://maps.app.goo.gl/mZE7x4AASsmaHKB4A"
const WHATSAPP_HREF = "https://wa.me/351968268952"

const schedules = [
  {
    title: "Secretaria",
    rows: [
      { days: "Segunda – Sexta", hours: "10:00 – 13:00 · 15:00 – 19:30" },
      { days: "Sábado", hours: "10:00 – 13:00" },
    ],
  },
  {
    title: "Apoio teórico",
    rows: [{ days: "Segunda – Sexta", hours: "11:00 – 13:00 · 15:00 – 20:00" }],
  },
  { title: "Domingo", closed: true },
] as const

type ContactPanel = {
  icon: LucideIcon
  label: string
  value: string
  href: string
  action: string
  image: string
  imageAlt: string
  external?: boolean
}

const contactPanels: ContactPanel[] = [
  {
    icon: Phone,
    label: "Telefone fixo",
    value: "253 504 130",
    href: "tel:+351253504130",
    action: "Ligar agora",
    image: "/NovaFafe-Facebook/Contacto/contacto-telefone-fixo.png",
    imageAlt: "Telefone de secretaria da escola de condução",
  },
  {
    icon: Smartphone,
    label: "Telemóvel",
    value: "968 268 952",
    href: "tel:+351968268952",
    action: "Ligar agora",
    image: "/NovaFafe-Facebook/Contacto/contacto-telemovel.png",
    imageAlt: "Contacto por telemóvel",
  },
  {
    icon: Mail,
    label: "Email",
    value: "novafafe@gmail.com",
    href: "mailto:novafafe@gmail.com",
    action: "Enviar email",
    image: "/NovaFafe-Facebook/Contacto/contacto-email.png",
    imageAlt: "Contacto por email",
  },
  {
    icon: MapPin,
    label: "Morada",
    value: "Rua da Cumieira, N.º 6\n4820-179 Fafe",
    href: MAPS_URL,
    action: "Ver no mapa",
    image: "/NovaFafe-Facebook/Contacto/contacto-mapa.png",
    imageAlt: "Mapa da localização em Fafe",
    external: true,
  },
]

type SocialPanel = {
  icon: LucideIcon
  label: string
  title: string
  subtitle: string
  href: string
  action: string
  theme: "facebook" | "instagram"
}

const socialPanels: SocialPanel[] = [
  {
    icon: Facebook,
    label: "",
    title: "Facebook",
    subtitle: "Novidades, aprovados e avisos",
    href: "https://www.facebook.com/NovaFafe",
    action: "Seguir página",
    theme: "facebook",
  },
  {
    icon: Instagram,
    label: "",
    title: "@ecnovafafe",
    subtitle: "Fotos da escola e da frota",
    href: "https://www.instagram.com/ecnovafafe/",
    action: "Seguir perfil",
    theme: "instagram",
  },
]

const socialThemes = {
  facebook: {
    card: "bg-[#1877F2]",
    icon: "bg-white/15 group-hover:bg-white/25",
    line: "bg-white/80",
    eyebrow: "text-white/70",
  },
  instagram: {
    card: "bg-[#1a1a1a]",
    icon: "bg-white/10 group-hover:bg-white/20",
    line: "bg-[#fcb045]",
    eyebrow: "text-white/70",
  },
} as const

function SocialPanelCard({ panel }: { panel: SocialPanel }) {
  const theme = socialThemes[panel.theme]

  return (
    <a
      href={panel.href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl shadow-[0_20px_50px_-14px_rgba(0,0,0,0.28)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.38)] lg:min-h-[360px]",
        theme.card,
      ].join(" ")}
    >
      {panel.theme === "facebook" ? (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 top-5 flex justify-center sm:top-6">
            <div className="relative aspect-[1024/900] w-[82%] max-w-[280px] rotate-[3deg] transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:rotate-[1deg] group-hover:scale-[1.04] sm:w-[86%]">
              <Image
                src="/NovaFafe-Facebook/Contacto/contacto-facebook-post.png"
                alt="Publicação do Facebook da NOVAFAFE"
                fill
                sizes="280px"
                className="rounded-2xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-[#1877F2]/55 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-90" />
        </div>
      ) : null}

      {panel.theme === "instagram" ? (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 top-5 flex justify-center sm:top-6">
            <div className="relative aspect-[701/1024] w-[68%] max-w-[210px] rotate-[-4deg] transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:rotate-[-1.5deg] group-hover:scale-[1.04] sm:w-[72%] sm:max-w-[230px]">
              <Image
                src="/NovaFafe-Facebook/Contacto/contacto-instagram-post.png"
                alt="Publicação do Instagram da NOVAFAFE"
                fill
                sizes="230px"
                className="rounded-2xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-45 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-35"
            style={{
              background:
                "linear-gradient(135deg, #833ab4 0%, #c13584 35%, #e1306c 55%, #fd1d1d 75%, #fcb045 100%)",
            }}
          />
        </div>
      ) : null}

      <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-30 blur-2xl transition-transform duration-700 group-hover:scale-110" style={{ backgroundColor: panel.theme === "facebook" ? "#4599FF" : "#fcb045" }} />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-black/15 blur-3xl" />
      <div
        className={[
          "absolute inset-0",
          panel.theme === "facebook" || panel.theme === "instagram"
            ? "bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent"
            : "bg-gradient-to-t from-black/55 via-black/15 to-transparent",
        ].join(" ")}
      />

      <div
        className={[
          "absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-5 sm:top-5",
          panel.theme === "facebook" ? "bg-white/20 shadow-black/20" : "bg-white/15 shadow-black/30",
        ].join(" ")}
      >
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div
        className={[
          "absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl text-white backdrop-blur-md transition-colors duration-300 sm:left-5 sm:top-5",
          theme.icon,
        ].join(" ")}
      >
        <panel.icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <div className="relative z-10 p-6 sm:p-7">
        {panel.label ? (
          <span className={["text-[10px] font-black uppercase tracking-[0.25em]", theme.eyebrow].join(" ")}>
            {panel.label}
          </span>
        ) : null}
        <p className={["font-black leading-tight tracking-tight text-white sm:text-[1.65rem]", panel.label ? "mt-2 text-2xl" : "text-2xl"].join(" ")}>
          {panel.title}
        </p>
        <p className="mt-1.5 text-sm font-light text-white/75">{panel.subtitle}</p>
        <div className="mt-5 flex items-center gap-3">
          <span className={["h-px w-8 sm:w-0 transition-all duration-500 ease-out sm:group-hover:w-10", theme.line].join(" ")} />
          <span className="text-sm font-semibold text-white/80 transition-colors duration-300 sm:text-white/60 sm:group-hover:text-white">
            {panel.action}
          </span>
        </div>
      </div>
    </a>
  )
}

function ContactPanelCard({ panel }: { panel: ContactPanel }) {
  const isEmail = panel.label === "Email"

  return (
    <a
      href={panel.href}
      {...(panel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl shadow-[0_20px_50px_-14px_rgba(0,0,0,0.28)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.38)] lg:min-h-[360px]"
    >
      <Image
        src={panel.image}
        alt={panel.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover scale-105 grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 transition-all duration-700 group-hover:from-black/90 group-hover:via-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-[var(--brand-green)] opacity-0 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-35" />

      <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-primary text-white opacity-0 shadow-lg shadow-primary/30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-5 sm:top-5">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/35 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-primary sm:left-5 sm:top-5">
        <panel.icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <div className="relative z-10 p-6 sm:p-7">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
          {panel.label}
        </span>
        <p
          className={[
            "mt-2 font-black leading-tight tracking-tight text-white",
            isEmail ? "text-base break-all sm:text-lg" : "whitespace-pre-line text-2xl sm:text-[1.65rem]",
          ].join(" ")}
        >
          {panel.value}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-8 bg-primary transition-all duration-500 ease-out sm:w-0 sm:group-hover:w-10" />
          <span className="text-sm font-semibold text-white/80 transition-colors duration-300 sm:text-white/60 sm:group-hover:text-white">
            {panel.action}
          </span>
        </div>
      </div>
    </a>
  )
}

function ScheduleCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-zinc-950 p-5 text-white shadow-xl shadow-black/20 ring-1 ring-white/10 sm:p-6",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mb-5 text-center sm:text-left">
        <h3 className="text-xl font-black tracking-tight text-white">Horário de funcionamento</h3>
      </div>

      <div className="relative space-y-3">
        {schedules.map((block) => {
          if ("closed" in block && block.closed) {
            return (
              <div
                key={block.title}
                className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3.5 ring-1 ring-white/5"
              >
                <span className="text-sm font-semibold text-white/75">{block.title}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white/45">
                  Encerrado
                </span>
              </div>
            )
          }

          return (
            <div key={block.title} className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
              <p className="mb-3 text-sm font-bold text-primary">{block.title}</p>
              <dl className="space-y-3">
                {block.rows.map((row, rowIndex) => (
                  <div
                    key={row.days}
                    className={cn(
                      "flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
                      rowIndex > 0 && "border-t border-white/10 pt-3",
                    )}
                  >
                    <dt className="text-xs font-medium uppercase tracking-wide text-white/50">{row.days}</dt>
                    <dd className="text-sm font-bold tabular-nums leading-snug text-white sm:text-right">
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MobileDirectContacts() {
  const phones = contactPanels.filter(
    (panel) => panel.label === "Telefone fixo" || panel.label === "Telemóvel",
  )
  const email = contactPanels.find((panel) => panel.label === "Email")

  return (
    <div className="relative overflow-hidden rounded-3xl bg-zinc-950 p-4 text-white shadow-xl shadow-black/20 ring-1 ring-white/10 sm:p-5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-primary/15 blur-3xl"
      />

      <h3 className="relative mb-4 text-center text-base font-black tracking-tight text-white">
        Liga ou envia email
      </h3>

      <div className="relative space-y-2">
        {phones.map((panel) => (
          <a
            key={panel.label}
            href={panel.href}
            className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl bg-white/[0.06] px-3.5 py-3 ring-1 ring-white/10 transition-colors active:bg-white/10"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/25">
              <panel.icon className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-white/45">
                {panel.label === "Telefone fixo" ? "Fixo" : "Telemóvel"}
              </span>
              <span className="mt-0.5 block text-base font-black tabular-nums leading-tight text-white">
                {panel.value}
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/70" />
          </a>
        ))}

        {email ? (
          <a
            href={email.href}
            className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl bg-primary/[0.12] px-3.5 py-3 ring-1 ring-primary/25 transition-colors active:bg-primary/[0.18]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/25">
              <Mail className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-primary/80">
                Email
              </span>
              <span className="mt-0.5 block break-all text-sm font-bold leading-snug text-white">
                {email.value}
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/70" />
          </a>
        ) : null}
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/NovaFafe-Facebook/Marketing/contacto-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-[var(--brand-green)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl pb-12 pt-32 text-center sm:mx-0 sm:pb-14 sm:pt-36 sm:text-left lg:pb-20 lg:pt-44">
            <nav className="mb-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 sm:mb-6 sm:justify-start">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Contacto</span>
            </nav>
            <h1 className="mb-4 text-balance text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
              Fala
              <br />
              <span className="text-primary">connosco.</span>
            </h1>
            <p className="mx-auto max-w-lg text-base font-light leading-relaxed text-zinc-300 sm:mx-0">
              Liga, envia email ou visita-nos na secretaria. Respondemos o mais rapidamente possível.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-28 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-7 sm:px-8 lg:px-12">
          <div className="section-heading mx-auto mb-8 max-w-2xl sm:mb-10">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Escolhe como preferes falar connosco
            </h2>
            <p className="section-heading-desc mt-3 text-muted-foreground">
              Sem formulário online por agora — usa um dos canais abaixo para pedires informações ou marcares visita.
            </p>
          </div>

          {/* Mobile */}
          <div className="space-y-4 md:hidden">
            <MobileDirectContacts />

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center gap-3 rounded-2xl bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-[#25D366]/25 transition-transform active:scale-[0.98]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-base font-bold leading-tight">WhatsApp</span>
                <span className="block text-xs font-medium text-white/85">Resposta rápida · 968 268 952</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-80" />
            </a>

            <ScheduleCard />

            {contactPanels
              .filter((panel) => panel.label === "Morada")
              .map((panel) => (
                <a
                  key={panel.label}
                  href={panel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[4.25rem] items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/[0.05] transition-colors active:bg-muted/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <panel.icon className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      {panel.label}
                    </span>
                    <span className="mt-0.5 block whitespace-pre-line text-sm font-semibold leading-snug text-foreground">
                      {panel.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/40" />
                </a>
              ))}

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/ecnovafafe/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full shadow-md shadow-black/10 transition-transform active:scale-95"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <Instagram className="h-5 w-5 text-white" strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/NovaFafe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md shadow-[#1877F2]/30 transition-transform active:scale-95"
              >
                <Facebook className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 transition-transform active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                sectionButtonVariants.primary,
                "w-full gap-2 px-6 py-3.5 text-sm shadow-lg shadow-primary/20",
              )}
            >
              <MapPin className="h-4 w-4" />
              Abrir no Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Desktop — cards editoriais */}
          <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
            {contactPanels.map((panel) => (
              <ContactPanelCard key={panel.label} panel={panel} />
            ))}
          </div>

          <div className="mt-5 hidden gap-5 md:grid lg:grid-cols-3">
            <ScheduleCard className="lg:col-span-1" />

            {socialPanels.map((panel) => (
              <SocialPanelCard key={panel.theme} panel={panel} />
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/[0.04] sm:mt-8 sm:rounded-3xl md:mt-4">
            <iframe
              title="Localização NOVAFAFE em Fafe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.9813616137194!2d-8.162563023439246!3d41.46131957129064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24e970bbe5bd3b%3A0x7635b5187d7b0984!2sEscola%20de%20Condu%C3%A7%C3%A3o%20Novafafe!5e0!3m2!1spt-PT!2sus!4v1785829911902!5m2!1spt-PT!2sus"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-52 w-full grayscale transition-all duration-500 hover:grayscale-0 sm:h-64 lg:h-80"
            />
          </div>

          <p className="section-heading-desc mt-6 text-center text-sm text-muted-foreground sm:mt-8 sm:text-left">
            Preferes ler antes? Consulta os{" "}
            <Link href="/servicos" className="font-semibold text-primary hover:underline">
              Serviços
            </Link>{" "}
            ou o processo de{" "}
            <Link href="/requisitos" className="font-semibold text-primary hover:underline">
              Inscrição
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
