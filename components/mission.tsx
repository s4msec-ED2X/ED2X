"use client"

import { Eye, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Mission() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="missao" className="border-b-2 border-foreground bg-secondary py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-[1440px] px-5 scroll-fade-up sm:px-8 lg:px-10 xl:px-16 ${visible ? "is-visible" : ""}`}>
        <p className="mb-12 text-sm font-bold uppercase tracking-[0.22em]">03 — Direção</p>
        <div className="grid border-2 border-foreground bg-background lg:grid-cols-2">
          <article className="p-7 sm:p-10 lg:min-h-[28rem] lg:border-r-2 lg:border-foreground lg:p-14">
            <Target className="h-10 w-10 text-primary" />
            <p className="mt-20 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Missão</p>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Simplificar o digital para negócios que precisam avançar.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Entregar soluções completas com excelência, agilidade e suporte próximo — da presença online à organização da operação.
            </p>
          </article>
          <article className="bg-foreground p-7 text-background sm:p-10 lg:min-h-[28rem] lg:p-14">
            <Eye className="h-10 w-10 text-accent" />
            <p className="mt-20 text-sm font-bold uppercase tracking-[0.2em] text-background/55">Visão</p>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Ser referência em soluções digitais no interior paulista.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-background/65">
              Unir inovação tecnológica e atendimento humano para construir relações duradouras e resultados consistentes.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
