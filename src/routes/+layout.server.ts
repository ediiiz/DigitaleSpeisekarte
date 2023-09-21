import type { LayoutServerLoad } from './$types';

export const load = (async ({ url: { pathname } }) => {
  return { pathname };
}) satisfies LayoutServerLoad;
