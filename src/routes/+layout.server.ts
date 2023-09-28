import db from '$lib/server/prisma/prisma';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ locals, url: { pathname } }) => {
  const session = await locals.auth.validate()
  let userStore = undefined;
  if (session) {
    const user = await db.user.findUnique({
      where: {
        id: session.user.userId
      }
    })
    userStore = user;
  }
  if (userStore) {
    return { session, pathname, userStore };
  }

  return { session, pathname };
}) satisfies LayoutServerLoad;
