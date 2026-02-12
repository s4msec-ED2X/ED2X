"use client"

import { Target, Eye } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Mission() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="missao" className="relative py-24 lg:py-32">
      {/* Subtle divider */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(200_100%_35%/0.09),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center scroll-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Missao & Visao
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">O que nos move e onde queremos chegar</span>
          </h2>
        </div>

        <div ref={cardsRef} className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Missao */}
          <div className={`scroll-fade-left stagger-1 rounded-2xl border border-border bg-card p-8 lg:p-10 ${cardsVisible ? "is-visible" : ""}`}>
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">Missao</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Oferecer solucoes digitais completas para infraestrutura de dados,
              presenca online e servicos administrativos, com foco em excelencia,
              agilidade e suporte personalizado para empresas de todos os portes.
            </p>
          </div>

          {/* Visao */}
          <div className={`scroll-fade-right stagger-2 rounded-2xl border border-border bg-card p-8 lg:p-10 ${cardsVisible ? "is-visible" : ""}`}>
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">Visao</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Ser referencia em servicos digitais no interior paulista, combinando
              inovacao tecnologica com atendimento humano de alta qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
