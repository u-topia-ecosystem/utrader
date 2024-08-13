import { cn } from "@/shared/utils/cn"
import Image from "next/image"
import Link from "next/link"

const KnowledgeHero = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-10 py-10 pb-24 md-2:grid-cols-[1fr_300px] lg-2:grid-cols-[1fr_462px]">
      <ContentSection />

      <div className="max-md-2:hidden">
        <div className="h-[12px] w-full bg-primary-cta-color-60"></div>
        <Image src="/images/knowledge-hero.webp" width={462} height={462} alt="" className="h-auto w-full" />
      </div>
    </div>
  )
}

const ContentSection = () => {
  return (
    <div className={cn("flex flex-col justify-center gap-6 @container")}>
      <h1 className="w-full max-w-[547px] font-inter text-3xl font-bold text-text-color-100 @sm-6:text-5xl">U-trader executive summary</h1>

      <p className="max-w-[564px] font-open-sans text-sm font-normal text-text-color-80 @sm-6:text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard dummy text ever since
        the stoneage.
      </p>

      <Link
        href="/trading"
        className="mt-16 flex w-[165px] items-center justify-center rounded-md border border-neutral-control-color-70 bg-primary-cta-color-60 py-2.5 font-open-sans text-sm font-semibold text-primary-cta-layer-color-60 duration-200 hover:border-neutral-control-color-80"
      >
        Start Trading
      </Link>
    </div>
  )
}

export default KnowledgeHero
