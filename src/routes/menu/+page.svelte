<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import type { PageData } from './$types';
	import MenuItem from '$lib/components/MenuItem.svelte';

	export let data: PageData;
</script>

<div class="w-full">
	<Tabs.Root value="account" class="w-full">
		<Tabs.List class="grid grid-flow-col justify-start h-16 lg:justify-center overflow-x-auto">
			{#each data.menu as menu}
				<Tabs.Trigger class="text-xl" value={menu.name}>{menu.name}</Tabs.Trigger>
			{/each}
		</Tabs.List>
		{#each data.menu as menu}
			<Tabs.Content class="" value={menu.name}>
				<div class="flex justify-center">
					{#each menu.menuItems as items}
						<div class="w-full px-4 sm:max-w-xl lg:max-w-2xl">
							<MenuItem menuitem={items} />
						</div>
					{/each}
				</div>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>
