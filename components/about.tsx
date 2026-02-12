"use client"

import { Building2, MapPin, CalendarDays, User } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const details = [
  {
    icon: Building2,
    label: "Razao Social",
    value: "DHCP Servicos Digitais LTDA",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Rua Coronel Augusto Cesar, 489 - Centro, Leme - SP",
  },
  {
    icon: CalendarDays,
    label: "Fundacao",
    value: "07 de Maio de 2020",
  },
  {
    icon: User,
    label: "Socio-Administrador",
    value: "Diogo Henrique Carvalho Pacheco",
  },
]

export function About() {
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()

  return (
    <section id="quem-somos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div
            ref={leftRef}
            className={`scroll-fade-left ${leftVisible ? "is-visible" : ""}`}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quem Somos
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Sua parceira digital desde 2020
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A ED2X (DHCP Servicos Digitais) e uma empresa registrada e ativa
              desde 2020, atuando em diversas frentes de servicos digitais. Somos
              optantes pelo Simples Nacional e estamos habilitados para oferecer
              solucoes completas para presenca online, gestao de dados e comunicacao
              empresarial.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nossos registros abrangem uma atuacao ampla dentro do universo
              digital, incluindo web design, hospedagem, marketing digital,
              tratamento de dados e servicos de apoio administrativo.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              CNPJ: 37.087.041/0001-77 | Situacao: Ativa
            </div>
          </div>

          {/* Right column - Details cards */}
          <div
            ref={rightRef}
            className={`flex flex-col gap-4 scroll-fade-right ${rightVisible ? "is-visible" : ""}`}
          >
            {details.map((detail, index) => (
              <div
                key={detail.label}
                className={`flex items-start gap-4 rounded-xl border border-border bg-card p-5 scroll-scale-in stagger-${index + 1} ${rightVisible ? "is-visible" : ""}`}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <detail.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
