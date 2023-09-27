<script lang="ts">
	import MessageAlert from '$lib/components/MessageAlert.svelte';
	import * as Form from '$lib/components/ui/form';
	import { menuListSchema } from '$src/routes/admin/menu/schema';
	import type { Menu } from '@prisma/client';
	import { Loader2 } from 'lucide-svelte';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<menuListSchema>;
	export let menu: Menu[];
</script>

<Form.Root
	method="POST"
	action="?/removeMenu"
	{form}
	schema={menuListSchema}
	let:config
	let:delayed
>
	<MessageAlert />
	<Form.Field {config} name="id">
		<Form.Item>
			<Form.Label>Menu</Form.Label>
			<Form.Select>
				<Form.SelectTrigger placeholder="Wähle einen Menu zum Löschen" />
				<Form.SelectContent class="max-h-[300px] overflow-y-auto">
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
		<Form.Button class="bg-red-700 hover:bg-red-600">Löschen</Form.Button>
		{#if delayed}
			<Loader2 class="animate-spin" />
		{/if}
	</div>
</Form.Root>
