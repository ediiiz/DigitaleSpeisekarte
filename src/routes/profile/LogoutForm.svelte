<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { logoutSchema } from './logoutSchema';
	import { Loader2 } from 'lucide-svelte';
	export let form: SuperValidated<logoutSchema>;
</script>

<Form.Root schema={logoutSchema} {form} let:delayed method="POST" action="?/logout">
	<div class="flex flex-row gap-2 items-center">
		<Form.Button>Abmelden</Form.Button>
		{#if delayed}
			<Loader2 class="animate-spin" />
		{/if}
	</div>
</Form.Root>
