import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { prisma } from "@lucia-auth/adapter-prisma";
import db from "./prisma/prisma";

export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  adapter: prisma(db),
  csrfProtection: false,
  getUserAttributes: (data) => {
    return {
      username: data.username,
      userType: data.type,
    };
  }
});

export type Auth = typeof auth;
