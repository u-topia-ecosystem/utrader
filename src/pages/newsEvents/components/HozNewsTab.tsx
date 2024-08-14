import { cn } from "@/shared/utils/cn"
import { useState } from "react"

const HozNewsTab = () => {
  const [index, setIndex] = useState(0)

  const list: TabItemProps[] = [{ value: "All" }, { value: "Fiat Deposit" }, { value: "Spot" }, { value: "Derivatives" }, { value: "Earn" }]

  return (
    <div className="flex items-center gap-5">
      {list.map((item, idx) => (
        <TabItem key={idx} {...item} active={idx === index} onClick={() => setIndex(idx)} />
      ))}
    </div>
  )
}

type TabItemProps = { value: string; onClick?: () => void; active?: boolean }

const TabItem = ({ value, active, onClick }: TabItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded border-2 border-transparent px-4 py-1 font-open-sans text-base font-semibold text-text-color-90 transition-all duration-300",
        active && "border-primary-cta-color-60 bg-primary-cta-color-10 text-neutral-control-layer-color-100",
      )}
    >
      {value}
    </div>
  )
}

export default HozNewsTab
