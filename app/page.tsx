import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Mission } from "@/components/mission"
import { Contact } from "@/components/contact"
import { PrivacyPolicy } from "@/components/privacy-policy"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Mission />
      <Contact />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}
