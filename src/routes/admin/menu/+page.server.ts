import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms/server";
import { menuFormSchema, menuListSchema } from "./schema";
import { addMenu, removeMenu } from "./menu";
import db from "$lib/server/prisma/prisma";


export const load: PageServerLoad = async () => {
  const menu = await db.menu.findMany();
  return {
    menuForm: superValidate(menuFormSchema),
    menuList: superValidate(menuListSchema),
    menu
  };
};


export const actions: Actions = {
  addMenu: async (event) => {
    const addMenuForm = await superValidate(event, menuFormSchema);
    if (!addMenuForm.valid) {
      return fail(400, {
        form: addMenuForm
      });
    }
    const menu = await addMenu(addMenuForm.data);
    return message(addMenuForm, `"${menu.name}" wurde hinzugefügt!`);
  },
  removeMenu: async (event) => {
    const removeMenuForm = await superValidate(event, menuListSchema);
    if (!removeMenuForm.valid) {
      return fail(400, {
        form: removeMenuForm
      });
    }
    const menu = await removeMenu(removeMenuForm.data);
    return message(removeMenuForm, `"${menu.name}" wurde gelöscht!`);
  }
};
