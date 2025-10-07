import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 pt-32 pb-20">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <span className="font-mono">AI-Powered Documentation</span>
          </div>

          <h1 className="mb-6 text-balance font-sans text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Automate C++ Documentation with AI
          </h1>

          <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            Generate accurate, contextual documentation for your C++ codebase using LLMs and static analysis. Integrate
            seamlessly with GitLab CI/CD and VS Code.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            Trusted by engineering teams at leading tech companies
          </div>
        </div>
      </div>
    </section>
  )
}
