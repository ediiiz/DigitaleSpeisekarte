import { z } from "$lib/zod";

export const menuItemFormSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.coerce.number().min(0),
  description: z.string().min(2).max(100),
  isVegan: z.boolean(),
  isGlutenFree: z.boolean(),
  menuId: z.string().uuid(),
  imageUri: z.string().url(),
});

export const menuItemListSchema = z.object({
  id: z.string().uuid(),
})


export type menuItemListSchema = typeof menuItemListSchema;
export type menuItemFormSchema = typeof menuItemFormSchema;
