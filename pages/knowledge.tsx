import { FC, JSX } from "react"
import { getPublicConfig } from "@/shared/configs/app"
import { appTitle } from "@openware/neodax-web-sdk"
import Head from "next/head"
import KnowledgeCenter from "@/pages/knowledge"

interface HomeProps {}

const Page: FC<HomeProps> = (): JSX.Element => {
  const { defaultAppTitle } = getPublicConfig()

  return (
    <>
      <Head>
        <title>{appTitle(defaultAppTitle, "Knowledge Center")}</title>
      </Head>
      <KnowledgeCenter />
    </>
  )
}

export default Page
