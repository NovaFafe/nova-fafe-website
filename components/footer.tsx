"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-emerald-500 to-primary" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/image.png"
              alt="NOVAFE"
              width={160}
              height={53}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/60 leading-relaxed mb-6">
              A sua escola de condução de confiança há mais de 25 anos. Formamos condutores de excelência em Fafe.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="font-bold text-lg mb-6">Cursos</h3>
            <ul className="space-y-3">
              {["Categoria B", "Categoria A", "Categoria C", "Aulas de Reforço"].map((item) => (
                <li key={item}>
                  <Link href="/servicos" className="text-white/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {[
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Serviços", href: "/servicos" },
                { label: "Testemunhos", href: "/testemunhos" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/60">
                  Rua 5 de Outubro, 123
                  <br />
                  4820-000 Fafe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-white/60">253 490 080</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-white/60">geral@novafe.pt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p className="flex items-center gap-1">
              © 2025 NOVAFE - Escola de Condução. Feito com <Heart className="h-4 w-4 text-primary fill-primary" /> em
              Portugal.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
