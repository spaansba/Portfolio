import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cant be longer than 100 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .max(320, "Email cant be longer than 320 characters")
    .email("Please enter a valid email address"),

  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject cant be longer than 200 characters"),
    
  message: z
    .string()
    .min(1, "Message is required")
    .max(3000, "Message cant be longer than 3000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
