import { createLucideIcon } from "lucide-react"

export const Motorbike = createLucideIcon("Motorbike", [
  ["path", { d: "m18 14-1-3", key: "exhaust" }],
  ["path", { d: "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81", key: "frame" }],
  ["path", { d: "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5", key: "body" }],
  ["circle", { cx: "19", cy: "17", r: "3", key: "wheel-rear" }],
  ["circle", { cx: "5", cy: "17", r: "3", key: "wheel-front" }],
])

/** Ciclomotor — perfil lateral tipo moped, não trotinete */
export const Ciclomotor = createLucideIcon("Ciclomotor", [
  ["path", { d: "M14 6.5h5", key: "handlebar" }],
  ["path", { d: "M16.5 6.5V10", key: "post" }],
  ["path", { d: "M8 17V13.5l1.5-2.5h5L16 13.5V17", key: "body" }],
  ["path", { d: "M9.5 13h4", key: "seat" }],
  ["circle", { cx: "7", cy: "17", r: "2", key: "wheel-front" }],
  ["circle", { cx: "17.5", cy: "17", r: "2", key: "wheel-rear" }],
])
