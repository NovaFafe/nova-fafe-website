export const CONTACT_CATEGORY_VALUES = [
  "B",
  "A",
  "AM",
  "PES",
  "TRA",
  "AVF",
  "REV",
  "TROCA",
  "IMT",
  "OTHER",
] as const

export type ContactCategoryValue = (typeof CONTACT_CATEGORY_VALUES)[number]

export const CONTACT_CATEGORY_LABELS: Record<ContactCategoryValue, string> = {
  B: "Categoria B — Ligeiros",
  A: "Categoria A / A1 / A2 — Motociclos",
  AM: "Categoria AM — Ciclomotores",
  PES: "Pesados / TCC / CAM",
  TRA: "Tratores Agrícolas",
  AVF: "Recuperação de Pontos (AVF)",
  REV: "Revalidação de Carta",
  TROCA: "Troca de Carta Estrangeira",
  IMT: "Apoio IMT",
  OTHER: "Outra / Dúvida geral",
}

export const SERVICE_CONTACT_CATEGORY: Record<string, ContactCategoryValue> = {
  "categoria-b": "B",
  "categoria-a": "A",
  "categoria-am": "AM",
  "pesados-tcc-cam": "PES",
  tratores: "TRA",
  "recuperacao-pontos": "AVF",
  revalidacao: "REV",
  "troca-carta": "TROCA",
  "apoio-imt": "IMT",
}

export function isContactCategory(value: string | null): value is ContactCategoryValue {
  return value !== null && CONTACT_CATEGORY_VALUES.includes(value as ContactCategoryValue)
}

export function contactHref(category: ContactCategoryValue, serviceTitle?: string) {
  const params = new URLSearchParams({ categoria: category })
  if (serviceTitle) {
    params.set("mensagem", `Tenho interesse em ${serviceTitle}.`)
  }
  return `/contacto?${params.toString()}#formulario`
}
