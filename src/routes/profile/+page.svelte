<script lang="ts">
	import type { PageData } from './$types';
	import LogoutForm from './LogoutForm.svelte';
	export let data: PageData;
</script>

<div class="flex flex-col items-center bg-gray-100 min-h-screen py-10">
	<div class="flex flex-col p-6 bg-white rounded-xl shadow-md space-y-4 w-80">
		<h1 class="text-2xl font-semibold text-gray-700">Profile</h1>
		<p class="text-gray-500">
			<span class="font-medium text-gray-600">ID:</span>
			{data.userId}
		</p>
		<p class="text-gray-500">
			<span class="font-medium text-gray-600">Benutzername:</span>
			{data.username}
		</p>
		<p class="text-gray-500">
			<span class="font-medium text-gray-600">Typ:</span>
			{data.type}
		</p>
		<div class="pt-4 flex justify-end">
			<LogoutForm form={data.logoutFormSchema} />
		</div>
	</div>
</div>
