<script lang="ts">
	import MenuItemListAlert from './MenuItemListAlert.svelte';
	import * as Form from '$lib/components/ui/form';
	import { menuListSchema } from '$src/routes/admin/menu/schema';
	import type { Menu, MenuItem } from '@prisma/client';
	import type { SuperValidated } from 'sveltekit-superforms';
	import MessageAlert from '$lib/components/MessageAlert.svelte';
	export let form: SuperValidated<menuListSchema>;
	export let menu: Menu[] & { menuItems: MenuItem[] }[];
</script>

<Form.Root method="POST" action="?/removeMenuItem" {form} schema={menuListSchema} let:config>
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
	<Form.Button class="bg-red-700 hover:bg-red-600">Löschen</Form.Button>
</Form.Root>
