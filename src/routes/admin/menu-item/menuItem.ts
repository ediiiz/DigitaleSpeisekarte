import db from '$lib/server/prisma/prisma';
import { menuListSchema } from './schema';


async function removeMenuItem(rawFormData: unknown) {
  const formData = menuListSchema.parse(rawFormData);
  const menu = await db.menuItem.delete({
    where: {
      id: formData.id,
    },
  });

  return menu;
}

export { removeMenuItem };
