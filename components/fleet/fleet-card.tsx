import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

export type FleetItem = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  imageDefault: string
  imageHover: string
  subLabel: string
  link: string
}

type FleetCardProps = FleetItem & {
  variant?: "featured" | "compact"
  className?: string
}

export function FleetCard({
  title,
  description,
  icon: Icon,
  imageDefault,
  imageHover,
  subLabel,
  link,
  variant = "compact",
  className = "",
}: FleetCardProps) {
  const featured = variant === "featured"

  return (
    <Link
      href={link}
      className={[
        "group relative block overflow-hidden rounded-2xl bg-gray-900",
        featured ? "min-h-[420px] lg:min-h-full" : "min-h-[220px] sm:min-h-[240px]",
        className,
      ].join(" ")}
    >
      <Image
        src={imageDefault}
        alt={title}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
        className="object-cover brightness-90 saturate-90 scale-105 opacity-100 group-hover:scale-100 group-hover:opacity-0 transition-all duration-700"
      />
      <Image
        src={imageHover}
        alt={title}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
        className="object-cover brightness-90 saturate-90 scale-100 opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div
        className={[
          "absolute flex items-center justify-center rounded-full bg-primary text-white transition-all duration-300",
          "opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
          featured ? "top-5 right-5 h-9 w-9" : "top-4 right-4 h-8 w-8",
        ].join(" ")}
      >
        <ArrowUpRight className={featured ? "h-4 w-4" : "h-3.5 w-3.5"} />
      </div>

      <div className={featured ? "absolute inset-x-0 bottom-0 p-6 sm:p-7" : "absolute inset-x-0 bottom-0 p-4 sm:p-5"}>
        <div className="mb-2 inline-flex items-center gap-1.5 sm:mb-3">
          <Icon className="h-4 w-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
          <span className="text-xs sm:text-sm font-semibold text-white tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
            {subLabel}
          </span>
        </div>

        <h3
          className={[
            "font-black text-white leading-tight tracking-tight drop-shadow-lg",
            featured ? "text-3xl sm:text-4xl mb-2" : "text-xl sm:text-2xl mb-1",
          ].join(" ")}
        >
          {title}
        </h3>

        <p
          className={[
            "text-white/75 leading-relaxed font-light overflow-hidden transition-all duration-500",
            featured
              ? "text-sm sm:text-base max-h-0 group-hover:max-h-20"
              : "text-xs sm:text-sm max-h-0 group-hover:max-h-16",
          ].join(" ")}
        >
          {description}
        </p>

        <div
          className={[
            "h-px bg-primary transition-all duration-500 ease-out",
            featured ? "mt-5 w-8 group-hover:w-full" : "mt-3 w-6 group-hover:w-full",
          ].join(" ")}
        />
      </div>
    </Link>
  )
}
