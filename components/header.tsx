import { Button } from "@/components/ui/button"
import { Code2, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="font-mono text-lg font-semibold">DocGen AI</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#workflow" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Workflow
            </a>
            <a href="#integration" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Integration
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
