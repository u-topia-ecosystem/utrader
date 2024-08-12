import { CoinMarket } from "coingecko-api-v3"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid"
import { useMarketsData } from "../data"
import { cn } from "@/shared/utils/cn"
import { formatSignificantWithSeparators, formatWithSeparators } from "@openware/neodax-web-sdk"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel"
import Link from "next/link"

export const TickerGroup = () => {
  const { data = [] } = useMarketsData()

  return (
    <Carousel
      className="relative mx-auto w-full max-w-[2330px] px-4"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="w-full gap-1 p-2">
        {data.map((coin, idx) => (
          <CarouselItem key={idx + "ticker"} className={getCarouselItemBasis(coin)}>
            <Ticker coin={coin} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-0 top-1/2 bg-neutral-control-color-0 text-neutral-control-layer-color-90 hover:bg-neutral-control-color-80" />

      <CarouselNext className="absolute right-0 top-1/2 bg-neutral-control-color-0 text-neutral-control-layer-color-90 hover:bg-neutral-control-color-80" />
    </Carousel>
  )
}

const getCarouselItemBasis = (coin: CoinMarket) => {
  const name = `${coin.name} ${coin.symbol}`

  const styles = {
    long: "basis-[290px] sm-8:basis-[350px]",
    normal: "basis-[290px] sm-8:basis-[320px]",
  }

  if (name.length >= 12) return styles.long
  return styles.normal
}

type Props = {
  coin: CoinMarket
}

const Ticker = ({ coin }: Props) => {
  const direction = coin.price_change_24h && coin.price_change_24h < 0 ? "negative" : "positive"
  const price = coin.price_change_percentage_24h?.toFixed(2) || ""

  const Icon = direction === "negative" ? ArrowDownIcon : ArrowUpIcon

  const colors = {
    negative: "text-ask-60 bg-ask-10",
    positive: "text-system-green-60 bg-system-green-10",
  }

  const href = `/trading/${coin.symbol}usd`

  return (
    <Link href={href} className="flex items-center gap-2 rounded-md bg-body-background-color px-2 py-1 ring-1 ring-divider-color-20">
      <div className={cn("flex h-full min-h-10 min-w-9 items-center justify-center gap-1 rounded-md", colors[direction])}>
        <Icon className="size-6" />
      </div>

      <div className="">
        <CoinName coin={coin} />
        <div className="font-open-sans text-sm font-semibold uppercase text-text-color-70">
          ${formatSignificantWithSeparators(coin.current_price?.toString() || "")}
        </div>
      </div>

      <div className="ml-auto w-fit text-right">
        <div className={cn(colors[direction], "bg-transparent font-open-sans text-sm font-semibold")}>
          {formatSignificantWithSeparators(price)}%
        </div>
        <div className={cn(colors[direction], "bg-transparent font-open-sans text-sm font-normal")}>
          ${formatWithSeparators(coin.price_change_24h?.toFixed(8) || "", ",")}
        </div>
      </div>
    </Link>
  )
}

const CoinName = ({ coin }: { coin: CoinMarket }) => {
  return (
    <>
      <div className="flex items-center gap-1 max-sm-8:hidden">
        <div className="min-w-fit font-open-sans text-base font-bold text-text-color-100">{coin.name}</div>
        <div className="font-open-sans text-sm font-semibold uppercase text-text-color-70">{coin.symbol}/usd</div>
      </div>

      <div className="flex items-center font-open-sans uppercase sm-8:hidden">
        <span className="min-w-fit text-base font-bold text-text-color-100">{coin.symbol}</span>
        <span className="text-xs font-semibold text-text-color-70">/usd</span>
      </div>
    </>
  )
}

export default Ticker
