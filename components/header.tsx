"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

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
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/vantagens", label: "Vantagens" },
  ]

  const secondaryNavLinks = [
    { href: "/requisitos", label: "Requisitos" },
    { href: "/precos", label: "Preços" },
    { href: "/testemunhos", label: "Testemunhos" },
    { href: "/faq", label: "FAQ" },
  ]

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/98 backdrop-blur-md shadow-md border-b border-border" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/image.png"
                alt="NOVAFE Escola de Condução"
                width={180}
                height={60}
                className="h-9 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - improved spacing and hover effects */}
            <nav className="hidden xl:flex items-center gap-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    pathname === link.href
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-foreground/70 hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="relative">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted/50 transition-all duration-200 rounded-md"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Mais
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {isServicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-border rounded-md shadow-lg py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {secondaryNavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname === link.href
                            ? "text-primary bg-primary/5 font-semibold"
                            : "text-foreground/70 hover:text-primary hover:bg-muted/50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/contacto"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
              >
                Contacto
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden"
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
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Image src="/images/image.png" alt="NOVAFE" width={140} height={47} className="h-10 w-auto" />
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                  Menu Principal
                </p>
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.href
                        ? "bg-primary text-white font-semibold shadow-sm"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                  Informações
                </p>
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.href
                        ? "bg-primary text-white font-semibold shadow-sm"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white text-base font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <a
                href="tel:253504130"
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary/5 transition-colors"
              >
                253 504 130
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
