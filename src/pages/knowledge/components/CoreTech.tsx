import { CoreTechClearing } from "@/shared/assets/CoreTechClearing"
import { CoreTechAssets, CoreTechClearingSecond } from "@/shared/assets/landing/CoreTechAssets"
import { CoreTechPoweredBy } from "@/shared/assets/landing/CoreTechPoweredBy"
import LandingLayer from "@/shared/components/LandingLayer"
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
      <div className="flex flex-shrink-0 flex-row items-center gap-4 max-xs-5:flex-col lg:gap-6">
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
    <LandingLayer className="py-[72px]">
      <h3 className="mb-9 text-2xl font-medium text-text-color-100 max-[855px]:text-center">Core Technology</h3>

      <div className="flex flex-col">
        <div className="w-full border-b border-divider-color-20 pb-6 max-[855px]:flex max-[855px]:justify-center">
          <div className="relative max-[855px]:space-y-10">
            {renderCard(CARDS[0])}

            <div className="h-[250px] w-full max-w-[368px] overflow-hidden min-[855px]:absolute min-[855px]:right-0 min-[855px]:top-10 md-7:h-[324px]">
              <CoreTechClearing className="h-full w-full max-w-full" />
            </div>
          </div>
        </div>

        <div className="border-b border-divider-color-20 py-6 max-[855px]:flex max-[855px]:justify-center">{renderCard(CARDS[1])}</div>
      </div>

      <div className="flex items-center justify-between border-b border-divider-color-20 py-6 max-[855px]:flex-col max-[855px]:gap-[18px]">
        {renderCard(CARDS[2])}
        <div className="">
          <CoreTechClearingSecond className="h-[94px] w-[306px] max-w-full flex-shrink-0 lg:w-[372px]" />
        </div>
      </div>

      <div className="mt-9 flex flex-row gap-4 max-[855px]:justify-center max-xs-3:flex-col xs-3:items-end">
        <CoreTechPoweredBy />
        <Link
          href="/"
          className="flex h-[36px] w-[97px] items-center justify-center rounded bg-primary-cta-color-60 text-sm text-primary-cta-layer-color-60 no-underline duration-200 hover:bg-primary-cta-color-80 hover:text-primary-cta-layer-color-80"
        >
          Learn More
        </Link>
      </div>
    </LandingLayer>
  )
}
