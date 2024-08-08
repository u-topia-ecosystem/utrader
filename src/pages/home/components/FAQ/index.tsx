import React, { useState } from "react"
import FaqData from "./faq.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion"
import { cn } from "@/shared/utils/cn"

export const LandingFAQ = () => {
  const [activeValue, setActiveValue] = useState<string>(getValue(0))

  return (
    <div className="space-y-6">
      <h1 className="font-inter text-2xl font-bold text-text-color-100">Frequently Asked Questions</h1>

      <Accordion type="single" defaultValue={getValue(0)} onChange={(e) => console.log(e.target)} className="space-y-3">
        {FaqData?.map((data, idx) => {
          const value = getValue(idx)

          return (
            <AccordionItem
              value={value}
              key={idx}
              data-active={activeValue === value}
              className={cn("border-none bg-neutral-control-color-10 px-4 shadow-md data-[active='true']:bg-body-background-color")}
              onClick={() => setActiveValue(value)}
            >
              <AccordionTrigger className="text-left font-open-sans text-base font-bold text-text-color-100">{data.title}</AccordionTrigger>
              <AccordionContent className="font-open-sans text-sm font-normal text-text-color-100">{data.answer}</AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

const getValue = (idx: number) => `item-${idx}`