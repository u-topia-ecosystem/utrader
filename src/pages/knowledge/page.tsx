import LandingLayout from "@/shared/components/LandingLayout"
import KnowledgeHero from "./components/KnowledgeHero"
import LandingLayer from "@/shared/components/LandingLayer"
import { CoreTech } from "./components/CoreTech"

const Page = () => {
  return (
    <LandingLayout>
      <LandingLayer>
        <KnowledgeHero />
      </LandingLayer>

      <section className="bg-neutral-control-color-10">
        <LandingLayer>
          <CoreTech />
        </LandingLayer>
      </section>
    </LandingLayout>
  )
}

export default Page
