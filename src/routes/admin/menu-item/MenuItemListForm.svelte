<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { menuItemListSchema } from './schema';
	import type { Menu, MenuItem } from '@prisma/client';
	import type { SuperValidated } from 'sveltekit-superforms';
	import MessageAlert from '$lib/components/MessageAlert.svelte';
	import { Loader2 } from 'lucide-svelte';
	export let form: SuperValidated<menuItemListSchema>;
	export let menu: Menu[] & { menuItems: MenuItem[] }[];
</script>

<Form.Root
	method="POST"
	action="?/removeMenuItem"
	{form}
	schema={menuItemListSchema}
	let:config
	let:delayed
>
	<MessageAlert />
	<Form.Field {config} name="id">
		<Form.Item>
			<Form.Label>Produkt</Form.Label>
			<Form.Select>
				<Form.SelectTrigger placeholder="Wähle eine Produkt zum Löschen" />
				<Form.SelectContent>
					{#each menu as menu}
						{#each menu.menuItems as menuItem}
							<Form.SelectItem value={menuItem.id}>{menuItem.name}</Form.SelectItem>
						{/each}
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<div class="pt-8"></div>
	<div class="flex flex-row gap-2 items-center">
		<Form.Button class="bg-red-700 hover:bg-red-600">Löschen</Form.Button>
		{#if delayed}
			<Loader2 class="animate-spin" />
		{/if}
	</div>
</Form.Root>
