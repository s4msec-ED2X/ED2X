"use client"

import { ArrowUpRight, Building2, CalendarDays, MapPin, User } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const details = [
  { icon: Building2, label: "Razão social", value: "ED2XADS SERVICOS DE PUBLICIDADE E CONTEUDO LTDA" },
  { icon: MapPin, label: "Sede", value: "Rua Coronel Augusto Cesar, 489, Sala 01 · Centro · Leme/SP" },
  { icon: CalendarDays, label: "Fundação", value: "15 de fevereiro de 2023" },
  { icon: User, label: "Sócio-administrador", value: "Diogo Henrique Carvalho Pacheco" },
]

export function About() {
  const [introRef, introVisible] = useScrollAnimation()
  const [detailsRef, detailsVisible] = useScrollAnimation({ threshold: 0.08 })

  return (
    <section id="quem-somos" className="relative bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="pointer-events-none absolute -right-16 top-0 font-heading text-[22rem] font-bold leading-none text-white/[0.04]">X</div>
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-16">
        <div ref={introRef} className={`scroll-fade-up ${introVisible ? "is-visible" : ""}`}>
          <div className="flex items-center justify-between border-t-2 border-white pt-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span>02 — O estúdio</span>
            <span className="hidden sm:inline">Empresa brasileira · CNPJ ativo</span>
          </div>
          <div className="grid gap-10 py-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <h2 className="max-w-5xl font-heading text-[clamp(3.6rem,8.5vw,8.5rem)] font-bold leading-[0.83] tracking-[-0.075em]">
              Digital de ponta a ponta.
            </h2>
            <div>
              <p className="text-lg leading-relaxed text-white/75">
                A ED2X ADS conecta design, tecnologia, conteúdo e operação para entregar soluções digitais coerentes, úteis e prontas para crescer.
              </p>
              <a href="#contato" className="mt-7 inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-bold text-accent">
                Trabalhe com a gente <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div ref={detailsRef} className="grid border-2 border-white/70 md:grid-cols-2">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className={`scroll-fade-up border-b border-white/50 p-6 last:border-b-0 md:min-h-44 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(3)]:border-b-0 lg:p-8 ${detailsVisible ? "is-visible" : ""}`}
            >
              <div className="flex items-center justify-between">
                <detail.icon className="h-6 w-6 text-accent" />
                <span className="text-xs font-bold text-white/50">0{index + 1}</span>
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{detail.label}</p>
              <p className="mt-2 max-w-xl font-heading text-lg font-semibold leading-snug sm:text-xl">{detail.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 text-sm font-semibold sm:flex-row">
          <span>CNPJ 49.615.553/0001-48</span>
          <span>Situação cadastral: ativa</span>
        </div>
      </div>
    </section>
  )
}
