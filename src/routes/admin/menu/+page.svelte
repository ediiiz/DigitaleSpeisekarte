<script lang="ts">
	import type { PageData } from './$types';
	import MenuForm from './MenuForm.svelte';
	import MenuListForm from './MenuListForm.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let data: PageData;
</script>

<Tabs.Root value="add" class="w-full md:max-w-xl">
	<Tabs.List class="grid w-full grid-cols-2">
		<Tabs.Trigger value="add">Hinzufügen</Tabs.Trigger>
		<Tabs.Trigger class="" value="delete">Löschen</Tabs.Trigger>
	</Tabs.List>
	<Separator class="mt-4" />
	<Tabs.Content value="add">
		<MenuForm form={data.menuForm} />
	</Tabs.Content>
	<Tabs.Content value="delete">
		<MenuListForm menu={data.menu} form={data.menuList} />
	</Tabs.Content>
</Tabs.Root>
