import { auth } from "$lib/server/lucia";
import { redirect, type Handle } from "@sveltejs/kit";
import db from "$lib/server/prisma/prisma";
import type { UserType } from "@prisma/client";
export const handle: Handle = async ({ event, resolve }) => {
  // we can pass `event` because we used the SvelteKit middleware
  event.locals.auth = auth.handleRequest(event);
  if (event.url.pathname.startsWith('/admin')) {
    const session = await event.locals.auth.validate();
    if (!session) {
      throw redirect(303, '/')
    }
    const user = await db.user.findUnique({
      where: {
        id: session.user.userId
      }
    })
    if (user?.type as UserType !== "ADMIN") {
      throw redirect(303, '/')
    }
  };
  return await resolve(event);
}
