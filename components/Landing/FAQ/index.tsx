import React, { useCallback, useMemo, useState } from "react"
import FaqData from "./faq.json"
import { FaqItem } from "./FaqItem"

export type TFaqData = {
  id: number
  title: string
  answer: string
}

export const LandingFAQ = () => {
  const [selectedFaqs, setSelectedFaq] = useState<TFaqData[]>([])

  const handleCollapseAll = useCallback(() => setSelectedFaq([]), [])

  const renderFaqItems = useMemo(
    () =>
      FaqData?.map((faqDataItem) => (
        <FaqItem
          key={faqDataItem.id + faqDataItem.title}
          faqItem={faqDataItem}
          selectedFaqs={selectedFaqs}
          setSelectedFaq={setSelectedFaq}
        />
      )),
    [selectedFaqs, FaqData, setSelectedFaq],
  )

  return (
    <div className="z-10 flex w-full max-w-full flex-col gap-4 lg:max-w-[calc(100%-424px)]">
      <h1 className="text-[22px] font-semibold text-text-color-100 max-lg:leading-[30px] lg:text-2xl">Frequently Asked Questions</h1>
      <div className="flex w-full flex-col items-start gap-3">
        <button
          onClick={handleCollapseAll}
          className="text-sm font-semibold leading-[22px] text-secondary-control-color-60 hover:text-secondary-control-color-90"
        >
          Collapse All
        </button>
        <div className="flex w-full flex-col gap-1">{renderFaqItems}</div>
      </div>
    </div>
  )
}
