import type { PageServerLoad } from './$types';

import db from '$lib/server/prisma/prisma';

export const load = (async () => {

  const menu = await db.menu.findMany({
    include: {
      menuItems: {
      }
    },
  });


  return { menu };
}) satisfies PageServerLoad;
