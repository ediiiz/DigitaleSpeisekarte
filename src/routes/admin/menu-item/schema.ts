import { z } from "zod";


export const menuItemFormSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.coerce.number().min(0),
  description: z.string().min(2).max(50),
  isVegan: z.boolean(),
  isGlutenFree: z.boolean(),
  imageUri: z.string().url().optional(),
  menuId: z.string().uuid()
});

export const menuListSchema = z.object({
  id: z.string().uuid(),
})


export type menuListSchema = typeof menuListSchema;
export type menuItemFormSchema = typeof menuItemFormSchema;
