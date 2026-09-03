"use client"

import {
  ArrowUpRight,
  ClipboardList,
  Database,
  FileText,
  Globe,
  Megaphone,
  Newspaper,
  Server,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  { icon: Globe, title: "Web design", description: "Sites responsivos, rápidos e pensados para transformar visitas em conversas." },
  { icon: Megaphone, title: "Marketing direto", description: "Campanhas e comunicação digital para colocar sua marca diante das pessoas certas." },
  { icon: Database, title: "Tratamento de dados", description: "Organização, processamento e publicação de informações com segurança e agilidade." },
  { icon: Newspaper, title: "Portais & conteúdo", description: "Estruturas editoriais e canais digitais que mantêm sua audiência informada e próxima." },
  { icon: Server, title: "Hospedagem", description: "Infraestrutura confiável para aplicações, sites e operações digitais sempre disponíveis." },
  { icon: FileText, title: "Cadastros & listas", description: "Edição e manutenção de bases, listas e produtos gráficos para a sua comunicação." },
  { icon: ClipboardList, title: "Apoio administrativo", description: "Rotinas de escritório organizadas para sua equipe ganhar tempo e foco." },
]

export function Services() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [listRef, listVisible] = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="servicos" className="bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 xl:px-16">
        <div ref={headerRef} className={`scroll-fade-up ${headerVisible ? "is-visible" : ""}`}>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-accent">01 — Especialidades</p>
          <h2 className="max-w-xl font-heading text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:sticky lg:top-28 lg:text-7xl">
            Uma equipe.<br />Muitas formas<br />de resolver.
          </h2>
        </div>

        <div ref={listRef} className="border-t border-background/50">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group grid gap-4 border-b border-background/50 py-7 scroll-fade-up sm:grid-cols-[3rem_1fr_1.3fr_auto] sm:items-center ${listVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
            >
              <span className="text-sm text-background/50">0{index + 1}</span>
              <div className="flex items-center gap-3">
                <service.icon className="h-5 w-5 text-accent" />
                <h3 className="font-heading text-xl font-bold sm:text-2xl">{service.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-background/65">{service.description}</p>
              <ArrowUpRight className="hidden h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
