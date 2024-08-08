import { Component, ErrorInfo, ReactNode } from "react"
import * as Sentry from "@sentry/nextjs"
import Image from "next/image"

interface Props {
  children?: ReactNode | undefined
  isAdmin?: boolean
}

interface State {
  hasError: boolean
  caughtError?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    caughtError: undefined,
  }

  public static getDerivedStateFromError(_Error: Error): State {
    return { hasError: true, caughtError: _Error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (!this.props?.isAdmin) {
      console.error(
        `%cAn ${error?.name} has occured! \nContact the authorities for more details.`,
        "background: #FFE7E7; color: #D10000; width: 200px;",
      )
    } else {
      console.error("Uncaught error:", error, errorInfo)
    }

    Sentry.captureException(error)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full flex-col pl-6 pr-6">
          <div className="flex h-screen items-center justify-center">
            <div className="relative h-full w-1/3">
              <Image alt="Server error" src="/images/500.svg" layout="fill" />
            </div>
            <div className="flex h-full items-center">
              <div className="flex flex-col">
                <div className="font-gilmer-bold text-5xl text-text-color-90">WILL BE BACK SHORTLY </div>
                <div className="mb-5 mt-5 w-[500px] text-2xl text-text-color-90">
                  Our website is temporarily unavailable due to maintenance.
                  <br />
                  Please visit us again shortly.
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return <>{this.props.children}</>
  }
}

export default ErrorBoundary as any
