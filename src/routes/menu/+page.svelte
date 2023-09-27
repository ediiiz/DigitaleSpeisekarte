<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Additives from '$lib/components/Additives.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Label } from '$lib/components/ui/label';
	import type { PageData } from './$types';
	import MenuItem from '$lib/components/MenuItem.svelte';

	export let data: PageData;
</script>

<div class="w-full">
	<Tabs.Root value={data.menu[0].name} class="w-full">
		<Tabs.List class="grid grid-flow-col justify-start h-16 overflow-x-auto lg:justify-center">
			{#each data.menu as menu}
				<Tabs.Trigger class="text-xl" value={menu.name}>{menu.name}</Tabs.Trigger>
			{/each}
		</Tabs.List>
		{#each data.menu as menu}
			<Tabs.Content class="" value={menu.name}>
				<div class="flex flex-wrap gap-0 sm:gap-4 justify-center">
					{#each menu.menuItems as items}
						<div class="w-full p-2 sm:p-0 sm:max-w-xl lg:max-w-2xl">
							<MenuItem menuitem={items} />
						</div>
					{/each}
				</div>
			</Tabs.Content>
		{/each}
	</Tabs.Root>

	<div class="text-base py-8 text-center">
		<AlertDialog.Root>
			<AlertDialog.Trigger class="border-1 bg-black text-white rounded-md p-2"
				>Liste der Inhaltsstoffe und Allergene</AlertDialog.Trigger
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
	</div>
	<div class="text-xs p-4 text-center">
		<div>Hinweis: Die verwendeten Fotos/Abbildungen können vom Original abweichen.</div>
	</div>
</div>
