import { NeoDAXLogo } from "../../assets"
import { BuildWithSchema } from "../../assets/landing/BuildWithSchema"
import React from "react"

const LIST = [
  "Fully non-custodial for users and brokers",
  "Designed for the clearing network",
  "Simple, secure, yet extremely efficient",
  "Ultra low latency",
]

export const BuiltWith = () => {
  return (
    <section className="mt-[108px] flex w-full max-w-full flex-col-reverse items-center justify-between max-[840px]:gap-9 md:mt-[129px] min-[840px]:flex-row 2xl:gap-6 3xl:w-[1328px]">
      <div className="z-10 flex w-full flex-col gap-9 min-[840px]:w-[612px]">
        <div className="flex flex-col gap-6">
          <h3 className="flex items-center gap-3">
            <span className="whitespace-nowrap text-2xl font-medium text-text-color-100">Build with</span>
            <NeoDAXLogo classNames="max-h-[42px]" />
          </h3>
          <p className="max-w-[340px] text-xl font-semibold text-text-color-100">
            A bleeding-edge infrastructure for the new-generation broker platforms
          </p>
          <div className="flex flex-col gap-3">
            {LIST.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-normal border-l-4 border-primary-cta-color-60 py-2 pl-5 text-base text-text-color-100">{item}</div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-[164px] rounded bg-primary-cta-color-60 py-2.5 text-sm font-semibold text-primary-cta-layer-color-60 shadow-sm hover:bg-primary-cta-color-80 hover:text-primary-cta-layer-color-80 hover:shadow active:bg-primary-cta-color-90">
          Build your Broker
        </button>
      </div>
      <div className="z-10">
        <BuildWithSchema className="h-[160px] w-full xs:h-[220px] xs:w-[340px] lg:h-[320px] lg:w-[490px] 2xl:h-[400px] 2xl:w-[612px]" />
      </div>
    </section>
  )
}
