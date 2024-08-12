import LandingLayout from "@/shared/components/LandingLayout"
import KnowledgeHero from "./components/KnowledgeHero"
import LandingLayer from "@/shared/components/LandingLayer"

const Page = () => {
  return (
    <LandingLayout>
      <LandingLayer>
        <KnowledgeHero />
      </LandingLayer>
    </LandingLayout>
  )
}

export default Page
