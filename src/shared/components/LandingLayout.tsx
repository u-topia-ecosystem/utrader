import { ReactNode } from "react"
import { CustomFooter } from "./Layout/CustomFooter"
import { CustomHeader } from "./Layout/CustomHeader"
import Logo from "./Logo"
import { cn } from "../utils/cn"

const LandingLayout = ({ children, className }: { children?: ReactNode; className?: string }) => {
  return (
    <div className="flex flex-col">
      <CustomHeader headerLogoIcon={<Logo />} />

      <main className={cn("pb-16", className)}>{children}</main>

      <CustomFooter className="mt-auto" />
    </div>
  )
}

export default LandingLayout
