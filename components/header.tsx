"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass-effect">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center simple-glow">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-gradient">Susana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Sobre Mí
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/#education" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Formación
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/#projects" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Proyectos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/#skills" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Habilidades
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        <Button className="hidden md:flex professional-button">
          <Download className="h-4 w-4 mr-2" />
          Descargar CV
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 glass-effect z-40 p-6">
          <nav className="flex flex-col gap-6">
            <Link
              href="/#about"
              className="text-lg font-medium p-3 hover:bg-primary/20 rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Sobre Mí
            </Link>
            <Link
              href="/#education"
              className="text-lg font-medium p-3 hover:bg-primary/20 rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Formación
            </Link>
            <Link
              href="/#projects"
              className="text-lg font-medium p-3 hover:bg-primary/20 rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="/#skills"
              className="text-lg font-medium p-3 hover:bg-primary/20 rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Habilidades
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-medium p-3 hover:bg-primary/20 rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Button className="mt-6 professional-button">
              <Download className="h-4 w-4 mr-2" />
              Descargar CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
