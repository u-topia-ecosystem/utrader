import React, { FC } from "react"
import docs from "./index.json"

export const KnowledgeCenter: FC = () => {
  const renderItem = (item: (typeof docs)[0]) => {
    return (
      <a
        href={item.link}
        key={item.id}
        className="border-b border-divider-color-20 py-4 text-text-color-80 transition-all duration-300 ease-in-out first:pt-0 last:border-none last:pb-0 hover:text-text-color-100 hover:underline"
      >
        <p className="text-sm font-normal">{item.title}</p>
      </a>
    )
  }

  return (
    <section className="max-w-[400px] max-lg:hidden">
      <h3 className="mb-6 text-2xl font-medium text-text-color-100">Knowledge Center</h3>
      <div className="flex w-[400px] max-w-[400px] flex-col rounded border border-divider-color-20 bg-body-background-color px-6 py-6">
        {docs.map(renderItem)}
      </div>
    </section>
  )
}
