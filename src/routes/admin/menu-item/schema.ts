import { z } from "$lib/zod";

export const menuItemFormSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.coerce.number().min(0),
  description: z.string().min(2).max(100),
  isVegan: z.boolean(),
  isGlutenFree: z.boolean(),
  menuId: z.string().uuid(),
  additives: z.string().max(50).optional(),
  imageUri: z.string().url().optional(),
});

export const menuItemListSchema = z.object({
  id: z.string().uuid(),
})


export type menuItemListSchema = typeof menuItemListSchema;
export type menuItemFormSchema = typeof menuItemFormSchema;
