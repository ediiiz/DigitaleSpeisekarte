<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { Menu } from '@prisma/client';
	type Props = {
		menu: Menu[];
	};
	import { menuItemFormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import MessageAlert from '$lib/components/MessageAlert.svelte';
	import { Loader2 } from 'lucide-svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import Additives from '$lib/components/Additives.svelte';
	export let form: SuperValidated<menuItemFormSchema>;
	export let menu: Props['menu'];
</script>

<Form.Root
	method="POST"
	action="?/addMenuItem"
	{form}
	schema={menuItemFormSchema}
	let:config
	let:delayed
>
	<MessageAlert />
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
	<Form.Field {config} name="additives">
		<Form.Item class="flex flex-col py-2">
			<Form.Label>Zusatzstoffe</Form.Label>
			<Form.Input />
			<AlertDialog.Root>
				<AlertDialog.Trigger class="border-1 bg-black text-white rounded-md p-2"
					>Liste der Zusatzstoffe</AlertDialog.Trigger
				>
				<AlertDialog.Content>
					<AlertDialog.Header>
						<AlertDialog.Description class="max-h-[400px] overflow-y-auto">
							<Additives />
						</AlertDialog.Description>
					</AlertDialog.Header>
					<AlertDialog.Footer>
						<AlertDialog.Cancel>Schließen</AlertDialog.Cancel>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog.Root>
			<Form.Description>Welche Zusatzstoffe hat das Produkt? <br /> z.B A,C,G</Form.Description>
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
	<div class="flex flex-row gap-2 items-center">
		<Form.Button>Hinzufügen</Form.Button>
		{#if delayed}
			<Loader2 class="animate-spin" />
		{/if}
	</div>
</Form.Root>
