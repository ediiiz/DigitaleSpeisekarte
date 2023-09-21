import db from '$lib/server/prisma/prisma';
import { formSchema } from './schema';

async function addMenu(rawFormData: unknown) {
  const formData = formSchema.parse(rawFormData);

  const menu = await db.menu.create({
    data: {
      name: formData.name,
      menuType: formData.type,
    },
  });

  return menu;
}

export default addMenu;
