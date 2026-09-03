import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen border-b-2 border-foreground pt-[72px]">
      <div className="grid min-h-[calc(100vh-72px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex flex-col justify-between px-5 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-16">
          <div className="animate-hero-brand flex items-center justify-between border-t-2 border-foreground pt-3 text-xs font-bold uppercase tracking-[0.2em]">
            <span>Estúdio digital independente</span>
            <span>Leme · SP</span>
          </div>

          <div className="py-16 lg:py-10">
            <p className="animate-hero-text-1 mb-6 max-w-md text-base font-semibold leading-relaxed text-muted-foreground">
              Estratégia, design e tecnologia trabalhando juntos para transformar presença digital em movimento de negócio.
            </p>
            <h1 className="animate-hero-text-2 max-w-3xl font-heading text-[clamp(3.4rem,7vw,7.6rem)] font-bold leading-[0.84] tracking-[-0.07em]">
              Ideias que ganham <span className="text-primary">forma.</span>
            </h1>

            <div className="animate-hero-text-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5511962140330"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-6 bg-foreground px-6 py-4 font-bold text-background transition-colors hover:bg-primary sm:min-w-56"
              >
                Conte seu projeto <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-between gap-6 border-2 border-foreground px-6 py-4 font-bold transition-colors hover:bg-accent sm:min-w-52"
              >
                Ver especialidades <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="animate-hero-text-3 grid grid-cols-3 border-y-2 border-foreground">
            {[
              ["2023", "Em atividade"],
              ["07", "Especialidades"],
              ["100%", "Sob medida"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-foreground/40 py-4 last:border-r-0">
                <p className="font-heading text-xl font-bold sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[60vh] overflow-hidden border-t-2 border-foreground lg:min-h-0 lg:border-l-2 lg:border-t-0">
          <Image
            src="/ed2x-hero-studio.png"
            alt="Composição abstrata em azul, verde-limão, vidro e metal"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute right-5 top-5 border-2 border-white bg-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Digital / Conteúdo / Ads
          </div>
          <div className="absolute bottom-5 left-5 max-w-[16rem] bg-accent p-4 text-sm font-bold leading-snug text-accent-foreground shadow-[5px_5px_0_#fff]">
            Construímos presença digital com clareza, personalidade e intenção.
          </div>
        </div>
      </div>
    </section>
  )
}
