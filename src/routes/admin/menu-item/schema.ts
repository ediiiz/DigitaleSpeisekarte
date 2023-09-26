import { z } from "zod";

import i18next from "i18next";
import { zodI18nMap } from "zod-i18n-map";
// Import your language translation files
import translation from "zod-i18n-map/locales/de/zod.json";
// lng and resources key depend on your locale.
i18next.init({
  lng: "de",
  resources: {
    de: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);


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
