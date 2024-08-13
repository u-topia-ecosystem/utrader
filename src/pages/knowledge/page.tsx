import LandingLayout from "@/shared/components/LandingLayout"
import KnowledgeHero from "./components/KnowledgeHero"
import { CoreTech } from "./components/CoreTech"
import { CorePotential } from "./components/CorePotential"
import { KnowledgeCenterFaq } from "./components/faq"
import { GiantGlobe } from "@/shared/assets/landing/GiantGlobeAsset"

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

      <div className="pointer-events-none relative z-10">
        <GiantGlobe className="pointer-events-none absolute -left-[400px] -top-[70px] -z-10 max-h-[1110px] max-w-[1000px]" />
      </div>
    </LandingLayout>
  )
}

export default Page
