import { z } from "zod";
import { MenuType } from "@prisma/client";


export const formSchema = z.object({
  name: z.string().min(2).max(50),
  type: z.nativeEnum(MenuType),
});
export type FormSchema = typeof formSchema;
