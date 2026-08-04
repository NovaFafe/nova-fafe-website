import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Facebook,
  Instagram,
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

const contactCards = [
  {
    icon: Phone,
    label: "Telefone fixo",
    value: "253 504 130",
    href: "tel:+351253504130",
    action: "Ligar agora",
  },
  {
    icon: Phone,
    label: "Telemóvel",
    value: "968 268 952",
    href: "tel:+351968268952",
    action: "Ligar agora",
  },
  {
    icon: Mail,
    label: "Email",
    value: "novafafe@gmail.com",
    href: "mailto:novafafe@gmail.com",
    action: "Enviar email",
  },
  {
    icon: MapPin,
    label: "Morada",
    value: "Rua da Cumieira, N.º 6\n4820-179 Fafe",
    href: MAPS_URL,
    action: "Ver no mapa",
    external: true,
  },
] as const

export function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl pb-14 pt-36 lg:pb-20 lg:pt-44">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
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
            <p className="max-w-lg text-base font-light leading-relaxed text-zinc-400">
              Liga, envia email ou visita-nos na secretaria. Respondemos o mais rapidamente possível.
            </p>
          </div>
        </div>
      </section>

      {/* Cards de contacto */}
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                {...("external" in card && card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col rounded-3xl bg-muted/50 p-7 transition-colors hover:bg-muted/70"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" />
                </span>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  {card.label}
                </p>
                <p className="mt-2 whitespace-pre-line text-lg font-bold leading-snug tracking-tight text-foreground">
                  {card.value}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary">
                  {card.action}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rounded-3xl bg-muted/50 p-7">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Horário
                </span>
              </div>
              <div className="space-y-4">
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

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="https://www.facebook.com/NovaFafe"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-4 rounded-3xl bg-muted/50 p-7 transition-colors hover:bg-muted/70"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1877F2]/10">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Facebook</p>
                  <p className="text-sm text-muted-foreground">Novidades e avisos</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
              <a
                href="https://www.instagram.com/ecnovafafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-4 rounded-3xl bg-muted/50 p-7 transition-colors hover:bg-muted/70"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <Instagram className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">@ecnovafafe</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-3xl bg-muted/50">
            <iframe
              title="Localização NOVAFAFE em Fafe"
              src="https://www.google.com/maps?q=Escola+de+Condu%C3%A7%C3%A3o+Nova+Fafe,+Rua+da+Cumieira+6,+4820-179+Fafe&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full grayscale transition-all duration-500 hover:grayscale-0 lg:h-72"
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
