"use client"

import { useState } from "react"
import { Shield, ChevronDown, ChevronUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const policies = [
  {
    title: "1. Informacoes Coletadas",
    content:
      "Coletamos informacoes pessoais fornecidas voluntariamente por voce, como nome, e-mail, telefone e dados da empresa, ao entrar em contato conosco ou solicitar orcamentos. Tambem podemos coletar dados de navegacao, como endereco IP, tipo de navegador e paginas acessadas, por meio de cookies e tecnologias similares.",
  },
  {
    title: "2. Uso das Informacoes",
    content:
      "As informacoes coletadas sao utilizadas para: responder suas solicitacoes e fornecer orcamentos; prestar os servicos contratados; melhorar nosso site e servicos; enviar comunicacoes relevantes sobre nossos servicos (com seu consentimento); e cumprir obrigacoes legais e regulatorias.",
  },
  {
    title: "3. Compartilhamento de Dados",
    content:
      "Nao vendemos, alugamos ou compartilhamos suas informacoes pessoais com terceiros para fins de marketing. Podemos compartilhar dados apenas com prestadores de servicos essenciais para nossas operacoes (como hospedagem e processamento de pagamentos) e quando exigido por lei ou ordem judicial.",
  },
  {
    title: "4. Seguranca dos Dados",
    content:
      "Adotamos medidas de seguranca tecnicas e administrativas para proteger seus dados pessoais contra acesso nao autorizado, perda, alteracao ou destruicao. No entanto, nenhum metodo de transmissao pela internet e 100% seguro, e nao podemos garantir seguranca absoluta.",
  },
  {
    title: "5. Cookies",
    content:
      "Utilizamos cookies para melhorar a experiencia de navegacao, analisar o trafego do site e personalizar conteudo. Voce pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.",
  },
  {
    title: "6. Seus Direitos (LGPD)",
    content:
      "De acordo com a Lei Geral de Protecao de Dados (Lei 13.709/2018), voce tem direito a: confirmar a existencia de tratamento de dados; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a anonimizacao, bloqueio ou eliminacao de dados; revogar o consentimento; e solicitar a portabilidade dos dados.",
  },
  {
    title: "7. Contato",
    content:
      "Para exercer seus direitos ou esclarecer duvidas sobre nossa politica de privacidade, entre em contato: E-mail: diogohcpacheco@gmail.com | Telefone: (11) 96214-0330 | Endereco: Rua Coronel Augusto Cesar, 489 - Centro, Leme - SP, CEP 13610-190.",
  },
]

export function PrivacyPolicy() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [headerRef, headerVisible] = useScrollAnimation()
  const [listRef, listVisible] = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="privacidade" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(200_100%_35%/0.09),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 text-center scroll-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Politica de Privacidade
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprometidos com a transparencia e a protecao dos seus dados pessoais.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            DHCP Servicos Digitais LTDA | CNPJ: 37.087.041/0001-77
          </p>
        </div>

        {/* Accordion */}
        <div ref={listRef} className="flex flex-col gap-3">
          {policies.map((policy, index) => (
            <div
              key={policy.title}
              className={`overflow-hidden rounded-xl border border-border bg-card transition-colors scroll-fade-up stagger-${index + 1} ${listVisible ? "is-visible" : ""}`}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-secondary/50"
                aria-expanded={expandedIndex === index}
              >
                <span className="font-heading text-base font-semibold text-foreground">
                  {policy.title}
                </span>
                {expandedIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              {expandedIndex === index && (
                <div className="border-t border-border px-5 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {policy.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className={`mt-8 text-center text-sm text-muted-foreground scroll-fade-up ${listVisible ? "is-visible" : ""}`}>
          Ultima atualizacao: Fevereiro de 2026
        </p>
      </div>
    </section>
  )
}
