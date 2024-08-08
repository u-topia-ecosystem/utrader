// import { LandingStats } from "../components/Landing/Stats"
// import { SEOBlock } from "../components/Landing/SEO"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { getPublicConfig } from "@openware/neodax-web-sdk"
import { TickersWidget } from "@openware/neodax-web-sdk"
import LandingLayer from "@/shared/components/LandingLayer"
import HeroSection from "./components/HeroSection"
import LatestNews from "./components/LatestNews"
import MarketsTable from "./components/Markets"
import { TStrapiNewsType } from "./components/LatestNews/GetLatestNews"
import { GettingStarted } from "./components/GettingStarted"
import ProductSuite from "./components/products-suite"
import { LandingFAQ } from "./components/FAQ"
import { KnowledgeCenter } from "./components/KnowledgeCenter"

interface HomeProps {
  news: TStrapiNewsType[]
}

const Home = ({ news }: HomeProps): JSX.Element => {
  const router = useRouter()
  const { landingPageMode } = getPublicConfig()

  useEffect(() => {
    if (!landingPageMode) {
      router.push("/trading")
    }
  }, [landingPageMode, router])

  if (!landingPageMode) return <></>

  return (
    <main>
      <HeroSection />

      <div className="flex w-full items-center">
        <TickersWidget />
      </div>

      <LandingLayer className="mt-16 space-y-16">
        <section className="flex justify-center max-lg:flex-col max-lg:gap-12 lg:gap-6">
          <MarketsTable />
          <LatestNews news={news} />
        </section>

        <GettingStarted />

        <ProductSuite />

        <div className="grid grid-cols-[1fr_574px]">
          {/* <LandingFAQ /> */}
          <KnowledgeCenter />
        </div>
      </LandingLayer>

      {/* <div className="mt-[108px] flex w-full items-center justify-center bg-neutral-control-color-10">
          <CoreTech />
        </div> */}
      {/* <div className="mt-[108px] flex w-full flex-col items-center justify-center px-[18px] md:px-8 md-lg:px-12">
          <CorePotential />
          <LandingStats />
          <BuiltWith />
        </div> */}
      <div className="mb-[98px] mt-[108px] flex w-full items-center justify-center px-[18px] md:px-8 md-lg:px-12 lg:mt-[120px]">
        <div className="flex w-full max-w-full flex-col gap-[108px] lg:gap-24 3xl:w-[1328px]">
          {/* <div className="flex w-full items-start justify-between gap-6">
              
            </div>
            <SEOBlock /> */}
        </div>
      </div>
    </main>
  )
}

export default Home
