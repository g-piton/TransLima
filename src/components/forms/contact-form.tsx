"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { FormField } from "./form-field";

const inputClass =
  "focus-ring w-full rounded-lg border-slate-300 bg-white text-translima-black shadow-sm";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    reset();
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <FormField label="Nome" error={errors.name?.message}>
        <input className={inputClass} {...register("name")} />
      </FormField>
      <FormField label="E-mail" error={errors.email?.message}>
        <input className={inputClass} type="email" {...register("email")} />
      </FormField>
      <FormField label="Telefone" error={errors.phone?.message}>
        <input className={inputClass} inputMode="tel" {...register("phone")} />
      </FormField>
      <FormField label="Assunto" error={errors.subject?.message}>
        <input className={inputClass} {...register("subject")} />
      </FormField>
      <FormField label="Mensagem" error={errors.message?.message}>
        <textarea className={inputClass} rows={5} {...register("message")} />
      </FormField>
      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-translima-green px-5 py-3 text-sm font-bold text-white transition hover:bg-translima-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send aria-hidden size={18} />
        {isSubmitting ? "Enviando" : "Enviar mensagem"}
      </button>
      {status === "success" && (
        <p className="text-sm font-semibold text-translima-dark">
          Mensagem enviada. Obrigado pelo contato.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-red-700">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
    </form>
  );
}
