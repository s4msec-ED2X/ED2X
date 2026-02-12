"use client"

import {
  Globe,
  Database,
  Megaphone,
  FileText,
  Server,
  ClipboardList,
  Newspaper,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Globe,
    title: "Web Design & Desenvolvimento",
    description:
      "Criacao de sites modernos, responsivos e otimizados para conversao. Do layout ao deploy, cuidamos de tudo.",
  },
  {
    icon: Database,
    title: "Tratamento de Dados",
    description:
      "Processamento, organizacao e hospedagem de dados na internet com seguranca e performance.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description:
      "Estrategias de marketing direto e promocao digital para impulsionar sua marca online.",
  },
  {
    icon: FileText,
    title: "Edicao de Cadastros & Listas",
    description:
      "Edicao profissional de cadastros, listas e produtos graficos para comunicacao empresarial.",
  },
  {
    icon: Server,
    title: "Hospedagem & Infraestrutura",
    description:
      "Provedores de servicos de aplicacao e hospedagem na internet com alta disponibilidade.",
  },
  {
    icon: ClipboardList,
    title: "Apoio Administrativo",
    description:
      "Servicos combinados de escritorio e apoio administrativo para otimizar seus processos.",
  },
  {
    icon: Newspaper,
    title: "Portais & Conteudo Online",
    description:
      "Desenvolvimento de portais, provedores de conteudo e servicos de informacao na internet.",
  },
]

export function Services() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center scroll-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            O que fazemos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Servicos digitais completos para sua empresa</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Atuamos em diversas frentes do universo digital para garantir a presenca
            online e a gestao de informacoes do seu negocio.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group scroll-scale-in stagger-${index + 1} rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-card/80 ${gridVisible ? "is-visible" : ""}`}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
