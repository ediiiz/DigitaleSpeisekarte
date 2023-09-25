import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import { menuItemFormSchema, menuItemListSchema } from "./schema";
import { removeMenuItem } from "./menuItem";
import db from "$lib/server/prisma/prisma";
import supabase from "$lib/server/supabase";

import { v4 as uuidv4 } from 'uuid';

async function handleFileUpload(file: File, name: string) {
  const { data, error } = await supabase.storage.from('produktbilder').upload(name, file);
  if (error) {
    console.error('Error uploading file:', error);

    return null;
  }
  const { data: publicData } = supabase
    .storage
    .from('produktbilder')
    .getPublicUrl(data.path)
  return publicData.publicUrl;
}

export const load: PageServerLoad = async () => {
  const menu = await db.menu.findMany({
    include: {
      menuItems: true
    }
  });
  return {
    menuItemForm: superValidate(menuItemFormSchema),
    menuList: superValidate(menuItemListSchema),
    menu,
  };
};

export const actions: Actions = {
  addMenuItem: async ({ request }) => {
    const formData = await request.formData();
    const validatedForm = await superValidate(formData, menuItemFormSchema);

    if (!validatedForm.valid) return setError(validatedForm, "Daten konnten nicht geprüft werden", { status: 400 });

    const file = formData.get('imageUri') as File;
    const imageUrl = file instanceof File ? await handleFileUpload(file, uuidv4()) : "";

    if (!imageUrl) {
      setError(validatedForm, "Bild fehlt oder konnte nicht hochgeladen werden!")
      return message(validatedForm, "");
    }

    const menuItem = await db.menuItem.create({
      data: { ...validatedForm.data, imageUrl },
    });

    return message(validatedForm, `${menuItem.name} hinzugefügt!`);
  },

  removeMenuItem: async (event) => {
    const validatedForm = await superValidate(event, menuItemListSchema);

    if (!validatedForm.valid) return fail(400, { form: validatedForm });

    const menuItem = await removeMenuItem(validatedForm.data);

    return message(validatedForm, `${menuItem.name} entfernt!`);
  },
};
