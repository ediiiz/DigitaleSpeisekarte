import { auth } from "$lib/server/lucia";
import { LuciaError } from "lucia";

export async function createUser(username: string, password: string) {
  try {
    const user = await auth.createUser({
      key: {
        providerId: "username",
        providerUserId: username.toLowerCase(),
        password,
      },
      attributes: {
        username,
        type: "CUSTOMER",
      }
    });

    const session = await auth.createSession({
      userId: user.userId,
      attributes: {}
    });

    return { status: 200, session, message: "User created" }

  } catch (error) {
    console.log(error);

    if (
      error instanceof LuciaError &&
      error.message === "AUTH_DUPLICATE_KEY_ID"
    ) {
      return { status: 409, message: "Username already exists" };
    }
    return { status: 500, message: "Internal server error" };
  }
}

export async function loginUser(username: string, password: string) {
  try {
    const key = await auth.useKey("username", username.toLowerCase(), password);
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {}
    });
    return { status: 200, session, message: "Logged in" }
  } catch (error) {
    console.log(error);

    if (
      error instanceof LuciaError &&
      (error.message === "AUTH_INVALID_KEY_ID" ||
        error.message === "AUTH_INVALID_PASSWORD")
    ) {
      return { status: 401, message: "Invalid username or password" };
    }
    return { status: 500, message: "Internal server error" };
  }
}

