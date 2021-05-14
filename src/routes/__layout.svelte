<script>
	// import Header from '$lib/Header/index.svelte';
	import Nav from '$lib/Header/Nav.svelte';
	import Footer from '$lib/Footer/index.svelte';	
	import '../app.postcss';
</script>

<Nav />

<main>
	<div class="flex flex-col items-center justify-center w-screen h-screen">
		<div class="flex flex-col items-center justify-center w-3/4 lg:w-5/12">
			<slot />
			<Footer />
		</div>
	</div>
</main>