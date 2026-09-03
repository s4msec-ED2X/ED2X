"use client"

import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="contato" className="bg-background py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-[1440px] px-5 scroll-fade-up sm:px-8 lg:px-10 xl:px-16 ${visible ? "is-visible" : ""}`}>
        <div className="flex items-center justify-between border-t-2 border-foreground pt-3 text-sm font-bold uppercase tracking-[0.2em]">
          <span>04 — Contato</span>
          <span className="hidden sm:inline">Vamos tirar a ideia do papel</span>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <h2 className="max-w-5xl font-heading text-[clamp(3.6rem,8vw,8rem)] font-bold leading-[0.84] tracking-[-0.07em]">
              Seu próximo projeto começa com um <span className="text-primary">olá.</span>
            </h2>
            <a
              href="https://wa.me/5511962140330"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-between border-2 border-foreground bg-accent px-6 py-5 font-heading text-xl font-bold shadow-[6px_6px_0_hsl(var(--foreground))] transition-transform hover:-translate-y-1 sm:w-auto sm:min-w-[23rem]"
            >
              Chamar no WhatsApp <ArrowUpRight className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t-2 border-foreground">
            <a href="mailto:diogohcpacheco@gmail.com" className="group flex items-start gap-4 border-b border-foreground/40 py-6">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">E-mail</p>
                <p className="mt-1 break-all font-semibold group-hover:text-primary">diogohcpacheco@gmail.com</p>
              </div>
            </a>
            <a href="tel:+5511962140330" className="group flex items-start gap-4 border-b border-foreground/40 py-6">
              <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Telefone</p>
                <p className="mt-1 font-semibold group-hover:text-primary">(11) 96214-0330</p>
              </div>
            </a>
            <div className="flex items-start gap-4 py-6">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Sede</p>
                <p className="mt-1 font-semibold">Rua Coronel Augusto Cesar, 489, Sala 01</p>
                <p className="text-sm text-muted-foreground">Centro · Leme/SP · CEP 13610-190</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
