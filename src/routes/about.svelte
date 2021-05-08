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
	<title>About Edan</title>
</svelte:head>

<p class="text-xl text-center">
	Hi, I'm Edan!<br>
	On an infinite life journey of learning.
	I live in Maryland with my partner, our 3-year-old superman and our furball. 🐶
</p>
