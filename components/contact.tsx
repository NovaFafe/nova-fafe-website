"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, User, Car, Gauge, Zap, RotateCcw, BadgeCheck, FileText, HelpCircle, MessageSquare, ChevronDown, Check, Facebook, Instagram, type LucideIcon } from "lucide-react"

const CATEGORIES: { value: string; label: string; sub: string | null; Icon: LucideIcon }[] = [
  { value: "B",     label: "Categoria B",           sub: "Ligeiros",    Icon: Car },
  { value: "A",     label: "Categoria A / A1 / A2", sub: "Motociclos",   Icon: Gauge },
  { value: "AM",    label: "Categoria AM",          sub: "Ciclomotores", Icon: Zap },
  { value: "AVF",   label: "Recuperação de Pontos", sub: "AVF",          Icon: RotateCcw },
  { value: "REV",   label: "Revalidação de Título", sub: null,           Icon: BadgeCheck },
  { value: "IMT",   label: "Apoio IMT",             sub: null,           Icon: FileText },
  { value: "OTHER", label: "Outra / Dúvida geral",  sub: null,           Icon: HelpCircle },
]

export function Contact() {
  const [category, setCategory] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selected = CATEGORIES.find(c => c.value === category)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pt-36 lg:pt-44 pb-16 lg:pb-24 max-w-3xl">
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-8 uppercase tracking-widest">
              <a href="/" className="hover:text-white transition-colors">Início</a>
              <span>·</span>
              <span className="text-primary">Contacto</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
              Fala<br />
              <span className="text-primary">connosco.</span>
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-xl font-light">
              Sem compromisso. Explica-nos o que precisas e respondemos em minutos.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Info cards */}
              {[
                {
                  icon: Phone,
                  title: "Telefone",
                  lines: [
                    { text: "+351 253 095 892", href: "tel:+351253095892" },
                    { text: "+351 968 268 951", href: "tel:+351968268951" },
                  ],
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: [
                    { text: "novafafec@gmail.com", href: "mailto:novafafec@gmail.com" },
                  ],
                },
                {
                  icon: MapPin,
                  title: "Morada",
                  lines: [
                    { text: "Rua da Cumieira, n.º 4820" },
                    { text: "4820-000 Fafe, Portugal" },
                  ],
                },
                {
                  icon: Clock,
                  title: "Horário",
                  lines: [
                    { text: "Seg–Sex: 09:30–13:00 / 14:00–19:30" },
                    { text: "Sábado: 09:30–12:30" },
                  ],
                },
              ].map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-5">
                  <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">{info.title}</p>
                    {info.lines.map((line, j) => (
                      line.href
                        ? <a key={j} href={line.href} className="block text-sm text-foreground font-medium hover:text-primary transition-colors">{line.text}</a>
                        : <p key={j} className="text-sm text-muted-foreground">{line.text}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">Redes Sociais</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/NovaFafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <Facebook className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/ecnovafafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <Instagram className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.0!2d-8.1770!3d41.4513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEscola+de+Condu%C3%A7%C3%A3o+Nova+Fafe!5e0!3m2!1spt!2spt!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg">
                {/* Accent strip */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-primary/30 rounded-t-3xl" />

                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest mb-3">
                      <span className="w-4 h-px bg-primary" />
                      Formulário de Contacto
                    </span>
                    <h2 className="text-2xl font-black text-foreground tracking-tight mb-2">Envia-nos uma mensagem</h2>
                    <p className="text-muted-foreground text-sm">Preenches o formulário e nós entramos em contacto o mais rapidamente possível.</p>
                  </div>

                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">Nome</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            placeholder="O teu nome"
                            className="h-12 pl-10 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 bg-gray-50"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">Telemóvel</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            placeholder="+351 9XX XXX XXX"
                            className="h-12 pl-10 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 bg-gray-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                        <Input
                          type="email"
                          placeholder="o.teu@email.com"
                          className="h-12 pl-10 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5" ref={dropdownRef}>
                      <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">Categoria de interesse</label>
                      <div className="relative">
                        {/* Trigger */}
                        <button
                          type="button"
                          onClick={() => setOpen(v => !v)}
                          className={`w-full h-12 pl-10 pr-10 rounded-xl border text-sm text-left flex items-center transition-all
                            ${open
                              ? "border-primary ring-2 ring-primary/10 bg-white"
                              : "border-gray-200 bg-gray-50 hover:border-gray-300"
                            }
                            ${!selected ? "text-muted-foreground" : "text-foreground font-medium"}
                          `}
                        >
                          {selected
                            ? <selected.Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary pointer-events-none" />
                            : <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          }
                          {selected ? (
                            <span className="flex items-center gap-2">
                              {selected.label}
                              {selected.sub && <span className="text-xs text-muted-foreground font-normal">— {selected.sub}</span>}
                            </span>
                          ) : "Seleciona uma opção..."}
                          <ChevronDown className={`absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown panel */}
                        {open && (
                          <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl border border-gray-100 shadow-xl shadow-black/10 overflow-hidden">
                            <div className="p-2 space-y-0.5">
                              {CATEGORIES.map(cat => (
                                <button
                                  key={cat.value}
                                  type="button"
                                  onClick={() => { setCategory(cat.value); setOpen(false) }}
                                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all text-left group
                                    ${category === cat.value
                                      ? "bg-primary/5 text-primary font-semibold"
                                      : "text-foreground hover:bg-gray-50"
                                    }
                                  `}
                                >
                                  <span className="flex items-center gap-2.5">
                                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                      category === cat.value ? "bg-primary/10" : "bg-gray-100 group-hover:bg-gray-200"
                                    } transition-colors`}>
                                      <cat.Icon className={`h-3.5 w-3.5 ${category === cat.value ? "text-primary" : "text-gray-500"}`} />
                                    </span>
                                    <span>
                                      <span className="block font-medium leading-tight">{cat.label}</span>
                                      {cat.sub && <span className={`text-xs leading-tight ${category === cat.value ? "text-primary/70" : "text-muted-foreground"}`}>{cat.sub}</span>}
                                    </span>
                                  </span>
                                  {category === cat.value && <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">
                        Mensagem <span className="text-gray-400 font-normal normal-case tracking-normal">(opcional)</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
                        <Textarea
                          placeholder="Conta-nos mais sobre o que precisas..."
                          rows={4}
                          className="pl-10 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-xl hover:from-primary/95 hover:to-primary/70 transition-all shadow-xl shadow-primary/25 active:scale-[0.99] text-base"
                      >
                        Enviar mensagem
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <p className="text-center text-xs text-muted-foreground">
                      Ao enviares, aceitas a nossa{" "}
                      <a href="/privacidade" className="text-primary hover:underline font-semibold">Política de Privacidade</a>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

