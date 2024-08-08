import { getPublicConfig } from "@/shared/configs/app"
import { appTitle, useSetMobileDevice, WalletWidget } from "@openware/neodax-web-sdk"
import classnames from "classnames"
import Head from "next/head"
import { useCallback } from "react"
import { useIntl } from "react-intl"

const WalletPage: React.FC = () => {
  const intl = useIntl()
  const { defaultAppTitle } = getPublicConfig()

  const isMobile = useSetMobileDevice(false, 655)

  const translate = useCallback((id: string) => intl.formatMessage({ id }), [intl])

  return (
    <>
      <Head>
        <title>{appTitle(defaultAppTitle, translate("page.tab.header.wallet"))}</title>
      </Head>
      <div className={classnames("h-screen max-h-screen w-full bg-main-background-color", isMobile ? "overflow-y-auto pb-20 pt-4" : "p-4")}>
        <WalletWidget />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return { props: {} }
}

export default WalletPage
