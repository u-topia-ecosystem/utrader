import { CorePotentialChart } from "@/shared/assets/landing/CorePotentialChart"

import LandingLayer from "@/shared/components/LandingLayer"
import { getPublicConfig } from "@/shared/configs/app"
import React, { FC } from "react"

const CARDS_FIRST_ROW = [
  {
    title: "Non-custodial",
    description: "You don't need to trust NeoDAX with your funds. Only deposit a margin on chain and have a full control of your assets.",
  },
  {
    title: "Beyond Perpetuals",
    description: "On top of trading perpetuals, NeoDAX allows you to access real (spot) assets and withdraw them for Holding.",
  },
]

const CARDS_SECONDS_ROW = [
  {
    title: "5x Capital efficient",
    description: "NeoDAX allows you to trade with up to 5x to your collateral amount with spot settlement.",
  },
  {
    title: "Low Latency",
    description: "Hybrid architecture powered by Finex engine executing millions of operations per second and geolocated node.",
  },
]

export const CorePotential: FC = () => {
  const { appName } = getPublicConfig()

  const renderCard = ({ title, description }: (typeof CARDS_FIRST_ROW)[0]) => (
    <div key={"card" + title} className="flex w-full max-w-[294px] flex-col gap-3">
      <h4 className="font-open-sans text-xl font-bold text-text-color-100">{title} .</h4>
      <p className="text-sm font-normal text-text-color-60">{description}</p>
    </div>
  )
  return (
    <LandingLayer className="flex flex-col-reverse items-center justify-between gap-9 2xl:flex-row 2xl:gap-6">
      <div className="z-10 flex flex-col gap-9">
        <h3 className="text-[22px] font-medium text-text-color-100 max-lg:leading-[30px] lg:text-2xl">
          Unlock the full potential of trading with {appName}
        </h3>

        <div className="flex w-full flex-col items-center gap-6 md-lg:gap-9">
          <div className="flex items-center gap-6 max-md-lg:flex-col">{CARDS_FIRST_ROW.map(renderCard)}</div>
          <div className="relative flex items-center gap-6 max-md-lg:flex-col">
            {CARDS_SECONDS_ROW.map(renderCard)}
            <div className="pointer-events-none absolute -left-[700px] bottom-[70px] md:-left-[540px]"></div>
          </div>
        </div>
      </div>

      <CorePotentialChart className="h-[221px] w-[340px] md:h-[320px] md:w-[490px] 3xl:h-[400px] 3xl:w-[612px]" appName={appName} />
    </LandingLayer>
  )
}
