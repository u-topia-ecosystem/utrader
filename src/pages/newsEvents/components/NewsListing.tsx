import LandingLayer from "@/shared/components/LandingLayer"
import NewsList from "./NewsList"
import HozNewsTab from "./HozNewsTab"
import VertNewsTabs from "./VertNewsTabs"
import NewsPagination from "./NewsPagination"

const NewsListing = () => {
  return (
    <LandingLayer className="flex max-w-[1091px] gap-14">
      <VertNewsTabs />

      <div className="space-y-10">
        <HozNewsTab />
        <NewsList />

        <NewsPagination />
      </div>
    </LandingLayer>
  )
}

export default NewsListing
