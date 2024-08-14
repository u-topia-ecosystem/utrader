import LandingLayer from "@/shared/components/LandingLayer"
import SearchInput from "@/shared/components/SearchInput"

const NewsHero = () => {
  return (
    <LandingLayer className="">
      <div className="rounded-lg bg-navbar-control-bg-color-60 px-5 py-16">
        <h2 className="mb-5 text-center font-inter text-5xl font-bold text-primary-cta-layer-color-60">News/Events</h2>

        <p className="mx-auto mb-14 max-w-[539px] text-center font-open-sans text-lg font-normal text-primary-cta-layer-color-60">
          Be in the know on the latest happenings at Bybit — new products, our latest trading pairs and more!
        </p>

        <SearchInput className="mx-auto max-w-[539px]" />
      </div>
    </LandingLayer>
  )
}

export default NewsHero
