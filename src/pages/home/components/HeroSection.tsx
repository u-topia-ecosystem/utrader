import { cn } from "@/shared/utils/cn"
import Link from "next/link"
import React from "react"
import { WalletIcon } from "@heroicons/react/20/solid"

const HeroSection = () => {
  const styles = {
    section: "sm-7:min-h-[360px] sm-3:p-6 px-4 py-10 flex-col flex items-start justify-end sm-3:rounded-xl bg-primary-cta-color-60",
  }

  return (
    <section className="grid gap-2 text-xl sm-3:p-4 md-4:grid-cols-2 md-7:grid-cols-[463px_1fr]">
      <LeftSection className={cn(styles.section, "max-md-4:hidden")} />
      <RightSection className={styles.section} />
    </section>
  )
}

const LeftSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn("gap-2", className)}>
      <WalletIcon className="w-[26px] text-primary-cta-layer-color-60" />
      <div className="text-2xl font-medium text-primary-cta-layer-color-60">U-topia Points are LIVE! 🔥</div>
    </div>
  )
}

const RightSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn("gap-6", className, "@container")}>
      <h1 className="max-w-[600px] font-inter text-3xl font-bold text-primary-cta-layer-color-60 @sm-6:text-5xl">
        Revolutionizing Your Trading Journey
      </h1>

      <p className="max-w-[539px] font-open-sans text-sm font-normal text-primary-cta-layer-color-60 @sm-6:text-lg">
        Trade digital assets without ever worrying about your funds. DEX Security. CEX User Experience.
      </p>

      <Link
        href="/trading"
        className="flex w-[165px] items-center justify-center rounded-md border border-neutral-control-color-70 bg-neutral-control-color-0 py-2.5 font-open-sans text-sm font-semibold text-neutral-control-layer-color-90 duration-200 hover:border-neutral-control-color-80 hover:bg-neutral-control-color-80"
      >
        Start Trading
      </Link>
    </div>
  )
}

export default HeroSection
