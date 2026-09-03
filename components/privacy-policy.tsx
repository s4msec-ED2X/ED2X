"use client"

import { useState } from "react"
import { ChevronDown, ShieldCheck } from "lucide-react"

const policies = [
  { title: "Informações coletadas", content: "Coletamos informações fornecidas voluntariamente por você, como nome, e-mail, telefone e dados da empresa, ao entrar em contato ou solicitar orçamentos. Também podemos coletar dados de navegação por meio de cookies e tecnologias similares." },
  { title: "Uso das informações", content: "Usamos as informações para responder solicitações, fornecer orçamentos, prestar serviços contratados, melhorar nossa experiência digital, enviar comunicações autorizadas e cumprir obrigações legais." },
  { title: "Compartilhamento de dados", content: "Não vendemos ou alugamos informações pessoais. Dados podem ser compartilhados somente com prestadores essenciais à operação ou quando houver exigência legal." },
  { title: "Segurança dos dados", content: "Adotamos medidas técnicas e administrativas para proteger dados pessoais contra acesso não autorizado, perda, alteração ou destruição. Nenhuma transmissão pela internet, porém, é totalmente isenta de riscos." },
  { title: "Cookies", content: "Cookies ajudam a melhorar a navegação, compreender o tráfego e personalizar conteúdo. Você pode recusá-los no navegador, ciente de que algumas funções podem ser afetadas." },
  { title: "Seus direitos pela LGPD", content: "Você pode confirmar o tratamento, acessar ou corrigir dados, pedir anonimização, bloqueio ou eliminação, revogar consentimento e solicitar portabilidade, conforme a Lei 13.709/2018." },
  { title: "Canal de contato", content: "Para exercer seus direitos, escreva para diogohcpacheco@gmail.com ou ligue para (11) 96214-0330. Endereço: Rua Coronel Augusto Cesar, 489, Sala 01, Centro, Leme/SP, CEP 13610-190." },
]

export function PrivacyPolicy() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="privacidade" className="border-y-2 border-foreground bg-muted py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-10 xl:px-16">
        <div>
          <ShieldCheck className="h-10 w-10 text-primary" />
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Privacidade</p>
          <h2 className="mt-3 max-w-md font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Seus dados merecem clareza.</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Esta política explica, em linguagem direta, como tratamos suas informações pessoais.
          </p>
          <p className="mt-8 max-w-sm text-xs leading-relaxed text-muted-foreground">
            ED2XADS SERVICOS DE PUBLICIDADE E CONTEUDO LTDA<br />CNPJ 49.615.553/0001-48<br />Atualizada em setembro de 2026.
          </p>
        </div>

        <div className="border-t-2 border-foreground">
          {policies.map((policy, index) => {
            const expanded = expandedIndex === index
            return (
              <div key={policy.title} className="border-b border-foreground/40">
                <button
                  type="button"
                  onClick={() => setExpandedIndex(expanded ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={expanded}
                >
                  <span className="flex items-center gap-4 font-heading text-lg font-bold sm:text-xl">
                    <span className="text-xs font-normal text-muted-foreground">0{index + 1}</span>
                    {policy.title}
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
                {expanded && <p className="max-w-3xl pb-6 pl-0 text-base leading-relaxed text-muted-foreground sm:pl-10">{policy.content}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
