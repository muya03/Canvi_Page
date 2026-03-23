import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Mock API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // We simulate a successful submission
      console.log("Contact form submitted:", data);
      return { success: true, message: "Mensaje enviado correctamente" };
    },
  });
}
