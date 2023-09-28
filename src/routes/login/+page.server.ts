import type { PageServerLoad } from './$types';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { loginFormSchema, registerFormSchema } from './loginSchema';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import { createUser, loginUser } from './loginLogic';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) throw redirect(302, "/");
  return {
    loginFormSchema: superValidate(loginFormSchema),
    registerFormSchema: superValidate(registerFormSchema),
  };
};


export const actions: Actions = {
  login: async ({ request, locals }) => {
    const formData = await request.formData()
    const loginForm = await superValidate(formData, loginFormSchema);
    if (!loginForm.valid) {
      return fail(400, {
        form: loginForm
      });
    }

    const { status, message: eventMessage, session } = await loginUser(loginForm.data.username, loginForm.data.password);

    switch (status) {
      case 401:
        setError(loginForm, eventMessage, { status: 401 })
        return message(loginForm, "")
      case 500:
        setError(loginForm, eventMessage, { status: 500 })
        return message(loginForm, "")
      case 200:
        session ? locals.auth.setSession(session) : null;
        throw redirect(302, "/");
    }
  },
  register: async ({ request, locals }) => {
    const formData = await request.formData();
    const registerForm = await superValidate(formData, registerFormSchema);

    if (!registerForm.valid) {
      return fail(400, {
        form: registerForm
      });
    }

    if (registerForm.data.password !== registerForm.data.passwordRepeat) {
      setError(registerForm, "Passwörter stimmen nicht überein!")
      return message(registerForm, "")
    }

    const { status, message: eventMessage, session } = await createUser(registerForm.data.username, registerForm.data.password);

    switch (status) {
      case 409:
        setError(registerForm, eventMessage)
        return message(registerForm, "")
      case 500:
        setError(registerForm, eventMessage)
        return message(registerForm, "")
      case 200:
        session ? locals.auth.setSession(session) : null;
        throw redirect(302, "/");
    }
  }
}
