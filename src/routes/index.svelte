<!-- <script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script> -->

<svelte:head>
	<title>Edan Ben-Atar</title>
</svelte:head>

<h1 class="text-4xl">Edan Ben-Atar</h1>
<hr class="w-16 my-8 border-gray-300">
<h3 class="text-2xl">Web Developer</h3>