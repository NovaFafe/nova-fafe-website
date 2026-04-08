"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden font-sans border-t border-neutral-800">
      {/* Green translucency effects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-[96px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-emerald-600/10 rounded-full blur-[64px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-8">

        {/* ── MOBILE LAYOUT (hidden lg) ── */}
        <div className="lg:hidden space-y-8 mb-10">

          {/* Logo + descrição + sociais */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3 flex-1">
              <Link href="/">
                <Image
                  src="/Nova-fafe-Logo-Emblema.png"
                  alt="Nova Fafe"
                  width={140}
                  height={47}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                />
              </Link>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[220px]">
                A tua escola de condução de referência em Fafe.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-1 shrink-0">
              <Link href="https://www.facebook.com/NovaFafe" target="_blank"
                className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors group" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/ecnovafafe/" target="_blank"
                className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors group" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Acções rápidas de contacto */}
          <div className="grid grid-cols-2 gap-3">
            <a href="tel:+351253095892"
              className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 hover:border-primary/50 transition-colors">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs text-gray-300 font-medium">253 095 892</span>
            </a>
            <a href="mailto:novafafec@gmail.com"
              className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 hover:border-primary/50 transition-colors">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs text-gray-300 font-medium truncate">novafafec@gmail.com</span>
            </a>
          </div>

          {/* Morada */}
          <div className="flex items-start gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-xs text-gray-400 leading-relaxed">
              Rua da Cumieira, n.º 4820 — 4820-000 Fafe, Portugal
            </span>
          </div>

          {/* Navegação + Horário lado a lado */}
          <div className="grid grid-cols-2 gap-6 border-t border-neutral-800 pt-6">
            {/* Navegação */}
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-3">Navegação</p>
              <ul className="space-y-2 text-xs text-gray-400">
                {[
                  { label: "Início", href: "/" },
                  { label: "A Escola", href: "/sobre" },
                  { label: "Serviços", href: "/servicos" },
                  { label: "Requisitos", href: "/requisitos" },
                  { label: "Contactos", href: "/contacto" },
                  { label: "FAQ", href: "/faq" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horário */}
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-3">Horário</p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <span className="block text-gray-300 font-medium">Seg – Sex</span>
                  <span>09:30 – 13:00</span><br />
                  <span>14:00 – 19:30</span>
                </li>
                <li className="pt-1">
                  <span className="block text-gray-300 font-medium">Sábado</span>
                  <span>09:30 – 12:30</span>
                </li>
                <li className="pt-1">
                  <span className="block text-gray-300 font-medium">Domingo</span>
                  <span className="italic text-gray-500">Encerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (hidden below lg) ── */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image src="/Nova-fafe-Logo-Emblema.png" alt="Nova Fafe" width={160} height={53}
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Formamos condutores responsáveis e seguros. A tua escola de condução de referência em Fafe, com uma equipa experiente e dedicada ao teu sucesso.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/NovaFafe" target="_blank"
                className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors duration-300 group" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/ecnovafafe/" target="_blank"
                className="bg-neutral-800 p-2 rounded-full hover:bg-primary transition-colors duration-300 group" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Início", href: "/" },
                { label: "A Escola", href: "/sobre" },
                { label: "Serviços", href: "/servicos" },
                { label: "Requisitos", href: "/requisitos" },
                { label: "Contactos", href: "/contacto" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group">
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Horário
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Segunda a Sexta</span>
                  <span className="block text-gray-400">09:30 – 13:00</span>
                  <span className="block text-gray-400">14:00 – 19:30</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Sábado</span>
                  <span className="block text-gray-400">09:30 – 12:30</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5" />
                <div>
                  <span className="block text-white font-medium mb-1">Domingo</span>
                  <span className="block text-gray-500 italic">Encerrado</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Contactos
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Rua da Cumieira, n.º 4820<br />4820-000 Fafe, Portugal
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <div className="flex flex-col">
                  <a href="tel:+351253095892" className="text-gray-400 hover:text-primary transition-colors">+351 253 095 892</a>
                  <a href="tel:+351968268951" className="text-gray-400 hover:text-primary transition-colors">+351 968 268 951</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <a href="mailto:novafafec@gmail.com" className="text-gray-400 hover:text-primary transition-colors break-all">
                  novafafec@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6 mt-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} NOVAFAFE — Escola de Condução. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <Link href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-primary transition-colors">Termos e Condições</Link>
            <Link href="https://www.livroreclamacoes.pt" target="_blank" className="hover:text-primary transition-colors">Livro de Reclamações</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
