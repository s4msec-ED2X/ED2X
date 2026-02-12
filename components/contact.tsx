"use client"

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()

  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div
            ref={leftRef}
            className={`scroll-fade-left ${leftVisible ? "is-visible" : ""}`}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contato
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Vamos conversar sobre o seu projeto?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Entre em contato conosco e descubra como podemos transformar sua
              presenca digital em resultados concretos para o seu negocio.
            </p>

            <a
              href="https://wa.me/5511962140330"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Falar pelo WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right - Contact info */}
          <div
            ref={rightRef}
            className={`flex flex-col gap-4 scroll-fade-right ${rightVisible ? "is-visible" : ""}`}
          >
            <div className={`flex items-center gap-4 rounded-xl border border-border bg-card p-5 scroll-scale-in stagger-1 ${rightVisible ? "is-visible" : ""}`}>
              <div className="rounded-lg bg-primary/10 p-3">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  E-mail
                </p>
                <a
                  href="mailto:diogohcpacheco@gmail.com"
                  className="mt-1 font-medium text-foreground transition-colors hover:text-primary"
                >
                  diogohcpacheco@gmail.com
                </a>
              </div>
            </div>

            <div className={`flex items-center gap-4 rounded-xl border border-border bg-card p-5 scroll-scale-in stagger-2 ${rightVisible ? "is-visible" : ""}`}>
              <div className="rounded-lg bg-primary/10 p-3">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Telefone / WhatsApp
                </p>
                <a
                  href="tel:+5511962140330"
                  className="mt-1 font-medium text-foreground transition-colors hover:text-primary"
                >
                  (11) 96214-0330
                </a>
              </div>
            </div>

            <div className={`flex items-center gap-4 rounded-xl border border-border bg-card p-5 scroll-scale-in stagger-3 ${rightVisible ? "is-visible" : ""}`}>
              <div className="rounded-lg bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Endereco
                </p>
                <p className="mt-1 font-medium text-foreground">
                  Rua Coronel Augusto Cesar, 489 - Centro
                </p>
                <p className="text-sm text-muted-foreground">
                  Leme - SP | CEP 13610-190
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
