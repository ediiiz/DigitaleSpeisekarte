<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { loginFormSchema } from './loginSchema';
	import MessageAlert from '$lib/components/MessageAlert.svelte';
	import { Loader2 } from 'lucide-svelte';
	export let form: SuperValidated<loginFormSchema>;
</script>

<Form.Root
	schema={loginFormSchema}
	{form}
	let:config
	let:delayed
	method="POST"
	action="?/login"
	class="w-full"
>
	<MessageAlert />
	<Form.Field {config} name="username">
		<Form.Item>
			<Form.Label>Benutzername</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label>Password</Form.Label>
			<Form.Input type="password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<div class="pt-8"></div>
	<div class="flex flex-row gap-2 items-center">
		<Form.Button>Anmelden</Form.Button>
		{#if delayed}
			<Loader2 class="animate-spin" />
		{/if}
	</div>
</Form.Root>
