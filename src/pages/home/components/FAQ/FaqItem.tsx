import React, { useCallback, useMemo } from "react"
import { TFaqData } from "."
import { ArrowDownIcon, CloseFaqIcon } from "./faqIcons"

interface IFaqItemProps {
  selectedFaqs: TFaqData[]
  faqItem: TFaqData
  setSelectedFaq: React.Dispatch<React.SetStateAction<TFaqData[]>>
}

export const FaqItem: React.FC<IFaqItemProps> = ({ selectedFaqs, faqItem, setSelectedFaq }) => {
  const handleSelectItem = useCallback(
    () =>
      setSelectedFaq((prev) => {
        const isInList = prev?.find((prevItem) => prevItem.id === faqItem.id)

        if (isInList) {
          return prev?.filter((prevItem) => prevItem.id !== faqItem.id)
        } else {
          const newSelected = [...prev, faqItem]

          return newSelected
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const isSelected = useMemo(
    () => selectedFaqs?.length && selectedFaqs?.find((selectedFaq) => selectedFaq?.id === faqItem?.id),
    [selectedFaqs, faqItem],
  )

  return isSelected ? (
    <div
      key={faqItem.title + faqItem.id}
      className="my-2 flex w-full items-start gap-4 rounded bg-body-background-color px-4 py-6 shadow-lg"
    >
      <button
        onClick={handleSelectItem}
        className="flex items-center justify-center rounded-full border border-neutral-control-color-50 bg-neutral-control-color-20 p-[9px] hover:bg-neutral-control-color-50 hover:shadow-sm active:bg-neutral-control-color-40"
      >
        <CloseFaqIcon className="flex h-4.5 w-4.5 flex-shrink-0" />
      </button>
      <div className="flex w-full flex-col items-start gap-1.5">
        <h3 className="text-base font-bold text-text-color-100">{faqItem.title}</h3>
        <p className="w-full text-sm font-normal text-text-color-100">{faqItem.answer}</p>
      </div>
    </div>
  ) : (
    <div
      key={faqItem.title + faqItem.id}
      className="flex w-full items-center gap-4 rounded bg-neutral-control-color-10 px-4 py-3 hover:bg-neutral-control-color-20"
    >
      <button
        onClick={handleSelectItem}
        className="flex items-center justify-center rounded-full border border-neutral-control-color-50 p-[9px] hover:bg-neutral-control-color-50 hover:shadow-sm active:bg-neutral-control-color-40"
      >
        <ArrowDownIcon className="flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center" />
      </button>
      <h3 className="text-base font-normal text-text-color-100">{faqItem.title}</h3>
    </div>
  )
}
