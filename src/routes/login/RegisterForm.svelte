<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { registerFormSchema } from './loginSchema';
	import MessageAlert from '$lib/components/MessageAlert.svelte';
	import { Loader2 } from 'lucide-svelte';
	export let form: SuperValidated<registerFormSchema>;
</script>

<Form.Root
	schema={registerFormSchema}
	{form}
	let:config
	let:delayed
	method="POST"
	action="?/register"
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
	<Form.Field {config} name="passwordRepeat">
		<Form.Item>
			<Form.Label>Password wiederholen</Form.Label>
			<Form.Input type="password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<div class="pt-8"></div>
	<div class="flex flex-row gap-2 items-center">
		<Form.Button>Registrieren</Form.Button>
		{#if delayed}
			<Loader2 class="animate-spin" />
		{/if}
	</div>
</Form.Root>
