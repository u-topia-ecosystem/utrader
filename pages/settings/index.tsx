import { getPublicConfig } from "@/shared/configs/app"
import { appTitle, GitTag, LanguageSelectorWidget, useSetMobileDevice } from "@openware/neodax-web-sdk"
import classnames from "classnames"
import dynamic from "next/dynamic"
import Head from "next/head"
import posthog from "posthog-js"
import { FC, useCallback, useEffect } from "react"
import { useIntl } from "react-intl"

// @ts-ignore
const ThemeSwitcher = dynamic(() => import("@openware/neodax-web-sdk").then((mod) => mod.ThemeSwitcherWidget), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const SettingsPage: FC = () => {
  const intl = useIntl()
  const { defaultAppTitle } = getPublicConfig()

  const isMobile = useSetMobileDevice()

  const translate = useCallback((id: string, values?: any) => intl.formatMessage({ id }, values), [intl])

  useEffect(() => {
    const pageViewData = {
      type: "paveView",
      name: "settings_view",
    }

    posthog?.capture("page_view", pageViewData)
  }, [])

  return (
    <>
      <Head>
        <title>{appTitle(defaultAppTitle, translate("page.tab.header.settings"))}</title>
      </Head>
      <div
        className={classnames("flex h-full w-full flex-col bg-body-background-color p-4", {
          "overflow-y-auto pb-16": isMobile,
        })}
      >
        <div className="border-b border-divider-color-20 pb-6">
          <span className="text-2xl font-semibold leading-8 text-text-color-100">{translate("page.body.settings.header.label")}</span>
        </div>
        <div className="flow-root border-b border-divider-color-20 py-4">
          <div className="float-left flex h-full items-center">
            <span className="text-lg font-medium leading-6 text-text-color-90">{translate("page.body.settings.rows.language")}</span>
          </div>
          <div className="float-right">
            <LanguageSelectorWidget />
          </div>
        </div>
        <div className="flow-root border-b border-divider-color-20 py-4">
          <div className="float-left flex h-full items-center">
            <span className="text-lg font-medium leading-6 text-text-color-90">{translate("page.body.settings.rows.theme")}</span>
          </div>
          <div className="float-right">
            <ThemeSwitcher />
          </div>
        </div>
        <GitTag />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return { props: {} }
}

export default SettingsPage
