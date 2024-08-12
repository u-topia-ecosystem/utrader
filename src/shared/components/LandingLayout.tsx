import { ReactNode } from "react"
import { CustomFooter } from "./Layout/CustomFooter"
import { CustomHeader } from "./Layout/CustomHeader"
import Logo from "./Logo"

const LandingLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <main className="flex flex-col">
      <CustomHeader headerLogoIcon={<Logo />} />

      {children}

      <CustomFooter className="mt-auto" />
    </main>
  )
}

export default LandingLayout
