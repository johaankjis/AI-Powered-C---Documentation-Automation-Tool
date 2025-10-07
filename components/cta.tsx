import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Ready to automate your documentation?
          </h2>
          <p className="mb-10 text-balance text-lg text-muted-foreground">
            Start generating accurate, contextual C++ documentation in minutes. No credit card required for the 14-day
            trial.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Join 500+ engineering teams already using DocGen AI</p>
        </div>
      </div>
    </section>
  )
}
