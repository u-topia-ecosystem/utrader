import { cn } from "@/shared/utils/cn"
import { useState } from "react"

const VertNewsTabs = () => {
  const [index, setIndex] = useState(0)

  const list: TabItemProps[] = [
    { value: "All" },
    { value: "New Listings" },
    { value: "Latest U-trader News" },
    { value: "Latest Activities" },
    { value: "Maintenance Updates" },
    { value: "Delisting" },
  ]

  return (
    <div className="grid h-fit w-[240px] gap-2 bg-neutral-control-color-10 px-6 py-4">
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
        "cursor-pointer py-2 font-open-sans text-base font-semibold text-neutral-control-layer-color-60 transition-all duration-300",
        active && "border-l-[3px] border-primary-cta-color-60 pl-2 text-neutral-control-layer-color-100",
      )}
    >
      {value}
    </div>
  )
}

export default VertNewsTabs
