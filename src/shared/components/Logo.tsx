import { useAppSelector } from "@openware/neodax-web-sdk"
import Image from "next/image"
import { cn } from "../utils/cn"

const Logo = ({ className }: { className?: string }) => {
  const colorTheme = useAppSelector((state: any) => state.app.globalSettings.color)

  return (
    <Image
      alt="Logo"
      height={110}
      width={40}
      src={`/images/${colorTheme !== "dark" ? "Light" : "Dark"}Logo.svg`}
      className={cn("focus:ring-none h-full w-full focus:outline-none", className)}
    />
  )
}

export default Logo
