import { ArrowRight, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0">
        {/* grid azul */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
        linear-gradient(to right, hsl(220 20% 20%) 1px, transparent 1px),
        linear-gradient(to bottom, hsl(220 20% 20%) 1px, transparent 1px)
      `,
            backgroundSize: '4rem 4rem',
          }}
        />

        {/* glow azul */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at center, rgba(59,130,246,0.12), transparent 70%)',
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Large ED2X brand */}
          <div className="animate-hero-brand mb-6">
            <h1>
              <Logo size="hero" />
            </h1>
          </div>

          {/* Tagline */}
          <p className="animate-hero-text-1 max-w-2xl font-heading text-xl font-medium tracking-wide text-muted-foreground sm:text-2xl">
            Tecnologia, Design & Marketing Digital
          </p>

          {/* Headline */}
          <h2 className="animate-hero-text-2 mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Da criacao ao suporte — solucoes completas em servicos digitais, gestao
            de dados e comunicacao online para empresas de todos os portes.
          </h2>

          {/* CTAs */}
          <div className="animate-hero-text-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511962140330"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-400 px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle />
              Whatsapp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Nossos Servicos
            </a>
          </div>

          {/* Stats - only real data */}
          <div className="animate-hero-text-3 mt-20 grid w-full max-w-2xl grid-cols-3 gap-4">
            {[
              { value: "2020", label: "Atuando desde" },
              { value: "7", label: "Areas de atuacao" },
              { value: "SP", label: "Interior paulista" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
