import * as React from "react"

import { cn } from "@/shared/utils/cn"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-divider-color-20 bg-input-background-color px-3 py-2 text-sm text-text-color-100 ring-offset-input-background-color file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-color-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
