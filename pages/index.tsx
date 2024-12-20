import { FC, JSX } from "react"
import { getPublicConfig } from "@/shared/configs/app"
import { appTitle } from "@openware/neodax-web-sdk"
import Head from "next/head"
import Home from "@/pages/home"

interface HomeProps {}

const Page: FC<HomeProps> = (): JSX.Element => {
  const { defaultAppTitle } = getPublicConfig()

  return (
    <>
      <Head>
        <title>{appTitle(defaultAppTitle, "")}</title>
      </Head>
      <Home />
    </>
  )
}

// export const getServerSideProps = async () => {
//   const { strapiBaseUrl } = getPublicConfig()

//   const news = await getLatestNews(strapiBaseUrl)

//   return { props: { news } }
// }

export default Page
