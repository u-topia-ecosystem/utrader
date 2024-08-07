import { GettingStartedAssets } from "../../assets/landing/GettingStartedAssets"
import React, { FC } from "react"

const CARDS = [
  {
    title: "Set up your wallet",
    description: "Sign up with email and get your non-custodial Smart Wallet created within seconds",
    imageIndex: 0,
  },
  {
    title: "Fund your Channel",
    description: "Fund your Smart Wallet and use it to deposit collateral and open channel",
    imageIndex: 1,
  },
  {
    title: "Start Trading",
    description: "Long or short your favorite pairs without prepayment. Batch settle with Atomic Swap",
    imageIndex: 2,
  },
]

export const GettingStarted: FC = () => {
  const renderCard = (card: (typeof CARDS)[0]) => {
    return (
      <div key={card.title} className="flex w-full flex-col gap-4 rounded bg-body-background-color p-6 shadow-lg">
        <GettingStartedAssets index={card.imageIndex} />
        <div className="flex w-full flex-col items-start gap-3">
          <h4 className="flex items-end gap-1 text-xl font-semibold text-text-color-100">
            {card.title}
            <span className="text-2xl text-primary-cta-color-80">.</span>
          </h4>
          <p className="text-sm text-text-color-60">{card.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-full flex-col gap-6 3xl:w-[1328px]">
      <h3 className="text-2xl font-medium text-text-color-100">Getting started</h3>
      <div className="flex flex-col gap-6 md:justify-between lg:flex-row">{CARDS.map(renderCard)}</div>
    </div>
  )
}
