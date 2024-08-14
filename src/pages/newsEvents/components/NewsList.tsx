import { Badge } from "@/shared/components/ui/badge"
import Image from "next/image"

const NewsList = () => {
  const list: NewsCardProps[] = [
    {
      tag: "all",
      date: "2021-09-01",
      image: "/images/news-event-sample.webp",
      title: "New Listing: MAXUSDT Perpetual Contract, with up to 25x leverage",
      description: "Our CEO discusses crypto regulation, institutional adoption, The Journey Man YouTube show.",
    },
    {
      tag: "all",
      date: "2021-09-01",
      image: "/images/news-event-sample.webp",
      title: "New Listing: MAXUSDT Perpetual Contract, with up to 25x leverage",
      description: "Our CEO discusses crypto regulation, institutional adoption, The Journey Man YouTube show.",
    },
    {
      tag: "all",
      date: "2021-09-01",
      image: "/images/news-event-sample.webp",
      title: "New Listing: MAXUSDT Perpetual Contract, with up to 25x leverage",
      description: "Our CEO discusses crypto regulation, institutional adoption, The Journey Man YouTube show.",
    },
    {
      tag: "all",
      date: "2021-09-01",
      image: "/images/news-event-sample.webp",
      title: "New Listing: MAXUSDT Perpetual Contract, with up to 25x leverage",
      description: "Our CEO discusses crypto regulation, institutional adoption, The Journey Man YouTube show.",
    },
    {
      tag: "all",
      date: "2021-09-01",
      image: "/images/news-event-sample.webp",
      title: "New Listing: MAXUSDT Perpetual Contract, with up to 25x leverage",
      description: "Our CEO discusses crypto regulation, institutional adoption, The Journey Man YouTube show.",
    },
  ]

  return (
    <div className="space-y-7">
      {list.map((item, idx) => (
        <NewsCard {...item} key={idx} />
      ))}
    </div>
  )
}

type NewsCardProps = {
  title: string
  description: string
  date: string
  image: string
  tag: string
}

const NewsCard = ({ image, date, description, tag, title }: NewsCardProps) => {
  return (
    <div className="flex max-w-[742px] gap-6">
      <Image src={image} alt="" width={317} height={200} className="rounded-xl" />

      <div className="space-y-3">
        <Badge variant="secondary" className="uppercase">
          {tag}
        </Badge>

        <p className="font-open-sans text-base font-semibold text-text-color-100">{date}</p>

        <h3 className="font-open-sans text-xl font-bold text-text-color-100">{title}</h3>

        <p className="font-open-sans text-base font-semibold text-text-color-100">{description}</p>
      </div>
    </div>
  )
}

export default NewsList
