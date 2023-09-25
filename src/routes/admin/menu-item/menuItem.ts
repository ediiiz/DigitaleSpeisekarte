import db from '$lib/server/prisma/prisma';
import { menuItemListSchema } from './schema';


async function removeMenuItem(rawFormData: unknown) {
  const formData = menuItemListSchema.parse(rawFormData);
  const menu = await db.menuItem.delete({
    where: {
      id: formData.id,
    },
  });

  return menu;
}

export { removeMenuItem };
