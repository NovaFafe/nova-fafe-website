import { Resend } from "resend"
import { z } from "zod"

const CATEGORIES: Record<string, string> = {
  B:     "Categoria B — Ligeiros",
  A:     "Categoria A / A1 / A2 — Motociclos",
  AM:    "Categoria AM — Ciclomotores",
  AVF:   "Recuperação de Pontos (AVF)",
  REV:   "Revalidação de Título",
  IMT:   "Apoio IMT",
  OTHER: "Outra / Dúvida geral",
}

const schema = z.object({
  name:     z.string().min(2),
  phone:    z.string().min(9),
  email:    z.string().email(),
  category: z.string().optional(),
  message:  z.string().optional(),
})

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const data = schema.parse(body)

    const categoryLabel = data.category ? CATEGORIES[data.category] ?? data.category : "Não indicada"

    await resend.emails.send({
      // Para produção com domínio verificado, muda para ex: "noreply@novafafe.pt"
      from: "NOVAFAFE Contacto <onboarding@resend.dev>",
      to:   ["novafafec@gmail.com"],
      replyTo: data.email,
      subject: `Novo contacto: ${categoryLabel} — ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #e63946; margin-bottom: 24px;">Novo contacto via website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Nome</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Telemóvel</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Categoria</td>
              <td style="padding: 8px 0;">${categoryLabel}</td>
            </tr>
            ${data.message ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Mensagem</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${data.message}</td>
            </tr>` : ""}
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Enviado via formulário em novafafe.pt</p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: "Dados inválidos." }, { status: 400 })
    }
    console.error("[contact]", err)
    return Response.json({ error: "Erro interno. Tenta novamente." }, { status: 500 })
  }
}
