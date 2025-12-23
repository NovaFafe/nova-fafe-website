import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Advantages } from "@/components/advantages"
import { PricingPreview } from "@/components/pricing-preview"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PricingPreview />
      <Advantages />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
