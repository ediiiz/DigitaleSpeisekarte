<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { Menu } from '@prisma/client';
	import { menuItemFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<menuItemFormSchema>;
	export let menu: Menu[];
</script>

<Form.Root method="POST" action="?/addMenuItem" {form} schema={menuItemFormSchema} let:config>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Description>Der Name vom Speisekarteneintrag</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="description">
		<Form.Item>
			<Form.Label>Beschreibung</Form.Label>
			<Form.Input />
			<Form.Description>Die Beschreibung in der Speisekarte</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="price">
		<Form.Item>
			<Form.Label>Preis in €</Form.Label>
			<Form.Input type="number" step="0.25" />
			<Form.Description>Der Preis des Produkts (z.b 2.5)</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="isVegan">
		<Form.Item class="flex flex-col py-2">
			<Form.Label>Vegan?</Form.Label>
			<Form.Switch />
			<Form.Description>Ist das Produkt Vegan?</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="isGlutenFree">
		<Form.Item class="flex flex-col py-2">
			<Form.Label>Glutenfrei?</Form.Label>
			<Form.Switch />
			<Form.Description>Ist das Produkt Glutenfrei?</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="imageUri">
		<Form.Item>
			<Form.Label>Bild</Form.Label>
			<Form.Input type="file" accept=".jpg, .jpeg, .png, .webp" />
			<Form.Description>Bild für die Speisekarte</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="menuId">
		<Form.Item>
			<Form.Label>Kategorie</Form.Label>
			<Form.Select>
				<Form.SelectTrigger placeholder="Wähle eine passende Kategorie" />
				<Form.SelectContent>
					{#each menu as menu}
						<Form.SelectItem value={menu.id}>{menu.name}</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<div class="pt-8"></div>
	<Form.Button>Hinzufügen</Form.Button>
</Form.Root>
