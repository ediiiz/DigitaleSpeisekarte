<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.css';
	import type { LayoutServerData } from './$types';
	import Footer from '$lib/components/Footer.svelte';
	export let data: LayoutServerData;
	let session = data.session;
	let userType = data.userStore?.type;
</script>

<svelte:head>
	<title>Pasha Grill Köfte</title>
	<meta name="description" content="Leckere Gerichte direkt vom Grill" />
	<link
		rel="icon"
		href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9IiNGNDkwMEMiIGQ9Ik0zNSAxOWExNi45NiAxNi45NiAwIDAgMC0xLjA0LTUuODY4Yy0uNDYgNS4zODktMy4zMzMgOC4xNTctNi4zMzUgNi44NjhjLTIuODEyLTEuMjA4LS45MTctNS45MTctLjc3Ny04LjE2NGMuMjM2LTMuODA5LS4wMTItOC4xNjktNi45MzEtMTEuNzk0YzIuODc1IDUuNS4zMzMgOC45MTctMi4zMzMgOS4xMjVjLTIuOTU4LjIzMS01LjY2Ny0yLjU0Mi00LjY2Ny03LjA0MmMtMy4yMzggMi4zODYtMy4zMzIgNi40MDItMi4zMzMgOWMxLjA0MiAyLjcwOC0uMDQyIDQuOTU4LTIuNTgzIDUuMjA4Yy0yLjg0LjI4LTQuNDE4LTMuMDQxLTIuOTYzLTguMzMzQTE2LjkzNiAxNi45MzYgMCAwIDAgMSAxOWMwIDkuMzg5IDcuNjExIDE3IDE3IDE3czE3LTcuNjExIDE3LTE3eiIvPjxwYXRoIGZpbGw9IiNGRkNDNEQiIGQ9Ik0yOC4zOTQgMjMuOTk5Yy4xNDggMy4wODQtMi41NjEgNC4yOTMtNC4wMTkgMy43MDljLTIuMTA2LS44NDMtMS41NDEtMi4yOTEtMi4wODMtNS4yOTFzLTIuNjI1LTUuMDgzLTUuNzA4LTZjMi4yNSA2LjMzMy0xLjI0NyA4LjY2Ny0zLjA4IDkuMDg0Yy0xLjg3Mi40MjYtMy43NTMtLjAwMS0zLjk2OC00LjAwN0ExMS45NjQgMTEuOTY0IDAgMCAwIDYgMzBjMCAuMzY4LjAyMy43My4wNTUgMS4wOUM5LjEyNSAzNC4xMjQgMTMuMzQyIDM2IDE4IDM2czguODc1LTEuODc2IDExLjk0NS00LjkxYy4wMzItLjM2LjA1NS0uNzIyLjA1NS0xLjA5YzAtMi4xODctLjU4NC00LjIzNi0xLjYwNi02LjAwMXoiLz48L3N2Zz4="
	/>
</svelte:head>

<div class="flex flex-col min-w-[375px] min-h-[800px]">
	<Header {userType} {session} />

	<PageTransition pathname={data.pathname}>
		<main class="min-h-[500px] md:min-h-[600px]">
			<slot />
		</main>
	</PageTransition>

	<Footer />
</div>
