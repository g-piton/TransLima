import { z } from "zod";

const requiredText = (field: string, min = 2) =>
  z.string().trim().min(min, `${field} é obrigatório`);

export const leadSchema = z.object({
  firstName: requiredText("Nome"),
  lastName: requiredText("Sobrenome"),
  email: z.string().trim().email("Informe um e-mail válido"),
  phone: requiredText("Telefone/WhatsApp", 8),
  serviceType: requiredText("Tipo de serviço"),
  origin: requiredText("Origem"),
  destination: requiredText("Destino"),
  desiredDate: z.string().min(1, "Data desejada é obrigatória"),
  message: z.string().trim().max(1000, "Mensagem muito longa").optional()
});

export const contactSchema = z.object({
  name: requiredText("Nome"),
  email: z.string().trim().email("Informe um e-mail válido"),
  phone: z.string().trim().optional(),
  subject: requiredText("Assunto"),
  message: requiredText("Mensagem", 10).max(1200, "Mensagem muito longa")
});

export type LeadFormData = z.infer<typeof leadSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
