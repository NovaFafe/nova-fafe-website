"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-emerald-600" />

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
          </div>

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-8 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">Comece a Sua Jornada Hoje</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 text-balance leading-tight">
              Pronto Para Conquistar a Sua Liberdade?
            </h2>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Junte-se a milhares de alunos que já conquistaram a sua carta de condução com a NOVAFE. Inscreva-se hoje e
              dê o primeiro passo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                Inscrever Agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 font-semibold border-2 border-white/50 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
              >
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
