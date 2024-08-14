import { SearchIcon } from "lucide-react"
import { cn } from "../utils/cn"
import { Input, InputProps } from "./ui/input"

const SearchInput = ({ className, ...props }: InputProps) => {
  return (
    <div className={cn("relative flex items-center rounded-md bg-input-background-color", className)}>
      <Input type="search" placeholder="Search" className="flex-1 bg-inherit" {...props} />

      <SearchIcon className="absolute right-3 text-neutral-control-layer-color-100" />
    </div>
  )
}

export default SearchInput
