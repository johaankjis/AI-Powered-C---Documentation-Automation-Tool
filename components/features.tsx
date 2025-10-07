import { Card } from "@/components/ui/card"
import { Code2, Zap, GitBranch, FileCode, Brain, Shield } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Clang AST Parsing",
    description:
      "Extract classes, methods, structs, and dependencies from C++ code using LibTooling for accurate analysis.",
  },
  {
    icon: Brain,
    title: "LLM-Powered Generation",
    description:
      "Generate Doxygen-style documentation with contextual examples using advanced language models and RAG.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "Automatically generate docs on every merge request with GitLab CI/CD pipeline integration.",
  },
  {
    icon: FileCode,
    title: "VS Code Extension",
    description:
      "Get inline documentation suggestions directly in your IDE with keyboard shortcuts and right-click commands.",
  },
  {
    icon: Zap,
    title: "Incremental Updates",
    description: "Only regenerate documentation for changed code sections, keeping your pipeline fast and efficient.",
  },
  {
    icon: Shield,
    title: "Quality Enforcement",
    description: "Fail builds when documentation coverage drops below your threshold, ensuring consistent quality.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to document C++ code
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            From parsing to generation to deployment, our platform handles the entire documentation workflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/40 bg-card p-6 transition-colors hover:border-accent/40">
              <feature.icon className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
