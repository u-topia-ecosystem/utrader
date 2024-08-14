import { FC, JSX } from "react"
import { getPublicConfig } from "@/shared/configs/app"
import { appTitle } from "@openware/neodax-web-sdk"
import Head from "next/head"
import NewsEvents from "@/pages/newsEvents"

interface HomeProps {}

const Page: FC<HomeProps> = (): JSX.Element => {
  const { defaultAppTitle } = getPublicConfig()

  return (
    <>
      <Head>
        <title>{appTitle(defaultAppTitle, "News/Events")}</title>
      </Head>
      <NewsEvents />
    </>
  )
}

export default Page
