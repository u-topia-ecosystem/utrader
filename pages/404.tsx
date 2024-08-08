import { useSetMobileDevice } from "@openware/neodax-web-sdk"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Custom404() {
  const isMobile = useSetMobileDevice(false, 1025)

  const renderDesktop = () => {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-full items-center">
          <div className="flex flex-col">
            <div className="font-gilmer-bold text-6xl text-text-color-90">Ooops! Something went wrong.</div>
            <div className="mb-5 mt-5 w-[457px] text-base text-text-color-90">
              The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
            </div>
            <Link
              className="font-metro-semibold flex h-[40px] w-[214px] items-center justify-center border border-primary-cta-layer-color-60 bg-primary-cta-color-60 text-sm text-primary-cta-layer-color-60 hover:bg-primary-cta-color-80"
              href="/"
            >
              Refresh
            </Link>
          </div>
        </div>
        <div className="relative h-full w-1/2">
          <Image alt="Page Not Found" src="/images/404.svg" layout="fill" />
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return (
      <div className="flex h-screen flex-col items-center md:mt-6">
        <div className="relative h-[338px] w-full max-w-[338px]">
          <Image alt="Page Not Found" src="/images/404.svg" layout="fill" />
        </div>
        <div className="font-gilmer-bold mt-6 max-w-[338px] text-[48px] leading-[52px] text-text-color-90">
          Ooops! Something went wrong.
        </div>
        <div className="mb-5 mt-5 max-w-[338px] text-base text-text-color-90">
          The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
        </div>
        <div className="w-full max-w-[338px]">
          <Link
            className="flex h-[40px] w-full items-center justify-center border border-primary-cta-layer-color-60 bg-primary-cta-color-60 text-sm font-semibold text-primary-cta-layer-color-60"
            legacyBehavior
            href="/"
          >
            Refresh
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <link rel="canonical" href="/404" />
        <meta property="og:url" content="/404" />
      </Head>
      <div className="flex h-full w-full flex-col pl-6 pr-6">{isMobile ? renderMobile() : renderDesktop()}</div>
    </>
  )
}

export async function getStaticProps(_context: any) {
  return {
    props: {},
    revalidate: 60,
  }
}
