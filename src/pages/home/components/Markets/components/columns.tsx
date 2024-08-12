import { cn } from "@/shared/utils/cn"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid"
import { formatSignificantWithSeparators } from "@openware/neodax-web-sdk"
import { createColumnHelper } from "@tanstack/react-table"
import { CoinMarket } from "coingecko-api-v3"
import Image from "next/image"
import Link from "next/link"

const columnHelper = createColumnHelper<CoinMarket>()

export const getColumns = (isMobile?: boolean) => {
  const columns = [
    columnHelper.accessor("name", {
      header: () => <div className="text-left">Pair</div>,
      cell: (info) => <Pair data={info.row.original} />,
    }),
    columnHelper.accessor((row) => row.current_price, {
      id: "current_price",
      header: () => <div>Last Price</div>,
      cell: (info) => <div className="font-semibold">${formatSignificantWithSeparators(String(info.getValue() || ""))}</div>,
    }),
    columnHelper.accessor("price_change_percentage_24h", {
      header: () => "24h",
      cell: (info) => <PriceChange24h data={info.row.original} />,
    }),
    columnHelper.accessor("total_volume", {
      header: () => <div className="">24h Volume</div>,
      cell: (info) => <div className="font-normal">${formatSignificantWithSeparators(String(info.getValue() || ""))}</div>,
      enableHiding: true,
    }),
  ]

  if (isMobile) return columns.filter((c, idx) => idx !== columns.length - 1)

  return columns
}

const Pair = ({ data, className }: { data: CoinMarket; className?: string }) => {
  const href = `/trading/${data.symbol}usd`

  return (
    <Link href={href} className={cn("flex items-center gap-3 font-semibold", className)}>
      <div className="min-h-[36px] min-w-[36px] rounded-full">
        {data.image && <Image src={data.image} width={36} height={36} alt={data.name || ""} className="rounded-full" />}
      </div>

      <div className="uppercase">
        <span className="">{data.symbol}</span>
        <span className="text-xs text-text-color-60">/USD</span>
      </div>
    </Link>
  )
}

const PriceChange24h = ({ data }: { data: CoinMarket }) => {
  const direction = data.price_change_24h ? (data.price_change_24h < 0 ? "negative" : "positive") : "nil"
  const price = data.price_change_percentage_24h?.toFixed(2) || ""

  const Icon = direction === "negative" ? ArrowDownIcon : ArrowUpIcon

  return (
    <div
      className={cn(
        "ml-auto flex w-fit items-center gap-1 rounded-md px-2 py-1",
        direction === "negative" ? "bg-ask-10 text-ask-60" : "bg-system-green-10 text-system-green-60",
      )}
    >
      <Icon className="size-4" /> {formatSignificantWithSeparators(price)}%
    </div>
  )
}
