import { z } from "$lib/zod";
const MenuType = ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACKS', 'DRINKS'] as const;


export const menuFormSchema = z.object({
  name: z.string().min(2).max(50),
  type: z.enum(MenuType),
});

export const menuListSchema = z.object({
  id: z.string().uuid(),
})


export type menuListSchema = typeof menuListSchema;
export type menuFormSchema = typeof menuFormSchema;
