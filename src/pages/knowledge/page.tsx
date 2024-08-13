import LandingLayout from "@/shared/components/LandingLayout"
import KnowledgeHero from "./components/KnowledgeHero"
import { CoreTech } from "./components/CoreTech"
import { CorePotential } from "./components/CorePotential"
import { KnowledgeCenterFaq } from "./components/faq"

const Page = () => {
  return (
    <LandingLayout className="relative z-0 space-y-10 overflow-hidden pb-16">
      <KnowledgeHero />

      <section className="bg-neutral-control-color-10">
        <CoreTech />
      </section>

      <section className="overflow-hidden">
        <CorePotential />
      </section>

      <KnowledgeCenterFaq />
    </LandingLayout>
  )
}

export default Page
