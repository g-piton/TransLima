import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Dados inválidos", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (process.env.DATABASE_URL) {
    const { prisma } = await import("@/lib/prisma");
    await prisma.lead.create({
      data: {
        ...parsed.data,
        desiredDate: new Date(parsed.data.desiredDate)
      }
    });
  }

  return NextResponse.json({ message: "Orçamento recebido com sucesso" });
}
