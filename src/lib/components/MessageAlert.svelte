<script lang="ts">
	import { getForm } from 'formsnap';
	const { message } = getForm();
	import { AlertCircle } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
</script>

{#if $message}
<div>
  class:success={message.status === 'success'}
</div>
	<Alert.Root variant="default" class="border-green-400 bg-green-300">
		<AlertCircle class="text-green-700" />
		<div class="relative top-1 md:top-0.5">
			<Alert.Description class="text-base md:text-lg">{$message}</Alert.Description>
		</div>
	</Alert.Root>
{/if}
