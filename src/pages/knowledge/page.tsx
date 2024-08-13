import LandingLayout from "@/shared/components/LandingLayout"
import KnowledgeHero from "./components/KnowledgeHero"
import { CoreTech } from "./components/CoreTech"
import { CorePotential } from "./components/CorePotential"

const Page = () => {
  return (
    <LandingLayout>
      <KnowledgeHero />

      <section className="bg-neutral-control-color-10">
        <CoreTech />
      </section>

      <section className="overflow-hidden">
        <CorePotential />
      </section>
    </LandingLayout>
  )
}

export default Page
