<script>
	import Header from '$lib/Header/index.svelte'
	import Footer from '$lib/Footer/index.svelte';	
	import '../app.postcss';
</script>

<main>
	<div class="flex flex-col items-center justify-center w-screen h-screen">
		<div class="flex flex-col items-center justify-center w-4/12">
			<Header />
			<div class="flex flex-col items-center justify-center w-full py-5 space-y-3 border-t border-b border-gray-300">
				<slot />
			</div>
			<Footer />
		</div>
	</div>
</main>