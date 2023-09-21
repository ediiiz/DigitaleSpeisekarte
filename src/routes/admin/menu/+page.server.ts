import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { menuFormSchema, menuListSchema } from "./schema";
import { addMenu, removeMenu } from "./menu";
import db from "$lib/server/prisma/prisma";


export const load: PageServerLoad = async () => {

  const menu = await db.menu.findMany();

  console.log(menu);


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
    return {
      menu,
      form: addMenuForm
    };
  },
  removeMenu: async (event) => {
    const removeMenuForm = await superValidate(event, menuListSchema);
    if (!removeMenuForm.valid) {
      return fail(400, {
        form: removeMenuForm
      });
    }
    const menu = await removeMenu(removeMenuForm.data);
    return {
      menu,
      form: removeMenuForm
    };
  }
};
