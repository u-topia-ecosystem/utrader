import React, { FC } from "react"
import { TStrapiNewsType } from "./GetLatestNews"

interface LatestNewsProps {
  news?: TStrapiNewsType[]
}

const LatestNews = ({}: LatestNewsProps) => {
  const news = getNews()

  const renderNews = (item: TStrapiNewsType) => {
    return (
      <div key={item.id} className="grid gap-2 rounded-lg border border-divider-color-10 bg-body-background-color p-[18px]">
        <h4 className="font-open-sans text-base font-semibold text-text-color-100">{item.title}</h4>

        <p className="mb-4 text-sm font-normal text-text-color-80">{item.description}</p>

        <a
          href={"#"}
          className="tex-sm group flex items-center font-open-sans font-semibold text-secondary-control-color-80 duration-200 hover:text-secondary-control-color-90"
        >
          Read more
          <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              className="fill-current group-hover:fill-secondary-control-color-90"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44771 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z"
              fill="var(--secondary-control-color-80)"
            />
          </svg>
        </a>
      </div>
    )
  }

  return (
    <section>
      <h3 className="mb-6 text-2xl font-medium text-text-color-100">Latest News</h3>
      <div className="grid gap-6">{news.map(renderNews)}</div>
    </section>
  )
}

const getNews = () => {
  const news: TStrapiNewsType[] = [
    {
      id: 1,
      slug: "slug",
      title: "Uniswap (UNI)",
      createdAt: "2022-02-22T09:00:00.000Z",
      description: "The Automated Liquidity Protocol Utilized for Token Swaps On-Chain.",
      target: "_blank",
    },
    {
      id: 1,
      slug: "slug",
      title: "THORChain (RUNE)",
      createdAt: "2022-02-22T09:00:00.000Z",
      description: "The Cross-Chain DEX That Can Automatically Adjust Trading Fees for Cost-Efficiency.",
      target: "_blank",
    },
    {
      id: 1,
      slug: "slug",
      title: "Bitcoin (BTC)",
      createdAt: "2022-02-22T09:00:00.000Z",
      description: "The Cryptocurrency That Shaped The Entire Crypto Industry.",
      target: "_blank",
    },
  ]

  return news
}

export default LatestNews
