import { CoreTechAssets, CoreTechClearing, CoreTechClearingSecond } from "../../assets/landing/CoreTechAssets"
import { CoreTechPoweredBy } from "../../assets/landing/CoreTechPoweredBy"
import Link from "next/link"
import React, { FC } from "react"

const CARDS = [
  {
    title: "Trading",
    description: "ECN Protocol,Connected Order Book,Order Matching Engine",
    onOrOfChain: "Off-chain",
    layer: 3,
    imageAlt: "High Frequency",
  },
  {
    title: "Clearing",
    description: "Distributed Clearing Protocol,Margin account on chain",
    onOrOfChain: "Off-chain",
    layer: 2,
    imageAlt: "Daily",
  },
  {
    title: "Settlement",
    description: "Smart Contract,State Channel Manager",
    onOrOfChain: "On-chain",
    layer: 1,
    imageAlt: "Weekly",
  },
]

export const CoreTech: FC = () => {
  const renderCard = (item: (typeof CARDS)[0]) => {
    return (
      <div className="flex flex-shrink-0 flex-row items-center gap-4 lg:gap-6">
        <div className="flex flex-col items-center bg-neutral-control-color-30 p-4">
          <CoreTechAssets index={item.layer} className="h-[50px] w-[80px] flex-shrink-0 lg:h-[80px] lg:w-[129px]" />
          <h5 className="mt-1 text-sm font-semibold text-text-color-100 lg:text-xl">Layer {item.layer}</h5>
          <p className="text-xs font-medium text-text-color-60 lg:text-base">{item.imageAlt}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-semibold text-text-color-100 lg:text-xl">
            {item.title}{" "}
            <span className="rounded-full bg-primary-cta-color-20 px-3 py-[1px] text-sm font-normal text-primary-cta-color-90 lg:px-4 lg:py-0.5 lg:text-base">
              {item.onOrOfChain}
            </span>
          </h5>
          <ul className="flex flex-col items-start">
            {item.description.split(",").map((desc, index) => (
              <li className="text-sm text-text-color-80 lg:text-base" key={`${item.title}-${index}`}>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  return (
    <section className="w-full max-w-full px-[18px] py-[72px] md:px-8 md-lg:px-12 3xl:w-[1328px]">
      <h3 className="mb-9 text-2xl font-medium text-text-color-100 max-[820px]:text-center">Core Technology</h3>
      <div className="flex flex-col">
        <div className="w-full border-b border-divider-color-20 pb-[168px] max-[820px]:flex max-[820px]:justify-center min-[820px]:pb-6">
          <div className="relative">
            {renderCard(CARDS[0])}
            <div className="absolute max-[820px]:left-0 max-[820px]:top-[156px] min-[820px]:right-0 min-[820px]:top-4 lg:top-[29px] 2xl:right-[122px]">
              <CoreTechClearing className="h-[281px] w-[306px] flex-shrink-0 lg:h-[324px] lg:w-[366px]" />
            </div>
          </div>
        </div>
        <div className="border-b border-divider-color-20 max-[820px]:flex max-[820px]:justify-center max-[820px]:pb-9 max-[820px]:pt-[178px] min-[820px]:py-6">
          {renderCard(CARDS[1])}
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-divider-color-20 py-6 max-[820px]:flex-col max-[820px]:gap-[18px]">
        {renderCard(CARDS[2])}
        <div className="2xl:pr-[122px]">
          <CoreTechClearingSecond className="h-[94px] w-[306px] flex-shrink-0 lg:w-[372px]" />
        </div>
      </div>
      <div className="mt-9 flex flex-row items-end gap-4 max-[820px]:justify-center">
        <CoreTechPoweredBy />
        <Link
          href="/"
          className="flex h-[36px] w-[97px] items-center justify-center rounded bg-primary-cta-color-60 text-sm text-primary-cta-layer-color-60 no-underline duration-200 hover:bg-primary-cta-color-80 hover:text-primary-cta-layer-color-80"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
