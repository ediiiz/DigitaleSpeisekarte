<script>
	import Info from '$lib/vars';
	import { slide } from 'svelte/transition';
	let showMenu = false;
</script>

<header class="bg-gray-800 text-white">
	<div class="container mx-auto px-8 py-6 flex justify-between items-center">
		<!-- Logo -->
		<div class="text-lg font-semibold">
			<a href="/" class="hover:text-gray-400 text-2xl">Pasha Grill Köfte</a>
		</div>

		<!-- Navigation Menu for Desktop -->
		<nav class="hidden md:flex space-x-4">
			<a href="/" class="hover:text-gray-400">Home</a>
			<a href="/menu" class="hover:text-gray-400">Menu</a>
			<a href="/" class="hover:text-gray-400">About</a>
			<a href="/" class="hover:text-gray-400">Contact</a>
		</nav>

		<!-- Contact Info -->
		<div class="hidden md:block">
			<p class="text-sm">Ruf uns an: <a href="tel:{Info.phone}">{Info.phone}</a></p>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden focus:outline-none focus:border-white"
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
		<div transition:slide={{ duration: 300 }} class="bg-gray-700 md:hidden">
			<nav class="container mx-auto px-8 py-4 space-y-2">
				<a href="/" class="block hover:text-gray-400">Home</a>
				<a href="/menu" class="block hover:text-gray-400">Menu</a>
				<a href="/" class="block hover:text-gray-400">About</a>
				<a href="/admin/menu" class="block hover:text-gray-400">Contact</a>
			</nav>
		</div>
	{/if}
</header>
