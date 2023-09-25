<script lang="ts">
	import type { PageData } from './$types';
	import MenuForm from './MenuForm.svelte';
	import * as Card from '$lib/components/ui/card';
	import MenuListForm from './MenuListForm.svelte';

	export let data: PageData;
</script>

<div class="p-4 flex flex-col gap-4">
	<div class="text-2xl font-bold text-center">Hinzufügen</div>
	<Card.Root>
		<div class="p-6">
			<MenuForm form={data.menuForm} />
		</div>
	</Card.Root>

	<div class="text-2xl font-bold text-center">Löschen</div>
	<Card.Root class="flex flex-col p-4 gap-2">
		<div class="justify-center p-4 gap-2">
			<MenuListForm menu={data.menu} form={data.menuList} />
		</div>
	</Card.Root>
</div>
