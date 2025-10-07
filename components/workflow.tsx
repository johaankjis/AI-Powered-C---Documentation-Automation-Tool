import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Developer commits code",
    description: "Push your C++ changes to GitLab and create a merge request as usual.",
  },
  {
    number: "02",
    title: "CI triggers doc generation",
    description: "GitLab CI automatically runs the documentation job on every MR.",
  },
  {
    number: "03",
    title: "Clang extracts symbols",
    description: "Parse C++ AST to extract classes, methods, and dependencies into structured JSON.",
  },
  {
    number: "04",
    title: "LLM generates docs",
    description: "RAG pipeline retrieves context and generates accurate Doxygen-style documentation.",
  },
  {
    number: "05",
    title: "Review in VS Code",
    description: "See inline suggestions in your IDE and approve or modify before committing.",
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="border-b border-border/40 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Seamless workflow integration
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Documentation generation happens automatically in your existing CI/CD pipeline.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {steps.map((step, index) => (
            <Card key={index} className="border-border/40 bg-card p-6 transition-colors hover:border-accent/40">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 font-mono text-lg font-bold text-accent">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
