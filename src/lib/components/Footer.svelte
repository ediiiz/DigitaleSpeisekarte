<script lang="ts">
	import Info from '$lib/vars';
</script>

<footer class="bg-gray-800 text-white mt-10">
	<div class="container mx-auto px-8 py-4">
		<div class="flex flex-wrap gap-4 justify-center">
			<!-- Quick Links -->
			<div class="w-full sm:w-1/2 md:w-1/4 lg:text-center mt-6 sm:mt-0">
				<h5 class="text-xl font-semibold">Adresse</h5>
				<ul class="mt-2 text-base">
					<li>{Info.address.street} {Info.address.streetNumber}</li>
					<li class="mt-1">{Info.address.zipCode} {Info.address.city}</li>
				</ul>
			</div>

			<!-- Contact -->
			<div class="w-full sm:w-1/2 md:w-1/4 lg:text-center mt-6 md:mt-0">
				<h5 class="text-xl font-semibold">Kontakt</h5>
				<p class="mt-2 text-base">Email: <a href="mailto:{Info.email}"> {Info.email}</a></p>
				<p class="mt-1 text-base">Telefon: <a href="tel:{Info.phone}">{Info.phone}</a></p>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div class="text-center mt-6">
			<p class="text-sm">&copy; 2023 Pasha Grill Köfte</p>
		</div>
	</div>
</footer>
