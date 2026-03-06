"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Users2, CarFront, FileCheck, Euro, Phone, ChevronRight, Instagram, Facebook } from "lucide-react"

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
    { href: "/servicos", label: "Serviços", icon: CarFront },
    { href: "/requisitos", label: "Requisitos", icon: FileCheck },
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

  const isHomePage = pathname === "/"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-md" 
            : "bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm"
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
            <nav className="hidden xl:flex items-center gap-8 h-full">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-bold transition-all py-2 hover:text-primary ${
                    pathname === link.href
                      ? "text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">

              {/* CTA Button */}
              <Link
                href="/contacto"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 font-bold text-sm rounded-lg bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-95 transition-all"
              >
                Pedir Orçamento
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
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out transform ${
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
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-6 py-3.5 text-sm transition-colors border-l-4 ${
                      pathname === link.href
                        ? "bg-gray-50 border-primary text-primary font-semibold"
                        : "border-transparent text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                   {link.label}
                  </Link>
                ))}
                
                <Link
                  href="/contacto"
                  className={`flex items-center justify-between px-6 py-3.5 text-sm transition-colors border-l-4 ${
                    pathname === "/contacto"
                      ? "bg-gray-50 border-primary text-primary font-semibold"
                      : "border-transparent text-gray-600 hover:bg-gray-50"
                  }`}
                >
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
