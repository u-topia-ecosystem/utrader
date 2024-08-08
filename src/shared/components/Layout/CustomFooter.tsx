import Link from "next/link"
import React, { useCallback, useMemo } from "react"
import { FOOTER_ITEMS, getSocialIcon } from "./footerItems"

type TFooterLinkItem = {
  title: string
  url: string
}

export interface CustomFooterProps {
  footerLogoIcon?: JSX.Element
}

export const CustomFooter: React.FC<CustomFooterProps> = ({ footerLogoIcon }) => {
  const renderLinkItem = useCallback(
    (item: TFooterLinkItem) => (
      <Link className="whitespace-nowrap text-sm font-normal text-text-color-100" href={item.url} key={item.title}>
        {item.title}
      </Link>
    ),
    [],
  )

  const renderLinks = useCallback(
    (links: TFooterLinkItem[]) => <div className="flex flex-col items-start gap-3">{links.map(renderLinkItem)}</div>,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const renderSocial = useCallback(
    (social: { title: string; url: string }, i: number) => (
      <Link key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="after:hidden">
        {getSocialIcon(social.title, "var(--text-color-30)")}
      </Link>
    ),
    [],
  )

  const renderSocials = useMemo(() => {
    const socials = FOOTER_ITEMS.socials

    return (
      <div className="flex gap-6 max-lg:flex-col max-lg:items-start max-lg:gap-[18px] lg:items-center">
        <div className="flex items-center gap-6">{socials?.slice(0, 4).map(renderSocial)}</div>
        <div className="flex items-center gap-6">{socials?.slice(4).map(renderSocial)}</div>
      </div>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <footer className="flex w-full items-center justify-center border-t border-divider-color-20 bg-footer-background-color px-[18px] max-md:mb-16 md:px-8 md-lg:px-12 lg:px-[84px]">
      <div className="flex w-full max-w-full flex-col items-start 3xl:w-[1328px]">
        <div className="flex w-full items-start gap-12 border-b border-divider-color-20 py-[72px] max-md-lg:flex-col md-lg:items-center md-lg:gap-16 lg:gap-[120px] 3xl:gap-[164px]">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-1">
              <div className="h-10 w-[110px]">{footerLogoIcon}</div>
              <p className="whitespace-nowrap text-sm font-normal leading-6 text-text-color-60">A better way of decentralised trading</p>
            </div>
            {renderSocials}
          </div>
          <div className="flex w-full items-start gap-3 max-2xl:justify-between max-md-lg:flex-col max-md-lg:justify-normal md-lg:items-center 2xl:gap-[120px] 3xl:gap-[164px]">
            {renderLinks(FOOTER_ITEMS.links.legal)}
            {renderLinks(FOOTER_ITEMS.links.articles)}
            {renderLinks(FOOTER_ITEMS.links.docs)}
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-2.5 py-6">
          <span className="text-xs font-medium text-text-color-50">© {new Date().getFullYear()} All rights reserved.</span>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-normal text-text-color-70">Powered by</span> <div className="h-5">{footerLogoIcon}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
