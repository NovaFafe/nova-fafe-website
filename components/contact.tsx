"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  Car,
  Bike,
  Zap,
  Truck,
  Tractor,
  RotateCcw,
  RefreshCw,
  Globe,
  ClipboardList,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  Check,
  Facebook,
  Instagram,
  Loader2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import { toast } from "sonner"

const CATEGORIES: { value: string; label: string; sub: string | null; Icon: LucideIcon }[] = [
  { value: "B", label: "Categoria B", sub: "Ligeiros", Icon: Car },
  { value: "A", label: "Categoria A / A1 / A2", sub: "Motociclos", Icon: Bike },
  { value: "AM", label: "Categoria AM", sub: "Ciclomotores", Icon: Zap },
  { value: "PES", label: "Pesados / TCC / CAM", sub: "Parceria", Icon: Truck },
  { value: "TRA", label: "Tratores Agrícolas", sub: null, Icon: Tractor },
  { value: "AVF", label: "Recuperação de Pontos", sub: "AVF", Icon: RotateCcw },
  { value: "REV", label: "Revalidação de Carta", sub: null, Icon: RefreshCw },
  { value: "TROCA", label: "Troca de Carta Estrangeira", sub: null, Icon: Globe },
  { value: "IMT", label: "Apoio IMT", sub: null, Icon: ClipboardList },
  { value: "OTHER", label: "Outra / Dúvida geral", sub: null, Icon: HelpCircle },
]

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

const MAPS_URL = "https://maps.app.goo.gl/mZE7x4AASsmaHKB4A"

function ContactSchedule() {
  return (
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
  )
}

