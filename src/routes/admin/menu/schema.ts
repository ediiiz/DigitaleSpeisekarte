import { z } from "zod";
import { MenuType } from "@prisma/client";


export const menuFormSchema = z.object({
  name: z.string().min(2).max(50),
  type: z.nativeEnum(MenuType),
});

export const menuListSchema = z.object({
  id: z.string().uuid(),
})


export type menuListSchema = typeof menuListSchema;
export type menuFormSchema = typeof menuFormSchema;
