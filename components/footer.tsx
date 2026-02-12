"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Logo } from "@/components/logo"

export function Footer() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <footer ref={ref} className="border-t border-border bg-card">
      <div className={`mx-auto max-w-7xl px-6 py-12 lg:px-8 scroll-fade-up ${isVisible ? "is-visible" : ""}`}>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Solucoes digitais completas para infraestrutura de dados, presenca
              online e servicos administrativos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegacao
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "#servicos", label: "Servicos" },
                { href: "#quem-somos", label: "Quem Somos" },
                { href: "#missao", label: "Missao & Visao" },
                { href: "#contato", label: "Contato" },
                { href: "#privacidade", label: "Politica de Privacidade" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Dados Oficiais
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>CNPJ: 37.087.041/0001-77</p>
              <p>DHCP Servicos Digitais LTDA</p>
              <p>Rua Cel. Augusto Cesar, 489</p>
              <p>Centro, Leme - SP | 13610-190</p>
              <p>(11) 96214-0330</p>
              <p>diogohcpacheco@gmail.com</p>
              <p className="mt-1 text-xs">Optante pelo Simples Nacional</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ED2X - DHCP Servicos Digitais LTDA.
            Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Situacao cadastral: Ativa | Desde 07/05/2020
          </p>
        </div>
      </div>
    </footer>
  )
}
