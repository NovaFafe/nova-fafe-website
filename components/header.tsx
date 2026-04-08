"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Users2, CarFront, FileCheck, Euro, Phone, ChevronRight, ChevronDown, Instagram, Facebook, Car, Bike, Zap, RotateCcw, RefreshCw, ClipboardList, HelpCircle } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainNavLinks = [
    { href: "/", label: "Início", icon: Home },
    { href: "/sobre", label: "A Escola", icon: Users2 },
    {
      href: "/servicos",
      label: "Serviços",
      icon: CarFront,
      submenu: [
        { href: "/servicos",                    label: "Carta de Condução",           icon: Car },
        { href: "/servicos#recuperacao-pontos", label: "Recuperação de Pontos (AVF)", icon: RotateCcw },
        { href: "/servicos#revalidacao",        label: "Revalidação de Título",       icon: RefreshCw },
        { href: "/servicos#apoio-imt",          label: "Apoio Administrativo IMT",    icon: ClipboardList },
      ]
    },
    { href: "/requisitos", label: "Requisitos", icon: FileCheck },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
  ]

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const isActive = (link: typeof mainNavLinks[number]) => {
    return pathname === link.href
  }

  const isHomePage = pathname === "/"
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Wrapper fixo que agrupa Top Bar + Header */}
      <div className="fixed top-0 left-0 right-0 z-50">

        {/* Top Bar */}
        <div className={`hidden lg:block bg-zinc-900 text-white text-xs font-medium overflow-hidden transition-all duration-300 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center py-2.5">
            <div className="flex gap-6 items-center">
              <a href="tel:+351253504148" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" />
                <span>+351 253 504 148</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span>Inscrições abertas para {currentYear}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Link href="https://www.facebook.com/NovaFafe" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook size={14} />
              </Link>
              <Link href="https://www.instagram.com/ecnovafafe/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Header */}
        <header
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-2 shadow-md"
              : "bg-white border-b border-gray-100 py-4"
          }`}
        >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/Nova-fafe-Logo-Emblema.png"
                alt="NOVAFE Escola de Condução"
                width={160}
                height={53}
                className="h-10 w-auto transition-all"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 h-full ml-8">
              {mainNavLinks.map((link) => (
                <div key={link.label} className="relative group h-full flex items-center">
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all duration-300 rounded-lg group/link ${
                      isActive(link)
                        ? "text-primary bg-primary/5" 
                        : "text-gray-600 hover:text-primary hover:bg-gray-50/80"
                    }`}
                  >
                    {link.icon && <link.icon size={15} className={`flex-shrink-0 transition-colors ${isActive(link) ? "text-primary" : "text-gray-400 group-hover/link:text-primary"}`} />}
                    {link.label}
                    {link.submenu && (
                      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    
                    {/* Floating Indicator Bar */}
                    <span 
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/link:w-1/2 ${
                        isActive(link) ? "w-1/2" : ""
                      }`} 
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors group/sub"
                          >
                            <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-100 text-gray-400 group-hover/sub:bg-primary/10 group-hover/sub:text-primary transition-colors flex-shrink-0">
                              {sub.icon && <sub.icon size={14} />}
                            </div>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-6">

              {/* CTA Button */}
              <Link
                href="/contacto"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 font-bold text-sm rounded-lg bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-95 transition-all"
              >
                Fala Connosco
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      </div>{/* fim do wrapper fixo */}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[340px] bg-white shadow-2xl transition-transform duration-300 ease-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <span className="font-bold text-lg text-gray-900">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col">
                {mainNavLinks.map((link) => (
                  <div key={link.label} className="flex flex-col">
                    <Link
                      href={link.href}
                      className={`relative flex items-center justify-between px-6 py-2 text-sm transition-all duration-300 border-l-4 group/item ${
                        isActive(link)
                          ? "bg-primary/5 border-primary text-primary font-bold"
                          : "border-transparent text-gray-700 hover:bg-gray-50/80 font-semibold hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-colors ${
                          isActive(link) ? "bg-primary text-white" : "bg-gray-100 text-gray-400 group-hover/item:bg-gray-200"
                        }`}>
                          {link.icon && <link.icon size={18} />}
                        </div>
                        {link.label}
                      </div>
                      {link.submenu && <ChevronRight size={16} className="text-gray-400" />}
                    </Link>
                    
                    {/* Submenu no mobile */}
                    {link.submenu && (
                      <div className="bg-gray-50/50 py-1 border-l-4 border-transparent ml-6">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-3 pl-8 pr-6 py-1.5 text-sm font-medium text-gray-500 hover:text-primary hover:bg-white/70 transition-colors"
                          >
                            <div className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-gray-100 text-gray-400 flex-shrink-0">
                              {sub.icon && <sub.icon size={13} />}
                            </div>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <Link
                  href="/contacto"
                  className={`flex items-center gap-3 px-6 py-2 text-sm transition-colors border-l-4 ${
                    pathname === "/contacto"
                      ? "bg-primary/5 border-primary text-primary font-bold"
                      : "border-transparent text-gray-700 hover:bg-gray-50 font-semibold"
                  }`}
                >
                  <Phone size={18} className={pathname === "/contacto" ? "text-primary" : "text-gray-400"} />
                  Contactos
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <a
                href="tel:+351253504148"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-all shadow-sm mb-4"
              >
                <Phone className="h-4 w-4" />
                253 504 148
              </a>
              
              <div className="flex justify-center gap-4">
                 <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
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
