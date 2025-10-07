import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Workflow } from "@/components/workflow"
import { Integration } from "@/components/integration"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Workflow />
      <Integration />
      <CTA />
    </main>
  )
}
