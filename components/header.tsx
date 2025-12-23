"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Home, Users2, CarFront, ShieldCheck, FileCheck, Euro, MessageCircle, HelpCircle, Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, LayoutGrid } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
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
    { href: "/servicos", label: "Serviços", icon: CarFront },
    { href: "/precos", label: "Preços", icon: Euro },
    { href: "/vantagens", label: "Vantagens", icon: ShieldCheck },
  ]

  const secondaryNavLinks = [
    { href: "/requisitos", label: "Requisitos", description: "O que você precisa", icon: FileCheck },
    { href: "/sobre", label: "Sobre Nós", description: "Nossa história", icon: Users2 },
    { href: "/testemunhos", label: "Testemunhos", description: "O que dizem de nós", icon: MessageCircle },
    { href: "/faq", label: "FAQ", description: "Dúvidas frequentes", icon: HelpCircle },
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 antialiased transform-gpu ${
          isScrolled 
            ? "py-2" 
            : "py-0"
        }`}
      >
        <div className={`mx-auto transition-all duration-500 transform-gpu ${
          isScrolled 
            ? "max-w-7xl px-6" 
            : "max-w-[1400px] px-6 sm:px-8 lg:px-12"
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 rounded-2xl transform-gpu backface-hidden ${
            isScrolled 
              ? "h-14 lg:h-16 bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 px-6" 
              : "h-16 lg:h-22 bg-transparent px-0"
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-105 duration-300 transform-gpu backface-hidden">
              <Image
                src="/images/image.png"
                alt="NOVAFE Escola de Condução"
                width={180}
                height={60}
                className={`${isScrolled ? "h-8 lg:h-10" : "h-9 lg:h-12"} w-auto transition-all duration-500 transform-gpu`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-2.5 px-4 py-2 text-[15px] font-bold transition-all duration-300 rounded-xl group transform-gpu backface-hidden ${
                    pathname === link.href
                      ? "text-[#00701a] bg-green-50/50"
                      : "text-foreground/60 hover:text-[#00701a] hover:bg-green-50/50"
                  }`}
                >
                  <link.icon className={`h-4 w-4 transition-all duration-300 transform-gpu ${
                    pathname === link.href 
                      ? "text-[#00701a] scale-110" 
                      : "text-foreground/30 group-hover:text-[#00701a] group-hover:scale-110"
                  }`} />
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00701a] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <div 
                className="hidden xl:block relative group/dropdown mr-2 transform-gpu"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-bold text-foreground/60 hover:text-[#00701a] hover:bg-green-50/50 transition-all duration-300 rounded-xl group/btn transform-gpu backface-hidden cursor-pointer"
                >
                  <LayoutGrid className="h-4 w-4 transition-colors group-hover/btn:text-[#00701a] text-foreground/40 transform-gpu" />
                  Explorar
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 transform-gpu ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isServicesOpen && (
                  <div
                    className="absolute top-full right-0 pt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  >
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 py-3">
                      <div className="grid gap-1 px-2">
                        {secondaryNavLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all group/item ${
                              pathname === link.href
                                ? "bg-green-50"
                                : "hover:bg-green-50/50"
                            }`}
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className={`p-2 rounded-lg transition-colors ${pathname === link.href ? "bg-white shadow-sm text-[#00701a]" : "bg-green-50/50 text-foreground/40 group-hover/item:bg-white group-hover/item:text-[#00701a]"}`}>
                              <link.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className={`text-[14px] font-bold leading-tight ${pathname === link.href ? "text-[#00701a]" : "text-foreground/80 group-hover/item:text-[#00701a]"}`}>
                                {link.label}
                              </span>
                              <span className="text-[12px] font-medium text-foreground/40 group-hover/item:text-foreground/60">
                                {link.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contacto"
                className={`hidden md:flex items-center gap-2 font-bold rounded-lg transition-all duration-500 active:scale-95 group overflow-hidden relative transform-gpu backface-hidden ${
                  isScrolled 
                    ? "px-4 py-2 text-[13px] bg-[#00701a] text-white shadow-md shadow-green-900/10 hover:bg-[#008a20]" 
                    : "px-5 py-2.5 text-[14px] bg-[#00701a] text-white shadow-lg shadow-green-900/10 hover:bg-[#008a20] hover:-translate-y-0.5"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out transform-gpu" />
                <span className="relative flex items-center gap-2 transform-gpu">
                  Começar Agora
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 transform-gpu" />
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden hover:bg-green-50 text-[#00701a]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - improved animation and structure */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 h-[100dvh] ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm h-full" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-[100dvh] w-full max-w-[350px] bg-white shadow-2xl transition-transform duration-500 ease-out border-l border-primary/5 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header Area */}
            <div className="px-6 pt-6 pb-2 bg-white shrink-0">
              <div className="flex items-center justify-between mb-2">
                <Image src="/images/image.png" alt="NOVAFE" width={120} height={40} className="h-8 w-auto" />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="h-10 w-10 rounded-full hover:bg-green-50 text-[#00701a] transition-transform active:scale-90"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
            </div>

            {/* Navigation Content */}
            <div className="flex-1 px-5 py-4 space-y-8 overflow-y-auto min-h-0">
              {/* Main Links */}
              <section>
                <h3 className="text-[11px] font-bold text-[#8da38e] uppercase tracking-[0.15em] mb-4 px-1">
                  Navegação
                </h3>
                <div className="space-y-2.5">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 ${
                        pathname === link.href
                          ? "bg-[#00701a] text-white shadow-md shadow-green-900/10"
                          : "text-[#1a1a1a] hover:bg-green-50/50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center h-10 w-10 rounded-xl transition-colors ${
                          pathname === link.href ? "bg-[#1a8a2e]" : "bg-[#e9f5eb] text-[#00701a]"
                        }`}>
                          <link.icon className="h-5 w-5" />
                        </div>
                        <span className={`text-[16px] tracking-tight ${pathname === link.href ? "font-bold" : "font-semibold"}`}>
                          {link.label}
                        </span>
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                        pathname === link.href ? "text-white/80" : "text-[#d1d5db]"
                      }`} />
                    </Link>
                  ))}
                </div>
              </section>

              {/* Secondary Grid */}
              <section>
                <h3 className="text-[11px] font-bold text-[#8da38e] uppercase tracking-[0.15em] mb-4 px-1">
                  Explorar
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {secondaryNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex flex-col gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                        pathname === link.href
                          ? "bg-[#00701a] border-[#00701a] text-white shadow-md"
                          : "bg-[#f8fafc] border-[#f1f5f9] hover:bg-white hover:border-green-200 text-[#1a1a1a]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={`flex items-center justify-center h-10 w-10 shrink-0 rounded-xl transition-colors ${
                        pathname === link.href ? "bg-white/20" : "bg-white shadow-sm text-[#00701a]"
                      }`}>
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-[14px] leading-tight">{link.label}</span>
                        <span className={`text-[10px] font-medium leading-tight ${pathname === link.href ? "text-white/60" : "text-muted-foreground"}`}>
                          {link.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Social & Contact Quick Links - Fixed at bottom */}
            <div className="p-6 pt-4 shrink-0 bg-white border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:253504130" 
                  className="group relative overflow-hidden w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#00701a] text-white font-bold text-[15px] hover:bg-[#005a15] transition-all shadow-lg shadow-green-900/10 active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  <Phone className="h-5 w-5" />
                  Ligar Agora: 253 504 130
                </a>
                
                <div className="flex items-center justify-center gap-3">
                  <span className="text-[12px] font-medium text-muted-foreground mr-2">Siga-nos:</span>
                  <a href="#" className="flex items-center justify-center h-11 w-11 rounded-xl bg-[#f8fafc] border border-[#f1f5f9] text-[#4a4a4a] hover:bg-green-50 hover:text-[#00701a] hover:border-green-100 transition-all cursor-pointer">
                    <Instagram className="h-5.5 w-5.5" />
                  </a>
                  <a href="#" className="flex items-center justify-center h-11 w-11 rounded-xl bg-[#f8fafc] border border-[#f1f5f9] text-[#4a4a4a] hover:bg-green-50 hover:text-[#00701a] hover:border-green-100 transition-all cursor-pointer">
                    <Facebook className="h-5.5 w-5.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
