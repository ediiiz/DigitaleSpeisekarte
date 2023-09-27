<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Info from '$lib/vars';
</script>

<div class="w-full relative">
	<img
		src="https://pmtwnaoblvfsrckhnget.supabase.co/storage/v1/object/public/produktbilder/mainpage/751da966-f1df-4e66-b237-b01d3b724529"
		alt="img"
		class="object-cover w-full max-h-[200px] md:max-h-[500px]"
	/>
	<div
		class="absolute inset-0 before:content before:block before:absolute before:w-full before:h-[20%] before:top-0 after:content after:block after:absolute after:w-full after:h-[20%] after:bottom-0"
		style="background: linear-gradient(to bottom, #1F2937 0%, transparent 100%);"
	></div>
	<div class="absolute inset-0 flex flex-col justify-center items-center">
		<Button class="text-white text-2xl md:text-3xl font-bold py-8" href="/menu"
			>Zur Speisekarte</Button
		>
		<div class="text-white text-xl font-bold p-4">Alle Gerichte auch zum Mitnehmen</div>
	</div>
</div>
<div class="bg-white p-6 max-w-md mx-auto">
	<h2 class="lg:hidden text-xl font-bold text-center">Bestellen unter:</h2>
	<div class="lg:hidden flex justify-center p-4">
		<p class="text-xl flex flex-row">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
				/></svg
			><a class="animate-pulse" href="tel:{Info.phone}">{Info.phone}</a>
		</p>
	</div>
	<h2 class="text-xl font-bold mb-6 text-center">Öffnungszeiten</h2>
	<ul>
		<li class="flex justify-between py-1">
			<span>Montag</span>
			<span>11:00 - 22:00</span>
		</li>
		<li class="flex justify-between py-1">
			<span>Dienstag</span>
			<span>11:00 - 22:00</span>
		</li>
		<li class="flex justify-between py-1">
			<span>Mittwoch</span>
			<span>11:00 - 22:00</span>
		</li>
		<li class="flex justify-between py-1">
			<span>Donnerstag</span>
			<span>11:00 - 22:00</span>
		</li>
		<li class="flex justify-between py-1">
			<span>Freitag</span>
			<span>11:00 - 22:00</span>
		</li>
		<li class="flex justify-between py-1">
			<span>Samstag</span>
			<span>11:00 - 22:00</span>
		</li>
		<li class="flex justify-between py-1">
			<span>Sonntag</span>
			<span>11:00 - 22:00</span>
		</li>
	</ul>
</div>
