import LandingLayout from "@/shared/components/LandingLayout"
import NewsHero from "./components/NewsHero"
import NewsListing from "./components/NewsListing"

const NewsEvents = () => {
  return (
    <LandingLayout className="space-y-14 pt-5">
      <NewsHero />
      <NewsListing />
    </LandingLayout>
  )
}

export default NewsEvents
