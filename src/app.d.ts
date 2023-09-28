// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />

type UserType = "ADMIN" | "EMPLOYEE" | "CUSTOMER";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			username: string;
			type: UserType;
		};
		type DatabaseSessionAttributes = {};
	}
}

export { };
