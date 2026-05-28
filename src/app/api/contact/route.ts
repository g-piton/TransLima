import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Dados inválidos", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (process.env.DATABASE_URL) {
    const { prisma } = await import("@/lib/prisma");
    await prisma.contactMessage.create({ data: parsed.data });
  }

  return NextResponse.json({ message: "Mensagem recebida com sucesso" });
}
