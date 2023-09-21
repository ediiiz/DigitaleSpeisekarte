import db from '$lib/server/prisma/prisma';
import { menuFormSchema, menuListSchema } from './schema';

async function addMenu(rawFormData: unknown) {
  const formData = menuFormSchema.parse(rawFormData);

  const menu = await db.menu.create({
    data: {
      name: formData.name,
      menuType: formData.type,
    },
  });

  return menu;
}

async function removeMenu(rawFormData: unknown) {
  const formData = menuListSchema.parse(rawFormData);
  const menu = await db.menu.delete({
    where: {
      id: formData.id,
    },
  });

  return menu;
}

export { removeMenu, addMenu };
