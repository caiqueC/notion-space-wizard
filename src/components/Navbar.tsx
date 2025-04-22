
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between fixed top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-blue-purple-gradient flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M6 8h12"></path>
            <path d="M6 12h12"></path>
            <path d="M6 16h8"></path>
          </svg>
        </div>
        <Link to="/" className="text-xl font-bold">NotionSpaceWizard</Link>
      </div>

      <div className="hidden md:flex gap-8 mx-4 flex-1 justify-center">
        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Início</Link>
        <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">Recursos</Link>
        <Link to="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Depoimentos</Link>
        <Link to="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">Preços</Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/login">
          <Button variant="ghost" className="text-sm">Login</Button>
        </Link>
        <Link to="/register">
          <Button className="bg-blue-purple-gradient hover:opacity-90 transition-opacity text-sm">
            Começar Grátis
          </Button>
        </Link>
      </div>
    </nav>
  )
}
