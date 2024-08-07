import React from "react"

const CARDS_FIRST = [
  {
    title: ">3,500",
    subtitle: "Clearing Channels",
  },
  {
    title: ">$136M",
    subtitle: "Trading Volume",
  },
]

const CARDS_SECOND = [
  {
    title: "1,244",
    subtitle: "Trading Instruments",
  },
  {
    title: "99,98%",
    subtitle: "Successful Settlements",
  },
]

export const LandingStats = () => {
  const renderStats = (item: (typeof CARDS_FIRST)[0]) => {
    return (
      <div key={item.title} className="flex flex-col items-center justify-center gap-2">
        <h5 className="text-sm font-normal text-text-color-60 lg:text-base">{item.subtitle}</h5>
        <p className="text-6xl font-bold text-text-color-100 lg:text-8xl">{item.title}</p>
      </div>
    )
  }
  return (
    <section className="mt-[108px] flex w-full max-w-full flex-col items-center gap-9 md:gap-[50px] lg:mt-24 3xl:w-[1328px]">
      <div className="z-10 flex w-full gap-9 max-md:flex-col md:justify-around md:gap-6">{CARDS_FIRST.map(renderStats)}</div>
      <div className="z-10 flex w-full gap-9 max-md:flex-col md:justify-around md:gap-6">{CARDS_SECOND.map(renderStats)}</div>
    </section>
  )
}
