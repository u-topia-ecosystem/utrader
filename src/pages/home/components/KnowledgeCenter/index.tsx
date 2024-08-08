import React, { FC } from "react"
import docs from "./index.json"

export const KnowledgeCenter: FC = () => {
  const renderItem = (item: (typeof docs)[0]) => {
    return (
      <a
        href={item.link}
        key={item.id}
        className="border-b border-divider-color-20 py-4 text-text-color-80 transition-all duration-300 ease-in-out last:border-none hover:text-text-color-100 hover:underline"
      >
        <p className="text-sm font-semibold">{item.title}</p>
      </a>
    )
  }

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-medium text-text-color-100">Knowledge Center</h3>

      <div className="flex flex-col rounded border border-divider-color-20 bg-body-background-color px-4">{docs.map(renderItem)}</div>
    </section>
  )
}
