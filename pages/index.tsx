import { FC, JSX } from "react"
import { getPublicConfig } from "@/shared/configs/app"
import { appTitle } from "@openware/neodax-web-sdk"
import Head from "next/head"
import Home, { TStrapiNewsType, getLatestNews } from "@/pages/home"

interface HomeProps {
  news?: TStrapiNewsType[]
}

const Page: FC<HomeProps> = ({ news = [] }): JSX.Element => {
  const { defaultAppTitle } = getPublicConfig()

  return (
    <>
      <Head>
        <title>{appTitle(defaultAppTitle, "")}</title>
      </Head>
      <Home news={news} />
    </>
  )
}

// export const getServerSideProps = async () => {
//   const { strapiBaseUrl } = getPublicConfig()

//   const news = await getLatestNews(strapiBaseUrl)

//   return { props: { news } }
// }

export default Page
