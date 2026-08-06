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
        featured ? "min-h-[360px] lg:min-h-full" : "min-h-[240px]",
        className,
      ].join(" ")}
    >
      <Image
        src={imageDefault}
        alt={title}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 85vw, 25vw"}
        className="object-cover saturate-90 scale-105 opacity-100 transition-all duration-700 group-hover:scale-100 group-hover:opacity-0"
      />
      <Image
        src={imageHover}
        alt=""
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 85vw, 25vw"}
        className="object-cover saturate-90 scale-100 opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/15" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[68%] bg-gradient-to-t from-black/95 via-black/70 to-transparent" />

      {/* Arrow — always visible on touch, hover-enhanced on desktop */}
      <div
        className={[
          "absolute z-10 flex items-center justify-center rounded-full bg-primary text-white transition-all duration-300",
          "opacity-100 translate-y-0 lg:opacity-0 lg:-translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0",
          featured ? "top-5 right-5 h-9 w-9" : "top-3.5 right-3.5 h-8 w-8",
        ].join(" ")}
      >
        <ArrowUpRight className={featured ? "h-4 w-4" : "h-3.5 w-3.5"} />
      </div>

      <div className={featured ? "absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7" : "absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5"}>
        <div className="mb-1.5 inline-flex items-center gap-1.5 sm:mb-2.5">
          <Icon className="h-3.5 w-3.5 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] sm:h-4 sm:w-4" />
          <span className="text-[11px] font-semibold tracking-wide text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] sm:text-sm">
            {subLabel}
          </span>
        </div>

        <h3
          className={[
            "font-black leading-tight tracking-tight text-white drop-shadow-lg",
            featured ? "mb-2 text-3xl sm:text-4xl" : "mb-1 text-xl sm:text-2xl",
          ].join(" ")}
        >
          {title}
        </h3>

        <p
          className={[
            "font-light leading-relaxed text-white/75",
            featured
              ? "line-clamp-2 text-sm sm:line-clamp-none sm:max-h-0 sm:overflow-hidden sm:text-base sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:max-h-20 sm:group-hover:opacity-100"
              : "line-clamp-2 text-xs sm:line-clamp-none sm:max-h-0 sm:overflow-hidden sm:text-sm sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:max-h-16 sm:group-hover:opacity-100",
          ].join(" ")}
        >
          {description}
        </p>

        <div
          className={[
            "h-px bg-primary transition-all duration-500 ease-out",
            featured ? "mt-4 w-8 group-hover:w-full sm:mt-5" : "mt-3 w-6 group-hover:w-full",
          ].join(" ")}
        />
      </div>
    </Link>
  )
}
