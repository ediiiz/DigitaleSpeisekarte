<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from '$src/routes/admin/menu/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { MenuType } from '@prisma/client';
	export let form: SuperValidated<FormSchema>;
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Description>Dieser Name wird dann auf der Webseite angezeigt</Form.Description>
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
	<Form.Button>Submit</Form.Button>
</Form.Root>
