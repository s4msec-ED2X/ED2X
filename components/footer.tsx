import { ArrowUp } from "lucide-react"
import { LogoDark } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 xl:px-16">
        <div className="grid gap-10 border-b border-background/30 pb-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <LogoDark size="md" />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-background/60">Design, tecnologia, publicidade e conteúdo para marcas que querem ocupar seu espaço.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">Navegação</p>
            <div className="flex flex-col items-start gap-2">
              <a href="#servicos" className="hover:text-accent">Especialidades</a>
              <a href="#quem-somos" className="hover:text-accent">O estúdio</a>
              <a href="#contato" className="hover:text-accent">Contato</a>
              <a href="#privacidade" className="hover:text-accent">Privacidade</a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">Dados oficiais</p>
            <p className="max-w-sm text-sm leading-relaxed text-background/65">
              ED2XADS SERVICOS DE PUBLICIDADE E CONTEUDO LTDA<br />
              CNPJ 49.615.553/0001-48<br />
              Rua Cel. Augusto Cesar, 489, Sala 01<br />
              Centro · Leme/SP · 13610-190
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ED2X ADS. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Situação cadastral: ativa</span>
            <a href="#inicio" aria-label="Voltar ao início" className="grid h-10 w-10 place-items-center border border-background/50 text-background hover:border-accent hover:text-accent">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
