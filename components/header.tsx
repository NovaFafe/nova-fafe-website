"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { sectionButtonVariants } from "@/components/section-link"
import { cn } from "@/lib/utils"
import {
  Menu, X, Home, Users2, CarFront, FileCheck, Phone, Mail, MessageCircle,
  ChevronDown, Instagram, Facebook, Car, Bike, Truck, Tractor, Globe,
  RotateCcw, RefreshCw, ClipboardList, HelpCircle, ArrowRight, ArrowUpRight,
  type LucideIcon,
} from "lucide-react"

type SubMenuItem = { href: string; label: string; icon: LucideIcon }
type SubMenuGroup = { title: string; description: string; items: SubMenuItem[] }
type NavLink = {
  href: string
  label: string
  icon: LucideIcon
  submenu?: SubMenuGroup[]
}

const mainNavLinks: NavLink[] = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "A Escola", icon: Users2 },
  {
    href: "/servicos",
    label: "Serviços",
    icon: CarFront,
    submenu: [
      {
        title: "Formação",
        description: "Cartas de ligeiros, motas e ciclomotor.",
        items: [
          { href: "/servicos#categoria-b", label: "Ligeiros (Cat. B)", icon: Car },
          { href: "/servicos#categoria-a", label: "Motociclos (A1 / A2 / A)", icon: Bike },
          { href: "/servicos#categoria-am", label: "Ciclomotores (AM)", icon: Bike },
        ],
      },
      {
        title: "Parceria",
        description: "Pesados, TCC, CAM e tratores agrícolas.",
        items: [
          { href: "/servicos#pesados-tcc-cam", label: "Pesados / TCC / CAM", icon: Truck },
          { href: "/servicos#tratores", label: "Tratores Agrícolas", icon: Tractor },
        ],
      },
      {
        title: "Outros",
        description: "Revalidação, pontos, troca de carta e apoio IMT.",
        items: [
          { href: "/servicos#recuperacao-pontos", label: "Recuperação de Pontos (AVF)", icon: RotateCcw },
          { href: "/servicos#revalidacao", label: "Revalidação de Carta", icon: RefreshCw },
          { href: "/servicos#troca-carta", label: "Troca de Carta Estrangeira", icon: Globe },
          { href: "/servicos#apoio-imt", label: "Apoio Administrativo IMT", icon: ClipboardList },
        ],
      },
    ],
  },
  { href: "/requisitos", label: "Requisitos", icon: FileCheck },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
]

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavItemIcon({ icon: Icon, active }: { icon: LucideIcon; active: boolean }) {
  return (
    <Icon
      size={15}
      strokeWidth={2}
      className={`shrink-0 transition-colors ${active ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}
    />
  )
}

function MegaMenuItem({
  href,
  label,
  icon: Icon,
  onNavigate,
}: {
  href: string
  label: string
  icon: LucideIcon
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group/item flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/90"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm ring-1 ring-black/[0.04] transition-all group-hover/item:bg-primary/10 group-hover/item:text-primary group-hover/item:ring-primary/15">
        <Icon size={16} strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-gray-700 transition-colors group-hover/item:text-foreground">
        {label}
      </span>
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
    </Link>
  )
}

function ServicesMegaMenu({
  groups,
  onClose,
}: {
  groups: SubMenuGroup[]
  onClose: () => void
}) {
  return (
    <div className="hidden border-t border-gray-100 bg-white lg:block">
      <div className="mx-auto max-w-7xl px-6 py-7 sm:px-8 lg:px-12">
        <div className="grid grid-cols-[minmax(0,17.5rem)_repeat(3,minmax(0,1fr))] gap-4">
          <div className="relative flex min-h-full flex-col overflow-hidden rounded-3xl p-6">
            <div className="absolute inset-0">
              <Image
                src="/NovaFafe-Facebook/Marketing/megamenu-servicos.png"
                alt=""
                fill
                sizes="280px"
                className="object-cover object-[center_40%] grayscale"
              />
              <div className="absolute inset-0 bg-[var(--brand-green)] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative z-10 flex flex-1 flex-col">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/25 ring-1 ring-white/15 backdrop-blur-sm">
                <CarFront className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>

              <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                Todos os serviços
              </span>
              <h3 className="mt-3 text-xl font-black leading-[1.15] tracking-tight text-white">
                O que queres tirar?
              </h3>
              <p className="mt-2.5 text-sm font-light leading-relaxed text-white/55">
                Da primeira carta ao apoio IMT — tudo explicado sem rodeios.
              </p>

              <ul className="mt-5 space-y-2.5">
                {[
                  "9 categorias de formação",
                  "Apoio administrativo incluído",
                  "Pagamento faseado",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs font-medium text-white/65">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-6 space-y-2.5">
              <Link
                href="/servicos"
                onClick={onClose}
                className={cn(sectionButtonVariants.primary, "w-full px-5 py-3.5 shadow-primary/25")}
              >
                Ver todos os serviços
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contacto"
                onClick={onClose}
                className={cn(sectionButtonVariants.outlineDark, "w-full px-5 py-3")}
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Pedir informações
              </Link>
            </div>
          </div>

          {groups.map((group) => (
            <div
              key={group.title}
              className="flex min-w-0 flex-col rounded-2xl bg-muted/50 p-4"
            >
              <div className="mb-3 border-b border-border/50 pb-3">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  {group.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-0.5">
                {group.items.map((sub) => (
                  <li key={sub.href}>
                    <MegaMenuItem href={sub.href} label={sub.label} icon={sub.icon} onNavigate={onClose} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const mobilePanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileExpanded(null)
    setDesktopDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
        setMobileExpanded(null)
        setDesktopDropdown(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    mobilePanelRef.current?.focus()
  }, [isMobileMenuOpen])

  const contactCtaClass =
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border border-primary/30 text-primary bg-transparent hover:bg-primary/5 hover:border-primary/50 transition-colors"

  const megaMenuOpen = desktopDropdown === "Serviços"
  const headerPadding = "py-3"
  const headerBorder = megaMenuOpen ? "border-transparent" : "border-gray-200"

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`transition-transform duration-300 ease-out ${
            isScrolled ? "lg:-translate-y-9" : "translate-y-0"
          }`}
        >
        {/* Top Bar — altura fixa; o header principal sobrepõe-se ao scroll */}
        <div className="hidden lg:block bg-zinc-900 h-9">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-9 text-xs font-medium text-zinc-300">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-primary shrink-0" strokeWidth={2.25} />
                <a href="tel:+351253504130" className="tracking-wide hover:text-white transition-colors">253 504 130</a>
                <span className="text-zinc-600">·</span>
                <a href="tel:+351968268952" className="tracking-wide hover:text-white transition-colors">968 268 952</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-primary shrink-0" strokeWidth={2.25} />
                <a href="mailto:novafafe@gmail.com" className="hover:text-white transition-colors">novafafe@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <Link href="https://www.facebook.com/NovaFafe" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook size={14} />
              </Link>
              <Link href="https://www.instagram.com/ecnovafafe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Header + mega menu */}
        <div
          className={`relative bg-white transition-shadow duration-300 ${
            isScrolled || megaMenuOpen
              ? "shadow-[0_14px_50px_-12px_rgba(0,0,0,0.22),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
              : "shadow-none"
          }`}
          onMouseLeave={() => setDesktopDropdown(null)}
        >
        <header
          className={`border-b bg-white transition-colors duration-300 ${headerPadding} ${headerBorder}`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src="/NovaFafe-Facebook/Brand/logo-emblema.png"
                  alt="NOVAFAFE Escola de Condução"
                  width={160}
                  height={53}
                  className="h-10 w-auto transition-all"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1 h-full ml-8" aria-label="Navegação principal">
                {mainNavLinks.map((link) => {
                  const active = isNavActive(pathname, link.href)
                  const hasSubmenu = !!link.submenu
                  const isOpen = desktopDropdown === link.label

                  return (
                    <div key={link.label} className="relative h-full flex items-center">
                      {hasSubmenu ? (
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                          onMouseEnter={() => setDesktopDropdown(link.label)}
                          onClick={() => setDesktopDropdown(isOpen ? null : link.label)}
                          className={`group relative flex items-center gap-2 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                            active || isOpen ? "text-primary" : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          <NavItemIcon icon={link.icon} active={active || isOpen} />
                          {link.label}
                          <ChevronDown size={14} className={`text-gray-400 group-hover:text-primary transition-all duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                          <span className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary rounded-full transition-opacity ${active || isOpen ? "opacity-100" : "opacity-0"}`} />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className={`group relative flex items-center gap-2 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                            active ? "text-primary" : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          <NavItemIcon icon={link.icon} active={active} />
                          {link.label}
                          <span className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary rounded-full transition-opacity ${active ? "opacity-100" : "opacity-0"}`} />
                        </Link>
                      )}
                    </div>
                  )
                })}
              </nav>

              <div className="flex items-center gap-4">
                <Link href="/contacto" className={`hidden lg:inline-flex ${contactCtaClass}`}>
                  <MessageCircle size={15} strokeWidth={2} />
                  Fala Connosco
                </Link>

                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Abrir menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {desktopDropdown === "Serviços" && (
          <ServicesMegaMenu
            groups={mainNavLinks.find((l) => l.label === "Serviços")!.submenu!}
            onClose={() => setDesktopDropdown(null)}
          />
        )}
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true" />

        <div
          ref={mobilePanelRef}
          tabIndex={-1}
          className={`absolute right-0 top-0 h-full w-[min(340px,100vw)] bg-white shadow-2xl transition-transform duration-300 ease-out outline-none ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <span className="font-bold text-lg text-gray-900">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full hover:bg-gray-100"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col">
                {mainNavLinks.map((link) => {
                  const active = isNavActive(pathname, link.href)
                  const expanded = mobileExpanded === link.label

                  if (link.submenu) {
                    return (
                      <div key={link.label}>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setMobileExpanded(expanded ? null : link.label)}
                          className={`w-full flex items-center justify-between px-6 py-3 text-sm border-l-4 transition-colors ${
                            active
                              ? "bg-primary/5 border-primary text-primary font-bold"
                              : "border-transparent text-gray-700 hover:bg-gray-50 font-semibold"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`p-2 rounded-lg ${active ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                              <link.icon size={18} />
                            </span>
                            {link.label}
                          </span>
                          <ChevronDown size={16} className={`text-gray-400 transition-transform ${expanded ? "rotate-180" : ""}`} />
                        </button>

                        {expanded && (
                          <div className="bg-gray-50/80 border-l-4 border-primary/20 ml-6 mr-2 mb-2 rounded-r-lg overflow-hidden">
                            <Link
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2.5 text-xs font-bold text-primary border-b border-gray-100"
                            >
                              Ver todos os serviços
                            </Link>
                            {link.submenu.map((group) => (
                              <div key={group.title} className="py-1">
                                <p className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                  {group.title}
                                </p>
                                {group.items.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-white/80 transition-colors"
                                  >
                                    <span className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-gray-100 text-gray-400 shrink-0">
                                      <sub.icon size={14} strokeWidth={2} />
                                    </span>
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-6 py-3 text-sm border-l-4 transition-colors ${
                        active
                          ? "bg-primary/5 border-primary text-primary font-bold"
                          : "border-transparent text-gray-700 hover:bg-gray-50 font-semibold"
                      }`}
                    >
                      <span className={`p-2 rounded-lg ${active ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                        <link.icon size={18} />
                      </span>
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
              <Link
                href="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full flex ${contactCtaClass}`}
              >
                <MessageCircle size={15} strokeWidth={2} />
                Fala Connosco
              </Link>

              <div className="flex flex-col gap-2">
                <a href="tel:+351253504130" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                  <Phone className="h-4 w-4" />
                  253 504 130
                </a>
                <a href="tel:+351968268952" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                  <Phone className="h-4 w-4" />
                  968 268 952
                </a>
              </div>

              <div className="flex justify-center gap-4 pt-1">
                <a href="https://www.instagram.com/ecnovafafe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/NovaFafe" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
