import { useSetMobileDevice } from "@openware/neodax-web-sdk"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Custom500() {
  const isMobile = useSetMobileDevice(false, 1025)
  const router = useRouter()

  const renderDesktop = () => {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="relative h-full w-1/3">
          <Image alt="Server error" src="/images/500.svg" layout="fill" />
        </div>
        <div className="flex h-full items-center">
          <div className="flex flex-col">
            <div className="font-gilmer-bold text-6xl text-text-color-90">WILL BE BACK SHORTLY</div>
            <div className="mb-5 mt-5 w-[340px] text-4xl text-text-color-90">
              Our website is temporarily unavailable due to maintenance.
              <br />
              Please visit us again shortly.
            </div>
            {/* <Link legacyBehavior href="#">
                            <a
                                className="border flex justify-center items-center text-sm font-metro-semibold border-primary-cta-layer-color-60 text-primary-cta-layer-color-60 bg-primary-cta-color-60 w-[296px] h-[40px] hover:bg-primary-cta-color-80 rounded shadow-sm"
                                onClick={() => router.reload()}
                            >
                                Refresh
                            </a>
                        </Link> */}
          </div>
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return (
      <div className="flex h-screen flex-col items-center md:mt-6">
        <div className="relative h-[338px] w-full max-w-[338px]">
          <Image alt="Server error" src="/images/500.svg" layout="fill" />
        </div>
        <div className="font-gilmer-bold mt-6 max-w-[338px] text-[48px] leading-[52px] text-text-color-90">WILL BE BACK SHORTLY</div>
        <div className="mb-5 mt-5 max-w-[338px] text-4xl text-text-color-90">
          Our website is temporarily unavailable due to maintenance.
          <br />
          Please visit us again shortly.
        </div>
        {/* <div className="w-full max-w-[338px]">
                    <Link legacyBehavior href="#">
                        <a
                            className="flex justify-center items-center text-sm font-semibold text-primary-cta-layer-color-60 bg-primary-cta-color-60 border border-primary-cta-layer-color-60 h-[40px] w-full rounded shadow-sm"
                            onClick={() => router.reload()}
                        >
                            Refresh
                        </a>
                    </Link>
                </div> */}
      </div>
    )
  }

  return (
    <>
      <Head>
        <link rel="canonical" href="/500" />
        <meta property="og:url" content="/500" />
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
