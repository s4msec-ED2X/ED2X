"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { LogoDark } from "./logo"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#quem-somos", label: "Estúdio" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <a href="#inicio" aria-label="ED2X ADS — início" className="flex items-center">
          <LogoDark size="sm" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5511962140330"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 border-2 border-foreground bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Iniciar projeto
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center border-2 border-foreground md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t-2 border-foreground bg-background md:hidden">
          <div className="flex flex-col px-5 py-5">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-foreground/30 py-4 font-heading text-2xl font-bold"
              >
                <span>{link.label}</span>
                <span className="text-sm font-normal">0{index + 1}</span>
              </a>
            ))}
            <a
              href="https://wa.me/5511962140330"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 bg-primary px-5 py-4 font-bold text-primary-foreground"
            >
              Falar no WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
