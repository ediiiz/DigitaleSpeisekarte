import { z } from "$lib/zod";


export const loginFormSchema = z.object({
  username: z.string().min(8),
  password: z.string().min(16),
});

export const registerFormSchema = z.object({
  username: z.string().min(8),
  password: z.string().min(16),
  passwordRepeat: z.string().min(16),
});

export type registerFormSchema = typeof registerFormSchema
export type loginFormSchema = typeof loginFormSchema
