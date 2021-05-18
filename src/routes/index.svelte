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
<img src="/edan-ben-atar.jpg" class="rounded-full w-28 mb-5" alt="">
<h1 class="text-4xl mb-2">Hi, I'm Edan! 👋</h1>
<p class="text-xl text-center">
On an a life long journey of learning.
I live in Maryland with my partner in crime, our 3-year-old superman and furball.</p>