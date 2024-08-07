import Link from "next/link"
import React, { FC, lazy, Suspense } from "react"

const HeroIcon = lazy(() => import("../../assets/landing/Hero"))

const HeroSection: FC = () => {
  return (
    <section className="flex w-full items-center justify-center bg-primary-cta-color-60 px-[18px] py-[60px] min-[520px]:py-8 md:px-8 lg:px-12">
      <div className="w-full max-w-full 3xl:w-[1328px]">
        <div className="flex items-center justify-between gap-8 lg:gap-16">
          <div className="flex flex-col items-start gap-6 max-lg:min-w-[340px] max-lg:max-w-[480px] lg:max-w-[600px]">
            <h1 className="text-3xl font-bold text-primary-cta-layer-color-60 md:text-5xl lg:text-6xl">
              Revolutionizing Your Trading Journey
            </h1>
            <p className="text-lg font-[400] text-primary-cta-layer-color-60">
              Trade digital assets without ever worrying about your funds. DEX Security. CEX User Experience.
            </p>
            <Link
              href="/trading"
              className="flex w-[165px] items-center justify-center border border-neutral-control-color-70 bg-neutral-control-color-0 py-2.5 text-sm text-neutral-control-layer-color-90 duration-200 hover:border-neutral-control-color-80 hover:bg-neutral-control-color-80"
            >
              Start Trading
            </Link>
          </div>
          <Suspense fallback={null}>
            <HeroIcon className="min-w-[220px] max-lg:max-h-[320px] max-[720px]:hidden lg:h-[420px] lg:w-[572px]" />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
