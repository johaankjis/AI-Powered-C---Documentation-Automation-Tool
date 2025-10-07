import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const integrations = [
  {
    name: "GitLab CI/CD",
    description: "Native pipeline integration",
    status: "Available",
  },
  {
    name: "VS Code",
    description: "IDE extension with inline suggestions",
    status: "Available",
  },
  {
    name: "Clang LibTooling",
    description: "C++ AST parsing and analysis",
    status: "Available",
  },
  {
    name: "OpenAI / Llama 3",
    description: "LLM-powered documentation generation",
    status: "Available",
  },
  {
    name: "FAISS",
    description: "Vector search for RAG pipeline",
    status: "Available",
  },
  {
    name: "Doxygen",
    description: "Standard documentation format",
    status: "Available",
  },
]

export function Integration() {
  return (
    <section id="integration" className="border-b border-border/40 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Built for your tech stack</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Works with the tools and frameworks you already use every day.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <Card key={index} className="border-border/40 bg-card p-6">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-semibold">{integration.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {integration.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
