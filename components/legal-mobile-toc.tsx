"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type TocItem = { id: string; title: string }

export function LegalMobileToc({ items, contactHref = "#contacto" }: { items: TocItem[]; contactHref?: string }) {
  const [open, setOpen] = useState(false)
  const allItems = [...items, { id: contactHref.replace("#", ""), title: "Contacto" }]

  return (
    <nav className="sticky top-[3.5rem] z-30 mb-6 lg:hidden" aria-label="Índice">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full min-h-11 items-center justify-between rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-sm"
      >
        <span>Índice do documento</span>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ol className="mt-2 space-y-1 rounded-2xl border border-border/70 bg-background p-3 shadow-sm">
          {allItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                <span className="mr-2 text-xs font-bold text-primary/60">{index + 1}.</span>
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  )
}
