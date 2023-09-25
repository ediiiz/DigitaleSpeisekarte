<script lang="ts">
	import { getForm } from 'formsnap';
	const { message, errors } = getForm();
	import { AlertCircle } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
</script>

{#if $errors._errors}
	<Alert.Root variant="default" class="border-red-400 bg-red-300">
		<AlertCircle />
		<div class="relative top-1 md:top-0.5">
			<Alert.Description class="text-base md:text-lg">{$errors._errors}</Alert.Description>
		</div>
	</Alert.Root>
{/if}

{#if $message}
	<Alert.Root variant="default" class="border-green-400 bg-green-300">
		<AlertCircle />
		<div class="relative top-1 md:top-0.5">
			<Alert.Description class="text-base md:text-lg">{$message}</Alert.Description>
		</div>
	</Alert.Root>
{/if}
