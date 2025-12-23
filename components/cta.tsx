"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Top Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-primary/20 blur-xl z-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-muted/30 to-transparent z-10" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-emerald-700" />

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          </div>

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-md border border-white/20 mb-8 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Comece Hoje</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-balance leading-tight">
              Pronto Para Conquistar a Sua Liberdade?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mx-auto mb-10">
              Junte-se a milhares de alunos que já conquistaram a sua carta de condução com a NOVAFAFE.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                size="lg"
                className="group relative overflow-hidden w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base px-8 h-12 font-bold rounded-lg shadow-lg transition-all active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                Inscrever Agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden w-full sm:w-auto text-base px-8 h-12 font-bold border-2 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-md rounded-lg transition-all active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <Phone className="mr-2 h-5 w-5" />
                253 490 080
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
