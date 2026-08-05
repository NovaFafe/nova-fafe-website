import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

const base =
  "group inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200"

export const sectionButtonVariants = {
  primary: cn(
    base,
    "rounded-full bg-primary px-6 py-3.5 text-white shadow-lg shadow-primary/15 hover:bg-primary/90 active:scale-[0.98]"
  ),
  outline: cn(
    base,
    "rounded-full border border-primary/30 bg-background px-6 py-3.5 text-primary hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]"
  ),
  outlineDark: cn(
    base,
    "rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/25 active:scale-[0.98]"
  ),
  ghost: cn(base, "rounded-full px-4 py-2 text-primary hover:bg-primary/5"),
  facebook: cn(
    base,
    "rounded-full bg-[#1877F2] px-6 py-3.5 text-white shadow-lg shadow-[#1877F2]/25 hover:bg-[#166fe5] active:scale-[0.98]"
  ),
} as const

type SectionLinkProps = {
  href: string
  variant?: keyof typeof sectionButtonVariants
  className?: string
  children: ReactNode
  external?: boolean
  fullWidth?: boolean
  size?: "default" | "mobile"
}

export function SectionLink({
  href,
  variant = "primary",
  className,
  children,
  external,
  fullWidth = false,
  size = "default",
}: SectionLinkProps) {
  const classes = cn(
    sectionButtonVariants[variant],
    fullWidth && "w-full sm:w-auto",
    size === "mobile" && "min-h-11 py-4 text-base",
    className,
  )
  const isExternal =
    external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")

  if (isExternal) {
    return (
      <a
        href={href}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
