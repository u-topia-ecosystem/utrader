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
    <main className="mb-20">
      <HeroSection />

      <div className="flex w-full items-center">
        <TickersWidget />
      </div>

      <LandingLayer className="mt-16 grid gap-20" tag="section">
        <div className="grid gap-6 lg-1:grid-cols-[1fr_400px]">
          <MarketsTable />
          <LatestNews />
        </div>

        <GettingStarted />

        <ProductSuite />

        <div className="grid gap-12 md-5:grid-cols-2 md-5:gap-3">
          <LandingFAQ />
          <KnowledgeCenter />
        </div>
      </LandingLayer>
    </main>
  )
}

export default Home
