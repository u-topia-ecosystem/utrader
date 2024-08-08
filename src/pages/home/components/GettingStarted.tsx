import { GettingStartedAssets } from "@/shared/assets/landing/GettingStartedAssets"
import React, { FC } from "react"

const CARDS = [
  {
    title: "Set up your wallet",
    description: "Sign up with email and get your non-custodial Smart Wallet created within seconds.",
    imageIndex: 0,
  },
  {
    title: "Fund your Channel",
    description: "Fund your Smart Wallet and use it to deposit collateral and open channel.",
    imageIndex: 1,
  },
  {
    title: "Start Trading",
    description: "Long or short your favorite pairs without prepayment. Batch settle with Atomic Swap.",
    imageIndex: 2,
  },
]

export const GettingStarted: FC = () => {
  const renderCard = (card: (typeof CARDS)[0]) => {
    return (
      <div
        key={card.title}
        className="flex w-full flex-col gap-4 rounded bg-body-background-color p-6 text-neutral-control-layer-color-100 shadow-lg"
      >
        <GettingStartedAssets index={card.imageIndex} />
        <div className="flex w-full flex-col items-start gap-3">
          <h4 className="flex items-end gap-1 font-open-sans text-xl font-bold text-text-color-100">
            {card.title}
            <span>.</span>
          </h4>
          <p className="font-open-sans text-sm font-semibold text-text-color-60">{card.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-full flex-col gap-6 3xl:w-[1328px]">
      <h3 className="font-inter text-2xl font-bold text-text-color-100">Getting started</h3>
      <div className="grid gap-6 md-2:grid-cols-2 lg-1:grid-cols-3">{CARDS.map(renderCard)}</div>
    </div>
  )
}
