<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { menuFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { MenuType } from '@prisma/client';
	import MessageAlert from '$lib/components/MessageAlert.svelte';
	import { Loader2 } from 'lucide-svelte';
	export let form: SuperValidated<menuFormSchema>;
</script>

<Form.Root method="POST" action="?/addMenu" {form} schema={menuFormSchema} let:config let:delayed>
	<MessageAlert />
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Description>Dieser Name wird im Menu angezeigt</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="type">
		<Form.Item>
			<Form.Label>Menutyp</Form.Label>
			<Form.Select>
				<Form.SelectTrigger placeholder="Wähle einen passenden Menutyp" />
				<Form.SelectContent>
					{#each Object.values(MenuType) as type}
						<Form.SelectItem value={type}>{type}</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<div class="pt-8"></div>
	<div class="flex flex-row gap-2 items-center">
		<Form.Button>Hinzufügen</Form.Button>
		{#if delayed}
			<Loader2 class="animate-spin" />
		{/if}
	</div>
</Form.Root>
