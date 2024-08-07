// import { BuiltWith } from "../components/Landing/BuildWith"
// import { KnowledgeCenter } from "../components/Landing/KnowledgeCenter"
// import { LandingFAQ } from "../components/Landing/FAQ"
// import { LandingStats } from "../components/Landing/Stats"
// import { SEOBlock } from "../components/Landing/SEO"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { getPublicConfig } from "@openware/neodax-web-sdk"
import { TickersWidget } from "@openware/neodax-web-sdk"
import HeroSection from "./components/HeroSection"
import LatestNews from "./components/LatestNews"
import MarketsTable from "./components/Markets"
import { TStrapiNewsType } from "./components/LatestNews/GetLatestNews"
import { GettingStarted } from "./components/GettingStarted"

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
      <section className="flex justify-center px-0 pt-12 max-lg:flex-col max-lg:gap-12 md:px-8 md-lg:px-12 lg:gap-6 lg:px-[60px]">
        <MarketsTable />
        <LatestNews news={news} />
      </section>
      <section className="mt-12 flex w-full items-center justify-center px-[18px] md:px-8 md-lg:px-12 lg:mt-[72px] lg:px-[60px]">
        <GettingStarted />
      </section>
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
              <LandingFAQ />
              <KnowledgeCenter />
            </div>
            <SEOBlock /> */}
        </div>
      </div>
    </main>
  )
}

export default Home
