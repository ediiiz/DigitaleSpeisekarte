<script lang="ts">
	import Info from '$lib/vars';
	import { slide } from 'svelte/transition';
	import Fire from '$lib/components/Fire.svelte';
	import type { Session } from 'lucia';
	type Props = {
		session: Session | null;
	};
	export let session: Props['session'];
	let showMenu = false;

	const links = [
		{
			name: 'Speisekarte',
			href: '/menu'
		},
		{
			name: 'Kontakt',
			href: '#footer'
		}
	];

	const adminLinks = [
		{
			name: 'Einstellungen',
			href: '/admin'
		}
	];
</script>

<header class="bg-gray-900 text-white">
	<div class="container mx-auto px-8 py-6 flex flex-row justify-between items-center">
		<div class="flex flex-row text-lg font-semibold">
			<div class="relative scale-[20%] md:scale-[25%] bottom-2 md:bottom-3">
				<Fire />
			</div>
			<a href="/" class="hover:text-gray-400 text-xl md:text-2xl relative left-1 md:left-2 top-1"
				>PASHA KÖFTE GRILL</a
			>
		</div>

		<!-- Navigation Menu for Desktop -->
		<nav class="hidden lg:flex space-x-4 text-lg xl:text-xl">
			{#each links as link}
				<a href={link.href} class="hover:text-gray-400">{link.name}</a>
			{/each}
			{#if session?.user.userType === 'ADMIN'}
				{#each adminLinks as adminLinks}
					<a href={adminLinks.href} class="hover:text-gray-400">{adminLinks.name}</a>
				{/each}
			{/if}
		</nav>

		<!-- Contact Info -->
		<div class="hidden lg:block pl-4">
			<p class="text-sm md:text-xl flex flex-row">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
					/></svg
				><a class="animate-pulse" href="tel:{Info.phone}">{Info.phone}</a>
			</p>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="lg:hidden focus:outline-none focus:border-white"
			on:click={() => (showMenu = !showMenu)}
		>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if showMenu}
		<div transition:slide={{ duration: 300 }} class="bg-gray-700 lg:hidden">
			<nav class="container mx-auto px-8 py-4 space-y-2 text-lg">
				{#each links as link}
					<a href={link.href} class="block hover:text-gray-400">{link.name}</a>
				{/each}
				{#if session?.user.userType === 'ADMIN'}
					{#each adminLinks as adminLinks}
						<a href={adminLinks.href} class="block hover:text-gray-400">{adminLinks.name}</a>
					{/each}
				{/if}
			</nav>
		</div>
	{/if}
</header>
