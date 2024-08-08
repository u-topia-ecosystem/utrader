import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const LandingLayer = ({ children, className, tag = "section" }: { children?: ReactNode; className?: string; tag?: "section" }) => {
  const Tag = tag
  return <Tag className={twMerge("mx-auto box-border w-full max-w-[1370px] px-5", className)}>{children}</Tag>
}

export default LandingLayer
