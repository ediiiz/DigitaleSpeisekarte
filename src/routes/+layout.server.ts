import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ locals, url: { pathname } }) => {
  const session = await locals.auth.validate()
  return { session, pathname };
});