export function Contact() {
  const [category, setCategory] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selected = CATEGORIES.find((c) => c.value === category)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !phone || !email) {
      toast.error("Preenche o nome, telemóvel e email.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, category, message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Erro desconhecido")
      toast.success("Mensagem enviada! Entraremos em contacto em breve.")
      setName("")
      setPhone("")
      setEmail("")
      setCategory(null)
      setMessage("")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao enviar. Tenta novamente.")
    } finally {
      setLoading(false)
    }
  }

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
              Sem compromisso. Explica-nos o que precisas e respondemos o mais rapidamente possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto directo — mobile first */}
      <section className="border-b border-border/60 bg-muted/30 py-8 lg:hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+351253504130"
              className="flex items-center justify-center gap-2 rounded-2xl bg-background px-4 py-3.5 text-sm font-semibold text-foreground shadow-sm"
            >
              <Phone className="h-4 w-4 text-primary" />
              Ligar
            </a>
            <a
              href="mailto:novafafe@gmail.com"
              className="flex items-center justify-center gap-2 rounded-2xl bg-background px-4 py-3.5 text-sm font-semibold text-foreground shadow-sm"
            >
              <Mail className="h-4 w-4 text-primary" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">

            {/* Sidebar — contactos */}
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-muted/50 p-7">
                <span className="mb-4 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Contactos
                </span>

                <div className="space-y-5">
                  <div>
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      Telefone
                    </p>
                    <div className="space-y-1 pl-6">
                      <a href="tel:+351253504130" className="block text-sm text-muted-foreground transition-colors hover:text-primary">
                        253 504 130
                      </a>
                      <a href="tel:+351968268952" className="block text-sm text-muted-foreground transition-colors hover:text-primary">
                        968 268 952
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      Email
                    </p>
                    <a
                      href="mailto:novafafe@gmail.com"
                      className="block pl-6 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      novafafe@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      Morada
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block pl-6 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                    >
                      Rua da Cumieira, N.º 6
                      <br />
                      4820-179 Fafe
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Ver no mapa
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-muted/50 p-7">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Horário</span>
                </div>
                <ContactSchedule />
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/NovaFafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-muted/50 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/ecnovafafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-muted/50 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl bg-muted/50">
                <iframe
                  title="Localização NOVAFAFE em Fafe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.0!2d-8.1770!3d41.4513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEscola+de+Condu%C3%A7%C3%A3o+Nova+Fafe!5e0!3m2!1spt!2spt!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full grayscale transition-all duration-500 hover:grayscale-0 lg:h-52"
                />
              </div>
            </aside>

            {/* Formulário */}
            <div className="min-w-0">
              <div className="mb-8 lg:mb-10">
                <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Mensagem
                </span>
                <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Envia-nos um pedido</h2>
                <p className="mt-3 max-w-lg text-muted-foreground">
                  Indica a categoria de interesse e deixamos os teus dados. Respondemos por telefone ou email.
                </p>
              </div>

              <form className="space-y-5 rounded-3xl bg-muted/30 p-7 sm:p-8 lg:p-10" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Nome
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                      <Input
                        id="contact-name"
                        placeholder="O teu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        required
                        className="h-12 rounded-xl border-border/60 bg-background pl-10 focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Telemóvel
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                      <Input
                        id="contact-phone"
                        placeholder="+351 9XX XXX XXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={loading}
                        required
                        className="h-12 rounded-xl border-border/60 bg-background pl-10 focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="o.teu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      required
                      className="h-12 rounded-xl border-border/60 bg-background pl-10 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="space-y-1.5" ref={dropdownRef}>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Categoria de interesse
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setOpen((v) => !v)}
                      aria-expanded={open}
                      className={`flex h-12 w-full items-center rounded-xl border pl-10 pr-10 text-left text-sm transition-all ${
                        open
                          ? "border-primary bg-background ring-2 ring-primary/10"
                          : "border-border/60 bg-background hover:border-border"
                      } ${!selected ? "text-muted-foreground" : "font-medium text-foreground"}`}
                    >
                      {selected ? (
                        <selected.Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                      ) : (
                        <Car className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                      )}
                      {selected ? (
                        <span className="flex items-center gap-2">
                          {selected.label}
                          {selected.sub && (
                            <span className="text-xs font-normal text-muted-foreground">— {selected.sub}</span>
                          )}
                        </span>
                      ) : (
                        "Seleciona uma opção..."
                      )}
                      <ChevronDown
                        className={`pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      />
                    </button>

                    {open && (
                      <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xl shadow-black/10">
                        <div className="max-h-64 space-y-0.5 overflow-y-auto p-2">
                          {CATEGORIES.map((cat) => (
                            <button
                              key={cat.value}
                              type="button"
                              onClick={() => {
                                setCategory(cat.value)
                                setOpen(false)
                              }}
                              className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-all ${
                                category === cat.value
                                  ? "bg-primary/5 font-semibold text-primary"
                                  : "text-foreground hover:bg-muted/50"
                              }`}
                            >
                              <span className="flex items-center gap-2.5">
                                <span
                                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                    category === cat.value ? "bg-primary/10" : "bg-muted group-hover:bg-muted/70"
                                  }`}
                                >
                                  <cat.Icon
                                    className={`h-3.5 w-3.5 ${category === cat.value ? "text-primary" : "text-muted-foreground"}`}
                                  />
                                </span>
                                <span>
                                  <span className="block font-medium leading-tight">{cat.label}</span>
                                  {cat.sub && (
                                    <span
                                      className={`text-xs leading-tight ${category === cat.value ? "text-primary/70" : "text-muted-foreground"}`}
                                    >
                                      {cat.sub}
                                    </span>
                                  )}
                                </span>
                              </span>
                              {category === cat.value && <Check className="h-3.5 w-3.5 shrink-0 text-primary" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Mensagem{" "}
                    <span className="font-normal normal-case tracking-normal text-muted-foreground/70">(opcional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground/60" />
                    <Textarea
                      id="contact-message"
                      placeholder="Conta-nos mais sobre o que precisas..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={loading}
                      className="resize-none rounded-xl border-border/60 bg-background pl-10 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all hover:bg-primary/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        A enviar...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Ao enviares, aceitas a nossa{" "}
                    <Link href="/privacidade" className="font-semibold text-primary hover:underline">
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </div>
              </form>

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
          </div>
        </div>
      </section>
    </>
  )
}
