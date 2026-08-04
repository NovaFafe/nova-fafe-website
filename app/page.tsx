import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Advantages } from "@/components/advantages"
import { Fleet } from "@/components/fleet"
import { RecentApprovals } from "@/components/recent-approvals"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <Services />
      <About />
      <Advantages />
      <Fleet />
      <RecentApprovals />
      <CTA />
      <Footer />
    </main>
  )
}
