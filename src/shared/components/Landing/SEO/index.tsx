import React, { useCallback, useState } from "react"
import SEOtext from "./SEOtext.json"
import classNames from "classnames"

export const SEOBlock: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false)

  const toggleMore = useCallback(() => setShowMore((prev) => !prev), [])

  return (
    <div
      className={classNames("flex w-full max-w-full flex-col items-start gap-1.5", {
        "3xl:max-w-[calc(100%-424px)]": !showMore,
      })}
    >
      <h1 className="text-xl font-semibold text-text-color-100 lg:text-2xl">Block for SEO text</h1>
      <div className="relative overflow-hidden text-base font-normal text-text-color-60">
        {showMore ? SEOtext.extended : SEOtext.initial}
        {!showMore && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-main-background-color" />
        )}
      </div>
      <button
        onClick={toggleMore}
        className="text-sm font-semibold text-secondary-control-color-60 hover:text-secondary-control-color-90 active:text-secondary-control-color-80"
      >
        {showMore ? "Show less" : "More"}
      </button>
    </div>
  )
}
