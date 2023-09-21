<script lang="ts">
	import type { PageData } from './$types';
	import SettingsForm from '$lib/components/MenuForm.svelte';
	export let data: PageData;
	import * as Card from '$lib/components/ui/card';
</script>

<div class="max-w-sm">
	<Card.Root>
		<div class="p-6">
			<SettingsForm form={data.form} />
		</div>
	</Card.Root>
</div>
