import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { menuItemFormSchema, menuListSchema } from "./schema";
import { removeMenuItem } from "./menuItem";
import db from "$lib/server/prisma/prisma";
import supabase from "$lib/server/supabase";

import { v4 as uuidv4 } from 'uuid';

async function handleFileUpload(file: File, name: string) {
  const { data, error } = await supabase.storage.from('produktbilder').upload(name, file);
  if (error) {
    console.error('Error uploading file:', error);
    return "";
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
    menuList: superValidate(menuListSchema),
    menu,
  };
};

export const actions: Actions = {
  addMenuItem: async ({ request }) => {
    const formData = await request.formData();
    const validatedForm = await superValidate(formData, menuItemFormSchema);

    if (!validatedForm.valid) return fail(400, { form: validatedForm });

    const file = formData.get('imageUri') as File;
    const imageUrl = file instanceof File ? await handleFileUpload(file, uuidv4()) : "";

    if (!imageUrl) return fail(400, { form: validatedForm });

    const menuItem = await db.menuItem.create({
      data: { ...validatedForm.data, imageUrl }, // Here imageUrl is the Supabase URL
    });

    return { menuItem, form: validatedForm };
  },

  removeMenuItem: async (event) => {
    const validatedForm = await superValidate(event, menuListSchema);

    if (!validatedForm.valid) return fail(400, { form: validatedForm });

    const menu = await removeMenuItem(validatedForm.data);
    return { menu, form: validatedForm };
  },
};
