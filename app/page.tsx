import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Mission } from "@/components/mission"
import { Contact } from "@/components/contact"
import { PrivacyPolicy } from "@/components/privacy-policy"
import { Footer } from "@/components/footer"
import Head from "next/head"

export default function Page() {
  return (
    <>
      <Head>
        <meta name="facebook-domain-verification" content="0ma4uwex3kbuyruq3tox5kmzqc3ooh" />
      </Head>
      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Mission />
        <Contact />
        <PrivacyPolicy />
        <Footer />
      </main>
    </>
  )
}
