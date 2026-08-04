import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Facebook,
  Instagram,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

const MAPS_URL = "https://maps.app.goo.gl/mZE7x4AASsmaHKB4A"

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
        "group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl shadow-[0_20px_50px_-14px_rgba(0,0,0,0.28)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.38)] sm:min-h-[360px]",
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
          <span className={["h-px w-0 transition-all duration-500 ease-out group-hover:w-10", theme.line].join(" ")} />
          <span className="text-sm font-semibold text-white/60 transition-colors duration-300 group-hover:text-white">
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
      className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl shadow-[0_20px_50px_-14px_rgba(0,0,0,0.28)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.38)] sm:min-h-[360px]"
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
          <span className="h-px w-0 bg-primary transition-all duration-500 ease-out group-hover:w-10" />
          <span className="text-sm font-semibold text-white/60 transition-colors duration-300 group-hover:text-white">
            {panel.action}
          </span>
        </div>
      </div>
    </a>
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
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl pb-14 pt-36 lg:pb-20 lg:pt-44">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden>·</span>
              <span className="text-primary">Contacto</span>
            </nav>
            <h1 className="mb-4 text-5xl font-black leading-[1.0] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Fala
              <br />
              <span className="text-primary">connosco.</span>
            </h1>
            <p className="max-w-lg text-base font-light leading-relaxed text-zinc-300">
              Liga, envia email ou visita-nos na secretaria. Respondemos o mais rapidamente possível.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-28 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
              Contactos directos
            </span>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Escolhe como preferes falar connosco
            </h2>
            <p className="mt-3 text-muted-foreground">
              Sem formulário online por agora — usa um dos canais abaixo para pedires informações ou marcares visita.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactPanels.map((panel) => (
              <ContactPanelCard key={panel.label} panel={panel} />
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <div className="flex min-h-[300px] flex-col rounded-3xl bg-muted/40 p-7 ring-1 ring-black/[0.04] sm:min-h-[360px] lg:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Horário
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-4">
                {schedules.map((block, index) => (
                  <div key={block.title} className={index > 0 ? "border-t border-border/60 pt-4" : ""}>
                    <p className="mb-2 text-sm font-semibold text-foreground">{block.title}</p>
                    {"closed" in block && block.closed ? (
                      <p className="text-sm italic text-muted-foreground">Encerrado</p>
                    ) : (
                      <dl className="space-y-2">
                        {block.rows.map((row) => (
                          <div key={row.days}>
                            <dt className="text-xs text-muted-foreground">{row.days}</dt>
                            <dd className="mt-0.5 text-sm text-foreground">{row.hours}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {socialPanels.map((panel) => (
              <SocialPanelCard key={panel.theme} panel={panel} />
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-3xl ring-1 ring-black/[0.04]">
            <iframe
              title="Localização NOVAFAFE em Fafe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.9813616137194!2d-8.162563023439246!3d41.46131957129064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24e970bbe5bd3b%3A0x7635b5187d7b0984!2sEscola%20de%20Condu%C3%A7%C3%A3o%20Novafafe!5e0!3m2!1spt-PT!2sus!4v1785829911902!5m2!1spt-PT!2sus"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-64 w-full grayscale transition-all duration-500 hover:grayscale-0 lg:h-80"
            />
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
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
