<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	import type { MenuItem } from '@prisma/client';
	type Props = {
		menuitem: MenuItem;
	};

	export let menuitem: Props['menuitem'];
</script>

<div class="w-full">
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-2xl flex flex-row gap-2"
				>{menuitem.name}
				{#if menuitem.additives}
					<div class="text-xs">
						{menuitem.additives}
					</div>
				{/if}
			</Card.Title>
			{#if menuitem.imageUrl}
				<img
					src={menuitem.imageUrl}
					alt={menuitem.name}
					class="rounded-md max-h-[100px] w-full object-cover"
				/>
			{/if}
			{#if menuitem.description}
				<Card.Description class="h-12 text-base">
					{menuitem.description}
				</Card.Description>
			{/if}
		</Card.Header>
		<Card.Content class="space-y-2">
			<div class="space-y-1">
				<Label for="price" class="font-bold text-xl"
					>{String(menuitem.price.toFixed(2)).replace('.', ',')}€</Label
				>
			</div>
		</Card.Content>
		{#if false}
			<Card.Footer class="justify-center">
				<Button class="text-xl p-6">Hinzufügen</Button>
			</Card.Footer>
		{/if}
	</Card.Root>
</div>
