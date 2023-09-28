<script lang="ts">
	import LoginForm from './LoginForm.svelte';
	import type { PageData } from './$types';
	import RegisterForm from './RegisterForm.svelte';

	export let data: PageData;
</script>

<div class="flex justify-center items-center">
	<div class="w-full p-4 md:w-2/3 lg:w-1/3">
		<LoginForm form={data.loginFormSchema} />
		<RegisterForm form={data.registerFormSchema} />
	</div>
</div>
